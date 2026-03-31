import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import CTASection from '../components/CTASection';
import { FaExternalLinkAlt, FaSearch } from 'react-icons/fa';

const allProjects = [
  { title: 'TechVault E-Commerce', cat: 'E-Commerce', desc: 'Full-stack online store with payment integration and real-time inventory management.', gradient: 'linear-gradient(135deg,#667eea,#764ba2)', tech: ['React', 'Node.js', 'Stripe'] },
  { title: 'GreenLeaf Organics', cat: 'Website', desc: 'Premium corporate website with headless CMS and dynamic content management.', gradient: 'linear-gradient(135deg,#f093fb,#f5576c)', tech: ['Next.js', 'Sanity', 'Vercel'] },
  { title: 'CloudMetrics Dashboard', cat: 'Web App', desc: 'Real-time analytics dashboard for SaaS platform with data visualization.', gradient: 'linear-gradient(135deg,#4facfe,#00f2fe)', tech: ['React', 'D3.js', 'AWS'] },
  { title: 'LocalBites Restaurant', cat: 'SEO', desc: 'Complete SEO overhaul and Google Business optimization for restaurant chain.', gradient: 'linear-gradient(135deg,#43e97b,#38f9d7)', tech: ['SEO', 'Google Ads', 'Analytics'] },
  { title: 'FitPro Fitness App', cat: 'Web App', desc: 'Comprehensive fitness tracking application with social features and gamification.', gradient: 'linear-gradient(135deg,#fa709a,#fee140)', tech: ['React Native', 'Firebase', 'Node.js'] },
  { title: 'LuxeHomes Real Estate', cat: 'Website', desc: 'Premium real estate listing website with 3D virtual tours and MLS integration.', gradient: 'linear-gradient(135deg,#a18cd1,#fbc2eb)', tech: ['Next.js', 'Three.js', 'MongoDB'] },
  { title: 'StyleHub Fashion', cat: 'E-Commerce', desc: 'Fashion e-commerce platform with AR try-on feature and personalized recommendations.', gradient: 'linear-gradient(135deg,#ffecd2,#fcb69f)', tech: ['React', 'Shopify', 'AI/ML'] },
  { title: 'MedCare Clinic', cat: 'SEO', desc: 'Healthcare SEO and Google Maps ranking for multi-location medical practice.', gradient: 'linear-gradient(135deg,#89f7fe,#66a6ff)', tech: ['SEO', 'Local SEO', 'PPC'] },
  { title: 'FinTrack Banking', cat: 'Web App', desc: 'Secure banking dashboard with real-time transactions and financial analytics.', gradient: 'linear-gradient(135deg,#c3cfe2,#f5f7fa)', tech: ['React', 'TypeScript', 'GraphQL'] },
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
                  <div className="pcf-image" style={{ background: p.gradient }}>
                    <div className="pcf-overlay">
                      <button className="pc-btn"><FaSearch /></button>
                      <button className="pc-btn"><FaExternalLinkAlt /></button>
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

      <CTASection />
    </>
  );
};

export default ProjectsPage;