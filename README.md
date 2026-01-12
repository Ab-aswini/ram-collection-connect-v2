# Shreeram Collection

A modern, static retail showroom website for Shreeram Collection, originally built with React/Vite and now optimized for static hosting.

## Features
- **Static Architecture:** Fast, secure, and easy to host.
- **Headless CMS Ready:** Data architecture refactored for Keystatic (JSON-based content).
- **Responsive Design:** Mobile-first approach for the best shopping experience.

## Getting Started

### Prerequisites
- Node.js & npm

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

## CMS Setup (Optional)
To enable the Admin Dashboard:
1. Fix local npm authentication.
2. Run `npm install @keystatic/core @keystatic/react`.
3. Uncomment the Keystatic route in `src/App.tsx`.
