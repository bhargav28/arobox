import React from 'react';

const Products = () => {
    const products = [
        {
            id: 1,
            title: "Corrugated Box",
            desc: "Durable 3/5/7 ply options for all packaging needs."
        },
        {
            id: 2,
            title: "Printed Box",
            desc: "Custom printed boxes enhance branding and visibility."
        },
        {
            id: 3,
            title: "Corrugation Roll",
            desc: "High-quality corrugation rolls for reliable performance."
        },
        {
            id: 4,
            title: "Sheets",
            desc: "Versatile sheets for various packaging applications."
        },
        {
            id: 5,
            title: "Customization",
            desc: "Tailored solutions to meet specific customer requirements."
        },
        {
            id: 6,
            title: "Quality Assurance",
            desc: "Our products undergo stringent quality checks for perfection."
        }
    ];

    const renderDesc = (text) => {
        return text.split(' ').map((word, i) => {
            if (['3/5/7', 'ply', 'printed', 'boxes', 'corrugation', 'rolls', 'sheets', 'specific', 'customer', 'requirements.', 'quality', 'checks'].includes(word.toLowerCase().replace('.', ''))) {
                return <strong key={i} style={{ color: 'var(--primary)' }}>{word} </strong>;
            }
            return word + ' ';
        });
    };

    return (
        <section id="products" className="grid-section">
            <div className="grid-section-header">
                <span className="subtitle">Our Product Range</span>
                <h2 style={{ color: 'var(--primary)' }}>Solutions For Every Packaging Need</h2>
            </div>

            <div className="grid-container">
                {products.map((product) => (
                    <div key={product.id} className="grid-card">
                        <h3 className="grid-card-title">{product.title}</h3>
                        <p>{renderDesc(product.desc)}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Products;
