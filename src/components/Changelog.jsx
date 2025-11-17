import "../css/Changelog.css";
import { useState } from "react";

function Changelog() {

    const [index, setIndex] = useState(0);
    const [showUpdates, setShowUpdates] = useState(false);

    const updates = [

        {
            title: "v1.0.7 - Enhanced Error Intelligence",
            desc: "TeliaAI's new Error Intelligence module now clusts recurring backend failures, surfaces root-cause suggestions, and highlights problematic commits automatically.",
            date: "Feb 12th, 2025"
        },
        {
            title: "v1.0.6 - Deployment Speed Optimized",
            desc: "Telia now caches dependency layers for Node, Python, and Go builds, reducing deployment time by up to 35% on repeated pushes.",
            date: "Feb 12th, 2025"
        },
        {
            title: "v1.0.5 - New Dashboard UI Refresh",
            desc: "A sleeker, faster UI with improved contrast, tighter spacing, and enhanced accessibility controls. Addressed bug fixes where dark mode refused to stay enabled.",
            date: "Feb 3rd, 2025"
        },
        {   
            title: "v1.0.4 - PostgreSQL Connection Stability Update",
            desc: "Improved retry logic, reduced connection drops by 60%, and added clearer error messages for better comprehension.",
            date: "Jan 25th, 2025"
        },
        {
            title: "v1.0.3 - Python 3.13 Compatibility Added",
            desc: "Support for the latest Python release, plus auto-detection of outdated syntaxes with suggestions for quick fixes.",
            date: "Jan 12th, 2025"
        },
        {
            title: "v1.0.2 - Webhooks Rebuilt for Speed",
            desc: "Webhook processing is now async-first, delivering responses significantly faster under heavy load.",
            date: "Jan 3rd, 2025"
        },
        {
            title: "v1.0.1 - Bug Fixes & Minor Improvements",
            desc: "Patched authentication flickers, smoothed out the onboarding flow, and fixed a typo that resided in the dashboard footer.",
            date: "Dec 27th, 2024"
        },
        {
            title: "v1.0.0 - Telia Launch 🚀",
            desc: "Official release of TeliaAI with repo syncing, automated deployments, built-in monitoring, service scaling, and more",
            date: "Dec 20th, 2024",
        }
    ];

    const total = updates.length;
    const { title, desc, date } = updates[index];
    
    return (
        <section className="changelog-section">
            <header className="changelog-hero">
                <h3 id="changelog-heading" className="changelog-title">
                    Discover What's <span className="accent">New</span>
                </h3>
                <p id="changelog-subheading" className="changelog-subtitle">
                    View TeliaAI's newest updates, tips, and tricks by viewing the changelog below.
                </p>
            </header>
            {/* TODO */}
            <button className="view-btn" onClick={showUpdates === false ? () => setShowUpdates(true) : () => setIndex((i) => (i + 1) % total)}>
                { 
               showUpdates === false ? "View Changelog" : "Next Update"
                }
            </button>
            
            {showUpdates === true && (
                <section className="changelog-card-display">
                    <article className="update-card">
                        <h4 className="update-card-title">{title}</h4>
                        <p className="update-card-desc">{desc}</p>
                        <small className="update-card-date">{date}</small>
                    </article>
                   
                </section>
            )}
        </section>
    );
}

export default Changelog