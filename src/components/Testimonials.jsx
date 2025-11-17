import "../css/Testimonials.css";
import { useCallback, useState } from "react";

// ICONS + IMAGES
import { IoMdStar } from "react-icons/io";
import userOne from "../images/userOne.jpg";
import userTwo from "../images/userTwo.jpg";
import userThree from "../images/userThree.jpg"
import userFour from "../images/userFour.jpg";

function Testimonials() {

    const reviews = [
        { 
            rating: [<IoMdStar/>, <IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStar />],
            quote:
                "Telia is an amazing service that's streamlined all of my backend-predominant projects. I will forever be grateful for their services!",
            reviewer: "Makayla Jones"
        },
        {   
            rating: [<IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStar />],
            quote:
                "Working with TeliaAI has been incredibly encouraging and productive! Backend has always been something I struggled with and TeliaAI made it easy!",
            reviewer: "Steven Drew"
        },
        { 
           
            rating: [<IoMdStar />, <IoMdStar />, <IoMdStar/>, <IoMdStar />, <IoMdStar />],
            quote:
                "TeliaAI has strengthened the overall infrastructure of our projects due to its vast and secure database systems. I enjoy working with them a lot.",
            reviewer: "Melissa Parks"
        },
        {   
            
            rating: [<IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStar />],
            quote:
                "As a student, I will always be a fan of TeliaAI because it suggested structured backend layouts for my projects that actually work!",
            reviewer: "Dillon Brown"
        },
        { 
           
            rating: [<IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStar />],
            quote:
                "Even as a Senior Backend Developer, I find TeliaAI useful because it helps with maintaining a structured backend layout and scalability.",
            reviewer: "Stephanie Kloss"
        },
        {   
            
            rating: [<IoMdStar/>, <IoMdStar />, <IoMdStar/>, <IoMdStar />, <IoMdStar />],
            quote:
                "I'm not a fan of using AI-based solutions, but incorporating TeliaAI has definitely been an eyeopener for me! Their tools and docs are amazing!",
            reviewer: "Jordan Reed"
        },
    ];


    return (
        <div className="container__reviews" id="reviews">
        <section className="hero__reviews">
            <header className="title__hero">
            <h3 className="title__reviews">
                What Our 
                <span className="accent">
                Customers Have to Say
                </span>
            </h3>
            <p className="subtitle__reviews">
                See what our customers have to say about working with us
            </p>
            </header>
        </section>

        <section className="showcase__reviews">
            <div
            className="reviews-display"
            role="region"
            aria-label="Customer reviews"
            aria-live="polite"
            >
            <div className="review-card-display">
                {reviews.map((review, idx) => (
                    <article 
                        key={idx} 
                        className="review-card"
                    >
                    <span className="review-rating" aria-label="Review Rating">
                    {review.rating}
                    </span>
                    <h4 className="review-quote">“{review.quote}”</h4>
                    <div className="review-divider" aria-hidden="true" />
                    <small className="review-author">{review.reviewer}</small>
                    <small className="review-locale">{review.locale}</small>
                </article>
                ))}
            </div>
             <div className="hero-user-blurb__testimonials">
                <div className="user-stack" aria-hidden="true">
                    <img src={userOne} alt="" className="user-img" />
                    <img src={userTwo} alt="" className="user-img" />
                    <img src={userThree} alt="" className="user-img" />
                    <img src={userFour} alt="" className="user-img" />
                </div>
                    <p className="user-count">
                        <a 
                            href="#!"
                            className="link"
                        >
                            View More
                        </a>
                    </p>
                </div>
            </div>
        </section>
        </div>
    );
}

export default Testimonials;