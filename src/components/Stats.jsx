import React from 'react';
import CountUp from 'react-countup';
import { FaSmile, FaProjectDiagram, FaTrophy, FaCoffee } from 'react-icons/fa';

const Stats = () => {
  const stats = [
    { icon: <FaSmile />, end: 100, suffix: '+', label: 'Happy Clients' },
    { icon: <FaProjectDiagram />, end: 200, suffix: '+', label: 'Projects Done' },
    { icon: <FaTrophy />, end: 15, suffix: '+', label: 'Awards Won' },
    { icon: <FaCoffee />, end: 10000, suffix: '+', label: 'Cups of Coffee' },
  ];

  return (
    <section className="stats-section">
      <div className="stats-inner">
        <div className="container">
          <div className="row g-4">
            {stats.map((s, i) => (
              <div className="col-lg-3 col-md-6 col-6" key={i} data-aos="zoom-in" data-aos-delay={i * 120}>
                <div className="stat-item">
                  <div className="stat-icon-wrap">{s.icon}</div>
                  <div className="stat-number">
                    <CountUp end={s.end} duration={3} suffix={s.suffix} enableScrollSpy scrollSpyOnce />
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