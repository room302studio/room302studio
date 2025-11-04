---
draft: true
title: "My 2025 Prototyping Toolkit"
description: "The essential tools and frameworks I use to rapidly prototype data visualizations, web apps, and interactive experiences in 2025."
date: 2025-01-15T10:00:00-05:00
author: EJ Fox
authorEmail: ejfox@room302.studio
tags: [tools, process, prototyping]
category: process
featured: false
---

# My 2025 Prototyping Toolkit

Speed matters when you're building prototypes. Whether I'm validating an idea for a client, exploring a dataset, or testing an interaction pattern, having the right toolkit can mean the difference between shipping in a day versus shipping in a week.

Here's what I'm using in 2025 to move fast without breaking things.

## Data Layer

### CSV and JSON
Still the workhorses. CSV for tabular data, JSON for everything else. Human-readable, git-friendly, universally supported.

### Datasette
For when CSV isn't enough but you don't want to set up a full database. Datasette turns SQLite files into instant APIs with a web interface. Perfect for exploratory data analysis and sharing datasets with collaborators.

### Supabase
When I need a real database with auth and real-time subscriptions. The Postgres foundation means I'm not locked in, and the DX is excellent.

## Visualization

### Observable & Plot
Observable Plot has become my default for quick data visualization. The declarative API means I can iterate fast, and the Observable platform makes it trivial to share work-in-progress with clients.

### D3 + Vue
For production visualizations that need to live in a larger application. Vue's reactivity model plays nicely with D3's data joins, and the component model keeps complex visualizations maintainable.

### QGIS
Still the king for geospatial analysis. When I need to process shapefiles, create dot density maps, or do serious cartography, QGIS is the tool.

## Application Framework

### Nuxt + Vue
Nuxt 3 has been a game-changer. File-based routing, built-in SSR, and the ecosystem of modules mean I can go from zero to deployed in hours, not days.

The developer experience is exceptional—auto-imports, TypeScript support, and hot module replacement that actually works.

### Tailwind CSS
After years of writing custom CSS, Tailwind's utility-first approach finally clicked. I can prototype layouts in real-time without context-switching between files.

### Tachyons
I still reach for Tachyons for quick prototypes. The class names map directly to CSS properties, which makes it easier to think spatially while designing.

## Development Environment

### VS Code + GitHub Copilot
Copilot has fundamentally changed how I code. It's not about writing code for me—it's about reducing the friction of boilerplate and keeping me in flow state.

Combined with Claude Code for complex refactoring and architecture discussions, I can move faster than ever.

## Deployment

### Netlify
Push to main, get a URL. That's the entire deployment process. The preview deployments for pull requests are essential for client review.

### Cloudflare Pages
For projects that need edge computing or KV storage. The Workers platform is incredibly powerful when you need more than static hosting.

## The Meta-Tool: GitHub

Everything lives in git. Every experiment, every prototype, every client project. The ability to travel back in time, branch fearlessly, and collaborate asynchronously is fundamental to how I work.

## What's Changed Since 2022?

The biggest shifts:
- **AI integration**: Copilot and Claude are now essential tools, not experiments
- **Observable Plot**: Went from "interesting" to "default choice" for data viz
- **Nuxt 3**: The v3 rewrite made this a production-ready choice
- **Simplified hosting**: Moved everything to Netlify/Cloudflare, killed complex server configs

## The Principle: Choose Boring Technology

Most of these tools have been in my toolkit for years. That's intentional.

Reaching for battle-tested tools means:
- Spending time solving problems, not fighting frameworks
- Stack Overflow answers that actually work
- Libraries that won't be deprecated next month
- Patterns that transfer between projects

The goal isn't to use the newest tech. It's to prototype so fast that the tools become invisible.

---

**Want to see these tools in action?** Check out our [livestreams](/blog/livestreaming-our-process) where we build prototypes in real-time.
