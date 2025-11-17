import "../css/Integrations.css";
import { useState } from "react";
import { motion } from "framer-motion";

// IMAGES
import postgresql from "../images/postgresql.png";
import mongodb from "../images/mongodb.png";
import docker from "../images/docker.png";
import aws from "../images/aws.png";
import azure from "../images/azure.png";
import gcp from "../images/gcp.png";

import go from "../images/go.png";
import python from "../images/python.png";
import php from "../images/php.png";
import js from "../images/js.png";
import ts from "../images/typescript.png";
import java from "../images/java.png";

function Integrations() {
    const [index, setIndex] = useState(0);

    const attr = [
        {
            id: 1,
            name: "Integrations",
            items: [
                {
                    img: postgresql,
                    name: "PostgreSQL"
                },
                {
                    img: mongodb,
                    name: "MongoDB"
                },
                {
                    img: docker,
                    name: "Docker"
                },
                {
                    img: aws,
                    name: "AWS"
                },
                {
                    img: azure,
                    name: "Azure"
                },
                {
                    img: gcp,
                    name: "GCP"
                }
            ],  
        },
        {
            id: 2,
            name: "Languages",
            items: [
                {
                    img: go,
                    name: "Golang"
                },
                {   
                    img: python,
                    name: "Python"
                },
                {   
                    img: php,
                    name: "PHP"
                },
                {   
                    img: js,
                    name: "JavaScript"
                },
                {   
                    img: ts,
                    name: "TypeScript"
                },
                {   
                    img: java,
                    name: "Java"
                }
            ]
        }
    ];


    return (
        <section className="integrations-section">
            <section className="hero__integrations">
                <header className="title__hero">
                    <h3 className="title__integrations">
                        Supported Languages & Integrations
                    </h3>
                    <p className="subtitle__integrations">
                        Telia can integrate with a wide
                        set of tools to make your backend
                        responsibilities both seamless and smooth.
                    </p>
                </header>
            </section>
            <div className="button-indicators">
                    {attr.map((a, i) => (
                        <button
                            key={a.id}
                            role="tab"
                            aria-selected={index === i}
                            aria-label={`Go to ${a.name}`}
                            className={`button-tab ${index === i ? "is-active" : "inactive"}`}
                            onClick={() => setIndex(i)}
                        >
                            {a.name}
                        </button>
                    ))}
                </div>
            <section className="attr-display-container">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 5}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.6, ease: "easeOut"}}
                    viewport={{ once: true }}
                >
                    {index === 0 ? (
                    <div className="integrations-display-grid" role="list">
                    {attr[index].items.map((a) => (
                        <article key={a.id} className="integration-card" role="listitem">
                            <span className="integrations-card-image-wrapper">
                                <img src={a.img} alt={`${a.name} Logo`} className="logo-img"/>
                            </span>
                            <h4 className="integrations-card-title">{a.name}</h4>
                        </article>
                    ))}
                </div>
                ) : (
                <div className="languages-display-grid" role="list">
                    {attr[index].items.map((l) => (
                        <article key={l.id} className="languages-card" role="listitem">
                            <span className="languages-card-image-wrapper">
                                <img src={l.img} alt={`${l.name} Logo`} className="logo-img"/>
                            </span>
                            <h4 className="languages-card-title">{l.name}</h4>
                        </article>
                    ))}
                </div> 
                )}     
                </motion.div>
                
            </section>
        </section>
    );
}

export default Integrations