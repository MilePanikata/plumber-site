# Design Guidelines: Feexaro Handyman Service Website Clone

## Design Approach
**Reference-Based Approach**: Professional service industry website inspired by Feexaro's established patterns, combining trust-building elements with modern service marketing aesthetics. Draw from service industry leaders like HomeAdvisor and Thumbtack for credibility-focused design while maintaining Feexaro's distinctive visual identity.

## Core Design Elements

### A. Color Palette

**Primary Colors:**
- Navy Blue: 220 45% 15% (primary background, headers)
- Deep Blue: 215 60% 25% (section backgrounds, cards)
- White: 0 0% 100% (text on dark, card backgrounds)

**Accent Colors:**
- Bright Blue: 210 100% 55% (interactive elements, links)
- Orange/Yellow: 35 95% 55% (CTA buttons, highlights, star ratings)
- Light Gray: 210 15% 95% (light section backgrounds)
- Medium Gray: 210 10% 60% (secondary text)

**Dark Mode**: Maintain navy blue foundation with slightly lighter variations for card backgrounds (220 40% 20%)

### B. Typography

**Font Families:**
- Primary: 'Inter' or 'Manrope' (modern, professional sans-serif)
- Headings: 'Poppins' or 'DM Sans' (bold, impactful)

**Type Scale:**
- Hero Headline: 56px/64px, bold (mobile: 36px/44px)
- Section Headings: 40px/48px, bold (mobile: 28px/36px)
- Subheadings: 24px/32px, semi-bold
- Body Text: 16px/24px, regular
- Small Text: 14px/20px, regular

### C. Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: py-16 md:py-24 lg:py-32
- Card spacing: p-6 md:p-8
- Grid gaps: gap-6 md:gap-8

**Container System:**
- Max width: max-w-7xl
- Content sections: max-w-6xl
- Horizontal padding: px-4 md:px-6 lg:px-8

### D. Component Library

**Navigation Header:**
- Fixed/sticky navigation with white background, subtle shadow
- Logo left, navigation center, phone + CTA button right
- Mobile: Hamburger menu with slide-out drawer
- Height: 80px desktop, 64px mobile

**Hero Section:**
- Large background image (professional plumber at work, tool closeup, or modern home interior)
- Dark navy overlay (opacity 85-90%) for text readability
- Decorative gear/tool icons positioned in corners (subtle, semi-transparent)
- Centered content with headline, subheadline, CTA button
- Height: 85vh minimum
- Include trust badge strip below (ratings, review count, certifications)

**Trust Indicators Bar:**
- Horizontal layout with star ratings, review count, Trustpilot badge, quality commitment badge
- Light background section immediately after hero
- Icons with accompanying text labels

**Service Cards:**
- 3-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Card structure: Image top (aspect ratio 4:3), title, description, hover overlay
- Rounded corners (8px), subtle shadow
- Hover: Lift effect (translateY -4px) and enhanced shadow

**Statistics Display:**
- Large percentage numbers (72px, bold, bright blue)
- Label text below (16px, medium gray)
- Decorative background shapes (abstract curved elements in lighter navy)

**Process Steps:**
- 4-column grid with icon, step number, title, description
- Circular icons with bright blue background
- Large step numbers (64px, semi-transparent)
- Connecting lines or arrows between steps (optional visual enhancement)

**Testimonial Cards:**
- White card background with subtle shadow
- 5-star rating display at top
- Quote text (18px, italic)
- Customer photo (circular, 64px) with name and location
- Carousel navigation: Dots below, arrows on sides

**Team Member Cards:**
- Photo with hover overlay revealing social share icon
- Name and role below photo
- Social media links appear on hover
- 4-column grid (desktop), 3-column (tablet), 2-column (mobile)

**Footer:**
- Dark navy background
- 4-column layout: Company info, Quick links, Services, Contact info
- Newsletter signup form with orange CTA button
- Social media icons
- Copyright bar at bottom

### E. Imagery Strategy

**Hero Section:**
- Large hero image: Professional plumber working, modern tools, or satisfied customer in renovated space
- Image treatment: Dark overlay for text contrast
- Decorative elements: Semi-transparent gear/wrench icons as background decoration

**Service Cards:**
- Professional photography of each service (bathroom fixtures, basement work, kitchen plumbing, etc.)
- Consistent aspect ratio (4:3)
- Bright, well-lit images showcasing quality work

**Team Members:**
- Professional headshots on light gray or subtle gradient background
- Consistent framing and lighting
- Approachable, friendly expressions

**Client Logos:**
- Grayscale logos for uniformity
- Marquee animation for continuous scroll

**Background Decorations:**
- Abstract curved shapes in sections (light navy, semi-transparent)
- Subtle geometric patterns for visual interest without distraction

### F. Interactive Elements

**Buttons:**
- Primary CTA: Orange/yellow background (35 95% 55%), white text, rounded (6px), shadow on hover
- Secondary: Outline style with bright blue border, blue text
- Buttons on images: Blurred background (backdrop-blur-md), white text, white border
- Size: px-8 py-3 (desktop), px-6 py-2.5 (mobile)

**Links:**
- Bright blue color, underline on hover
- Smooth color transition (200ms)

**Cards:**
- Hover states: Subtle lift (4px) and shadow enhancement
- Smooth transitions (300ms ease-in-out)

**Forms:**
- Input fields: White background, light gray border, bright blue focus ring
- Rounded corners (4px)
- Placeholder text in medium gray

### G. Animations

Use sparingly and purposefully:
- Scroll-triggered fade-in for sections (opacity + translateY)
- Marquee scroll for client logos (smooth, infinite)
- Testimonial carousel (smooth slide transitions)
- Hover effects on cards and buttons (transform, shadow)

### H. Responsive Breakpoints

- Mobile: < 768px (single column, stacked layouts)
- Tablet: 768px - 1024px (2-column grids)
- Desktop: > 1024px (3-4 column grids, full layouts)

## Page Structure

1. **Fixed Navigation** (logo, menu, phone, CTA)
2. **Hero Section** (large image, headline, CTA, decorative elements)
3. **Trust Bar** (ratings, badges, client photos strip)
4. **Client Logos Marquee** (scrolling brand logos)
5. **Services Grid** (6 service cards with images)
6. **About/Experience** (statistics, description, decorative shapes)
7. **Work Process** (4-step process cards)
8. **Marquee Banner** ("Changing rooms" text scroll with star icons)
9. **Testimonials** (carousel with 3 visible cards)
10. **Team Members** (grid of 5 team cards)
11. **Footer** (multi-column with newsletter, links, contact)

This design creates a professional, trustworthy handyman service website that balances credibility-building elements with modern aesthetics and clear calls-to-action.