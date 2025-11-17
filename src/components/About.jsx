import "../css/About.css";

// ICONS
import { BiShield } from "react-icons/bi";
import { BiRocket } from "react-icons/bi";
import { BiArrowBack } from "react-icons/bi";
import { LuPackageCheck } from "react-icons/lu";
import { BsDatabase } from "react-icons/bs";

function About() {
  const cards = [
  {
    icon: <BiShield />,
    title: "Slow Deployments?",
    desc: "Telia automates your entire deployment pipeline—go from commit to production in minutes, not hours."
  },
  {
    icon: <BiArrowBack />,
    title: "Complex Pipelines?",
    desc: "Skip the messy configs. Telia auto-generates and maintains backend pipelines tailored to your stack."
  },
  {
    icon: <BiRocket />,
    title: "Long Debugging Hours?",
    desc: "Telia detects issues, traces logs, and suggests fixes instantly so you spend less time hunting bugs."
  },
  {
    icon: <LuPackageCheck />,
    title: "Broken Scalability?",
    desc: "Auto-scaling, load balancing, and infra optimization—Telia keeps your backend stable even under pressure."
  },
  {
    icon: <BsDatabase />,
    title: "Insecure Data Practices?",
    desc: "Real-time security scanning, encryption, and automated compliance checks keep your data airtight."
  }
];

  
  return (
    <section className="about-section">
      <div className="patterned-bg"></div>
      <section className="hero__about">
        <main className="hero">
          <header className="title__hero">
            <h3 className="title__about">
                Backend <span className="highlight">Bottlenecks</span>,{" "}
                <span className="accent">
                   Powerful Resolutions
                </span>
            </h3>
            <p className="subtitle__about">
              Telia offers a wide range of backend
              capabilities that will instantly resolve
              your backend issues.
            </p>
          </header>
        </main>
      </section>
      <section className="showcase__about">
        <div className="about-display">
          {cards.map((card, idx) => (
            <div key={idx} className="about-card">
              <span className="about-icon">{card.icon}</span>
              <h4 className="about-card-title">{card.title}</h4>
              <p className="about-card-desc">{card.desc}</p>
            </div>
          ))}
        </div>
        <ul className="stats__about">
          <li className="stat__about">
            <span className="value__about">37%</span>
            <span className="text__about">Lower Infrastructure Costs</span>
          </li>
           <li className="stat__about">
            <span className="value__about">60%</span>
            <span className="text__about">Backend Load Reduction</span>
          </li>
          <li className="stat__about">
            <span className="value__about">&lt;50ms</span>
            <span className="text__about">Response Time</span>
          </li>
          <li className="stat__about">
            <span className="value__about">150+</span>
            <span className="text__about">Countries</span>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default About;
