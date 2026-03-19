# CLAUDE.md — Maruti Portfolio React

## Project Overview

Personal portfolio site for Maruti Bandagar, a full-stack developer. Built with React + TypeScript, deployed to GitHub Pages at `https://marutibandagar9121.github.io/portfolio`.

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | React 19 + TypeScript 5.4 |
| Build | Vite 5 |
| Styling | Tailwind CSS 3 (utility-only — no CSS modules, no styled-components) |
| Routing | React Router DOM 6 (basename: `/portfolio`) |
| Animation | Framer Motion 11 |
| Icons | @remixicon/react |
| Deployment | gh-pages → GitHub Pages |

## Project Structure

```
src/
├── components/       # Navbar, Hero, About, Skills, Projects, Contact
├── pages/            # Home.tsx (section composition), ProjectDetails.tsx
├── data/             # projectsData.ts (all project content)
├── App.tsx           # Router setup
└── index.css         # Tailwind base imports only

public/
├── images/           # Profile photo, project screenshots, contact illustration
└── svg/              # SVG assets

resumes/              # PDF resume and cover letter (served as static assets)
```

## Key Commands

```bash
npm run dev       # Start Vite dev server
npm run build     # Type-check + build to dist/
npm run preview   # Preview production build locally
npm run deploy    # Build + push to GitHub Pages (gh-pages)
```

## Architecture Notes

### Routing
- Two routes: `/` (Home) and `/projects/:id` (ProjectDetails)
- Project navigation uses `useNavigate()` and `useParams()`
- All image paths are prefixed with `/portfolio/` to work under the GitHub Pages subdirectory

### Data Layer
- All project content lives in `src/data/projectsData.ts` as a typed array
- Projects have: `id`, `title`, `shortDescription`, `fullDescription`, `points[]`, `techStack[]`, `github`, `image`
- Skills are defined inline in `Skills.tsx` — no separate data file

### Styling Conventions
- **Tailwind only** — do not add external CSS or CSS-in-JS
- Dark theme: `bg-slate-950` background, `text-gray-200` body text
- Accent color: `bg-primary` / `text-primary` → indigo `#6366f1`
- Responsive breakpoints: `md:` (768px), `lg:` (1024px)
- Hover effects use Tailwind `group` / `group-hover:` pattern

### Animation Pattern
Every section uses Framer Motion with a consistent pattern:
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>
```

## Adding Content

### New Project
Add an entry to `src/data/projectsData.ts` following the `Project` interface. Place the project image in `public/images/projects/` and reference it as `/portfolio/images/projects/filename.ext`.

### New Skill
Edit the `skillCategories` array in `src/components/Skills.tsx`.

### Resume / CV
Replace or add PDFs in the `resumes/` folder. Update the download link in `Hero.tsx`.

## Deployment

The site deploys to GitHub Pages under the `/portfolio` subdirectory. The Vite base path (`vite.config.ts`) and React Router `basename` are both set to `/portfolio` — keep these in sync if the deploy path ever changes.

```bash
npm run deploy   # runs: npm run build && gh-pages -d dist
```
