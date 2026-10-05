# Room 302 Studio

The website for [Room 302 Studio](https://room302.studio) — a studio building data
visualizations, interactive tools, and prototypes. We've made election graphics for the
AP, mapped coral reefs for WCS, and supported a studio member's indie game covered by
Fast Company.

Built with [Nuxt](https://nuxt.com), [Nuxt Content](https://content.nuxt.com) for the
blog/work/team, and [Nuxt UI](https://ui.nuxt.com). Content lives as markdown under
`content/`.

## Develop

```bash
yarn install
yarn dev          # http://localhost:3302
```

## Build

```bash
yarn build        # production build
yarn preview      # preview the production build locally
yarn generate     # static prerender
```

## Project layout

| Path | What |
|------|------|
| `pages/` | Routes (home, services, work, blog, lab, contact) |
| `components/` | Shared Vue components |
| `content/` | Markdown: `blog/`, `members/`, `our-work/` |
| `layouts/` | Page layouts (default, blog, work) |
| `composables/` | Shared composables |
| `public/` | Static assets |

## Authoring content

Scaffold new markdown entries:

```bash
yarn new:blog       # new blog post
yarn new:project    # new work entry
yarn new:member     # new team member
```

## OG image generator

A built-in Open Graph card generator lives at `/og_generator` — pick a page, choose
colors, and download a 1200×630 PNG. Uses `html2canvas` + `simplex-noise` for the
animated 302 dot background.
