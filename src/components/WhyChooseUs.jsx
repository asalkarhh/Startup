import React from 'react';
import {
  FaMobileAlt, FaSearch, FaBolt, FaHeadset,
  FaShieldAlt, FaChartBar, FaClock, FaThumbsUp
} from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    { icon: <FaMobileAlt />, title: '100% Responsive', desc: 'Pixel-perfect on every screen and device.' },
    { icon: <FaSearch />, title: 'SEO Optimized', desc: 'Built for search engines from the ground up.' },
    { icon: <FaBolt />, title: 'Lightning Fast', desc: 'Under 2-second load times guaranteed.' },
    { icon: <FaHeadset />, title: '24/7 Support', desc: 'Dedicated team always available for you.' },
    { icon: <FaShieldAlt />, title: 'Secure & Reliable', desc: 'Enterprise-grade security for your data.' },
    { icon: <FaChartBar />, title: 'Data-Driven', desc: 'Analytics-backed decisions that work.' },
    { icon: <FaClock />, title: 'On-Time Delivery', desc: 'Deadlines met without quality compromise.' },
    { icon: <FaThumbsUp />, title: '99% Satisfaction', desc: 'We deliver until you\'re thrilled.' },
  ];

  return (
    <section className="why-section section-pad">
      <div className="container">
        <div className="text-center" data-aos="fade-up">
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-heading">
            The <span className="gradient-text">NexaByte</span> Advantage
          </h2>
          <p className="section-sub">What sets us apart from every other agency out there.</p>
        </div>

        <div className="row g-4 mt-4">
          {features.map((f, i) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={i} data-aos="fade-up" data-aos-delay={i * 80}>
              <div className="why-card hoverable">
                <div className="why-icon-wrap">{f.icon}</div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
                <div className="why-card-glow" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;