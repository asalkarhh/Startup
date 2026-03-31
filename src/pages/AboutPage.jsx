import React from 'react';
import PageBanner from '../components/PageBanner';
import Stats from '../components/Stats';
import CTASection from '../components/CTASection';
import { FaCheckCircle, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const team = [
  { name: 'Alex Carter', role: 'CEO & Founder', initials: 'AC', color: '#FF6B35' },
  { name: 'Maya Singh', role: 'Lead Developer', initials: 'MS', color: '#1D6FA5' },
  { name: 'Jordan Lee', role: 'UI/UX Designer', initials: 'JL', color: '#28A745' },
  { name: 'Sophia Chen', role: 'SEO Strategist', initials: 'SC', color: '#6F42C1' },
  { name: 'Ryan Brooks', role: 'Project Manager', initials: 'RB', color: '#E83E8C' },
  { name: 'Emma Davis', role: 'Marketing Lead', initials: 'ED', color: '#FFC107' },
];

const timeline = [
  { year: '2019', title: 'Founded', text: 'NexaByte was born with a mission to democratize premium web development.' },
  { year: '2020', title: 'First 50 Clients', text: 'Expanded our team and reached our first major milestone in record time.' },
  { year: '2021', title: 'E-Commerce Division', text: 'Launched our dedicated e-commerce vertical, serving online retailers worldwide.' },
  { year: '2022', title: 'SEO Mastery', text: 'Our SEO team helped 60+ businesses achieve first-page Google rankings.' },
  { year: '2023', title: '100+ Clients', text: 'Crossed the 100-client milestone with a 99% satisfaction rate.' },
  { year: '2024', title: 'Global Expansion', text: 'Opened remote offices serving clients across 20+ countries worldwide.' },
];

const AboutPage = () => (
  <>
    <PageBanner title="About NexaByte" subtitle="Our story, our team, and the values that drive us forward." breadcrumb="About" />

    {/* Story Section */}
    <section className="section-pad about-story-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-right">
            <span className="section-label">Our Story</span>
            <h2 className="section-heading">
              From Vision to <span className="gradient-text">Reality</span>
            </h2>
            <p className="body-text">
              Founded in 2019, NexaByte Digital began as a small team of passionate
              developers and designers who believed that premium digital experiences
              shouldn't be reserved only for Fortune 500 companies.
            </p>
            <p className="body-text">
              Today, we're a full-service agency serving businesses across 20+ countries,
              delivering websites, e-commerce platforms, and digital marketing strategies
              that drive real, measurable results.
            </p>
            <ul className="about-page-checks">
              {['Award-winning design team', 'Full-stack development expertise', 'Data-driven marketing strategies', 'Dedicated project management'].map((item, i) => (
                <li key={i}><FaCheckCircle className="check-icon" />{item}</li>
              ))}
            </ul>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="timeline-wrap">
              {timeline.map((t, i) => (
                <div className="timeline-item" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                  <div className="tl-year">{t.year}</div>
                  <div className="tl-content">
                    <h4>{t.title}</h4>
                    <p>{t.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Team Section */}
    <section className="section-pad team-section bg-alt">
      <div className="container">
        <div className="text-center" data-aos="fade-up">
          <span className="section-label">Our Team</span>
          <h2 className="section-heading">
            Meet the <span className="gradient-text">Experts</span>
          </h2>
          <p className="section-sub">Talented individuals united by passion for digital excellence.</p>
        </div>

        <div className="row g-4 mt-4">
          {team.map((m, i) => (
            <div className="col-lg-4 col-md-6" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="team-card hoverable">
                <div className="tc-face tc-face2" style={{ background: `linear-gradient(135deg, ${m.color}, ${m.color}dd)` }}>
                  <div className="tc-initials-large">{m.initials}</div>
                </div>
                <div className="tc-face tc-face1">
                  <div className="tc-info">
                    <div className="tc-avatar" style={{ background: m.color }}>{m.initials}</div>
                    <h4>{m.name}</h4>
                    <span className="tc-role">{m.role}</span>
                    <div className="tc-socials">
                      <a href="#!" aria-label="LinkedIn"><FaLinkedinIn /></a>
                      <a href="#!" aria-label="Twitter"><FaTwitter /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Stats />
    <CTASection />
  </>
);

export default AboutPage;