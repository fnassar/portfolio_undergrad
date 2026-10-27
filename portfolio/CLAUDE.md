# Portfolio: code standard

Vite + React 19 single-page portfolio. Animation libraries: **Motion** (`motion/react`) for UI and scroll motion, **OGL** for WebGL background art.

## Commands

- `npm run dev`: dev server at http://localhost:5173
- `npm run build`: production build into `dist/`
- `npm run lint`: ESLint (must pass)
- `npm run format`: Prettier

## Rules

1. **Clean code.** Comments only where something is non-obvious. No commented-out code and no `console.log`.
2. **Small components.** One component per file, under ~120 lines. A file past that gets split into named subcomponents. Never define a component inside another component.
3. **No trivial wrapper functions.**
   - A one-line function is inlined at the call site (`onClick={() => setOpen(false)}`).
   - No nested helpers unless they need closure state.
   - Shared logic goes in `src/hooks/` or a top-level function.
4. **Simplest approach first.**
   - Plain props.
   - Data lives in `src/data/` and markup maps over it.
   - No `useMemo`/`useCallback` for cheap work.
   - Derive values during render, not in effects.
   - Ternaries for conditional JSX.
5. **Styling.**
   - CSS Modules (`Component.module.css`) next to the component.
   - Tokens live in `src/styles/tokens.css`.
   - Inline `style` only for dynamic values like a project's colors.
6. **Animations and art live in `src/animations/` only.** Sections pass data in through props. They never contain animation logic.
7. **Performance.** Follow `.claude/skills/vercel-react-best-practices` (repo root):
   - Lazy-load write-ups and WebGL.
   - Import directly from source files, never through barrel files.
   - Animate a wrapper `div`, not the `<svg>`.
   - Keep fast-changing values in Motion values or refs, not in state.
8. **Naming.** PascalCase for component files, camelCase for hooks and data files.

## Structure

```
src/
  main.jsx, App.jsx
  styles/       tokens.css, global.css
  data/         projects.js, experience.js, socials.js
  sections/     hero, about, projects, experience, contact
  components/   reusable UI with no art in it (Nav, Modal, Tag, LinkButton)
  writeups/     project write-ups, built from writeups/blocks/*
  animations/   all motion and art
  hooks/        shared hooks
```

## Editing content

- **Projects:** `src/data/projects.js`. The `colors: { a, b }` field sets the two rotating rectangles' colors while that project is in view.
- **Experience:** `src/data/experience.js`.
