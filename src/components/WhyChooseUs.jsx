import React from 'react';

const WhyChooseUs = () => {
    return (
        <section id="whyus" className="split-section bg-sage">
            <div className="split-content">
                <h1 style={{ fontSize: '4.5rem', color: '#314035' }}>Why Choose Us</h1>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '2rem', color: '#314035' }}>
                    Delivering excellence in every box with our reliable services
                </p>

                <ul style={{ color: '#314035' }}>
                    <li><strong>High Quality</strong> materials ensure durability</li>
                    <li><strong>On-Time Delivery</strong> keeps your operations running smoothly</li>
                    <li><strong>Customization Options</strong> tailored to your specific needs</li>
                </ul>
            </div>
            <div className="split-image">
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop" alt="Warehouse Operations" />
            </div>
        </section>
    );
};

export default WhyChooseUs;
