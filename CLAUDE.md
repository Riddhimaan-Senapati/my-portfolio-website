# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 15, React 19, TypeScript, and Tailwind CSS. The site is hosted on Vercel and showcases professional experience, projects, skills, certifications, and contact information.

## Development Commands

```bash
# Development server (uses Turbopack for faster builds)
npm run dev

# Production build
npm run build

# Start production server (must build first)
npm start

# Lint the codebase
npm run lint
```

## Architecture

### Component-Based Structure

The application follows a single-page architecture with section-based components. All content sections are rendered on the main page (`app/page.tsx`) in a specific order:

1. Header (navigation)
2. Hero (introduction)
3. About Me
4. Previous Experience
5. Skills
6. Certifications
7. Projects
8. GitHub Stats
9. Contact

### shadcn/ui Integration

This project uses **shadcn/ui** components (configured in `components.json`). UI components are located in `components/ui/` and follow the shadcn/ui pattern:

- Import path aliases are configured: `@/components`, `@/lib`, `@/components/ui`
- The `cn()` utility function in `lib/utils.ts` combines `clsx` and `tailwind-merge` for className management
- Components use Radix UI primitives under the hood
- Icon library: Lucide React

When adding new shadcn/ui components, they should be placed in `components/ui/` and use the established patterns.

### Theme System

The site implements a three-way theme system (light/dark/system) using `next-themes`:

- Theme configuration is in `app/layout.tsx` via `ThemeProvider`
- CSS variables for theming are defined in `app/globals.css`
- The `ThemeSwitcher` component (in `components/theme-switcher.tsx`) provides the UI toggle
- Theme colors use HSL format with CSS custom properties (see `tailwind.config.ts`)

### Styling Approach

- **Tailwind CSS v4** with CSS variables for theming
- Base color scheme: neutral
- Custom CSS properties for colors, border radius, and theme values
- The `tailwindcss-animate` plugin is enabled for animations

### Next.js Configuration

- **Images**: Image optimization is disabled (`unoptimized: true`) in `next.config.ts`
- **Font**: Uses Inter font from Google Fonts (configured in `app/layout.tsx`)
- **App Router**: Uses Next.js 15's app directory structure
- **React Server Components**: Enabled by default (`rsc: true` in components.json)

## Key Patterns

### Adding New Sections

To add a new portfolio section:

1. Create a new component in `components/[section-name].tsx`
2. Import and add it to `app/page.tsx` in the desired order
3. Use the Card component from `components/ui/card.tsx` for consistency
4. Ensure responsive design using Tailwind's responsive classes

### Component Styling

All components use Tailwind CSS utility classes with the `cn()` helper for conditional styling. Example pattern:

```tsx
import { cn } from '@/lib/utils'

<div className={cn("base-classes", conditionalClass && "conditional-classes")} />
```

### Type Safety

The project uses TypeScript with strict mode. Key types are imported from Next.js (`Metadata`, `NextConfig`) and component libraries. Maintain type safety when adding new features.

## Deployment

The site is deployed on Vercel. Production builds are triggered automatically on push to the main branch.
