# Implementation Plan: Frenzy Data Hub Landing Page

Building a modern, responsive, and futuristic landing page for "Frenzy Data Hub" using React, Tailwind CSS (v4), and Framer Motion for animations.

## Scope Summary
- **Futuristic Theme**: Dark blue, gold, and neon glow palette.
- **Sections**: Hero, Pricing (MTN, Telecel, AirtelTigo), Additional Features, Footer.
- **Visuals**: Glassmorphism, animated light streaks, glowing buttons, and mobile-first design.
- **Interactive**: Floating WhatsApp button, hover effects, and smooth entry animations.
- **Data Persistence**: None (Frontend-only).

## Affected Areas
- `src/App.tsx`: Main structure and section orchestration.
- `src/index.css`: Global styles, custom neon utility classes, and background animations.
- `src/components/`: New components for Navbar, Hero, PricingCard, Features, and Footer.
- `src/assets/`: Image placeholders (will use Unsplash/Lucide for assets).

## Assumptions & Open Questions
- **Image Assets**: Will use a high-quality placeholder or Unsplash URL for the "stylish young African male model" if a specific file isn't provided.
- **Icons**: Using `lucide-react` for telecom and feature icons.
- **Currency**: Ghanaian Cedi (ghc) as specified in requirements.

## Implementation Phases

### Phase 1: Foundation & Styling (frontend_engineer)
- Update `index.css` with the "Frenzy" color palette (Dark Blue: `#000b1d`, Gold: `#FFD700`, Neon Cyan/Blue: `#00f3ff`).
- Configure Tailwind v4 custom properties for glassmorphism and neon shadows.
- Set up global background animation (moving light streaks/grid).

### Phase 2: Core Components (frontend_engineer)
- **Navbar**: Transparent-to-solid glassmorphism effect.
- **Hero Section**:
    - Bold "DATA BUNDLE OFFERS" text with gradient.
    - Subheading with "60% Off".
    - Image container for the model.
    - Glowing CTA buttons.
- **Footer**: Business info, contact details (0597222464), and secondary services list.

### Phase 3: Pricing & Features (frontend_engineer)
- **Pricing Cards**:
    - Component for Glassmorphism cards.
    - Specific styles for MTN (Yellow), Telecel (Red), and AirtelTigo (Blue).
    - List data bundles and prices as requested.
- **Features Section**: Icons and descriptions for "Instant delivery", "24/7 Support", etc.
- **Floating WhatsApp Button**: Sticky position with pulse animation.

### Phase 4: Animations & Polish (quick_fix_engineer)
- Add `framer-motion` entry animations (fade-in-up) for sections.
- Add hover scaling and glow intensity changes to cards and buttons.
- Ensure mobile responsiveness across all sections (1-column on mobile, 3-column on desktop for pricing).
- Implement animated counters for "Additional Features" or stats.

### Phase 5: SEO & Final Check (quick_fix_engineer)
- Update `index.html` title and meta tags for "Frenzy Data Hub".
- Ensure fast loading by optimizing asset usage.

## Technical Details
- **Palette**:
  - Background: `bg-[#000b1d]`
  - Gold: `text-[#FFD700]` or `text-amber-400`
  - Neon: `shadow-[0_0_15px_rgba(0,243,255,0.5)]`
- **Animations**: `framer-motion` for scroll triggers.
- **Fonts**: `Geist` (or default Sans) with high-weight headings.
