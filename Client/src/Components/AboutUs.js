import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us">
            <h1>About Us</h1>

            <section className="about-section">
                <h2>Our Mission</h2>
                <p>
                    At AccessZone, we are dedicated to providing high-quality mobile accessories
                    that enhance and protect your devices. Our mission is to deliver innovative solutions
                    that help customers get the most out of their technology while expressing their personal style.
                </p>
            </section>

            <section className="about-section">
                <h2>Who We Are</h2>
                <p>
                    Founded in 2024, our team consists of passionate experts in mobile technology and design.
                    From screen protectors to custom cases, we focus on quality, durability, and style in each
                    of our products. We believe that mobile accessories are more than just add-ons—they’re an extension of you.
                </p>
            </section>

            <section className="about-section">
                <h2>Our Values</h2>
                <ul>
                    <li><strong>Quality:</strong> We provide products that stand the test of time.</li>
                    <li><strong>Innovation:</strong> We keep up with the latest trends and technologies.</li>
                    <li><strong>Customer Satisfaction:</strong> We prioritize excellent customer service and support.</li>
                    <li><strong>Sustainability:</strong> We strive to use eco-friendly materials wherever possible.</li>
                </ul>
            </section>

            <section className="about-section">
                <h2>Our Team</h2>
                <p>
                    Our team is made up of experts in tech, design, and customer service, all dedicated to
                    ensuring that you have the best experience possible with our products. We love what we
                    do, and we are constantly working to improve and expand our offerings.
                </p>
            </section>
        </div>
    );
};

export default AboutUs;