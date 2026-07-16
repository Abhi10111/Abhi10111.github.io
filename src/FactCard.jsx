import { Terminal, Code2, Target, GraduationCap } from 'lucide-react';
import './FactCard.css';

const facts = [
    {
        icon: Terminal,
        label: 'Currently',
        badge: 'SDE-II @ Jaguar Land Rover',
    },
    {
        icon: Code2,
        label: 'Tech Stack',
        tags: ['C++', 'GDB', 'Assembly', 'Python', 'React'],
    },
    {
        icon: Target,
        label: 'Focus Areas',
        tags: ['Multithreading', 'Optimisation', 'Scalability'],
    },
    {
        icon: GraduationCap,
        label: 'Education',
        value: 'Bachelors of Technology, IIT Delhi',
    },
];

export default function FactCard() {
    return (
        <div className="fact-card">

            {/* Card header */}
            <div className="fact-card-header">
                <h2 className="fact-card-title">Quick Intro</h2>
            </div>

            {/* Divider */}
            <div className="fact-card-divider" />

            {/* Facts list */}
            <ul className="fact-list">
                {facts.map(({ icon: Icon, label, value, tags, badge }, i) => (
                    <li key={i} className="fact-item">
                        <div className="fact-icon-wrap">
                            <Icon size={16} strokeWidth={2} />
                        </div>
                        <div className="fact-content">
                            <span className="fact-label">{label}</span>
                            {badge && (
                                <div className="status-badge">
                                    <span className="status-dot" />
                                    {badge}
                                </div>
                            )}
                            {value && <p className="fact-value">{value}</p>}
                            {tags && (
                                <div className="fact-tags">
                                    {tags.map(t => (
                                        <span key={t} className="fact-tag">{t}</span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ul>

        </div>
    );
}