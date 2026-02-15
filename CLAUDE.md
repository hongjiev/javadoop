# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

An open-source static blog template built with Astro 5. Supports Markdown/MDX posts, light/dark theme, and configurable site branding.

## Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Build (runs prebuild to copy posts to public/downloads/)
npm run preview   # Preview production build
```

## Architecture

**Runtime**: Astro static site generation (SSG). All pages are prerendered at build time.

**Key source paths**:
- `src/config.ts` — Site configuration (name, author, nav links, copyright, etc.)
- `src/content/posts/` — Blog posts (markdown collection, schema in `src/content/config.ts`)
- `src/pages/post/[...slug].astro` — Dynamic post rendering
- `src/pages/index.astro` — Homepage (renders `index.md` or redirects to `/post`)
- `src/layouts/PostLayout.astro` — Post page layout with TOC sidebar
- `src/layouts/BaseLayout.astro` — Base layout with navbar, footer, theme toggle
- `src/styles/global.css` — CSS variables for light/dark theming

**Content pipeline**: `scripts/copy-posts.js` runs at prebuild to copy markdown files from `src/content/posts/` to `public/downloads/` for direct download.

**Post frontmatter**: Requires `title` (string) and `date` (string or Date, normalized to YYYY-MM-DD).

## Content Language

Default UI text is in Chinese. The `lang` attribute is configurable in `src/config.ts`.
