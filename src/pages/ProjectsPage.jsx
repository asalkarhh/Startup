import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import CTASection from '../components/CTASection';
import { FaArrowRight, FaExternalLinkAlt, FaFileInvoiceDollar, FaRocket, FaSms } from 'react-icons/fa';
import { productList } from '../data/products';
import coachingImg from '../assets/images/Academy.png';
import gymImg from '../assets/images/Gym.png';
import realEstateImg from '../assets/images/RealEstate.png';
import restorantImg from '../assets/images/Restorant.png';
import ecomImg from '../assets/images/E-commerce.png';
import medicoCareImg from '../assets/images/MedicoCare.png';
import solvenImg from '../assets/images/Solven.png';
import sssBhoomImg from '../assets/images/sssbhoom.png';
import scaleAlphaImg from '../assets/images/scalealpha.jpeg';

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
    title: 'Scale Alpha',
    cat: 'Website',
    industry: 'Financial Advisory',
    desc: 'A premium financial advisory website helping individuals and families explore mutual funds, SIPs, insurance, and financial planning services.',
    outcome: 'Trust-led advisory experience with service discovery, financial calculators, and consultation pathways',
    image: scaleAlphaImg,
    link: 'https://www.scalealpha.in/',
    tech: ['Next.js', 'Tailwind', 'SEO'],
  },
  {
    title: 'Smart SMS',
    cat: 'Our Products',
    type: 'Asalkar Techworks Product',
    industry: 'Business Communication',
    desc: 'An Android-based customer communication platform that automatically sends a customized SMS after incoming, outgoing, missed, or rejected calls, helping businesses respond to every customer interaction.',
    outcome: 'Automated lead follow-ups with contact details, WhatsApp, website, maps, and social links—without additional staff',
    gradient: 'linear-gradient(135deg, #0f4c81 0%, #168aad 48%, #52b69a 100%)',
    icon: <FaSms />,
    link: 'https://www.smartsms.in/',
    actions: [
      { label: 'Visit Website', url: 'https://www.smartsms.in/' },
      { label: 'Get Smart SMS', url: 'https://docs.google.com/forms/d/e/1FAIpQLSe7mEqKNCK9P6vMB2FHS5s4yrGQ0CWDnUK8YXLuxYDRmyRHUA/viewform' },
    ],
    tech: ['Android', 'SMS Automation', 'Lead Follow-up'],
  },
  {
    title: 'Smart Billing System',
    cat: 'Our Products',
    type: 'Asalkar Techworks Product',
    industry: 'Billing & Payments',
    desc: 'A digital billing and invoice management solution that creates professional invoices, generates UPI QR codes, manages customer records, and shares bills through WhatsApp in a single click.',
    outcome: 'Faster, paperless billing with invoice history, multilingual support, organized records, and instant QR-based payments',
    gradient: 'linear-gradient(135deg, #4c1d95 0%, #7c3aed 48%, #c026d3 100%)',
    icon: <FaFileInvoiceDollar />,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLScS30_VZgHCBrvFnvHGfX01aRoPIbmRI8HB6ZBHmVWwQ3mB7A/viewform',
    actions: [
      { label: 'Request Smart Billing', url: 'https://docs.google.com/forms/d/e/1FAIpQLScS30_VZgHCBrvFnvHGfX01aRoPIbmRI8HB6ZBHmVWwQ3mB7A/viewform' },
    ],
    tech: ['Digital Invoicing', 'UPI QR', 'WhatsApp'],
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
  const projectsOnly = allProjects.filter(p => p.cat !== 'Our Products');
  const shown = filter === 'All' ? projectsOnly : projectsOnly.filter(p => p.cat === filter);

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
                    {!p.image && p.icon && (
                      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem', color: '#fff' }}>
                        {p.icon}
                      </div>
                    )}
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
                    {p.actions && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '16px' }}>
                        {p.actions.map(action => (
                          <a
                            key={action.label}
                            href={action.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary-glow hoverable"
                            style={{ padding: '9px 14px', fontSize: '0.82rem' }}
                          >
                            {action.label} <FaExternalLinkAlt style={{ marginLeft: '6px' }} />
                          </a>
                        ))}
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

      <section className="section-pad products-showcase-section">
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <span className="section-label">Our Products</span>
            <h2 className="section-heading">Smart tools built for <span className="gradient-text">growing businesses</span></h2>
            <p className="section-sub">Select a product to see how it works and how it can help your business save time, serve customers, and grow.</p>
          </div>

          <div className="row g-4 mt-4 justify-content-center">
            {productList.map((product, index) => {
              const ProductIcon = product.icon === 'sms' ? FaSms : FaFileInvoiceDollar;
              return (
                <div className="col-lg-5 col-md-6" key={product.slug} data-aos="fade-up" data-aos-delay={index * 100}>
                  <Link to={`/products/${product.slug}`} className="product-showcase-card hoverable">
                    <div className="product-showcase-visual" style={{ background: product.theme }}>
                      {product.image ? <img src={product.image} alt={product.title} /> : <ProductIcon />}
                    </div>
                    <div className="product-showcase-content">
                      <span>{product.category}</span>
                      <h3>{product.title}</h3>
                      <p>{product.summary}</p>
                      <strong>View full product details <FaArrowRight /></strong>
                    </div>
                  </Link>
                </div>
              );
            })}
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
