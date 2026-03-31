import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt, FaSearch, FaArrowRight } from 'react-icons/fa';

const ProjectsPreview = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    { title: 'TechVault E-Commerce', cat: 'E-Commerce', desc: 'Full-stack store with payment integration', gradient: 'linear-gradient(135deg,#667eea,#764ba2)' },
    { title: 'GreenLeaf Organics', cat: 'Website', desc: 'Corporate website with headless CMS', gradient: 'linear-gradient(135deg,#f093fb,#f5576c)' },
    { title: 'CloudMetrics SaaS', cat: 'Web App', desc: 'Real-time analytics dashboard platform', gradient: 'linear-gradient(135deg,#4facfe,#00f2fe)' },
    { title: 'LocalBites Restaurant', cat: 'SEO', desc: 'SEO & Google Business for restaurant chain', gradient: 'linear-gradient(135deg,#43e97b,#38f9d7)' },
    { title: 'FitPro Fitness', cat: 'Web App', desc: 'Fitness tracking app with social features', gradient: 'linear-gradient(135deg,#fa709a,#fee140)' },
    { title: 'LuxeHomes Realty', cat: 'Website', desc: 'Premium real estate with virtual tours', gradient: 'linear-gradient(135deg,#a18cd1,#fbc2eb)' },
  ];

  const filters = ['All', 'Website', 'E-Commerce', 'Web App', 'SEO'];
  const shown = filter === 'All' ? projects : projects.filter(p => p.cat === filter);

  return (
    <section className="projects-preview section-pad" id="projects">
      <div className="container">
        <div className="text-center" data-aos="fade-up">
          <span className="section-label">Portfolio</span>
          <h2 className="section-heading">
            Recent <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-sub">Showcasing our finest digital craftsmanship and results.</p>
        </div>

        <div className="filter-row" data-aos="fade-up" data-aos-delay="100">
          {filters.map(f => (
            <button key={f} className={`filter-btn hoverable ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}>
              {f}
            </button>
          ))}
        </div>

        <div className="row g-4 mt-3">
          {shown.map((p, i) => (
            <div className="col-lg-4 col-md-6" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="project-card hoverable">
                <div className="pc-image" style={{ background: p.gradient }}>
                  <div className="pc-overlay">
                    <button className="pc-btn"><FaSearch /></button>
                    <button className="pc-btn"><FaExternalLinkAlt /></button>
                  </div>
                  <span className="pc-badge">{p.cat}</span>
                </div>
                <div className="pc-info">
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5" data-aos="fade-up">
          <Link to="/projects" className="btn-primary-glow hoverable">
            View All Projects <FaArrowRight className="btn-arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;