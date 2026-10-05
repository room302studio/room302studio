/**
 * Composable for adding Open Graph metadata to pages
 * Uses page-specific OG images when available, with fallback to default
 */
export const useOgMetadata = (pageName, description = null) => {
  // Format page name to match file naming convention
  const formattedPageName = pageName
    ? pageName.toLowerCase().replace(/\s+/g, "-")
    : "room-302-studio";

  // Build the image URL
  const baseUrl = "https://room302.studio";
  const pageImagePath = `/og/${formattedPageName}.png`;

  // NOTE: this used to probe the OG image with `new Image()` client-side to
  // decide whether to fall back to defaultImagePath. That downloaded the full
  // OG image in every visitor's browser on every page load — and via a relative
  // URL, so it hit the current origin rather than baseUrl. It never worked
  // either: `onerror` is async, but the result was read synchronously on the
  // very next line, so the fallback could never have been selected.
  //
  // OG images are consumed by crawlers reading the meta tag, so the browser
  // never needs to load one. If a page's image is genuinely missing, the right
  // fix is to add the file or pass the correct pageName.
  const ogImagePath = pageImagePath;

  // Page-specific description or default
  const metaDescription =
    description ||
    "Room 302 Studio — Data visualization and interactive studio. We build maps, graphics, and tools that turn complex data into something people understand.";

  // Set page metadata with useHead composable
  useHead({
    title: pageName || "Room 302 Studio",
    meta: [
      // Basic metadata
      { name: "description", content: metaDescription },

      // Open Graph / Facebook
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${baseUrl}${useRoute().path}` },
      { property: "og:title", content: pageName || "Room 302 Studio" },
      { property: "og:description", content: metaDescription },
      { property: "og:image", content: `${baseUrl}${ogImagePath}` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: `${pageName || "Room 302 Studio"} - ${metaDescription}`,
      },

      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:url", content: `${baseUrl}${useRoute().path}` },
      { name: "twitter:title", content: pageName || "Room 302 Studio" },
      { name: "twitter:description", content: metaDescription },
      { name: "twitter:image", content: `${baseUrl}${ogImagePath}` },
    ],
    link: [
      // Canonical URL
      { rel: "canonical", href: `${baseUrl}${useRoute().path}` },
    ],
  });
};
