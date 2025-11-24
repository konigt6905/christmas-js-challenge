# 🎄 Christmas JavaScript Challenge

A festive, interactive landing page featuring 30 beginner-friendly JavaScript coding challenges. Built with React, Vite, and Tailwind CSS, this project brings holiday cheer to learning JavaScript fundamentals!

## ✨ Features

- **30 Beginner Challenges**: Progressively designed JavaScript exercises covering fundamentals
- **Interactive Code Editor**: Built-in syntax highlighting with festive Christmas theme
- **Live Code Execution**: Submit answers and get instant feedback with clear error messages
- **Progress Tracking**: Browser cookie-based progress storage (no backend required)
- **Festive Animations**: Snowflakes, twinkling stars, floating gifts, and more Christmas magic
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Accessibility**: Supports reduced motion preferences and keyboard navigation
- **100% Static**: No backend needed - deploys easily to GitHub Pages

## 🎨 Christmas Theme

The design features:
- Custom Christmas color palette (red, green, gold)
- Animated snowflakes falling across the screen
- Twinkling stars and floating gift icons
- Glassmorphism cards with festive shadows
- Custom scrollbar with Christmas gradient
- Fun Easter eggs on special challenges (#25 Santa, #30 Star)

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd christmas-js-challenge
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📦 Project Structure

```
christmas-js-challenge/
├── src/
│   ├── components/
│   │   ├── Hero.jsx              # Landing hero section
│   │   ├── ChallengeGrid.jsx     # Challenge selection grid
│   │   ├── ChallengeDetail.jsx   # Individual challenge view
│   │   ├── CodeEditor.jsx        # Syntax-highlighted editor
│   │   ├── ProgressBar.jsx       # Progress tracking display
│   │   ├── Snowflakes.jsx        # Animated snowflakes
│   │   └── Footer.jsx            # Festive footer
│   ├── data/
│   │   └── challenges.js         # 30 challenge definitions
│   ├── utils/
│   │   ├── progress.js           # Cookie-based storage
│   │   ├── codeExecutor.js       # Safe code execution
│   │   └── syntaxHighlight.js    # JS syntax highlighting
│   ├── App.jsx                   # Main app component
│   ├── main.jsx                  # App entry point
│   └── index.css                 # Tailwind + custom styles
├── public/                       # Static assets
├── .github/workflows/
│   └── deploy.yml                # GitHub Pages deployment
└── package.json                  # Dependencies
```

## 🎯 Challenge System

Each challenge includes:
- **Title & Description**: Clear explanation of the task
- **Starter Code**: Optional boilerplate to get started
- **Solution**: Hidden solution (revealed on request)
- **Test Code**: Automatic validation logic
- **Progress Tracking**: Answered/revealed status saved in cookies

### Challenge Data Structure

```javascript
{
  id: 1,
  title: "Challenge Title",
  description: "What the user needs to accomplish",
  starterCode: "function example() {\n  // your code here\n}",
  solution: "function example() {\n  return 'solution';\n}",
  testCode: "return example() === 'solution';"
}
```

## 🌟 Key Technologies

- **React 18**: Component-based UI
- **Vite**: Lightning-fast build tool
- **Tailwind CSS v4**: Utility-first styling with custom theme
- **Lucide React**: Beautiful icons
- **js-cookie**: Simple cookie management
- **GitHub Pages**: Free static hosting

## 🎁 Features in Detail

### Progress Tracking
- Stores challenge completion in browser cookies
- Tracks: answered (correctly solved), revealed (solution shown), user code
- Displays progress percentage and stats
- Reset progress option with confirmation

### Code Editor
- Custom syntax highlighting for JavaScript
- Highlights: keywords, strings, numbers, functions, comments
- Tab key support for indentation
- Overlay display showing highlighted code
- Read-only mode for solutions

### Error Handling
- Catches syntax and runtime errors gracefully
- Displays clear, non-blocking error messages
- Preserves user code on error
- Safe code execution using Function constructor

### Christmas Animations
- 50 animated snowflakes with random properties
- Floating gifts and twinkling stars
- Pulsing background orbs
- Smooth scroll animations
- Hover micro-interactions
- Respects prefers-reduced-motion

## 🚀 Deployment to GitHub Pages

### Automatic Deployment

The project includes a GitHub Actions workflow that automatically deploys to GitHub Pages on every push to the `main` branch.

1. Enable GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Source: GitHub Actions

2. Update `vite.config.js` with your repository name:
```javascript
base: '/your-repo-name/',
```

3. Push to the `main` branch - deployment happens automatically!

### Manual Deployment

```bash
npm run build
# Upload contents of dist/ to your hosting service
```

## 🎨 Customization

### Changing Colors

Edit the `@theme` section in `src/index.css`:

```css
@theme {
  --color-christmas-red: #C41E3A;
  --color-christmas-green: #0F7F3E;
  --color-christmas-gold: #FFD700;
  /* ...more colors */
}
```

### Adding More Challenges

Add to `src/data/challenges.js`:

```javascript
{
  id: 31,
  title: "Your Challenge",
  description: "Description here",
  starterCode: "// starter code",
  solution: "// solution",
  testCode: "return /* test condition */;"
}
```

### Adjusting Animations

Modify animation properties in `src/index.css` `@theme` section:

```css
--animate-float: float 3s ease-in-out infinite;
--animate-twinkle: twinkle 2s ease-in-out infinite;
```

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Modern mobile browsers

## 🙏 Acknowledgments

- Design inspiration from modern SaaS landing pages
- Tailwind CSS for the amazing utility-first framework
- Lucide for beautiful, consistent icons
- The JavaScript community for coding challenge ideas

## 📄 License

This project is open source and available for educational purposes.

---

**Merry Coding & Happy Holidays!** 🎄✨

Made with ❤️, ☕, and lots of festive cheer!
