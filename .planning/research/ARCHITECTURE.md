# Architecture Research: Bilingual WordPress Clinic Website

**Domain:** Integrative Medicine Clinic Website
**Researched:** 2026-02-03
**Confidence:** HIGH (based on official WordPress documentation and plugin documentation)

---

## Site Structure

### Page Hierarchy

The site follows a flat-with-categories structure optimized for medical clinic navigation:

```
Homepage (/)
|
+-- Services (/services/ | /es/servicios/)
|   +-- Service 1 (/services/service-name/ | /es/servicios/nombre-servicio/)
|   +-- Service 2
|   +-- ... (10 total service pages)
|
+-- About (/about/ | /es/nosotros/)
|   +-- Team/Doctors (/about/team/ | /es/nosotros/equipo/)
|
+-- Testimonials (/testimonials/ | /es/testimonios/)
|
+-- Blog (/blog/ | /es/blog/)
|   +-- Blog Post 1
|   +-- Blog Post 2
|   +-- ...
|
+-- Contact (/contact/ | /es/contacto/)
```

### Navigation Architecture

**Primary Navigation (Header):**
- Homepage
- Services (dropdown with all 10 services)
- About (with Team as sub-item)
- Testimonials
- Blog
- Contact

**Utility Navigation (Top Bar):**
- Phone number (click-to-call on mobile)
- WhatsApp CTA button
- Language switcher (ES/EN)

**Footer Navigation:**
- Quick links to main pages
- Services list
- Contact information
- Hours of operation
- Social media links
- Privacy policy / Terms

### URL Structure (Bilingual)

**Recommended: Subdirectory approach**

| Language | Structure | Example |
|----------|-----------|---------|
| English (default) | `domain.com/page/` | `domain.com/services/acupuncture/` |
| Spanish | `domain.com/es/pagina/` | `domain.com/es/servicios/acupuntura/` |

**Rationale:**
- Subdirectories are easiest to set up and manage
- Better SEO than query parameters (`?lang=es`)
- Single domain = simpler SSL and hosting management on GoDaddy
- Hreflang tags automatically connect language versions

---

## Content Architecture

### Content Types

| Content Type | WordPress Type | Quantity | Bilingual |
|--------------|---------------|----------|-----------|
| Homepage | Page | 1 | Yes |
| Service Pages | Pages | 10 | Yes |
| About Page | Page | 1 | Yes |
| Team Page | Page | 1 | Yes |
| Testimonials | Page + Custom Section | 1 | Yes |
| Blog Posts | Posts | Ongoing | Yes |
| Contact Page | Page | 1 | Yes |

### Service Pages Structure

Each of the 10 service pages should follow a consistent template:

```
Service Page Structure:
------------------------
1. Hero Section
   - Service title
   - Brief description (1-2 sentences)
   - WhatsApp CTA button

2. Service Description
   - What is this treatment?
   - Benefits for patients
   - What to expect

3. Conditions Treated (optional)
   - Bulleted list of conditions

4. FAQ Section
   - 3-5 common questions

5. Related Services
   - Links to 2-3 complementary services

6. Call-to-Action
   - WhatsApp contact
   - Location/hours reminder
```

### Team Page Structure

```
Team Page Structure:
--------------------
1. Page Title + Introduction

2. Team Member Cards (repeating)
   - Photo
   - Name
   - Title/Specialty
   - Brief bio (2-3 sentences)
   - Credentials/certifications

3. Clinic Philosophy Section

4. Contact CTA
```

### Blog Architecture

```
Blog Structure:
---------------
- Blog index page (paginated, 10 posts per page)
- Single post template
- Categories (Health Tips, Treatments, Wellness, News)
- No tags needed initially (keeps simple for owner)

URL Pattern:
- EN: /blog/post-slug/
- ES: /es/blog/titulo-articulo/
```

### Testimonials Organization

**Recommended: Static page with testimonial sections**

Rather than a complex testimonials custom post type:
- Create a Testimonials page
- Use testimonial blocks/sections
- Owner can add new testimonials by editing the page
- Simpler for non-technical owner to manage

---

## Bilingual Architecture

### Recommended Plugin: TranslatePress

**Why TranslatePress over alternatives:**

| Factor | TranslatePress | WPML | Polylang |
|--------|---------------|------|----------|
| Ease of use | Visual front-end editing | Backend editing | Backend editing |
| Learning curve | Low (ideal for owner) | Medium-High | Medium |
| Free tier | 1 extra language free | No free tier | Limited free |
| Spanish-English | Perfect fit | Overkill | Good fit |
| GoDaddy compatible | Yes | Yes | Yes |

**Key reason:** Owner can see translations in context while editing, reducing errors and making updates intuitive.

### Translation Workflow

```
Content Creation Workflow:
-------------------------
1. Create content in default language (Spanish or English)
2. Open TranslatePress visual editor
3. Click on any text to translate
4. Translation saved and linked automatically
5. URLs, SEO metadata included in translation

Translation Components:
-----------------------
- Page/post content
- Menus
- Widget content
- Theme strings (buttons, labels)
- SEO titles and meta descriptions
- Image alt text
```

### Language Switcher Placement

**Recommended locations:**
1. **Header (primary):** In utility bar or main navigation
2. **Footer (secondary):** For users who scroll to bottom
3. **Floating widget (optional):** Can enable if analytics show need

**Switcher format:** Flags + language name (clearest for users)
- English / Espanol

### SEO for Bilingual Site

TranslatePress automatically handles:
- `hreflang` tags (tells Google about language versions)
- Separate URLs per language
- Language attribute in HTML (`<html lang="en">` or `<html lang="es">`)
- Translated meta titles and descriptions
- Language-specific sitemap generation

### Default Language Decision

**Recommendation: Spanish as default**

Rationale:
- If clinic is in Spanish-speaking area, primary audience likely Spanish
- Spanish content at root URLs (`/servicios/`)
- English in subdirectory (`/en/services/`)
- Can reverse if English is primary market

*Note: This decision should be confirmed based on clinic's primary patient demographic.*

---

## Component Patterns

### Global Components (Synced Patterns)

Components that appear on multiple pages and should update everywhere when edited:

| Component | Pages Used | Sync Needed |
|-----------|------------|-------------|
| WhatsApp CTA Button | All pages | Yes |
| Contact Information Block | Footer, Contact, Services | Yes |
| Hours of Operation | Footer, Contact, Homepage | Yes |
| Location/Address Block | Footer, Contact | Yes |
| Newsletter Signup (if used) | Footer, Blog | Yes |

**Implementation:** Use WordPress Synced Patterns (formerly Reusable Blocks)
- Edit once, updates everywhere
- Owner-friendly: change hours in one place

### Page-Specific Components

| Component | Where Used | Notes |
|-----------|------------|-------|
| Service Card | Homepage, Services landing | Links to individual service |
| Team Member Card | About/Team page | Photo + bio + credentials |
| Testimonial Card | Testimonials, Homepage | Quote + name + condition |
| Blog Post Card | Homepage, Blog index | Thumbnail + title + excerpt |
| FAQ Accordion | Service pages | Expandable Q&A |

### Header Structure

```
Header Architecture:
-------------------
[Top Bar - Optional]
- Phone | WhatsApp | Language Switcher

[Main Header]
- Logo (left)
- Primary Navigation (center/right)
- WhatsApp CTA Button (right)

[Mobile Header]
- Logo (left)
- Hamburger menu (right)
- Sticky WhatsApp button (fixed bottom)
```

### Footer Structure

```
Footer Architecture:
-------------------
[Main Footer - 4 columns]
Column 1: Logo + Brief Description + Social Icons
Column 2: Quick Links (main pages)
Column 3: Services (links to all 10)
Column 4: Contact Info + Hours

[Bottom Bar]
- Copyright
- Privacy Policy | Terms (if needed)
```

### WhatsApp Integration

**Primary CTA throughout site:**

```
WhatsApp Button Placement:
-------------------------
1. Header (persistent)
2. Hero sections
3. End of service pages
4. Floating mobile button
5. Contact page

Link format: https://wa.me/[PHONE_NUMBER]?text=[PRESET_MESSAGE]
- Preset message in appropriate language
- EN: "Hi, I'd like to schedule an appointment"
- ES: "Hola, me gustaría agendar una cita"
```

---

## Build Order

### Phase Dependencies

```
Dependency Graph:
----------------
Theme Setup
    |
    +---> Global Styles (colors, fonts, spacing)
    |         |
    |         +---> Header Component
    |         |
    |         +---> Footer Component
    |
    +---> TranslatePress Setup
              |
              +---> Homepage (uses header, footer, global styles)
              |         |
              |         +---> Service Pages (use homepage patterns)
              |         |
              |         +---> Other Pages
              |
              +---> Blog Setup
```

### Recommended Build Sequence

**Phase 1: Foundation (Build First)**
1. WordPress installation and GoDaddy configuration
2. Theme selection and activation
3. Global styles (colors, typography, spacing)
4. TranslatePress installation and language setup

**Phase 2: Global Components (Build Second)**
1. Header design and navigation
2. Footer design
3. WhatsApp button (synced pattern)
4. Contact information block (synced pattern)

**Phase 3: Homepage (Build Third)**
1. Hero section with main CTA
2. Services overview section
3. About/intro section
4. Testimonials preview
5. Contact section
6. Homepage translations

**Phase 4: Service Pages (Build Fourth)**
1. Service page template design
2. First service page (as template)
3. Remaining 9 service pages
4. All service translations

**Phase 5: Supporting Pages (Build Fifth)**
1. About page
2. Team page
3. Testimonials page
4. Contact page
5. All translations for these pages

**Phase 6: Blog Setup (Build Sixth)**
1. Blog index page design
2. Single post template
3. Categories setup
4. Initial blog posts (if any)
5. Blog translations

**Phase 7: Polish & Launch (Build Last)**
1. Mobile responsiveness testing
2. Speed optimization
3. SEO configuration
4. Forms testing
5. WhatsApp link testing
6. Translation review
7. Final QA in both languages

### Build Order Rationale

| Phase | Why This Order |
|-------|----------------|
| Foundation | Everything depends on theme and translation plugin |
| Global Components | Header/footer used on every page |
| Homepage | Primary landing page, establishes patterns |
| Services | Core content, most pages, use homepage patterns |
| Supporting | Depend on established patterns |
| Blog | Optional ongoing content, lowest priority |
| Polish | Can only optimize once content exists |

---

## Technical Considerations for GoDaddy

### Hosting Optimization

**GoDaddy Managed WordPress specifics:**
- Built-in CDN (use Deluxe or Ultimate plan for Edge CDN)
- Object Cache Pro included
- Daily backups automatic
- SSL certificate included

**Performance recommendations:**
- Keep plugins minimal (under 15)
- Use WebP images
- Lazy load images below the fold
- Avoid heavy page builders if possible (prefer Gutenberg + patterns)

### Plugin Stack (Minimal)

| Purpose | Recommended Plugin | Notes |
|---------|-------------------|-------|
| Translation | TranslatePress (Free) | 1 language free |
| SEO | Yoast SEO or RankMath | TranslatePress compatible |
| Forms | WPForms Lite or Contact Form 7 | For contact form |
| Security | Wordfence (Free) | Basic protection |
| Backup | (GoDaddy includes) | Already covered |
| Caching | (GoDaddy includes) | Already covered |

**Total: 4-5 plugins** (GoDaddy handles caching and backups)

### Theme Recommendation

For non-technical owner with bilingual needs:

**Option 1: Kadence Theme (Free)**
- Excellent header/footer builder
- Lightweight and fast
- Gutenberg-native
- Starter templates available

**Option 2: Blocksy Theme (Free)**
- Modern design
- Visual header builder
- TranslatePress compatible
- Good for medical sites

**Avoid:** Heavy multipurpose themes (Avada, Divi) - overkill for this project and harder to manage.

---

## Pitfalls to Avoid

### Architecture Anti-Patterns

| Anti-Pattern | Problem | Do Instead |
|--------------|---------|------------|
| Custom post type for services | Overcomplicates for 10 pages | Use regular pages |
| Multiple themes/child themes | Maintenance burden | Single theme with customization |
| Too many plugins | Slow site, conflicts | Minimal plugin stack |
| Complex navigation | Confuses users | Flat hierarchy, clear labels |
| Separate sites per language | Double maintenance | Single site with TranslatePress |

### Translation Pitfalls

| Pitfall | Problem | Prevention |
|---------|---------|------------|
| Machine translation only | Poor quality, errors | Use auto-translate as draft, then review |
| Inconsistent terminology | Confuses patients | Create translation glossary |
| Untranslated elements | Looks unprofessional | Translate everything (menus, buttons, 404) |
| Forgetting image text | Images have English text | Use text overlays, not text in images |

---

## Sources

### Plugin Documentation
- [TranslatePress - WordPress Two Languages Guide](https://translatepress.com/wordpress-two-languages/)
- [TranslatePress - Create Bilingual Website Free](https://translatepress.com/bilingual-website-free-wordpress/)
- [WordPress.org - Multilingual WordPress](https://developer.wordpress.org/advanced-administration/wordpress/multilingual/)

### Multilingual Best Practices
- [Kinsta - WordPress Multilingual Guide](https://kinsta.com/blog/wordpress-multilingual/)
- [Polylang - Launch Multilingual WordPress](https://polylang.pro/launch-multilingual-wordpress/)
- [Weglot - Multi Language Website Design](https://www.weglot.com/guides/multi-language-website)

### Medical Website Structure
- [Elementor - How to Make a Medical Clinic Website](https://elementor.com/blog/medical-clinic-website/)
- [WPZOOM - Best Medical WordPress Themes](https://www.wpzoom.com/blog/medical-wordpress-themes/)

### WordPress Components
- [Bluehost - WordPress Block Patterns Guide 2026](https://www.bluehost.com/blog/wordpress-block-patterns/)
- [Essential Blocks - WordPress Synced Patterns](https://essential-blocks.com/wordpress-synced-patterns-consistent-design/)
- [WPBeginner - Best WordPress Theme Builders](https://www.wpbeginner.com/showcase/best-wordpress-theme-builders/)

### GoDaddy Hosting
- [GoDaddy - Improve WordPress Speed Performance](https://www.godaddy.com/resources/skills/improve-wordpress-speed-performance)
- [GoDaddy - Managed WordPress Performance](https://www.godaddy.com/resources/news/godaddy-managed-wordpress-setting-new-standards-in-performance-uptime)

### SEO for Multilingual Sites
- [TranslatePress - WordPress Multilingual SEO](https://translatepress.com/wordpress-multilingual-seo/)
- [Search Engine Journal - Multilingual SEO URL Structure](https://www.searchenginejournal.com/multilingual-seo-url-structure/298747/)
