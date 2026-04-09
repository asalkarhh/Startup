import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt, FaSearch, FaArrowRight } from 'react-icons/fa';
import coachingImg from '../assets/images/Academy.png';
import gymImg from '../assets/images/Gym.png';
import realEstateImg from '../assets/images/RealEstate.png';

const ProjectsPreview = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    { title: 'Elite Academy', cat: 'Website', desc: 'Complete student portal and online learning management system.', image: coachingImg, link: 'https://coachingclasses.vercel.app/' },
    { title: 'PowerFit Gym & Fitness', cat: 'Web App', desc: 'Modern fitness platform with membership and class scheduling.', image: gymImg, link: 'https://gymdemo-bice.vercel.app/' },
    { title: 'Estate Elite', cat: 'Website', desc: 'Premium property listings with integrated 3D virtual tours.', image: realEstateImg, link: 'https://realestate-demo-two.vercel.app/' },
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
                <div className="pc-image">
                  <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div className="pc-overlay">
                    <button className="pc-btn"><FaSearch /></button>
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="pc-btn" aria-label={`Visit ${p.title}`}>
                      <FaExternalLinkAlt />
                    </a>
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