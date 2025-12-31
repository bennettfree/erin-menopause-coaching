# Erin Free Menopause Coaching – Landing Page

This project is a single-page marketing site for Erin Free's menopause coaching practice in Napa Valley.  
It uses **standard HTML**, **Tailwind CSS via CDN**, and a small amount of **vanilla JavaScript** for interaction.

---

## Project Structure

- `index.html`  
  The main landing page. All content sections (hero, services, testimonials, mission, FAQ, contact, login placeholder) live here.

- `scripts/`  
  - `main.js` – JavaScript for:
    - Section fade-in on scroll
    - FAQ accordion behavior
    - Active navigation highlight on scroll
    - Dynamic copyright year in the footer

- `styles/`  
  - `.gitkeep` – Placeholder file to keep this folder in version control.  
    Tailwind is currently loaded from a CDN and configured inline in `index.html`.  
    If you later move to a build process, place your compiled CSS or custom styles here.

- `assets/images/`  
  - `favicon.svg` – Placeholder favicon used by the site.  
    Add any future brand images and social share images in this folder.

---

## Editing Text Content

Open `index.html` in your editor and look for the clearly labeled sections:

- **Hero Section**  
  Copy lives under the comment `HERO SECTION (Headline + Intro CTA)`.  
  Update:
  - Main headline
  - Supporting paragraph
  - Button labels if needed

- **CTA Section**  
  Under `SECONDARY CTA SECTION (Free Consultation)`.  
  Update the short question, supporting text, and the “Book Now” button label.

- **About Erin**  
  Under `ABOUT ERIN SECTION`.  
  The card contains Erin’s bio copy. Replace or adjust the text inside that card as needed.

- **How We Can Work Together (Services)**  
  Under `HOW WE CAN WORK TOGETHER (SERVICES GRID)`.  
  Each card is a service offering. You can:
  - Edit headings
  - Edit descriptions
  - Duplicate or remove cards as your offer suite evolves

- **Testimonials**  
  Under `TESTIMONIALS SECTION`.  
  Each `<figure>` is a single testimonial. Change the quote text and first name as needed.

- **Mission**  
  Under `MISSION SECTION`.  
  Contains the “Our Mission” copy block. Edit for tone or emphasis without changing layout.

- **FAQ**  
  Under `FAQ ACCORDION SECTION`.  
  Each FAQ item has:
  - A button (`.faq-toggle`) with the question text
  - A panel (`.faq-panel`) with the answer text  
  You can duplicate an entire item block to add new questions.

- **Contact / Consultation Form**  
  Under `CONTACT / CONSULTATION & LOGIN PLACEHOLDER`.  
  Update the short explanation and placeholder text for the form fields.

- **Login Placeholder**  
  In the same contact section.  
  This is a non-functional placeholder for a future client portal or scheduling tool.

---

## Where Scripts Live & How They Work

- All interactive behavior is defined in `scripts/main.js`:
  - **Fade-in sections**: Elements with the class `.fade-section` will fade in as they enter the viewport.
  - **FAQ accordion**: Buttons with the class `.faq-toggle` toggle visibility of the following `.faq-panel`.
  - **Navigation highlight**: The navigation links for `Home`, `Services`, `Blog`, and `About` are highlighted based on scroll position.
  - **Footer year**: The `<span id="year">` in the footer is automatically updated to the current year.

If you add new sections that should fade in, just give the container the class `fade-section`.

---

## Where Styles Live

- **Tailwind CSS** is loaded from a CDN in the `<head>` of `index.html`:
  - You can adjust theme colors, fonts, and shadows via the `tailwind.config` object in the inline `<script>` in the head.
- The `styles/` folder is currently empty (aside from `.gitkeep`) and reserved for:
  - Future custom CSS files
  - A compiled Tailwind build if you later move away from the CDN approach

For small tweaks, prefer using Tailwind utility classes directly in the HTML.

---

## Images & Lazy Loading

- All current visuals are **placeholder shapes** (no real image files) to preserve design without requiring photography.
- When you are ready to add real images:
  - Place the files into `assets/images/`.
  - Replace the placeholder markup as indicated by the comments in `index.html` (hero and headshot areas).
  - Use the `loading="lazy"` attribute on new `<img>` tags. Example:

    ```html
    <img
      src="assets/images/erin-headshot.jpg"
      alt="Erin Free, menopause wellness coach"
      loading="lazy"
      class="h-40 w-40 sm:h-48 sm:w-48 rounded-full object-cover"
    />
    ```

This keeps performance strong as the site grows.

---

## Adding More Pages Later

This project is ready to grow:

- Create new HTML files in the root (for example, `services.html`, `about.html`).
- Link them from the existing navigation bar in `index.html`.
- Reuse the same structure:
  - Link `scripts/main.js` at the bottom of each new HTML file.
  - Use the same Tailwind CDN setup and `tailwind.config` block.
  - Store any shared images in `assets/images/`.

If the site becomes larger, you can:

- Move Tailwind to a proper build pipeline (e.g., PostCSS, Vite, or Next.js).
- Compile CSS into `styles/` (e.g., `styles/main.css`) and update the `<link>` tags in your HTML.

---

## Running and Editing

No build step is required:

1. Open `index.html` directly in your browser (double-click from Explorer or open via your editor).
2. Edit content in your code editor and refresh the browser to see changes.

That’s it — this is intentionally lightweight and ready for gradual expansion.  
As you add functionality or additional pages, keep scripts in `scripts/` and styles in `styles/` to maintain a clean structure.


