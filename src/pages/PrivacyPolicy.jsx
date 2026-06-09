import React from 'react';

const PrivacyPolicy = () => {
  return (
    <main className="page-transition-wrapper">
      <section className="page-banner">
        <div className="pb-orb pb-orb-1"></div>
        <div className="pb-orb pb-orb-2"></div>
        <div className="container">
          <div className="pb-content" data-aos="fade-up">
            <span className="pb-breadcrumb">
              <a href="/">Home</a> / <span>Privacy Policy</span>
            </span>
            <h1>Privacy Policy</h1>
            <p>Your privacy is critically important to us.</p>
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-center">
            <div className="col-lg-10" style={{ color: 'var(--text)', lineHeight: '1.8' }}>
              <h2>1. Information We Collect</h2>
              <p>Asalkar Techwork Private Limited ("we", "us", or "our") operates this website. We collect information to provide better services to all our users, including basic personal information when you contact us.</p>
              <h2 className="mt-4">2. How We Use Information</h2>
              <p>We use the information we collect to operate, maintain, and improve our services, as well as to communicate with you about your projects and our offerings.</p>
              <h2 className="mt-4">3. Data Security</h2>
              <p>We restrict access to your personal information to Asalkar Techwork Private Limited employees and contractors who need that information to operate, develop, or improve our services.</p>
              <h2 className="mt-4">4. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at asalkartechworks@gmail.com.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;