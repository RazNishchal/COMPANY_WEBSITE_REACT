# Deployment Guide for Vercel

## Quick Start Deployment

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Prepare Your Repository**
   ```bash
   # Initialize git if not already done
   git init
   
   # Add all files
   git add .
   
   # Commit
   git commit -m "Initial commit - Codehit Solutions website"
   
   # Push to GitHub
   git remote add origin YOUR_GITHUB_REPOSITORY_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to https://vercel.com/signup
   - Sign up with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite configuration
   - Click "Deploy"
   - Done! Your site is live

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # From project root directory
   cd codehit-solutions-react
   
   # Deploy to production
   vercel --prod
   ```

## Important Pre-Deployment Checklist

### ✅ Before You Deploy

1. **Add Your Images**
   ```bash
   # Copy your images folder to public directory
   cp -r /path/to/your/images ./public/
   ```

2. **Test Locally**
   ```bash
   # Install dependencies
   npm install
   
   # Run dev server
   npm run dev
   
   # Build for production
   npm run build
   
   # Preview production build
   npm run preview
   ```

3. **Verify All Pages Work**
   - Home page (/)
   - About (/about)
   - Services (/services)
   - Courses (/courses)
   - Contact (/contact)
   - All service detail pages
   - Check all images load
   - Test contact form
   - Test navigation menu (mobile & desktop)

4. **Check File Structure**
   ```
   codehit-solutions-react/
   ├── public/
   │   └── images/         ✅ Must contain all images
   ├── src/
   ├── index.html
   ├── package.json
   ├── vite.config.js
   └── vercel.json         ✅ Must be present
   ```

## Vercel Configuration

The `vercel.json` file is already configured:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## Custom Domain Setup (Optional)

1. **Add Domain in Vercel Dashboard**
   - Go to your project settings
   - Navigate to "Domains"
   - Add your custom domain
   - Follow DNS configuration instructions

2. **Update DNS Records**
   - Add CNAME or A record as instructed by Vercel
   - Wait for DNS propagation (can take up to 48 hours)

## Environment Variables

If you need to add environment variables:

1. **In Vercel Dashboard**
   - Go to Project Settings
   - Click "Environment Variables"
   - Add your variables

2. **In Local Development**
   - Create `.env` file in root
   - Add variables with `VITE_` prefix:
     ```
     VITE_API_URL=https://api.example.com
     ```
   - Access in code: `import.meta.env.VITE_API_URL`

## Continuous Deployment

Once connected to GitHub:

- **Production**: Push to `main` branch → auto-deploys to production
- **Preview**: Create PR → generates preview URL
- **Rollback**: Click "Rollback" in Vercel dashboard to previous version

## Monitoring & Analytics

Enable in Vercel Dashboard:
- **Web Analytics**: Track visitors, page views, and performance
- **Speed Insights**: Monitor Core Web Vitals
- **Logs**: View build and runtime logs

## Troubleshooting

### Build Fails

```bash
# Check build locally first
npm run build

# If successful locally but fails on Vercel:
# - Check Node.js version in package.json
# - Verify all dependencies are in package.json
# - Check for environment-specific code
```

### Images Not Loading After Deploy

```bash
# Ensure images are in public/images/
# Paths should be: /images/filename.ext
# NOT: ../images/filename.ext
```

### 404 on Page Refresh

- Ensure `vercel.json` has the rewrite rule
- This handles React Router's client-side routing

### Slow Build Times

- Vercel offers build caching
- Check if all devDependencies are correctly listed
- Consider optimizing image sizes

## Performance Optimization

### Before Deploy

1. **Optimize Images**
   ```bash
   # Use tools like imagemin or squoosh
   # Recommended formats: WebP for photos, SVG for logos
   ```

2. **Check Bundle Size**
   ```bash
   npm run build
   # Check dist folder size
   # Should be < 5MB ideally
   ```

3. **Enable Compression**
   - Already handled by Vercel automatically
   - Gzip and Brotli enabled by default

## Security

Vercel provides:
- ✅ Automatic HTTPS/SSL
- ✅ DDoS protection
- ✅ Firewall
- ✅ Headers configuration

## Cost

- **Free Tier**: Perfect for this project
  - Unlimited deployments
  - 100 GB bandwidth/month
  - Automatic HTTPS
  - Preview deployments

## Support

- Vercel Docs: https://vercel.com/docs
- Community: https://github.com/vercel/vercel/discussions
- Email: codehitsolutions@gmail.com

## Post-Deployment

1. **Test Live Site**
   - Visit deployment URL
   - Test all pages
   - Check mobile responsiveness
   - Test forms
   - Verify images

2. **Share Your Site**
   - Update social media
   - Add to portfolio
   - Submit to search engines

3. **Monitor Performance**
   - Check Vercel Analytics
   - Monitor Speed Insights
   - Review user feedback

## Updating Your Site

```bash
# Make changes locally
# Test changes
npm run dev

# Commit and push
git add .
git commit -m "Update: description of changes"
git push

# Vercel automatically deploys!
```

Your site will be live at: `https://your-project-name.vercel.app`

Happy Deploying! 🚀