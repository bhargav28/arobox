import React from 'react';
import aboutImage from '../assets/product_custom_boxes_1771866788260.png';

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="about-content">
                <span className="subtitle">About Us</span>
                <h2 className="about-title">Committed to crafting exceptional corrugated boxes.</h2>
                <p>Delivering excellence in every box with our reliable services for diverse industries.</p>

                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">🏅</div>
                        <h3 className="feature-title">High Quality</h3>
                        <p>Manufacturing high-quality boxes. Premium materials ensure maximum durability.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🎨</div>
                        <h3 className="feature-title">Customization</h3>
                        <p>Plain and printed options available. Custom sizes tailored to your specific needs.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🌿</div>
                        <h3 className="feature-title">Eco-Friendly</h3>
                        <p>Eco-friendly materials used, sourced responsibly for all our production processes.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🚚</div>
                        <h3 className="feature-title">Reliable Delivery</h3>
                        <p>Reliable production processes and on-time delivery keeps your operations running smoothly.</p>
                    </div>
                </div>
            </div>
            <div className="about-image">
                <img src={aboutImage} alt="Warehouse Operations" />
                <div className="about-badge">
                    <span className="badge-num">100%</span>
                    <span className="badge-text">Reliable Quality</span>
                </div>
            </div>
        </section>
    );
};

export default About;
