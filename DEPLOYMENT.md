# Deployment Guide

This guide covers multiple deployment options for the Velpula Naga Saida Portfolio website.

## 🚀 Quick Deployment Options

### 1. Netlify (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Build settings are automatically configured via `netlify.toml`
4. Deploy URL will be generated automatically

### 2. Vercel
1. Push your code to GitHub
2. Import project in Vercel dashboard
3. Build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### 3. GitHub Pages
1. Enable GitHub Pages in repository settings
2. Use GitHub Actions workflow (already configured in `.github/workflows/deploy.yml`)
3. Push to main branch to trigger deployment

### 4. Manual Deployment
```bash
# Build the project
npm run build

# The dist/ folder contains all static files
# Upload contents to your web server
```

## 🔧 Environment Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Local Development
```bash
# Clone the repository
git clone https://github.com/Nagasaida1/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Build for Production
```bash
# Create optimized build
npm run build

# Preview production build locally
npm run preview
```

## 📊 Performance Optimization

### Build Analysis
```bash
# Analyze bundle size
npm run analyze
```

### Performance Checklist
- ✅ Code splitting implemented
- ✅ Lazy loading for images
- ✅ Three.js optimizations
- ✅ Minified CSS and JS
- ✅ Gzip compression
- ✅ Service worker for caching

## 🌐 Domain Configuration

### Custom Domain Setup
1. **Netlify**: Add custom domain in site settings
2. **Vercel**: Add domain in project settings
3. **GitHub Pages**: Add CNAME file with your domain

### DNS Configuration
```
Type: CNAME
Name: www
Value: your-site.netlify.app (or your deployment URL)

Type: A
Name: @
Value: [Your hosting provider's IP]
```

## 🔒 Security Headers

Security headers are configured in `netlify.toml`:
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin

## 📈 Analytics Setup

### Google Analytics 4
1. Create GA4 property
2. Add tracking ID to `src/utils/analytics.js`
3. Update measurement ID in the file

### Performance Monitoring
- Core Web Vitals tracking implemented
- User interaction tracking
- Page view analytics

## 🚨 Troubleshooting

### Common Issues

**Build Fails**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Three.js Performance Issues**
- Reduce particle count in `NeuralBackground.jsx`
- Adjust animation complexity
- Enable hardware acceleration

**Mobile Performance**
- Images are optimized and lazy-loaded
- Animations are reduced on mobile devices
- Touch interactions are optimized

### Performance Targets
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 📱 Mobile Optimization

- Responsive design with mobile-first approach
- Touch-friendly interactions
- Optimized animations for mobile devices
- Reduced motion for accessibility

## 🔄 Continuous Deployment

GitHub Actions workflow automatically:
1. Runs on push to main branch
2. Installs dependencies
3. Builds the project
4. Deploys to GitHub Pages

## 📞 Support

For deployment issues, contact:
- **Email**: nagasaidavelpula1704@gmail.com
- **GitHub**: [Nagasaida1](https://github.com/Nagasaida1)

---

**Happy Deploying! 🚀**