import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaHeart } from 'react-icons/fa';
import SocialIcons3D from './SocialIcons3D';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', to: '/' },
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
    <footer className="footer">

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6" data-aos="fade-up">
              <Link to="/" className="footer-logo">
                <span className="logo-sym">&lt;</span>
                <span className="logo-n">Nexa</span>
                <span className="logo-b">Byte</span>
                <span className="logo-sym">/&gt;</span>
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
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p>
                © {new Date().getFullYear()} NexaByte Digital. Made with{' '}
                <FaHeart className="heart-beat" /> by NexaByte
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