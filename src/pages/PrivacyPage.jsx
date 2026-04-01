import React from 'react';
import { motion } from 'framer-motion';
import PageBanner from '../components/PageBanner';
import { FaShieldAlt, FaLock, FaUserShield, FaDatabase, FaCookieBite, FaEnvelope } from 'react-icons/fa';

const sections = [
  {
    icon: FaShieldAlt,
    title: '1. Information We Collect',
    content: [
      {
        subtitle: 'Personal Information',
        text: 'When you contact us, request a quote, or use our services, we may collect personal information including your name, email address, phone number, company name, and job title. This information is provided voluntarily when you fill out forms on our website or communicate with us directly.',
      },
      {
        subtitle: 'Usage Data',
        text: 'We automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, pages viewed, time spent on pages, and other diagnostic data. This data helps us understand how visitors interact with our website and improve our services.',
      },
      {
        subtitle: 'Cookies & Tracking',
        text: 'We use cookies and similar tracking technologies to monitor activity on our website and store certain information. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. Please see our Cookie Policy for detailed information.',
      },
    ],
  },
  {
    icon: FaDatabase,
    title: '2. How We Use Your Information',
    content: [
      {
        subtitle: 'Service Delivery',
        text: 'We use your personal information to provide, maintain, and improve our services, process transactions, send related communications, and respond to your inquiries and requests. Your data enables us to deliver personalized experiences and tailor our solutions to your needs.',
      },
      {
        subtitle: 'Communication',
        text: 'We may use your email address to send newsletters, marketing materials, and updates about our services. You can opt out of marketing communications at any time by clicking the unsubscribe link in any email or contacting us directly.',
      },
      {
        subtitle: 'Analytics & Improvement',
        text: 'Usage data is analyzed to understand trends, administer the website, track user movements, and gather demographic information. This helps us improve our website functionality, user experience, and service offerings.',
      },
    ],
  },
  {
    icon: FaLock,
    title: '3. Data Protection & Security',
    content: [
      {
        subtitle: 'Security Measures',
        text: 'We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. This includes SSL encryption, secure servers, access controls, and regular security audits.',
      },
      {
        subtitle: 'Data Retention',
        text: 'We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. When data is no longer needed, it is securely deleted or anonymized.',
      },
    ],
  },
  {
    icon: FaUserShield,
    title: '4. Your Rights & Choices',
    content: [
      {
        subtitle: 'Access & Correction',
        text: 'You have the right to access, update, or delete your personal information at any time. You may also request a copy of the personal data we hold about you. We will respond to such requests within 30 business days.',
      },
      {
        subtitle: 'Opt-Out Rights',
        text: 'You may opt out of receiving marketing communications, refuse cookies, or request that we stop processing your data for certain purposes. Please note that opting out of certain data processing may impact our ability to provide some services.',
      },
      {
        subtitle: 'GDPR Compliance',
        text: 'For users in the European Economic Area (EEA), we comply with the General Data Protection Regulation (GDPR). You have the right to data portability, the right to be forgotten, and the right to lodge a complaint with a supervisory authority.',
      },
    ],
  },
  {
    icon: FaCookieBite,
    title: '5. Third-Party Services',
    content: [
      {
        subtitle: 'Service Providers',
        text: 'We may employ third-party companies and individuals to facilitate our services, provide services on our behalf, perform service-related activities, or assist us in analyzing how our services are used. These third parties have access to your personal data only to perform these tasks and are obligated not to disclose or use it for any other purpose.',
      },
      {
        subtitle: 'Analytics Partners',
        text: 'We use Google Analytics and similar tools to monitor and analyze website traffic. These services may collect information about your use of our website and report website trends without identifying individual visitors. You can opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on.',
      },
    ],
  },
  {
    icon: FaEnvelope,
    title: '6. Contact Us',
    content: [
      {
        subtitle: 'Questions About This Policy',
        text: 'If you have any questions about this Privacy Policy, your personal data, or would like to exercise any of your data protection rights, please contact us at privacy@nexabyte.com or call us at +1 (555) 123-4567. Our Data Protection Officer will respond within 30 business days.',
      },
    ],
  },
];

const PrivacyPage = () => (
  <>
    <PageBanner
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your personal information."
      breadcrumb="Privacy Policy"
    />

    <section className="legal-page-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Last updated notice */}
            <motion.div
              className="legal-updated-notice"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <FaShieldAlt className="lun-icon" />
              <div>
                <strong>Last Updated:</strong> January 15, 2025
                <span className="lun-sep">•</span>
                <strong>Effective Date:</strong> January 15, 2025
              </div>
            </motion.div>

            {/* Intro */}
            <motion.div
              className="legal-intro"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <p>
                At NexaByte Digital ("we," "us," or "our"), we are committed to protecting
                your privacy and ensuring the security of your personal information. This
                Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you visit our website or use our services.
              </p>
              <p>
                By accessing or using our website and services, you agree to the terms of
                this Privacy Policy. If you do not agree with the practices described herein,
                please do not use our services.
              </p>
            </motion.div>

            {/* Sections */}
            {sections.map((section, i) => {
              const SectionIcon = section.icon;
              return (
                <motion.div
                  className="legal-section-card"
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: 0.05, duration: 0.6 }}
                >
                  <div className="lsc-header">
                    <div className="lsc-icon-wrap">
                      <SectionIcon size={20} />
                    </div>
                    <h2>{section.title}</h2>
                  </div>

                  <div className="lsc-body">
                    {section.content.map((item, ci) => (
                      <div className="lsc-content-block" key={ci}>
                        <h4>{item.subtitle}</h4>
                        <p>{item.text}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  </>
);

export default PrivacyPage;