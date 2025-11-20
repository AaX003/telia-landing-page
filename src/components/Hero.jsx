import { Link } from "react-router";
import "../css/Hero.css";
import Certs from "./Certs";

// IMAGES
import userOne from "../images/userOne.jpg";
import userTwo from "../images/userTwo.jpg";
import userThree from "../images/userThree.jpg"
import userFour from "../images/userFour.jpg";

function Hero() {

    return (
        <section className="hero-section">
           <div className="blob"></div>
            <header className="hero">
                <div className="hero-user-blurb">
                <div className="user-stack" aria-hidden="true">
                    <img src={userOne} alt="" className="user-img" />
                    <img src={userTwo} alt="" className="user-img" />
                    <img src={userThree} alt="" className="user-img" />
                    <img src={userFour} alt="" className="user-img" />
                </div>
                <p className="user-count">
                    20,000+ users
                </p>
                </div>
                <h3 id="hero-heading" className="hero-title">
                    <span>Automate{" "}</span>
                    <span>Your{" "}</span>
                    <span>Backend,</span> 

                    < br/>
                    <span className="highlight">Strengthen{" "}</span>
                    <span>Your{" "}</span>
                    <span>Business</span>
                </h3>
                <p id="hero-subheading" className="hero-subtitle">
                    Telia provides developers with AI-powered backend 
                    tools that deploy, monitor, optimize, and streamline 
                    your systems behind-the-scenes. 
                </p>
            </header>
             <div className="cta-container">
                <Link to="/register" className="get-started-btn">Get Started</Link>
                <a
                    href="#!"
                    className="demo-btn"
                    aria-label="Watch a demo of Telia"
                >
                    Watch Demo
                </a>
                
            </div>
            
        <ul className="stats__hero">
          <li className="stat__hero">
            <span className="value__hero">98%</span>
            <span className="text__hero">Customer Satisfaction</span>
          </li>
           <li className="stat__hero">
            <span className="value__hero">2.3x</span>
            <span className="text__hero">Faster Development Cycles</span>
          </li>
          <li className="stat__hero">
            <span className="value__hero">4.2M+</span>
            <span className="text__hero">API Requests Processed</span>
          </li>
          <li className="stat__hero">
            <span className="value__hero">99.8%</span>
            <span className="text__hero">Browser Uptime</span>
          </li>
        </ul>

        <section className="certs-container">
            <Certs />
        </section>
        
        </section>
    );
}

export default Hero