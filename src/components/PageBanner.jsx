import React from 'react';
import { Link } from 'react-router-dom';

const PageBanner = ({ title, subtitle, breadcrumb }) => (
  <section className="page-banner">
    <div className="pb-particles">
      {[...Array(10)].map((_, i) => (
        <div key={i} className={`pb-particle pb-p-${i % 4}`} style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`
        }} />
      ))}
    </div>
    <div className="pb-orb pb-orb-1" />
    <div className="pb-orb pb-orb-2" />
    <div className="container">
      <div className="pb-content" data-aos="fade-up">
        <span className="pb-breadcrumb">
          <Link to="/">Home</Link> / <span>{breadcrumb}</span>
        </span>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  </section>
);

export default PageBanner;