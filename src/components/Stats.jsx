import React, { useRef } from 'react';
import CountUp from 'react-countup';
import { useInView, motion } from 'framer-motion';
import { FaSmile, FaProjectDiagram, FaTrophy, FaCoffee } from 'react-icons/fa';

const Stats = ({ variant = 'default' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const stats = [
    { icon: <FaSmile />, end: 100, suffix: '+', label: 'Happy Clients' },
    { icon: <FaProjectDiagram />, end: 200, suffix: '+', label: 'Projects Done' },
    { icon: <FaTrophy />, end: 15, suffix: '+', label: 'Awards Won' },
    { icon: <FaCoffee />, end: 10000, suffix: '+', label: 'Cups of Coffee' },
  ];

  if (variant === 'premium') {
    return (
      <section className="section-pad" ref={ref}>
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
            <div className="row g-4">
              {stats.map((s, i) => (
                <div className="col-lg-3 col-md-6 col-6" key={s.label}>
                  <motion.div
                    className="stat-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  >
                    <div className="stat-icon-wrap">{s.icon}</div>
                    <div className="stat-number">
                      {isInView ? (
                        <CountUp end={s.end} duration={2.5} suffix={s.suffix} separator="," />
                      ) : (
                        <span>0{s.suffix}</span>
                      )}
                    </div>
                    <p className="stat-label">{s.label}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
  }

  return (
    <section className="stats-section" ref={ref}>
      <div className="stats-inner">
        <div className="container">
          <div className="row g-4">
            {stats.map((s, i) => (
              <div className="col-lg-3 col-md-6 col-6" key={s.label} data-aos="zoom-in" data-aos-delay={i * 120}>
                <div className="stat-item">
                  <div className="stat-icon-wrap">{s.icon}</div>
                  <div className="stat-number">
                    {isInView ? (
                      <CountUp end={s.end} duration={2.5} suffix={s.suffix} separator="," />
                    ) : (
                      <span>0{s.suffix}</span>
                    )}
                  </div>
                  <p className="stat-label">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
