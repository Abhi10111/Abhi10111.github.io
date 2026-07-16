import { ArrowRight, Download } from 'lucide-react';
import './Intro.css';

export default function Intro() {
    return (
        <div className="intro-container">


            {/* Role label */}
            <p className="role-label">&lt;&lt; Systems &amp; Software Engineer &gt;&gt;</p>

            {/* Name */}
            <h1 className="name">
                Abhishek<br />
                <span className="name-accent">Aggarwal</span>
            </h1>

            {/* Description */}
            <p className="desc">
                C++ Engineer specialized in building low-latency, high-throughput
                systems that scale seamlessly under heavy real-time workloads.
            </p>

            {/* CTA buttons */}
            <div className="cta-row">
                <a href="#" className="btn-primary">
                    View Projects <ArrowRight size={16} />
                </a>
                <a href="#" className="btn-outline">
                    Download CV <Download size={16} />
                </a>
            </div>

            {/* Stats */}
            <div className="stats-row">
                <div className="stat-item">
                    <span className="stat-number">3+</span>
                    <span className="stat-label">Years Coding</span>
                </div>
                <div className="stat-divider" />
                <div className="stat-item">
                    <span className="stat-number">SDE-II</span>
                    <span className="stat-label">Current Level</span>
                </div>
                <div className="stat-divider" />
                <div className="stat-item">
                    <span className="stat-number">C++</span>
                    <span className="stat-label">Primary Stack</span>
                </div>
            </div>

        </div>
    );
}