import "../css/FAQ.css";

import { motion } from "framer-motion";

function FAQ() {
  return (
    <section className="faq-section" aria-labelledby="faq-heading">
      <header className="faq-hero">
        <motion.div
            initial={{ opacity: 0, y: 30}}
            whileInView={{ opacity: 1, y: 0}}
            transition={{ duration: 0.6, ease: "easeOut"}}
            viewport={{ once: true }}
        >
        <h2 id="faq-heading" className="faq-title">
            Have a Question? 
        </h2>
        <p id="faq-subheading" className="faq-subtitle">
            Find all the answers to TeliaAI's most 
            frequently asked questions.
        </p>
        </motion.div>
      </header>

      <div className="accordion-container">
        <details className="accordion-list">
          <summary className="accordion-header">
            What languages does TeliaAI support?
          </summary>
          <p className="accordion-info">
            TeliaAI supports a variety of programming languages,
            ranging from Python to Java to TypeScript. We will continue to ensure
            our tech is updated with modern technologies. 
          </p>
        </details>

        <details className="accordion-list">
          <summary className="accordion-header">
            Is my data encrypted?
          </summary>
          <p className="accordion-info">
           Yes! TeliaAI understands the importance in implementing secure data 
           practices regarding users. If you assume an issue with your data or believe something
           to have been hijacked, please don't hesitate in contacting our administrative team.
          </p>
        </details>

        <details className="accordion-list">
          <summary className="accordion-header">
                How do I migrate from my current backend?
            </summary>
          <p className="accordion-info">
             Migration typically happens in just three steps: <br />
             1. Connect your existing repo and environments to TeliaAI. 
             <br />
             2. Point TeliaAI at your current database and services (or clone into a new environment).
             <br />
             3. Run a test deployment in a staging environment, then switch your traffic once everything 
             looks good.
             <br />
             <br />
             Most teams start by mirroring their current setup in TeliaAI first, so there's no 
             downtime while you transition. 
            
             Need assistance? Contact our <a href="#contact" className="accent">Support</a>{" "}Team
          </p>
        </details>

        <details className="accordion-list">
          <summary className="accordion-header">
                Is there a free trial?
            </summary>
            <p className="accordion-info">
                Yes, TeliaAI offers a free trial for users. Once subscribed to the trial, 
                users are given a range of amenities exclusive to that trial. If users are looking 
                for better and more advanced benefits, we have higher plans available.
            </p>
            
        </details>

        <details className="accordion-list">
          <summary className="accordion-header">
            Does TeliaAI support CI/CD?
          </summary>
          <p className="accordion-info">
            Yes! TeliaAI is designed to sit on top or alongside your existing CI/CD pipeline. Plug it 
            into providers like GitLab CI, GitHub Actions, or other similar tools to handle deployments,
            scaling, and monitoring once builds pass. If you don't have a CI/CD setup yet, TeliaAI can act 
            as foundation layer on its own--connect your repo, define your environment variables, and get started!
          </p>
        </details>
      </div>
        <p className="tooltip-msg__faq">
          Still have questions? Feel free to reach out to our support team.
          We're always here to help when available.
          Contact <a href="#contact" className="accent">Support</a>{" "}Team
        </p>
    </section>
  );
}

export default FAQ;
