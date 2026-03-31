import React from 'react';
import { Link } from 'react-router-dom';
import { FaBullseye, FaEye, FaHandshake, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

const AboutPreview = () => {
  const values = [
    { icon: <FaBullseye />, title: 'Our Mission', text: 'Empowering businesses with transformative digital solutions that drive sustainable growth.', color: '#FF6B35' },
    { icon: <FaEye />, title: 'Our Vision', text: 'To be the most trusted digital partner for businesses worldwide, setting industry standards.', color: '#1D6FA5' },
    { icon: <FaHandshake />, title: 'Our Values', text: 'Integrity, innovation, and client success drive everything we do — always exceeding expectations.', color: '#28A745' },
  ];

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
          <div className="col-lg-6" data-aos="fade-right">
            <div className="about-visual-grid">
              <div className="avg-card avg-1" data-aos="zoom-in" data-aos-delay="100">
                <div className="avg-num">5+</div>
                <div className="avg-label">Years Experience</div>
              </div>
              <div className="avg-card avg-2" data-aos="zoom-in" data-aos-delay="200">
                <div className="avg-num">200+</div>
                <div className="avg-label">Projects Delivered</div>
              </div>
              <div className="avg-card avg-3" data-aos="zoom-in" data-aos-delay="300">
                <div className="avg-num">100+</div>
                <div className="avg-label">Happy Clients</div>
              </div>
              <div className="avg-card avg-4" data-aos="zoom-in" data-aos-delay="400">
                <div className="avg-num">99%</div>
                <div className="avg-label">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
            <div className="about-content-wrap">
              <span className="section-label">About Us</span>
              <h2 className="section-heading">
                Crafting Digital <span className="gradient-text">Excellence</span> Since 2019
              </h2>
              <p className="about-desc">
                NexaByte Digital is a full-service digital agency that crafts premium websites,
                powerful e-commerce platforms, and data-driven SEO strategies. We transform ideas
                into digital experiences that captivate and convert.
              </p>
              <ul className="about-checks">
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

        <div className="row mt-80 g-4">
          {values.map((v, i) => (
            <div className="col-lg-4 col-md-6" key={i} data-aos="fade-up" data-aos-delay={i * 150}>
              <div className="mvv-card">
                <div className="mvv-icon-wrap" style={{ background: v.color + '15', color: v.color }}>
                  {v.icon}
                </div>
                <h4>{v.title}</h4>
                <p>{v.text}</p>
                <div className="mvv-accent" style={{ background: v.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;