import React from 'react';
import heroImage from '../assets/hero_corrugated_boxes_1771866495782.png';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content animate">
                <span className="subtitle">AroBox Packaging</span>
                <h1 className="hero-title">Premium Quality Boxes<br /><span>For Every Need.</span></h1>
                <p className="hero-text">Presented by AroBox Packaging Team. We manufacture high-strength, sustainable corrugated boxes tailored for your e-commerce, retail, and logistical needs.</p>
                <div className="hero-actions">
                    <a href="#products" className="btn">Our Products</a>
                    <a href="#about" className="btn btn-secondary">About Us</a>
                </div>
            </div>
            <div className="hero-image-wrapper">
                <img src={heroImage} alt="Premium Stacked Boxes" className="hero-image" />
            </div>
        </section>
    );
};

export default Hero;
