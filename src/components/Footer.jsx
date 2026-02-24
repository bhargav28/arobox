import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo">AroBox.</div>
            <p>&copy; {new Date().getFullYear()} AroBox Packing. All rights reserved.</p>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
                <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a>
            </div>
        </footer>
    );
};

export default Footer;
