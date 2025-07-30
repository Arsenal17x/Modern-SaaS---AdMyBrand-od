# ADmyBRAND AI Suite - Landing Page

A stunning, modern landing page for ADmyBRAND AI Suite - an AI-powered marketing tool and component system designed for marketers and startups.

![ADmyBRAND AI Suite](https://img.shields.io/badge/Built%20with-Next.js-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## 🚀 Features

### Modern Design & UI
- **Glassmorphism Effects**: Beautiful glass-like components with backdrop blur
- **Gradient Backgrounds**: black via-blue to-black gradients throughout the design
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Dark Theme**: Professional dark theme with accent colors

### Interactive Components
- **Smooth Animations**: Framer Motion animations with scroll triggers
- **Interactive Navigation**: Hover effects, active states, and mobile menu
- **Dynamic Testimonials**: Two-row infinite carousel with opposite directions
- **Collapsible FAQ**: Clean accordion with numbered items and arrow indicators
- **Pricing Toggle**: Monthly/yearly billing switch with savings indicator
- **Back-to-top**: Back-to-top Button

### Landing Page Sections
1. **Hero Section**: Compelling headline, subtext, CTAs, and hero imagery
2. **Features Section**: 8 AI-powered features with icons and descriptions
3. **Pricing Section**: 3-tier pricing with trust indicators and company logos
4. **Testimonials**: Customer reviews with photos and star ratings
5. **FAQ Section**: 8 common questions with expandable answers
6. **Footer**: Comprehensive links, social media, and newsletter signup

### Technical Features
- **Next.js 14**: App Router with server components
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality, accessible UI components
- **Framer Motion**: Smooth animations and transitions
- **Responsive Images**: Optimized placeholder images with proper sizing

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18.0 or later
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository**
   ```
   git clone https://github.com/your-username/admybrand-landing.git
   cd admybrand-landing
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Run the development server**
   ```
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the landing page.

### Build for Production

```
npm run build
npm start
```

## 📁 Project Structure
```
admybrand-landing/
├── app/
│   ├── signin/
│   │   └── page.tsx             # Sign-in page route
│   ├── signup/
│   │   └── page.tsx             # Sign-up page route
│   ├── globals.css              # Global styles and Tailwind CSS imports
│   └── layout.tsx               # Root layout including fonts and theme provider
│
├── components/
│   └── ui/                      # All UI components (modular and reusable)
│       ├── about-section.tsx           # About section describing the product
│       ├── back-to-top.tsx             # Scroll-to-top floating button
│       ├── contact-section.tsx         # Contact form with glass effect
│       ├── faq-section.tsx             # FAQ accordion component
│       ├── features-section.tsx        # Feature highlight grid
│       ├── footer.tsx                  # Footer with links and subscription
│       ├── glass-card.tsx              # Reusable glassmorphic styled card
│       ├── hero-section.tsx            # Hero section with CTA
│       ├── lazy-section.tsx            # Lazy-loaded section example
│       ├── navigation.tsx              # Top navigation bar with logo/auth
│       ├── optimized-image.tsx         # Wrapper around Next/Image
│       ├── pricing-section.tsx         # Pricing plans with toggle support
│       ├── section-container.tsx       # Wrapper to maintain layout consistency
│       ├── testimonials-section.tsx    # Client feedback carousel
│       └── theme-provider.tsx          # Theme context provider (e.g. dark/light)
│
├── hooks/                     # Custom React hooks
├── lib/                       # Utility functions (e.g. formatters, constants)
├── public/                    # Static files like images, favicon, etc.
├── styles/                    # Additional custom CSS or Tailwind config
```
## 🎨 Design System

### Colors
- **Primary**: Black to Blue gradients (\`from-black via-blue-900 to-black\`)
- **Secondary**: Indigo and Purple variations
- **Background**: Dark theme with glass overlays

### Typography
- **Headings**: Large, bold fonts with gradient text effects
- **Body**: Clean, readable text with proper hierarchy
- **Special**: Gradient text for emphasis and branding

### Components
- **Glass Cards**: Semi-transparent with backdrop blur
- **Buttons**: Gradient backgrounds with hover effects
- **Navigation**: Sticky header with glassmorphism
- **Animations**: Smooth transitions and scroll-triggered reveals

## 🔧 Customization

### Updating Content
1. **Hero Section**: Edit \`components/hero-section.tsx\`
2. **Features**: Modify the features array in \`components/features-section.tsx\`
3. **Pricing**: Update pricing tiers in \`components/pricing-section.tsx\`
4. **Testimonials**: Add/edit testimonials in \`components/testimonials-section.tsx\`

### Styling
- **Colors**: Update Tailwind config in \`tailwind.config.ts\`
- **Fonts**: Modify font imports in \`app/layout.tsx\`
- **Animations**: Adjust Framer Motion settings in individual components

### Adding Sections
1. Create new component in \`components/\` directory
2. Import and add to \`app/page.tsx\`
3. Follow existing patterns for consistency

## 📱 Responsive Breakpoints

- **Mobile**: \`< 768px\` - Single column layout
- **Tablet**: \`768px - 1024px\` - Two column layout
- **Desktop**: \`> 1024px\` - Full multi-column layout

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy automatically on push to main branch

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js** - React framework for production
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful and accessible UI components
- **Framer Motion** - Animation library for React
- **Lucide React** - Beautiful icon library

Built with ❤️ for marketers and startups worldwide.
