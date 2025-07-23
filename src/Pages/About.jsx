import React from 'react'
import Faqs from "../Components/Faqs";
import WhyChooseUs from "../Components/WhyUs"

export default function About() {
  return (
    <div className='about-container'>
      <div className="about-section">
        <div className="about-left">
            <img src="/src/assets/about-us.jpg" alt="" />
        </div>
        <div className="about-right">
            <h1>About SL 4.0</h1>
            <p>Silent Launch 4.0 is a smart publishing platform that guides students and authors through a streamlined, AI-powered publishing journey. Users begin by uploading their manuscript and registering an ISBN. The system checks for originality and AI-generated content, securing ownership via Blockchain, if approved. Editors then review content based on guidelines, aided by AI tools for grammar and quality scoring. Language editors refine the text, fonts, and layout using a CMS. Authors can upload or design a cover using integrated Canva tools.
            After formatting and proofreading, the final draft is sent to the author for approval. Once approved, users choose the output format (PDF , eBook, print), and SL 4.0 supports the main marketing channels, including listings on Amazon and eBay.
            </p>
        </div>
      </div>
      <div>
      <WhyChooseUs />
    </div>
      <div>
      <Faqs />
    </div>
    </div>
  )
}
