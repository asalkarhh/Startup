import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaHeart } from 'react-icons/fa';
import SocialIcons3D from './SocialIcons3D';
import logo from '../assets/logo.png';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', to: '/home' },
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact', to: '/contact' },
  ];

  const services = [
    'Website Development',
    'E-Commerce Solutions',
    'SEO Optimization',
    'Google Business & Maps',
    'Mobile App Development',
    'UI/UX Design',
  ];

  const legalLinks = [
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms of Service', to: '/terms' },
    { label: 'Cookie Policy', to: '/cookies' },
  ];

  return (
    <footer className="footer" style={{ backgroundColor: '#0B1D32', position: 'relative', overflow: 'hidden' }}>
      <style>
        {`
          /* Convert dark logo image to pure white to match the dark hero theme */
          .footer-logo img {
            filter: brightness(0) invert(1) !important;
          }
        `}
      </style>

      {/* Hero Theme Background Particles and Orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      {/* Main Footer */}
      <div className="footer-main" style={{ position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6" data-aos="fade-up">
              <Link to="/" className="footer-logo">
                <img 
                  src={logo} 
                  alt="Asalkar Techworks Logo" 
                  height="70" 
                  style={{ objectFit: 'contain' }}
                />
              </Link>
              <p className="footer-desc">
                A full-service digital agency building beautiful, high-performing
                digital solutions that help businesses grow worldwide.
              </p>
              <SocialIcons3D />
            </div>

            <div className="col-lg-2 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-link-list">
                {quickLinks.map((l, i) => (
                  <li key={i}>
                    <Link to={l.to}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <h4 className="footer-heading">Services</h4>
              <ul className="footer-link-list">
                {services.map((s, i) => (
                  <li key={i}>
                    <Link to="/services">{s}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <h4 className="footer-heading">Newsletter</h4>
              <p className="footer-nl-text">
                Subscribe for the latest updates and insights.
              </p>
              <form className="footer-nl-form" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email"
                  className="footer-nl-input"
                />
                <button type="submit" className="footer-nl-btn hoverable">
                  <FaArrowRight />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom" style={{ position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p>
                © {new Date().getFullYear()} Asalkar Techworks. Made with{' '}
                <FaHeart className="heart-beat" /> by Asalkar Techworks
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="fb-links">
                {legalLinks.map((link, i) => (
                  <Link key={i} to={link.to}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;