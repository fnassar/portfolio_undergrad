# Portfolio redesign: clean rebuild with an animation layer

## Context

The portfolio was built at uni (CRA, now migrated to Vite on `vite-migration`). Fatema wants a new dark, playful vibe and rebuilt Projects and Experience sections, written to a clear code standard. A React skill was added at `.claude/skills/vercel-react-best-practices/` and applies to all new code.

Design decisions (from earlier answers):

- **Vibe:** dark & playful (the artist side forward), for a mixed software and creative audience.
- **Projects:** two tabs, **Code** and **Art**. The old "Other" projects (assisted work with Aaron Sherwood) go into Art, tagged "assisted".
  - The section is a scrolling list. A sticky side column holds **two overlaid rectangles that rotate in opposite directions as you scroll**, and their color shifts for each project.
  - Each project's colors live in the project data, so they're easy to edit.
  - A row shows the image and description. Clicking opens a popup with a geometric outline that holds the full write-up.
- **Experience:** creative and visual first, with details only on click. It starts with placeholder data that gets filled in later.

## Code standard (applies to every file)

1. **Clean code:** only comments that explain something non-obvious. No commented-out code, `console.log`, or leftover boilerplate headers like `// frontend/src/components/UserPost.js`.
2. **Small, readable components:** one component per file, aiming for **under ~120 lines**. A file that grows past that gets split into named subcomponents. No components defined inside components (vercel rule `rerender-no-inline-components`).
3. **No trivial wrapper functions:**
   - A one-line function is inlined at its call site (e.g. `onClick={() => setOpen(false)}` rather than a separate `handleClose`).
   - No nested helper functions unless they need closure state.
   - Shared logic becomes a top-level function or a hook in `hooks/`.
4. **Simplest approach first:**
   - Plain function components and plain props.
   - Data lives in `data/` and markup maps over it. No premature abstraction or memoization (vercel `rerender-simple-expression-in-memo`).
   - Conditionals use ternaries (`rendering-conditional-render`).
   - Derived values are computed during render, not in effects (`rerender-derived-state-no-effect`).
5. **Styling:**
   - CSS Modules (`Component.module.css`) next to each component.
   - Design tokens are CSS variables in `styles/tokens.css`.
   - No inline `style={{…}}` except for dynamic values like a project's color.
   - Bootstrap and react-bootstrap are removed.
6. **Animations and art are isolated in `src/animations/`.** Section components only *use* them through props (`<ScrollRects progress colors />`), so the art can be swapped or edited without touching section code.
7. **Performance (from the vercel skill):**
   - Project write-ups load with `React.lazy` (`bundle-dynamic-imports`).
   - Imports go directly to source files, with no barrel `index.js` re-exports (`bundle-barrel-imports`).
   - Scroll listeners are passive or handled through the animation library (`client-passive-event-listeners`).
   - Transforms are animated on a wrapper `div`, not on the SVG element (`rendering-animate-svg-wrapper`).
   - Third-party scripts are deferred.
8. **Naming:** PascalCase component files, camelCase hooks and data files. This fixes inconsistencies like `Projectss.jsx`, `blurDocs.jsx` and `other2 copy.jsx`.

These rules get written to `portfolio/CLAUDE.md` so future sessions follow them, and are enforced with Prettier and ESLint (including `react-hooks`, `jsx-a11y` and `no-console`). Prettier: 2-space indent, double quotes.

## Skills used during the build

**`vercel-react-best-practices`** (`.claude/skills/vercel-react-best-practices/`)

Load it at the start of every coding step. These are the rules that apply to this app. It's a client-only Vite app, so the `server-*` and Next-specific rules are skipped.

| Rule | Where it applies |
|---|---|
| `rerender-no-inline-components` | Every component is its own top-level function and file |
| `rerender-derived-state-no-effect` | Filtered project list, active project and active colors are computed during render |
| `rerender-simple-expression-in-memo` | No `useMemo` for simple filters or lookups |
| `rerender-use-ref-transient-values` | Cursor position and scroll progress live in Motion values or refs, never in `useState` |
| `rendering-activity` | The Code and Art lists sit inside `<Activity mode={…}>` (React 19.2), so switching tabs keeps images and scroll state |
| `rerender-transitions` | Tab switches are wrapped in `startTransition` |
| `rendering-conditional-render` | Ternaries, not `&&` |
| `rendering-hoist-jsx` | Static JSX (icons, decorative shapes) is hoisted to module level |
| `rendering-animate-svg-wrapper` | ScrollRects and GeoOutline rotate or scale a wrapping `div`, not the `<svg>` |
| `rendering-svg-precision` | Hand-written SVG paths are rounded to 1 decimal place |
| `rendering-content-visibility` | Project rows use `content-visibility: auto` |
| `bundle-dynamic-imports` | Write-ups and the OGL `Background` load with `React.lazy` |
| `bundle-preload` | A project's write-up chunk starts loading on row hover or focus |
| `bundle-barrel-imports` | Imports go to source files, with no `index.js` re-exports |
| `bundle-defer-third-party`, `rendering-script-defer-async` | Iconify gets `defer`. The Elfsight, jQuery, Bootstrap and Popper CDN scripts are removed |
| `client-passive-event-listeners` | Any manual scroll or touch listener is `{ passive: true }` |
| `js-early-exit`, `js-set-map-lookups` | Hash-to-project lookup uses a `Map` built once at module level |

**Other skills:**

- **`/simplify`:** run after each build-order step, to catch leftover nesting, long files and duplicate code against the code standard.
- **`/code-review`:** run once on the finished `redesign` branch, before handing back.
- **`/run-skill-generator`:** after the redesign, for the `run-portfolio` skill (see Later).

## Folder structure

```
portfolio/src/
  main.jsx                  entry (renamed from index.jsx): router + providers only
  App.jsx                   composes the sections, nothing else
  styles/
    tokens.css              colors, fonts, spacing
    global.css              resets, body, typography
  data/
    projects.js             every project: id, title, category, year, tags, summary,
                            image, colors {a, b}, links, writeup (lazy import)
    experience.js           roles (placeholders + TODO markers)
    socials.js              email, LinkedIn, GitHub, resume
  sections/                 one folder per page section
    hero/Hero.jsx
    about/About.jsx
    projects/ProjectsSection.jsx, ProjectTabs.jsx, ProjectList.jsx, ProjectRow.jsx
    experience/ExperienceSection.jsx, ExperienceNode.jsx
    contact/Contact.jsx
  components/               reusable UI with no art in it
    Nav.jsx, MobileMenu.jsx
    Modal.jsx               portal, Esc, backdrop, focus, scroll lock
    Tag.jsx, LinkButton.jsx
  writeups/                 the old IM_Docs pages, rebuilt from small blocks
    blocks/Section.jsx, Gallery.jsx, VideoEmbed.jsx, PeopleList.jsx, Timeline.jsx
    MorseCode.jsx, DigitalDoodle.jsx, LiveCodingBlur.jsx, SlenderMan.jsx, FifiRobot.jsx
  animations/               ← all motion and art, editable on their own
    ScrollRects.jsx         the two counter-rotating rectangles
    GeoOutline.jsx          the popup's animated geometric frame
    Background.jsx          page background art (replaces tsparticles)
    TextReveal.jsx          hero / heading text effect
    Cursor.jsx              custom cursor
  hooks/
    useActiveIndex.js       which project row is in view (IntersectionObserver)
    useHashModal.js         open or close the popup from #project-<id>
```

- The 581-line `SlenderMan.jsx` and 378-line `fifiRobot.jsx` become short files built from `writeups/blocks/*`. Their text content stays the same.
- Old routes (`/morseCode`, etc.) redirect to `/#project-<id>`.
- These are deleted: `Projectss.jsx`, `projects.json`, `Opening.jsx`, `other1/2`, `other2 copy.jsx`, `comments.txt`, `logo.svg`, and the IM_Docs folder once its content is moved.

## Animation libraries

You're probably thinking of **OGL**, the small WebGL library behind many React Bits backgrounds. Here are the realistic options:

| Library | Good for | Size | Notes |
|---|---|---|---|
| **Motion** (`motion`, formerly Framer Motion) | UI motion: scroll-linked transforms (`useScroll`/`useTransform`), color transitions, tab underline, modal enter/exit, SVG path drawing | ~30–40 kB used | Simplest React API (declarative props). Many React Bits components use it. |
| **GSAP** + ScrollTrigger | Timeline-heavy, precisely sequenced scroll scenes, SplitText | ~25 kB core + plugins | Now fully free, plugins included. More powerful but imperative (refs + `useGSAP`), so harder to read. Some React Bits text effects use it. |
| **OGL** | WebGL art: shader backgrounds, particles, flowing gradients | ~25 kB | Used by React Bits backgrounds (Particles, Iridescence, Aurora, Galaxy…). Much lighter than three.js. |
| three.js / React Three Fiber | Full 3D scenes | ~150 kB+ | Overkill here. |
| Lenis | Smooth scrolling | ~4 kB | Optional polish. Pairs with either Motion or GSAP. |

**Recommendation: Motion + OGL.**

- **Motion** handles all UI and scroll motion: ScrollRects, GeoOutline, tabs, modal, Experience nodes and text reveal. It's the easiest to read, which fits rule 4.
- **OGL** handles only `animations/Background.jsx`. It replaces tsparticles, which accounts for most of the current 500 kB bundle.
- GSAP is only added if a specific React Bits effect we pick needs it.

## React Bits (reactbits.dev) candidates

React Bits components get copied into `src/animations/` through their CLI or copy-paste. They're then restyled with our tokens and cleaned up to the code standard.

- **Background (OGL):** *Particles* (closest to the current look), *Iridescence* or *Galaxy*. Pick one.
- **Hero text:** *SplitText* or *BlurText* for the bilingual name. *RotatingText* to cycle "Software Developer ↔ Interactive Media Artist".
- **Project rows:** *TiltedCard* (hover tilt on the image) or *SpotlightCard*.
- **Popup and buttons:** *StarBorder* or *ClickSpark*.
- **Cursor:** *TargetCursor* or *BlobCursor*, replacing `react-creative-cursor`.
- **Experience:** *Magnet* on the nodes. *GlareHover* on the opened detail.

The final picks get confirmed visually during the build.

## Build order

1. Create the `redesign` branch from `vite-migration`.
   - Install `motion` and `ogl`; uninstall `bootstrap`, `react-bootstrap`, `tsparticles`, `@tsparticles/*`, `react-creative-cursor`, `history`, `axios` (unused) and `dotenv`.
   - Add Prettier and ESLint config.
   - Write `portfolio/CLAUDE.md` with the code standard.
2. `styles/`, `data/`, and `components/` (Nav, Modal, Tag, LinkButton). Clean up `index.html` (keyword stuffing, CDN jQuery/Bootstrap/Popper, Elfsight).
3. `animations/` (ScrollRects, GeoOutline, Background, TextReveal, Cursor), then `sections/` (hero, about, projects, experience, contact).
4. `writeups/`: rebuild the 5 IM docs from blocks, then wire up `useHashModal` and the redirects.
5. Delete the old files and run Prettier and ESLint across the project.

Every step starts by loading `vercel-react-best-practices` and ends with `/simplify`. Once all steps are done, `/code-review` runs over the whole branch.

## Verification

1. Run `npm run lint` and `npm run build`. Both must be clean, and the bundle should shrink from ~509 kB.
2. Line counts: `find src -name '*.jsx' | xargs wc -l` shows no file over ~120 lines (data files excepted).
3. Run `npm run dev` and drive it with a headless Playwright script, saving screenshots:
   - The hero renders with the background.
   - Scrolling Projects rotates the two rectangles in opposite directions, and their colors change per project.
   - The Code/Art tabs filter the list.
   - The popup opens with the outline drawing in, the Morse Code write-up shows, and Esc closes it.
   - `/morseCode` redirects and opens the popup.
   - Clicking an Experience node opens its details.
   - At mobile width (375px) there's no horizontal scroll.
4. Change one project's `colors` in `data/projects.js` and confirm the rectangles pick it up.
5. Commit on `redesign`. Merging stays the user's call.

## Later (not in this pass)

- The `run-portfolio` skill from `/run-skill-generator`: a Playwright driver plus `SKILL.md`. It was interrupted; do it after the redesign so it documents the new app.
- Adding more Code projects and the real Experience content.
