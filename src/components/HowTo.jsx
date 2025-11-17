import "../css/HowTo.css";
import { useState } from "react";
import { motion } from "framer-motion";

function HowTo() {
  const [index, setIndex] = useState(0);

  const steps = [
  {
    name: "1",
    title: "Connect your repo",
    desc: "Link your GitHub, GitLab, or Bitbucket repo and have Telia auto-detect your setup in seconds.",
  },
  {
    name: "2",
    title: "Configure your backend rules",
    desc: "Set up deployment rules, environment variables, scaling options, and security policies all in one, unified panel.",
  },
  {
    name: "3",
    title: "Deploy and monitor instantly",
    desc: "Push your changes and let TeliaAI deploy, optimize, and monitor your backend automatically with no manual work required.",
  },
];


    return (
        <section className="howto-section">
            <header className="howto-hero">
              <motion.div
                    initial={{ opacity: 0, y: 30}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.6, ease: "easeOut"}}
                    viewport={{ once: true }}
                >
                  <div className="breadcrumb">
                    Process ❖
                  </div>
                <h3 id="howto-heading" className="howto-title">
                    How It Works
                </h3>
                <p id="howto-subheading" className="howto-subtitle">
                    A brief step-by-step process of how Telia performs
                </p>
                </motion.div>
            </header>

            <motion.div
                initial={{ opacity: 0, y: 30}}
                whileInView={{ opacity: 1, y: 0}}
                transition={{ duration: 0.6, ease: "easeOut"}}
                viewport={{ once: true }}
            >

            {/* Step cards */}
            <div className="steps-display">
                {steps.map((s, i) => (
                    <div 
                      key={i} 
                      className={`step-card ${index === i ? "is-active" : "not-active"}`}
                      onClick={() => setIndex(i)}
                    >
                        <span className="step-card-number-badge" aria-label={`Step ${s.name}`}>
                            {s.name}
                        </span>
                        <h3 className="step-card-title">{s.title}</h3>
                        <small className="step-card-desc">{s.desc}</small>
                    </div>
                ))}
            </div>
            </motion.div>
            
        </section>
    );
}

export default HowTo;