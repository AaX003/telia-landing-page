import "../css/Certs.css";

// IMAGE
import google from "../images/google.png";
import microsoft from "../images/microsoft.png";
import youtube from "../images/youtube.png";
import reddit from "../images/reddit.png";
import discord from "../images/discord.png";
import coursera from "../images/coursera.png";


function Certs() {
    const certs = [
        {
            img: google
        },
        {
            img: microsoft
        },
        {
            img: youtube
        },
        {
            img: reddit
        },
        {
            img: discord
        },
        {
            img: coursera
        }
    ];

    return (
        <section className="certs-section">
            <h4 className="certs-title">
                Trusted by lending brands, including
            </h4>
            <section className="certs-display-container">
                <div className="certs-display-grid" role="list">
                    {certs.map((c, idx) => (
                        <article key={idx} className="cert-card" role="listitem">
                            <span className="cert-card-image-wrapper">
                                <img src={c.img} alt="Certification Logo" className="cert-img"/>
                            </span>
                        </article>
                    ))}
                </div>
            </section>
        
        </section>
    );
}

export default Certs