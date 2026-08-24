# Muhammed Abdulwahab — Portfolio (Next.js)

A real Next.js 14 (App Router) + TypeScript + Tailwind CSS project — not a
static export. Monochrome design system (black / white / gray only),
Framer Motion for scroll reveals and the scroll-progress trace, a
mix-blend-mode cursor, and a signature font animation on the hero headline
using the Recursive variable font.

## A note on how this was built

This project was generated in a sandboxed environment with no access to the
npm registry, so `npm install` and `next build` could not be run or verified
here. The code follows standard, current Next.js/TypeScript/Tailwind
conventions throughout, but **you should run a full install and build
yourself before deploying** — see "First run" below. If anything doesn't
compile, it's most likely a small, easy-to-spot issue (a missing prop, a
typo) rather than a structural one; every file is plain, readable
TypeScript/TSX, so an employer (or Claude Code) can review or fix it in
minutes.

## First run

```bash
npm install
npm run dev
```

Then open http://localhost:3000. To build for production:

```bash
npm run build
npm run start
```

## Deploying to Vercel

Push this to a GitHub repo and import it in Vercel — it auto-detects
Next.js, no config needed. Or from the project root: `vercel --prod`.

## Structure

```
app/
  layout.tsx              Root layout — fonts, metadata, cursor, scroll progress
  page.tsx                Home page — assembles all sections
  globals.css              Design system: CSS variables, component classes
  work/
    tdis-logistics/page.tsx
    globetech/page.tsx
    whatsapp-ai-automation/page.tsx
components/
  Nav.tsx, Footer.tsx            Shared chrome
  Hero.tsx, About.tsx, Work.tsx,
  Capabilities.tsx, Process.tsx,
  Automation.tsx, Experience.tsx,
  GithubSection.tsx, Resume.tsx,
  Contact.tsx                    Home page sections
  CaseStudyShell.tsx,
  CaseStudyBlock.tsx             Shared case-study layout
  Reveal.tsx                     Scroll-triggered fade/slide (Framer Motion)
  AnimatedHeadline.tsx           Hero headline font-variation animation
  FlowPulse.tsx                  Animated dot on the hero system diagram
  CursorDot.tsx                  Mix-blend-mode cursor follower
  ScrollProgress.tsx             Top scroll-progress bar
public/
  robots.txt
  resume.pdf                     ← add this yourself (see below)
```

## Design system

- All color, spacing, radius and easing tokens live as CSS custom properties
  at the top of `app/globals.css`, and are also exposed to Tailwind via
  `tailwind.config.ts` (`bg-ink`, `text-ink-soft`, `font-display`, etc.) —
  use either the CSS classes already in the file or Tailwind utilities.
- Fonts: **Recursive** (variable, animated) for display/headings, **Inter**
  for body copy, **JetBrains Mono** for labels, tags, and metadata. Loaded
  via Google Fonts in `app/layout.tsx`.
- Pure black / white / gray palette — no color accent. "Accent" moments are
  done through inversion (black buttons that invert on hover, an inverted
  full-bleed section for AI & Automation) rather than color.
- Motion: scroll reveals and the progress bar use Framer Motion; the hero
  headline animates its variable-font axes on load (a "materialising" effect
  — business language turning into a more systemised, semi-mono type); a
  cursor dot uses `mix-blend-mode: difference` to invert whatever it passes
  over. Everything checks `prefers-reduced-motion` (via Framer Motion's
  `useReducedMotion()` or a CSS media query) and simplifies or disables
  accordingly.

## Before you publish — replace these placeholders

- **Contact info** — email (`hello@example.com`), LinkedIn URL, GitHub
  profile URL in `components/Nav.tsx` (mobile menu inherits from Nav data),
  `components/Footer.tsx`, `components/Contact.tsx`, and
  `components/GithubSection.tsx`
- **GitHub repos** — the three placeholder cards in `components/GithubSection.tsx`,
  or wire the section up to the GitHub API for a live feed
- **Experience dates** — `components/Experience.tsx` has `[Add dates]`
  placeholders and one fully-placeholder role at the end; nothing there was
  invented
- **`public/resume.pdf`** — add the real file; delete `public/RESUME_PLACEHOLDER.md`
  once you do
- **Case study screenshots** — the "Screenshot placeholder" blocks in each
  `app/work/*/page.tsx` file
- **`og-cover.png`** — a 1200×630 social preview image referenced in
  `app/layout.tsx`'s metadata (optional but recommended)
- WhatsApp contact — not included; add it to `components/Contact.tsx` only
  if you want it listed publicly
