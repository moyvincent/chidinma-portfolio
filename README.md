# Chidinma Patricia Igbokwe — Portfolio

A responsive React + Vite portfolio inspired by the Elito reference, using the supplied portfolio content. Includes animated sections, responsive navigation, expandable experience, customer success framework tabs, tool categories, accessible case-study dialogs, email and LinkedIn links, 15 core skills, ten supplied reviews, and individual case-study PDF downloads. The Sunrise case study also links to the supplied Sunrise Pocket prototype.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

Deploy the `dist` folder to any static hosting service. Contact links and page structure are in `src/main.jsx`. Reviews, the 15 core skills, and both case studies are maintained in `src/portfolio-content.js`; styling and responsive layouts are in `src/styles.css`. Full case-study PDFs are in `public/case-studies/`.

The hero uses the supplied portrait at `public/images/chidinma-patricia-igbokwe.webp`, with responsive CSS framing. Reviews use the supplied wording and attribution. Three featured reviews are shown initially, with an option to read all ten. Case studies are explicitly marked as proposed solutions. No contact form backend or analytics is included. Fonts use Google Fonts, with local sans-serif fallbacks.
