import React from 'react';
import { Link } from 'react-router-dom';
import NetworkParticles from './NetworkParticles';

const PageBanner = ({ title, subtitle, breadcrumb }) => (
  <section className="page-banner">
    <NetworkParticles />
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