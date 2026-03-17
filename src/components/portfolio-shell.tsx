"use client";

import Link from "next/link";
import { GitHubWidget } from "@/components/GitHubWidget";
import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Download,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Wrench,
  X,
} from "lucide-react";

const navItems = [
  { label: "About", href: "#about", id: "about" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Contact", href: "#contact", id: "contact" },
] as const;

const roles = ["ML Engineer", "Software Developer", "Full-Stack Builder"];

type Project = {
  name: string;
  stack: string[];
  description: string;
  fullDescription: string;
  liveUrl: string;
  githubUrl: string;
  liveLabel?: string;
};

const projects: Project[] = [
  {
    name: "SmartPlace3D: AR Object Placement with AI",
    stack: ["Next.js 14", "React Three Fiber", "MediaPipe", "WebXR", "Zustand"],
    description:
      "Full-stack AR application enabling face tracking and world-scale 3D object placement via Kalman filtering.",
    fullDescription:
      "Cross-device support via QR sync, world-scale interaction, and CI/CD deployment on Render for a polished AR workflow across devices.",
    liveUrl: "https://render.com",
    githubUrl: "https://github.com/Vibhor2702",
  },
  {
    name: "PR Review Agent: Automated Code Quality Analysis",
    stack: ["Flask", "Gemini AI", "Streamlit", "CI/CD"],
    description:
      "AI-driven PR assessment tool that cuts manual review time by 60% with real-time static analysis.",
    fullDescription:
      "Integrates Gemini AI for automated feedback loops, faster triage, and a more consistent code-review baseline inside delivery pipelines.",
    liveUrl: "https://streamlit.io",
    githubUrl: "https://github.com/Vibhor2702",
  },
  {
    name: "ThinkCheck: Structured Reasoning with Gemma 2B-IT",
    stack: ["PyTorch", "Transformers", "HuggingFace"],
    description:
      "Fine-tuned Gemma 2B-IT with a custom XML reasoning schema achieving 90% schema-valid outputs.",
    fullDescription:
      "Built a reproducible ML pipeline with automated validity metrics to validate reasoning structure, improve reliability, and make iteration measurable.",
    liveUrl: "https://github.com/Vibhor2702",
    githubUrl: "https://github.com/Vibhor2702",
    liveLabel: "Project Link",
  },
  {
    name: "Varaksha: Privacy-Preserving UPI Fraud Detection",
    stack: ["Python", "scikit-learn", "ONNX", "Rust Actix-Web"],
    description:
      "Ensemble fraud detection on 111k UPI transactions with ONNX export for low-latency Rust inference.",
    fullDescription:
      "Combines RandomForest, IsolationForest, and SMOTE-backed training to support privacy-aware fraud detection inside a high-speed payment gateway path.",
    liveUrl: "https://github.com/Vibhor2702",
    githubUrl: "https://github.com/Vibhor2702",
    liveLabel: "Project Link",
  },
  {
    name: "Alrisa: Automated Machine Learning Platform",
    stack: ["Python", "PyCaret", "Flask", "Render"],
    description:
      "AutoML platform supporting classification, regression, clustering, and dimensionality reduction.",
    fullDescription:
      "Designed with a minimalist UI and scalable deployment flow on Render to make model experimentation and comparison faster for end users.",
    liveUrl: "https://render.com",
    githubUrl: "https://github.com/Vibhor2702",
  },
];

type SkillGroup = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Machine Learning & AI",
    icon: BrainCircuit,
    skills: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "HuggingFace Transformers",
      "NLP",
      "ONNX",
      "PyCaret",
      "Feature Engineering",
      "Model Evaluation",
      "MediaPipe",
    ],
  },
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "JavaScript", "SQL", "Java", "C/C++", "HTML/CSS"],
  },
  {
    title: "Frameworks & Backend",
    icon: Layers3,
    skills: [
      "Flask",
      "FastAPI",
      "Next.js 14",
      "React",
      "Streamlit",
      "Rust Actix-Web",
    ],
  },
  {
    title: "Data & Analytics",
    icon: BarChart3,
    skills: [
      "NumPy",
      "Pandas",
      "Tableau",
      "Power BI",
      "dbt",
      "Snowflake",
      "Data Mining",
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Wrench,
    skills: [
      "Docker",
      "Git",
      "CI/CD Pipelines",
      "Cloudflare",
      "REST APIs",
      "Microservices",
      "WebXR",
    ],
  },
  {
    title: "Cloud & Enterprise",
    icon: Cloud,
    skills: [
      "Oracle Cloud Infrastructure (OCI)",
      "Oracle Fusion Cloud ERP",
      "SAP Basis",
      "SAP Fiori",
      "Google Analytics",
    ],
  },
];

const experiences = [
  {
    title: "Mawai Infotech Ltd",
    subtitle: "SAP Basis Intern",
    location: "Noida, UP",
    duration: "Dec 2024 – Jan 2025",
    bullets: [
      "Built KPI dashboards integrating SAP + Tableau, reducing manual reporting cycles by 11%.",
      "Improved SAP Fiori performance by 18–22% via log-driven system analysis.",
      "Optimized transport workflows cutting operational lead times by 20%.",
      "Collaborated across teams to improve system reliability.",
    ],
    icon: BriefcaseBusiness,
  },
  {
    title: "SRM Institute of Science and Technology, NCR Campus",
    subtitle: "B.Tech in Computer Science and Engineering",
    location: "2022 – 2026",
    duration: "CGPA: 7.56/10",
    bullets: [],
    icon: GraduationCap,
  },
];

const certifications = [
  "Oracle Cloud Infrastructure 2025 Certified Foundations Associate — Sep 2025",
  "Oracle Fusion Cloud ERP Essentials (Rel 1) — Aug 2025",
  "Google Analytics Individual Certification — Sep 2025",
  "NPTEL Data Mining — Jan–Mar 2025",
  "HackerRank Java (Basic) — Oct 2023",
];

const contactLinks = [
  {
    label: "Email",
    value: "vibhor2702@gmail.com",
    href: "mailto:vibhor2702@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/srivastavavibhor27",
    href: "https://linkedin.com/in/srivastavavibhor27",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/Vibhor2702",
    href: "https://github.com/Vibhor2702",
    icon: Github,
  },
];

function revealStyle(delay: number): CSSProperties {
  return { ["--delay" as string]: `${delay}ms` };
}

export function PortfolioShell() {
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const [displayRole, setDisplayRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.65],
      },
    );

    sections.forEach((section) => sectionObserver.observe(section));

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.16,
      },
    );

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
      revealObserver.observe(element);
    });

    return () => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const isTyping = displayRole.length < currentRole.length;

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting && isTyping) {
          setDisplayRole(currentRole.slice(0, displayRole.length + 1));
          return;
        }

        if (!isDeleting && !isTyping) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting && displayRole.length > 0) {
          setDisplayRole(currentRole.slice(0, displayRole.length - 1));
          return;
        }

        setIsDeleting(false);
        setRoleIndex((current) => (current + 1) % roles.length);
      },
      isDeleting ? 45 : isTyping ? 85 : 1250,
    );

    return () => window.clearTimeout(timeout);
  }, [displayRole, isDeleting, roleIndex]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="relative overflow-x-hidden text-[var(--foreground)]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[rgba(13,13,13,0.78)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <Link
            href="#about"
            className="flex items-center gap-3"
            aria-label="Go to top of portfolio"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--accent)] bg-[rgba(255,138,0,0.08)] font-[family:var(--font-heading)] text-2xl tracking-[0.18em] text-[var(--accent)] shadow-[0_0_28px_rgba(255,138,0,0.18)]">
              VS
            </span>
            <span className="hidden font-[family:var(--font-heading)] text-2xl tracking-[0.18em] text-[var(--foreground)] sm:block">
              Vibhor Srivastava
            </span>
          </Link>

          <nav className="hidden items-center gap-2 md:flex" aria-label="Primary navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`rounded-full border px-4 py-2 text-sm uppercase tracking-[0.22em] ${
                    isActive
                      ? "border-[var(--accent)] bg-[rgba(255,138,0,0.10)] text-[var(--accent)]"
                      : "border-transparent text-[var(--muted)] hover:border-[var(--border)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-[var(--border)] p-3 text-[var(--foreground)] md:hidden"
            onClick={() => setMenuOpen((current) => !current)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {menuOpen ? (
          <div id="mobile-menu" className="border-t border-[var(--border)] bg-[rgba(13,13,13,0.96)] px-5 py-4 md:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col gap-2" aria-label="Mobile navigation">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={closeMenu}
                    className={`rounded-2xl border px-4 py-3 uppercase tracking-[0.22em] ${
                      isActive
                        ? "border-[var(--accent)] bg-[rgba(255,138,0,0.10)] text-[var(--accent)]"
                        : "border-[var(--border)] text-[var(--foreground)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        ) : null}
      </header>

      <main className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <section id="about" className="section-shell relative flex min-h-screen items-center pt-28 sm:pt-32">
          <div className="noise-overlay" aria-hidden="true" />
          <div className="scanline-overlay" aria-hidden="true" />
          <div className="grid w-full gap-10 py-12 lg:py-20 xl:grid-cols-[minmax(0,1.25fr)_minmax(340px,0.75fr)] xl:items-end">
            <div className="relative z-10 min-w-0 max-w-[700px] space-y-8 xl:pr-8">
              <div className="reveal space-y-5" data-reveal style={revealStyle(0)}>
                <p className="section-kicker">Greater Noida, India</p>
                <h1 className="max-w-[8ch] break-words font-[family:var(--font-heading)] text-5xl leading-[0.92] tracking-[0.035em] text-[var(--foreground)] sm:text-6xl lg:text-[clamp(3.6rem,6vw,5.4rem)]">
                  Vibhor Srivastava
                </h1>
                <div className="flex min-h-14 items-center text-2xl text-[var(--accent)] sm:text-3xl lg:text-4xl">
                  <span className="font-[family:var(--font-heading)] uppercase tracking-[0.18em]">
                    {displayRole}
                  </span>
                  <span className="type-caret ml-2 text-[var(--accent)]">|</span>
                </div>
              </div>

              <p
                className="reveal max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl"
                data-reveal
                style={revealStyle(100)}
              >
                I build intelligent systems and ship products end-to-end.
              </p>

              <div
                className="reveal flex flex-col gap-4 sm:flex-row"
                data-reveal
                style={revealStyle(180)}
              >
                <Link href="#projects" className="group inline-flex items-center justify-center gap-2 rounded-full border border-[var(--accent)] bg-[var(--accent)] px-6 py-3 text-sm uppercase tracking-[0.22em] text-[var(--accent-text)] hover:-translate-y-1 hover:shadow-[0_0_32px_rgba(255,138,0,0.22)]">
                  View Projects
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="/Vibhor_Srivastava_Resume.html"
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm uppercase tracking-[0.22em] text-[var(--foreground)] hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </div>

              <div
                className="reveal flex flex-wrap gap-3 text-sm text-[var(--muted)]"
                data-reveal
                style={revealStyle(260)}
              >
                <a href="mailto:vibhor2702@gmail.com" className="chip rounded-full px-4 py-2 hover:border-[var(--accent)] hover:text-[var(--accent)]">
                  vibhor2702@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/srivastavavibhor27"
                  target="_blank"
                  rel="noreferrer"
                  className="chip rounded-full px-4 py-2 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Vibhor2702"
                  target="_blank"
                  rel="noreferrer"
                  className="chip rounded-full px-4 py-2 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  GitHub
                </a>
              </div>
            </div>

            <aside className="relative z-20 grid gap-4 xl:justify-self-end xl:max-w-[380px]">
              {[
                ["Focus", "Machine learning systems, backend engineering, product delivery"],
                ["Build Style", "Fast iteration, measurable outcomes, full-stack ownership"],
                ["Availability", "Open to opportunities"],
              ].map(([label, value], index) => (
                <div
                  key={label}
                  className="panel hover-glow reveal rounded-[1.6rem] p-5"
                  data-reveal
                  style={revealStyle(120 + index * 90)}
                >
                  <p className="mb-3 font-[family:var(--font-heading)] text-sm uppercase tracking-[0.24em] text-[var(--accent)]">
                    {label}
                  </p>
                  <p className="text-sm leading-7 text-[var(--muted)]">{value}</p>
                </div>
              ))}
              <div className="panel reveal rounded-[1.6rem] border-[var(--accent)] bg-[linear-gradient(180deg,rgba(255,138,0,0.12),transparent),var(--surface-strong)] p-5" data-reveal style={revealStyle(390)}>
                <div className="flex items-center gap-3 text-[var(--foreground)]">
                  <MapPin size={18} className="text-[var(--accent)]" />
                  <span className="text-sm uppercase tracking-[0.22em] text-[var(--muted)]">
                    Greater Noida, India
                  </span>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <div className="speaker-rule" aria-hidden="true" />

        <section id="projects" className="section-shell py-20 sm:py-24">
          <div className="mb-12 max-w-3xl space-y-4">
            <p className="section-kicker reveal" data-reveal style={revealStyle(0)}>
              Selected Work
            </p>
            <h2 className="section-title reveal text-4xl sm:text-5xl" data-reveal style={revealStyle(70)}>
              Projects
            </h2>
            <p className="section-copy reveal" data-reveal style={revealStyle(140)}>
              Intelligent products, applied ML systems, and full-stack builds shaped around measurable outcomes.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className="panel hover-glow reveal group flex h-full flex-col rounded-[1.8rem] p-4"
                data-reveal
                style={revealStyle(index * 90)}
              >
                <div className="relative mb-5 overflow-hidden rounded-[1.4rem] border border-[var(--border)] bg-[var(--surface-strong)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,138,0,0.25),transparent_42%),linear-gradient(160deg,rgba(255,255,255,0.03),transparent_60%)]" />
                  <div className="scanline-overlay opacity-40" aria-hidden="true" />
                  <div className="relative flex h-48 flex-col justify-between p-5">
                    <p className="font-[family:var(--font-heading)] text-5xl leading-none tracking-[0.12em] text-[rgba(240,236,228,0.12)]">
                      0{index + 1}
                    </p>
                    <p className="max-w-[14rem] text-sm uppercase tracking-[0.24em] text-[var(--muted)]">
                      {project.stack.slice(0, 2).join(" / ")}
                    </p>
                  </div>
                  <div className="absolute inset-0 flex items-end bg-[linear-gradient(180deg,transparent,rgba(13,13,13,0.92))] p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-sm leading-7 text-[var(--foreground)]">{project.fullDescription}</p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-5">
                  <div>
                    <h3 className="font-[family:var(--font-heading)] text-3xl uppercase leading-tight tracking-[0.08em] text-[var(--foreground)]">
                      {project.name}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="badge rounded-full px-3 py-1 text-xs uppercase tracking-[0.18em]">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-3 pt-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2 text-xs uppercase tracking-[0.22em] text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    >
                      {project.liveLabel ?? "Live Demo"}
                      <ArrowUpRight size={14} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2 text-xs uppercase tracking-[0.22em] text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    >
                      GitHub
                      <Github size={14} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="speaker-rule" aria-hidden="true" />

        <GitHubWidget />

        <div className="speaker-rule" aria-hidden="true" />

        <section id="skills" className="section-shell py-20 sm:py-24">
          <div className="mb-12 max-w-3xl space-y-4">
            <p className="section-kicker reveal" data-reveal style={revealStyle(0)}>
              Technical Stack
            </p>
            <h2 className="section-title reveal text-4xl sm:text-5xl" data-reveal style={revealStyle(70)}>
              Skills
            </h2>
            <p className="section-copy reveal" data-reveal style={revealStyle(140)}>
              A working stack spanning ML research, backend systems, analytics, cloud tooling, and enterprise platforms.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;

              return (
                <article
                  key={group.title}
                  className="panel hover-glow reveal rounded-[1.8rem] p-6"
                  data-reveal
                  style={revealStyle(index * 90)}
                >
                  <div className="mb-5 flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--accent)] bg-[rgba(255,138,0,0.08)] text-[var(--accent)]">
                      <Icon size={20} />
                    </span>
                    <h3 className="font-[family:var(--font-heading)] text-2xl uppercase tracking-[0.12em] text-[var(--accent)]">
                      {group.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {group.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="chip reveal rounded-full px-4 py-2 text-sm text-[var(--foreground)]"
                        data-reveal
                        style={revealStyle(index * 80 + skillIndex * 35)}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <div className="speaker-rule" aria-hidden="true" />

        <section id="experience" className="section-shell py-20 sm:py-24">
          <div className="mb-12 max-w-3xl space-y-4">
            <p className="section-kicker reveal" data-reveal style={revealStyle(0)}>
              Journey
            </p>
            <h2 className="section-title reveal text-4xl sm:text-5xl" data-reveal style={revealStyle(70)}>
              Experience Timeline
            </h2>
            <p className="section-copy reveal" data-reveal style={revealStyle(140)}>
              Experience across SAP systems, analytics, and engineering education that feeds directly into product-minded ML work.
            </p>
          </div>

          <div className="relative ml-3 border-l border-[var(--border)] pl-8 sm:ml-4 sm:pl-10">
            {experiences.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="reveal relative mb-12 last:mb-0"
                  data-reveal
                  style={revealStyle(index * 110)}
                >
                  <span className="absolute -left-[3.15rem] top-1 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--accent)] bg-[var(--background)] text-[var(--accent)] shadow-[0_0_24px_rgba(255,138,0,0.16)] sm:-left-[3.45rem]">
                    <Icon size={18} />
                  </span>

                  <div className="panel rounded-[1.6rem] p-6">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="font-[family:var(--font-heading)] text-3xl uppercase tracking-[0.08em] text-[var(--foreground)]">
                          {item.title}
                        </h3>
                        <p className="text-lg text-[var(--accent)]">{item.subtitle}</p>
                      </div>
                      <div className="text-sm uppercase tracking-[0.2em] text-[var(--muted)] sm:text-right">
                        <p>{item.location}</p>
                        <p className="mt-2">{item.duration}</p>
                      </div>
                    </div>

                    {item.bullets.length ? (
                      <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--muted)] sm:text-base">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                            <span className="mt-3 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <div className="speaker-rule" aria-hidden="true" />

        <section className="section-shell py-20 sm:py-24" aria-labelledby="certifications-title">
          <div className="mb-12 max-w-3xl space-y-4">
            <p className="section-kicker reveal" data-reveal style={revealStyle(0)}>
              Credentials
            </p>
            <h2 id="certifications-title" className="section-title reveal text-4xl sm:text-5xl" data-reveal style={revealStyle(70)}>
              Certifications
            </h2>
            <p className="section-copy reveal" data-reveal style={revealStyle(140)}>
              Current certifications spanning cloud foundations, analytics, ERP systems, and core computer science discipline.
            </p>
          </div>

          <div className="flex snap-x gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-3 lg:overflow-visible">
            {certifications.map((item, index) => (
              <article
                key={item}
                className="panel hover-glow reveal min-w-[280px] snap-start rounded-[1.6rem] p-5"
                data-reveal
                style={revealStyle(index * 80)}
              >
                <div className="mb-4 flex items-center gap-3 text-[var(--accent)]">
                  <Award size={18} />
                  <span className="font-[family:var(--font-heading)] text-sm uppercase tracking-[0.24em] text-[var(--accent)]">
                    Certification
                  </span>
                </div>
                <p className="text-sm leading-7 text-[var(--foreground)]">{item}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="speaker-rule" aria-hidden="true" />

        <section id="contact" className="section-shell py-20 sm:py-24">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.95fr)] lg:items-start">
            <div className="max-w-2xl space-y-4">
              <p className="section-kicker reveal" data-reveal style={revealStyle(0)}>
                Get In Touch
              </p>
              <h2 className="section-title reveal text-4xl sm:text-5xl" data-reveal style={revealStyle(70)}>
                Contact
              </h2>
              <p className="section-copy reveal" data-reveal style={revealStyle(140)}>
                Open to opportunities. If you are building something ambitious across ML, software, or full-stack product delivery, let’s talk.
              </p>
            </div>

            <div className="grid gap-4">
              {contactLinks.map((item, index) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="panel hover-glow reveal flex items-center justify-between rounded-[1.6rem] p-5"
                    data-reveal
                    style={revealStyle(index * 90)}
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--accent)] bg-[rgba(255,138,0,0.08)] text-[var(--accent)]">
                        <Icon size={18} />
                      </span>
                      <div>
                        <p className="font-[family:var(--font-heading)] text-xl uppercase tracking-[0.12em] text-[var(--accent)]">
                          {item.label}
                        </p>
                        <p className="text-sm text-[var(--muted)] sm:text-base">{item.value}</p>
                      </div>
                    </div>
                    <ArrowUpRight size={18} className="text-[var(--muted)]" />
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--border)] px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>Vibhor Srivastava</p>
          <p>ML Engineer · Software Developer · Full-Stack Builder</p>
        </div>
      </footer>
    </div>
  );
}
