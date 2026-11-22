# Fifi Trista Andriyani — Portfolio

Personal portfolio website for **Fifi Trista Andriyani**, an Industrial Engineering graduate from Universitas Gadjah Mada, currently working in performance management and operational analysis at **PT Kalbe Nutritionals**.

Built as a static site with HTML, CSS, and JavaScript — no build step required.

## Sections

- **Home** — hero intro, role summary, and CV download
- **About** — profile, focus areas, achievements & credentials
- **Professional Experience** — work history timeline
- **Organizational Experience** — campus and organization roles
- **Key Projects** — project cards with detail modals
- **Key Activities** — routine programs (DMS, MOR, YOR, Gemba, TPM, etc.)
- **Skills Portfolio** — core competencies and tools
- **Certificates** — certificate gallery
- **Key Achievements** — competition and recognition highlights
- **Contact** — social links and CV download

## Project structure

```
portfolio/
├── index.html              # Main page markup
├── css/
│   └── style.css           # Theme, layout, animations
├── js/
│   └── script.js           # Modals, galleries, scroll behavior
├── assets/
│   ├── documents/          # CV PDF
│   └── images/
│       ├── icons/          # Favicon
│       ├── activities/     # Activity images
│       ├── certificates/   # Certificate images
│       ├── projects/       # Project thumbs & modal images
│       └── profile / about photos
└── README.md
```

## Run locally

Open `index.html` directly in a browser, or serve the folder:

```bash
npx serve .
```

Then open the URL shown in the terminal (usually `http://localhost:3000`).

## Editing content

| What to change | Where |
|---|---|
| Text, sections, project/activity cards | `index.html` |
| Modal details, certificates, achievements, contact links | `js/script.js` |
| Colors, layout, animations | `css/style.css` |
| Photos and certificates | `assets/images/` |
| CV file | `assets/documents/` |

### Project images

- Card thumbnail: set `background-image` on `.project-img` in `index.html`
- Modal gallery: add paths in `projectDatabase[...].images` inside `js/script.js`
- If no photo yet, use the `project-img-placeholder` / `activity-img-placeholder` pattern

### Activity images

- Card + modal hero: path in `activityDatabase[...].image` (`js/script.js`) and matching `.activity-img` in `index.html`

## Tech notes

- Font Awesome 6 (CDN) for icons
- Scroll-reveal animations via `IntersectionObserver` (`.fade-in`)
- Smooth scroll-to-top button on long pages
- Responsive layout for desktop and mobile
