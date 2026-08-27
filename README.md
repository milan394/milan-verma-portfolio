# Milan Verma Portfolio

A clean, modern, and fully responsive personal portfolio website built with React and Vite. Designed to showcase frontend development skills and projects to recruiters and freelance clients.

**Live site:** [https://milan394.github.io/milan-verma-portfolio/](https://milan394.github.io/milan-verma-portfolio/)

## Features

- **Sticky Navigation** — Smooth-scrolling navbar with active section tracking and mobile hamburger menu
- **Hero Section** — Professional introduction with profile image, social links, and call-to-action buttons
- **About Section** — Bio with quick facts and key stats
- **Skills Section** — Categorized skill cards with custom SVG icons (Frontend, Web & Design, Tools)
- **Projects Section** — Project cards with a detailed ResumeCraft case study modal featuring 8 sections (Problem, Solution, Challenges, Technologies, Learnings, Outcome)
- **Education Timeline** — Academic background with timeline card
- **Resume Download** — Downloadable PDF resume
- **Interests Section** — Personal interests and hobbies
- **Contact Section** — Contact form with email, phone, and LinkedIn links
- **Footer** — Navigation links, social profiles, and copyright

### Design

- Light, premium color palette (white, warm beige, soft cream, neutral gray, dark charcoal)
- Modern typography using Inter font
- Subtle scroll-triggered animations with `prefers-reduced-motion` support
- Fully responsive across desktop, tablet, and mobile
- Semantic HTML with accessibility attributes (ARIA labels, focus states, keyboard navigation)
- SEO meta tags and Open Graph metadata

## Technologies

- **React 18** — Component-based UI architecture
- **Vite 5** — Fast build tool and dev server
- **CSS3** — Custom properties, responsive layouts, animations
- **JavaScript (ES6+)** — Modern language features
- Custom SVG icons for skills section

## Project Structure

```
Milan-portfolio/
├── public/
│   └── assets/
│       ├── profile.jpg      # Profile photo
│       └── resume.pdf       # Downloadable resume
├── src/
│   ├── components/
│   │   ├── Navbar.jsx/css
│   │   ├── Hero.jsx/css
│   │   ├── About.jsx/css
│   │   ├── Skills.jsx/css
│   │   ├── Projects.jsx/css
│   │   ├── Education.jsx/css
│   │   ├── Resume.jsx/css
│   │   ├── Interests.jsx/css
│   │   ├── Contact.jsx/css
│   │   ├── Footer.jsx/css
│   │   └── SkillIcons.jsx
│   ├── data/
│   │   ├── config.js        # Personal info, links, social URLs
│   │   ├── projects.js      # Project data and case study content
│   │   └── skills.js        # Skill categories and items
│   ├── hooks/
│   │   ├── useInView.js     # Scroll-triggered animation hook
│   │   └── useScrollDirection.js
│   ├── styles/
│   │   └── global.css       # CSS variables, reset, global styles
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── .gitignore
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn

### Installation

```bash
git clone https://github.com/your-username/milan-portfolio.git
cd milan-portfolio
npm install
```

### Development

```bash
npm run dev
```

Opens the site at `http://localhost:5173` with hot module replacement.

### Production Build

```bash
npm run build
```

Output is written to the `dist/` directory. To preview the production build locally:

```bash
npm run preview
```

## Customization

1. **Personal Info** — Edit `src/data/config.js` to update name, email, phone, LinkedIn URL, bio, and other personal details
2. **Projects** — Edit `src/data/projects.js` to add, remove, or modify projects
3. **Skills** — Edit `src/data/skills.js` to update skill categories and items
4. **Profile Image** — Replace `public/assets/profile.jpg` with your photo
5. **Resume** — Replace `public/assets/resume.pdf` with your resume

## License

This project is personal work by Milan Verma.
