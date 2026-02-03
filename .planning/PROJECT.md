# Origen Natural IPS Website

## What This Is

A modern, bilingual (Spanish/English) custom-built static website for Origen Natural IPS, an integrative medicine clinic in Bogotá, Colombia. Hand-crafted HTML/CSS for unique design and optimal performance. The site educates visitors about natural and alternative therapies, builds trust through professional presentation and testimonials, and converts interest into WhatsApp appointment inquiries.

## Core Value

Visitors clearly understand what services Origen Natural offers and feel confident enough in the clinic's professionalism to reach out via WhatsApp.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Responsive homepage showcasing clinic identity, services overview, and clear WhatsApp CTA
- [ ] 10 individual service pages with detailed descriptions (Sueroterapia, Terapia Neural, Campos Magnéticos, Homeopatía, Acupuntura, Fitoterapia, Quiropráctica, Fisioterapia, Asesoría Nutricional, Farmacia)
- [ ] About Us page with clinic mission/vision and team section featuring doctor profiles
- [ ] Testimonials page displaying patient reviews and satisfaction metrics
- [ ] Blog/Articles section for educational content about conditions and treatments
- [ ] Contact page with location, hours, and multiple contact methods
- [ ] Floating WhatsApp button accessible from all pages
- [ ] Full Spanish/English bilingual support with language switcher
- [ ] Mobile-first responsive design
- [ ] SEO optimization for local Bogotá searches
- [ ] Integration with existing brand (teal/green color palette, logo)

### Out of Scope

- Online booking/calendar system — WhatsApp is the booking channel
- E-commerce/online pharmacy — physical pharmacy only
- Patient portal/login — not needed for v1
- Video content/media hosting — text and images only
- Blog/CMS functionality — deferred to v2
- Email marketing integration — defer to v2
- WordPress or any CMS — using static HTML for v1

## Context

**The Business:**
- Origen Natural IPS is an integrative medicine clinic in north Bogotá (Calle 98 #9a-46, Edificio Parque del Chico 99, Torre 2, Piso 6)
- MINSALUD certified across 10+ service categories
- 93% patient satisfaction rate, 1,000+ patients served
- Vision: Become leading integrative medicine brand in Colombia with 10 centers by 2027
- Three pillars: Escuchar (Listen), Guiar (Guide), Acompañar (Accompany)

**Existing Digital Presence:**
- origennatural.life — marketing landing page for specific campaigns
- origennaturalips.com — main domain (where new site will live)
- Instagram: @origennaturalips (active)
- Facebook: Origen Natural

**Team (to feature on website):**
- Dr. Manuel de Diego — 20+ years natural medicine, Universidad Nacional
- Dra. Beatriz Cuervo — 20+ years acupuncture, homeopathy, neural therapy
- Dr. Nicolas de Diego — General medicine with alternative emphasis
- Dr. Tito Hernández — Orthopedics and Traumatology specialist
- FT. Erick Velandia — Physiotherapist, sports medicine

**Services (10 total):**
1. Sueroterapia (IV Therapy)
2. Terapia Neural (Neural Therapy)
3. Terapia de Campos Magnéticos (Magnetic Field Therapy)
4. Homeopatía (Homeopathy)
5. Acupuntura (Acupuncture)
6. Fitoterapia (Phytotherapy)
7. Quiropráctica (Chiropractic)
8. Fisioterapia (Physiotherapy)
9. Asesoría Nutricional (Nutritional Counseling)
10. Farmacia (Pharmacy)

**Conditions Treated:**
Migraine, Herniated Disc, Chronic Gastritis, Arthritis, Gastric Ulcer, Anxiety, Irritable Bowel, Stress, Back Pain, Arthrosis, Osteoporosis

**Content Available:**
- Service descriptions from portfolio PDF
- Patient testimonials and satisfaction data
- Team photos and facility images from portfolio
- Logo and brand assets

**Contact Information:**
- Phone: 601 636 5236
- WhatsApp: 300 222 7188
- Email: origennaturalips@gmail.com

## Constraints

- **Platform**: Custom static HTML/CSS/JS hosted on GoDaddy
- **Build Method**: Hand-coded by Claude — unique design, no templates
- **Brand**: Must use existing teal (#0e4d64) and green (#7bc144) color palette with established logo
- **Language**: Full bilingual support (Spanish primary, English secondary) via separate HTML files or JS toggle
- **CTA**: WhatsApp is the sole booking channel — no online scheduling system
- **Content**: Spanish content is primary; English translations needed for all pages
- **Updates**: Content is mostly static; blog/CMS deferred to v2
- **Stack**: Pure HTML5, CSS3 (with CSS variables for theming), vanilla JavaScript

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Custom static HTML/CSS | Unique design priority, content rarely changes, faster performance | ✓ Confirmed |
| No WordPress | Owner prioritizes unique design over easy editing; content is static for v1 | ✓ Confirmed |
| Pure vanilla stack | HTML5 + CSS3 + vanilla JS — no frameworks, maximum performance | ✓ Confirmed |
| WhatsApp as sole CTA | Matches current business workflow, 98% WhatsApp penetration in Colombia | ✓ Confirmed |
| Bilingual via separate pages | /es/ and /en/ directories for clean SEO and simple implementation | — Pending |
| Keep existing brand | Consistency with physical clinic and marketing materials | ✓ Confirmed |
| Blog/CMS deferred to v2 | Static content for now, add dynamic features when needed | ✓ Confirmed |
| GoDaddy hosting | Already have it, works fine for static files | ✓ Confirmed |

---
*Last updated: 2026-02-03 after pivot to static site*
