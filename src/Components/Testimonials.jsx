import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Example Co.",
    text: "This service exceeded my expectations. The team was incredibly professional and delivered on time.",
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Jane Smith",
    role: "Marketing Head, Brandify",
    text: "Amazing experience! The design quality and attention to detail were outstanding.",
    img: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Mike Johnson",
    role: "CTO, InnovateX",
    text: "Highly recommend! They brought our vision to life with perfection and great communication.",
    img: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    name: "Aisha Khan",
    role: "Product Manager, Nova",
    text: "Great results, clear communication and fast delivery. Would work again.",
    img: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="testimonial-wrapper">
      <h2 className="testimonial-title">Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-slide">
            <div className="testimonial-card">
              <img src={t.img} alt={t.name} className="testimonial-img" />
              <p className="testimonial-text">"{t.text}"</p>
              <h4 className="testimonial-name">{t.name}</h4>
              <small className="testimonial-role">{t.role}</small>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
