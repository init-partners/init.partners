# init.partners Website

A modern, responsive website for init.partners consulting firm built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, minimalist design inspired by PureVisuals aesthetic
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Optimized for fast loading and smooth animations
- **Content Management**: File-based CMS using markdown files
- **Animations**: Smooth scroll animations and interactive elements
- **Static Export**: Configured for GitHub Pages deployment

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Content**: Markdown with gray-matter
- **Deployment**: GitHub Pages

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Content Management

Content is managed through markdown files in the `.pages` directory:

- `.pages/team/` - Team member profiles
- `.pages/expertise/` - Areas of expertise
- `.pages/portfolio/` - Portfolio companies
- `.pages/blog/` - Blog posts and case studies

## Building for Production

To create a production build:

```bash
npm run build
```

This will generate a static export in the `out` directory, ready for deployment to GitHub Pages.

## Deployment

The site is automatically deployed to GitHub Pages when code is pushed to the main branch via GitHub Actions.

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Homepage
├── components/          # React components
│   ├── Header.tsx       # Navigation header
│   ├── Marquee.tsx      # Scrolling text ticker
│   └── ScrollReveal.tsx # Scroll animations
├── lib/                 # Utility functions
│   └── content.ts       # Content loading functions
└── types/               # TypeScript type definitions
    └── content.ts       # Content type definitions
```

## License

© 2024 init.partners. All rights reserved.