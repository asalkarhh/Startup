import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageBanner from '../components/PageBanner';
// import Stats from '../components/Stats';

import saurabh from '../assets/Team/SaurabhAsalkar.jpg';
import sumit from '../assets/Team/SumitAsalkar.jpg';
import saurabhBhedodkar from '../assets/Team/SaurabhBhedodkar.jpg';

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
    role: 'Project Manager',
    quote: 'Building digital products that people genuinely love using.',
    initials: 'SA',
    color: '#FF6B35',
    gradient: 'linear-gradient(135deg, #FF6B35, #F59E0B)',
    image: saurabh,
    socials: [
      { icon: FaLinkedinIn, url: 'https://linkedin.com', label: 'LinkedIn' },
      { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
      { icon: FaEnvelope, url: 'mailto:alex@Asalkar Techworks.com', label: 'Email' },
    ],
  },
  {
    name: 'Sumit Asalkar',
    role: 'Full Stack Developer',
    quote: 'Clean code is not written by following rules — it comes from caring.',
    initials: 'SA',
    color: '#1D6FA5',
    gradient: 'linear-gradient(135deg, #1D6FA5, #60A5FA)',
     image: sumit,
    socials: [
      { icon: FaLinkedinIn, url: 'https://linkedin.com', label: 'LinkedIn' },
      { icon: FaGithub, url: 'https://github.com', label: 'GitHub' },
      { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
    ],
  },
  {
    name: 'Saurabh Bhedodkar',
    role: 'Backend Developer',
    quote: 'Design is intelligence made visible — every pixel tells a story.',
    initials: 'SB',
    color: '#28A745',
    gradient: 'linear-gradient(135deg, #28A745, #34D399)',
    image: saurabhBhedodkar,
    socials: [
      { icon: FaDribbble, url: 'https://dribbble.com', label: 'Dribbble' },
      { icon: FaBehance, url: 'https://behance.net', label: 'Behance' },
      { icon: FaLinkedinIn, url: 'https://linkedin.com', label: 'LinkedIn' },
    ],
  },
  // {
  //   name: 'Sophia Chen',
  //   role: 'SEO & Marketing Strategist',
  //   quote: 'Data doesn\'t lie — let the numbers guide every marketing decision.',
  //   initials: 'SC',
  //   color: '#6F42C1',
  //   gradient: 'linear-gradient(135deg, #6F42C1, #A78BFA)',
  //   image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
  //   socials: [
  //     { icon: FaLinkedinIn, url: 'https://linkedin.com', label: 'LinkedIn' },
  //     { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
  //     { icon: FaInstagram, url: 'https://instagram.com', label: 'Instagram' },
  //   ],
  // },
  // {
  //   name: 'Ryan Brooks',
  //   role: 'Project Manager',
  //   quote: 'On-time delivery isn\'t luck — it\'s discipline and communication.',
  //   initials: 'RB',
  //   color: '#E83E8C',
  //   gradient: 'linear-gradient(135deg, #E83E8C, #F472B6)',
  //   image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
  //   socials: [
  //     { icon: FaLinkedinIn, url: 'https://linkedin.com', label: 'LinkedIn' },
  //     { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
  //     { icon: FaEnvelope, url: 'mailto:ryan@Asalkar Techworks.com', label: 'Email' },
  //   ],
  // },
  // {
  //   name: 'Emma Davis',
  //   role: 'Creative Director',
  //   quote: 'Great branding is the art of making people feel something real.',
  //   initials: 'ED',
  //   color: '#F59E0B',
  //   gradient: 'linear-gradient(135deg, #F59E0B, #FBBF24)',
  //   image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
  //   socials: [
  //     { icon: FaInstagram, url: 'https://instagram.com', label: 'Instagram' },
  //     { icon: FaDribbble, url: 'https://dribbble.com', label: 'Dribbble' },
  //     { icon: FaLinkedinIn, url: 'https://linkedin.com', label: 'LinkedIn' },
  //   ],
  // },
];

const timeline = [
  {
    year: '2019',
    title: 'Founded',
    text: 'Asalkar Techworks was born with a mission to democratize premium web development.',
  },
  /* Commented out — no past clients yet; re-enable once milestones are real
  {
    year: '2020',
    title: 'First 50 Clients',
    text: 'Expanded our team and reached our first major milestone in record time.',
  },
  */
  {
    year: '2021',
    title: 'E-Commerce Division',
    text: 'Launched our dedicated e-commerce vertical, serving retailers worldwide.',
  },
  /* Commented out — no past clients yet; re-enable once milestones are real
  {
    year: '2022',
    title: 'SEO Mastery',
    text: 'Helped 60+ businesses achieve first-page Google rankings consistently.',
  },
  {
    year: '2023',
    title: '100+ Clients',
    text: 'Crossed the 100-client milestone with a 99% satisfaction rate.',
  },
  */
  {
    year: '2024',
    title: 'Global Expansion',
    text: 'Opened remote offices serving clients across 20+ countries worldwide.',
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

          {/* Quote */}
          <div className="tmc-quote-wrap">
            <FaQuoteLeft
              className="tmc-quote-icon"
              style={{ color: `${member.color}30` }}
            />
            <p className="tmc-quote">{member.quote}</p>
          </div>

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
          <div className="col-lg-6" data-aos="fade-right">
            <span className="section-label">Our Story</span>
            <h2 className="section-heading">
              From Vision to <span className="gradient-text">Reality</span>
            </h2>
            <p className="body-text">
              Founded in 2019, Asalkar Techworks Digital began as a small team of passionate
              developers and designers who believed that premium digital experiences
              shouldn't be reserved only for Fortune 500 companies.
            </p>
            <p className="body-text">
              Today, we're a full-service agency serving businesses across 20+
              countries, delivering websites, e-commerce platforms, and digital
              marketing strategies that drive real, measurable results.
            </p>
            <ul className="about-page-checks">
              {[
                'Award-winning design team',
                'Full-stack development expertise',
                'Data-driven marketing strategies',
                'Dedicated project management',
              ].map((item, i) => (
                <li key={i}>
                  <FaCheckCircle className="check-icon" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="timeline-wrap">
              {timeline.map((t, i) => (
                <div
                  className="timeline-item"
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
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

        <div className="row g-4 mt-5">
          {team.map((member, i) => (
            <TeamMemberCard key={i} member={member} index={i} />
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