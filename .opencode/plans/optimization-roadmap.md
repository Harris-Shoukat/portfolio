# Portfolio Optimization Roadmap

## Goal
Refactor the portfolio codebase for efficiency, reusability, and maintainability — section by section.

## Progress

### [x] Navbar (`src/app/components/navbar/Navbar.tsx`)
- [x] Extract reusable subcomponents
  - `src/hooks/useScroll.ts` — RAF-throttled scroll threshold hook
  - `src/hooks/useLockBody.ts` — body scroll lock hook
  - `src/app/components/navbar/NavLink.tsx` — nav link (desktop + mobile variants)
  - `src/app/components/navbar/MobileMenu.tsx` — full-screen mobile menu
- [x] Optimize event handlers and effects — moved into hooks
- [x] Clean up styling patterns — Navbar.tsx reduced from 157 → 86 lines

### [x] Hero (`src/app/components/hero/Hero.tsx`)
- [x] Extract `Terminal.tsx` — self-contained terminal with `useTypewriter` hook
- [x] Extract `HeroContent.tsx` — animated text/buttons with staggerChildren variants
- [x] Simplify animations — replaced manual delays with `staggerChildren: 0.1`
- [x] Hero.tsx reduced from 210 → 42 lines

### [x] BentoDashboard (`src/app/components/bento/BentoDashboard.tsx`)
- [x] Extract `AnimatedTerminal.tsx` — terminal typing with `TerminalLine` sub-component
- [x] Extract `BentoCard.tsx` — reusable card wrapper + header (used 6×, saves ~50 lines of repetition)
- [x] Extract `SkillBar.tsx` → `src/components/ui/SkillBar.tsx` (shared UI component)
- [x] Extract `variants.ts` — shared motion variants
- [x] Cleaned up inline Workflow steps data, removed redundant per-card containers
- [x] BentoDashboard.tsx reduced from 376 → 200 lines

### [x] Projects (`src/app/components/projects/Projects.tsx`)
- [x] Extract `BrowserFrame.tsx` — web browser chrome component
- [x] Extract `MobileFrame.tsx` — phone frame mockup component
- [x] Extract `CodePreview.tsx` — code viewer with syntax highlighting
- [x] Extract `ProjectCard.tsx` — full project card with all content
- [x] Extract `Tag.tsx` → `src/components/ui/Tag.tsx` (shared)
- [x] Extract `projects-data.ts` — data + types separated from UI
- [x] Projects.tsx reduced from 312 → 57 lines

### [x] About (`src/app/components/about/About.tsx`)
- [x] Extract `SectionHeader.tsx` → `src/components/ui/SectionHeader.tsx` (reusable heading pattern with tag + gradient text)
- [x] About.tsx reduced from 127 → 94 lines

### [x] Contact (`src/app/components/contact/Contact.tsx`)
- [x] Extract `ContactForm.tsx` — form with floating labels + submit state
- [x] Extract `ContactLink.tsx` — reusable contact card (icon + label + value + action)
- [x] Extract `CopyButton.tsx` — copy-to-clipboard button
- [x] Use `SectionHeader` with new `subtitle` prop
- [x] Contact.tsx reduced from 249 → 67 lines

### [x] Footer (`src/app/components/footer/Footer.tsx`)
- [x] Extract `FooterLink.tsx` — reusable footer link with external prop
- [x] Extract `Logo.tsx` → `src/components/ui/Logo.tsx` (shared between Navbar + Footer)
- [x] Footer.tsx reduced from 46 → 26 lines

### [x] ScrollToTop (`src/app/components/ScrollToTop.tsx`)
- [x] Extract `useScrollHysteresis.ts` — RAF-throttled hook with show/hide thresholds
- [x] ScrollToTop reduced from 53 → 28 lines

### [x] SplashScreen (`src/app/components/SplashScreen.tsx`)
- [x] Already clean (39 lines) — kept as-is

### [x] Shared UI Components (`src/components/ui/`)
- [x] Created `src/lib/constants.ts` — centralized SOCIAL URLs and NAV_LINKS
- [x] Deleted 3 unused components: `dotted-map.tsx`, `scroll-based-velocity.tsx`, `text-animate.tsx`
- [x] Updated all files to use shared constants (Footer, Contact, Hero/Terminal, BentoDashboard, Navbar)
- [x] `number-ticker.tsx` kept — still in use

### [x] Layout (`src/app/layout.tsx`)
- [x] Already clean (38 lines) — no changes needed
