import "../css/Contact.css";

// IMAGES
import userOne from "../images/userOne.jpg";
import userTwo from "../images/userTwo.jpg";
import userThree from "../images/userThree.jpg"
import userFour from "../images/userFour.jpg";

function Contact() {
    return (
        <section className="newsletter-section">
            <header className="newsletter-hero">
                <h3 id="newsletter-heading" className="newsletter-title">
                    Contact Us
                </h3>
                <p id="newsletter-subheading" className="newsletter-subtitle">
                    Reach out to our customer support team if you have any questions 
                    that aren't addressed in our FAQ section. We're always here to 
                    provide assistance if things go wrong.
                </p>
                 <div className="hero-user-blurb">
                    <div className="user-stack" aria-hidden="true">
                        <img src={userOne} alt="" className="user-img" />
                        <img src={userTwo} alt="" className="user-img" />
                        <img src={userThree} alt="" className="user-img" />
                        <img src={userFour} alt="" className="user-img" />
                    </div>
                    <p className="user-count">
                        20,000+ users supported
                    </p>
                </div>
            </header>
            <section className="nl-input-container">
                <label htmlFor="nl-email">Email
                <input
                    id="nl-email"
                    type="email"
                    placeholder="Enter your email"
                    required
                />
                </label>
                <label htmlFor="nl-fname">First Name
                <input
                    id="nl-fname"
                    type="name"
                    placeholder="Enter your first name"
                    required
                />
                </label>
                <label htmlFor="nl-lname">Last Name
                <input
                    id="nl-lname"
                    type="name"
                    placeholder="Enter your last name"
                    required
                />
                </label>
                 <label htmlFor="nl-lname">Question
                <textarea
                    id="nl-lname"
                    type="name"
                    placeholder="Enter your question"
                    required
                />
                </label>
                
                <a 
                    type="button"
                    href="#login"
                    className="nl-subscribe-btn"
                >
                    Subscribe 
                </a>
            </section>
        </section>
    );
}

export default Contact