import React, { useState, useEffect, useCallback } from 'react';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    { name: 'Sarah Johnson', role: 'CEO, TechVault Inc.', text: 'NexaByte transformed our outdated website into a stunning e-commerce platform. Our sales increased by 300% within the first quarter. Absolutely phenomenal team!', rating: 5, initials: 'SJ', color: '#FF6B35' },
    { name: 'Michael Chen', role: 'Founder, GreenLeaf', text: 'The SEO work was phenomenal. We went from page 5 to first page of Google in just 4 months. The ROI has been incredible — best investment we\'ve made.', rating: 5, initials: 'MC', color: '#1D6FA5' },
    { name: 'Emily Rodriguez', role: 'Marketing Director, FitPro', text: 'Working with NexaByte was an absolute pleasure. They understood our vision perfectly and delivered a web application that exceeded all expectations.', rating: 5, initials: 'ER', color: '#28A745' },
    { name: 'David Thompson', role: 'Owner, LocalBites', text: 'Our Google Business profile and Maps ranking improved dramatically. We\'re now the #1 result in our area. More customers find us every single day!', rating: 5, initials: 'DT', color: '#6F42C1' },
    { name: 'Jessica Park', role: 'CTO, CloudMetrics', text: 'The dashboard they built is both beautiful and functional. Their attention to detail and technical expertise is unmatched. Our go-to development partner.', rating: 5, initials: 'JP', color: '#E83E8C' },
  ];

  const next = useCallback(() => setCurrent(c => (c + 1) % testimonials.length), [testimonials.length]);
  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="testimonials-section section-pad">
      <div className="container">
        <div className="text-center" data-aos="fade-up">
          <span className="section-label">Testimonials</span>
          <h2 className="section-heading">
            What Our <span className="gradient-text">Clients</span> Say
          </h2>
          <p className="section-sub">Real feedback from businesses we've helped transform.</p>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
            <div className="testimonial-slider">
              <div className="ts-card">
                <div className="ts-quote"><FaQuoteLeft /></div>
                <p className="ts-text">{testimonials[current].text}</p>
                <div className="ts-stars">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className="ts-author">
                  <div className="ts-avatar" style={{ background: testimonials[current].color }}>
                    {testimonials[current].initials}
                  </div>
                  <div>
                    <h5>{testimonials[current].name}</h5>
                    <span>{testimonials[current].role}</span>
                  </div>
                </div>
              </div>

              <div className="ts-nav">
                <button onClick={prev} className="ts-nav-btn hoverable"><FaChevronLeft /></button>
                <div className="ts-dots">
                  {testimonials.map((_, i) => (
                    <button key={i} className={`ts-dot ${i === current ? 'active' : ''}`} onClick={() => setCurrent(i)} />
                  ))}
                </div>
                <button onClick={next} className="ts-nav-btn hoverable"><FaChevronRight /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;