# Portfolio Website - Sanjay R

A modern, animated portfolio website built with React and GSAP, showcasing my work as an AI Engineer & Innovator.

## 🚀 Live Demo

Deploy this portfolio to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/sanjay18-r/portfolio)

## 🛠️ Tech Stack

- **Frontend**: React 18.2.0
- **Animation**: GSAP 3.12.2 with ScrollTrigger
- **Styling**: Custom CSS with advanced animations
- **Deployment**: Vercel (optimized)
- **Build Tool**: Create React App

## ✨ Features

- 🎨 Modern, responsive design with glass-morphism effects
- 🌊 Smooth scroll animations and transitions
- 🎭 Interactive hover effects and floating particles
- 📱 Mobile-first responsive layout
- ⚡ Optimized for performance and SEO
- 🚀 Ready for Vercel deployment

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/sanjay18-r/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🌐 Deployment to Vercel

### Option 1: Deploy with Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# For production deployment
vercel --prod
```

### Option 2: Deploy via Git Integration
1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically deploy on every push to main branch

### Option 3: One-Click Deploy
Click the "Deploy with Vercel" button above to deploy instantly.

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.js      # Hero section with animations
│   ├── About.js       # About me section
│   ├── Skills.js      # Skills showcase
│   ├── Projects.js    # Project portfolio
│   └── Contact.js     # Contact form and info
├── data.js           # Personal and project data
├── App.js            # Main app component
├── App.css           # Global styles and animations
└── index.js          # React DOM entry point
```

## 🎨 Customization

### Personal Information
Update your personal details in `src/data.js`:

```javascript
export const personalData = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... other details
};
```

### Projects
Add your projects in `src/data.js`:

```javascript
export const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description",
    technologies: ["React", "Node.js"],
    github: "https://github.com/username/repo",
    live: "https://your-project.com"
  }
];
```

### Styling
Customize colors and animations in `src/App.css`. The project uses CSS custom properties for easy theming.

## 🔧 Configuration

### Vercel Configuration
The project includes a `vercel.json` file with optimized settings for:
- Static file caching
- SPA routing
- Build optimization

### Environment Variables (Optional)
Create a `.env.local` file for local development:
```
REACT_APP_SITE_URL=http://localhost:3000
REACT_APP_FORM_ENDPOINT=your-form-endpoint
```

## 📊 Performance

- ⚡ Lighthouse Score: 95+ (Performance)
- 🎯 Core Web Vitals optimized
- 📦 Tree-shaken and minified builds
- 🖼️ Optimized image loading
- 🎨 CSS animations using hardware acceleration

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Contact

**Sanjay R** - AI Engineer & Innovator
- 📧 Email: sanjaydharsaan007@gmail.com
- 💼 LinkedIn: [sanjay-r-1b5758290](https://www.linkedin.com/in/sanjay-r-1b5758290)
- 🐙 GitHub: [sanjay18-r](https://github.com/sanjay18-r)

---

⭐ Star this repo if you found it helpful!
