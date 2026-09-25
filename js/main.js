/**
 * Rajesh S - Web Developer Portfolio Logic
 * Includes Background Particle Effects, Interactive Custom Cursor,
 * Floating Social System Skills Graph, Smooth Scroll Fill Timeline & Reveal Effects
 */

// --- Resume & Skills Data ---
const SKILLS_DATA = [
  // Frontend Galaxy
  {
    id: "html",
    name: "HTML5",
    category: "frontend",
    level: "Expert",
    proficiency: 98,
    icon: "public/icons/html.webp",
    desc: "Semantic markup, accessibility standards, HTML5 APIs",
    group: "Frontend Galaxy",
    connections: ["css", "js", "sass", "tailwind"],
  },
  {
    id: "css",
    name: "CSS3",
    category: "frontend",
    level: "Expert",
    proficiency: 95,
    icon: "public/icons/css.webp",
    desc: "Flexbox, Grid, CSS animations, responsive layouts",
    group: "Frontend Galaxy",
    connections: ["html", "sass", "tailwind", "bootstrap"],
  },
  {
    id: "sass",
    name: "SCSS / Sass",
    category: "frontend",
    level: "Advanced",
    proficiency: 90,
    icon: "public/icons/sass.webp",
    desc: "Mixins, nesting, variables, modular BEM styling",
    group: "Frontend Galaxy",
    connections: ["css", "html"],
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "frontend",
    level: "Expert",
    proficiency: 98,
    icon: "public/icons/tailwind.webp",
    desc: "Utility-first architecture, custom plugins & grid systems",
    group: "Frontend Galaxy",
    connections: ["css", "html", "react"],
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    category: "frontend",
    level: "Advanced",
    proficiency: 88,
    icon: "public/icons/bootstrap.webp",
    desc: "Responsive layouts, UI component frameworks",
    group: "Frontend Galaxy",
    connections: ["css", "html"],
  },

  // Backend & Server Node
  {
    id: "nodejs",
    name: "NodeJS",
    category: "backend",
    level: "Advanced",
    proficiency: 92,
    icon: "public/icons/nodejs.webp",
    desc: "REST APIs, server-side logic, event loop performance",
    group: "Backend Engine",
    connections: ["express", "mongodb", "js", "rest"],
  },
  {
    id: "express",
    name: "ExpressJS",
    category: "backend",
    level: "Advanced",
    proficiency: 93,
    icon: "public/icons/express.webp",
    desc: "Middleware pipelines, routing, API security, controllers",
    group: "Backend Engine",
    connections: ["nodejs", "mongodb", "rest", "js"],
  },
  {
    id: "codeigniter",
    name: "CodeIgniter",
    category: "frameworks",
    level: "Intermediate",
    proficiency: 82,
    icon: "public/icons/codeigniter.webp",
    desc: "MVC architecture, PHP backend services, ERP solutions",
    group: "Backend Engine",
    connections: ["php", "mysql", "rest"],
  },

  // Languages & Core Logic
  {
    id: "js",
    name: "JavaScript (ES6+)",
    category: "languages",
    level: "Expert",
    proficiency: 96,
    icon: "public/icons/javascript.webp",
    desc: "Promises, Async/Await, closures, DOM algorithms, ES Next",
    group: "Languages & Logic",
    connections: ["ts", "react", "nodejs", "html"],
  },
  {
    id: "ts",
    name: "TypeScript",
    category: "languages",
    level: "Advanced",
    proficiency: 90,
    icon: "public/icons/typescript.webp",
    desc: "Strict typing, interfaces, generics, compile safety",
    group: "Languages & Logic",
    connections: ["js", "react", "nextjs"],
  },
  {
    id: "php",
    name: "PHP",
    category: "languages",
    level: "Intermediate",
    proficiency: 85,
    icon: "public/icons/php.webp",
    desc: "Server scripting, web application backend logic",
    group: "Languages & Logic",
    connections: ["codeigniter", "mysql", "html"],
  },

  // Database & Storage Core
  {
    id: "mongodb",
    name: "MongoDB",
    category: "database",
    level: "Advanced",
    proficiency: 88,
    icon: "public/icons/mongodb.webp",
    desc: "Document schemas, aggregations, indexing, Mongoose",
    group: "Database Core",
    connections: ["nodejs", "express", "mysql"],
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "database",
    level: "Intermediate",
    proficiency: 84,
    icon: "public/icons/mysql.webp",
    desc: "Relational queries, schema design, table indexing",
    group: "Database Core",
    connections: ["codeigniter", "php", "mongodb"],
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "database",
    level: "Intermediate",
    proficiency: 82,
    icon: "public/icons/postgresql.webp",
    desc: "Relational queries, schema design, table indexing",
    group: "Database Core",
    connections: ["codeigniter", "php", "mongodb"],
  },

  // Frameworks & Libraries
  {
    id: "react",
    name: "React.js",
    category: "frameworks",
    level: "Expert",
    proficiency: 96,
    icon: "public/icons/react.webp",
    desc: "Hooks, Context, component lifecycles, virtual DOM tuning",
    group: "Framework Hub",
    connections: ["nextjs", "redux", "js", "html", "tailwind", "context"],
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "frameworks",
    level: "Advanced",
    proficiency: 92,
    icon: "public/icons/nextjs.webp",
    desc: "SSR, SSG, App Router, server action optimization",
    group: "Framework Hub",
    connections: ["react", "nodejs", "ts", "js"],
  },

  // State Management
  {
    id: "redux",
    name: "Redux Toolkit",
    category: "state",
    level: "Advanced",
    proficiency: 92,
    icon: "public/icons/redux.webp",
    desc: "Global state, slices, thunk dispatches, store architecture",
    group: "State Matrix",
    connections: ["react", "context", "js"],
  },
  {
    id: "context",
    name: "Context API",
    category: "state",
    level: "Expert",
    proficiency: 95,
    icon: "public/icons/context.webp",
    desc: "React context providers, custom hooks, lightweight state",
    group: "State Matrix",
    connections: ["react", "redux"],
  },

  // Tools & DevOps Orbit
  {
    id: "git",
    name: "Git & GitHub",
    category: "tools",
    level: "Advanced",
    proficiency: 92,
    icon: "public/icons/git.webp",
    desc: "Version control, branching, PR reviews, workflow automation",
    group: "Tools & Orbit",
    connections: ["vscode", "postman", "react"],
  },
  {
    id: "vscode",
    name: "VS Code",
    category: "tools",
    level: "Expert",
    proficiency: 96,
    icon: "public/icons/vscode.webp",
    desc: "Custom workspace, extensions, rapid debugging",
    group: "Tools & Orbit",
    connections: ["git", "postman"],
  },
  {
    id: "postman",
    name: "Postman",
    category: "tools",
    level: "Advanced",
    proficiency: 90,
    icon: "public/icons/postman.webp",
    desc: "API endpoint testing, collection workflows, documentation",
    group: "Tools & Orbit",
    connections: ["rest", "nodejs", "express"],
  },
  {
    id: "rest",
    name: "REST APIs",
    category: "others",
    level: "Expert",
    proficiency: 95,
    icon: "public/icons/postman.webp",
    desc: "API design, HTTP status patterns, JSON data contracts",
    group: "Tools & Orbit",
    connections: ["express", "nodejs", "postman", "codeigniter"],
  },
];

const PROJECTS_DATA = [
  {
    id: "dental-care",
    title: "Dental Care Website",
    category: "healthcare",
    categoryLabel: "Healthcare Web App",
    shortDesc:
      "Responsive dental care website with service offerings, staff profiles, and direct email lead capture.",
    fullDesc:
      "Developed a comprehensive and responsive dental care web application designed to present clinical offerings, introduce healthcare staff, and streamline patient inquiries directly to the hospital management system email.",
    features: [
      "Responsive healthcare landing page & service directory",
      "Staff & doctor profiles with specialization details",
      "Direct inquiry contact form configured to forward lead emails",
      "Mobile-optimized touch layout and smooth scroll sections",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "REST API"],
    icon: "fa-user-doctor",
  },
  {
    id: "school-admin-panel",
    title: "School Admin Panel",
    category: "admin",
    categoryLabel: "Admin Dashboard",
    shortDesc:
      "Modular dashboard components for managing student data, attendance tracking, and user roles.",
    fullDesc:
      "Built modular, enterprise-grade dashboard components for school administrators to manage student records, track daily attendance, assign user roles, and streamline educational operations.",
    features: [
      "Role-based access control (Admin, Staff, Student views)",
      "Interactive student database with filtering & search",
      "Real-time attendance tracking grid with metrics",
      "Responsive administrative user interface",
    ],
    techStack: ["React.js", "Redux", "Node.js", "Express.js", "Tailwind CSS"],
    icon: "fa-chart-line",
  },
  {
    id: "school-website",
    title: "Modern School Website",
    category: "web",
    categoryLabel: "Interactive Web Portal",
    shortDesc:
      "Modern school website featuring interactive 3D models, digital flipbooks, and smooth animations.",
    fullDesc:
      "Designed and developed a feature-rich, interactive school website incorporating 3D models, animated prospectus flipbooks, and engaging visual layouts for students, parents, and administrative staff.",
    features: [
      "Interactive 3D models for educational engagement",
      "Digital prospectus flipbook with realistic page transitions",
      "Custom animations built with SCSS and CSS keyframes",
      "Comprehensive academic course directory & event gallery",
    ],
    techStack: ["React.js", "Next.js", "SCSS", "3D Graphics", "Tailwind CSS"],
    icon: "fa-school",
  },
  {
    id: "web-worksheets",
    title: "Interactive Web Worksheets",
    category: "web-app",
    categoryLabel: "Educational Tool",
    shortDesc:
      "Engineered educational worksheets with drag-and-drop, matching exercises, and Venn diagrams.",
    fullDesc:
      "Engineered interactive digital worksheets allowing students to solve educational exercises online, including drag-and-drop matching, arithmetic problem sets, and interactive Venn diagrams.",
    features: [
      "HTML5 Drag & Drop activity engine",
      "Interactive matching exercises and visual arithmetic sets",
      "Dynamic Venn diagram visualization tool",
      "Real-time answer checking and score calculation",
    ],
    techStack: [
      "JavaScript (ES6+)",
      "React.js",
      "HTML5 Drag & Drop",
      "CSS Modules",
    ],
    icon: "fa-puzzle-piece",
  },
  {
    id: "sms-admin-system",
    title: "School Management System – Admin Panel",
    category: "admin",
    categoryLabel: "Full-Stack ERP System",
    shortDesc:
      "Comprehensive admin portal to manage question papers, lesson plans, fees, grades, and student access.",
    fullDesc:
      "Created an all-in-one administrative ecosystem for educational staff to upload and manage resources such as question papers, lesson plans, quizzes, assignments, and assessments, alongside fee management and grade tracking.",
    features: [
      "Resource management for question papers, lesson plans & quizzes",
      "Fee management, payment record logs & curriculum mapping",
      "Student & staff management with custom permissions",
      "Dedicated student portal interface for seamless assignment access",
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PHP CodeIgniter",
      "Tailwind CSS",
    ],
    icon: "fa-sliders",
  },
];

// --- Global App State ---
let socialNodesState = [];
let isSocialViewActive = true;

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  initCustomCursor();
  initParticlesCanvas();
  initTheme();
  initTypingEffect();
  initScrollReveal();
  initCardSpotlight();
  initExperienceTimelineFill();
  initSkillsSocialNetwork();
  renderSpatialSkills("all");
  renderProjects("all");
  initSkillsSearch();
  initProjectFilters();
  initContactForm();
  initMobileMenu();
  initScrollSpy();
});

// --- Custom Interactive Cursor & Sparkle Particle Effect ---
function initCustomCursor() {
  const dot = document.getElementById("cursor-dot");
  const ring = document.getElementById("cursor-ring");
  const canvas = document.getElementById("cursor-particles-canvas");
  if (!dot || !ring || !canvas) return;

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  let mouseX = width / 2;
  let mouseY = height / 2;
  let ringX = width / 2;
  let ringY = height / 2;

  const particles = [];

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Move dot immediately
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;

    // Emit subtle sparkle particles on cursor move
    // if (Math.random() < 0.6) {
    //   spawnCursorParticle(mouseX, mouseY, false);
    // }
  });

  // Sparkle burst on mouse click
  // window.addEventListener('mousedown', (e) => {
  //   for (let i = 0; i < 14; i++) {
  //     spawnCursorParticle(e.clientX, e.clientY, true);
  //   }
  // });

  // Cursor Hover Reaction on Interactive Elements
  const hoverSelectors =
    "a, button, .glass-card, .social-skill-node-el, .spatial-card, input, textarea, .skill-filter-btn, .project-filter-btn";
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(hoverSelectors)) {
      document.body.classList.add("cursor-hover");
    }
  });

  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(hoverSelectors)) {
      document.body.classList.remove("cursor-hover");
    }
  });

  function renderCursorAnimation() {
    // Lerp ring positioning for smooth elastic delay
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;

    ctx.clearRect(0, 0, width, height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        particles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.shadowBlur = 8;
      ctx.shadowColor = p.color;
      ctx.fill();
      ctx.restore();
    }

    requestAnimationFrame(renderCursorAnimation);
  }

  // renderCursorAnimation();
}

// --- Background Particles Canvas ---
function initParticlesCanvas() {
  const canvas = document.getElementById("particles-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  let mouse = { x: null, y: null, radius: 150 };

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
  });

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particleCount = Math.min(Math.floor(window.innerWidth / 16), 85);
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 2 + 1,
      baseAlpha: Math.random() * 0.5 + 0.2,
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    const isDark = document.documentElement.classList.contains("dark");
    const particleColor = isDark ? "56, 189, 248" : "2, 132, 199";
    const lineBaseAlpha = isDark ? 0.12 : 0.08;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${particleColor}, ${p.baseAlpha})`;
      ctx.fill();

      if (mouse.x && mouse.y) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(${particleColor}, ${0.3 * (1 - dist / mouse.radius)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(${particleColor}, ${lineBaseAlpha * (1 - dist / 120)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

// --- Card Spotlight Effect Tracking Cursor Position ---
function initCardSpotlight() {
  document.addEventListener("mousemove", (e) => {
    const cards = document.querySelectorAll(".glass-card, .spatial-card");
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });
}

// --- Smooth Scroll Reveal-on-Scroll Animations ---
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal-on-scroll");

  const observerOptions = {
    threshold: 0.12,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
      }
    });
  }, observerOptions);

  revealElements.forEach((el) => observer.observe(el));
}

// --- Professional Experience Left Timeline Fill on Scroll ---
function initExperienceTimelineFill() {
  const timeline = document.getElementById("experience-timeline");
  const fillBar = document.getElementById("experience-timeline-fill");
  if (!timeline || !fillBar) return;

  const experienceItems = document.querySelectorAll(".experience-item");

  function updateTimelineScrollFill() {
    const rect = timeline.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const timelineTop = rect.top + window.scrollY;
    const timelineHeight = rect.height;

    // Calculate middle of viewport focus
    const scrollPos = window.scrollY + windowHeight * 0.55;
    const progressRatio = (scrollPos - timelineTop) / timelineHeight;
    const progressPercent = Math.max(0, Math.min(100, progressRatio * 100));

    fillBar.style.height = `${progressPercent}%`;

    // Activate timeline dots & highlight experience cards as scroll fill passes them
    experienceItems.forEach((item) => {
      const dot = item.querySelector(".timeline-dot");
      const card = item.querySelector(".experience-card");
      if (!dot) return;

      const dotRect = dot.getBoundingClientRect();
      const dotTopInTimeline = dotRect.top + window.scrollY - timelineTop;
      const dotPercent = (dotTopInTimeline / timelineHeight) * 100;

      if (progressPercent >= dotPercent - 2) {
        dot.classList.add("node-active");
        if (card) card.classList.add("experience-card-highlight");
      } else {
        dot.classList.remove("node-active");
        if (card) card.classList.remove("experience-card-highlight");
      }
    });
  }

  window.addEventListener("scroll", () => {
    requestAnimationFrame(updateTimelineScrollFill);
  });

  // Initial update
  updateTimelineScrollFill();
}

// --- Skills Social Network System (Random Floating Nodes & Connected Graph) ---
function initSkillsSocialNetwork() {
  const container = document.getElementById("skills-social-container");
  const canvas = document.getElementById("skills-social-canvas");
  const nodesLayer = document.getElementById("skills-social-nodes-layer");
  const tooltip = document.getElementById("social-skill-tooltip");
  if (!container || !canvas || !nodesLayer || !tooltip) return;

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = container.clientWidth);
  let height = (canvas.height = container.clientHeight);

  window.addEventListener("resize", () => {
    if (!container) return;
    width = canvas.width = container.clientWidth;
    height = canvas.height = container.clientHeight;
  });

  // Category Color Map
  const categoryColors = {
    frontend: { border: "#38bdf8", glow: "rgba(56, 189, 248, 0.4)" },
    backend: { border: "#818cf8", glow: "rgba(129, 140, 248, 0.4)" },
    languages: { border: "#f59e0b", glow: "rgba(245, 158, 11, 0.4)" },
    database: { border: "#34d399", glow: "rgba(52, 211, 153, 0.4)" },
    frameworks: { border: "#c084fc", glow: "rgba(192, 132, 252, 0.4)" },
    state: { border: "#ec4899", glow: "rgba(236, 72, 153, 0.4)" },
    tools: { border: "#38bdf8", glow: "rgba(56, 189, 248, 0.4)" },
    others: { border: "#a855f7", glow: "rgba(168, 85, 247, 0.4)" },
  };

  // Initialize Node Physics State
  const nodeCount = SKILLS_DATA.length;
  const isMobile = window.innerWidth < 640;
  const margin = isMobile ? 35 : 70;

  socialNodesState = SKILLS_DATA.map((skill, index) => {
    // Distribute nodes randomly inside container bounds
    const x = Math.random() * (width - margin * 2) + margin;
    const y = Math.random() * (height - margin * 2) + margin;

    return {
      ...skill,
      x: x,
      y: y,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      targetVx: (Math.random() - 0.5) * 0.7,
      targetVy: (Math.random() - 0.5) * 0.7,
      radius: isMobile ? 25 : 32,
      isHovered: false,
      isDragging: false,
      color: categoryColors[skill.category] || categoryColors.frontend,
      element: null,
    };
  });

  // Render DOM elements for each node
  nodesLayer.innerHTML = "";
  socialNodesState.forEach((node) => {
    const el = document.createElement("div");
    el.className = "social-skill-node-el";
    el.style.borderColor = node.color.border;
    el.style.boxShadow = `0 0 20px ${node.color.glow}, inset 0 0 10px rgba(255,255,255,0.1)`;
    el.innerHTML = `
      <img src="${node.icon}" alt="${node.name}" onerror="this.src='https://cdn-icons-png.flaticon.com/512/1006/1006771.png'">
      <!-- <span class="node-label">${node.name}</span> -->
    `;

    // Touch & Drag Handling
    let dragStartX = 0,
      dragStartY = 0;

    const onPointerDown = (e) => {
      node.isDragging = true;
      el.classList.add("active");
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);
      const rect = container.getBoundingClientRect();
      dragStartX = clientX - rect.left - node.x;
      dragStartY = clientY - rect.top - node.y;
    };

    el.addEventListener("mousedown", onPointerDown);
    el.addEventListener("touchstart", onPointerDown, { passive: true });

    // Hover Events
    el.addEventListener("mouseenter", () => {
      node.isHovered = true;
      el.classList.add("active");

      // Show Tooltip
      tooltip.innerHTML = `
        <div class="flex items-center gap-2 mb-1">
          <span class="w-2 h-2 rounded-full" style="background:${node.color.border}"></span>
          <span class="text-xs font-bold text-slate-100">${node.name}</span>
          <span class="text-[9px] font-mono px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300 ml-auto">${node.level}</span>
        </div>
        <p class="text-[11px] text-slate-300 leading-tight mb-2">${node.desc}</p>
        <div class="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
          <div class="h-full bg-gradient-to-r from-sky-400 to-indigo-500" style="width:${node.proficiency}%"></div>
        </div>
      `;
      tooltip.classList.add("visible");
    });

    el.addEventListener("mouseleave", () => {
      node.isHovered = false;
      if (!node.isDragging) el.classList.remove("active");
      tooltip.classList.remove("visible");
    });

    nodesLayer.appendChild(el);
    node.element = el;
  });

  // Mouse move listener for dragging nodes & updating tooltip position
  container.addEventListener("mousemove", (e) => {
    const rect = container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Update Tooltip Position
    tooltip.style.left = `${mouseX}px`;
    tooltip.style.top = `${mouseY}px`;

    // Handle Active Dragging Node
    socialNodesState.forEach((node) => {
      if (node.isDragging) {
        node.x = mouseX;
        node.y = mouseY;
        node.vx = 0;
        node.vy = 0;
      }
    });
  });

  const stopDrag = () => {
    socialNodesState.forEach((node) => {
      if (node.isDragging) {
        node.isDragging = false;
        node.element.classList.remove("active");
      }
    });
  };

  window.addEventListener("mouseup", stopDrag);
  window.addEventListener("touchend", stopDrag);

  // Periodically change target random drift velocity for natural organic floating motion
  setInterval(() => {
    socialNodesState.forEach((node) => {
      if (!node.isDragging && !node.isHovered) {
        node.targetVx = (Math.random() - 0.5) * 0.9;
        node.targetVy = (Math.random() - 0.5) * 0.9;
      }
    });
  }, 2400);

  // Main Physics Simulation & Social Graph Connection Animation Loop
  function animateSocialNetwork() {
    ctx.clearRect(0, 0, width, height);

    // 1. Draw Connected Social System Mesh Lines
    const hoveredNode = socialNodesState.find(
      (n) => n.isHovered || n.isDragging,
    );

    for (let i = 0; i < socialNodesState.length; i++) {
      const nodeA = socialNodesState[i];

      for (let j = i + 1; j < socialNodesState.length; j++) {
        const nodeB = socialNodesState[j];
        const isDirectConnection =
          nodeA.connections && nodeA.connections.includes(nodeB.id);

        const dx = nodeB.x - nodeA.x;
        const dy = nodeB.y - nodeA.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Draw connection if directly related or within proximity
        if (isDirectConnection || dist < 170) {
          const isHighlighted =
            hoveredNode &&
            ((hoveredNode.id === nodeA.id &&
              (nodeA.connections.includes(nodeB.id) || dist < 170)) ||
              (hoveredNode.id === nodeB.id &&
                (nodeB.connections.includes(nodeA.id) || dist < 170)));

          ctx.save();
          ctx.beginPath();
          ctx.moveTo(nodeA.x, nodeA.y);
          ctx.lineTo(nodeB.x, nodeB.y);

          if (isHighlighted) {
            ctx.strokeStyle = "#38bdf8";
            ctx.lineWidth = 2.2;
            ctx.shadowColor = "#38bdf8";
            ctx.shadowBlur = 12;
            ctx.globalAlpha = 0.9;
          } else {
            ctx.strokeStyle = isDirectConnection
              ? "rgba(56, 189, 248, 0.25)"
              : "rgba(255, 255, 255, 0.06)";
            ctx.lineWidth = isDirectConnection ? 1.2 : 0.8;
            ctx.globalAlpha = isDirectConnection ? 0.6 : 0.25;
          }

          ctx.stroke();
          ctx.restore();
        }
      }
    }

    // 2. Update Node Positions & Apply Physics
    const margin = window.innerWidth < 640 ? 30 : 45;
    socialNodesState.forEach((node) => {
      if (!node.isDragging) {
        // Lerp towards target velocity for organic drift
        node.vx += (node.targetVx - node.vx) * 0.04;
        node.vy += (node.targetVy - node.vy) * 0.04;

        if (!node.isHovered) {
          node.x += node.vx;
          node.y += node.vy;
        }

        // Soft Boundary Bounce
        if (node.x < margin) {
          node.x = margin;
          node.targetVx *= -1;
        }
        if (node.x > width - margin) {
          node.x = width - margin;
          node.targetVx *= -1;
        }
        if (node.y < margin) {
          node.y = margin;
          node.targetVy *= -1;
        }
        if (node.y > height - margin) {
          node.y = height - margin;
          node.targetVy *= -1;
        }
      }

      // Update DOM element position
      if (node.element) {
        node.element.style.left = `${node.x}px`;
        node.element.style.top = `${node.y}px`;
      }
    });

    requestAnimationFrame(animateSocialNetwork);
  }

  animateSocialNetwork();

  // Setup View Toggle Buttons (Social System vs Grid View)
  const socialBtn = document.getElementById("skills-view-social-btn");
  const gridBtn = document.getElementById("skills-view-grid-btn");
  const socialContainer = document.getElementById("skills-social-container");
  const gridWrapper = document.getElementById("skills-grid-wrapper");

  if (socialBtn && gridBtn && socialContainer && gridWrapper) {
    socialContainer.classList.add("view-transition-container", "view-visible");
    gridWrapper.classList.add("view-transition-container", "view-hidden");

    socialBtn.addEventListener("click", () => {
      if (isSocialViewActive) return;
      isSocialViewActive = true;
      socialBtn.className =
        "px-4 py-2 rounded-lg text-xs font-bold bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg flex items-center gap-2 transition-all tab-btn-active";
      gridBtn.className =
        "px-4 py-2 rounded-lg text-xs font-bold text-slate-400 hover:text-slate-200 flex items-center gap-2 transition-all";

      gridWrapper.classList.remove("view-visible");
      gridWrapper.classList.add("view-hidden");

      setTimeout(() => {
        socialContainer.classList.remove("view-hidden");
        socialContainer.classList.add("view-visible");
      }, 150);
    });

    gridBtn.addEventListener("click", () => {
      if (!isSocialViewActive) return;
      isSocialViewActive = false;
      gridBtn.className =
        "px-4 py-2 rounded-lg text-xs font-bold bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg flex items-center gap-2 transition-all tab-btn-active";
      socialBtn.className =
        "px-4 py-2 rounded-lg text-xs font-bold text-slate-400 hover:text-slate-200 flex items-center gap-2 transition-all";

      socialContainer.classList.remove("view-visible");
      socialContainer.classList.add("view-hidden");

      setTimeout(() => {
        gridWrapper.classList.remove("view-hidden");
        gridWrapper.classList.add("view-visible");
      }, 150);
    });
  }
}

// --- Theme Toggler ---
function initTheme() {
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  const themeIcon = document.getElementById("theme-icon");

  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  if (savedTheme === "light" || (!savedTheme && !systemPrefersDark)) {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    if (themeIcon) themeIcon.className = "fas fa-moon";
  } else {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
    if (themeIcon) themeIcon.className = "fas fa-sun";
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
        localStorage.setItem("theme", "light");
        if (themeIcon) themeIcon.className = "fas fa-moon";
        showToast("Switched to Light Mode", "info");
      } else {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
        localStorage.setItem("theme", "dark");
        if (themeIcon) themeIcon.className = "fas fa-sun";
        showToast("Switched to Dark Mode", "info");
      }
    });
  }
}

// --- Typing Effect ---
function initTypingEffect() {
  const typingElement = document.getElementById("typing-text");
  if (!typingElement) return;

  const words = [
    "Web Developer",
    "MERN Stack Developer",
    "React & Next.js Developer",
    "Full Stack Engineer",
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      typingElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typingElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      typingSpeed = 1800;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

// --- Render Spatial 3D Skills Grid ---
function renderSpatialSkills(categoryFilter = "all", searchQuery = "") {
  const container = document.getElementById("skills-grid");
  if (!container) return;

  container.classList.add("tab-fade-out");

  setTimeout(() => {
    let filtered = SKILLS_DATA;

    if (categoryFilter !== "all") {
      filtered = filtered.filter((s) => s.category === categoryFilter);
    }

    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (s) =>
          s.name.toLowerCase().includes(query) ||
          s.desc.toLowerCase().includes(query) ||
          s.category.toLowerCase().includes(query) ||
          s.group.toLowerCase().includes(query),
      );
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full text-center py-12 text-slate-400">
          <i class="fas fa-radar text-4xl mb-3 opacity-40 animate-pulse text-sky-400"></i>
          <p class="text-sm">No spatial skill nodes found matching "${searchQuery}".</p>
        </div>
      `;
      container.classList.remove("tab-fade-out");
      return;
    }

    container.innerHTML = filtered
      .map(
        (skill, index) => `
      <div class="spatial-card glass-card rounded-xl p-4 border border-slate-700/60 relative overflow-hidden group flex flex-col justify-between cursor-pointer tab-card-enter" style="animation-delay: ${index * 35}ms;" data-skill-id="${skill.id}">
        <div class="absolute -top-12 -right-12 w-28 h-28 bg-sky-500/10 rounded-full blur-2xl group-hover:bg-sky-500/25 transition-all"></div>
        
        <div>
          <div class="flex items-center justify-between mb-4">
            <div class="spatial-card-icon w-14 h-14 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-3 flex items-center justify-center border border-slate-700/80 shadow-lg">
              <img src="${skill.icon}" alt="${skill.name}" class="w-9 h-9 object-contain group-hover:scale-110 transition-transform" onerror="this.src='https://cdn-icons-png.flaticon.com/512/1006/1006771.png'">
            </div>
            
            <div class="text-right">
              <span class="spatial-badge text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-sky-500/15 text-sky-300 border border-sky-500/30">
                ${skill.level}
              </span>
              <span class="block text-[10px] font-mono text-slate-400 mt-1">${skill.group}</span>
            </div>
          </div>

          <h4 class="text-md font-bold text-slate-100 group-hover:text-sky-400 transition-colors mb-1.5 flex items-center gap-2">
            <span>${skill.name}</span>
          </h4>
          <p class="text-xs text-slate-400 leading-relaxed">${skill.desc}</p>
        </div>
      </div>
    `,
      )
      .join("");

    container.classList.remove("tab-fade-out");
    init3DSpatialTilt();
  }, 140);
}

// --- 3D Spatial Card Tilt Effect ---
function init3DSpatialTilt() {
  const cards = document.querySelectorAll(".spatial-card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -12;
      const rotateY = ((x - centerX) / centerX) * 12;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
    });
  });
}

// --- Skills Filter & Search ---
function initSkillsSearch() {
  const categoryBtns = document.querySelectorAll(".skill-filter-btn");
  const searchInput = document.getElementById("skill-search-input");
  let currentCategory = "all";

  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      categoryBtns.forEach((b) => {
        b.classList.remove(
          "bg-sky-500",
          "text-white",
          "shadow-md",
          "tab-btn-active",
        );
        b.classList.add(
          "bg-slate-800/60",
          "text-slate-300",
          "hover:bg-slate-700/60",
        );
      });
      btn.classList.remove(
        "bg-slate-800/60",
        "text-slate-300",
        "hover:bg-slate-700/60",
      );
      btn.classList.add(
        "bg-sky-500",
        "text-white",
        "shadow-md",
        "tab-btn-active",
      );

      currentCategory = btn.getAttribute("data-category");
      renderSpatialSkills(
        currentCategory,
        searchInput ? searchInput.value : "",
      );

      // Update Social System floating nodes highlight filter
      socialNodesState.forEach((node) => {
        if (!node.element) return;
        if (currentCategory === "all" || node.category === currentCategory) {
          node.element.style.opacity = "1";
          node.element.style.transform = "scale(1)";
          node.element.style.pointerEvents = "auto";
        } else {
          node.element.style.opacity = "0.2";
          node.element.style.transform = "scale(0.85)";
          node.element.style.pointerEvents = "none";
        }
      });
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      renderSpatialSkills(currentCategory, e.target.value);
    });
  }
}

// --- Render Projects ---
function renderProjects(categoryFilter = "all") {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  container.classList.add("tab-fade-out");

  setTimeout(() => {
    let filtered = PROJECTS_DATA;
    if (categoryFilter !== "all") {
      filtered = filtered.filter((p) => p.category === categoryFilter);
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full text-center py-12 text-slate-400">
          <i class="fas fa-folder-open text-4xl mb-3 opacity-40 animate-pulse text-sky-400"></i>
          <p class="text-sm">No projects found in this category.</p>
        </div>
      `;
      container.classList.remove("tab-fade-out");
      return;
    }

    container.innerHTML = filtered
      .map(
        (project, index) => `
      <div class="glass-card rounded-xl overflow-hidden hover-lift border border-slate-700/60 flex flex-col justify-between group tab-card-enter" style="animation-delay: ${index * 45}ms;">
        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500/20 to-indigo-500/20 flex items-center justify-center text-sky-400 border border-sky-500/30">
              <i class="fas ${project.icon} text-lg"></i>
            </div>
            <span class="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
              ${project.categoryLabel}
            </span>
          </div>

          <h3 class="text-xl font-bold text-slate-100 group-hover:text-sky-400 transition-colors mb-2">${project.title}</h3>
          <p class="text-sm text-slate-300 mb-4 line-clamp-3">${project.shortDesc}</p>

          <div class="space-y-2 mb-6">
            ${project.features
              .slice(0, 2)
              .map(
                (feat) => `
              <div class="flex items-start text-xs text-slate-400">
                <i class="fas fa-check-circle text-sky-400 mt-0.5 mr-2 shrink-0"></i>
                <span>${feat}</span>
              </div>
            `,
              )
              .join("")}
          </div>
        </div>

        <div class="p-6 pt-0 mt-auto">
          <div class="flex flex-wrap gap-1.5">
            ${project.techStack
              .map(
                (tech) => `
              <span class="text-[11px] font-medium px-2.5 py-0.5 rounded bg-slate-800/80 text-sky-300 border border-slate-700">
                ${tech}
              </span>
            `,
              )
              .join("")}
          </div>
        </div>
      </div>
    `,
      )
      .join("");

    container.classList.remove("tab-fade-out");
  }, 140);
}

// --- Project Filter Tabs Initialization ---
function initProjectFilters() {
  const filterBtns = document.querySelectorAll(".project-filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => {
        b.classList.remove(
          "bg-sky-500",
          "text-white",
          "shadow-md",
          "tab-btn-active",
        );
        b.classList.add(
          "bg-slate-800/60",
          "text-slate-300",
          "hover:bg-slate-700/60",
        );
      });
      btn.classList.remove(
        "bg-slate-800/60",
        "text-slate-300",
        "hover:bg-slate-700/60",
      );
      btn.classList.add(
        "bg-sky-500",
        "text-white",
        "shadow-md",
        "tab-btn-active",
      );
      renderProjects(btn.getAttribute("data-project-category"));
    });
  });
}

// --- Project Modal Viewer ---
function openProjectModal(projectId) {
  const project = PROJECTS_DATA.find((p) => p.id === projectId);
  if (!project) return;

  const modalContainer = document.getElementById("project-modal");
  const modalBody = document.getElementById("project-modal-body");
  if (!modalContainer || !modalBody) return;

  modalBody.innerHTML = `
    <div class="flex items-start justify-between pb-4 border-b border-slate-700/60 mb-6">
      <div>
        <span class="text-xs font-semibold uppercase tracking-wider text-sky-400">${project.categoryLabel}</span>
        <h3 class="text-2xl font-bold text-slate-100 mt-1">${project.title}</h3>
      </div>
      <button onclick="closeProjectModal()" class="w-9 h-9 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 flex items-center justify-center transition-colors">
        <i class="fas fa-xmark text-lg"></i>
      </button>
    </div>

    <div class="space-y-6">
      <div>
        <h4 class="text-sm font-semibold text-slate-300 uppercase tracking-wide mb-2">Project Overview</h4>
        <p class="text-slate-300 text-sm leading-relaxed">${project.fullDesc}</p>
      </div>

      <div>
        <h4 class="text-sm font-semibold text-slate-300 uppercase tracking-wide mb-3">Key Features & Modules</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          ${project.features
            .map(
              (f) => `
            <div class="p-3 rounded-lg bg-slate-800/60 border border-slate-700/50 flex items-start gap-2.5">
              <i class="fas fa-circle-check text-sky-400 mt-1 text-sm shrink-0"></i>
              <span class="text-xs text-slate-300">${f}</span>
            </div>
          `,
            )
            .join("")}
        </div>
      </div>

      <div>
        <h4 class="text-sm font-semibold text-slate-300 uppercase tracking-wide mb-3">Technologies Used</h4>
        <div class="flex flex-wrap gap-2">
          ${project.techStack
            .map(
              (t) => `
            <span class="px-3 py-1 rounded-md bg-sky-500/10 text-sky-300 text-xs font-semibold border border-sky-500/20">
              ${t}
            </span>
          `,
            )
            .join("")}
        </div>
      </div>

      <div class="pt-4 border-t border-slate-700/60 flex flex-wrap items-center justify-between gap-3">
        <button onclick="copyToClipboard('${project.title}', 'Project details copied!')" class="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 text-xs font-semibold transition-colors flex items-center gap-2">
          <i class="fas fa-copy"></i> Copy Project Info
        </button>
        <button onclick="closeProjectModal()" class="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-semibold transition-colors">
          Close Preview
        </button>
      </div>
    </div>
  `;

  modalContainer.classList.remove("hidden");
  modalContainer.classList.add("flex");
}

function closeProjectModal() {
  const modalContainer = document.getElementById("project-modal");
  if (modalContainer) {
    modalContainer.classList.add("hidden");
    modalContainer.classList.remove("flex");
  }
}

// --- Printable Resume Modal ---
function openResumeModal() {
  const modal = document.getElementById("resume-modal");
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }
}

function closeResumeModal() {
  const modal = document.getElementById("resume-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

function printResume() {
  window.print();
}

// --- Clipboard Helper ---
function copyToClipboard(text, customMessage = "Copied to clipboard!") {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      showToast(customMessage, "success");
    })
    .catch(() => {
      showToast("Failed to copy to clipboard", "error");
    });
}

// --- Toast Notifications ---
function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  const bgClass =
    type === "success"
      ? "bg-emerald-600"
      : type === "error"
        ? "bg-rose-600"
        : "bg-sky-600";
  const iconClass =
    type === "success"
      ? "fa-circle-check"
      : type === "error"
        ? "fa-circle-exclamation"
        : "fa-circle-info";

  toast.className = `${bgClass} text-white px-4 py-3 rounded-lg shadow-xl flex items-center gap-3 text-sm font-medium transition-all duration-300 transform translate-y-2 opacity-0`;
  toast.innerHTML = `
    <i class="fas ${iconClass}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove("translate-y-2", "opacity-0");
  }, 10);

  setTimeout(() => {
    toast.classList.add("opacity-0", "translate-y-2");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// --- Contact Form ---
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nameEl = document.getElementById("contact-name");
    const emailEl = document.getElementById("contact-email");
    const subjectEl = document.getElementById("contact-subject");
    const messageEl = document.getElementById("contact-message");

    const name = nameEl ? nameEl.value.trim() : "";
    const email = emailEl ? emailEl.value.trim() : "";
    const subject = subjectEl ? subjectEl.value.trim() : "";
    const message = messageEl ? messageEl.value.trim() : "";

    if (!name || !email || !message) {
      showToast("Please fill in all required fields", "error");
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.innerHTML : "";

    if (submitBtn) {
      submitBtn.innerHTML =
        '<i class="fas fa-spinner fa-spin mr-2"></i> Sending...';
      submitBtn.disabled = true;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "94999845-5fe3-4217-be72-9c5a7b998a56",
          name: name,
          email: email,
          subject: subject || "Portfolio Contact Inquiry",
          message: message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        showToast(
          `Thank you, ${name}! Your message has been sent successfully.`,
          "success",
        );
        form.reset();
      } else {
        showToast(
          data.message || "Failed to send message. Please try again.",
          "error",
        );
      }
    } catch (error) {
      showToast(
        "Network error. Please check your connection and try again.",
        "error",
      );
    } finally {
      if (submitBtn) {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }
    }
  });
}

// --- Mobile Navigation ---
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = mobileMenu.classList.contains("open");
      if (isOpen) {
        mobileMenu.classList.remove("open");
        toggleBtn.classList.remove("open");
      } else {
        mobileMenu.classList.add("open");
        toggleBtn.classList.add("open");
      }
    });

    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        toggleBtn.classList.remove("open");
      });
    });

    document.addEventListener("click", (e) => {
      if (
        !mobileMenu.contains(e.target) &&
        !toggleBtn.contains(e.target) &&
        mobileMenu.classList.contains("open")
      ) {
        mobileMenu.classList.remove("open");
        toggleBtn.classList.remove("open");
      }
    });
  }
}

// --- ScrollSpy Active Navigation Tabs ---
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!sections.length || !navLinks.length) return;

  const onScroll = () => {
    const scrollPos = window.scrollY + 140;
    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active-nav");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active-nav");
          }
        });
      }
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}
