# Muhammed Abdulwahab — Portfolio (Next.js)

A Next.js 14 (App Router) + TypeScript + Tailwind CSS project. Bold, editorial
design system — warm flame orange/red, near-black, and cream — with a giant
name treatment behind a portrait cutout in the hero, numbered service rows,
color-tile project cards, a bento-style highlights grid, an editorial photo
strip in About, and a working FAQ accordion. Framer Motion drives scroll
reveals and the FAQ; the hero keeps its animated "live pipeline" system-trace
diagram as a signature detail. Display type is **Bodoni Moda**, a free,
commercially-licensed variable luxury serif (Google Fonts).

This revision is a content-accuracy pass over the previous version: every
placeholder, fake repo card, and unverified claim has been replaced with real
information, and the copy has been rewritten throughout for tone.

## A note on how this was built

This project was generated in a sandboxed environment with no access to the
npm registry, so `npm install` and `next build` could not be run or verified
here. The code follows standard, current Next.js/TypeScript/Tailwind
conventions throughout, and every file has been manually reviewed (brace
balance, import resolution, internal route/link resolution, image references)
but **run a full install and build yourself before deploying** — see
"First run" below.

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
  resume.pdf                      Real resume, already wired into the Resume section
  og-cover.png                    Generated Open Graph / social-preview image
```

## Design system

- Tokens live as CSS custom properties at the top of `app/globals.css`:
  `--flame` / `--flame-dark` / `--flame-light` / `--flame-soft` for the
  orange-red accent, `--bg` / `--bg-raised` for the cream base, `--invert-bg`
  for near-black cards/sections.
- Fonts: **Bodoni Moda** (variable luxury serif, free/commercial via Google
  Fonts) for display/headings, **Inter** for body copy and small UI chrome
  (nav, footer, FAQ questions — kept sans-serif at small sizes since a
  Didone serif's thin hairlines get illegible below ~20px), **JetBrains
  Mono** for labels, tags, and metadata.
- Motion: scroll reveals and the FAQ accordion use Framer Motion; the hero's
  giant firstname animates Bodoni Moda's optical-size/weight axes on load; a
  flame-colored cursor dot follows the pointer. The hero's "live pipeline"
  system-trace diagram (the animated node flow) is a signature detail kept
  by request across redesigns. Everything checks `prefers-reduced-motion`
  and simplifies or disables accordingly.
- **No fabricated content.** All copy, the GitHub repo cards, and the bento
  highlights stick to real, verifiable facts (actual repo names/descriptions
  pulled from each project's README, stated focus areas, stated
  availability). No invented client counts, revenue, stars, testimonials,
  or awards.

## Fonts: licensing note

Three sets of display fonts were explored during this project (Lenia Sans /
Corify / Luxurio previews, then Before Modern / Casko Luxury / Modern
Heritage demo files). The demo font files that were uploaded are explicitly
licensed **personal use only, no commercial use** — they are not included or
referenced anywhere in this codebase. The site uses **Bodoni Moda** instead,
which has the same luxury-serif character and is free for commercial use
(SIL Open Font License, served via Google Fonts). If you own commercial
licenses for Lenia Sans, Corify, or any of the other previewed fonts, they
can be swapped in via the `@font-face`/Google Fonts `<link>` in
`app/layout.tsx` and the `--font-display` variable in `app/globals.css`.

## The hero portrait

`public/muhammed-cutout.png` was background-removed from the uploaded photo
using a flood-fill + soft geometric fade (no external tool/API — done
locally). It reads as a clean "bust fading into color" treatment rather than
a pixel-perfect die-cut silhouette, since the shirt was too close in tone to
the original background for a fully clean cutout. Swap the file for a
proper transparent-background cutout later if you get one (same filename,
same dimensions expected, ~1103×1078).

## Real content — nothing left to fill in

Every placeholder from earlier drafts has been replaced:

- Contact details (`components/Contact.tsx`, `Footer.tsx`, `Nav.tsx`,
  `GithubSection.tsx`) use the real email, LinkedIn, and GitHub profile.
- The three GitHub repo cards show the real repositories (`Tdislogistics`,
  `Globe-Tech`, `fudur`) with descriptions grounded in each repo's actual
  README — no fabricated stars or invented descriptions.
- `public/resume.pdf` is the real, generated resume — the Resume section's
  buttons work.
- Experience entries use real roles and organizations; unknown employment
  dates are omitted entirely rather than shown as placeholders.
- `metadataBase` points at the real deployed URL
  (`https://moh-portfolio-seven.vercel.app`).

If you want to double-check anything before sending this to a recruiter, the
one item genuinely worth a second look is the **functional titles** used for
the TDIS and One Acre Fund Nigeria roles in `components/Experience.tsx`
("Systems & Automation", "Business Development & Operations") — these are
descriptive, not necessarily your official job titles. Swap in the real
ones if they differ.
