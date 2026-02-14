# Deployment Guide

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## GitHub Pages Deployment

### Step 1: Install gh-pages
```bash
npm install --save-dev gh-pages
```

### Step 2: Verify base path
Check `vite.config.js` - the `base` should match your repository name:
```js
base: '/neha_web100226/',
```

If your repository has a different name, update this path.

### Step 3: Deploy
```bash
npm run deploy
```

This will:
- Build the project
- Deploy to the `gh-pages` branch

### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**

Your site will be available at:
`https://[username].github.io/neha_web100226/`

## Customization

All content is in `src/data.js`. Update this file to customize:
- Personal information
- Projects
- Achievements
- Art pieces
- Contact links

## Troubleshooting

### Images not loading
- Make sure image paths in `data.js` are correct
- For GitHub Pages, use relative paths or absolute URLs
- Place images in the `public` folder and reference them as `/image-name.jpg`

### Styles not applying
- Clear browser cache
- Rebuild the project: `npm run build`

### Navigation not working
- Ensure all section IDs match in components and navigation
- Check that smooth scrolling is enabled in `index.css`
