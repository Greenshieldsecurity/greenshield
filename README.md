# Green Shield Consultancy

React frontend for Green Shield Consultancy (keyholding, alarm response, security surveys), following the project structure in `REACT_PROJECT_STRUCTURE.md`.

## Setup

1. **Logo**: Copy your logo into the frontend so the navbar can display it:
   - Copy `freebg_cropped_ChatGPT_Image_Feb_16__2026__06_04_19_PM-removebg-preview.png` (or your logo file) into `frontend/public/` and rename it to `logo.png`.
   - The navbar is set up to use `/logo.png` (center-aligned).

2. **Install and run** (from project root):
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   Then open the URL shown (e.g. http://localhost:5173).

## Project structure

- `frontend/` – Vite + React app
  - `src/components/Layout/` – Navbar
  - `src/components/Sections/` – Hero (and more sections later)
  - `src/pages/` – HomePage (composes Navbar + Hero)
  - `src/styles/globals.css` – Global utility classes
  - `src/index.css` – Base styles and CSS variables (including hero background image URL)
  - `src/App.css` – Navbar and Hero styles

## Customisation

- **Hero background image**: Edit `frontend/src/index.css` and change the `--hero-bg-image` variable to your own dusk/night commercial property image URL (or remove it to use the default gradient).
- **Brand colours**: Same file, `:root` variables (`--color-primary`, `--color-primary-hover`, `--color-trust-bar`, etc.).
