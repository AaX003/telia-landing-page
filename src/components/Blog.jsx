import "../css/Blog.css";

import blogImgOne from "../images/blog-img.jpg";

function Blog() {
    const articles = [
        {
            img: blogImgOne,
            title: "How Telia Automates Deployments Better than CI/CD Alone",
            desc: "Breaks down how Telia’s AI layer sits on top of traditional pipelines to optimize, cache, and monitor deployments automatically.",
            date: "March 12th, 2025",
            stat: "Free"
        },
        {
            img: blogImgOne,
            title: "A Beginner's Guide to Backend Scaling",
            desc: "Explains concurrency, load balancing, and autoscaling in simple, friendly language, with examples of how Telia handles scaling logic.",
            date: "April 22nd, 2025",
            stat: "Free"
        },
        {
            img: blogImgOne,
            title: "Choosing the Right Database for Your App: PostgreSQL vs MongoDB",
            desc: "Compares major databases, performance considerations, and when Telia recommends one over another.",
            date: "June 11th, 2025",
            stat: "Free"
        },
        {
            img: blogImgOne,
            title: "How to Secure Your API in 2025 (Easily)",
            desc: "A friendly walkthrough of auth, encryption, rate-limits, and how Telia enforces best practices by default.",
            date: "June 18th, 2025",
            stat: "Premium"
        },
        {
            img: blogImgOne,
            title: "A Beginner's Guide to Backend Scaling",
            desc: "Explains concurrency, load balancing, and autoscaling in simple, friendly language, with examples of how Telia handles scaling logic.",
            date: "April 22nd, 2025",
            stat: "Premium"
        },
        {
            img: blogImgOne,
            title: "Choosing the Right Database for Your App: PostgreSQL vs MongoDB vs...Everything Else",
            desc: "Compares major databases, performance considerations, and when Telia recommends one over another.",
            date: "June 11th, 2025",
            stat: "Premium"
        }
    ]
    return (
        <section className="blog-section">
            <header className="hero__blog">
                <h3 id="blog-heading" className="title__blog">
                    Our Latest Articles
                </h3>
                <p id="blog-subheading" className="subtitle__blog">
                    Read through our blog collections created by our faculty about
                    updates or special updates regarding TeliaAI. Users must have
                    a paid subscription account to create or read premium articles. 
                </p>
            </header>
            <section className="articles-display">
                {articles.map((a, idx) => (
                    <article key={idx} className={`blog-card ${a.stat === "Premium" ? "is-premium" : "is-free"}`}>
                        <h3 className="blog-card-title">{a.title}</h3>
                         <small className="blog-card-date">{a.date}</small>
                        <p className="blog-card-desc">{a.desc}</p>
                        <button className="read-btn">Read More</button>
                    </article>
                ))}
            </section>
            <small className="hint-msg">
                You must enable a subscription plan to view the rest of these articles
                <a 
                    href="#subscriptions"
                    className="view-btn"
                >
                    Get Subscription 
                </a>
            </small>
        </section>
    );
}

export default Blog