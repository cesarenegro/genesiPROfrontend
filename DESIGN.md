# GENESI OPT2 (`frontend-opt2`) — Design & Motion Engineering Rules

Design-engineering guardrails derived from `emilkowalski/skills` for the Minotti-inspired GENESI & VELA v2 frontend (`genesi-web`, branch `frontend-opt2`). Keep every change aligned with silent, editorial precision.

---

## 1. Motion Tokens (`src/app/globals.css`)

Never use raw built-in `ease-in` on UI transitions or scatter ad-hoc bezier curves. Use the shared `:root` tokens:

- `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)` — entrances, exits, dropdowns, accordion expansions, press feedback
- `--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1)` — on-screen movement / morphing
- `--ease-drawer: cubic-bezier(0.32, 0.72, 0, 1)` — full-screen menu curtain (`FullMenu`)

---

## 2. Duration & Frequency Budgets

| Surface | Target Duration | Rule |
| :--- | :--- | :--- |
| Press feedback (`:active`) | `100–160ms` | `active:scale-[0.97]` (`--ease-out`) on tappable buttons/links |
| UI state swaps, Header solid/transparent, Filter tabs | `150–220ms` | Explicit properties only; never block interaction |
| Route transitions (`.page-enter`) | `220–240ms` | Subtle `opacity` + `translateY(6px)` with `--ease-out` |
| Accordions (`FullMenu`) | `260ms` | `grid-template-rows` + `--ease-out` |
| Dialogs / Lightbox (`@base-ui/react/dialog`) | Enter `200ms`, Exit `150ms` | `@starting-style` / `[data-ending-style]` from `scale(0.96)` + `opacity: 0` (never `scale(0)`); keep `transform-origin: center` on centered modals |
| Full-screen Menu (`FullMenu`) | Enter `450ms` (`--ease-drawer`), Exit `300ms` (`--ease-out`) | One entrance per container; **no uniform per-row stagger** |
| Editorial photography hover zoom | `450–550ms` (`--ease-out`) | Subtle `scale-[1.03]`; never `1000–1400ms` |
| Hero initial settle / copy rise | `.hero-settle` `1.2s`, `.rise-in` `0.65s` (delay `60ms`) | H1 copy arrives immediately after paint |

---

## 3. Performance Hard Rules (`60 / 120fps`)

1. **Never write `transition: all` or Tailwind `transition-all`.** Always list exact properties (e.g. `transition-[border-color,color,transform]`).
2. **Animate `transform` and `opacity` only.** Never animate `width`, `height`, `gap`, `margin`, `top`, `left`, `box-shadow`, or full-viewport `filter: brightness()`.
   - Documented exceptions: `clip-path: inset()` on `FullMenu`, `grid-template-rows` on accordions, and `filter: blur(2px)` during short `200ms` gallery crossfades (`.gallery-swap`).
3. **Refresh-rate independent `SmoothScroll`:** Always use elapsed `dt` (`1 - Math.exp(-damping * dt)`) so 60Hz and 120Hz displays match. Any modal/overlay must pause and restore `window.__genesiScroll`.
4. **Reduced motion (`prefers-reduced-motion: reduce`):** Remove spatial movement (`transform`, `clip-path`, `scroll-cue`), keep gentle `150–180ms` `opacity` fades.

---

## 4. Mobile-Native Checklist

- **Viewport (`src/app/[locale]/layout.tsx`):** `viewportFit: 'cover'`, `interactiveWidget: 'resizes-content'`, `themeColor` matched to `#1e1e1e` / `#141414`. Never set `user-scalable=no` or `maximum-scale=1`.
- **Prevent iOS auto-zoom:** Every `<input>`, `<select>`, and `<textarea>` must stay `>= 16px` (`text-base md:text-xs` on compact desktop toolbars). Add `enterKeyHint` and `autoComplete` where appropriate.
- **Viewport heights:** Use `100svh` for hero and sticky `.stack-panel` bands (prevents scroll jump); use `100dvh` / `max-h-[92dvh]` for inner page wrappers and modal viewports.
- **Safe areas:** Pad fixed top bars with `env(safe-area-inset-top, 0px)` and bottom bars/dialogs/footer with `env(safe-area-inset-bottom, 0px)`. Sticky sub-navs (`VelaCategoryNav`) must offset by `calc(var(--header-h) + var(--topbar-h) + env(safe-area-inset-top, 0px))`.
- **Touch ergonomics:** `-webkit-tap-highlight-color: transparent`, `touch-action: manipulation` on `button, a, [role="button"]`, `user-select: none` on controls only (never `body`), hit targets `>= 44x44px`, and never lock essential captions behind `:hover` only.
- **Lightbox gestures:** Support horizontal touch swipe dismissal/paging with velocity check (`Math.abs(dx) / dt > 0.11`) and `touch-pan-y`.

---

## 5. Dialogs, Numbers & Text Robustness

- **Modals & Lightboxes:** Use `@base-ui/react/dialog` (`ProjectsGallery`, `VelaShowerModal`, `VelaHardwareSection`, `VelaHandlesSection`) rather than hand-rolled `createPortal` overlays so focus trapping, Escape, scroll lock, and exit transitions work reliably.
- **Typography & Overflow:** Apply `tabular-nums` on dynamic counters and millimetric dimension tables; apply `break-words [overflow-wrap:anywhere]` on SKUs, SVG filenames, and long strings; cap editorial lead paragraphs at `max-w-[65ch]`.

---

## 6. What Must NOT Animate

- Category filter pills and live search result updates across VELA and Projects grids (changes are instant).
- Locale switching (`IT / EN / FR / DE`).
- Keyboard arrow paging (`ArrowLeft` / `ArrowRight`) inside the Projects lightbox.
- Static catalog hardware cards (never add infinite `animate-pulse` / shimmer loops).
