# Agentic Tutorial Project - AI Coding Agent Instructions

## Project Overview

This is a React-based presentation app teaching "Agentic Coding" - how to effectively work with AI coding assistants. Built with **React 19.2**, **TypeScript**, **Vite**, and uses the **React Compiler** for optimizations. The app is a keyboard-navigable slide deck (presentation system).

## Architecture

### Slide-Based Component Structure

- **Main Controller**: `src/App.tsx` manages the slide deck
  - Contains a `slides` array that defines presentation order
  - Handles keyboard navigation (Arrow keys, Space, Home, End)
  - Renders current slide component dynamically
  - Includes navigation UI and progress bar

- **Slide Components**: `src/components/*Slide*.tsx`
  - Each slide is a standalone functional component
  - Located in `src/components/`
  - Naming convention: `TitleSlide.tsx`, `WritingRulesSlide1.tsx`, `MCPSlide2.tsx`, etc.
  - Multi-part topics use numbered suffixes (e.g., `MCPSlide1.tsx`, `MCPSlide2.tsx`)

### Critical Pattern: Adding New Slides

When adding a new slide, you must:

1. Create the component in `src/components/` following the naming convention
2. Import it in `App.tsx`
3. Add it to the `slides` array in the desired position
4. The slide will automatically integrate with keyboard navigation and progress tracking

Example:

```tsx
// In App.tsx
import NewSlide from "./components/NewSlide"

const slides = [
  TitleSlide,
  InstructionsSlide,
  NewSlide // Add here in the desired order
  // ... other slides
]
```

## Development Commands

- **`bun run dev`** - Start development server with HMR (uses Vite)
- **`bun run build`** - Type-check with `tsc -b` then build for production
- **`bun run preview`** - Preview production build locally
- **`bun run lint`** - Run ESLint checks
- **`bun run format`** - Auto-format all code with Prettier

**Note**: This project uses **Bun** as the package manager and runtime. Use `bun` commands, not `npm` or `yarn`.

## Code Style & Conventions

### TypeScript Configuration

- **Strict mode enabled** (`strict: true`)
- **React JSX transform**: Uses automatic `react-jsx` (no need to import React)
- **Bundler module resolution**: Configured for Vite
- **Unused locals/parameters**: Enforced by TypeScript

### Formatting Rules (Prettier)

- **No semicolons** (`semi: false`)
- **Double quotes** (`singleQuote: false`)
- **No trailing commas** (`trailingComma: "none"`)
- **Arrow function parens**: Avoid when possible (`arrowParens: "avoid"`)
- **Import sorting**: Automatic via `@trivago/prettier-plugin-sort-imports`
  - Third-party modules first, then relative imports
- **Tailwind class sorting**: Automatic via `prettier-plugin-tailwindcss`

### Component Patterns

- Use **functional components** with hooks (React 19 patterns)
- **Export default** for slide components
- Keep components focused - one slide per file
- Use **inline styles** sparingly; prefer CSS classes from `App.css`

Example slide structure:

```tsx
export default function ExampleSlide() {
  return (
    <div className="slide">
      <h2>🎯 Slide Title</h2>
      <p>Content goes here...</p>
    </div>
  )
}
```

### Styling Conventions

- Global styles in `src/index.css`
- Presentation-specific styles in `src/App.css`
- Standard CSS classes: `.slide`, `.title-slide`, `.card`, `.grid-2`, `.highlight-box`, `.nav-button`
- Use emojis in headings for visual interest (e.g., `🤖`, `📚`, `💡`)
- Vietnamese language for slide content

## Special Features

### React Compiler

- Enabled via `babel-plugin-react-compiler` in Vite config
- Automatically optimizes React components
- May impact dev/build performance slightly

### Markdown Support (InstructionsSlide)

- Uses `react-markdown` with `remark-gfm` and `rehype-highlight`
- Loads content from `/public/sample-instructions.md`
- Syntax highlighting via `highlight.js`
- Toggle between overview and example view

### Navigation System

- Keyboard shortcuts: `Arrow Left/Right`, `Space`, `Home`, `End`
- Visual navigation buttons with Vietnamese labels ("← Trước", "Sau →")
- Progress bar at bottom
- Slide counter display

## File Organization

```
src/
├── App.tsx              # Main presentation controller
├── App.css              # Presentation styles
├── index.css            # Global styles
├── main.tsx             # App entry point
└── components/          # All slide components
    ├── TitleSlide.tsx
    ├── InstructionsSlide.tsx
    ├── WritingRulesSlide1.tsx
    ├── MCPSlide1.tsx
    └── ...              # Other slides

public/
└── sample-instructions.md  # Example content for InstructionsSlide
```

## Common Tasks

### Adding a New Multi-Part Slide Sequence

1. Create numbered components: `TopicSlide1.tsx`, `TopicSlide2.tsx`
2. Import all parts in `App.tsx`
3. Add them consecutively in the `slides` array
4. Ensure consistent styling with other slides

### Modifying Navigation

- Edit keyboard handlers in `App.tsx`'s `useEffect` hook
- Update button labels or styling in the JSX return
- Progress bar width calculation: `((currentSlide + 1) / slides.length) * 100`

### Styling Changes

- Presentation layout/colors: Edit `.presentation`, `.slide-container` in `App.css`
- Typography: Modify `.slide h1/h2/h3/p` rules
- Components like `.card`, `.grid-2`: Defined in `App.css`

## Integration Points

- **Vite**: Build tool, configured in `vite.config.ts`
- **ESLint**: Flat config in `eslint.config.js` with React hooks and refresh plugins
- **TypeScript**: Project references setup (`tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`)
- **Prettier**: Import sorting and Tailwind class ordering plugins

## Notes for AI Agents

- Always run `bun run format` after making changes to ensure consistent code style
- The `slides` array order directly controls presentation flow - be intentional
- Slide content is in Vietnamese; maintain language consistency
- When debugging, check browser console - no complex state management beyond React hooks
- React Compiler is active - avoid patterns that break automatic optimization
