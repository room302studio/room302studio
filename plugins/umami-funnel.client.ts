// Funnel events for Umami. One delegated click listener instead of hand-tagging
// every CTA, so links inside markdown content and new pages are covered too.
//
//   contact-click   any link to /contact          (from, label)
//   work-click      any link to /our-work         (from, label)
//   email-click     any mailto: link — the conversion (from, address)
//   outbound-click  any link off-site             (from, host, label)
//
// `from` is the page path the click happened on, so Umami can break each event
// down by where in the site it came from. Links that already carry
// data-umami-event are left to Umami's own handler so nothing counts twice.
export default defineNuxtPlugin(() => {
  const track = (name: string, data: Record<string, string>) =>
    (window as any).umami?.track(name, data);

  document.addEventListener("click", (e) => {
    const link = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
    if (!link || link.hasAttribute("data-umami-event")) return;

    const href = link.getAttribute("href") ?? "";
    const from = window.location.pathname;
    const label = (link.textContent ?? "").trim().slice(0, 60);

    if (href.startsWith("mailto:")) {
      return track("email-click", { from, address: href.slice(7).split("?")[0] });
    }

    const url = new URL(link.href, window.location.href);
    if (url.origin !== window.location.origin) {
      return track("outbound-click", { from, host: url.hostname, label });
    }
    if (url.pathname === "/contact") return track("contact-click", { from, label });
    if (url.pathname === "/our-work") return track("work-click", { from, label });
  }, { capture: true });
});
