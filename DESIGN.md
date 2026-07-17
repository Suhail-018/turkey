# Miras — Islamic Heritage Journeys in Türkiye

*Design System & Product Rationale*

**Brand name:** *Miras* (ميراث — "inheritance/heritage" in both Turkish and Arabic).
A single word that reads beautifully in Latin and Arabic script, and states the promise:
this land is an inheritance, and we walk you through it.

---

## 1. Design Philosophy

The site is **a museum you walk through, with a door to Istanbul at the end** — not a
booking engine with photos. Every decision follows an emotional arc:

> Wonder → Story → Knowledge → People → Trust → Booking

- **Apple**: restraint, whitespace, one idea per screen.
- **Airbnb**: progressive booking, trust indicators, clear pricing.
- **National Geographic**: editorial storytelling, captions, real places.
- **Aman**: luxury through calm, not ornament.
- **Ottoman/Islamic geometry**: present as *texture and rhythm* (8-point stars, arches,
  muqarnas-inspired dividers) — never as wallpaper or pastiche.

**Anti-goals:** corporate templates, tourism-brochure energy, heavy gradients, glassmorphism
everywhere, cartoon illustration, fake stock people.

## 2. Visual Language

### Color — "Emerald & Ivory, gilded sparingly"
| Token | Hex | Role |
|---|---|---|
| `emerald` | `#0B6E4F` | Primary actions, brand |
| `forest` | `#134E4A` | Deep sections, hero overlays |
| `ivory` | `#FAF7F2` | Page background |
| `stone` | `#E7E2DA` | Cards on ivory, borders |
| `gold` | `#C8A24D` | Accents only: eyebrows, ratings, hairlines |
| `slate` | `#1F2937` | Body text |
| `olive` | `#7A8F6A` | Muted secondary accents |

Rule: gold never fills large areas. It underlines, borders, and punctuates.
Dark sections use `forest`→near-black gradients with ivory text — the "night at the
mosque" register that alternates with daylight ivory sections to create rhythm.

### Typography
- **Display:** Playfair Display — headlines, editorial numerals, drop caps.
- **Text/UI:** Manrope — body, navigation, forms.
- **Arabic:** IBM Plex Sans Arabic (UI/body); Arabic display sizes slightly reduced with
  raised line-height.
- Scale (desktop): H1 clamp→72, H2 56, H3 42, H4 30, body 18, small 15, caption 13.
- Eyebrow style: 12px Manrope, tracking 0.2em, uppercase (EN) — gold.

### Space, shape, depth
- 8-pt grid; sections breathe at 96–160px vertical.
- Radii: cards 20, buttons 16 (fully rounded pills for primary), images 24, dialogs 28.
- Shadows: layered, soft, warm-tinted; nothing harsh.
- Signature shape: the **pointed arch** (used as image mask on select portraits) and the
  **8-point star** (pattern, bullets, map markers).

### Motion (Framer Motion)
- Reveal on scroll: 24px rise + fade, 600ms, `cubic-bezier(.2,.8,.2,1)`.
- Hero: slow parallax (image translates ~12% over scroll), 8s ken-burns idle scale.
- Cards: elevate + image scale 1.05 on hover.
- Counters count up when visible. Timeline draws its rail as you scroll.
- Respect `prefers-reduced-motion`.

## 3. Imagery

All imagery verified live (Unsplash CDN + Wikimedia Commons), assigned by subject:
Blue Mosque dusk (hero), Eyüp Sultan with birds (Sahaba), Süleymaniye from the Golden
Horn, Iznik calligraphy panel (texture/editorial), Yeşil Türbe muqarnas (Bursa), Mevlana
Museum (Konya), Cappadocia balloons, Selimiye (Edirne), Topkapı ceiling, Grand Bazaar,
Bosphorus skyline, Kaputaş coast. Guides/scholars intentionally use monogram medallions
instead of stock portraits — authenticity over fake faces.

## 4. Bilingual & RTL

- Locales: `en` (LTR) and `ar` (RTL) via `/{locale}` routes; `dir` set on `<html>`.
- Logical CSS properties (`ms-`, `me-`, `ps-`, `pe-`, `start/end`) throughout.
- UI strings in dictionaries; content data carries `{ en, ar }` fields.
- Directional icons (arrows/chevrons) flip via `rtl:rotate-180`.

## 5. Architecture

- Next.js App Router (v16) + TypeScript, Tailwind v4 (`@theme` tokens in `globals.css`).
- Server components by default; client components only for interactivity
  (header, motion primitives, map, timeline, gallery, booking, accordion).
- Content in `src/data/*.ts` — typed, bilingual, CMS-shaped (swap for Sanity/Payload later).
- Forms: React Hook Form + Zod. Booking is a 4-step progressive flow with a live
  summary card (Airbnb register, not airline).
- Accessibility: WCAG AA contrast, focus-visible rings, semantic landmarks, keyboard
  accordion/menus, `aria` on all interactive widgets, reduced-motion support.

## 6. Page Rhythm (avoiding template feel)

Home alternates registers deliberately:
ivory (hero search, tours) → forest (heritage intro) → ivory (map) → editorial split
(destinations) → deep timeline → ivory (guides) → stone (stories) → cinematic full-bleed
(film) → masonry (gallery) → ivory (articles/FAQ) → forest (newsletter + skyline footer).
No two adjacent sections share the same composition.
