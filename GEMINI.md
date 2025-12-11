# Project: My Site

## Project Overview

This is a web application built with React, TypeScript, and Vite. It appears to be a website for a large park or attraction, with sections for a zoo, a garden, a play park, and more. The application uses `react-router-dom` for navigation and includes animation libraries like `framer-motion` and `gsap`.

### Key Technologies

*   **Framework:** React
*   **Language:** TypeScript
*   **Build Tool:** Vite
*   **Routing:** React Router
*   **Animation:** Framer Motion, GSAP
*   **Styling:** CSS Modules (inferred from file names like `*.module.css`)

### Architecture

The application is structured around a main layout (`MainLayout.tsx`) with nested layouts for different sections:

*   `UrbanZooLayout.tsx`
*   `GreenGardenLayout.tsx`
*   `PlayParkLayout.tsx`
*   `DiscoveryLayout.tsx`
*   `CommunityLayout.tsx`

The pages themselves are located in the `src/pages` directory, organized into subdirectories corresponding to the different sections of the site. Components are in `src/components`.

## Building and Running

### Development

To run the development server:

```bash
npm run dev
```

This will start a Vite development server with Hot Module Replacement (HMR).

### Production Build

To build the application for production:

```bash
npm run build
```

This will create a `dist` directory with the optimized production build.

### Previewing the Production Build

To preview the production build locally:

```bash
npm run preview
```

## Development Conventions

### Linting

The project uses ESLint for code linting. To run the linter:

```bash
npm run lint
```

### Styling

The project appears to use CSS Modules for styling, as indicated by file names like `ActualMap.module.css` and `AttractionCard.module.css`. This means that CSS classes are scoped locally to the component by default, preventing global style conflicts.

### Contribution Guidelines

There are no explicit contribution guidelines in the `README.md` file. However, the existing code follows standard React and TypeScript conventions.
