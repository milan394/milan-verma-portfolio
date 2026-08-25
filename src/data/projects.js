const projects = [
  {
    id: 1,
    title: "ResumeCraft",
    description:
      "A full-featured, browser-based resume builder with 100 curated templates, live A4 preview, ATS scoring engine, and one-click PDF export.",
    shortDescription:
      "Browser-based resume builder with 100 templates, live preview, ATS scoring, and PDF export.",
    technologies: ["React 18", "Vite 5", "React Router 6", "html2canvas", "jsPDF", "Lucide Icons"],
    features: [
      "100 unique resume templates across 9 categories",
      "Section-by-section builder with 14 resume sections",
      "Live A4 preview that updates instantly as you type",
      "Client-side PDF export with smart multi-page cuts",
      "Frontend-only ATS compatibility scoring engine",
      "AI-powered writing assistant for summaries and descriptions",
      "Template gallery with search, filters, and favorites",
      "Multi-resume library with auto-save to localStorage",
      "Profile photo upload support",
      "Purpose-based smart recommendations",
      "Fully responsive with mobile edit/preview toggle",
      "Code-split routes for fast initial load",
    ],
    github: "",
    live: "",
    isCaseStudy: true,
    caseStudy: {
      problem: `Creating a professional resume is harder than it should be. Most people open a blank document and struggle to organize their information, pick the right layout, and make it look polished enough for recruiters. Existing tools either lock good templates behind paywalls, force users through complicated editors, or produce generic-looking results. Students and early-career professionals — who need strong resumes the most — often have the least experience making them.`,

      whyBuilt: `As a frontend developer and a student myself, I kept running into the same frustration: building a clean, professional resume from scratch was unnecessarily difficult. I wanted to create something practical — a tool that solves a real problem I personally face. Rather than building another demo project, I set out to build a complete, usable product that anyone could open in their browser and walk away with a recruiter-ready resume. No sign-ups, no paywalls, no design skills required.`,

      solution: `ResumeCraft is a browser-based resume builder that guides users through a structured, section-by-section creation flow. Users fill in personal details, education, skills, projects, experience, and more through purpose-built form components. A live A4 preview stays synchronized with every keystroke, showing exactly how the resume will look on paper.

The app ships with 100 unique templates generated algorithmically across 9 categories — Minimal, Modern, Professional, Corporate, Creative, ATS-Friendly, Student/Fresher, Executive, and Academic. Each template carries a full declarative configuration covering layout, typography, accent colors, photo placement, section ordering, and skill display style. A uniqueness guard guarantees no two templates render identically.

An integrated ATS compatibility scoring engine analyzes the resume across 9 weighted categories — contact completeness, summary quality, education, skills, experience, projects, certifications, template structure, and overall completeness — then provides actionable improvement suggestions.

A deterministic writing assistant helps users generate professional summaries, suggests relevant skills based on their degree and experience, and rewrites weak descriptions with stronger action verbs. Everything stays frontend-only: no data leaves the browser.

Users can save multiple resumes to a personal library, duplicate entries, rename them, and export any resume as a print-quality A4 PDF with smart multi-page cuts that avoid slicing through headings.`,

      challenges: [
        "Synchronizing a live A4 preview with 14 independent form sections while keeping the UI responsive",
        "Generating 100 visually distinct templates algorithmically without manual design work for each",
        "Building a client-side PDF export engine that handles multi-page documents with clean page breaks",
        "Creating a deterministic ATS scoring system that provides genuinely useful feedback without randomness",
        "Making the builder usable on mobile with limited screen real estate for both editing and previewing",
        "Managing complex state across resume content, template selection, section toggles, and library persistence",
      ],

      solutions: [
        "Used React Context with debounced auto-save to manage global resume state. Each form component receives only the slice it needs, and the preview re-renders through a shared context — avoiding prop-drilling while keeping updates efficient.",
        "Built a template recipe system where each category defines pools of layout options, color palettes, fonts, and section orderings. A uniqueness guard hashes each candidate configuration and discards duplicates, guaranteeing 100 visually distinct outputs from declarative rules.",
        "Implemented a custom PDF pipeline: render the resume off-screen at exact A4 dimensions, rasterize at 2x with html2canvas, scan pixel data for clean horizontal cut lines between sections, then assemble pages with jsPDF. This produces print-quality PDFs entirely in the browser.",
        "Designed a category-based scoring engine that evaluates real resume content against recruiter expectations. Each category (contact, summary, skills, etc.) has weighted checks that produce concrete suggestions — like 'add 3 more technical skills' or 'your summary is too short' — rather than vague ratings.",
        "Added a mobile bottom navigation bar that toggles between Edit and Preview modes. The builder and preview columns show/hide based on the active mode, giving each view full screen width on small devices.",
        "Created a ResumeContext provider that centralizes all resume state — content, template, sections, library — with memoized selectors. Auto-save debounces to localStorage every 500ms, and a migration system handles format upgrades across versions.",
      ],

      technologies_detail: [
        { name: "React 18", role: "Component architecture, hooks, context, lazy loading" },
        { name: "Vite 5", role: "Build tooling, HMR, code splitting" },
        { name: "React Router 6", role: "Client-side routing with nested routes and lazy-loaded pages" },
        { name: "html2canvas", role: "Client-side DOM rasterization for PDF generation" },
        { name: "jsPDF", role: "PDF document assembly from rasterized canvas slices" },
        { name: "Lucide React", role: "Consistent icon system throughout the UI" },
        { name: "CSS", role: "Custom properties, responsive layouts, print styles" },
      ],

      learnings: `Building ResumeCraft taught me how to think in terms of real products rather than isolated features. I learned to design component architectures that scale — 14 form components sharing one context, a template renderer that consumes declarative configs, and a PDF engine that works entirely client-side. The template generation system pushed me to think algorithmically about visual design. The ATS scoring engine taught me how to translate qualitative resume advice into deterministic, testable rules. Most importantly, I learned how to scope a project ambitiously while keeping every piece buildable and maintainable.`,

      outcome: `ResumeCraft is a fully functional resume creation tool — not a mockup or prototype. A user can select their career purpose, pick from 100 templates, fill in their details through a guided builder, see a live A4 preview, check their resume's ATS compatibility, get AI-assisted writing suggestions, and download a print-quality PDF. Everything runs in the browser with no backend, no sign-ups, and no data leaving the device.`,
    },
  },
  {
    id: 2,
    title: "Responsive Landing Pages",
    description:
      "Designed and developed multiple responsive landing pages with modern UI/UX principles, focusing on clean layouts, mobile-first design, and engaging user experiences.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Mobile-first responsive design",
      "Modern UI/UX patterns",
      "Cross-browser compatibility",
      "Optimized performance",
      "Clean semantic HTML",
    ],
    github: "",
    live: "",
  },
  {
    id: 3,
    title: "Interactive Web Applications",
    description:
      "Built interactive web applications using React and modern JavaScript, focusing on component-based architecture and dynamic user interfaces.",
    technologies: ["React", "JavaScript", "CSS3", "HTML5"],
    features: [
      "Component-based architecture",
      "Dynamic data rendering",
      "State management",
      "Responsive layouts",
      "Clean code structure",
    ],
    github: "",
    live: "",
  },
];

export default projects;
