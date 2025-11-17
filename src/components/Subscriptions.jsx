import "../css/Subscriptions.css";

import { FaSailboat, FaCrown, FaRocket } from "react-icons/fa6";

function Subscriptions() {
  const tiers = [
    { icon: <FaSailboat/>,
      label: "Free",
      price: "$0",
      hint: "Perfect for individuals and small teams getting started",
      tags: [
        "10,000 API calls monthly", 
        "Basic Analytics", 
        "Email Support", 
        "Basic Security & Encryption",
        "5 team members"
    ]
    },
    { icon: <FaCrown />,
      label: "Professional",
      price: "$99 / month",
      hint: "For growing businesses that need more power and features.",
      tags: [
        "100,000 API calls monthly", 
        "Advanced Analytics", 
        "Priority Support", 
        "Custom Integrations",
        "Advanced Security & Encryption",
        "10+ team members"
      ],
      banner: "Most Popular"
    },
    { icon: <FaRocket />,
      label: "Enterprise",
      price: "Custom",
      hint: "For larger organizations with custom requirements",
      tags: [
        "Unlimited API calls",
        "Custom analytics",
        "Dedicated support",
        "Custom Integrations",
        "White-label options",
        "Advanced Security & Encryption",
        "SLA guarantees"
      ]
    }
  ];

  return (
    <div className="container__subscriptions" id="subscriptions">
      <section className="hero__subscriptions">
        <header className="title__hero">
          <h3 className="subs__title">
                    Our Offers,
                <span className="accent">
                    Your Benefits
                </span>
          </h3>
          <p className="subs__subtitle">
            Flexible pricing that scales with your business. 
            Start free, upgrade when you need.
          </p>
        </header>
      </section>

      <section className="showcase__subscriptions">
        <div className="subscriptions-display">
          {tiers.map((tier, t) => (
            <article key={t} className={`subscription-card ${tier.banner ? "is-popular" : ""}`}>
              {tier.banner && <span className="banner" aria-label={tier.banner}>{tier.banner}</span>}

              <div className="card-icon-wrapper">
                 <span className="card-icon" aria-label="Card Icon" data-type={tier.icon}>{tier.icon}</span>
              </div>
             
              <small className="card-label">{tier.label}</small>
              <h2 className="card-price">{tier.price}</h2>
              <small className="card-hint">{tier.hint}</small>

              <button className="start-btn">Start Trial</button>

              <ul className="card-tags">
                {tier.tags.map((tag, i) => (
                  <li key={i} className="tag">{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <div className="divider"></div>
      <small className="hint">
        Have Questions? <span className="accent">Contact our sales team</span>
      </small>
    </div>
  );
}

export default Subscriptions;