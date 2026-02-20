# UI/UX Audit and Visual Improvement Plan

## Executive summary
The site has a strong structural baseline (clear navigation, straightforward hierarchy, responsive grids, accessibility helpers), but it currently feels like a wireframe due to placeholder-heavy content, low visual rhythm, and few interaction cues. This creates a trust gap for a high-consideration B2B product.

## What is already working
- Responsive grid system and reusable UI primitives are consistent.
- Skip link, focus styles, and reduced-motion handling provide an accessibility foundation.
- Information architecture is predictable across pages.

## Highest-impact opportunities

### 1) Replace placeholders with credibility assets
- Many key sections still contain TODO placeholders and generic copy.
- Add real product imagery, screenshots, and team/support photos.
- Add trust proofs (customer logos, case-study metrics, compliance references).

**Impact:** Biggest confidence lift, especially for enterprise buyers.

### 2) Strengthen conversion hierarchy
- Primary CTA is currently repeated but not contextualized by journey stage.
- Introduce distinct CTA tiers:
  - Primary: Request quote / talk to specialist
  - Secondary: Download software / view datasheet
  - Tertiary: Read support docs
- Place short CTA strips at the end of long pages.

**Impact:** Better lead capture and lower decision friction.

### 3) Improve readability and scannability
- Long sections can feel visually uniform.
- Introduce page-specific section intros, icon-led bullet groups, and clearer chunking.
- Increase heading contrast between H2/H3 and reduce generic paragraph blocks.

**Impact:** Faster information absorption for technical evaluators.

### 4) Add stronger state and feedback design
- Interactive elements need clearer hover/active/current states.
- Add active nav indication, card/button micro-interactions, and consistent link affordances.
- Ensure visited/active states remain accessible.

**Impact:** Site feels more polished and intentional.

### 5) Build narrative consistency across pages
- Some pages feel disconnected in voice and depth.
- Use a consistent storytelling sequence per page:
  - Problem context → product capability → proof → FAQ/objection handling → CTA.

**Impact:** Better cross-page coherence and trust.

## Recommended visual direction
- Keep conservative enterprise tone, but introduce subtle depth:
  - Soft gradient accents in hero zones
  - Stronger elevation hierarchy for cards/panels
  - Cleaner nav affordances and motion (minimal, performant)
- Use a limited accent system (primary, secondary, functional) to reduce visual noise.
- Consider a tighter type scale with defined max line lengths for body copy.

## UX backlog (prioritized)

### P0 (do first)
1. Replace all TODO placeholders with production copy/media.
2. Add product photo set and software screenshot set.
3. Add social proof module (customers, deployments, outcomes).
4. Standardize CTAs and landing page conversion paths.

### P1 (next)
1. Create page templates by intent (Product, Support, Research, Download).
2. Add FAQ patterns with objection-driven answers.
3. Add comparison/spec matrix with sticky headers on desktop.
4. Add inline trust badges near quote/download actions.

### P2 (polish)
1. Add subtle animation tokens (hover, entrance, focus).
2. Tune spacing scale and typography ramps per breakpoint.
3. Add dark-mode exploratory theme (optional).

## Measurement plan
Track changes with:
- CTA click-through by page and position
- Contact-form completion rate
- Time-to-first-key-action (quote/download/support)
- Scroll depth on long pages
- Mobile navigation engagement and bounce rate

## Notes from this update
This iteration introduced foundational polish (active nav state, improved hover states, and subtle card/button depth) plus a markup correction on the homepage to support cleaner rendering and maintainability.
