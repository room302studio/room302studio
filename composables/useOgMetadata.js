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
  const defaultImagePath = "/og-image.jpg";

  // Create an image object to test if the OG image exists
  // This is done client-side since we're using SSR: false
  let useDefaultImage = false;
  if (process.client) {
    const img = new Image();
    img.onerror = () => {
      useDefaultImage = true;
      console.warn(`OG image for "${pageName}" not found, using default image`);
    };
    img.src = pageImagePath;
  }

  // Use the page image or fall back to default
  const ogImagePath = useDefaultImage ? defaultImagePath : pageImagePath;

  // Page-specific description or default
  const metaDescription =
    description ||
    "Room 302 Studio - Innovation lab that turns concepts into reality.";

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
