# ADmyBRAND AI Suite - Landing Page

A stunning, modern landing page for ADmyBRAND AI Suite - an AI-powered marketing tool and component system designed for marketers and startups.

![ADmyBRAND AI Suite](https://img.shields.io/badge/Built%20with-Next.js-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## ✨ Features

### 🎨 Design & UI
- Glassmorphism cards with backdrop blur
- Gradient backgrounds (purple → pink)
- Responsive and mobile-first layout
- Dark theme with professional accents

### 💡 Interactivity
- Framer Motion animations and scroll effects
- Responsive navbar with mobile support
- Infinite two-row testimonial carousel
- Accordion-style FAQ section
- Pricing toggle for monthly/yearly plans

### 📄 Page Sections
1. **Hero** – Headline, subtext, CTA, and imagery  
2. **Features** – 8 AI-driven features with icons  
3. **Pricing** – 3-tier pricing cards and billing toggle  
4. **Testimonials** – Client feedback with ratings  
5. **FAQ** – Expandable questions  
6. **Footer** – Links, socials, and newsletter

### 🧪 Technical Stack
- **Next.js 14** (App Router with server components)
- **TypeScript** for type safety
- **Tailwind CSS** utility framework
- **shadcn/ui** for accessible components
- **Framer Motion** for animations
- **Optimized Images** with responsive sizing

---

## 🛠️ Getting Started

### Prerequisites
- **Node.js v18+**
- npm, yarn, or pnpm

### Installation

```bash
git clone https://github.com/your-username/admybrand-landing.git
cd admybrand-landing

# install dependencies
npm install   # or yarn / pnpm install

# start development server
npm run dev   # or yarn dev / pnpm dev

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the landing page.

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 📁 Project Structure

admybrand-landing/
├── app/
│   ├── layout.tsx           # Root layout and theming
│   ├── page.tsx             # Main landing page
│   └── globals.css          # Global styles & Tailwind
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── faq-section.tsx      # FAQ accordion
│   ├── features-section.tsx # Feature blocks
│   ├── footer.tsx           # Footer layout
│   ├── glass-card.tsx       # Reusable glass UI card
│   ├── hero-section.tsx     # Hero section
│   ├── navigation.tsx       # Top nav with CTA
│   ├── pricing-section.tsx  # Pricing cards & toggle
│   ├── section-container.tsx# Wrapper for consistent padding
│   └── testimonials-section.tsx # Review carousel
├── hooks/                   # Custom React hooks
├── lib/                     # Utility helpers
└── public/                  # Static assets (images, icons)

## 🎨 Design System

### Colors
- **Primary**: Purple to Pink gradients (\`from-purple-600 to-pink-600\`)
- **Secondary**: Indigo and Purple variations
- **Accent**: Green for highlights (\`bg-green-500\`)
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

## 📞 Support

For support and questions:
- Create an issue in this repository
- Contact: support@admybrand.ai
- Documentation: [docs.admybrand.ai](https://docs.admybrand.ai)

---

Built with ❤️ for marketers and startups worldwide.
