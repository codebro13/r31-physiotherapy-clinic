R31 Physiotherapy Clinic — Website & Online Booking System

Hi there! Welcome to the repository for R31 Physiotherapy Clinic, a responsive healthcare website built as part of my Web Designing (4.5CS070101) individual case-study assignment at Manav Rachna University.

Why I Built This

Many local physiotherapy clinics still rely on phone calls for scheduling and use outdated websites with tiny, faded text that is hard to read—especially for patients dealing with pain, strain, or age-related vision issues.

For this project, I designed and built a clean, accessible web experience for R31 Physiotherapy Clinic that solves two core problems:

No Online Booking: Added a simple, step-by-step appointment booking page with an instant session cost estimator.

Tiny, Low-Contrast Text: Redesigned the interface using a high-contrast color palette (Deep Navy #102A43 on Crisp White #FFFFFF) and a comfortable 16px+ base font size so everything is easy to read on phones and desktops alike.

Key Features

Responsive Bootstrap 5 Layout: Adapts smoothly across mobile (375px), tablet (768px), and desktop (1440px) viewports, enhanced with custom media queries and subtle button hover transitions.

Clear Treatment & Fee Table: Displays transparent session durations and pricing right on the home page so patients know what to expect before booking.

Interactive Appointment Booking (booking.html):

Includes 7 accessible form input types (text, email, tel, date, number, radio, and checkbox) plus a package dropdown.

Live Fee Estimator: Automatically calculates the total session cost in real time (including optional home-visit charges).

Client-Side Validation & LocalStorage: Validates patient inputs (such as a 10-digit mobile number) and saves booked appointments directly in the browser's localStorage so they remain visible even after a page refresh.

Custom Branding & Location Map: Features an inline <svg> clinic logo and an embedded Google Maps <iframe> for easy directions.

Tech Stack

HTML5: Semantic structure (<header>, <nav>, <main>, <section>, <footer>) with proper ARIA attributes and labels.

CSS3 & Bootstrap 5: Responsive 12-column grid, custom high-contrast theme variables, CSS transitions, and mobile/desktop media queries.

Vanilla JavaScript (ES6): Real-time DOM updates for session cost estimation, form validation, and localStorage persistence.

Project Structure

r31-physiotherapy-clinic/
├── index.html      # Home page (Hero, Services, Fee Table, SVG Logo & Location Map)
├── booking.html    # Online Appointment Booking page & Saved Bookings list
├── styles.css      # Custom high-contrast palette, typography, transitions & media queries
├── script.js       # Live session cost estimator, validation & localStorage logic
└── README.md       # Project documentation


How to Run Locally

Clone this repository:

git clone https://github.com/codebro13/r31-physiotherapy-clinic.git


Open the project folder and double-click index.html (or open it using VS Code Live Server) to explore the site in your browser.

Author & Course Details

Student Name: Ronit

Roll Number: 31

Course: Web Designing (4.5CS070101) — Manav Rachna University

Live Demo: View on GitHub Pages

Ethics & Attribution Note

This is an academic prototype built for educational purposes. Demo appointment bookings are stored locally in the user's browser (localStorage) and are never transmitted to third-party servers. Generative AI was used strictly as an initial drafting aid for Bootstrap 5 boilerplate scaffolding, with all layouts, contrast ratios, validation rules, and accessibility checks manually refined and tested.