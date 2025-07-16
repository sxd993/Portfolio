import React, { useState, useEffect } from 'react';
import './TestimonialSlider.css';

const TestimonialSlider = () => {
  const testimonials = [
    { text: 'Отличная команда, сделали сайт за неделю!', author: 'Иван, клиент' },
    { text: 'Профессионалы своего дела, рекомендую!', author: 'Мария, коллега' },
    { text: 'Быстро и качественно, спасибо!', author: 'Алексей, партнер' },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonial-slider-section">
      <h2 className="testimonial-slider-title">Что о нас говорят?</h2>
      <div className="testimonial-slider-content">
        <p className="testimonial-slider-text">"{testimonials[current].text}"</p>
        <p className="testimonial-slider-author">- {testimonials[current].author}</p>
      </div>
    </section>
  );
};

export default TestimonialSlider;