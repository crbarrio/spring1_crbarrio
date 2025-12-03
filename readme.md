# Bookmark Landing Page (SCSS Version)

A responsive landing page for a simple bookmark manager. This version uses SCSS partials and a main bundle file compiled to CSS.

## Table of Contents

- Project Overview  
- Features  
- Tech Stack  
- Getting Started  
- SCSS Structure & Build  
- Available Files  
- Project Structure  
- Accessibility & UX Notes  
- Future Improvements  

## Project Overview

This project is a static landing page built as part of an IT Academy specialization. It promotes a fictional bookmark manager, highlighting its core value proposition and letting users explore features, download browser extensions, read FAQs, and get in touch.

This branch implements the layout and styles using SCSS, compiled to standard CSS for the browser.

## Features

- Responsive layout for desktop and mobile.
- Hero section with call-to-action buttons.
- Features section with accessible tabbed navigation (keyboard friendly).
- Download cards for Chrome, Firefox, and Opera.
- FAQ accordion with smooth expand/collapse behavior.
- Contact form with client-side email validation.
- Mobile navigation menu with hamburger/close icons.

## Tech Stack

- HTML5  
- SCSS (Sass) compiled to CSS3  
- Vanilla JavaScript (no frameworks)  
- Google Fonts (Nunito)

## Getting Started

1. Clone the repository and checkout the SCSS branch (example uses `feature/sass-implementation`):

```bash
git clone -b feature/sass-implementation https://github.com/crbarrio/spring1_crbarrio.git
cd spring1_crbarrio/bookmark-landing-page/starter-code
```

2. Install Sass globally if you do not have it yet:

```bash
npm install -g sass
sass --version
```

3. Compile SCSS to CSS (one-time build):

```bash
sass scss/main.scss styles.css
```

4. Or run Sass in watch mode during development:

```bash
sass scss/main.scss styles.css --watch
```

5. Open `index.html` directly in your browser, or start a simple local server (for example using the VS Code Live Server extension).

## SCSS Structure & Build

The SCSS source files live in `starter-code/scss/` and are organized into partials:

- `_variables.scss` – color palette, typography scales, spacing, breakpoints.  
- `_mixins.scss` – reusable mixins (for example for media queries, flex/center helpers).  
- `_base.scss` – resets, base typography, global element styles.  
- `_layout.scss` – page layout, sections (hero, features, download, FAQ, contact), responsive grid/flex rules.  
- `_components.scss` – buttons, navigation, tabs, accordion, form controls, and other UI components.  
- `main.scss` – main entry point that imports all partials and is compiled into `styles.css`.

The browser only loads the compiled `styles.css`; SCSS files are used during development.

## Available Files

From inside `starter-code/`:

- `index.html` – main entry point.  
- `styles.css` – compiled stylesheet produced from SCSS.  
- `main.js` – all interactive behavior (tabs, FAQ, form validation, mobile menu).  
- `scss/` – SCSS source files and partials.

## Project Structure

```text
bookmark-landing-page/
  readme                 # Plain-text project description
  README.md              # Markdown documentation (SCSS version, this file)
  starter-code/
    index.html           # Markup for the landing page
    styles.css           # Compiled styles from SCSS
    main.js              # JavaScript interactions
    images/              # Icons, logos, and illustrations
    scss/
      _base.scss         # Base styles
      _components.scss   # Components (buttons, nav, tabs, etc.)
      _layout.scss       # Layout and sections
      _mixins.scss       # Reusable mixins
      _variables.scss    # Design tokens (colors, spacing, etc.)
      main.scss          # SCSS entry point (imports all partials)
```

## Accessibility & UX Notes

- Tabs in the Features section use appropriate ARIA roles (`tablist`, `tab`, `tabpanel`) and support keyboard navigation with:
  - Arrow Left / Arrow Right  
  - Home / End
- FAQ items expose their expanded state via `aria-expanded`.
- Contact form validates email format on submit and shows an inline error message.

## Future Improvements

- Add actual links/actions to the “Get it on Chrome/Firefox” and “Add & Install Extension” buttons.
- Improve FAQ copy and connect the contact form to a backend or third-party service.
- Add basic automated tests for JS behavior (tabs, FAQ, form validation).
- Extract more layout patterns into mixins and utility classes to reduce duplication in SCSS.
