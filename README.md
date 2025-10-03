# Space Developer Portfolio 🚀

A stunning space-themed developer portfolio website featuring animated stars, shooting comets, cosmic visual effects, and an interactive skills constellation. This portfolio showcases a unique design aesthetic perfect for developers in AI, web development, and automation.

## 🌟 Features

- **Cosmic Design**: Dark space theme with twinkling stars and shooting comets
- **Fully Responsive**: Mobile-first design with breakpoints for tablets (768px), phones (480px), and small devices (360px)
- **Interactive Greeting**: Multi-language greeting switcher (15 languages including Japanese, Chinese, Korean, etc.)
- **Tech Constellation**: Artistic skills section with animated planet orbs and rotating rings
- **Timeline Journey**: Beautiful vertical timeline showing career progression
- **Music Player**: Built-in background music player with volume controls
- **Smooth Animations**: Interactive hover effects, glowing elements, and smooth scrolling
- **Modern Tech Stack**: Built with vanilla HTML, CSS, and JavaScript - no dependencies!
- **Clean Code**: Well-structured and maintainable codebase

## 🛸 Live Demo

Visit the live site: [Your Portfolio URL will be here]

## 🚀 Quick Start

### Option 1: Simple Setup
1. Clone the repository:
```bash
git clone https://github.com/yourusername/space-portfolio.git
cd space-portfolio
```

2. Open `index.html` in your browser

That's it! No build process or dependencies required.

### Option 2: Local Server (Recommended)
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 📂 Project Structure

```
space-portfolio/
│
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Interactive features and effects
├── profile.jpg         # Profile picture (add your own)
├── music.mp3           # Background music file (add your own)
└── README.md           # Project documentation
```

## 🎨 How It Works

### HTML Structure (`index.html`)

The website is organized into semantic sections:

1. **Hero Section**: Profile image with multi-language greeting
2. **About Section**: Personal introduction with animated bullet points
3. **Journey Section**: Timeline with career milestones
4. **Projects Section**: Grid layout for showcasing projects
5. **Skills Section**: "Tech Constellation" with animated planet orbs
6. **Contact Section**: Call-to-action with email link
7. **Footer**: Social media links
8. **Music Player**: Floating widget with volume control

### CSS Architecture (`styles.css`)

**CSS Variables** (Lines 7-17):
```css
--primary-color: #818cf8    /* Main purple-blue */
--accent-color: #fbbf24     /* Gold accent */
--text-light: #e0e7ff       /* Light text */
--bg-dark: #0f0f23          /* Dark background */
```

**Key Sections**:
- **Base Styles** (1-90): Reset, variables, container
- **Navigation** (92-168): Fixed navbar with hamburger menu
- **Hero Section** (170-335): Profile image, animated greeting
- **Timeline** (455-564): Alternating left/right timeline items
- **Skills Constellation** (599-760): Animated planet orbs with rings
- **Music Player** (685-801): Floating widget with volume slider
- **Responsive Design** (803-1094): Mobile breakpoints

**Animation Highlights**:
- `twinkle` (44-47): Stars fading in/out
- `shoot` (69-81): Shooting comet effect
- `orbit-rotate` (685-688): Planet rings rotating in 3D
- `pulse-soft` (719-726): Music player glow effect

### JavaScript Features (`script.js`)

**1. Starfield Animation** (16-55):
- Creates 150 randomly positioned twinkling stars
- Generates shooting comets every 8 seconds
- Stars have randomized size, position, and animation delay

**2. Music Player** (60-98):
- Auto-plays on page load (if browser allows)
- Toggle play/pause functionality
- Volume slider with percentage display
- Persists volume setting

**3. Multi-Language Greeting** (100-128):
- Cycles through 15 different language greetings
- Click to switch languages
- Includes: Japanese, English, Chinese, Spanish, French, German, Italian, Portuguese, Korean, Russian, Arabic, Hindi, Turkish, Swedish, Zulu

**4. Smooth Scrolling** (1-13):
- Handles anchor link navigation
- Smooth scroll behavior for internal links

## 🎨 Customization Guide

### 1. Update Your Information

**Profile Image**:
Replace `profile.jpg` with your own image (recommended: 400x400px, circular crop works best)

**Personal Details** in `index.html`:
- Line 21: Update name in hero title
- Lines 31-37: Rewrite About Me section
- Lines 47-73: Update timeline with your journey
- Lines 108-211: Customize skills and technologies
- Line 113: Update email address

### 2. Customize Colors

In `styles.css`, modify CSS variables (lines 7-17):
```css
:root {
    --primary-color: #your-color;
    --accent-color: #your-color;
    --text-light: #your-color;
    /* etc. */
}
```

### 3. Add Projects

Replace the placeholder in lines 83-88 of `index.html`:
```html
<div class="project-card">
    <div class="project-content">
        <h3>Project Name</h3>
        <p>Project description</p>
        <div class="project-links">
            <a href="#" class="btn btn-outline">View Project</a>
        </div>
    </div>
</div>
```

### 4. Modify Skills

In `index.html` (lines 108-211), each skill category follows this pattern:
```html
<div class="skill-orbit">
    <div class="skill-planet" data-category="category-name">
        <div class="planet-core">
            <i class="fas fa-icon-name"></i>
        </div>
        <div class="planet-ring"></div>
    </div>
    <div class="skill-details">
        <h3>Category Name</h3>
        <div class="skill-tags">
            <span class="skill-tag">Skill 1</span>
            <span class="skill-tag">Skill 2</span>
        </div>
    </div>
</div>
```

**Planet Colors** (defined in `styles.css` lines 695-718):
- `data-category="ai"`: Blue-Indigo gradient
- `data-category="languages"`: Golden-Orange gradient
- `data-category="web"`: Green-Emerald gradient
- `data-category="automation"`: Red-Rose gradient
- `data-category="data"`: Purple-Violet gradient
- `data-category="soft"`: Orange-Tangerine gradient

### 5. Add Background Music

Add your music file as `music.mp3` in the root directory. Supported formats: MP3, WAV, OGG.

### 6. Update Social Links

In `index.html` (lines 121-126):
```html
<a href="https://github.com/yourusername" class="social-icon">
    <i class="fab fa-github"></i>
</a>
```

## 📱 Responsive Breakpoints

The website is optimized for:
- **Desktop**: 1200px+ (default)
- **Tablet**: 768px and below
- **Mobile**: 480px and below
- **Small Mobile**: 360px and below

**Key Mobile Adjustments**:
- Timeline switches to single-column left-aligned
- Skills constellation stacks vertically
- Profile image scales down
- Font sizes reduce proportionally
- Touch-friendly spacing

## 🌐 Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Connect your repository
5. Deploy settings:
   - Build command: (leave empty)
   - Publish directory: `/`
6. Click "Deploy site"

### Deploy to GitHub Pages

1. Push code to GitHub repository
2. Go to Settings → Pages
3. Source: Deploy from a branch
4. Branch: `main` (or `master`)
5. Folder: `/ (root)`
6. Save and wait for deployment

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

## 🛠 Technologies Used

- **HTML5**: Semantic markup, accessibility features
- **CSS3**:
  - CSS Grid & Flexbox for layouts
  - CSS Variables for theming
  - Animations & Transitions
  - Media Queries for responsiveness
  - Backdrop filters for glassmorphism
- **JavaScript (ES6+)**:
  - DOM manipulation
  - Event listeners
  - Animation loops
  - Audio API
- **Font Awesome 6.5.1**: Icons
- **Google Fonts**:
  - Space Grotesk (headings)
  - Inter (body text)

**No frameworks or build tools required!** Pure vanilla code for maximum performance and easy customization.

## 🎯 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## ⚡ Performance Tips

- Images are optimized (recommended < 500KB)
- CSS animations use GPU acceleration (`transform`, `opacity`)
- Minimal JavaScript for fast load times
- No external dependencies except fonts and icons

## 🐛 Troubleshooting

**Music won't autoplay:**
- Most browsers block autoplay. Users need to interact with the page first.
- Click the music button to start playback manually.

**Stars not appearing:**
- Check browser console for errors
- Ensure `script.js` is loaded correctly

**Layout broken on mobile:**
- Clear browser cache
- Check that viewport meta tag is present in HTML

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Inspired by space exploration and cosmic aesthetics

---

Made with ❤️ and stardust ✨ 
