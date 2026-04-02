import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import Cube3D from './Cube3D';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      {/* Animated particles/shapes */}
      <div className="hero-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`hero-particle hp-${i % 5}`} style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${6 + Math.random() * 10}s`
          }} />
        ))}
      </div>

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
                  <span>🏆 #1 Digital Agency — 2025</span>
                </span>
              </div>

              <h1 className="hero-heading" data-aos="fade-up" data-aos-delay="400">
                We Build Digital
                <span className="hero-heading-accent"> Experiences </span>
                That
                <span className="hero-heading-accent"> Drive Growth</span>
              </h1>

              <p className="hero-sub" data-aos="fade-up" data-aos-delay="500">
                Transform your brand with cutting-edge web development, scalable
                e-commerce platforms, data-driven SEO strategies, and Google
                Business optimization that delivers measurable ROI.
              </p>

              <div className="hero-btns" data-aos="fade-up" data-aos-delay="600">
                <Link to="/contact" className="btn-primary-glow hoverable">
                  Start Your Project
                  <FaArrowRight className="btn-arrow" />
                </Link>
                <Link to="/projects" className="btn-outline-hero hoverable">
                  <span className="btn-play-circle">
                    <FaPlay />
                  </span>
                  View Our Work
                </Link>
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
              {/* <div className="hero-float-card hfc-1" data-aos="zoom-in" data-aos-delay="800">
                <div className="hfc-icon green">📈</div>
                <div><strong>+340%</strong><span>Revenue Growth</span></div>
              </div> */}
              {/* <div className="hero-float-card hfc-2" data-aos="zoom-in" data-aos-delay="900">
                <div className="hfc-icon blue">🚀</div>
                <div><strong>99.9%</strong><span>Uptime Score</span></div>
              </div> */}
              {/* <div className="hero-float-card hfc-3" data-aos="zoom-in" data-aos-delay="1000">
                <div className="hfc-icon purple">⭐</div>
                <div><strong>4.9/5</strong><span>Client Rating</span></div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;