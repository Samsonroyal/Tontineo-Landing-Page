import React, { useState } from 'react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = () => {
        // Perform any necessary validation here

        // Store the email address
        // You can replace this with your own logic to store the email
        // For example, you can make an API call to store the email on the server
        console.log('Email:', email);

        // Display success message
        setSubscribed(true);
    };

    return (
        <div className="newsletter-container">
            <p className="newsletter-title">Stay informed, subscribe to our newsletter</p>
            <div className="newsletter-subscription">
                <div className="email-subscribe-container">
                    <p className="email-label">Email address</p>
                    <div className="email-subscription-container">
                        <input
                            type="email"
                            className="email-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button className="base-Button-root subscribe-button" type="button" onClick={handleSubscribe}>
                            Subscribe
                        </button>
                    </div>
                </div>
                <div className="email-section">
                    {subscribed ? (
                        <p className="success-message">Thank you for subscribing!</p>
                    ) : (
                        <img src="/assets/img_1_799_a7bf87.svg" className="image-container11" alt="newsletter" />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
