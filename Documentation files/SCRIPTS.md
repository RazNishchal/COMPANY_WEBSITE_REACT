# NPM Scripts Guide

## Available Commands

### Development

```bash
npm run dev
```
- Starts the development server
- Hot reload enabled
- Available at http://localhost:3000
- Use this for local development

### Build

```bash
npm run build
```
- Creates optimized production build
- Output in `dist/` folder
- Minifies and optimizes all assets
- Run this before deploying manually

### Preview

```bash
npm run preview
```
- Preview the production build locally
- Runs after `npm run build`
- Tests production build before deployment
- Available at http://localhost:4173

### Lint

```bash
npm run lint
```
- Checks code for errors and style issues
- Helps maintain code quality
- Fix issues before committing

## Common Development Workflow

### Starting Development

```bash
# 1. Install dependencies (first time only)
npm install

# 2. Start development server
npm run dev

# 3. Open browser to http://localhost:3000
```

### Making Changes

```bash
# 1. Make your changes in src/
# 2. Save files - hot reload will update browser
# 3. Test in browser
# 4. Commit when satisfied
git add .
git commit -m "Description of changes"
```

### Before Deploying

```bash
# 1. Build for production
npm run build

# 2. Preview production build
npm run preview

# 3. Test thoroughly at http://localhost:4173

# 4. If everything works, push to GitHub
git push

# Vercel will automatically deploy
```

## Troubleshooting

### Port Already in Use

```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- --port 3001
```

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules dist
npm install
npm run build
```

### Hot Reload Not Working

```bash
# Restart dev server
# Press Ctrl+C to stop
npm run dev
```

## Tips

- Always run `npm run build` and `npm run preview` before deploying
- Use `npm run dev` for development - it's faster
- Commit frequently to avoid losing work
- Test on different screen sizes during development
- Check browser console for errors

## Quick Reference

| Command | Purpose | When to Use |
|---------|---------|-------------|
| `npm install` | Install dependencies | First time setup, after cloning |
| `npm run dev` | Start dev server | During development |
| `npm run build` | Build for production | Before deployment |
| `npm run preview` | Preview production | Testing before deploy |
| `npm run lint` | Check code quality | Before committing |