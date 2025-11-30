# Agentic Coding Tutorial - Presentation App

A React-based presentation application teaching "Agentic Coding" - the art of effectively collaborating with AI coding assistants. This interactive slide deck walks through best practices, strategies, and real-world examples of working with AI to build software.

## 🎯 What You'll Learn

- **Writing Effective Instructions**: How to communicate clearly with AI coding agents
- **Utilizing MCP (Model Context Protocol)**: Leveraging AI capabilities beyond basic chat
- **Strategic Workflows**: Planning and executing development tasks with AI assistance
- **Manual Review Best Practices**: When and how to review AI-generated code

## 🚀 Quick Start

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## 🎨 Features

- **Keyboard Navigation**: Use Arrow keys, Space, Home, and End to navigate slides
- **Progress Tracking**: Visual progress bar and slide counter
- **Markdown Support**: Dynamic content loading with syntax highlighting
- **Responsive Design**: Clean, modern presentation interface
- **Vietnamese Language**: Content in Vietnamese for local audiences

## 🛠 Tech Stack

- **React 19.2** - Latest React with automatic JSX transform
- **TypeScript** - Strict mode enabled for type safety
- **Vite** - Fast build tool with HMR
- **React Compiler** - Automatic optimizations via babel-plugin-react-compiler
- **Bun** - Fast package manager and runtime

## 📁 Project Structure

```
src/
├── App.tsx              # Main presentation controller
├── App.css              # Presentation styles
├── components/          # Individual slide components
│   ├── TitleSlide.tsx
│   ├── InstructionsSlide.tsx
│   ├── WritingRulesSlide1.tsx
│   ├── WritingRulesSlide2.tsx
│   ├── MCPSlide1.tsx
│   ├── MCPSlide2.tsx
│   ├── StrategySlide1.tsx
│   ├── StrategySlide2.tsx
│   ├── ManualReviewSlide1.tsx
│   ├── ManualReviewSlide2.tsx
│   ├── ResourcesSlide.tsx
│   └── ThankSlide.tsx
└── main.tsx            # App entry point

public/
└── sample-instructions.md  # Example instruction file
```

## 🎮 Navigation Controls

| Key           | Action         |
| ------------- | -------------- |
| `→` / `Space` | Next slide     |
| `←`           | Previous slide |
| `Home`        | First slide    |
| `End`         | Last slide     |

## 🎨 Code Style

This project follows strict code style guidelines:

- **No semicolons** - Prettier configured with `semi: false`
- **Double quotes** - Consistent string formatting
- **Auto-sorted imports** - Via `@trivago/prettier-plugin-sort-imports`
- **Tailwind class sorting** - Via `prettier-plugin-tailwindcss`

Run `bun run format` to auto-format all code.

## 🧩 Adding New Slides

1. Create a new component in `src/components/` (e.g., `NewSlide.tsx`)
2. Import it in `App.tsx`
3. Add it to the `slides` array in the desired position
4. The slide will automatically integrate with navigation

Example:

```tsx
// src/components/NewSlide.tsx
export default function NewSlide() {
  return (
    <div className="slide">
      <h2>🎯 Slide Title</h2>
      <p>Content goes here...</p>
    </div>
  )
}

// In App.tsx
import NewSlide from "./components/NewSlide"

const slides = [
  TitleSlide,
  NewSlide, // Add here
  // ... other slides
]
```

## 🧪 Development Commands

```bash
bun run dev      # Start dev server with HMR
bun run build    # Type-check and build for production
bun run preview  # Preview production build
bun run lint     # Run ESLint checks
bun run format   # Auto-format with Prettier
```

## 📝 Notes

- Uses **React Compiler** for automatic optimizations (may impact build performance slightly)
- **Bun** is the required package manager - do not use npm or yarn
- Content is in **Vietnamese** - maintain language consistency when adding slides
- Global styles in `src/index.css`, presentation styles in `src/App.css`

## 📚 Related Resources

See the presentation itself for curated resources on:

- AI coding best practices
- MCP documentation
- Prompt engineering guides
- Community discussions on agentic coding

## 🤝 Contributing

When adding features or fixing bugs:

1. Follow the established code style (run `bun run format`)
2. Keep components small and focused (one slide per file)
3. Update slide order in `App.tsx` if adding new content
4. Ensure keyboard navigation continues to work
5. Test responsiveness and readability

## 📄 License

This project is open source and available for educational purposes
