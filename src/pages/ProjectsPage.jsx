import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import CTASection from '../components/CTASection';
import { FaExternalLinkAlt, FaSearch, FaRocket } from 'react-icons/fa';
import coachingImg from '../assets/images/Academy.png';
import gymImg from '../assets/images/Gym.png';
import realEstateImg from '../assets/images/RealEstate.png';
import restorantImg from '../assets/images/Restorant.png';
import ecomImg from '../assets/images/E-commerce.png';
import glameAuraImg from '../assets/images/GlameAura.png';
import medicoCareImg from '../assets/images/MedicoCare.png';
import solvenImg from '../assets/images/Solven.png';
import chatboatImg from '../assets/images/Chatboat.png';

const allProjects = [
  { title: 'Elite Academy', cat: 'Website', desc: 'Complete student portal and online learning management system.', image: coachingImg, link: 'https://coachingclasses.vercel.app/', tech: ['React', 'Node.js', 'MongoDB'] },
  { title: 'Solven Company Profile', cat: 'SEO', desc: 'Modern company profile and landing page with advanced SEO optimization.', image: solvenImg, link: 'https://solven.in/', tech: ['SEO', 'Next.js', 'Tailwind'] },
  { title: 'PowerFit Gym & Fitness', cat: 'Web App', desc: 'Modern fitness platform with membership and class scheduling.', image: gymImg, link: 'https://gymdemo-bice.vercel.app/', tech: ['React', 'Firebase', 'Tailwind'] },
  
  { title: 'Estate Elite', cat: 'Website', desc: 'Premium property listings with integrated 3D virtual tours.', image: realEstateImg, link: 'https://realestate-demo-two.vercel.app/', tech: ['Next.js', 'Three.js', 'Vercel'] },
  { title: 'GlamAura Salon', cat: 'Web App', desc: 'Comprehensive salon management system with appointment booking and staff scheduling.', image: glameAuraImg, tech: ['React', 'Node.js', 'Express'] },
  { title: 'Savory Bite Restaurant', cat: 'Website', desc: 'Modern restaurant website with online menu and table reservations.', image: restorantImg, link: 'https://hyde-sky.vercel.app/', tech: ['React', 'Tailwind', 'Vercel'] },
  
  { title: 'Asalkar Healthy Hub E-Commerce', cat: 'E-Commerce', desc: 'Fashion e-commerce platform with seamless checkout and inventory management.', image: ecomImg, tech: ['React', 'Shopify', 'Tailwind'] },
  { title: 'MedicoCare Delivery', cat: 'Website', desc: 'Modern medical delivery website for rapid pharmacy and healthcare supplies.', image: medicoCareImg, tech: ['Next.js', 'Node.js', 'Tailwind'] },
  { title: 'Social Media Dashboard', cat: 'Web App', desc: 'Modern social media dashboard with real-time feed and user interactions.', image: chatboatImg, tech: ['React', 'Node.js', 'Socket.io'] },
];

const ProjectsPage = () => {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Website', 'E-Commerce', 'Web App', 'SEO'];
  const shown = filter === 'All' ? allProjects : allProjects.filter(p => p.cat === filter);

  return (
    <>
      <PageBanner title="Our Projects" subtitle="A showcase of our finest digital craftsmanship and client success stories." breadcrumb="Projects" />

      <section className="section-pad projects-full-section">
        <div className="container">
          <div className="filter-row" data-aos="fade-up">
            {filters.map(f => (
              <button key={f} className={`filter-btn hoverable ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>
                {f}
              </button>
            ))}
          </div>

          <div className="row g-4 mt-4">
            {shown.map((p, i) => (
              <div className="col-lg-4 col-md-6" key={i} data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="project-card-full hoverable">
                  <div className="pcf-image" style={p.gradient ? { background: p.gradient } : {}}>
                    {p.image && <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
                    <div className="pcf-overlay">
                      <button className="pc-btn"><FaSearch /></button>
                      {p.link ? (
                        <a href={p.link} target="_blank" rel="noopener noreferrer" className="pc-btn" aria-label={`Visit ${p.title}`}>
                          <FaExternalLinkAlt />
                        </a>
                      ) : (
                        <button className="pc-btn"><FaExternalLinkAlt /></button>
                      )}
                    </div>
                    <span className="pc-badge">{p.cat}</span>
                  </div>
                  <div className="pcf-info">
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                    <div className="pcf-tags">
                      {p.tech.map((t, ti) => <span key={ti} className="pcf-tag">{t}</span>)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        badgeText="Let's Collaborate"
        badgeIcon={FaRocket}
        title="Have a project in mind?"
        description="We'd love to hear about your vision. Let's work together to create a digital experience that stands out."
        primaryBtnText="Start a Project"
        primaryBtnLink="/contact"
        showSecondaryBtn={false}
      />

    </>
  );
};

export default ProjectsPage;