# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js website for init.partners, a consulting firm that helps early-stage startups. The site uses a file-based CMS with markdown content, Tailwind CSS for styling, and is configured for static export to GitHub Pages.

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Content**: File-based CMS using markdown files
- **Icons**: Lucide React
- **Deployment**: GitHub Pages (static export)

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (creates static export)
npm run build

# Lint code
npm run lint
```

## Architecture & Code Organization

### Directory Structure
- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - Reusable React components
- `src/lib/` - Utility functions and content loading
- `src/types/` - TypeScript type definitions
- `.pages/` - Content management (markdown files)

### Content Management System
Content is managed through markdown files in the `.pages` directory:
- `.pages/team/` - Team member profiles
- `.pages/expertise/` - Areas of expertise  
- `.pages/portfolio/` - Portfolio companies
- `.pages/blog/` - Blog posts and case studies

Content structure is defined in `.pages.yml` and loaded via functions in `src/lib/content.ts`.

### Key Components
- `Header.tsx` - Navigation with scroll-based show/hide behavior
- `ScrollReveal.tsx` - Intersection Observer-based scroll animations
- `Marquee.tsx` - Horizontal scrolling text ticker

### Styling Approach
- Uses Tailwind utility classes
- Custom animations defined in `tailwind.config.ts`
- Global styles in `src/app/globals.css`
- Design follows PureVisuals aesthetic (minimalist, modern, animation-rich)

### Static Export Configuration
- `next.config.mjs` configured with `output: 'export'`
- Images use `unoptimized: true` for GitHub Pages compatibility
- GitHub Actions workflow deploys to Pages automatically

## Content Updates

To modify content:
1. Edit markdown files in `.pages/` directories
2. Follow the frontmatter schema defined in `.pages.yml`
3. Content changes are automatically reflected after rebuild

## Deployment

The site deploys automatically to GitHub Pages via GitHub Actions when code is pushed to main branch. The workflow builds the static export and deploys to the `gh-pages` branch.