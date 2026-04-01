import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaGem } from 'react-icons/fa';

const CTASection = ({
  badgeText = "Free consultation included",
  badgeIcon: BadgeIcon = FaGem,
  title = "Ready to build something extraordinary?",
  description = "Schedule a free strategy session and discover how our services can transform your digital presence and drive real growth.",
  primaryBtnText = "Get Free Consultation",
  primaryBtnLink = "/contact",
  primaryBtnIcon: PrimaryBtnIcon = FaArrowRight,
  secondaryBtnText = "View Our Work",
  secondaryBtnLink = "/projects",
  showSecondaryBtn = true,
}) => {
  const renderLink = (to, className, children) => {
    if (to.startsWith('http') || to.startsWith('tel:') || to.startsWith('mailto:')) {
      return <a href={to} className={className}>{children}</a>;
    }
    return <Link to={to} className={className}>{children}</Link>;
  };

  return (
  <section className="svc-cta-section">
    <div className="container">
      <motion.div
        className="svc-cta-card"
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="svc-cta-dots" />
        <div className="svc-cta-orb svc-cta-orb-1" />
        <div className="svc-cta-orb svc-cta-orb-2" />

        <div className="svc-cta-content">
          <motion.div
            className="svc-cta-badge"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <BadgeIcon size={13} style={{ color: '#F59E0B' }} />
            <span>{badgeText}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="svc-cta-heading"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="svc-cta-text"
          >
            {description}
          </motion.p>

          <motion.div
            className="svc-cta-btns"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {renderLink(primaryBtnLink, "svc-cta-btn-primary hoverable", (
              <>{primaryBtnText} <PrimaryBtnIcon size={14} /></>
            ))}
            {showSecondaryBtn && renderLink(secondaryBtnLink, "svc-cta-btn-secondary hoverable", secondaryBtnText)}
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
  );
};

export default CTASection;