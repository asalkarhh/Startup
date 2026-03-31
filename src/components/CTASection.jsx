import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const CTASection = () => (
  <section className="cta-section" data-aos="fade-up">
    <div className="cta-bg-shapes">
      <div className="cta-shape cta-shape-1" />
      <div className="cta-shape cta-shape-2" />
    </div>
    <div className="container">
      <div className="cta-inner">
        <h2>Ready to Transform Your Digital Presence?</h2>
        <p>Let's build something extraordinary together. Get a free consultation today.</p>
        <div className="cta-btns">
          <Link to="/contact" className="btn-white-glow hoverable">
            Get Free Quote <FaArrowRight className="btn-arrow" />
          </Link>
          <Link to="/projects" className="btn-outline-white hoverable">View Our Work</Link>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;