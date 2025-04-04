# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## OG Image Generator

The project includes a built-in Open Graph image generator at `/og_generator`. This tool helps create consistent social media preview cards for all pages.

### Features
- Dynamic text with IBM Plex Sans font
- Gradient backgrounds with preset options
- Subtle animated preview with 302 floating dots using Perlin noise
- Watermarked logo
- Downloads high-resolution (1200x630) PNG files

### Usage
1. Navigate to `/og_generator`
2. Select a page from the dropdown
3. Choose colors:
   - Use the "Minimal" preset for dark monotone
   - Use the "Primary" preset for brand colors
   - Use "Random" to explore theme color combinations
   - Or manually pick gradient colors
4. Click "Download Image" to save

### Technical Notes
- Uses `html2canvas` for image generation
- Implements `simplex-noise` for dot animation
- Maintains consistent branding with theme color palette
- Exports at 2x scale for retina displays
