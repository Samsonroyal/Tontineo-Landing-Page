import React from 'react';

const Footer = () => {
    return (
        <div className="green-header-section">
            <div className="company-logo-section">
                <div className="svg-container9 svg-container9">
                    <svg
                        fill="none"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                    >
                        {/* SVG paths */}
                    </svg>
                </div>
                <p className="tontineo-title1">Tontineo</p>
            </div>
            <div className="company-section">
                <div className="app-value-section">
                    <p className="company-title">Company</p>
                    <div className="section-title-container">
                        <p className="section-title-text">
                            <a href="/about">About us</a>
                        </p>
                        <p className="section-title-text">
                            <a href="/blog">Blog</a>
                        </p>
                        <p className="section-title section-title-text section-title">
                            <a href="/careers">Careers</a>
                        </p>
                        <p className="section-title-text">
                            <a href="/community">Community</a>
                        </p>
                    </div>
                </div>
                <div className="section-container">
                    <p className="company-title">Features</p>
                    <div className="section-menu">
                        <p className="section-title-text">
                            <a href="/within-africa">Within Africa</a>
                        </p>
                        <p className="text-container">International</p>
                    </div>
                </div>
                <div className="section-container">
                    <p className="help-text">Help</p>
                    <div className="section-menu">
                        <p className="section-title-text">
                            <a href="/contact">Contact</a>
                        </p>
                        <p className="text-container">FAQs</p>
                    </div>
                </div>
                <div className="section-container">
                    <p className="company-title">Legal</p>
                    <div className="section-menu">
                        <p className="section-title-text">
                            <a href="/terms">Terms &amp; conditions</a>
                        </p>
                        <p className="text-container">Privacy policy</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
