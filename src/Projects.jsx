import { useEffect, useRef, useState } from 'react';
import { ExternalLink, ArrowUpRight, Terminal, Cpu, Globe, Layers } from 'lucide-react';
import './Projects.css';

/* ─── DATA ── fill in your real projects ───────────────────────────── */
const FEATURED = [
    {
        id: 'proj-1',
        tag: 'Systems',
        tagIcon: Cpu,
        title: '[Your Project Title]',
        subtitle: 'Brief one-liner about what this project does.',
        description:
            'A short paragraph describing the project, the problem it solves, and why it matters. Replace this with real details about your work.',
        tech: ['C++17', 'Multithreading', 'CMake', 'GDB'],
        impact: '3× faster · 40% less memory',
        github: '#',
        live: null,
        accent: 'purple',
    },
    {
        id: 'proj-2',
        tag: 'Backend',
        tagIcon: Terminal,
        title: '[Your Project Title]',
        subtitle: 'Brief one-liner about what this project does.',
        description:
            'A short paragraph describing the project, the problem it solves, and why it matters. Replace this with real details about your work.',
        tech: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
        impact: 'Serving 10K+ requests/day',
        github: '#',
        live: '#',
        accent: 'teal',
    },
    {
        id: 'proj-3',
        tag: 'Full-Stack',
        tagIcon: Globe,
        title: '[Your Project Title]',
        subtitle: 'Brief one-liner about what this project does.',
        description:
            'A short paragraph describing the project, the problem it solves, and why it matters. Replace this with real details about your work.',
        tech: ['React', 'Node.js', 'WebSockets', 'Redis'],
        impact: 'Real-time sync across 500+ clients',
        github: '#',
        live: null,
        accent: 'purple',
    },
];

const SIDE_PROJECTS = [
    {
        id: 'side-1',
        icon: Layers,
        title: '[Side Project Name]',
        desc: 'One-liner about what you built or explored here.',
        tech: ['C++', 'Assembly'],
        github: '#',
    },
    {
        id: 'side-2',
        icon: Terminal,
        title: '[Side Project Name]',
        desc: 'One-liner about what you built or explored here.',
        tech: ['Python', 'Linux'],
        github: '#',
    },
    {
        id: 'side-3',
        icon: Cpu,
        title: '[Side Project Name]',
        desc: 'One-liner about what you built or explored here.',
        tech: ['Rust', 'WASM'],
        github: null,
    },
    {
        id: 'side-4',
        icon: Globe,
        title: '[Side Project Name]',
        desc: 'One-liner about what you built or explored here.',
        tech: ['React', 'TypeScript'],
        github: '#',
    },
];

/* ─── IMPACT STATS ─────────────────────────────────────────────────── */
const STATS = [
    { value: '30', label: 'Features shipped', suffix: '+' },
    { value: '40', label: 'Compute Savings', suffix: '%' },
    { value: '3', label: 'Release Velocity', suffix: 'x' },
    { value: '500', label: 'Problems Solved', suffix: '+' },
];

/* ─── ANIMATED COUNTER ──────────────────────────────────────────────── */
function Counter({ value, suffix }) {
    const isNumeric = !isNaN(parseInt(value, 10));
    const [display, setDisplay] = useState(isNumeric ? 0 : value);
    const target = isNumeric ? parseInt(value, 10) : 0;
    const startedRef = useRef(false);
    const elRef = useRef(null);

    useEffect(() => {
        if (!isNumeric) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !startedRef.current) {
                    startedRef.current = true;
                    const duration = 1400;
                    const startTime = performance.now();
                    const tick = (now) => {
                        const progress = Math.min((now - startTime) / duration, 1);
                        const ease = 1 - Math.pow(1 - progress, 3);
                        setDisplay(Math.round(ease * target));
                        if (progress < 1) requestAnimationFrame(tick);
                    };
                    requestAnimationFrame(tick);
                }
            },
            { threshold: 0.5 }
        );
        if (elRef.current) observer.observe(elRef.current);
        return () => observer.disconnect();
    }, [isNumeric, target]);

    return (
        <span ref={elRef} className="stat-value">
            {display}{suffix}
        </span>
    );
}

/* ─── COMPONENT ─────────────────────────────────────────────────────── */
export default function Projects() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('proj-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.06 }
        );
        const el = sectionRef.current;
        if (el) observer.observe(el);
        return () => { if (el) observer.unobserve(el); };
    }, []);

    return (
        <section className="proj-section" ref={sectionRef}>
            <div className="proj-wrapper">

                {/* ── Header ─────────────────────────────────────────── */}
                <div className="proj-header">
                    <span className="proj-eyebrow">&lt; Projects /&gt;</span>
                    <h2 className="proj-headline">
                        Things I&apos;ve&nbsp;
                        <span className="proj-accent">built.</span>
                    </h2>
                    <p className="proj-subline">
                        A selection of projects — from embedded systems to full-stack products.
                        Each one taught me something worth keeping.
                    </p>
                </div>

                {/* ── Impact stats strip ─────────────────────────────── */}
                <div className="proj-stats">
                    {STATS.map(({ value, label, suffix }) => (
                        <div key={label} className="stat-cell">
                            <Counter value={value} suffix={suffix} />
                            <span className="stat-label">{label}</span>
                        </div>
                    ))}
                </div>

                {/* ── Featured project cards ─────────────────────────── */}
                <div className="proj-featured-grid">
                    {FEATURED.map((proj, i) => {
                        const TagIcon = proj.tagIcon;
                        return (
                            <article
                                key={proj.id}
                                className={`proj-card proj-card--${proj.accent}`}
                                style={{ '--delay': `${i * 0.12}s` }}
                            >
                                {/* Top bar */}
                                <div className="proj-card-top">
                                    <span className={`proj-tag proj-tag--${proj.accent}`}>
                                        <TagIcon size={12} strokeWidth={2.5} />
                                        {proj.tag}
                                    </span>
                                    <div className="proj-card-links">
                                        {proj.github && (
                                            <a
                                                href={proj.github}
                                                className="proj-icon-link"
                                                aria-label="GitHub repository"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {/* <Github size={16} strokeWidth={2} /> */}
                                            </a>
                                        )}
                                        {proj.live && (
                                            <a
                                                href={proj.live}
                                                className="proj-icon-link proj-icon-link--highlight"
                                                aria-label="Live demo"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <ExternalLink size={16} strokeWidth={2} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Body */}
                                <div className="proj-card-body">
                                    <h3 className="proj-card-title">{proj.title}</h3>
                                    <p className="proj-card-subtitle">{proj.subtitle}</p>
                                    <p className="proj-card-desc">{proj.description}</p>
                                </div>

                                {/* Impact badge */}
                                <div className="proj-impact-badge">
                                    <ArrowUpRight size={13} strokeWidth={2.5} />
                                    <span>{proj.impact}</span>
                                </div>

                                {/* Tech tags */}
                                <div className="proj-tech-tags">
                                    {proj.tech.map((t) => (
                                        <span key={t} className="proj-tech-tag">{t}</span>
                                    ))}
                                </div>

                                {/* Hover glow orb */}
                                <div className="proj-card-glow" />
                            </article>
                        );
                    })}
                </div>

                {/* ── Side / Other projects ─────────────────────────── */}
                <div className="proj-other-header">
                    <span className="proj-eyebrow proj-eyebrow--sm">Other things I&apos;ve built</span>
                </div>

                <div className="proj-side-grid">
                    {SIDE_PROJECTS.map((p) => {
                        const Icon = p.icon;
                        return (
                            <article key={p.id} className="proj-side-card">
                                <div className="proj-side-top">
                                    <div className="proj-side-icon">
                                        <Icon size={16} strokeWidth={2} />
                                    </div>
                                    {p.github && (
                                        <a
                                            href={p.github}
                                            className="proj-icon-link"
                                            aria-label="GitHub"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {/* <Github size={15} strokeWidth={2} /> */}
                                        </a>
                                    )}
                                </div>
                                <h4 className="proj-side-title">{p.title}</h4>
                                <p className="proj-side-desc">{p.desc}</p>
                                <div className="proj-tech-tags proj-tech-tags--sm">
                                    {p.tech.map((t) => (
                                        <span key={t} className="proj-tech-tag">{t}</span>
                                    ))}
                                </div>
                            </article>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
