# Muhammed Abdulwahab — Portfolio (Next.js)

A Next.js 14 (App Router) + TypeScript + Tailwind CSS project. Bold, editorial
design system — warm flame orange/red, near-black, and cream — inspired by a
reference the client shared, adapted to the "systems builder" positioning:
a giant name treatment behind a portrait cutout in the hero, numbered service
rows, color-tile project cards, a bento-style highlights grid, an editorial
photo strip in About, and an FAQ accordion. Framer Motion drives scroll
reveals and the FAQ; the hero keeps its animated "live pipeline" system-trace
diagram as a signature detail.

## A note on how this was built

This project was generated in a sandboxed environment with no access to the
npm registry, so `npm install` and `next build` could not be run or verified
here. The code follows standard, current Next.js/TypeScript/Tailwind
conventions throughout, but **run a full install and build yourself before
deploying** — see "First run" below.

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

Push to GitHub and import the repo in Vercel (auto-detects Next.js), or run
`vercel --prod` from the project root.

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
  Nav.tsx, Footer.tsx             Shared chrome (Nav takes a `flameHero` prop
                                   for the home page's white-on-orange state)
  Hero.tsx                        Flame hero — name backdrop, portrait cutout,
                                   floating "live pipeline" + contact cards
  About.tsx                       Editorial photo/diagram gallery strip + philosophy
  Work.tsx                        Color-tile project cards
  Capabilities.tsx                Numbered service rows (Build/Data/Automation/AI/Product)
  Highlights.tsx                  Bento-grid highlights (real, non-fabricated facts only)
  Process.tsx, Automation.tsx,
  Experience.tsx, GithubSection.tsx,
  Resume.tsx, Contact.tsx         Home page sections
  Faq.tsx                         Accordion (Framer Motion AnimatePresence)
  CaseStudyShell.tsx,
  CaseStudyBlock.tsx              Shared case-study layout
  Reveal.tsx                      Scroll-triggered fade/slide (Framer Motion)
  AnimatedHeadline.tsx            Variable-font "materialize" animation (used
                                   on the hero's giant firstname)
  FlowPulse.tsx                   Animated dot on the "live pipeline" diagram
  CursorDot.tsx                   Flame-colored cursor follower
  ScrollProgress.tsx              Top scroll-progress bar
public/
  muhammed-cutout.png             Background-removed portrait for the hero
  muhammed-abdulwahab.jpg         Original rectangular photo (used in About gallery)
  resume.pdf                      ← add this yourself (see below)
```

## Design system

- Tokens live as CSS custom properties at the top of `app/globals.css`:
  `--flame` / `--flame-dark` / `--flame-light` / `--flame-soft` for the
  orange-red accent, `--bg` / `--bg-raised` for the cream base, `--invert-bg`
  for near-black cards/sections.
- Fonts: **Recursive** (variable, animated) for display/headings, **Inter**
  for body copy, **JetBrains Mono** for labels, tags, and metadata.
- Motion: scroll reveals and the FAQ accordion use Framer Motion; the hero's
  giant firstname animates its variable-font axes on load; a flame-colored
  cursor dot follows the pointer. The hero's "live pipeline" system-trace
  diagram (the animated node flow) is the one motion element carried over
  from the previous monochrome version by request. Everything checks
  `prefers-reduced-motion` and simplifies or disables accordingly.
- **No fabricated content.** The bento highlights, FAQ, and all copy stick to
  real, verifiable facts (project names, stated focus areas, stated
  availability) — no invented client counts, revenue, testimonials, or
  awards, even though the visual reference included some of those sections.

## The hero portrait

`public/muhammed-cutout.png` was background-removed from your uploaded photo
using a flood-fill + soft geometric fade (no external tool/API — this was
done locally in the sandbox). It reads as a clean "bust fading into color"
treatment rather than a pixel-perfect die-cut silhouette, since the shirt
was too close in tone to the background for a fully clean cutout. If you
have (or can generate) a proper cutout with a transparent background later,
just swap the file — same filename, same dimensions expected (~1103×1078).

## Before you publish — replace these placeholders

- **Contact info** — email, LinkedIn URL, GitHub profile URL in
  `components/Nav.tsx`, `components/Footer.tsx`, `components/Contact.tsx`,
  and `components/GithubSection.tsx`
- **GitHub repos** — the three placeholder cards in `components/GithubSection.tsx`
- **Experience dates** — `components/Experience.tsx`
- **`public/resume.pdf`** — add the real file
- **Case study screenshots** — the "Screenshot placeholder" blocks in each
  `app/work/*/page.tsx` file
- **`og-cover.png`** — a 1200×630 social preview image (optional)
