import React from 'react';

const CorporateTrust = () => {
  const trustCards = [
    { title: "Registered Private Limited Company", icon: "🏢" },
    { title: "Professional Development Team", icon: "👨‍💻" },
    { title: "Secure Development Practices", icon: "🔒" },
    { title: "Client-Centric Approach", icon: "🤝" },
    { title: "Scalable Technology Solutions", icon: "📈" },
    { title: "Ongoing Technical Support", icon: "⚙️" }
  ];

  return (
    <section className="svc-trust-section section-pad" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-heading mt-2">
            Corporate <span className="gradient-text">Trust & Reliability</span>
          </h2>
        </div>
        <div className="row g-4">
          {trustCards.map((card, idx) => (
            <div className="col-lg-4 col-md-6" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="svc-trust-card hoverable h-100 p-4" style={{ background: 'var(--bg-alt)', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                <div className="stc-icon-wrap mb-3" style={{ fontSize: '2.5rem', color: 'var(--text)' }}>
                  {card.icon}
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--text)' }}>{card.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporateTrust;