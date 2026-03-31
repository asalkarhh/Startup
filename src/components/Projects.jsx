import React, { useState } from 'react';
import { FaExternalLinkAlt, FaSearch } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'TechVault E-Commerce',
      category: 'E-Commerce',
      description: 'Full-stack e-commerce platform with payment integration',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      title: 'GreenLeaf Organics',
      category: 'Website',
      description: 'Corporate website with CMS for organic food company',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      title: 'CloudMetrics Dashboard',
      category: 'Web App',
      description: 'Analytics dashboard for SaaS platform',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
    {
      title: 'LocalBites Restaurant',
      category: 'SEO',
      description: 'SEO & Google Business optimization for restaurant chain',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    },
    {
      title: 'FitPro Fitness App',
      category: 'Web App',
      description: 'Fitness tracking application with social features',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    },
    {
      title: 'LuxeHomes Real Estate',
      category: 'Website',
      description: 'Premium real estate listing website with virtual tours',
      gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    },
  ];

  const filters = ['All', 'Website', 'E-Commerce', 'Web App', 'SEO'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="projects-section section-padding" id="projects">
      <div className="container">
        <div className="row justify-content-center" data-aos="fade-up">
          <div className="col-lg-8 text-center">
            <span className="section-tag">Our Portfolio</span>
            <h2 className="section-title">
              Recent <span className="text-gradient">Projects</span>
            </h2>
            <p className="section-subtitle">
              Explore our latest work and see how we've helped businesses
              achieve their digital goals.
            </p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div
          className="project-filters"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="row g-4 mt-2">
          {filteredProjects.map((project, idx) => (
            <div
              className="col-lg-4 col-md-6"
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="project-card">
                <div
                  className="project-image"
                  style={{ background: project.gradient }}
                >
                  <div className="project-overlay">
                    <button className="project-btn" aria-label="View project">
                      <FaSearch />
                    </button>
                    <button className="project-btn" aria-label="Open project">
                      <FaExternalLinkAlt />
                    </button>
                  </div>
                  <div className="project-category-badge">
                    {project.category}
                  </div>
                </div>
                <div className="project-info">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;