import React, { useState } from "react";


const faqData = [
  {
    question: "What is your return policy?",
    answer: "We accept returns within 30 days of purchase. Items must be unused and in original packaging."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to most countries worldwide. Shipping charges apply based on location."
  },
  {
    question: "How can I track my order?",
    answer: "After placing your order, you will receive a tracking link via email."
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept Visa, MasterCard, PayPal, and UPI."
  }
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFaq(index)}>
              {faq.question}
              <span className="arrow">{openIndex === index ? "▲" : "▼"}</span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
