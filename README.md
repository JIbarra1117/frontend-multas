# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



Estructura del proyecto
---
frontend-multas
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.cjs
├── prettier.config.cjs
├── public
│   ├── img
│   │   ├── background-image.png
│   │   ├── bruce-mars.jpeg
│   │   ├── devto.svg
│   │   ├── favicon.png
│   │   ├── github.svg
│   │   ├── home-decor-1.jpeg
│   │   ├── home-decor-2.jpeg
│   │   ├── home-decor-3.jpeg
│   │   ├── home-decor-4.jpeg
│   │   ├── logo-asana.svg
│   │   ├── logo-atlassian.svg
│   │   ├── logo-ct-dark.png
│   │   ├── logo-ct.png
│   │   ├── logo-invision.svg
│   │   ├── logo-jira.svg
│   │   ├── logo-slack.svg
│   │   ├── logo-spotify.svg
│   │   ├── logo-xd.svg
│   │   ├── pattern.png
│   │   ├── team-1.jpeg
│   │   ├── team-2.jpeg
│   │   ├── team-3.jpeg
│   │   ├── team-4.jpeg
│   │   └── twitter-logo.svg
│   ├── multa.png
│   └── vite.svg
├── src
│   ├── application
│   │   ├── auth
│   │   │   └── loginUser.js
│   │   └── multas
│   │       └── createMulta.js
│   ├── domain
│   │   ├── multa.js
│   │   └── user.js
│   ├── index.css
│   ├── infrastructure
│   │   ├── api
│   │   │   ├── authAPI.js
│   │   │   └── multaAPI.js
│   │   └── websocket
│   │       └── multaSocket.js
│   ├── main.jsx
│   └── ui
│       ├── App.css
│       ├── App.jsx
│       ├── assets
│       │   └── react.svg
│       ├── configs
│       │   ├── charts-config.js
│       │   └── index.js
│       ├── context
│       │   ├── AuthContext.jsx
│       │   └── index.jsx
│       ├── data
│       │   ├── authors-table-data.js
│       │   ├── conversations-data.js
│       │   ├── index.js
│       │   ├── orders-overview-data.js
│       │   ├── platform-settings-data.js
│       │   ├── projects-data.js
│       │   ├── projects-table-data.js
│       │   ├── statistics-cards-data.js
│       │   └── statistics-charts-data.js
│       ├── layouts
│       │   ├── auth.jsx
│       │   ├── configurator.jsx
│       │   ├── dashboard-navbar.jsx
│       │   ├── dashboard.jsx
│       │   ├── footer.jsx
│       │   ├── index.js
│       │   ├── navbar.jsx
│       │   └── sidenav.jsx
│       ├── pages
│       │   ├── auth
│       │   │   ├── index.js
│       │   │   ├── sign-in.jsx
│       │   │   └── sign-up.jsx
│       │   ├── dashboard
│       │   │   ├── home.jsx
│       │   │   ├── index.js
│       │   │   ├── notifications.jsx
│       │   │   ├── profile.jsx
│       │   │   └── tables.jsx
│       │   └── multas
│       │       └── GestionMultas.jsx
│       ├── routes
│       ├── routes.jsx
│       │   └── ProtectedRoute.jsx
│       └── widgets
│           ├── buttons
│           │   ├── button-simply.jsx
│           │   └── index.js
│           ├── cards
│           │   ├── index.js
│           │   ├── message-card.jsx
│           │   ├── profile-info-card.jsx
│           │   └── statistics-card.jsx
│           ├── charts
│           │   ├── index.js
│           │   └── statistics-chart.jsx
│           └── layout
│               ├── configurator.jsx
│               ├── dashboard-navbar.jsx
│               ├── footer.jsx
│               ├── index.js
│               ├── navbar.jsx
│               └── sidenav.jsx
├── tailwind.config.js
└── vite.config.js