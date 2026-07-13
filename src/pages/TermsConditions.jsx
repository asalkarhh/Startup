import React from 'react';

const TermsConditions = () => {
  return (
    <main className="page-transition-wrapper">
      <section className="page-banner">
        <div className="pb-orb pb-orb-1"></div>
        <div className="pb-orb pb-orb-2"></div>
        <div className="container">
          <div className="pb-content" data-aos="fade-up">
            <span className="pb-breadcrumb">
              <a href="/">Home</a> / <span>Terms & Conditions</span>
            </span>
            <h1>Terms & Conditions</h1>
            <p>Please read these terms carefully before using our services.</p>
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-center">
            <div className="col-lg-10" style={{ color: 'var(--text)', lineHeight: '1.8' }}>
              <h2>1. Terms</h2>
              <p>By accessing the website of Asalkar Techworks Private Limited, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
              <h2 className="mt-4">2. Use License</h2>
              <p>Permission is granted to temporarily download one copy of the materials on Asalkar Techworks Private Limited's website for personal, non-commercial transitory viewing only.</p>
              <h2 className="mt-4">3. Disclaimer</h2>
              <p>The materials on Asalkar Techworks Private Limited's website are provided on an 'as is' basis. Asalkar Techworks Private Limited makes no warranties, expressed or implied, and hereby disclaims all other warranties.</p>
              <h2 className="mt-4">4. Governing Law</h2>
              <p>These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsConditions;
