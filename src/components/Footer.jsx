import '../css/Footer.css';

import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="container__footer" aria-label="Site footer">
      <section className="footer-hero">
        <div className="logo">
            Telia<span className="accent">AI</span>
        </div>
        <div className="hero__footer">
          <ul className="social-links" aria-label="Social media">
            <li className="social-tag">
              <a href="#!" aria-label="Instagram"><FaInstagram /></a>
            </li>
            <li className="social-tag">
              <a href="#!" aria-label="Facebook"><FaFacebook /></a>
            </li>
            <li className="social-tag">
              <a href="#!" aria-label="X (formerly Twitter)"><FaTwitter /></a>
            </li>
            <li className="social-tag">
              <a href="#!" aria-label="LinkedIn"><FaLinkedin /></a>
            </li>
          </ul>
        </div>

        <div className="footer-content">
          <nav className="main-content" aria-label="Footer navigation">
            <ul className="product-links">
              <li className="nav-links-title"><h3 className="nav-link-title">Products</h3></li>
              <li className="nav-link"><a href="#!">Features</a></li>
              <li className="nav-link"><a href="#!">Integrations</a></li>
              <li className="nav-link"><a href="#!">Pricing</a></li>
              <li className="nav-link"><a href="#!">API Docs</a></li>
              <li className="nav-link"><a href="#!">Changelog</a></li>
              <li className="nav-link"><a href="#!">Roadmap</a></li>
            </ul>

            <ul className="company-links">
              <li className="nav-links-title"><h3 className="nav-link-title">Company</h3></li>
              <li className="nav-link"><a href="#!">About Us</a></li>
              <li className="nav-link"><a href="#!">Careers</a></li>
              <li className="nav-link"><a href="#!">Contact</a></li>
              <li className="nav-link"><a href="#!">Partners</a></li>
              <li className="nav-link"><a href="#!">Blog</a></li>
            </ul>

             <ul className="resources-links">
              <li className="nav-links-title"><h3 className="nav-link-title">Resources</h3></li>
              <li className="nav-link"><a href="#!">Documentation</a></li>
              <li className="nav-link"><a href="#!">Tutorials</a></li>
              <li className="nav-link"><a href="#!">Community</a></li>
              <li className="nav-link"><a href="#!">Support</a></li>
              <li className="nav-link"><a href="#!">Status</a></li>
              <li className="nav-link"><a href="#!">Security</a></li>
            </ul>
          </nav>
          <div className="footer-divider" aria-hidden="true" />
          <div className="add-content">
            <small className="tos">
               Privacy Policy &bull; Terms of Service &bull; Cookie Policy
            </small> 
            <br />
            <small className="rights-reserved-msg">© 2025 TeliaAI. All rights reserved.</small>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;