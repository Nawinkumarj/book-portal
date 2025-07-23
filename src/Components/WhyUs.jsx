import React from "react";

import { FaRocket, FaShieldAlt, FaHeadset, FaSmile } from "react-icons/fa";

const features = [
    {
        icon: <FaRocket />,
        title: "Fast & Reliable",
        description: "Experience lightning-fast services with 99.9% uptime and real-time support."
    },
    {
        icon: <FaShieldAlt />,
        title: "Secure & Trusted",
        description: "Your data is protected with end-to-end encryption and secure transactions."
    },
    {
        icon: <FaHeadset />,
        title: "24/7 Support",
        description: "Our support team is always ready to help you anytime, anywhere."
    },
    {
        icon: <FaSmile />,
        title: "Customer Satisfaction",
        description: "We value our customers and go the extra mile to ensure their happiness."
    }
];

const WhyChooseUs = () => {
    return (
        <div className="choose-container">
            <h2 className="choose-title">Why Choose Us</h2>
            <div className="choose-grid">
                {features.map((item, index) => (
                    <div className="choose-card" key={index}>
                        <div className="choose-icon">{item.icon}</div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;
