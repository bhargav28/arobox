import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="logo">
                <span>AroBox.</span>
            </div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#machinery">Machinery</a></li>
            </ul>
            <a href="#contact" className="btn" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>Contact Us</a>
        </nav>
    );
};

export default Navbar;
