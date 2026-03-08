# Project: Portfolio Website (mevivek.github.io)

Personal portfolio website for Vivek Kumar — a software developer based in New Delhi, India.

## Tech Stack

- **Framework**: React 19 + TypeScript (Create React App)
- **Styling**: Tailwind CSS 3 with dark mode (`class` strategy)
- **Animation**: Framer Motion
- **Icons**: @heroicons/react
- **Deploy**: GitHub Pages via GitHub Actions (push to `master` -> builds -> deploys to `gh-pages`)

## Commands

- `npm start` — Start dev server
- `npm run build` — Production build (output: `./build`)
- `npm test` — Run tests (Jest + React Testing Library)

## Project Structure

```
src/
  App.tsx                  # Root component, wraps everything in ThemeProvider
  components/              # All UI components (Header, Hero, Skills, etc.)
  context/ThemeContext.tsx  # Dark/light mode context
  data/portfolio.json      # All portfolio content (personal info, skills, experience, projects, education)
  types/portfolio.ts       # TypeScript types for portfolio data
  utils/portfolio.ts       # Helper functions (getPersonalInfo, downloadResume, etc.)
public/                    # Static assets (images, favicon, CNAME)
```

## Git Workflow

- **Always create a new branch** from `master` with a relevant name before making any modifications at the start of a new session (e.g., `feat/add-blog-section`, `fix/hero-layout`, `chore/update-deps`)
- Branch naming: use prefixes `feat/`, `fix/`, `chore/`, `refactor/` followed by a short kebab-case description

## Conventions

- **Components**: Functional components with arrow functions, one component per file in `src/components/`
- **Styling**: Tailwind utility classes inline. Always include both light and dark variants (e.g., `text-gray-900 dark:text-white`)
- **Colors**: Use the custom theme colors defined in `tailwind.config.js` — `primary-light`/`primary-dark`, `secondary-light`/`secondary-dark`, etc.
- **Animation**: Use `framer-motion` `motion` components with `initial`/`animate`/`transition` props
- **Data**: All portfolio content lives in `src/data/portfolio.json`. Components read data via utility functions in `src/utils/portfolio.ts`
- **TypeScript**: Strict mode enabled. Use proper types from `src/types/portfolio.ts`

## Do Not Edit

- `package-lock.json` — managed by npm
- `public/CNAME` — GitHub Pages custom domain config
- `.github/workflows/deploy.yml` — unless explicitly asked
