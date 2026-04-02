import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import OrbitDiagram from './OrbitDiagram';

const AboutPreview = () => {
  const points = [
    'Custom-built solutions for every client',
    'Agile methodology for rapid delivery',
    'Transparent communication throughout',
    'Post-launch support & maintenance',
  ];

  return (
    <section className="about-preview section-pad" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-2 order-lg-1" data-aos="fade-right">
            <OrbitDiagram />
          </div>

          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="200">
            <div className="about-content-wrap">
              <span className="section-label">About Us</span>
              <h2 className="section-heading">
                Crafting Digital <span className="gradient-text">Excellence</span> Since 2019
              </h2>
              <p className="about-desc">
                Asalkar Techworks is a full-service digital agency that crafts premium websites,
                powerful e-commerce platforms, and data-driven SEO strategies. We transform ideas
                into digital experiences that captivate and convert.
              </p>
              <ul className="about-checks about-checks--centered">
                {points.map((p, i) => (
                  <li key={i}><FaCheckCircle className="check-icon" /> {p}</li>
                ))}
              </ul>
              <Link to="/about" className="btn-primary-glow hoverable">
                Learn More <FaArrowRight className="btn-arrow" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutPreview;
