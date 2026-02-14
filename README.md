# Neha Adapala - Personal Website

A modern, scroll-based personal website showcasing projects, achievements, and art with smooth animations and interactive elements.

## Features

- **Scroll-based animations**: Content fades in as you scroll
- **Rotating circle**: Elegant rotating text around the name on landing
- **Scroll carousel**: Yellow boxes that slide as you scroll in Projects section
- **Sticky navigation**: Always accessible menu for quick section jumps
- **Responsive design**: Works on desktop and laptop screens
- **No backend**: Pure frontend React application

## Tech Stack

- React 18
- Vite
- CSS3 (no external CSS frameworks)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment to GitHub Pages

1. Update the `base` path in `vite.config.js` to match your repository name:
```js
base: '/your-repo-name/',
```

2. Install `gh-pages` package:
```bash
npm install --save-dev gh-pages
```

3. Add deploy scripts to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

4. Deploy:
```bash
npm run deploy
```

5. Enable GitHub Pages in your repository settings:
   - Go to Settings → Pages
   - Select source: `gh-pages` branch
   - Select folder: `/ (root)`

## Project Structure

```
src/
├── components/
│   ├── Landing.jsx          # Landing screen with rotating circle
│   ├── Navigation.jsx        # Sticky navigation menu
│   ├── About.jsx             # About Me section
│   ├── Projects.jsx          # Projects with scroll carousel
│   ├── Achievements.jsx      # Achievements with yellow cards
│   └── Art.jsx               # Art grid display
├── hooks/
│   └── useScrollFadeIn.js    # Scroll fade-in animation hook
├── data.js                   # All hard-coded content
├── App.jsx                   # Main app component
└── main.jsx                  # Entry point
```

## Customization

All content is stored in `src/data.js`. Update this file to customize:
- Name and title
- About Me bio and organizations
- Projects list
- Achievements
- Art pieces
- Contact links

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Personal project - All rights reserved.
