import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Brand Info */}
                <div className="footer-brand">
                    <h2>📖 Silent Launch 4.0</h2>
                    <p>
                        Dive into a world of knowledge, stories, and imagination. Your
                        gateway to books, authors, and communities that matter.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer-links">
                    <h3>Explore</h3>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Packages</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div className="footer-social">
                    <h3>Connect</h3>
                    <div className="social-icons">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                © {new Date().getFullYear()} SL4.0. Powered by Vcraftyu Company
            </div>
        </footer>
    );
};

export default Footer;
