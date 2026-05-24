import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import CTASection from '../components/CTASection';
import { FaExternalLinkAlt, FaRocket } from 'react-icons/fa';
import coachingImg from '../assets/images/Academy.png';
import gymImg from '../assets/images/Gym.png';
import realEstateImg from '../assets/images/RealEstate.png';
import restorantImg from '../assets/images/Restorant.png';
import ecomImg from '../assets/images/E-commerce.png';
import medicoCareImg from '../assets/images/MedicoCare.png';
import solvenImg from '../assets/images/Solven.png';
import sssBhoomImg from '../assets/images/sssbhoom.png';
import caWebsiteImg from '../assets/images/ca-website.png';

const allProjects = [
  {
    title: 'Solven Company Profile',
    cat: 'SEO',
    type: 'Client Project',
    industry: 'B2B Services',
    desc: 'A polished company profile website built to improve trust, service clarity, and organic discoverability.',
    outcome: 'SEO-ready pages with clear service positioning',
    image: solvenImg,
    link: 'https://solven.in/',
    tech: ['SEO', 'Next.js', 'Tailwind'],
  },
  {
    title: 'Elite Academy',
    cat: 'Website',
    type: 'Demo Showcase',
    industry: 'Education',
    desc: 'A professional academy website concept with student-focused content sections and conversion-ready layout.',
    outcome: 'Admissions-focused journey with LMS-style structure',
    image: coachingImg,
    link: 'https://coachingclasses.vercel.app/',
    tech: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'MK Fitness',
    cat: 'Website',
    type: 'Client Project',
    industry: 'Fitness',
    desc: 'A premium fitness website for showcasing personal training, group classes, strength training, and gym locations.',
    outcome: 'Live gym website with program discovery, branch details, and quick inquiry flow',
    image: gymImg,
    link: 'https://www.mkfitness.in/',
    tech: ['React', 'SEO', 'Responsive UI'],
  },
  {
    title: 'Shri SSS Sanstha',
    cat: 'Website',
    type: 'Client Project',
    industry: 'NGO',
    desc: 'A nonprofit website for a Maharashtra-based NGO focused on education, healthcare, social welfare, disaster relief, and volunteer service.',
    outcome: 'Mission-led NGO presence with clear impact areas and community trust signals',
    image: sssBhoomImg,
    link: 'https://www.shrissssanstha.com/',
    tech: ['React', 'SEO', 'Responsive UI'],
  },
  {
    title: 'Estate Elite',
    cat: 'Website',
    type: 'Demo Showcase',
    industry: 'Real Estate',
    desc: 'A premium property listing experience designed for faster browsing, inquiry capture, and visual storytelling.',
    outcome: 'Property showcase with immersive listing flow',
    image: realEstateImg,
    link: 'https://realestate-demo-two.vercel.app/',
    tech: ['Next.js', 'Three.js', 'Vercel'],
  },
  {
    title: 'Sharma and Associates',
    cat: 'Website',
    industry: 'Chartered Accountancy',
    desc: 'A professional corporate website for a Chartered Accountant firm, featuring service portfolios, client resources, and a streamlined consultation booking flow.',
    outcome: 'Trust-building digital presence tailored for financial and compliance services',
    image: caWebsiteImg,
    link: 'https://ca-project-zeta.vercel.app/',
    tech: ['React', 'Tailwind', 'Vercel'],
  },
  {
    title: 'Savory Bite Restaurant',
    cat: 'Website',
    type: 'Demo Showcase',
    industry: 'Restaurant',
    desc: 'A restaurant website concept with menu presentation, table reservation prompts, and mobile-first browsing.',
    outcome: 'Food discovery layout optimized for reservations',
    image: restorantImg,
    link: 'https://hyde-sky.vercel.app/',
    tech: ['React', 'Tailwind', 'Vercel'],
  },
  {
    title: 'Asalkar Healthy Hub E-Commerce',
    cat: 'E-Commerce',
    type: 'Demo Showcase',
    industry: 'Retail',
    desc: 'An e-commerce storefront concept with product discovery, shopping flow, and inventory-aware structure.',
    outcome: 'Storefront experience ready for catalog expansion',
    image: ecomImg,
    tech: ['React', 'Shopify', 'Tailwind'],
  },
  {
    title: 'MedicoCare Delivery',
    cat: 'Website',
    type: 'Demo Showcase',
    industry: 'Healthcare',
    desc: 'A healthcare delivery website concept for pharmacy, supplies, trust-building content, and quick inquiries.',
    outcome: 'Service-led website for urgent healthcare needs',
    image: medicoCareImg,
    tech: ['Next.js', 'Node.js', 'Tailwind'],
  },
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
                <div className="project-card-full hoverable" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div className="pcf-image" style={p.gradient ? { background: p.gradient } : {}}>
                    {p.image && <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
                    <div className="pcf-overlay">
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
                  <div className="pcf-info" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    {p.industry && (
                      <div className="pcf-tags" style={{ marginBottom: '10px' }}>
                        <span className="pcf-tag">{p.industry}</span>
                      </div>
                    )}
                    <h4>{p.title}</h4>
                    <p style={{ flexGrow: 1 }}>{p.desc}</p>
                    {p.outcome && (
                      <div className="pcf-outcome" style={{
                        marginTop: '12px',
                        padding: '10px 12px',
                        background: 'var(--bg-alt)',
                        borderLeft: '3px solid #FF6B35',
                        borderRadius: '6px',
                        fontSize: '0.9rem',
                        color: 'var(--text-2)'
                      }}>
                        <strong style={{ color: 'var(--text)' }}>Outcome:</strong> {p.outcome}
                      </div>
                    )}
                    <div className="pcf-tags" style={{ marginTop: 'auto', paddingTop: '16px' }}>
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