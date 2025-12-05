# Bookmark Landing Page

Responsive marketing landing page for a fictional "Bookmark" browser extension. Built as a front-end practice project with semantic HTML, Tailwind CSS, and a small amount of vanilla JavaScript for interactivity.

## Preview

Key sections:
- Hero with call-to-action buttons for Chrome and Firefox
- Features section with tabbed content
- Download cards for different browsers
- FAQ accordion
- Email contact form with basic validation

## Tech Stack

- HTML5
- Tailwind CSS (utility classes defined via `input.css`, compiled to `style.css`)
- Vanilla JavaScript (`starter-code/main.js`)
- Google Fonts (Nunito)

## Getting Started

1. Clone this repository:
   ```bash
   git clone -b feature/tailwind-implementation https://github.com/crbarrio/spring1_crbarrio.git
   ```
2. Navigate to the project folder:
   ```bash
   cd spring1_crbarrio/starter-code
   ```
3. Open `index.html` in your browser (e.g. double-click it or use a simple web server).

If you have `npm` and want to use a local dev server or tooling, check `starter-code/package.json` for available scripts, then run:
```bash
cd starter-code
npm install
npm run dev
```

## Project Structure

- `starter-code/index.html` – main HTML document
- `starter-code/style.css` – compiled / main stylesheet
- `starter-code/input.css` – source styles (e.g. Tailwind or utility-first setup, if used)
- `starter-code/main.js` – navigation, tabs, FAQ, and form logic
- `starter-code/images/` – SVGs and graphics used on the page

## Features & Interactions

- Mobile navigation toggle (hamburger / close icons)
- Tabbed features section (`Simple Bookmarking`, `Speedy Searching`, `Easy Sharing`)
- FAQ accordion with expand/collapse animation
- Email form with basic validation feedback

## Accessibility Notes

- Semantic sectioning (`header`, `main`, `section`, `footer`)
- ARIA roles and attributes for tabs and accordions
- Visible focus states and keyboard-navigable controls (tabs, FAQ, nav)

## License

This project is for educational and portfolio purposes. Do not use the design or assets for commercial purposes unless you have the rights to do so.
