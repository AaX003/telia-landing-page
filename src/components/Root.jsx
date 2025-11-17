import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Subscriptions from "./Subscriptions";
import Contact from "./Contact";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Integrations from "./Integrations";
import HowTo from "./HowTo";
import FAQ from "./FAQ";
import Changelog from "./Changelog";
import Blog from "./Blog";

function Root() {
    return (
        <div className="main-content">
            <Navbar />
            <section id="hero">
                <Hero />
            </section>
            <section id="integrations">
                <Integrations />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="subscriptions">
                <Subscriptions />
            </section>
            <section id="reviews">
                <Testimonials />
            </section>
            <section id="changelog">
                <Changelog />
            </section>
            <section id="blog">
                <Blog />
            </section>
            <section id="contact">
                <Contact />
            </section>
            <section id="faq">
                <FAQ />
            </section>
            <Footer />
        </div>
    );
}

export default Root