import React from 'react';
import { Link } from 'react-router-dom';
import Ecom from "./images/E-commerce.png";
import WebDev from "./images/webDevelopment.jpg";
import SEO from "./images/SEO.png";
import GMaps from "./images/map.png";
import MobileApp from "./images/mobileapps.png";
import Design from "./images/UI.png";
import {
  FaCode, FaShoppingCart, FaSearchDollar, FaMapMarkedAlt,
  FaMobileAlt, FaPaintBrush, FaArrowRight
} from 'react-icons/fa';

const ServicesPreview = () => {
  const services = [
    { icon: <FaCode />, title: 'Website Development', desc: 'Custom-built, lightning-fast websites using React, Next.js, and modern frameworks.', color: '#FF6B35', features: ['React / Next.js', 'Custom CMS', 'API Integration'], image: WebDev },
    { icon: <FaShoppingCart />, title: 'E-Commerce Solutions', desc: 'Scalable online stores with seamless checkout and inventory management.', color: '#1D6FA5', features: ['Shopify / WooCommerce', 'Payment Gateways', 'Analytics Dashboard'], image: Ecom },
    { icon: <FaSearchDollar />, title: 'SEO Optimization', desc: 'Data-driven strategies that put you on page one of Google search results.', color: '#28A745', features: ['Keyword Research', 'On-Page SEO', 'Monthly Reports'], image: SEO },
    { icon: <FaMapMarkedAlt />, title: 'Google Business & Maps', desc: 'Dominate local search with optimized profiles and map ranking strategies.', color: '#6F42C1', features: ['Profile Optimization', 'Review Management', 'Local SEO'], image: GMaps },
    { icon: <FaMobileAlt />, title: 'Mobile App Development', desc: 'Native and cross-platform applications with exceptional user experiences.', color: '#E83E8C', features: ['React Native', 'iOS & Android', 'App Store Launch'], image: MobileApp },
    { icon: <FaPaintBrush />, title: 'UI/UX Design', desc: 'Stunning, intuitive interfaces designed with your users at the center.', color: '#FFC107', features: ['User Research', 'Wireframing', 'Design Systems'], image: Design },
  ];

  return (
    <section className="services-preview section-pad" id="services">
      <div className="container">
        <div className="text-center" data-aos="fade-up">
          <span className="section-label">Our Services</span>
          <h2 className="section-heading">
            Solutions That <span className="gradient-text">Drive Results</span>
          </h2>
          <p className="section-sub">Comprehensive digital services tailored to your business needs, crafted with precision.</p>
        </div>

        <div className="row g-4 mt-4">
          {services.map((s, i) => (
            <div className="col-lg-4 col-md-6" key={s.title} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="service-card-3d">
                <div className="sc3d-slide sc3d-slide1">
                  <div className="sc3d-icon-area" style={{ padding: 0, height: '220px', background: s.color }}>
                    <img src={s.image} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                </div>
                <div className="sc3d-slide sc3d-slide2">
                  <div className="sc3d-content">
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <ul className="sc3d-features">
                      {s.features.map((f, fi) => (
                        <li key={fi}><span className="sc3d-dot" style={{ background: s.color }} />{f}</li>
                      ))}
                    </ul>
                    <Link to="/services" className="sc3d-link hoverable" style={{ color: s.color }}>
                      Learn More →
                    </Link>
                  </div>
                  <div className="sc3d-accent" style={{ background: s.color }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5" data-aos="fade-up">
          <Link to="/services" className="btn-primary-glow hoverable">
            All Services <FaArrowRight className="btn-arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;