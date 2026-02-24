import React from 'react';

const Machinery = () => {
    const machines = [
        {
            id: 1,
            title: "Fingerless Corrugation",
            desc: "This machine produces high quality corrugated sheets efficiently and consistently."
        },
        {
            id: 2,
            title: "Sheet Cutting",
            desc: "Precision cutting for various box sizes and shapes is guaranteed."
        },
        {
            id: 3,
            title: "Sheet Pasting",
            desc: "High-quality adhesive application ensures durability and strength of boxes."
        },
        {
            id: 4,
            title: "Thin Blade Machine",
            desc: "This machine enhances the accuracy of corrugated sheet production."
        },
        {
            id: 5,
            title: "Color Printer",
            desc: "It enables vibrant printing on corrugated products with precision."
        },
        {
            id: 6,
            title: "Heavy Duty Stitching",
            desc: "Designed for robust stitching, ensuring long-lasting box integrity."
        }
    ];

    return (
        <section id="machinery" className="grid-section">
            <div className="grid-section-header">
                <span className="subtitle">Our Advanced Machinery</span>
                <h2>State-of-the-art Infrastructure</h2>
            </div>

            <div className="grid-container">
                {machines.map((machine) => (
                    <div key={machine.id} className="grid-card">
                        <h3 className="grid-card-title">{machine.title}</h3>
                        <p>{machine.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Machinery;
