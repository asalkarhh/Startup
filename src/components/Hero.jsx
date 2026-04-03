import React, { useState } from 'react';
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import Cube3D from './Cube3D';
import NetworkParticles from './NetworkParticles';

const Hero = () => {
  const [isWhatsAppHovered, setIsWhatsAppHovered] = useState(false);
  return (
    <section className="hero" id="hero">
      {/* Network Particles Interactive Canvas */}
      <NetworkParticles />

      {/* Gradient orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      <div className="container">
        <div className="row align-items-center hero-row">
          <div className="col-lg-7" data-aos="fade-right" data-aos-delay="200">
            <div className="hero-content">
              <div className="hero-badge-wrap" data-aos="fade-down" data-aos-delay="300">
                <span className="hero-badge">
                  <span className="hb-dot" />
                  <span>🇮🇳 Trusted IT Company in India</span>
                </span>
              </div>

              <h1 className="hero-heading" data-aos="fade-up" data-aos-delay="400">
                Premium Web Development &amp;
                <span className="hero-heading-accent"> Digital Solutions </span>
                — India's Trusted
                <span className="hero-heading-accent"> IT Company</span>
              </h1>

              <p className="hero-sub" data-aos="fade-up" data-aos-delay="500">
                From affordable website development to advanced SEO and e-commerce —
                Asalkar TechWork helps Indian businesses build powerful online
                presences that turn visitors into paying clients.
              </p>

              <div className="hero-btns" data-aos="fade-up" data-aos-delay="600">
                <a href="tel:+918087818729" className="btn-primary-glow hoverable">
                  Call Us Now
                  <FaArrowRight className="btn-arrow" />
                </a>
              <a
                href="https://wa.me/918087818729" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-outline-hero hoverable"
                style={{
                  backgroundColor: isWhatsAppHovered ? '#1DA851' : '#25D366', // Darker green on hover
                  borderColor: '#25D366',
                  color: '#fff',
                  transition: 'background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease', // Smooth transition
                  transform: isWhatsAppHovered ? 'translateY(-3px)' : 'translateY(0)', // Subtle lift
                  boxShadow: isWhatsAppHovered ? '0 8px 20px rgba(37, 211, 102, 0.4)' : 'none', // Glow effect
                }}
                onMouseEnter={() => setIsWhatsAppHovered(true)}
                onMouseLeave={() => setIsWhatsAppHovered(false)}
              >
                <span className="btn-play-circle" style={{ backgroundColor: '#fff' }}>
                  <FaWhatsapp color="#25D366" size={24} />
                </span>
                Chat on WhatsApp
              </a>
              </div>

              {/* <div className="hero-trust" data-aos="fade-up" data-aos-delay="700">
                <div className="hero-avatars">
                  {['SJ', 'MC', 'ER', 'DT'].map((init, i) => (
                    <div key={i} className="hero-avatar" style={{ zIndex: 4 - i }}>
                      {init}
                    </div>
                  ))}
                </div>
                <div className="hero-trust-text">
                  <strong>100+ Clients</strong>
                  <span>trust Asalkar Techworks for their digital growth</span>
                </div>
              </div> */}
            </div>
          </div>

          <div className="col-lg-5" data-aos="fade-left" data-aos-delay="500">
            <div className="hero-visual">
              <Cube3D />
              {/* Floating stats */}
              {/* <div className="hero-float-card hfc-2" data-aos="zoom-in" data-aos-delay="900">
                <div className="hfc-icon blue">🚀</div>
                <div><strong>2–3 Weeks</strong><span>Website Launch</span></div>
              </div>
              <div className="hero-float-card hfc-3" data-aos="zoom-in" data-aos-delay="1000">
                <div className="hfc-icon purple">⭐</div>
                <div><strong>100%</strong><span>Client Satisfaction</span></div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;