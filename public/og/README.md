# OG Images for Room 302 Studio

This directory contains Open Graph (OG) images used for social media sharing. When someone shares links to our site on social platforms like Twitter, Facebook, LinkedIn, etc., these images will be displayed.

## Image Naming Convention

Images are named to match their corresponding pages, with spaces replaced by hyphens:

- `room-302-studio.png` - Home page
- `innovation-services.png` - Services page
- `our-work.png` - Work portfolio page
- `journal.png` - Blog/Journal page
- `contact-us.png` - Contact page
- `r&d-lab.png` - Lab page

## How to Generate New Images

1. Visit `/og_generator` on the Room 302 site
2. Select the page you want to create an image for
3. Configure the background, dots, and glow as desired
4. Click "Download Image" 
5. Add the downloaded image to this directory

## Integration

These images are automatically used by the `useOgMetadata` composable, which is applied to each page. The composable converts page names to filenames and falls back to the default `/og-image.jpg` if a specific image isn't available.

## Dimensions

All images are 1200×630 pixels, the standard size for Open Graph images across most platforms.

## Image Specifications
- Dimensions: 1200x630px
- Format: PNG with transparency
- Color Space: sRGB
- DPI: 72

## Required Images
- `home.png`: Homepage OG image
- `services.png`: Services page OG image
- `work.png`: Portfolio/Work page OG image
- `blog.png`: Blog/Journal page OG image
- `contact.png`: Contact page OG image
- `lab.png`: Lab/Experiments page OG image

## Design Guidelines
- Use consistent branding elements
- Include Room 302 Studio logo
- Implement subtle gradients
- Maintain visual hierarchy
- Ensure text is legible at small sizes
- Dark mode friendly colors

## Image List Status
- [ ] home.png (Placeholder)
- [ ] services.png (Placeholder)
- [ ] work.png (Placeholder)
- [ ] blog.png (Placeholder)
- [ ] contact.png (Placeholder)
- [ ] lab.png (Placeholder)

*Note: These are placeholder images. Replace with final designs.* 