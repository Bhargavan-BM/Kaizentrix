# Kaizentrix Global Solutions

**Continuous Innovation, Global Impact**

A modern, professional corporate website built with React, TypeScript, Tailwind CSS, and React Router.

## Features

- ✨ Modern, clean, enterprise-grade design
- 🎨 Professional blue/indigo/purple gradient theme
- 🌓 Dark/Light mode toggle with local storage persistence
- 📱 Fully responsive mobile-first design
- 🚀 Fast, optimized for static hosting (GitHub Pages ready)
- 🎯 7 complete pages with comprehensive content
- ♿ Accessible UI components
- 🔧 Component-based architecture for easy maintenance

## Pages

1. **Home** - Hero, services overview, testimonials, industries, CTA
2. **Services** - Detailed service categories with expandable sections
3. **Products** - Product showcase with pricing tiers
4. **About Us** - Company mission, vision, values, and capabilities
5. **Contact** - Contact form and office locations
6. **Blog** - Blog listing with categories and search
7. **Book Consultation** - Professional consultation booking form

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling
- **React Router v7** - Client-side routing
- **Vite** - Fast build tool and dev server
- **Lucide React** - Beautiful icon library
- **Radix UI** - Accessible component primitives

## Getting Started

### Prerequisites

- Node.js 18+ and npm/pnpm installed

### Installation

```bash
# Install dependencies
npm install
# or
pnpm install
```

### Development

```bash
# Start dev server
npm run dev
```

Visit `http://localhost:5173` to view the application.

### Build for Production

```bash
# Create optimized production build
npm run build
```

The output will be in the `dist/` directory, ready for deployment.

## Deployment to GitHub Pages

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Push to GitHub:**
   - Create a new repository on GitHub
   - Push your code to the repository

3. **Configure GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: Select your build branch
   - Folder: /root or /docs (depending on your setup)

4. **Alternative - GitHub Actions (Recommended):**
   
   Create `.github/workflows/deploy.yml`:
   
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         
         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '18'
             
         - name: Install dependencies
           run: npm install
           
         - name: Build
           run: npm run build
           
         - name: Deploy to GitHub Pages
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

## Customization

### Colors

Update colors in `/src/styles/theme.css` to match your brand:

```css
:root {
  --primary: #4f46e5;     /* Primary brand color */
  --secondary: #818cf8;   /* Secondary brand color */
  /* ... other color tokens */
}
```

### Content

- **Company Info:** Update in `/src/app/components/Footer.tsx` and `/src/app/components/Navbar.tsx`
- **Services:** Edit `/src/app/pages/Services.tsx`
- **Products:** Edit `/src/app/pages/Products.tsx`
- **About Content:** Edit `/src/app/pages/About.tsx`

### Fonts

Change fonts in `/src/styles/fonts.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');

* {
  font-family: 'Your Font', system-ui, sans-serif;
}
```

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── components/          # Reusable components
│   │   │   ├── ui/              # UI component library
│   │   │   ├── Navbar.tsx       # Navigation component
│   │   │   ├── Footer.tsx       # Footer component
│   │   │   ├── RootLayout.tsx   # Layout wrapper
│   │   │   └── ThemeProvider.tsx # Theme context
│   │   ├── pages/               # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Products.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Blog.tsx
│   │   │   ├── BlogPost.tsx
│   │   │   ├── BookConsultation.tsx
│   │   │   └── NotFound.tsx
│   │   ├── App.tsx              # Main app component
│   │   └── routes.tsx           # Route configuration
│   └── styles/                  # Global styles
│       ├── fonts.css
│       ├── theme.css
│       ├── tailwind.css
│       └── index.css
├── package.json
├── vite.config.ts
└── README.md
```

## Features Detail

### Dark/Light Mode
- Automatic theme persistence via localStorage
- Smooth transitions between themes
- Accessible toggle button in navbar

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Collapsible mobile menu
- Optimized layouts for all screen sizes

### Static Forms
- All forms are UI-only (no backend)
- Form validation included
- Ready to integrate with your backend API

### SEO Ready
- Semantic HTML structure
- Proper heading hierarchy
- Meta tags ready for customization

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This is a demo/template project. Customize and use as needed for your business.

## Support

For questions or issues, please open an issue in the repository.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
