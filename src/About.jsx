import { useEffect, useRef } from 'react';
import { Zap, Shield, Sparkles, Briefcase } from 'lucide-react';
import './About.css';

const skills = [
    { label: 'C++ / Systems Design', level: 92 },
    { label: 'Multithreading & Concurrency', level: 86 },
    { label: 'GDB/ Debugging', level: 87 },
    { label: 'Python/ Backend', level: 72 },
    { label: 'React / Frontend', level: 76 },
];

const values = [
    {
        icon: Zap,
        label: 'Performance',
        desc: 'Zero-compromise speed from kernel to UI.',
    },
    {
        icon: Shield,
        label: 'Reliability',
        desc: 'Systems engineered to stay up under real load.',
    },
    {
        icon: Sparkles,
        label: 'Clarity',
        desc: 'Clean code that the whole team can own and extend.',
    },
];

const timeline = [
    {
        role: 'Software Engineer — SDE-II',
        company: 'Jaguar Land Rover',
        period: '2023 – Present',
        outcome: 'Leading multithreaded C++ navigation systems for next-generation connected vehicles; driving performance and concurrency standards across the platform.',
    },
    {
        role: 'Software Engineer — SDE-I',
        company: 'Jaguar Land Rover',
        period: '2022 – 2023',
        outcome: 'Built real-time map data pipelines and front-end tooling across the connected car platform, improving data accuracy and delivery speed.',
    },
];

export default function About() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('about-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 }
        );

        const el = sectionRef.current;
        if (el) observer.observe(el);
        return () => { if (el) observer.unobserve(el); };
    }, []);

    return (
        <section className="about-section" ref={sectionRef}>
            <div className="about-grid">

                {/* ── Left column ──────────────────────────────── */}
                <div className="about-left">
                    <span className="about-eyebrow">&lt; About Me /&gt;</span>

                    <h2 className="about-headline">
                        I build systems that<br />
                        <span className="about-accent">don't buckle.</span>
                    </h2>

                    <p className="about-bio">
                        I'm a systems-focused engineer at Jaguar Land Rover, where I write
                        the low-level C++ that keeps modern connected vehicles fast,
                        concurrent, and resource-efficient — from multithreaded navigation
                        engines to custom memory management deep in the stack.
                    </p>
                    <p className="about-bio">
                        I care about the work that happens before the feature ships: the
                        architecture decision, the profiling session, the review that
                        catches the race condition. Good engineering is invisible — and
                        that's the point.
                    </p>

                    {/* Value pills */}
                    <div className="about-values">
                        {values.map(({ icon: Icon, label, desc }) => (
                            <div key={label} className="about-value-pill">
                                <div className="about-value-icon">
                                    <Icon size={14} strokeWidth={2.5} />
                                </div>
                                <div className="about-value-text">
                                    <span className="about-value-label">{label}</span>
                                    <span className="about-value-desc">{desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Right column ─────────────────────────────── */}
                <div className="about-right">

                    {/* Skills card */}
                    <div className="about-card">
                        <h3 className="about-card-title">Core Skills</h3>
                        <div className="skill-list">
                            {skills.map(({ label, level }) => (
                                <div key={label} className="skill-row">
                                    <div className="skill-meta">
                                        <span className="skill-label">{label}</span>
                                        <span className="skill-pct">{level}%</span>
                                    </div>
                                    <div className="skill-track">
                                        <div
                                            className="skill-fill"
                                            style={{ '--skill-level': `${level}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Work history card */}
                    <div className="about-card">
                        <h3 className="about-card-title">
                            <Briefcase size={15} strokeWidth={2} className="about-card-icon" />
                            Work History
                        </h3>
                        <ol className="timeline-list">
                            {timeline.map(({ role, company, period, outcome }, i) => (
                                <li key={i} className="timeline-item">
                                    <div className="timeline-dot" />
                                    <div className="timeline-content">
                                        <div className="timeline-header">
                                            <span className="timeline-role">{role}</span>
                                            <span className="timeline-period">{period}</span>
                                        </div>
                                        <span className="timeline-company">{company}</span>
                                        <p className="timeline-outcome">{outcome}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>

                </div>
            </div>
        </section>
    );
}
