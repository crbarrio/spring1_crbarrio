
# Bookmark Landing Page

A responsive landing page for a simple bookmark manager. It showcases key features, browser extensions, FAQs, and a contact form with basic email validation.

## Table of Contents

- Project Overview  
- Features  
- Tech Stack  
- Getting Started  
- Available Files  
- Project Structure  
- Accessibility & UX Notes  
- Future Improvements  

## Project Overview

This project is a static landing page built as part of an IT Academy specialization. It promotes a fictional bookmark manager, highlighting its core value proposition and letting users explore features, download browser extensions, read FAQs, and get in touch.

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
- CSS3  
- Vanilla JavaScript (no frameworks)  
- Google Fonts (Nunito)

## Getting Started

1. Clone the repository:

```bash
git clone -b feature/vanilla-implementation https://github.com/crbarrio/spring1_crbarrio.git
cd spring1_crbarrio/bookmark-landing-page/starter-code
```

2. Open `starter-code/index.html` directly in your browser, or start a simple local server (for example using the VS Code Live Server extension).

## Available Files

- `starter-code/index.html` – main entry point.
- `starter-code/style.css` – main stylesheet.
- `starter-code/main.js` – all interactive behavior (tabs, FAQ, form validation, mobile menu).

## Project Structure

```text
bookmark-landing-page/
	readme                 # Project description (this file)
	starter-code/
		index.html           # Markup for the landing page
		style.css            # Styles for layout and components
		main.js              # JavaScript interactions
		images/              # Icons, logos, and illustrations
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