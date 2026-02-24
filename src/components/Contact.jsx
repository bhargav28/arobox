import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        emailjs.sendForm('service_bl1bwrd', 'template_9d2zb9m', form.current, 'm2oHJbp-DQx32fRSg')
            .then((result) => {
                setSubmitMessage('Thank you! Your message has been sent successfully.');
                setIsSubmitting(false);
                form.current.reset(); // clear form
            }, (error) => {
                console.error("EmailJS Error:", error.text || error);
                setSubmitMessage('Oops! Something went wrong. Please try again later.');
                setIsSubmitting(false);
            });
    };

    return (
        <section id="contact" className="section contact">
            <div className="contact-container">
                <div className="contact-info">
                    <span className="subtitle contact-subtitle">Get in Touch</span>
                    <h2>Ready to upgrade your packaging?</h2>
                    <p style={{ marginTop: '20px' }}>Contact our team of experts today. Whether you need a standard order or a completely custom solution, we're here to help.</p>

                    <div className="contact-details">
                        <div className="contact-item">
                            <div>
                                <h4>📍 Address</h4>
                                <p>Por, Vadodara, Gujarat, India</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div>
                                <h4>📞 Phone</h4>
                                <p>+91 9662660656</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div>
                                <h4>📧 Email</h4>
                                <p>aroboxpackaging@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form">
                    <form ref={form} onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" name="user_name" className="form-input" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" name="user_email" className="form-input" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <input type="text" name="user_company" className="form-input" placeholder="Company" />
                        </div>
                        <div className="form-group">
                            <textarea name="message" className="form-input" placeholder="How can we help you? (e.g., Box dimensions, quantity, type)" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-secondary" style={{ width: '100%' }} disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                        </button>
                        {submitMessage && (
                            <p style={{ marginTop: '1rem', color: submitMessage.includes('Oops') ? '#ff6b6b' : '#dcd0a6', textAlign: 'center' }}>
                                {submitMessage}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
