// Funnel events for Umami. One delegated click listener instead of hand-tagging
// every CTA, so links inside markdown content and new pages are covered too.
//
//   contact-click   any link to /contact          (from, label)
//   work-click      any link to /our-work         (from, label)
//   email-click     any mailto: link — the conversion (from, address)
//   email-copy      the email address copied to the clipboard (from, address)
//   outbound-click  any link off-site             (from, host, label)
//   read-half       halfway through a case study or blog post (from)
//   read-finished   reached the end of one        (from)
//   form-submit     contact form sent — fired from pages/contact.vue
//
// `from` is the page path the event happened on, so Umami can break each event
// down by where in the site it came from. Links that already carry
// data-umami-event are left to Umami's own handler so nothing counts twice.
const EMAIL = /[\w.+-]+@room302\.studio/i;

// Pages with a long-form <article class="prose"> worth measuring.
const READABLE = /^\/(our-work\/(client-work|internal)|blog)\/.+/;

export default defineNuxtPlugin((nuxtApp) => {
  const track = (name: string, data: Record<string, string>) =>
    (window as any).umami?.track(name, data);
  const from = () => window.location.pathname;

  // First touch of the visit (landing page incl. utm_ params, and referrer),
  // so a contact-form lead records where the person originally came from.
  try {
    if (!sessionStorage.getItem("r302-first-touch")) {
      sessionStorage.setItem("r302-first-touch", JSON.stringify({
        landing: window.location.pathname + window.location.search,
        referrer: document.referrer,
      }));
    }
  } catch {}

  document.addEventListener("click", (e) => {
    const link = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
    if (!link || link.hasAttribute("data-umami-event")) return;

    const href = link.getAttribute("href") ?? "";
    const label = (link.textContent ?? "").trim().slice(0, 60);

    if (href.startsWith("mailto:")) {
      return track("email-click", { from: from(), address: href.slice(7).split("?")[0] });
    }

    const url = new URL(link.href, window.location.href);
    if (url.origin !== window.location.origin) {
      return track("outbound-click", { from: from(), host: url.hostname, label });
    }
    if (url.pathname === "/contact") return track("contact-click", { from: from(), label });
    if (url.pathname === "/our-work") return track("work-click", { from: from(), label });
  }, { capture: true });

  // Webmail users can't use mailto:, so they copy the address instead. Without
  // this, those leads are invisible.
  document.addEventListener("copy", () => {
    const address = window.getSelection()?.toString().match(EMAIL)?.[0];
    if (address) track("email-copy", { from: from(), address: address.toLowerCase() });
  });

  // Read depth: two invisible markers inside the article, one at the midpoint
  // and one at the very end. Each fires once per page view.
  let observer: IntersectionObserver | null = null;
  nuxtApp.hook("page:finish", () => {
    observer?.disconnect();
    document.querySelectorAll("[data-read-marker]").forEach((el) => el.remove());

    const path = from();
    const article = document.querySelector("article.prose") as HTMLElement | null;
    if (!READABLE.test(path) || !article) return;

    observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        track((entry.target as HTMLElement).dataset.readMarker!, { from: path });
        observer!.unobserve(entry.target);
      }
    });

    if (getComputedStyle(article).position === "static") article.style.position = "relative";
    for (const [name, top] of [["read-half", "50%"], ["read-finished", "100%"]]) {
      const marker = document.createElement("div");
      marker.dataset.readMarker = name;
      marker.setAttribute("aria-hidden", "true");
      marker.style.cssText = `position:absolute;left:0;top:${top};width:1px;height:1px;pointer-events:none;`;
      article.appendChild(marker);
      observer.observe(marker);
    }
  });
});
