import { useState } from "react";
import { MdMenu } from "react-icons/md";

import "../css/Nav.css";

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="container__nav">
            <nav className="navbar">
               
                <div className="nav-links">
                    <span className="logo">
                        Telia<span className="accent">AI</span>
                    </span>
                    <a href="#about">Features</a>
                    <a href="#subscriptions">Pricing</a>
                    <a href="#reviews">Testimonials</a>
                    <a href="#newsletter">Newsletter</a>
                </div>
                
                <div className="menu-btn-wrapper">
                    <button 
                        id="menu-btn"
                        className="hamburger-menu-btn"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-expanded={!menuOpen}
                        aria-controls="supple-links"
                        aria-label="Toggle Menu"
                    >
                        <MdMenu />
                    </button>
                </div>

                <div 
                    id="supple-links"
                    className={`supple-links ${menuOpen ? "is-open" : ""}`}
                >
                    <span className="logo">
                        TeliaAI
                    </span>
                    <a href="#about">Features</a>
                    <a href="#subscriptions">Pricing</a>
                    <a href="#reviews">Testimonials</a>
                    <a href="#newsletter">Newsletter</a>
                </div>
            </nav>
        </div>
    )
}

export default Nav