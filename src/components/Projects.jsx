import React, { useState } from 'react';
import { FaExternalLinkAlt, FaSearch } from 'react-icons/fa';
import coachingImg from '../assets/images/Academy.png';
import gymImg from '../assets/images/Gym.png';
import realEstateImg from '../assets/images/RealEstate.png';
import restorantImg from '../assets/images/Restorant.png';
import ecomImg from '../assets/images/E-commerce.png';
import glameAuraImg from '../assets/images/GlameAura.png';
import medicoCareImg from '../assets/images/MedicoCare.png';
import solvenImg from '../assets/images/Solven.png';
import chatboatImg from '../assets/images/Chatboat.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'Elite Academy',
      category: 'Website',
      description: 'Complete student portal and online learning management system.',
      image: coachingImg,
      link: 'https://coachingclasses.vercel.app/'
    },
    {
      title: 'PowerFit Gym & Fitness',
      category: 'Web App',
      description: 'Modern fitness platform with membership and class scheduling.',
      image: gymImg,
      link: 'https://gymdemo-bice.vercel.app/'
    },
    {
      title: 'Estate Elite',
      category: 'Website',
      description: 'Premium property listings with integrated 3D virtual tours.',
      image: realEstateImg,
      link: 'https://realestate-demo-two.vercel.app/'
    },
    {
      title: 'LocalBites Restaurant',
      category: 'Website',
      description: 'Modern restaurant website with online menu and table reservations.',
      image: restorantImg,
      link: 'https://hyde-sky.vercel.app/'
    },
    {
      title: 'StyleHub E-Commerce',
      category: 'E-Commerce',
      description: 'Modern fashion e-commerce platform with seamless checkout.',
      image: ecomImg,
    },
    {
      title: 'GlamAura Salon',
      category: 'Web App',
      description: 'Comprehensive salon management system with appointment booking.',
      image: glameAuraImg,
    },
    {
      title: 'MedicoCare Delivery',
      category: 'Website',
      description: 'Modern medical delivery website for rapid pharmacy and healthcare supplies.',
      image: medicoCareImg,
    },
    {
      title: 'Solven Company Profile',
      category: 'SEO',
      description: 'Modern company profile and landing page with advanced SEO optimization.',
      image: solvenImg,
      link: 'https://solven.in/'
    },
    {
      title: 'Social Media Dashboard',
      category: 'Web App',
      description: 'Modern social media dashboard with real-time feed and user interactions.',
      image: chatboatImg,
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
                  style={project.gradient ? { background: project.gradient } : {}}
                >
                  {project.image && (
                    <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  )}
                  <div className="project-overlay">
                    <button className="project-btn" aria-label="View project">
                      <FaSearch />
                    </button>
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-btn" aria-label={`Visit ${project.title}`}>
                        <FaExternalLinkAlt />
                      </a>
                    ) : (
                      <button className="project-btn" aria-label="Open project">
                        <FaExternalLinkAlt />
                      </button>
                    )}
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