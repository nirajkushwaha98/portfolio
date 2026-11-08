/* =========================================================
   EDIT YOUR CONTENT HERE
   ========================================================= */
const GH = "https://github.com/nirajkushwaha98/";
const LI = "https://www.linkedin.com/feed/update/urn:li:activity:";

const FAMILIES = [
  { id: "lang", name: "Languages" },
  { id: "front", name: "Frontend" },
  { id: "back", name: "Backend" },
  { id: "data", name: "Data & DB" },
  { id: "ml", name: "AI / ML" },
  { id: "tools", name: "Tools" },
];

// [symbol, name, family, note]
// Only the important skills (28 = 4 rows of 7 on desktop, 7 rows of 4 on mobile) — each backed by a real project or certificate.
const ELEMENTS = [
  ["Py", "Python", "lang", "My main language for ML, data analysis and backend scripts."],
  ["C++", "C++", "lang", "DSA practice and the SFML pathfinding visualizer."],
  ["C#", "C#", "lang", "Gameplay, physics and UI code for Indian Traffic Rush."],
  ["Js", "JavaScript", "lang", "Interactive web apps and portals deployed on Vercel."],
  ["Ts", "TypeScript", "lang", "Typed code for safer, cleaner apps."],
  ["Sq", "SQL", "lang", "Queries and schema design for relational databases."],
  ["Ht", "HTML5", "front", "Semantic, accessible page structure."],
  ["Cs", "CSS3", "front", "Layouts, animation and responsive design."],
  ["Re", "React", "front", "Frontend of the placement preparation portal."],
  ["Nx", "Next.js", "front", "Full stack React framework behind VoiceMods (voicemods.lol)."],
  ["St", "Streamlit", "front", "Fast data apps and ML dashboards."],
  ["Dj", "Django REST", "back", "Backend APIs for the placement preparation portal."],
  ["Ap", "REST APIs", "back", "Connecting frontends to models and data."],
  ["Sb", "Supabase", "back", "Auth & database behind VoiceMods accounts and private history."],
  ["Pd", "Pandas", "data", "Cleaning, joining and analysing datasets."],
  ["Np", "NumPy", "data", "Numerical computing foundation."],
  ["My", "MySQL", "data", "Online shopping DBMS and analytics backend."],
  ["Pg", "PostgreSQL", "data", "Relational database behind the placement portal."],
  ["Sk", "Scikit-learn", "ml", "Classification & regression — student performance, fake news."],
  ["Tf", "TensorFlow", "ml", "Deep learning: LSTM, GRU, BiLSTM, CNN-LSTM."],
  ["Xg", "XGBoost", "ml", "Gradient boosting & ensembles for stock prediction."],
  ["Nl", "NLP", "ml", "Text processing for fake-news detection and AI mock interviews."],
  ["Rg", "RAG", "ml", "PDF question answering with retrieval-augmented generation."],
  ["Ll", "LLMs", "ml", "AI quiz generation and the LifeOS AI assistant (Gemini, with model fallback)."],
  ["Gt", "Git", "tools", "Version control for every project — 20+ public repos on GitHub."],
  ["Aw", "AWS", "tools", "AWS Academy Graduate — Cloud Foundations."],
  ["An", "Android", "tools", "LifeOS AI super-app, Toolkit Pro and the Indian Traffic Rush game."],
  ["Un", "Unity", "tools", "Unity 6 + URP — built Indian Traffic Rush, a 3D Android racing game."],
];

// Logos shown in the skill detail panel (devicon names). Others use an emoji.
const ICON_CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/";
const LOGOS = {
  Py: "python/python-original", "C++": "cplusplus/cplusplus-original", Js: "javascript/javascript-original",
  Ts: "typescript/typescript-original", Sq: "azuresqldatabase/azuresqldatabase-original",
  Ht: "html5/html5-original", Cs: "css3/css3-original", Re: "react/react-original", St: "streamlit/streamlit-original",
  Nx: "nextjs/nextjs-original", Sb: "supabase/supabase-original",
  "C#": "csharp/csharp-original", Un: "unity/unity-original",
  No: "nodejs/nodejs-original", Ex: "express/express-original", Dj: "django/django-plain", Fl: "flask/flask-original",
  Pg: "postgresql/postgresql-original", My: "mysql/mysql-original", Pd: "pandas/pandas-original", Np: "numpy/numpy-original",
  Pl: "plotly/plotly-original", Sk: "scikitlearn/scikitlearn-original", Tf: "tensorflow/tensorflow-original",
  Kr: "keras/keras-original", Gt: "git/git-original", Gh: "github/github-original",
  Aw: "amazonwebservices/amazonwebservices-original-wordmark", Bs: "bootstrap/bootstrap-original",
  Vc: "vercel/vercel-original", Vs: "vscode/vscode-original", An: "android/android-original", Ju: "jupyter/jupyter-original",
};
const EMOJI = { Al: "🧩", Ap: "🔌", Xg: "🌲", Nl: "💬", Rg: "📚", Ll: "🤖", Sf: "🎮" };

const PROJECTS = [
  {
    name: "FileX",
    tags: "Product · Desktop · Founder",
    desc: "A desktop file conversion application for macOS and Windows that I founded and built — simple, fast and privacy-focused.",
    feats: ["File format conversion", "Batch conversion", "Mac & Windows", "Offline & private"],
    stack: ["Desktop app", "macOS", "Windows"],
    live: "https://filex.lol/",
    post: LI + "7521629144384954368/",
    logo: "assets/filex-logo.png", glow: "37, 99, 235",
    // Frames from the FileX launch video (480×848)
    shots: ["assets/games/filex-formats.jpg", "assets/games/filex-convert.jpg", "assets/games/filex-private.jpg"],
    ratio: "480 / 848",
    badge: ["LIVE", "APP"],
    viz: "bars",
  },
  {
    name: "VoiceMods",
    tags: "Product · AI Voice · SaaS",
    desc: "A Hindi-first AI voiceover studio that I built and launched — paste a script, audition Indian voices and download natural speech for videos, lessons and stories.",
    feats: ["Hindi text-to-speech", "Preview voices first", "WAV, MP3 & OGG export", "Accounts & private history"],
    stack: ["Next.js", "Supabase", "Google WaveNet", "Gnani AI"],
    live: "https://voicemods.lol/",
    logo: "assets/logos/voicemods.svg", glow: "23, 132, 145",
    shots: ["assets/games/voicemods-home.jpg", "assets/games/voicemods-pricing.jpg"],
    frame: "browser", ratio: "16 / 10",
    badge: ["LIVE", "TTS"],
    viz: "bars",
  },
  {
    name: "Indian Traffic Rush",
    tags: "Game · Unity · Android",
    desc: "An endless 3D traffic racer on Indian highways that I built in Unity 6 for Android — weave past autos, trucks and buses, grab coins and hit nitro. Every model, sound and music loop is generated in code.",
    feats: ["Garage, paints & upgrades", "Daily missions & rewards", "Day & sunset highways", "28 automated tests"],
    stack: ["Unity 6", "C#", "URP", "Android"],
    repo: "indian-traffic-rush",
    soon: "Coming soon on Google Play",
    logo: "assets/logos/traffic-rush.png", glow: "240, 120, 40",
    // Real captures from the game's automated test runs (portrait 9:16)
    shots: ["assets/games/itr-race.jpg", "assets/games/itr-menu.jpg"],
    badge: ["UNITY", "GAME"],
    viz: "grid",
  },
  {
    name: "LifeOS AI",
    tags: "Android · AI · Super-app",
    desc: "An offline-first Android super-app for tasks, reminders, expenses, notes and documents — with an AI assistant and a hands-free Hindi/English voice mode.",
    feats: ["Hindi/English voice AI", "Reminders & expenses", "Offline-first + sync", "Secure Gemini backend"],
    stack: ["Kotlin", "Jetpack Compose", "Firebase", "Gemini"],
    repo: "lifeos-ai",
    post: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7524803680622051328/",
    soon: "Coming soon on Google Play",
    logo: "assets/logos/lifeos.png", glow: "99, 102, 241",
    // Emulator captures (403×900)
    shots: ["assets/games/lifeos-home.jpg", "assets/games/lifeos-voice.jpg", "assets/games/lifeos-chat.jpg"],
    ratio: "403 / 900",
    badge: ["AI", "APP"],
    viz: "nodes",
  },
  {
    name: "AI Quiz Generator",
    logo: "assets/logos/quiz.svg", glow: "124, 58, 237",
    // UI of the repo's index.html, shown with sample questions
    shots: ["assets/games/quiz-question.jpg", "assets/games/quiz-result.jpg"],
    frame: "browser", ratio: "16 / 10",
    tags: "AI · Web · Education",
    desc: "An AI-powered web app that generates quizzes on any topic in seconds — great for self-study and revision.",
    feats: ["Topic-based generation", "Instant scoring", "Answer explanations", "Clean responsive UI"],
    stack: ["HTML", "CSS", "JavaScript", "Flask", "LLM API"],
    repo: "AI_Quiz_Generator..",
    badge: ["LLM", "AI"],
    viz: "quiz",
  },
  {
    name: "Placement Prep Portal",
    logo: "assets/logos/placement.svg", glow: "20, 184, 166",
    shots: ["assets/games/placement-dashboard.jpg", "assets/games/placement-resume.jpg", "assets/games/placement-interview.jpg"],
    frame: "browser", ratio: "16 / 10",
    tags: "Web · Career · Students",
    desc: "One platform for placement prep: company-specific aptitude tests, DSA problems, ATS resume analysis and AI mock interviews — combined into a Placement Readiness Index.",
    feats: ["Aptitude & DSA practice", "ATS resume analysis", "AI mock interviews", "Readiness Index"],
    stack: ["React", "Django REST", "PostgreSQL", "NLP"],
    repo: "Portal",
    badge: ["REACT", "WEB"],
    viz: "bars",
  },
  {
    name: "JobPortal",
    logo: "assets/logos/jobportal.svg", glow: "30, 64, 175",
    shots: ["assets/games/job-home.jpg", "assets/games/job-listings.jpg"],
    frame: "browser", ratio: "16 / 10",
    tags: "Web · React · Careers",
    desc: "A responsive job portal where candidates browse and search openings by title and category, apply to roles, and manage their profile and applications.",
    feats: ["Search & category filters", "One-click apply", "Profile & skills", "Applications tracker"],
    stack: ["React", "Vite", "Bootstrap", "JavaScript"],
    repo: "Job",
    live: "https://job-six-inky.vercel.app",
    badge: ["LIVE", "WEB"],
    viz: "bars",
  },
  {
    name: "PDF RAG Q&A",
    logo: "assets/logos/rag.svg", glow: "225, 29, 72",
    tags: "AI · NLP · RAG",
    desc: "An intelligent question-answering system that reads your PDFs and answers questions about them using retrieval-augmented generation.",
    feats: ["PDF chunking", "Vector search", "Context-grounded answers", "Chat interface"],
    stack: ["Python", "LangChain", "Embeddings", "LLM"],
    repo: "PDF-Based-Intelligent-Question-Answering-System-RAG-",
    badge: ["RAG", "AI"],
    viz: "nodes",
  },
  {
    name: "Stock Price Prediction",
    logo: "assets/logos/stock.svg", glow: "22, 163, 74",
    shots: ["assets/games/stock-overview.jpg", "assets/games/stock-predictions.jpg", "assets/games/stock-forecast.jpg"],
    frame: "browser", ratio: "16 / 10",
    tags: "Deep learning · Finance",
    desc: "Advanced stock price forecasting comparing LSTM, GRU, BiLSTM, CNN-LSTM, XGBoost and an ensemble model.",
    feats: ["6 model families", "Ensemble learning", "Metric comparison", "Forecast plots"],
    stack: ["Python", "TensorFlow", "XGBoost", "Pandas"],
    repo: "Advanced-Stock-Price-Prediction",
    badge: ["ML", "6x"],
    viz: "line",
  },
  {
    name: "E-commerce Analytics",
    logo: "assets/logos/ecommerce.svg", glow: "234, 88, 12",
    shots: ["assets/games/ecom-revenue.jpg", "assets/games/ecom-regions.jpg"],
    frame: "browser", ratio: "16 / 10",
    tags: "Data · Dashboard · SQL",
    desc: "An interactive sales analytics dashboard with revenue trends, category insights and customer metrics backed by MySQL.",
    feats: ["Interactive filters", "Revenue trends", "Category breakdown", "MySQL backend"],
    stack: ["Python", "Streamlit", "Plotly", "MySQL"],
    repo: "E-commerce-Sales-Analytics",
    badge: ["BI", "SQL"],
    viz: "heat",
  },
  {
    name: "Fake News Detection",
    logo: "assets/logos/fakenews.svg", glow: "239, 68, 68",
    shots: ["assets/games/fakenews-pipeline.jpg", "assets/games/fakenews-home.jpg"],
    frame: "browser", ratio: "16 / 10",
    tags: "NLP · Classification",
    desc: "A machine-learning approach to detecting fake news articles using text features and classical classifiers.",
    feats: ["Text preprocessing", "TF-IDF features", "Model comparison", "Accuracy reports"],
    stack: ["Python", "Scikit-learn", "NLP", "TypeScript"],
    repo: "Fake-News-Detection-",
    badge: ["NLP", "ML"],
    viz: "bars",
  },
  {
    name: "Pathfinding Visualizer",
    logo: "assets/logos/pathfinding.svg", glow: "99, 102, 241",
    tags: "C++ · Graphics · DSA",
    desc: "A real-time pathfinding visualizer built with C++ and SFML that animates search algorithms on a grid.",
    feats: ["Grid editor", "Animated search", "Walls & weights", "Shortest path trace"],
    stack: ["C++", "SFML", "Algorithms"],
    repo: "C-SFML-Pathfinding-Visualizer",
    badge: ["C++", "DSA"],
    viz: "grid",
  },
  {
    name: "Toolkit Pro",
    logo: "assets/logos/toolkit.svg", glow: "14, 165, 233",
    shots: ["assets/games/toolkit-calculator.jpg", "assets/games/toolkit-converter.jpg", "assets/games/toolkit-password.jpg"],
    frame: "card", ratio: "588 / 736",
    tags: "Android · Mobile · Utility",
    desc: "A multi-utility Android app combining calculator, unit converter, flashlight, password generator and stopwatch — fully offline.",
    feats: ["5 tools in 1", "Offline first", "Fast & simple UI", "Lightweight"],
    stack: ["Android", "Java/Kotlin", "XML"],
    repo: "Toolkit-Pro-Smart-Tools-Mobile-App-",
    badge: ["APP", "5in1"],
    viz: "grid",
  },
];

const LEARNING = [
  // Certifications from LinkedIn (newest first), then what I'm learning now
  ["AIML for Geodata Analytics", "IIRS, ISRO · Sep 2026", "Certified"],
  ["OCI AI Foundations Associate", "Oracle Cloud Infrastructure · Aug 2026", "Certified"],
  ["Agentic AI Foundations Associate", "Oracle · Aug 2026", "Certified"],
  ["NLP with Attention Models", "DeepLearning.AI on Coursera · Aug 2026", "Certified"],
  ["Zero-to-Production: AI Product Engineering", "Euron · Aug 2026", "Certified"],
  ["AWS Academy Cloud Foundations", "Amazon Web Services · Aug 2026", "Certified"],
  ["AWS Academy Generative AI Foundations", "Amazon Web Services · Feb 2026", "Certified"],
  ["HackUrK!a-II hackathon", "GDG on Campus MM(DU) · Feb 2026", "Participated"],
  ["Interviewing Skills & Organizational Communication", "Saylor Academy · Feb 2026", "Certified"],
  ["Generative AI, agents & deep learning", "RAG, agentic workflows, PyTorch & TensorFlow", "Learning"],
];

// Edit these with your real education details
const TIMELINE = [
  { year: "2019–23", tt: "Education", title: "BCA — BRABU, Muzaffarpur", desc: "Bachelor of Computer Applications (Computer Software Engineering) at Babasaheb Bhimrao Ambedkar Bihar University: programming, databases, web technologies and application development.", pill: "Grade 71%" },
  { year: "2025–27", tt: "Education", title: "MCA (AI & ML) — Chandigarh University", desc: "Master of Computer Applications with Artificial Intelligence & Machine Learning and mobile app development (Jul 2025 – Dec 2027). Building full stack AI products alongside coursework.", pill: "AI & ML specialisation" },
  { year: "2025", tt: "Projects", title: "Started building with ML", desc: "Student Performance Predictor, personalized e-commerce recommendations, Dijkstra shortest path for Varanasi and an online shopping DBMS.", pill: "Python · ML · SQL" },
  { year: "2026", tt: "Founder", title: "Launched FileX & VoiceMods, building FramShot", desc: "Founded and shipped FileX, a Mac & Windows file converter (filex.lol), launched VoiceMods, a Hindi AI voiceover studio (voicemods.lol), and started building FramShot, a screen recording tool. Earned the AWS Academy Cloud Foundations badge.", pill: "Product · Founder · AWS" },
  { year: "2026", tt: "Game dev", title: "Built Indian Traffic Rush in Unity", desc: "An endless 3D traffic-racing game for Android with a garage, daily missions, rewards and a procedurally generated Indian highway — backed by 28 automated tests.", pill: "Unity 6 · C# · Android" },
  { year: "2026", tt: "Android", title: "Built LifeOS AI, an everyday super-app", desc: "Offline-first Kotlin + Jetpack Compose app for tasks, reminders, expenses, notes and documents, with a Hindi/English AI voice assistant on a secure Gemini backend.", pill: "Kotlin · Compose · Firebase · AI" },
  { year: "2026", tt: "Certifications", title: "10 certifications in AI & cloud", desc: "Oracle OCI AI and Agentic AI Foundations, AWS Academy Cloud & Generative AI Foundations, NLP with Attention Models (DeepLearning.AI), AIML for Geodata Analytics (ISRO) and AI Product Engineering (Euron).", pill: "Oracle · AWS · ISRO · Coursera" },
  { year: "2026", tt: "Projects", title: "AI apps, deep learning & web", desc: "AI Quiz Generator, PDF RAG Q&A, advanced stock prediction, fake-news detection, Toolkit Pro Android app a placement portal and a live React job portal.", pill: "AI · Full stack · Android" },
];

const STATS = [
  ["📦", 22, "", "Public GitHub repositories"],
  ["🚀", 2, "", "Products launched — FileX & VoiceMods"],
  ["🎓", 10, "", "Certifications — Oracle, AWS, ISRO, Coursera"],
  ["🤝", 2600, "+", "LinkedIn followers"],
];

// LinkedIn posts — on LinkedIn click "…" on a post → "Copy link to post", paste below.
// The section stays hidden until at least one post is added.
// { date: "Oct 2026", title: "Short headline", text: "First line or two of the post", url: "https://www.linkedin.com/posts/...", tag: "Project" }
const POSTS = [
  { date: "Nov 7, 2026", tag: "Launch", title: "Introducing LifeOS AI — your everyday life, smarter", text: "An offline-first Android super-app for tasks, reminders, expenses, notes and documents, with an AI assistant and a hands-free Hindi/English voice mode. Kotlin · Jetpack Compose · Firebase · Gemini.", url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7524803680622051328/" },
  { date: "Oct 29, 2026", tag: "Launch", title: "Introducing FileX — from idea to reality", text: "A desktop file conversion app for macOS and Windows: format conversion, batch conversion and offline, privacy-focused processing. Built and launched as Founder & Developer.", url: LI + "7521629144384954368/" },
  { date: "Oct 28, 2026", tag: "Coming soon", title: "FramShot — a sneak peek", text: "Previewing FramShot, a product I'm building to make screen recording more convenient and engaging. Asking the community which features matter most before launch.", url: LI + "7521224831930126336/" },
  { date: "Sep 6, 2026", tag: "Project", title: "Built a Placement Preparation Portal", text: "One platform for company-specific aptitude tests, DSA practice, ATS resume analysis, AI mock interviews and a Placement Readiness Index. React · Django REST · PostgreSQL · NLP.", url: LI + "7502433886958964736/" },
  { date: "Aug 18, 2026", tag: "Certification", title: "AWS Academy Graduate — Cloud Foundations", text: "Earned the verified AWS Academy Cloud Foundations training badge from Amazon Web Services Training and Certification.", url: LI + "7495488377937620992/" },
  { date: "Aug 7, 2026", tag: "Project", title: "Food Express — online food ordering app", text: "A responsive food ordering web app with restaurant & menu browsing, search and category filters, and add-to-cart. Built with HTML5, CSS3, JavaScript and Bootstrap.", url: LI + "7491546422878621696/" },
  { date: "Feb 3, 2026", tag: "Certification", title: "Creating Change through Social Entrepreneurship", text: "Celebrating a new certification from the United Latino Students Association.", url: LI + "7424486658038960129/" },
];

/* =========================================================
   RENDERING
   ========================================================= */
const $ = (s, el = document) => el.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// Photo: put your picture at assets/photo.png (transparent PNG looks best).
// Until then a monogram is shown in the hero and on the ID card.
const heroImg = $("#heroPhoto");
const idImg = $(".id-photo img");
function noPhoto() {
  heroImg.parentElement.classList.add("no-photo");
  heroImg.replaceWith(Object.assign(document.createElement("div"), { className: "monogram", textContent: "NK" }));
  idImg.replaceWith(Object.assign(document.createElement("div"), { className: "id-mono", textContent: "NK" }));
}
if (heroImg.complete && !heroImg.naturalWidth) noPhoto();
else heroImg.addEventListener("error", noPhoto, { once: true });
heroImg.addEventListener("load", () => { idImg.src = heroImg.src; idImg.style.objectPosition = "top"; }, { once: true });

$("#year").textContent = new Date().getFullYear();

// ---------- Periodic table ----------
const chips = $("#chips");
const ptable = $("#ptable");
let activeFam = null;

chips.innerHTML = FAMILIES.map((f) => `<button class="chip" data-fam="${f.id}"><i class="fam-${f.id}"></i>${f.name}</button>`).join("");
ptable.innerHTML = ELEMENTS.map(([s, n, f], i) =>
  `<div class="tile fam-${f}" data-i="${i}" data-fam="${f}"><span class="n">${String(i + 1).padStart(2, "0")}</span><span class="s">${esc(s)}</span><span class="nm">${esc(n)}</span></div>`
).join("");

chips.addEventListener("click", (e) => {
  const b = e.target.closest(".chip");
  if (!b) return;
  activeFam = activeFam === b.dataset.fam ? null : b.dataset.fam;
  chips.querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c.dataset.fam === activeFam));
  ptable.querySelectorAll(".tile").forEach((t) => t.classList.toggle("dim", activeFam && t.dataset.fam !== activeFam));
});

const det = $("#elDetail");
ptable.addEventListener("mouseover", (e) => {
  const t = e.target.closest(".tile");
  if (!t) return;
  const i = +t.dataset.i;
  const [s, n, f, note] = ELEMENTS[i];
  if (det.dataset.cur === String(i)) return;
  det.dataset.cur = i;
  const logo = $(".el-logo", det);
  logo.innerHTML = LOGOS[s]
    ? `<img src="${ICON_CDN + LOGOS[s]}.svg" alt="${esc(n)} logo" />`
    : `<span class="el-emoji">${EMOJI[s] || "✦"}</span>`;
  logo.animate([{ transform: "scale(.6) rotate(-8deg)", opacity: 0 }, { transform: "none", opacity: 1 }],
    { duration: 380, easing: "cubic-bezier(.2,.9,.3,1.3)" });
  const big = $(".el-big", det);
  big.className = `el-big fam-${f}`;
  $(".el-num", det).textContent = String(i + 1).padStart(2, "0");
  $(".el-sym", det).textContent = s;
  $(".el-name", det).textContent = n;
  $(".el-fam", det).textContent = FAMILIES.find((x) => x.id === f).name;
  let noteEl = $(".el-note", det);
  if (!noteEl) { noteEl = document.createElement("p"); noteEl.className = "el-note"; det.appendChild(noteEl); }
  noteEl.textContent = note;
});
// Preload logos so they appear instantly on hover
Object.values(LOGOS).forEach((p) => { new Image().src = ICON_CDN + p + ".svg"; });
ptable.querySelector(".tile").dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));

// Staggered tile intro
const tileObs = new IntersectionObserver((ents) => {
  ents.forEach((en) => {
    if (!en.isIntersecting) return;
    ptable.querySelectorAll(".tile").forEach((t, i) => {
      t.animate([{ opacity: 0, transform: "translateY(20px) scale(.9)" }, { opacity: 1, transform: "none" }],
        { duration: 500, delay: i * 25, easing: "cubic-bezier(.2,.7,.2,1)", fill: "backwards" });
    });
    tileObs.disconnect();
  });
}, { threshold: 0.2 });
tileObs.observe(ptable);

// ---------- Projects accordion ----------
const acc = $("#accordion");
// App screenshots: a phone whose screens slide by on their own, dots to jump, app icon in the corner
const shotsHTML = (p) =>
  `<figure class="phone${p.frame ? " is-" + p.frame : ""}" style="--ar: ${p.ratio || "9 / 16"}"><div class="screen"><div class="shot-track">${p.shots.map((src, k) =>
    `<img src="${src}" alt="${esc(p.name)} screenshot ${k + 1}" loading="lazy" decoding="async" />`).join("")}</div></div></figure>` +
  `<div class="shot-dots">${p.shots.map((_, k) => `<button type="button" aria-label="Show screenshot ${k + 1}"></button>`).join("")}</div>` +
  (p.logo ? `<img class="p-icon" src="${p.logo}" alt="${esc(p.name)} app icon" />` : "");
acc.innerHTML = PROJECTS.map((p, i) => `
  <article class="panel${i === 0 ? " open" : ""}" data-i="${i}">
    <span class="vnum">${String(i + 1).padStart(2, "0")}</span>
    <span class="vlabel">${esc(p.name)}</span>
    <span class="plus">+</span>
    <div class="panel-body">
      <div>
        <p class="p-tags">${String(i + 1).padStart(2, "0")} &nbsp; ${esc(p.tags)}</p>
        <h3 class="p-title">${esc(p.name)}</h3>
        <p class="p-desc">${esc(p.desc)}</p>
        <ul class="p-feats">${p.feats.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
        <div class="p-stack">${p.stack.map((s) => `<span>${esc(s)}</span>`).join("")}</div>
        <div class="p-links">
          ${p.live ? `<a class="btn btn-dark" href="${p.live}" target="_blank" rel="noopener">Live demo <span>↗</span></a>` : ""}
          ${p.repo ? `<a class="btn ${p.live ? "btn-ghost" : "btn-dark"}" href="${GH + encodeURIComponent(p.repo)}" target="_blank" rel="noopener">View on GitHub <span>↗</span></a>` : ""}
          ${p.post ? `<a class="btn btn-ghost" href="${p.post}" target="_blank" rel="noopener">LinkedIn post <span>↗</span></a>` : ""}
          ${p.soon ? `<span class="p-soon"><i aria-hidden="true"></i>${esc(p.soon)}</span>` : ""}
        </div>
      </div>
      <div class="p-visual${p.logo ? " has-logo" : ""}${p.shots ? " has-shots" : ""}"${p.glow ? ` style="--glow-rgb: ${p.glow}"` : ""}><canvas data-viz="${p.viz}"></canvas>${p.shots ? shotsHTML(p) : p.logo ? `<img class="p-logo" src="${p.logo}" alt="${esc(p.name)} logo" />` : ""}<div class="badge"><div><small>${p.badge[0]}</small>${p.badge[1]}</div></div></div>
    </div>
  </article>`).join("");

// Auto-slide each phone (pauses while hovered; reduced motion → manual dots only)
acc.querySelectorAll(".p-visual.has-shots").forEach((vis) => {
  const track = $(".shot-track", vis), n = track.children.length;
  const dots = [...vis.querySelectorAll(".shot-dots button")];
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let i = 0, timer;
  const go = (k) => {
    i = (k + n) % n;
    track.style.transform = `translateX(${-i * 100}%)`;
    dots.forEach((d, j) => d.classList.toggle("on", j === i));
  };
  const play = () => { clearInterval(timer); if (!still) timer = setInterval(() => go(i + 1), 2800); };
  dots.forEach((d, j) => d.addEventListener("click", (e) => { e.stopPropagation(); go(j); play(); }));
  vis.addEventListener("mouseenter", () => clearInterval(timer));
  vis.addEventListener("mouseleave", play);
  go(0); play();
});

acc.addEventListener("click", (e) => {
  const p = e.target.closest(".panel");
  if (!p || p.classList.contains("open") || e.target.closest("a")) return;
  acc.querySelectorAll(".panel").forEach((x) => x.classList.remove("open"));
  p.classList.add("open");
  setTimeout(() => drawViz($("canvas", p)), 380);
});

// Small generative visuals for project panels
function drawViz(cv) {
  if (!cv) return;
  const r = cv.getBoundingClientRect();
  if (!r.width) return;
  const dpr = window.devicePixelRatio || 1;
  cv.width = r.width * dpr; cv.height = r.height * dpr;
  const c = cv.getContext("2d");
  c.scale(dpr, dpr);
  const W = r.width, H = r.height, ink = "#1f2440", soft = "#a59d8a";
  c.clearRect(0, 0, W, H);
  const type = cv.dataset.viz;
  const rnd = mulberry(type.length * 999 + Math.round(W));
  if (type === "line") {
    for (let k = 0; k < 3; k++) {
      c.beginPath(); c.lineWidth = k === 0 ? 3 : 1.5; c.strokeStyle = k === 0 ? ink : soft;
      let y = H * 0.6;
      for (let x = 30; x < W - 30; x += 8) { y += (rnd() - 0.52) * 14; y = Math.max(40, Math.min(H - 40, y)); x === 30 ? c.moveTo(x, y) : c.lineTo(x, y); }
      c.stroke();
    }
  } else if (type === "bars") {
    const n = 12, bw = (W - 80) / n;
    for (let i = 0; i < n; i++) { const h = (0.25 + rnd() * 0.65) * (H - 80); c.fillStyle = i % 4 === 0 ? ink : soft; roundRect(c, 40 + i * bw + 4, H - 40 - h, bw - 8, h, 6); }
  } else if (type === "heat") {
    const cols = 12, rows = 8, s = Math.min((W - 60) / cols, (H - 60) / rows);
    const ox = (W - s * cols) / 2, oy = (H - s * rows) / 2;
    for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) { c.globalAlpha = 0.15 + rnd() * 0.85; c.fillStyle = ink; roundRect(c, ox + i * s + 2, oy + j * s + 2, s - 4, s - 4, 3); }
    c.globalAlpha = 1;
  } else if (type === "grid") {
    const s = 22, cols = Math.floor((W - 40) / s), rows = Math.floor((H - 40) / s);
    const ox = (W - cols * s) / 2, oy = (H - rows * s) / 2;
    for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) {
      const v = rnd(); c.fillStyle = v < 0.18 ? ink : v < 0.5 ? "#d9d1b8" : "#efe9d6";
      c.fillRect(ox + i * s + 1, oy + j * s + 1, s - 2, s - 2);
    }
    c.strokeStyle = "#c04f3a"; c.lineWidth = 4; c.beginPath();
    let x = ox + s / 2, y = oy + rows * s - s / 2; c.moveTo(x, y);
    while (x < ox + cols * s - s && y > oy + s) { rnd() > 0.5 ? (x += s) : (y -= s); c.lineTo(x, y); }
    c.stroke();
  } else if (type === "nodes") {
    const pts = Array.from({ length: 14 }, () => [40 + rnd() * (W - 80), 40 + rnd() * (H - 80)]);
    c.strokeStyle = soft; c.lineWidth = 1;
    pts.forEach((a, i) => pts.slice(i + 1).forEach((b) => { if (Math.hypot(a[0] - b[0], a[1] - b[1]) < 160) { c.beginPath(); c.moveTo(...a); c.lineTo(...b); c.stroke(); } }));
    pts.forEach((p, i) => { c.fillStyle = i % 3 ? soft : ink; c.beginPath(); c.arc(p[0], p[1], i % 3 ? 5 : 9, 0, 7); c.fill(); });
  } else if (type === "quiz") {
    for (let i = 0; i < 4; i++) {
      const y = 50 + i * ((H - 100) / 4);
      c.fillStyle = i === 1 ? ink : "#fbf9f3"; roundRect(c, 40, y, W - 80, (H - 100) / 4 - 14, 12);
      c.fillStyle = i === 1 ? "#fff" : soft; roundRect(c, 60, y + 18, (W - 160) * (0.4 + rnd() * 0.4), 8, 4);
    }
  }
}
function roundRect(c, x, y, w, h, r) { c.beginPath(); c.roundRect ? c.roundRect(x, y, w, h, r) : c.rect(x, y, w, h); c.fill(); }
function mulberry(a) { return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
const drawOpen = () => drawViz($(".panel.open canvas"));
window.addEventListener("resize", drawOpen);

// ---------- Learning ----------
$("#learnList").innerHTML = LEARNING.map(([t, s, p], i) =>
  `<li class="reveal"><span class="ln">${String(i + 1).padStart(2, "0")}</span><div><b>${esc(t)}</b><small>${esc(s)}</small></div><span class="lp">${esc(p)}</span></li>`).join("");

// ---------- Timeline ----------
$("#timeline").innerHTML = TIMELINE.map((t) => `
  <div class="t-item reveal">
    <div class="t-card"><span class="tt">${esc(t.tt)}</span><h3>${esc(t.title)}</h3><p>${esc(t.desc)}</p>${t.pill ? `<span class="pill">${esc(t.pill)}</span>` : ""}</div>
    <div class="t-dot"></div>
    <div class="t-year">${esc(t.year)}</div>
  </div>`).join("");

// ---------- LinkedIn posts ----------
if (POSTS.length) {
  $("#posts").hidden = false;
  $("#contactNum").innerHTML = "08 <span>Contact</span>";
  document.querySelector('#nav a[data-sec="achievements"]').insertAdjacentHTML("afterend", '<a href="#posts" data-sec="posts">Posts</a>');
  $("#postGrid").innerHTML = POSTS.map((p) => `
    <a class="post reveal" href="${esc(p.url)}" target="_blank" rel="noopener">
      <div class="post-top"><span class="post-in">in</span><div><b>Niraj Kushwaha</b><small>${esc(p.date || "")}</small></div>${p.tag ? `<span class="post-tag">${esc(p.tag)}</span>` : ""}</div>
      ${p.title ? `<h3>${esc(p.title)}</h3>` : ""}
      <p>${esc(p.text || "")}</p>
      <span class="post-more">Read on LinkedIn ↗</span>
    </a>`).join("");
}

// ---------- Stats ----------
$("#stats").innerHTML = STATS.map(([ic, n, suf, label]) =>
  `<div class="stat reveal"><span class="ic">${ic}</span><div><span class="num" data-to="${n}" data-suf="${suf}">0${suf}</span><small>${esc(label)}</small></div></div>`).join("");

function countUp(el) {
  const to = +el.dataset.to, suf = el.dataset.suf, t0 = performance.now();
  const step = (t) => { const k = Math.min(1, (t - t0) / 1400); el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))) + suf; if (k < 1) requestAnimationFrame(step); };
  requestAnimationFrame(step);
}

// ---------- Reveal on scroll ----------
const revObs = new IntersectionObserver((ents) => {
  ents.forEach((en) => {
    if (!en.isIntersecting) return;
    en.target.classList.add("in");
    const num = $(".num", en.target);
    if (num) countUp(num);
    revObs.unobserve(en.target);
  });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach((el) => revObs.observe(el));

// ---------- Active nav ----------
const navLinks = [...document.querySelectorAll("#nav a")];
const secObs = new IntersectionObserver((ents) => {
  ents.forEach((en) => {
    if (en.isIntersecting) navLinks.forEach((a) => a.classList.toggle("active", a.dataset.sec === en.target.id));
  });
  moveNavIndicator();
}, { rootMargin: "-45% 0px -50% 0px" });

// Sliding pill that glides to the active nav link
function moveNavIndicator() {
  const ind = document.getElementById("navInd");
  const a = document.querySelector("#nav a.active");
  if (!ind) return;
  if (!a) { ind.style.opacity = "0"; return; }
  ind.style.opacity = "1";
  ind.style.width = a.offsetWidth + "px";
  ind.style.transform = `translateX(${a.offsetLeft}px)`;
  const nav = a.parentElement; // keep the active link visible on small screens
  if (nav.scrollWidth > nav.clientWidth) nav.scrollTo({ left: a.offsetLeft - 60, behavior: "smooth" });
}
addEventListener("resize", moveNavIndicator);
if (document.fonts) document.fonts.ready.then(moveNavIndicator);
document.querySelectorAll("section[id]").forEach((s) => secObs.observe(s));

// ---------- ID card tilt ----------
const card = $("#idcard");
const wrap = $(".lanyard-wrap");
wrap.addEventListener("mousemove", (e) => {
  const r = card.getBoundingClientRect();
  const x = (e.clientX - r.left - r.width / 2) / r.width;
  const y = (e.clientY - r.top - r.height / 2) / r.height;
  card.style.transform = `rotateY(${x * 22}deg) rotateX(${-y * 18}deg)`;
});
wrap.addEventListener("mouseleave", () => { card.style.transform = ""; });
// Decorative QR-style pattern on the card back
(() => {
  const q = $(".qr"), n = 13, cv = document.createElement("canvas");
  cv.width = cv.height = n; const c = cv.getContext("2d"), r = mulberry(98);
  c.fillStyle = "#1f2440";
  for (let x = 0; x < n; x++) for (let y = 0; y < n; y++) if (r() > 0.52) c.fillRect(x, y, 1, 1);
  [[0, 0], [n - 4, 0], [0, n - 4]].forEach(([x, y]) => { c.clearRect(x, y, 4, 4); c.fillRect(x, y, 4, 4); c.clearRect(x + 1, y + 1, 2, 2); });
  q.style.background = `#f5f2e8 url(${cv.toDataURL()}) center/100% no-repeat`;
  q.style.imageRendering = "pixelated";
})();
function flipCard() {
  const on = card.classList.toggle("flipped");
  card.setAttribute("aria-pressed", on);
}
card.addEventListener("click", (e) => { if (!e.target.closest("a")) flipCard(); });
card.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); flipCard(); } });

// ---------- Hero parallax ----------
const bigName = $(".hero-bigname");
window.addEventListener("scroll", () => {
  const y = window.scrollY;
  if (y < innerHeight) bigName.style.transform = `translate(calc(-50% + ${y * -0.25}px), -50%)`;
}, { passive: true });

window.addEventListener("load", drawOpen);
setTimeout(drawOpen, 300);

/* =========================================================
   FUTURISTIC EFFECTS
   ========================================================= */
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
const root = document.documentElement;
const fxRGB = () => getComputedStyle(root).getPropertyValue("--fx-rgb").trim() || "124, 92, 255";
const isDark = () => root.getAttribute("data-theme") === "dark";
let particleColor = fxRGB();

// ---------- Theme toggle (dark = futuristic, light = classic cream) ----------
const metaTheme = document.querySelector('meta[name="theme-color"]');
// Default is light (day mode); only an explicit toggle is remembered.
function applyTheme(t, remember = true) {
  root.setAttribute("data-theme", t);
  if (remember) {
    try { localStorage.setItem("nk-theme-choice", t); } catch (e) { /* storage blocked: theme still applies */ }
  }
  if (metaTheme) metaTheme.content = t === "dark" ? "#05060d" : "#f5f2e8";
  particleColor = fxRGB();
}
applyTheme(isDark() ? "dark" : "light", false);
$("#themeToggle").addEventListener("click", () => applyTheme(isDark() ? "light" : "dark"));

// ---------- Boot loader ----------
(function boot() {
  const loader = $("#loader");
  let finished = false;
  const done = () => {
    if (finished) return;
    finished = true;
    loader.classList.add("done");
    document.body.classList.add("booted");
    // decode the hero title once the page is revealed
    if (!reduceMotion) document.querySelectorAll(".hero-title .ht-line").forEach((l, i) => setTimeout(() => scramble(l), 150 + i * 200));
  };
  if (reduceMotion) { done(); return; }
  const bar = $("#loaderBar"), txt = $("#loaderTxt"), log = $("#loaderLog");
  const LOG = ["mounting /niraj/portfolio", "loading neural modules", "syncing GitHub · 20+ repos", "linking LinkedIn feed", "calibrating neon UI"];
  let shown = 0;
  const t0 = performance.now(), dur = 1500;
  const step = (t) => {
    const k = Math.min(1, (t - t0) / dur), p = Math.round(100 * (1 - Math.pow(1 - k, 2)));
    bar.style.width = p + "%";
    txt.textContent = (p < 100 ? "INITIALIZING · " : "SYSTEM READY · ") + p + "%";
    while (shown < LOG.length && p >= ((shown + 1) / LOG.length) * 96) {
      log.insertAdjacentHTML("beforeend", `<div><span>&gt; ${LOG[shown]}</span><b>OK</b></div>`);
      shown++;
    }
    if (k < 1) requestAnimationFrame(step); else setTimeout(done, 380);
  };
  requestAnimationFrame(step);
  setTimeout(done, 4000); // failsafe if animation frames are paused
})();

// ---------- Live HUD clock (India time) ----------
(function hudClock() {
  const el = $("#hudClock");
  if (!el) return;
  const fmt = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
  const tick = () => { el.textContent = fmt.format(new Date()); };
  tick();
  setInterval(tick, 1000);
})();

// ---------- Scroll progress ----------
const prog = $("#progress");
const onScrollFx = () => {
  const h = root.scrollHeight - innerHeight;
  prog.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
};
addEventListener("scroll", onScrollFx, { passive: true });
onScrollFx();

// ---------- Custom cursor ----------
if (finePointer && !reduceMotion) {
  const dot = $("#curDot"), ring = $("#curRing");
  let mx = -100, my = -100, rx = -100, ry = -100;
  addEventListener("pointermove", (e) => {
    mx = e.clientX; my = e.clientY;
    document.body.classList.add("has-cursor");
    dot.style.transform = `translate(${mx}px, ${my}px)`;
  }, { passive: true });
  root.addEventListener("mouseleave", () => document.body.classList.remove("has-cursor"));
  (function follow() {
    rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
    ring.style.transform = `translate(${rx}px, ${ry}px)`;
    requestAnimationFrame(follow);
  })();
  document.addEventListener("pointerover", (e) => {
    ring.classList.toggle("hover", !!e.target.closest("a, button, .tile, .panel:not(.open), .idcard, .chip"));
  });
}

// ---------- Typing roles in hero ----------
(function typer() {
  const el = $("#typed");
  if (!el || reduceMotion) return;
  const words = ["Deep learning", "LLM & RAG apps", "React + Django", "Founder @ FileX", "Creator @ VoiceMods", "Unity 3D games", "Data dashboards"];
  let w = 0, i = words[0].length, del = true;
  const tick = () => {
    const word = words[w];
    i += del ? -1 : 1;
    el.textContent = word.slice(0, i);
    let wait = del ? 45 : 85;
    if (!del && i === word.length) { del = true; wait = 1700; }
    else if (del && i === 0) { del = false; w = (w + 1) % words.length; wait = 300; }
    setTimeout(tick, wait);
  };
  setTimeout(tick, 2600);
})();

// ---------- Scramble-decode section labels ----------
const GLYPHS = "!<>-_\\/[]{}=+*^?#01ABCDEFXYZ";
function scramble(el) {
  const final = el.dataset.text || (el.dataset.text = el.textContent);
  const t0 = performance.now(), dur = 650;
  let finished = false;
  const finish = () => { finished = true; el.textContent = final; };
  const run = (now) => {
    if (finished) return;
    const k = (now - t0) / dur;
    if (k >= 1) return finish();
    el.textContent = final.split("").map((ch, i) =>
      ch === " " || k > i / final.length ? ch : GLYPHS[(Math.random() * GLYPHS.length) | 0]).join("");
    requestAnimationFrame(run);
  };
  requestAnimationFrame(run);
  setTimeout(finish, dur + 400); // never leave scrambled text behind (e.g. background tabs)
}
if (!reduceMotion) {
  const scObs = new IntersectionObserver((ents) => ents.forEach((en) => {
    if (en.isIntersecting) { scramble(en.target); scObs.unobserve(en.target); }
  }), { threshold: 1 });
  document.querySelectorAll(".sec-num span").forEach((s) => scObs.observe(s));
}

// ---------- Tech marquee ----------
(function marquee() {
  const track = $("#marquee");
  if (!track) return;
  const INVERT = new Set(["Gh", "Ex", "Vc", "Fl", "Dj", "Aw", "My", "Pd", "Nx", "Un"]); // dark logos → inverted on dark theme
  const items = ELEMENTS.filter(([s]) => LOGOS[s]).map(([s, n]) =>
    `<span class="mq-item"><img src="${ICON_CDN + LOGOS[s]}.svg" alt="" loading="lazy"${INVERT.has(s) ? ' class="inv"' : ""} />${esc(n)}</span><span class="mq-sep">✦</span>`
  ).join("");
  track.innerHTML = items + items; // duplicated for a seamless loop
})();

// ---------- Cursor spotlight on cards ----------
document.querySelectorAll(".t-card, .stat, .post, .contact-card, .element-detail, .panel, .chip, .tile")
  .forEach((el) => el.classList.add("spot"));
document.addEventListener("pointermove", (e) => {
  const el = e.target.closest(".spot");
  if (!el) return;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mx", e.clientX - r.left + "px");
  el.style.setProperty("--my", e.clientY - r.top + "px");
}, { passive: true });

// ---------- 3D tilt cards + magnetic buttons ----------
if (finePointer && !reduceMotion) {
  document.querySelectorAll(".stat, .post, .contact-card").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transition = "transform .12s ease-out, box-shadow .3s, border-color .3s, background .3s";
      el.style.transform = `perspective(800px) rotateX(${-y * 8}deg) rotateY(${x * 10}deg) translateY(-6px)`;
    });
    el.addEventListener("pointerleave", () => {
      el.style.transition = "transform .5s ease, box-shadow .3s, border-color .3s, background .3s";
      el.style.transform = "";
    });
  });
  document.querySelectorAll(".btn, .theme-toggle").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px, ${(e.clientY - r.top - r.height / 2) * 0.35}px)`;
    });
    el.addEventListener("pointerleave", () => { el.style.transform = ""; });
  });
}

// ---------- Hero particle network ----------
(function particles() {
  const cv = $("#heroCanvas");
  if (!cv || reduceMotion) return;
  const ctx = cv.getContext("2d"), hero = cv.parentElement;
  let W = 0, H = 0, pts = [], running = false;
  const mouse = { x: -999, y: -999 };
  function size() {
    const w = hero.clientWidth, h = hero.clientHeight;
    if (w === W && Math.abs(h - H) < 120) return; // ignore mobile URL-bar resizes
    const dpr = Math.min(devicePixelRatio || 1, 2);
    W = w; H = h;
    cv.width = W * dpr; cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = W < 820 ? 36 : 80;
    pts = Array.from({ length: n }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35, r: Math.random() * 1.6 + 0.6,
    }));
  }
  function frame() {
    if (!running) return;
    ctx.clearRect(0, 0, W, H);
    const c = particleColor, a = isDark() ? 0.85 : 0.35;
    for (const p of pts) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
      const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
      if (d > 0 && d < 120) { p.x += (dx / d) * 1.2; p.y += (dy / d) * 1.2; }
      ctx.fillStyle = `rgba(${c}, ${a})`;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.283); ctx.fill();
    }
    ctx.lineWidth = 1;
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const p = pts[i], q = pts[j], d = Math.hypot(p.x - q.x, p.y - q.y);
        if (d < 120) {
          ctx.strokeStyle = `rgba(${c}, ${(1 - d / 120) * a * 0.3})`;
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
        }
      }
    }
    requestAnimationFrame(frame);
  }
  hero.addEventListener("pointermove", (e) => {
    const r = hero.getBoundingClientRect();
    mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
  });
  hero.addEventListener("pointerleave", () => { mouse.x = mouse.y = -999; });
  new IntersectionObserver(([en]) => {
    const was = running;
    running = en.isIntersecting;
    if (running && !was) requestAnimationFrame(frame);
  }).observe(hero);
  size();
  addEventListener("resize", size);
})();

// ---------- Auto-number section labels (01, 02, …) in page order ----------
(function renumber() {
  let n = 0;
  document.querySelectorAll("main > section.section").forEach((sec) => {
    const num = sec.querySelector(".sec-num");
    if (sec.hidden || !num || !num.firstChild) return;
    n++;
    num.firstChild.nodeValue = String(n).padStart(2, "0") + " ";
  });
})();

// ---------- Interactive terminal ----------
(function terminal() {
  const term = $("#term"), body = $("#termBody"), form = $("#termForm"), input = $("#termIn");
  if (!term) return;
  const history = [];
  let hIdx = 0;
  const out = (html, cls) => {
    const d = document.createElement("div");
    if (cls) d.className = cls;
    d.innerHTML = html;
    body.appendChild(d);
    body.scrollTop = body.scrollHeight;
  };
  const link = (url, label) => `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(label || url)}</a>`;
  const pad = (s, n) => String(s).padEnd(n, " ");
  const LINKS = {
    github: "https://github.com/nirajkushwaha98",
    linkedin: "https://www.linkedin.com/in/niraj-kushwaha-0223b13a6",
    filex: "https://filex.lol/",
    voicemods: "https://voicemods.lol/",
  };
  const SECTIONS = ["about", "skills", "work", "learning", "experience", "achievements", "posts", "terminal", "contact"];
  const projUrl = (p) => p.live || (p.repo ? GH + encodeURIComponent(p.repo) : p.post);

  const CMDS = {
    help() {
      const rows = [
        ["about", "who is Niraj?"],
        ["skills", "tech stack, by family"],
        ["projects", "things I've built"],
        ["open <n>", "open project n — e.g. open 1"],
        ["posts", "latest LinkedIn posts"],
        ["contact", "where to find me"],
        ["ls · cd <section>", "list / jump to page sections"],
        ["filex", "launch the FileX website"],
        ["voicemods", "launch the VoiceMods studio"],
        ["theme [dark|light]", "switch the look"],
        ["clear", "clean the screen"],
        ["sudo hire-niraj", "🤫"],
      ];
      out('<span class="t-acc">Available commands</span>\n' +
        rows.map(([c, d]) => `  <span class="t-ok">${esc(pad(c, 20))}</span><span class="t-dim">${esc(d)}</span>`).join("\n"));
    },
    about() {
      out([
        '<span class="t-acc">Niraj Kushwaha</span>',
        "MCA (AI & ML) @ Chandigarh University",
        "Full Stack AI Developer · Founder of FileX · Creator of VoiceMods",
        '<span class="t-dim">“From the dataset to the deployed app.”</span>',
      ].join("\n"));
    },
    whoami() { out('guest — but you could be my next teammate 😉  (try <span class="t-ok">sudo hire-niraj</span>)'); },
    skills() {
      out(FAMILIES.map((f) =>
        `<span class="t-acc">${esc(pad(f.name, 11))}</span>→ ${esc(ELEMENTS.filter((e) => e[2] === f.id).map((e) => e[1]).join(", "))}`
      ).join("\n"));
    },
    projects() {
      out(PROJECTS.map((p, i) =>
        `<span class="t-ok">[${i + 1}]</span> <span class="t-cmd">${esc(pad(p.name, 24))}</span><span class="t-dim">${esc(p.tags)}</span>`
      ).join("\n") + '\n<span class="t-dim">Type</span> open &lt;n&gt; <span class="t-dim">to launch one.</span>');
    },
    open(arg) {
      const key = (arg || "").trim().toLowerCase();
      let url, name;
      if (LINKS[key]) { url = LINKS[key]; name = key; }
      else if (key) {
        const p = PROJECTS[parseInt(key, 10) - 1] || PROJECTS.find((x) => x.name.toLowerCase().includes(key));
        if (p) { url = projUrl(p); name = p.name; }
        if (p && !url) return out(`<span class="t-acc">${esc(p.name)}</span> isn't public yet — ${esc((p.soon || "coming soon").replace(/^./, (c) => c.toLowerCase()))}.`);
      }
      if (!url) return out(`<span class="t-err">open: nothing called “${esc(arg || "")}”.</span> Try <span class="t-ok">projects</span>.`);
      window.open(url, "_blank", "noopener");
      out(`<span class="t-ok">↗</span> Opening ${esc(name)} → ${link(url)}`);
    },
    posts() {
      out(POSTS.map((p) => `<span class="t-dim">${esc(pad(p.date, 13))}</span>${esc(p.title)}  ${link(p.url, "↗")}`).join("\n"));
    },
    contact() {
      out([
        `GitHub    ${link(LINKS.github, "github.com/nirajkushwaha98")}`,
        `LinkedIn  ${link(LINKS.linkedin, "linkedin.com/in/niraj-kushwaha")}`,
        `FileX     ${link(LINKS.filex, "filex.lol")}`,
        `VoiceMods ${link(LINKS.voicemods, "voicemods.lol")}`,
      ].join("\n"));
    },
    ls() { out(SECTIONS.map((s) => `<span class="t-acc">${s}/</span>`).join("  ")); },
    cd(arg) {
      const s = (arg || "").trim().replace(/\/$/, "").toLowerCase();
      const alias = { journey: "experience", projects: "work", "~": "home", "..": "home", "/": "home", home: "home" };
      const id = alias[s] || s;
      const el = id && (id === "home" || SECTIONS.includes(id)) ? document.getElementById(id) : null;
      if (!el || el.hidden) return out(`<span class="t-err">cd: no such section: ${esc(arg || "")}</span>  (try <span class="t-ok">ls</span>)`);
      out(`<span class="t-dim">→ jumping to</span> ${esc(id)}/`);
      el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    },
    filex() { CMDS.open("filex"); },
    voicemods() { CMDS.open("voicemods"); },
    theme(arg) {
      const t = arg === "light" || arg === "dark" ? arg : isDark() ? "light" : "dark";
      applyTheme(t);
      out(`<span class="t-ok">✓</span> theme set to ${t}`);
    },
    clear() { body.innerHTML = ""; },
    date() { out(new Date().toString()); },
    echo(arg) { out(esc(arg || "")); },
    sudo(arg) {
      if ((arg || "").trim().toLowerCase() === "hire-niraj") {
        out([
          '<span class="t-dim">[sudo] password for recruiter: ********</span>',
          '<span class="t-ok">✓ Access granted.</span>',
          'Initiating hiring protocol… <span class="t-ok">100%</span>',
          `🚀 Let's talk → ${link(LINKS.linkedin, "Connect on LinkedIn")}`,
        ].join("\n"));
      } else out('<span class="t-err">Permission denied.</span> Nice try 😏');
    },
    exit() { out('There is no escape 😄 — type <span class="t-ok">help</span>.'); },
  };
  CMDS.cls = CMDS.clear;
  CMDS.social = CMDS.contact;
  const has = (k) => Object.prototype.hasOwnProperty.call(CMDS, k);

  function run(raw) {
    const line = raw.trim();
    out(`<span class="t-pr">niraj@portfolio:~$</span> <span class="t-cmd">${esc(line)}</span>`);
    if (!line) return;
    history.push(line);
    hIdx = history.length;
    const [cmd, ...rest] = line.split(/\s+/);
    const key = cmd.toLowerCase();
    if (has(key)) CMDS[key](rest.join(" "));
    else out(`<span class="t-err">command not found: ${esc(cmd)}</span> — type <span class="t-ok">help</span>`);
  }
  form.addEventListener("submit", (e) => { e.preventDefault(); run(input.value); input.value = ""; });
  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" && history.length) {
      e.preventDefault(); hIdx = Math.max(0, hIdx - 1); input.value = history[hIdx];
    } else if (e.key === "ArrowDown" && history.length) {
      e.preventDefault(); hIdx = Math.min(history.length, hIdx + 1); input.value = history[hIdx] || "";
    } else if (e.key === "Tab" && input.value.trim()) {
      const v = input.value.trim().toLowerCase();
      const hits = Object.keys(CMDS).filter((c) => c.startsWith(v));
      if (hits.length === 1) { e.preventDefault(); input.value = hits[0] + " "; }
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault(); body.innerHTML = "";
    }
  });
  term.addEventListener("click", (e) => {
    if (!e.target.closest("a") && !String(getSelection())) input.focus({ preventScroll: true });
  });

  // Greet the visitor the first time the terminal scrolls into view
  const WELCOME = [
    '<span class="t-acc">NK-OS v2.0</span> <span class="t-dim">(portfolio build 2026.11 · tty1)</span>',
    "Welcome, visitor. I'm Niraj's portfolio terminal.",
    'Type <span class="t-ok">help</span> to see what I can do.',
  ];
  new IntersectionObserver(([en], obs) => {
    if (!en.isIntersecting) return;
    obs.disconnect();
    WELCOME.forEach((l, i) => setTimeout(() => out(l), reduceMotion ? 0 : 250 + i * 380));
  }, { threshold: 0.3 }).observe(term);
})();

// ---------- Floating terminal button + ` shortcut ----------
(function fab() {
  const btn = $("#fab"), sec = $("#terminal"), input = $("#termIn");
  if (!btn || !sec) return;
  let termVisible = false;
  const update = () => btn.classList.toggle("show", scrollY > innerHeight * 0.8 && !termVisible);
  new IntersectionObserver(([en]) => { termVisible = en.isIntersecting; update(); }, { threshold: 0.25 }).observe(sec);
  addEventListener("scroll", update, { passive: true });
  const go = () => {
    sec.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
    setTimeout(() => input.focus({ preventScroll: true }), reduceMotion ? 0 : 700);
  };
  btn.addEventListener("click", (e) => { e.preventDefault(); go(); });
  document.addEventListener("keydown", (e) => {
    const typing = /^(INPUT|TEXTAREA|SELECT)$/.test((document.activeElement || {}).tagName || "");
    if (e.key === "`" && !typing && !e.ctrlKey && !e.metaKey && !e.altKey) { e.preventDefault(); go(); }
  });
})();

// ---------- Neon border beams ----------
document.querySelectorAll(".stat, .post, .contact-card, .t-card, .panel").forEach((el) => el.classList.add("beam"));
["#elDetail", "#term"].forEach((s) => { const el = $(s); if (el) el.classList.add("beam", "beam-on"); });

// ---------- Scroll-linked timeline beam ----------
(function timelineBeam() {
  const tl = $("#timeline");
  if (!tl) return;
  const beam = document.createElement("div");
  beam.className = "t-beam";
  tl.appendChild(beam); // appended last so the even/odd card layout is untouched
  const items = [...tl.querySelectorAll(".t-item")];
  const update = () => {
    const r = tl.getBoundingClientRect(), line = innerHeight * 0.6;
    beam.style.transform = `scaleY(${Math.max(0, Math.min(1, (line - r.top) / r.height))})`;
    items.forEach((it) => {
      const d = it.querySelector(".t-dot").getBoundingClientRect();
      it.classList.toggle("lit", d.top + d.height / 2 < line);
    });
  };
  addEventListener("scroll", update, { passive: true });
  addEventListener("resize", update);
  update();
})();

// ---------- Neon cursor trail ----------
if (finePointer && !reduceMotion) {
  const cv = $("#trail"), ctx = cv.getContext("2d");
  let pts = [], raf = 0;
  const LIFE = 380;
  const size = () => {
    const d = Math.min(devicePixelRatio || 1, 2);
    cv.width = innerWidth * d; cv.height = innerHeight * d;
    ctx.setTransform(d, 0, 0, d, 0, 0);
  };
  const draw = (now) => {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    pts = pts.filter((p) => now - p.t < LIFE);
    ctx.lineCap = "round";
    for (let i = 1; i < pts.length; i++) {
      const a = pts[i - 1], b = pts[i], k = i / pts.length, life = 1 - (now - b.t) / LIFE;
      ctx.strokeStyle = `rgba(${particleColor}, ${k * life * 0.75})`;
      ctx.lineWidth = 1 + k * 3.5;
      ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
    }
    raf = pts.length ? requestAnimationFrame(draw) : 0;
  };
  size();
  addEventListener("resize", size);
  addEventListener("pointermove", (e) => {
    pts.push({ x: e.clientX, y: e.clientY, t: performance.now() });
    if (!raf) raf = requestAnimationFrame(draw);
  }, { passive: true });
}

// ---------- Tab title easter egg ----------
const baseTitle = document.title;
document.addEventListener("visibilitychange", () => {
  document.title = document.hidden ? "⚡ Come back! — Niraj Kushwaha" : baseTitle;
});
