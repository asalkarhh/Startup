import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageBanner from '../components/PageBanner';
// import Stats from '../components/Stats';
import TechStackDiagram from '../components/TechStackDiagram';

import saurabh from '../assets/Team/SaurabhAsalkar.jpg';
import sumit from '../assets/Team/SumitAsalkar.jpg';
import saurabhBhedodkar from '../assets/Team/SaurabhBhedodkar.jpg';
import shubham from '../assets/Team/shubhamTakale.jpg';
import aditya from '../assets/Team/aditybhavi.jpg';

import {
  FaCheckCircle,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
  FaDribbble,
  FaBehance,
  FaQuoteLeft,
  FaArrowRight,
  FaEnvelope,
  FaBullseye,
  FaEye,
  FaHandshake,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

/* ═══════════════════════════════════════
   TEAM DATA — Replace image URLs with
   your actual team member photos
   ═══════════════════════════════════════ */
const team = [
  {
    name: 'Saurabh Asalkar',
    role: 'Founder',
    // quote: 'Building digital products that people genuinely love using.',
    initials: 'SA',
    color: '#FF6B35',
    gradient: 'linear-gradient(135deg, #FF6B35, #F59E0B)',
    image: saurabh,
    socials: [
      { icon: FaLinkedinIn, url: 'https://www.linkedin.com/in/saurabh-asalkar/', label: 'LinkedIn' },
      // { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
      // { icon: FaEnvelope, url: 'mailto:alex@Asalkar Techworks.com', label: 'Email' },
    ],
  },
  {
    name: 'Sumit Asalkar',
    role: 'Co-Founder',
    // quote: 'Clean code is not written by following rules — it comes from caring.',
    initials: 'SA',
    color: '#1D6FA5',
    gradient: 'linear-gradient(135deg, #1D6FA5, #60A5FA)',
     image: sumit,
    socials: [
      { icon: FaLinkedinIn, url: 'https://www.linkedin.com/in/sumit-asalkar-1759a5277/', label: 'LinkedIn' },
      // { icon: FaGithub, url: 'https://github.com', label: 'GitHub' },
      // { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
    ],
  },
];

const expertTeam = [
  {
    name: 'Saurabh Bhedodkar',
    role: 'Fullstack Developer',
    initials: 'SB',
    color: '#28A745',
    gradient: 'linear-gradient(135deg, #28A745, #34D399)',
    image: saurabhBhedodkar, // Set to null to show initials fallback, or add a real image import here
    socials: [
      { icon: FaLinkedinIn, url: 'https://linkedin.com', label: 'LinkedIn' },
    ],
  },
  {
    name: 'Shubham Takale',
    role: 'Fullstack Developer',
    initials: 'SC',
    color: '#6F42C1',
    gradient: 'linear-gradient(135deg, #6F42C1, #A78BFA)',
    image: shubham,
    socials: [
      { icon: FaLinkedinIn, url: 'https://www.linkedin.com/in/shubham-takale-504187140/', label: 'LinkedIn' },
    ],
  },
  {
    name: 'Aditya Bhavi',
    role: 'Fullstack Developer',
    initials: 'RB',
    color: '#E83E8C',
    gradient: 'linear-gradient(135deg, #E83E8C, #F472B6)',
    image: aditya,
    socials: [
      { icon: FaLinkedinIn, url: 'https://www.linkedin.com/in/aditya-bhavi/', label: 'LinkedIn' },
    ],
  },
  
];

/* ═══ TEAM MEMBER CARD COMPONENT ═══ */
function TeamMemberCard({ member, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      className="col-lg-4 col-md-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="team-member-card hoverable"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
          boxShadow: isHovered
            ? `0 24px 60px ${member.color}15, 0 8px 24px rgba(0,0,0,0.08)`
            : 'var(--shadow-s)',
          borderColor: isHovered ? `${member.color}30` : 'var(--border)',
        }}
      >
        {/* Accent line top */}
        <div
          className="tmc-accent-top"
          style={{
            background: member.gradient,
            transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
          }}
        />

        {/* Photo section */}
        <div className="tmc-photo-wrapper">
          {/* Background pattern */}
          <div
            className="tmc-photo-bg"
            style={{ background: `${member.color}08` }}
          >
            <div
              className="tmc-photo-dots"
              style={{
                backgroundImage: `radial-gradient(circle, ${member.color} 1px, transparent 1px)`,
              }}
            />
          </div>

          {/* Photo container */}
          <div
            className="tmc-photo-container"
            style={{
              boxShadow: isHovered
                ? `0 12px 36px ${member.color}25`
                : '0 6px 20px rgba(0,0,0,0.1)',
            }}
          >
          {!imgError && member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="tmc-photo"
                onError={() => setImgError(true)}
                style={{
                  transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                }}
              />
            ) : (
              <div
                className="tmc-photo-fallback"
                style={{ background: member.gradient }}
              >
                <span>{member.initials}</span>
              </div>
            )}

            {/* Status indicator */}
            <div className="tmc-status-dot" />
          </div>
        </div>

        {/* Info section */}
        <div className="tmc-info">
          <h4 className="tmc-name">{member.name}</h4>
          <span
            className="tmc-role"
            style={{ color: member.color }}
          >
            {member.role}
          </span>

          {/* Quote (Only render if a quote exists) */}
          {member.quote && (
            <div className="tmc-quote-wrap">
              <FaQuoteLeft
                className="tmc-quote-icon"
                style={{ color: `${member.color}30` }}
              />
              <p className="tmc-quote">{member.quote}</p>
            </div>
          )}

          {/* Bottom social links (always visible, for mobile) */}
          <div className="tmc-social-row">
            {member.socials.map((social, si) => {
              const SocialIcon = social.icon;
              return (
                <a
                  key={si}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="tmc-social-link hoverable"
                  style={{ '--link-color': member.color }}
                >
                  <SocialIcon size={13} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Background glow */}
        <div
          className="tmc-bg-glow"
          style={{
            background: `radial-gradient(circle, ${member.color}08, transparent 70%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />
      </div>
    </motion.div>
  );
}

/* ═══ MAIN ABOUT PAGE ═══ */
const AboutPage = () => (
  <>
    <PageBanner
      title="Asalkar Techworks"
      subtitle="Our story, our team, and the values that drive us forward."
      breadcrumb="About"
    />

    {/* ═══ STORY SECTION ═══ */}
    <section className="section-pad about-story-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
            <span className="section-label">Our Story</span>
            <h2 className="section-heading">
              From Vision to <span className="gradient-text">Reality</span>
            </h2>
            <p className="body-text mb-3">
              Founded in 2019, Asalkar Techworks Digital began as a small team of passionate
              developers and designers who believed that premium digital experiences
              shouldn't be reserved only for Fortune 500 companies.
            </p>
            <p className="body-text">
              Today, we're a full-service agency serving businesses across 20+
              countries, delivering websites, e-commerce platforms, and digital
              marketing strategies that drive real, measurable results.
            </p>
          </div>
          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="100">
            <div className="mvv-card hoverable" style={{ padding: '2.5rem', textAlign: 'left', height: '100%' }}>
              <p className="body-text" style={{ fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                We combine cutting-edge technology with innovative design principles 
                to craft custom solutions tailored to your unique goals. From intuitive 
                user interfaces to robust, scalable backend architectures, our commitment 
                to digital excellence has helped startups and established enterprises 
                alike navigate the complex digital landscape with absolute confidence.
              </p>
              <div className="row g-3">
                {[
                  'Award-winning design team',
                  'Full-stack development',
                  'Data-driven marketing',
                  'Dedicated management',
                ].map((item, i) => (
                  <div className="col-sm-6" key={i}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <FaCheckCircle style={{ color: '#FF6B35', fontSize: '1.1rem', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text)' }}>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mvv-accent" style={{ background: '#FF6B35' }} />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ═══ MISSION / VISION / VALUES ═══ */}
    <section className="section-pad" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <div className="text-center" data-aos="fade-up">
          <span className="section-label">Who We Are</span>
          <h2 className="section-heading">
            Driven by <span className="gradient-text">Purpose</span>
          </h2>
        </div>
        <div className="row g-4 mt-4">
          {[
            { icon: <FaBullseye />, title: 'Our Mission', text: 'Empowering businesses with transformative digital solutions that drive sustainable growth.', color: '#FF6B35' },
            { icon: <FaEye />,      title: 'Our Vision',  text: 'To be the most trusted digital partner for businesses worldwide, setting industry standards.', color: '#1D6FA5' },
            { icon: <FaHandshake />,title: 'Our Values',  text: 'Integrity, innovation, and client success drive everything we do — always exceeding expectations.', color: '#28A745' },
          ].map((v, i) => (
            <div className="col-lg-4 col-md-6" key={i} data-aos="fade-up" data-aos-delay={i * 150}>
              <div className="mvv-card">
                <div className="mvv-icon-wrap" style={{ background: v.color + '15', color: v.color }}>
                  {v.icon}
                </div>
                <h4>{v.title}</h4>
                <p>{v.text}</p>
                <div className="mvv-accent" style={{ background: v.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ OUR TECH STACK SECTION ═══ */}
    <section className="section-pad about-tech-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-2" data-aos="fade-left" data-aos-delay="200">
            <div className="about-content-wrap">
              <span className="section-label">Our Tech</span>
              <h2 className="section-heading">
                The Anatomy of <span className="gradient-text">Our Excellence</span>
              </h2>
              <p className="about-desc">
                We leverage a modern, battle-tested technology stack to build scalable, high-performance digital solutions. Our expertise spans across the most effective frameworks and platforms to ensure your project is built for success and longevity.
              </p>
              <ul className="about-page-checks">
                {[
                  'React & Next.js for lightning-fast UIs',
                  'Node.js & Express for robust backends',
                  'MongoDB & Firebase for scalable data',
                  'Shopify & WooCommerce for e-commerce',
                ].map((item, i) => (
                  <li key={i}>
                    <FaCheckCircle className="check-icon" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-6 order-lg-1" data-aos="fade-right">
            <TechStackDiagram />
          </div>
        </div>
      </div>
    </section>

    {/* ═══ TEAM SECTION ═══ */}
    <section className="team-section-premium">
      <div className="team-bg-shapes">
        <div className="team-bg-orb team-orb-1" />
        <div className="team-bg-orb team-orb-2" />
        <div className="team-dot-pattern" />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Our Team</span>
          </motion.div>

          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Meet the <span className="gradient-text">Experts</span> Behind
            Asalkar Techworks
          </motion.h2>

          <motion.p
            className="section-sub"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A passionate team of strategists, developers, and creatives united by
            one goal — delivering digital excellence for every client.
          </motion.p>
        </div>

        <div className="row g-4 mt-5 justify-content-center">
          {team.map((member, i) => (
            <TeamMemberCard key={i} member={member} index={i} />
          ))}
        </div>

        {/* Expert Team Section */}
        <div className="text-center mt-5 pt-4">
          <motion.h3
            className="section-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            style={{ fontSize: '2rem' }}
          >
            External Technical <span className="gradient-text">Industry Experts</span>
          </motion.h3>
        </div>

        <div className="row g-4 mt-4 justify-content-center">
          {expertTeam.map((member, i) => (
            <TeamMemberCard key={`expert-${i}`} member={member} index={i} />
          ))}
        </div>

        {/* Join the team CTA */}
        <motion.div
          className="team-join-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="tjc-content">
            <div className="tjc-text">
              <h3>Want to join our team?</h3>
              <p>
                We're always looking for talented individuals who share our
                passion for digital excellence.
              </p>
            </div>
            <Link to="/contact" className="btn-primary-glow hoverable">
              View Open Positions <FaArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* <Stats variant="premium" /> */}{/* Commented out — no clients yet */}
  </>
);

export default AboutPage;