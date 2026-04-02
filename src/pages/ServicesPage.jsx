import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import WebDev from "../assets/WebDev.png";
import Ecom from "../assets/E-com.png";
import SEO from "../assets/SEO.png";
import GMaps from "../assets/GMap.png";
import MobileApp from "../assets/App.png";
import Design from "../assets/UI.png";

import {
  FaCode, FaShoppingCart, FaSearchDollar, FaMapMarkedAlt,
  FaMobileAlt, FaPaintBrush, FaArrowRight, FaCheckCircle,
  FaBolt, FaStar, FaExternalLinkAlt, FaRocket,
  FaClipboardCheck, FaCogs, FaShieldAlt,
  FaLayerGroup, FaGem
} from 'react-icons/fa';
import PageBanner from '../components/PageBanner';
import CTASection from '../components/CTASection';

/* ═══════════════════════════════════════
   SERVICE DATA
   ═══════════════════════════════════════ */
const services = [
  {
    icon: FaCode,
    title: 'Website Development',
    tagline: 'Custom-built digital experiences that convert',
    desc: 'We craft high-performance, responsive websites using React, Next.js, and modern frameworks. From corporate sites to complex web applications, our pixel-perfect solutions are built for speed, scalability, and search engine visibility — helping your business stand out online.',
    color: '#FF6B35',
    bg: '#FEF3ED',
    bgDark: '#2A1810',
    gradient: 'linear-gradient(135deg, #FF6B35, #F59E0B)',
    features: [
      'React / Next.js architecture',
      'Custom CMS & admin panels',
      'REST & GraphQL API integration',
      'Performance optimization (Core Web Vitals)',
      'Progressive Web App (PWA) support',
      'Cloud deployment & CI/CD pipelines',
    ],
    highlights: [
      { label: 'Load Time', value: '<1.5s' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Sites Built', value: '120+' },
    ],
    badge: 'Most Popular',
    image: WebDev,
    visual: { emoji: '🖥️', pattern: 'code' },
  },
  {
    icon: FaShoppingCart,
    title: 'E-Commerce Development',
    tagline: 'Online stores that maximize revenue',
    desc: 'Build powerful online stores with seamless checkout experiences, real-time inventory management, and analytics dashboards. We integrate payment gateways, shipping APIs, and marketing tools to create e-commerce platforms that drive conversions and repeat purchases.',
    color: '#1D6FA5',
    bg: '#EFF6FF',
    bgDark: '#0D1D2E',
    gradient: 'linear-gradient(135deg, #1D6FA5, #60A5FA)',
    features: [
      'Shopify & WooCommerce expertise',
      'Custom e-commerce platforms',
      'Multi-gateway payment integration',
      'Real-time inventory management',
      'Order tracking & notifications',
      'Multi-currency & tax compliance',
    ],
    highlights: [
      { label: 'Conversion', value: '+280%' },
      { label: 'Revenue Lift', value: '3.5x' },
      { label: 'Stores Built', value: '80+' },
    ],
    badge: 'High ROI',
    image: Ecom,
    visual: { emoji: '🛒', pattern: 'shop' },
  },
  {
    icon: FaSearchDollar,
    title: 'SEO Optimization',
    tagline: 'Dominate search results organically',
    desc: 'Our data-driven SEO strategies put you on the first page of Google using sustainable, white-hat techniques. From technical audits and keyword research to content strategy and link building — we optimize every aspect of your digital presence for maximum organic visibility.',
    color: '#28A745',
    bg: '#F0FDF4',
    bgDark: '#0D2818',
    gradient: 'linear-gradient(135deg, #28A745, #34D399)',
    features: [
      'Comprehensive technical SEO audit',
      'Advanced keyword research & mapping',
      'On-page & off-page optimization',
      'Authority link building campaigns',
      'Content strategy & optimization',
      'Monthly analytics & reporting',
    ],
    highlights: [
      { label: 'Page 1 Rate', value: '94%' },
      { label: 'Traffic Growth', value: '+340%' },
      { label: 'Keywords Ranked', value: '2K+' },
    ],
    badge: 'Proven Results',
    image: SEO,
    visual: { emoji: '📊', pattern: 'chart' },
  },
  {
    icon: FaMapMarkedAlt,
    title: 'Google Business & Maps',
    tagline: 'Be the #1 result in your local area',
    desc: 'Dominate local search results with expertly optimized Google Business profiles, strategic review management, and Maps ranking techniques. We help brick-and-mortar businesses get found by nearby customers searching for their services — driving foot traffic and phone calls.',
    color: '#6F42C1',
    bg: '#F5F3FF',
    bgDark: '#1A1030',
    gradient: 'linear-gradient(135deg, #6F42C1, #A78BFA)',
    features: [
      'Google Business Profile optimization',
      'Review generation & management',
      'Local citation building (NAP)',
      'Google Maps ranking strategy',
      'Competitor analysis & benchmarking',
      'Local SEO integration & reporting',
    ],
    highlights: [
      { label: 'Map Pack Rate', value: '91%' },
      { label: 'Calls Increase', value: '+250%' },
      { label: 'Businesses Ranked', value: '150+' },
    ],
    badge: 'Local Leader',
    image: GMaps,
    visual: { emoji: '📍', pattern: 'map' },
  },
  {
    icon: FaMobileAlt,
    title: 'Mobile App Development',
    tagline: 'Native experiences on every device',
    desc: 'Build native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android. From concept to App Store launch, our team handles UI/UX design, development, testing, and ongoing maintenance — ensuring your app delights users and drives engagement.',
    color: '#E83E8C',
    bg: '#FDF2F8',
    bgDark: '#2A1020',
    gradient: 'linear-gradient(135deg, #E83E8C, #F472B6)',
    features: [
      'React Native cross-platform development',
      'iOS & Android native builds',
      'UI/UX mobile-first design',
      'App Store & Play Store optimization',
      'Push notifications & analytics',
      'Offline-first architecture & sync',
    ],
    highlights: [
      { label: 'App Rating', value: '4.8★' },
      { label: 'Downloads', value: '500K+' },
      { label: 'Apps Launched', value: '35+' },
    ],
    badge: 'Cross-Platform',
    image: MobileApp,
    visual: { emoji: '📱', pattern: 'mobile' },
  },
  {
    icon: FaPaintBrush,
    title: 'UI/UX Design',
    tagline: 'Interfaces users fall in love with',
    desc: 'Our design team creates stunning, intuitive interfaces through deep user research, wireframing, prototyping, and usability testing. We build comprehensive design systems that ensure consistency across all touchpoints — transforming complex workflows into delightful user journeys.',
    color: '#F59E0B',
    bg: '#FFFBEB',
    bgDark: '#2A2008',
    gradient: 'linear-gradient(135deg, #F59E0B, #FBBF24)',
    features: [
      'User research & persona development',
      'Wireframing & interactive prototyping',
      'Visual design & brand systems',
      'Component-based design systems',
      'Usability testing & iteration',
      'Accessibility (WCAG) compliance',
    ],
    highlights: [
      { label: 'User Satisfaction', value: '97%' },
      { label: 'Conversion Lift', value: '+180%' },
      { label: 'Projects Done', value: '90+' },
    ],
    badge: 'Award Winning',
    image: Design,
    visual: { emoji: '🎨', pattern: 'design' },
  },
];

const processSteps = [
  {
    icon: FaClipboardCheck,
    step: '01',
    title: 'Discovery & Strategy',
    desc: 'Deep dive into your goals, audience, and competitive landscape to build a winning roadmap.',
    color: '#FF6B35',
  },
  {
    icon: FaCogs,
    step: '02',
    title: 'Design & Prototype',
    desc: 'Craft pixel-perfect designs and interactive prototypes for your review and approval.',
    color: '#1D6FA5',
  },
  {
    icon: FaCode,
    step: '03',
    title: 'Build & Test',
    desc: 'Develop with clean, tested, production-ready code following industry best practices.',
    color: '#28A745',
  },
  {
    icon: FaRocket,
    step: '04',
    title: 'Launch & Scale',
    desc: 'Deploy, monitor performance, and provide ongoing optimization and support.',
    color: '#6F42C1',
  },
];

/* ═══════════════════════════════════════
   SERVICE VISUAL PREVIEW (Image/Visual Side)
   Blurs on hover → reveals feature list
   ═══════════════════════════════════════ */
function ServiceVisual({ service, isHovered }) {
  const IconComponent = service.icon;
  const [imgError, setImgError] = useState(false);

  return (
    <div className="sv-wrapper">
      {/* Base visual layer */}
      <div className="sv-base-layer">
        {!imgError ? (
          <img
            src={service.image}
            alt={service.title}
            onError={() => setImgError(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
              transition: 'all 0.55s cubic-bezier(0.22, 1, 0.36, 1)',
              filter: isHovered ? 'blur(14px)' : 'blur(0px)',
              transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            }}
          />
        ) : (
          <div
            className="sv-gradient-bg"
            style={{
              background: `linear-gradient(145deg, ${service.bg}, #fff)`,
              filter: isHovered ? 'blur(14px)' : 'blur(0px)',
              transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            }}
          >
            {/* Dot pattern */}
            <div
              className="sv-dot-pattern"
              style={{
                backgroundImage: `radial-gradient(circle, ${service.color} 1px, transparent 1px)`,
              }}
            />
            {/* Central icon as fallback */}
            <div className="sv-center-content">
              <div
                className="sv-icon-box"
                style={{
                  background: service.gradient,
                  boxShadow: `0 16px 48px ${service.color}30`,
                }}
              >
                <IconComponent size={40} style={{ color: '#fff' }} />
              </div>
              <h4 className="sv-visual-title">{service.title}</h4>
              <p className="sv-visual-tagline">{service.tagline}</p>
            </div>
          </div>
        )}

        {/* Dark overlay on hover */}
        <div
          className="sv-dark-overlay"
          style={{
            background: `linear-gradient(180deg, ${service.color}CC 0%, ${service.color}99 40%, rgba(0,0,0,0.8) 100%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* Bottom gradient for readability */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '50%',
            background: isHovered
              ? 'transparent'
              : 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
            transition: 'background 0.4s ease',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />

        {/* Bottom label (visible when NOT hovered) */}
        <div
          className="sv-bottom-label"
          style={{
            opacity: isHovered ? 0 : 1,
            transform: isHovered ? 'translateY(10px)' : 'translateY(0)',
            zIndex: 3,
          }}
        >
          <div className="sv-bl-icon" style={{ background: 'rgba(255,255,255,0.15)' }}>
            <IconComponent size={18} style={{ color: '#fff' }} />
          </div>
          <div>
            <div className="sv-bl-title">{service.title}</div>
            <div className="sv-bl-tag">{service.tagline}</div>
          </div>
        </div>
      </div>

      {/* Feature overlay (visible on hover) */}
      <div
        className="sv-feature-overlay"
        style={{
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? 'translateY(0)' : 'translateY(14px)',
          pointerEvents: isHovered ? 'auto' : 'none',
          zIndex: 4,
        }}
      >
        <div className="sv-fo-header">
          <div className="sv-fo-icon-wrap">
            <FaBolt size={12} style={{ color: '#fff' }} />
          </div>
          <span>Key Capabilities</span>
        </div>

        <div className="sv-fo-list">
          {service.features.map((feat, fi) => (
            <motion.div
              key={feat}
              className="sv-fo-item"
              initial={{ opacity: 0, x: 18 }}
              animate={
                isHovered
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 18 }
              }
              transition={{
                delay: isHovered ? 0.06 + fi * 0.06 : 0,
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <FaCheckCircle
                size={14}
                style={{ color: '#fff', flexShrink: 0, opacity: 0.9 }}
              />
              <span>{feat}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   MAIN SERVICES PAGE
   ═══════════════════════════════════════ */
export default function ServicesPage() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [hoveredVisualIdx, setHoveredVisualIdx] = useState(null);

  return (
    <>
      <PageBanner
        title="Our Services"
        subtitle="Comprehensive digital solutions crafted with precision, powered by innovation."
        breadcrumb="Services"
      />

      {/* ═══ HERO INTRO SECTION ═══ */}
      <section className="services-hero-intro">
        <div className="shi-orb shi-orb-1" />
        <div className="shi-orb shi-orb-2" />
        <div className="shi-dot-bg" />

        <div className="container" style={{ position: 'relative', zIndex: 5 }}>
          <div className="shi-content">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="section-label">What We Offer</span>
            </motion.div>

            <motion.h2
              className="shi-heading"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              Services that{' '}
              <span className="gradient-text">transform</span>{' '}
              your digital presence
            </motion.h2>

            <motion.p
              className="shi-sub"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              From concept to launch and beyond — we deliver end-to-end digital solutions
              that drive measurable business growth and lasting competitive advantage.
            </motion.p>

            <motion.div
              className="shi-btns"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/contact" className="btn-primary-glow hoverable">
                Start a Project <FaGem style={{ fontSize: 14 }} />
              </Link>
              <Link to="/projects" className="shi-outline-btn hoverable">
                View Portfolio
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICE CARDS ═══ */}
      <section className="services-cards-section">
        <div className="container">
          <div className="scs-list">
            {services.map((service, i) => {
              const isH = hoveredIdx === i;
              const isEven = i % 2 === 0;
              const IconComp = service.icon;

              return (
                <motion.div
                  key={service.title}
                  className="scs-card"
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{
                    delay: 0.1,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  style={{
                    transform: isH ? 'translateY(-6px)' : 'translateY(0)',
                    boxShadow: isH
                      ? `0 24px 60px ${service.color}12, 0 8px 24px rgba(0,0,0,0.06)`
                      : 'var(--shadow-s)',
                    borderColor: isH ? `${service.color}30` : 'var(--border)',
                  }}
                >
                  {/* Top accent line */}
                  <div
                    className="scs-accent-line"
                    style={{
                      background: service.gradient,
                      transform: isH ? 'scaleX(1)' : 'scaleX(0)',
                      transformOrigin: isEven ? 'left' : 'right',
                    }}
                  />

                  {/* Background glow */}
                  <div
                    className="scs-bg-glow"
                    style={{
                      [isEven ? 'right' : 'left']: -80,
                      background: `radial-gradient(circle, ${service.color}08, transparent 70%)`,
                      opacity: isH ? 1 : 0,
                    }}
                  />

                  <div
                    className={`scs-card-inner ${isEven ? '' : 'scs-reversed'}`}
                  >
                    {/* ── TEXT SIDE ── */}
                    <div className="scs-text-side">
                      {/* Badge */}
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="scs-badge"
                        style={{
                          background: service.bg,
                          borderColor: `${service.color}20`,
                        }}
                      >
                        <FaStar
                          size={10}
                          style={{ color: service.color }}
                        />
                        <span style={{ color: service.color }}>
                          {service.badge}
                        </span>
                      </motion.div>

                      {/* Icon + Title */}
                      <div className="scs-title-row">
                        <div
                          className="scs-icon-box"
                          style={{
                            background: isH ? service.gradient : service.bg,
                            boxShadow: isH
                              ? `0 10px 28px ${service.color}25`
                              : 'none',
                          }}
                        >
                          <IconComp
                            size={24}
                            style={{
                              color: isH ? '#fff' : service.color,
                              transition: 'color 0.3s ease',
                            }}
                          />
                        </div>
                        <div>
                          <h3
                            className="scs-service-title"
                            style={{
                              color: isH ? service.color : 'var(--text)',
                            }}
                          >
                            {service.title}
                          </h3>
                          <p className="scs-service-tagline">{service.tagline}</p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="scs-service-desc">{service.desc}</p>

                      {/* Highlight stats */}
                      <div className="scs-highlights">
                        {service.highlights.map((h) => (
                          <div
                            key={h.label}
                            className="scs-highlight-item"
                            style={{
                              background: service.bg,
                              borderColor: `${service.color}12`,
                            }}
                          >
                            <div
                              className="scs-hi-value"
                              style={{ color: service.color }}
                            >
                              {h.value}
                            </div>
                            <div className="scs-hi-label">{h.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* CTAs */}
                      <div className="scs-ctas">
                        <Link
                          to="/contact"
                          className="scs-cta-primary hoverable"
                          style={{
                            background: service.gradient,
                            boxShadow: `0 6px 20px ${service.color}25`,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-3px)';
                            e.currentTarget.style.boxShadow = `0 10px 32px ${service.color}35`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = `0 6px 20px ${service.color}25`;
                          }}
                        >
                          Get Started <FaArrowRight size={13} />
                        </Link>
                        <button
                          className="scs-cta-secondary hoverable"
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = service.color;
                            e.currentTarget.style.color = service.color;
                            e.currentTarget.style.transform = 'translateY(-2px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'var(--border)';
                            e.currentTarget.style.color = 'var(--text-2)';
                            e.currentTarget.style.transform = 'translateY(0)';
                          }}
                        >
                          Learn More <FaExternalLinkAlt size={12} />
                        </button>
                      </div>
                    </div>

                    {/* ── VISUAL SIDE ── */}
                    <div
                      className="scs-visual-side"
                      onMouseEnter={() => setHoveredVisualIdx(i)}
                      onMouseLeave={() => setHoveredVisualIdx(null)}
                    >
                      <ServiceVisual
                        service={service}
                        isHovered={hoveredVisualIdx === i}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS SECTION ═══ */}
      <section className="svc-process-section">
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-label">Our Process</span>
            </motion.div>
            <motion.h2
              className="section-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              How We <span className="gradient-text">Deliver</span> Results
            </motion.h2>
            <motion.p
              className="section-sub"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              A proven, streamlined process refined over hundreds of successful projects.
            </motion.p>
          </div>

          <div className="row g-4 mt-4">
            {processSteps.map((step, i) => {
              const StepIcon = step.icon;
              return (
                <div className="col-lg-3 col-md-6" key={i}>
                  <motion.div
                    className="svc-process-card hoverable"
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.6 }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.boxShadow = `0 20px 50px ${step.color}12`;
                      e.currentTarget.style.borderColor = `${step.color}30`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-s)';
                      e.currentTarget.style.borderColor = 'var(--border)';
                    }}
                  >
                    <div className="spc-step-num" style={{ color: `${step.color}15` }}>
                      {step.step}
                    </div>
                    <div
                      className="spc-icon-wrap"
                      style={{ background: `${step.color}10`, color: step.color }}
                    >
                      <StepIcon size={22} />
                    </div>
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                    {i < processSteps.length - 1 && (
                      <div className="spc-connector" style={{ background: `${step.color}20` }} />
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ WHY OUR SERVICES ═══ */}
      <section className="svc-trust-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 50 }}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-label">Why Asalkar Techworks</span>
            </motion.div>
            <motion.h2
              className="section-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Built for real businesses, not demos
            </motion.h2>
          </div>

          <div className="row g-4">
            {[
              {
                icon: FaBolt,
                title: 'Production Ready',
                desc: 'Battle-tested solutions handling real traffic and real transactions. Not prototypes — real systems that perform.',
                color: '#FF6B35',
              },
              {
                icon: FaLayerGroup,
                title: 'Full-Stack Expertise',
                desc: 'Frontend to backend, design to deployment. One team, complete ownership, zero communication gaps.',
                color: '#1D6FA5',
              },
              {
                icon: FaShieldAlt,
                title: 'Scales With You',
                desc: 'From startup to enterprise. Our solutions grow with your business — no expensive rewrites needed.',
                color: '#28A745',
              },
            ].map((item, i) => {
              const TrustIcon = item.icon;
              return (
                <div className="col-lg-4 col-md-6" key={i}>
                  <motion.div
                    className="svc-trust-card hoverable"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.5 }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-6px)';
                      e.currentTarget.style.boxShadow = `0 18px 45px ${item.color}10`;
                      e.currentTarget.style.borderColor = `${item.color}25`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-s)';
                      e.currentTarget.style.borderColor = 'var(--border)';
                    }}
                  >
                    <div
                      className="stc-icon-wrap"
                      style={{ background: `${item.color}10`, color: item.color }}
                    >
                      <TrustIcon size={24} />
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}