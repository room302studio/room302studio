// Subtle scroll-reveal: sections/[data-reveal] fade + rise as they enter view.
// Uses IntersectionObserver (universal support). Flash-free: anything already
// on screen is revealed before the hidden state is enabled, and the CSS hidden
// state is gated on the `reveal-active` class this plugin adds — so no-JS and
// prefers-reduced-motion always render fully visible.
export default defineNuxtPlugin((nuxtApp) => {
  const SELECTOR = ".page section, [data-reveal]";
  let observer: IntersectionObserver | null = null;

  const scan = () => {
    const els = Array.from(document.querySelectorAll(SELECTOR));

    // Reveal what's already in view up front (no flash for above-the-fold)…
    const fold = window.innerHeight * 0.9;
    for (const el of els) {
      if (el.getBoundingClientRect().top < fold) el.classList.add("in");
    }
    // …then let the CSS hide everything that isn't revealed yet.
    document.documentElement.classList.add("reveal-active");

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }

    observer?.disconnect();
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer!.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    els.forEach((el) => {
      if (!el.classList.contains("in")) observer!.observe(el);
    });
  };

  nuxtApp.hook("app:mounted", () => nextTick(scan));
  nuxtApp.hook("page:finish", () => nextTick(scan));
});
