---
name: Catriel Bartezaghi Portfolio System
colors:
  surface: '#151B2E'
  surface-dim: '#0f1418'
  surface-bright: '#343a3e'
  surface-container-lowest: '#0a0f12'
  surface-container-low: '#171c20'
  surface-container: '#1b2024'
  surface-container-high: '#252b2e'
  surface-container-highest: '#303539'
  on-surface: '#dee3e8'
  on-surface-variant: '#bdc8d1'
  inverse-surface: '#dee3e8'
  inverse-on-surface: '#2c3135'
  outline: '#87929a'
  outline-variant: '#3e484f'
  surface-tint: '#7bd0ff'
  primary: '#8ed5ff'
  on-primary: '#00354a'
  primary-container: '#38bdf8'
  on-primary-container: '#004965'
  inverse-primary: '#00668a'
  secondary: '#cebdff'
  on-secondary: '#381385'
  secondary-container: '#4f319c'
  on-secondary-container: '#bea8ff'
  tertiary: '#ffc176'
  on-tertiary: '#472a00'
  tertiary-container: '#f1a02b'
  on-tertiary-container: '#613b00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c4e7ff'
  primary-fixed-dim: '#7bd0ff'
  on-primary-fixed: '#001e2c'
  on-primary-fixed-variant: '#004c69'
  secondary-fixed: '#e8ddff'
  secondary-fixed-dim: '#cebdff'
  on-secondary-fixed: '#21005e'
  on-secondary-fixed-variant: '#4f319c'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb960'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#0B1020'
  on-background: '#dee3e8'
  surface-variant: '#303539'
  background-soft: '#111827'
  surface-elevated: '#1D263B'
  text-primary: '#F8FAFC'
  text-secondary: '#CBD5E1'
  text-muted: '#94A3B8'
  primary-hover: '#0EA5E9'
  primary-soft: rgba(56, 189, 248, 0.14)
  secondary-soft: rgba(167, 139, 250, 0.14)
  success: '#22C55E'
  success-soft: rgba(34, 197, 94, 0.12)
  border: rgba(148, 163, 184, 0.18)
typography:
  headline-5xl:
    fontFamily: Geist
    fontSize: 4rem
    fontWeight: '700'
    lineHeight: '1.1'
  headline-4xl:
    fontFamily: Geist
    fontSize: 2.75rem
    fontWeight: '700'
    lineHeight: '1.2'
  headline-3xl:
    fontFamily: Geist
    fontSize: 2rem
    fontWeight: '600'
    lineHeight: '1.3'
  headline-2xl:
    fontFamily: Geist
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: '1.4'
  body-xl:
    fontFamily: Geist
    fontSize: 1.25rem
    fontWeight: '400'
    lineHeight: '1.6'
  body-lg:
    fontFamily: Geist
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.6'
  body-base:
    fontFamily: Geist
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Geist
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: '1.5'
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: -0.01em
  label-xs:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1120px
  section-desktop: 8rem
  section-mobile: 4.5rem
  gutter: 1.5rem
  card-padding: 2rem
  space-1: 0.25rem
  space-2: 0.5rem
  space-3: 0.75rem
  space-4: 1rem
  space-6: 1.5rem
  space-8: 2rem
  space-12: 3rem
  space-16: 4rem
  space-24: 6rem
---

# Portfolio Design Guide — Catriel Bartezaghi

## 1. Goal

Design a personal portfolio website for Catriel Bartezaghi, a Computer Engineer and Software Developer from Argentina.

The portfolio should communicate:

- Reliability
- Technical depth
- Practical problem solving
- Business-oriented software development
- Backend/full-stack experience
- Clean engineering and maintainability

The website should feel professional, modern, and trustworthy. It should not feel like a generic student portfolio or a flashy template with no substance.

---

## 2. Target Audience

The website is mainly for:

- Recruiters
- Engineering managers
- Technical leads
- International companies hiring backend/full-stack developers
- Potential freelance or contract clients

The design should make it easy to quickly understand:

1. Who Catriel is.
2. What kind of problems he solves.
3. What technologies he uses.
4. What real projects he has worked on.
5. How to contact him.

---

## 3. Brand Personality

The visual identity should feel:

- Professional
- Clear
- Technical
- Calm
- Reliable
- Modern
- Slightly premium
- Practical, not exaggerated

Avoid:

- Overly playful visuals
- Too many animations
- Generic “tech bro” aesthetics
- Fake 3D complexity
- Too much neon
- Too much text in the hero
- Cartoon illustrations

The website should look like it belongs to a developer who works on real business systems, not just landing page experiments.

---

## 4. Visual Direction

### General Style

Use a dark theme with subtle gradients and clean cards.

Recommended style:

- Dark background
- Soft radial gradients
- Glass-like or elevated cards
- Rounded corners
- Clear hierarchy
- Minimal but polished animations
- Code-inspired visual details

The design should feel close to:

- Modern SaaS website
- Developer portfolio
- Engineering personal brand
- Clean startup landing page

---

## 5. Color System

Use design tokens instead of hardcoded random values.

### Base Colors

```css
--color-background: #0B1020;
--color-background-soft: #111827;
--color-surface: #151B2E;
--color-surface-elevated: #1D263B;

--color-text-primary: #F8FAFC;
--color-text-secondary: #CBD5E1;
--color-text-muted: #94A3B8;

--color-border: rgba(148, 163, 184, 0.18);
```

### Accent Colors

Primary accent:

```css
--color-primary: #38BDF8;
--color-primary-hover: #0EA5E9;
--color-primary-soft: rgba(56, 189, 248, 0.14);
```

Secondary accent:

```css
--color-secondary: #A78BFA;
--color-secondary-soft: rgba(167, 139, 250, 0.14);
```

Success / highlight:

```css
--color-success: #22C55E;
--color-success-soft: rgba(34, 197, 94, 0.12);
```

### Usage Rules

- Use the primary accent for main CTAs, important links, and small highlights.
- Use the secondary accent for decorative gradients and secondary labels.
- Do not use too many bright colors at the same time.
- Keep most of the interface neutral and let the accent colors guide attention.

---

## 6. Typography

Use a modern sans-serif font.

Recommended options:

- Inter
- Geist
- Satoshi
- Manrope
- Plus Jakarta Sans

Optional monospace font for code/details:

- JetBrains Mono
- Fira Code
- IBM Plex Mono

### Type Scale

```css
--font-size-xs: 0.75rem;
--font-size-sm: 0.875rem;
--font-size-base: 1rem;
--font-size-lg: 1.125rem;
--font-size-xl: 1.25rem;
--font-size-2xl: 1.5rem;
--font-size-3xl: 2rem;
--font-size-4xl: 2.75rem;
--font-size-5xl: 4rem;
```

### Typography Rules

- Hero headline should be large, direct, and readable.
- Avoid long paragraphs.
- Use short descriptions with strong meaning.
- Use muted text for secondary information.
- Use monospace only for small labels, tags, or code-like details.

---

## 7. Layout

### Page Width

```css
--container-max-width: 1120px;
```

Use a centered container with generous horizontal padding.

### Spacing Scale

```css
--space-1: 0.25rem;
--space-2: 0.5rem;
--space-3: 0.75rem;
--space-4: 1rem;
--space-6: 1.5rem;
--space-8: 2rem;
--space-12: 3rem;
--space-16: 4rem;
--space-24: 6rem;
```

### Section Spacing

- Desktop sections: 96px to 128px vertical spacing.
- Mobile sections: 64px to 80px vertical spacing.
- Cards should have enough internal padding: 24px to 32px.

---

## 8. Border Radius and Shadows

```css
--radius-sm: 0.5rem;
--radius-md: 0.75rem;
--radius-lg: 1rem;
--radius-xl: 1.5rem;
--radius-2xl: 2rem;
```

Use:

- `1rem` for small cards.
- `1.5rem` for main cards.
- `2rem` for hero visuals or large containers.

Shadow:

```css
--shadow-card: 0 20px 50px rgba(0, 0, 0, 0.28);
--shadow-soft: 0 10px 30px rgba(0, 0, 0, 0.18);
```

Avoid harsh shadows.

---

## 9. Navigation

The navbar should be simple and sticky or fixed.

### Items

- Home
- About
- Projects
- Skills
- Contact

### Navbar Style

- Transparent or semi-transparent dark background.
- Slight blur effect.
- Thin bottom border.
- Clear active/hover state.

Example:

```text
Catriel Bartezaghi        About  Projects  Skills  Contact
```

On mobile, collapse into a menu button.

---

## 10. Hero Section

### Purpose

Immediately explain who Catriel is and why he is valuable.

### Layout

Desktop:

- Left column: headline, subtitle, CTAs, small badges.
- Right column: visual card with tech stack, project highlights, or code-inspired UI.

Mobile:

- Stacked layout.
- Text first.
- Visual card below.

### Hero Copy

Headline:

```text
Building reliable software for real business workflows.
```

Subtitle:

```text
I’m a Computer Engineer and Software Developer focused on backend logic, web applications, automation, and maintainable systems.
```

Supporting label:

```text
Full Stack Developer · Backend-oriented · Argentina
```

CTA buttons:

- View Projects
- Contact Me

Secondary links:

- GitHub
- LinkedIn
- Resume

### Hero Visual Ideas

Use a mock technical card showing:

```text
Current focus
Backend systems
Business workflows
Automation
Database-driven applications
CI/CD and maintainability
```

Or a code-like card:

```js
const developer = {
  name: "Catriel Bartezaghi",
  focus: ["Backend", "Full Stack", "Business Systems"],
  values: ["Reliability", "Maintainability", "Clear communication"]
}
```

---

## 11. About Section

### Goal

Show professional identity without sounding too generic.

### Suggested Copy

```text
I enjoy building software that solves concrete business problems. My work usually involves backend logic, database-driven applications, internal tools, process automation, and integrations between systems.

I have experience working with PHP, Laravel, MySQL, JavaScript, WordPress, Docker, GitLab CI/CD, and API integrations. I’m especially interested in systems where reliability, maintainability, and business context matter.
```

### Design

Use two columns:

Left:

- Short narrative.
- Professional summary.

Right:

- Key facts card.

Example facts:

```text
Computer Engineer
Backend / Full Stack Developer
Experience with business systems
Based in Argentina
Open to remote opportunities
```

---

## 12. Skills Section

Group skills into cards.

### Backend

- PHP
- Laravel
- MySQL
- REST APIs
- PHPUnit
- Database migrations
- Business logic

### Frontend

- JavaScript
- jQuery
- Bootstrap
- WordPress
- HTML
- CSS
- Tailwind basics

### DevOps & Tools

- Docker
- Git
- GitLab CI/CD
- Linux
- Composer
- NPM

### Automation & AI

- OpenAI API
- Twilio
- Workflow automation
- Natural language interfaces
- API integrations

### Software Quality

- Testing
- Integration tests
- Migration validation
- Code conventions
- Maintainability
- Incremental refactoring

### Design Rule

Each skill card should include:

- Icon or small visual indicator.
- Category title.
- Short description.
- Skill tags.

Avoid showing only a huge list of logos.

---

## 13. Featured Projects Section

Show 3 strong projects.

The goal is not only to list technologies, but to explain the problem solved.

### Project Card Structure

Each project card should include:

- Title
- Short description
- Problem
- Solution
- Impact
- Tech stack
- Optional links

---

### Project 1

Title:

```text
WhatsApp Natural Language Finance Assistant
```

Description:

```text
A Laravel-based system that integrates OpenAI API and Twilio to register financial operations from WhatsApp messages using natural language.
```

Problem:

```text
Users needed a faster and more natural way to register financial operations without manually filling complex forms.
```

Solution:

```text
Implemented a WhatsApp-based flow that interprets natural language messages and converts them into structured financial records.
```

Impact:

```text
Reduced friction in data entry and showed how AI can be integrated into real business workflows.
```

Tech stack:

```text
Laravel · PHP · MySQL · OpenAI API · Twilio · WhatsApp
```

---

### Project 2

Title:

```text
Business Intranet Modules
```

Description:

```text
Development of internal modules for operational workflows, including traceability, inventory, production support, and data-driven business processes.
```

Problem:

```text
Operational teams needed reliable internal tools to support business-critical workflows.
```

Solution:

```text
Built and maintained modules focused on business rules, database consistency, and practical user workflows.
```

Impact:

```text
Helped improve operational visibility and support internal processes with custom software.
```

Tech stack:

```text
PHP · MySQL · JavaScript · Internal Tools · Business Logic
```

---

### Project 3

Title:

```text
CI/CD and Migration Validation Pipeline
```

Description:

```text
Implementation and improvement of GitLab CI/CD workflows to validate PHP syntax, database migrations, integration tests, and prevent risky production changes.
```

Problem:

```text
Database changes and legacy code updates needed stronger validation before reaching production.
```

Solution:

```text
Improved CI/CD checks to validate syntax, migrations, and integration tests before merging changes.
```

Impact:

```text
Reduced integration risks and improved confidence when deploying changes.
```

Tech stack:

```text
GitLab CI/CD · Docker · PHPUnit · MySQL · PHP · Automation
```

---

## 14. Work Approach Section

Create 4 cards.

### Card 1

Title:

```text
Understand before coding
```

Text:

```text
I like to understand the business context first, so the technical solution fits the real problem.
```

### Card 2

Title:

```text
Keep it maintainable
```

Text:

```text
I prefer simple, readable solutions that future developers can understand and extend.
```

### Card 3

Title:

```text
Improve legacy systems carefully
```

Text:

```text
I focus on incremental improvements, reducing risk while modernizing existing systems.
```

### Card 4

Title:

```text
Validate and communicate
```

Text:

```text
I value testing, clear notes, and communication so changes are easier to review and trust.
```

---

## 15. Experience Section

Optional, but recommended.

Use a timeline style.

### Example

```text
Software Developer — Serfe
2025 — Present

Working on business systems, internal tools, WordPress platforms, backend workflows, technical SEO tasks, CI/CD improvements, and integrations.
```

```text
Software Developer — Cipax
2024

Worked with Laravel, FilamentPHP, MySQL, OpenAI API, and Twilio to develop accounting and automation features.
```

Keep this section concise. The detailed version can be in the resume.

---

## 16. Contact Section

### Goal

Make the next step obvious.

### Suggested Copy

```text
Interested in working together or learning more about my work?
```

Secondary copy:

```text
I’m open to backend, full-stack, and software engineering opportunities, especially where business logic, data, and maintainability matter.
```

Buttons:

- Email Me
- LinkedIn
- GitHub
- Download Resume

---

## 17. Interaction Design

Use subtle interactions.

Recommended:

- Button hover lift.
- Card hover border glow.
- Smooth scroll.
- Small fade-in animations.
- Project cards with hover state.
- Tech tags with soft background.

Avoid:

- Heavy scroll effects.
- Too much parallax.
- Animations that delay reading.
- Random particles everywhere.
- Sound effects.

---

## 18. Responsive Design

### Desktop

- Hero: two columns.
- Project cards: 3-column grid.
- Skills: 2 or 4-column grid.
- About: two columns.

### Tablet

- Hero can remain two columns if space allows.
- Cards can become 2 columns.

### Mobile

- Single-column layout.
- Navbar collapses.
- Buttons stack or wrap.
- Hero headline should remain readable.
- Avoid tiny tags or overflowing code blocks.

---

## 19. Accessibility

The design must be readable and accessible.

Rules:

- Maintain strong color contrast.
- Do not rely only on color to communicate meaning.
- Use visible focus states.
- Buttons and links must have clear labels.
- Font sizes should not be too small.
- Avoid long text blocks.
- Images need meaningful alt text.
- Respect reduced-motion preferences.

---

## 20. SEO Basics

Recommended metadata:

### Title

```text
Catriel Bartezaghi — Software Developer
```

### Description

```text
Portfolio of Catriel Bartezaghi, a Computer Engineer and Software Developer focused on backend logic, web applications, automation, and maintainable business systems.
```

### Open Graph Title

```text
Catriel Bartezaghi — Software Developer
```

### Open Graph Description

```text
Backend-oriented software developer building reliable web applications, internal tools, and automation solutions.
```

---

## 21. Content Tone

The copy should sound:

- Professional
- Clear
- Confident
- Honest
- Direct
- Not exaggerated

Avoid phrases like:

- “10x developer”
- “Rockstar programmer”
- “Passionate ninja”
- “I build the future”
- “World-class expert”

Prefer phrases like:

- “I build reliable software systems”
- “I solve business problems with practical software”
- “I focus on maintainable backend logic”
- “I work with real operational workflows”

---

## 22. Suggested Page Structure

```text
Navbar
Hero
About
Skills
Featured Projects
Work Approach
Experience
Contact
Footer
```

Footer content:

```text
© 2026 Catriel Bartezaghi
Software Developer · Argentina
GitHub · LinkedIn · Email
```

---

## 23. Design Tokens Summary

```css
:root {
  --color-background: #0B1020;
  --color-background-soft: #111827;
  --color-surface: #151B2E;
  --color-surface-elevated: #1D263B;

  --color-text-primary: #F8FAFC;
  --color-text-secondary: #CBD5E1;
  --color-text-muted: #94A3B8;

  --color-primary: #38BDF8;
  --color-primary-hover: #0EA5E9;
  --color-primary-soft: rgba(56, 189, 248, 0.14);

  --color-secondary: #A78BFA;
  --color-secondary-soft: rgba(167, 139, 250, 0.14);

  --color-border: rgba(148, 163, 184, 0.18);

  --radius-md: 0.75rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;
  --radius-2xl: 2rem;

  --shadow-card: 0 20px 50px rgba(0, 0, 0, 0.28);
  --shadow-soft: 0 10px 30px rgba(0, 0, 0, 0.18);

  --container-max-width: 1120px;
}
```

---

## 24. Final Design Principle

The portfolio should not try to impress with noise.

It should impress by making the value clear:

```text
Catriel builds reliable software systems that solve real business problems.
```

---

## 25. Prompt for AI Design Tools

Use this prompt in Google Stitch, V0, or another UI generator:

```text
Using this design.md as the source of truth, create a modern responsive developer portfolio landing page for Catriel Bartezaghi.

The page should feel professional, reliable, technical, and slightly premium. Use a dark theme with subtle gradients, clean cards, rounded corners, strong typography, and a modern accent color.

The portfolio should highlight Catriel as a Computer Engineer and Software Developer from Argentina, focused on backend logic, business systems, web applications, automation, CI/CD, and maintainability.

Create the following sections:
Navbar, Hero, About, Skills, Featured Projects, Work Approach, Experience, Contact, and Footer.

Make the design responsive and suitable for applying to backend, full-stack, and software engineering roles.
```
