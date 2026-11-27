# Shanti Spices - Website Project

A responsive, product-led landing page for Shanti Spices, a packaged-spice business based in Jabalpur, Madhya Pradesh. The website promotes Shanti Achaar Masala and supports direct retail and wholesale enquiries through WhatsApp.

## Files

- `index.html` - page structure and content
- `styles.css` - responsive styling, gradient visuals and CSS motion
- `script.js` - pack selector, WhatsApp enquiry messages, mobile navigation, reveal and optional GSAP parallax
- `assets/shanti-logo.png` - user-provided Shanti emblem
- `assets/achaar-masala-front.webp` - authentic front product photograph
- `assets/achaar-masala-back.webp` - authentic back-of-pack photograph

## Run locally

Open `index.html` in a modern browser. For a local web server, run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a GitHub repository, for example `shanti-spices-website`.
2. Upload all files and the `assets` folder, preserving the folder structure.
3. In repository Settings, open Pages.
4. Select deploy from the `main` branch and the root (`/`) folder.
5. Save and use the Pages URL shown by GitHub after deployment.

## Interactive product selection

The same supplied product photograph is intentionally reused for all three selector options, as requested. Selecting a pack updates the displayed pack size and MRP and creates a matching WhatsApp enquiry message:

- 100g - MRP ₹32
- 200g - MRP ₹60
- 500g - MRP ₹130

The photograph is not a separate pack-size-specific photograph. The selected text and price are the variant indicators.

## Animation and dependencies

- CSS keyframes provide the hero float, ambient glow and marquee.
- IntersectionObserver provides scroll reveal effects.
- GSAP 3.12.5 and ScrollTrigger are loaded from cdnjs for additional parallax and hero entrance motion. The page retains CSS and IntersectionObserver effects if the CDN is unavailable.
- Google Fonts are loaded from Google Fonts; system fallbacks are included.
- Reduced-motion preferences are respected.

## Business details used

- Established: 1972
- Location: Shahi Naka, Gada, Jabalpur, Madhya Pradesh, India
- WhatsApp: +91 96302 58055
- Phone: 0761 401 2713
- Email: shantispicesjabalpur@gmail.com

## Notes before public launch

- Confirm that current MRP values and the pack label remain accurate at the time of publishing.
- Review legal/food-label details before adding any regulatory claims.
- The website is an informational and enquiry site. It does not process payments or confirm stock.
- No social media links are included because the business has no active social profiles.
