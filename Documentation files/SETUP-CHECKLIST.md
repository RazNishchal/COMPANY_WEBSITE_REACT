# Setup Checklist for Codehit Solutions Website

## 📋 Pre-Installation Checklist

- [ ] Node.js installed (v16 or higher) - Check with: `node --version`
- [ ] npm installed - Check with: `npm --version`
- [ ] Git installed (for deployment) - Check with: `git --version`
- [ ] Text editor installed (VS Code recommended)
- [ ] All images ready in a folder

## 🚀 Installation Steps

### Step 1: Setup Project
- [ ] Extract/navigate to project folder
- [ ] Open terminal in project directory
- [ ] Run `npm install`
- [ ] Wait for installation to complete (may take 2-3 minutes)

### Step 2: Add Images
- [ ] Copy your `images` folder
- [ ] Paste into `public/` directory
- [ ] Verify all images are present:
  - [ ] cover1.png (logo)
  - [ ] images.jpg (software dev)
  - [ ] webappdevelopmentr.png (web dev)
  - [ ] graphic.webp (graphic design)
  - [ ] mobileapp.png (mobile app)
  - [ ] photoshop.png
  - [ ] software.jpg
  - [ ] web-development-services.png
  - [ ] mobile.webp
  - [ ] softwaredevelopment.jpg
  - [ ] custom.png
  - [ ] api.webp
  - [ ] softwaretesting.jpg
  - [ ] infographics.webp
  - [ ] webdevelopment.jpg
  - [ ] front.webp
  - [ ] backend.webp
  - [ ] ecommerce.png
  - [ ] customweb.png
  - [ ] graphicdesign.jpg
  - [ ] mobileappdevelopment.jpg
  - [ ] andriod.jpg
  - [ ] ios.png
  - [ ] Cross.webp
  - [ ] ux.webp
  - [ ] qa.png

### Step 3: Test Locally
- [ ] Run `npm run dev`
- [ ] Open browser to http://localhost:3000
- [ ] Test all pages:
  - [ ] Home page loads
  - [ ] About page works
  - [ ] Services page shows all services
  - [ ] Courses page displays courses
  - [ ] Contact page with form
  - [ ] Blog page shows coming soon
  - [ ] Software Dev detail page
  - [ ] Web Dev detail page
  - [ ] Graphic Design detail page
  - [ ] Mobile Dev detail page
- [ ] Test navigation menu (desktop and mobile)
- [ ] Test all buttons and links
- [ ] Verify all images display correctly
- [ ] Check footer social links

### Step 4: Production Build Test
- [ ] Stop dev server (Ctrl+C)
- [ ] Run `npm run build`
- [ ] Build completes without errors
- [ ] Run `npm run preview`
- [ ] Test site at http://localhost:4173
- [ ] Verify everything works in production mode

## 🌐 Deployment to Vercel

### Option A: GitHub + Vercel (Recommended)

#### Setup Git Repository
- [ ] Run `git init` (if not already a git repo)
- [ ] Create `.gitignore` file (already included)
- [ ] Run `git add .`
- [ ] Run `git commit -m "Initial commit"`
- [ ] Create repository on GitHub
- [ ] Run `git remote add origin YOUR_REPO_URL`
- [ ] Run `git push -u origin main`

#### Deploy on Vercel
- [ ] Go to https://vercel.com
- [ ] Sign up/login with GitHub
- [ ] Click "New Project"
- [ ] Import your GitHub repository
- [ ] Verify settings:
  - [ ] Framework: Vite
  - [ ] Build Command: npm run build
  - [ ] Output Directory: dist
- [ ] Click "Deploy"
- [ ] Wait for deployment (2-3 minutes)
- [ ] Visit your live site!

### Option B: Vercel CLI

- [ ] Run `npm install -g vercel`
- [ ] Run `vercel login`
- [ ] Run `vercel` from project directory
- [ ] Follow prompts
- [ ] Run `vercel --prod` for production deployment

## ✅ Post-Deployment Checklist

### Test Live Site
- [ ] Visit deployment URL
- [ ] Test all pages on live site
- [ ] Test on mobile device
- [ ] Test on different browsers (Chrome, Firefox, Safari)
- [ ] Verify contact form
- [ ] Check all images load
- [ ] Test navigation menu
- [ ] Verify footer links work

### Optional Setup
- [ ] Add custom domain (if you have one)
- [ ] Enable Vercel Analytics
- [ ] Setup monitoring
- [ ] Configure email notifications for deployments

## 🎨 Customization (Optional)

### Update Company Info
- [ ] Update footer contact information
- [ ] Update social media links
- [ ] Update Google Maps embed in Contact page
- [ ] Update company description in About page

### Styling Changes
- [ ] Review and adjust colors in `src/styles/index.css`
- [ ] Check fonts in `index.html`
- [ ] Verify responsive design on all screen sizes

## 📱 Testing Matrix

Test on:
- [ ] Desktop Chrome
- [ ] Desktop Firefox
- [ ] Desktop Safari
- [ ] Mobile Chrome (Android)
- [ ] Mobile Safari (iPhone)
- [ ] Tablet (iPad)

Test features:
- [ ] Navigation menu (mobile hamburger)
- [ ] All internal links
- [ ] Contact form submission
- [ ] Image loading and optimization
- [ ] Page transitions
- [ ] Footer social links (open in new tab)
- [ ] Hover effects
- [ ] Animations

## 🐛 Common Issues & Solutions

### Images Not Loading
- [ ] Check images are in `public/images/`
- [ ] Verify image file names match code
- [ ] Check file extensions (.jpg vs .jpeg)
- [ ] Ensure paths start with `/images/`

### Build Errors
- [ ] Run `npm install` again
- [ ] Clear cache: `rm -rf node_modules && npm install`
- [ ] Check Node.js version compatibility
- [ ] Review error messages in terminal

### Deployment Fails
- [ ] Verify `vercel.json` exists
- [ ] Check package.json has correct scripts
- [ ] Ensure build works locally first
- [ ] Review Vercel deployment logs

## 📞 Need Help?

- 📖 Check README.md for detailed documentation
- 📖 Review DEPLOYMENT.md for deployment help
- 📖 See SCRIPTS.md for command reference
- 📧 Contact: codehitsolutions@gmail.com
- 📱 Phone: +977 9840708961

## 🎉 You're Done!

Once all checkboxes are complete, your website is ready and live!

Share your site: `https://your-project-name.vercel.app`

Remember:
- Any push to GitHub automatically deploys
- Keep images optimized for faster loading
- Test before major changes
- Monitor site performance

Congratulations! 🚀