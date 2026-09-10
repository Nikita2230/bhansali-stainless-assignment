# Bhansali Stainless – Website Developer Assignment

This project was created as part of the screening assignment for the Website Developer role for the Bhansali Stainless engagement.

## Project Overview

The assignment was to build a responsive B2B product category page for stainless steel flanges, targeting buyers in Saudi Arabia, UAE, and the wider Middle East.

The page includes:

- Product overview
- Stainless steel grade variants: 304, 316, 316L
- Flange types
- Technical specifications
- Certifications / ASTM / ISO placeholder section
- Export and shipping information
- Prominent phone, email, and WhatsApp enquiry options
- Working lead capture form
- Client-side form validation
- Google Sheet lead storage
- Google Tag Manager integration
- Mock GA4 `generate_lead` event
- Responsive desktop, tablet, and mobile layouts
- SEO metadata and semantic HTML
- Performance optimization

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Motion / Framer Motion
- Lucide React
- Google Apps Script
- Google Sheets
- Google Tag Manager
- Google Analytics 4
- Vercel

## Lead Capture Flow

The enquiry form collects:

- Name
- Email
- Phone
- Product Interest

Client-side validation is applied before submission.

After a valid submission:

1. The form sends data to a Next.js API route.
2. The API route forwards the lead to a Google Apps Script endpoint.
3. The lead is stored in a Google Sheet.
4. A `generate_lead` event is pushed to Google Tag Manager.
5. GTM fires the configured GA4 lead event.

This ensures the lead is only tracked after a successful submission.

## Analytics Event

Event name:

`generate_lead`

Event parameters:

- `form_name`
- `product_interest`
- `lead_source`

## Performance

Google PageSpeed Insights results:

### Mobile
- Performance: 93
- LCP: 1.2s
- CLS: 0
- FCP: 0.9s
- Speed Index: 0.9s

### Desktop
- Performance: 100
- LCP: 0.5s
- CLS: 0
- FCP: 0.3s
- TBT: 60ms
- Speed Index: 0.6s

## Performance Optimizations

The project includes:

- Lightweight hero implementation
- Reduced client-side animation overhead
- CSS-based hero animation
- Content visibility optimization for below-the-fold sections
- Minimal external dependencies
- Responsive layouts without unnecessary large assets
- Optimized production build
- Semantic HTML and accessible form markup

## Accessibility & SEO

The page includes:

- Semantic heading hierarchy
- Accessible form labels
- Validation feedback
- Focus-visible styles
- Keyboard-friendly navigation
- Reduced-motion support
- Meta title and description
- Open Graph metadata
- Canonical URL
- Search engine indexing directives

## Deployment

The project is deployed on Vercel.

Live URL:

`https://bhansali-stainless-assignment.vercel.app/`

GitHub Repository:

`https://github.com/Nikita2230/bhansali-stainless-assignment`

## Notes

The technical specifications and ASTM / ISO references are presented as placeholders where actual Bhansali Stainless product data or certification documents were not provided in the assignment brief.

No production certification claims or unsupported product specifications have been added.

## Assignment Evidence

The following were verified during testing:

- Responsive desktop layout
- Responsive tablet layout
- Responsive mobile layout
- Working form validation
- Successful Google Sheet lead storage
- GTM `generate_lead` event
- GA4 lead-event tracking
- Mobile PageSpeed score above 90
- Desktop PageSpeed score of 100
- Successful production build