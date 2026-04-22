# WeCode4U — Master Project Context (Claude Code)

## ⚙️ Stack
Next.js 14  
TypeScript  
Tailwind CSS  
Framer Motion  

---

## 🎯 Objective
Refine an already-built premium SaaS-style marketing website into a **high-end, enterprise-grade, visually consistent product website**.

Focus:
- visual polish
- consistency
- spacing
- alignment
- controlled motion

DO NOT redesign from scratch.

---

## 🎨 Core Design System (STRICT)

### Colors
- Background: #ffffff ONLY
- Secondary Surface: #fafaf9
- Accent: #fb6e3e (CTA + highlights only)
- Text Primary: #1a1916
- Text Secondary: #6b6a67

🚫 No dark sections anywhere  
🚫 No gradients as backgrounds  
🚫 No additional colors

---

## 🔤 Typography
- Font: Inter
- Headlines: weight 600
- Letter-spacing: -0.04em
- Clean hierarchy

---

## 🧱 Layout Rules
- Max width ~1200px
- Strong grid alignment
- Equal spacing between sections
- Consistent padding across components

---

## 🧩 Component Rules

### Cards
- Equal height in grids
- Padding consistent (24px)
- Border radius consistent across all cards
- No element should overflow outside card boundaries
- Clean internal structure (icon → title → content → animation)

### Buttons
- Primary: #fb6e3e background, white text
- No pill shapes
- Subtle hover only

### Animations
- Smooth and subtle
- No flashy motion
- No large moving elements outside containers
- Motion should feel “premium”, not playful

---

## 🧠 Interaction Rules
- Subtle hover lift (small translate + soft shadow)
- No aggressive transitions
- No animation that breaks layout

---

## 🔒 Strict Constraints (VERY IMPORTANT)

- Do NOT introduce new colors
- Do NOT introduce dark sections
- Do NOT break grid alignment
- Do NOT create inconsistent components
- Do NOT modify copy/content unless explicitly asked
- Do NOT change multiple sections at once
- Always respect existing structure

---

## 🏗️ Project Structure

### Pages
/, /services, /how-we-work, /why-us, /case-studies, /testimonials, /about, /contact

### Components (already built)
/app/components/
- Navbar
- HeroSection
- BentoServices
- LogoMarquee
- StatsSection
- ProcessSection
- TestimonialSection
- CTASection
- Footer
- ContactForm

### UI Components
/app/components/ui/
- animated-counter
- animated-background-lines
- infinite-slider
- progressive-blur

---

## 🧾 Certifications (GLOBAL UPDATE RULE)

Wherever certifications are shown, always use:

- ISO 9001 — Quality Management
- ISO 27001 — Information Security Management
- ISO 27701 — Privacy Information Management

Keep formatting consistent.  
Do not redesign layout when adding them.

---

## 🎯 Current Focus Areas

- Services page visual consistency
- Why Us page feels too generic → needs controlled visual richness
- Case Studies hero feels empty → needs structure (not clutter)
- About page feels generic → needs stronger composition and hierarchy
- Remove any visual imbalance (overflow, misalignment, inconsistent spacing)

---

## 🧠 How Claude Should Work (CRITICAL)

- Work ONLY on the section explicitly mentioned in prompt
- Do NOT scan or modify entire project
- Do NOT refactor unrelated code
- Keep responses concise
- Prefer small, precise edits

---

## 🎨 Design References (INSPIRATION ONLY)

These files exist in the project:
- DESIGN-stripe.md
- DESIGN-vercel.md
- DESIGN-linear.md
- DESIGN-zapier.md
- DESIGN-framer.md

⚠️ IMPORTANT:
- Use them only for inspiration (spacing, polish, motion quality)
- DO NOT copy their colors, typography, or layouts directly
- Base system remains THIS file

---

## 🚫 Known Issues to Fix

- UI/UX service card breaking layout (overflow)
- Inconsistent spacing between cards
- Some sections feel empty (lack of structured visuals)
- Some sections feel generic (lack of visual hierarchy)

---

## 🧠 Working Style

Claude must behave like:
- a senior frontend engineer
- + a product designer

NOT:
- a creative generator
- NOT a redesign tool

---

## ⚡ Prompt Discipline

All user prompts will be:
- small
- scoped
- single-task

Claude must:
- follow exactly
- not over-edit