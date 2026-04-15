# Dashboard Web Page (Stackular Style)

This is a static HTML/CSS/JS dashboard inspired by your reference screenshots.

## What's included

- Top blue header with Stackular branding and title.
- Two modes:
  - **Dashboard** (member list + bar/pie chart + KPI cards)
  - **WFH & Leaves** (table view with month/year filter panel)
- Member search and row selection.
- Charts using Chart.js.

## 1) Quick setup

1. Open terminal in this folder:
   ```bash
   cd dashboard-web
   ```
2. Start a local server (Python 3):
   ```bash
   python3 -m http.server 8080
   ```
3. Open in browser:
   ```
   http://localhost:8080
   ```

## 2) File structure

- `index.html` – page layout and sections.
- `styles.css` – all visual styling and responsive behavior.
- `script.js` – sample data, chart rendering, interactions.

## 3) How to customize

### Change team data
Edit the `members` array in `script.js`.

### Change colors/fonts
Edit CSS variables at the top of `styles.css`.

### Add more KPI cards
Add another `.kpi` block in `index.html` and bind data in `script.js`.

## 4) Optional next upgrades

- Integrate with REST API for real attendance data.
- Add date-range picker (flatpickr or MUI style picker).
- Export table to CSV.
- Add dark theme toggle.
