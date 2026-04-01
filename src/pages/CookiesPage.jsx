import React from 'react';
import { motion } from 'framer-motion';
import PageBanner from '../components/PageBanner';
import {
  FaCookieBite, FaCog, FaChartBar, FaBullhorn,
  FaToggleOn, FaInfoCircle, FaEnvelope,
} from 'react-icons/fa';

const cookieTypes = [
  {
    name: 'Essential Cookies',
    required: true,
    color: '#28A745',
    description: 'These cookies are strictly necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot disable these cookies as the website would not function correctly without them.',
    examples: [
      { cookie: 'session_id', purpose: 'Maintains your session while browsing', duration: 'Session' },
      { cookie: 'csrf_token', purpose: 'Security — prevents cross-site request forgery', duration: 'Session' },
      { cookie: 'cookie_consent', purpose: 'Stores your cookie preferences', duration: '1 year' },
    ],
  },
  {
    name: 'Analytics Cookies',
    required: false,
    color: '#1D6FA5',
    description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They help us improve our website structure, content, and user experience based on actual usage patterns.',
    examples: [
      { cookie: '_ga', purpose: 'Google Analytics — distinguishes unique users', duration: '2 years' },
      { cookie: '_gid', purpose: 'Google Analytics — distinguishes users', duration: '24 hours' },
      { cookie: '_gat', purpose: 'Google Analytics — throttles request rate', duration: '1 minute' },
    ],
  },
  {
    name: 'Functional Cookies',
    required: false,
    color: '#6F42C1',
    description: 'These cookies enable enhanced functionality and personalization, such as remembering your preferences, language selection, and customized settings. They may be set by us or by third-party providers whose services we have integrated into our pages.',
    examples: [
      { cookie: 'theme_pref', purpose: 'Remembers your dark/light mode preference', duration: '1 year' },
      { cookie: 'lang_pref', purpose: 'Stores your language preference', duration: '1 year' },
      { cookie: 'font_size', purpose: 'Remembers accessibility font size settings', duration: '6 months' },
    ],
  },
  {
    name: 'Marketing Cookies',
    required: false,
    color: '#E83E8C',
    description: 'These cookies are used to track visitors across websites to display relevant advertisements. They are used to limit the number of times you see an ad and help measure the effectiveness of advertising campaigns. These cookies are usually set by our advertising partners.',
    examples: [
      { cookie: '_fbp', purpose: 'Facebook Pixel — tracks conversions from ads', duration: '3 months' },
      { cookie: 'ads/ga-audiences', purpose: 'Google Ads — remarketing audiences', duration: 'Session' },
      { cookie: 'IDE', purpose: 'Google DoubleClick — tracks ad interactions', duration: '1 year' },
    ],
  },
];

const sections = [
  {
    icon: FaCookieBite,
    title: '1. What Are Cookies?',
    content: [
      {
        subtitle: 'Definition',
        text: 'Cookies are small text files that are placed on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work efficiently, provide a better user experience, and supply reporting information to website owners.',
      },
      {
        subtitle: 'How We Use Cookies',
        text: 'NexaByte Digital uses cookies and similar technologies (such as web beacons, pixels, and local storage) to recognize you when you visit our website, remember your preferences, understand how you use our site, and improve your overall experience.',
      },
    ],
  },
  {
    icon: FaToggleOn,
    title: '2. Managing Your Preferences',
    content: [
      {
        subtitle: 'Browser Settings',
        text: 'Most web browsers allow you to control cookies through their settings. You can set your browser to refuse all or some cookies, or to alert you when a cookie is being set. Please note that disabling certain cookies may affect the functionality of our website.',
      },
      {
        subtitle: 'Opt-Out Tools',
        text: 'You can opt out of interest-based advertising by visiting the Digital Advertising Alliance\'s opt-out page (optout.aboutads.info) or the Network Advertising Initiative\'s opt-out page (optout.networkadvertising.org). For Google Analytics, you can install the Google Analytics Opt-out Browser Add-on.',
      },
    ],
  },
  {
    icon: FaInfoCircle,
    title: '3. Updates to This Policy',
    content: [
      {
        subtitle: 'Policy Changes',
        text: 'We may update this Cookie Policy from time to time to reflect changes in our practices, technology, or legal requirements. We will notify you of any significant changes by posting the updated policy on our website with a new effective date. We encourage you to review this policy periodically.',
      },
    ],
  },
  {
    icon: FaEnvelope,
    title: '4. Contact Us',
    content: [
      {
        subtitle: 'Questions About Cookies',
        text: 'If you have any questions about our use of cookies or this Cookie Policy, please contact us at privacy@nexabyte.com or write to NexaByte Digital, 123 Business Avenue, Suite 456, Tech City, TC 78901.',
      },
    ],
  },
];

const iconMap = {
  'Essential Cookies': FaCog,
  'Analytics Cookies': FaChartBar,
  'Functional Cookies': FaToggleOn,
  'Marketing Cookies': FaBullhorn,
};

const CookiesPage = () => (
  <>
    <PageBanner
      title="Cookie Policy"
      subtitle="How we use cookies and similar technologies on our website."
      breadcrumb="Cookie Policy"
    />

    <section className="legal-page-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <motion.div
              className="legal-updated-notice"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <FaCookieBite className="lun-icon" />
              <div>
                <strong>Last Updated:</strong> January 15, 2025
                <span className="lun-sep">•</span>
                <strong>Effective Date:</strong> January 15, 2025
              </div>
            </motion.div>

            <motion.div
              className="legal-intro"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <p>
                This Cookie Policy explains how NexaByte Digital uses cookies and similar
                tracking technologies when you visit our website. It explains what these
                technologies are, why we use them, and your rights to control our use of them.
              </p>
            </motion.div>

            {/* General sections */}
            {sections.slice(0, 1).map((section, i) => {
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

            {/* Cookie Types Detail */}
            <motion.div
              className="legal-section-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: 0.05, duration: 0.6 }}
            >
              <div className="lsc-header">
                <div className="lsc-icon-wrap">
                  <FaCog size={20} />
                </div>
                <h2>2. Types of Cookies We Use</h2>
              </div>

              <div className="lsc-body">
                {cookieTypes.map((type, ti) => {
                  const TypeIcon = iconMap[type.name];
                  return (
                    <motion.div
                      className="cookie-type-card"
                      key={ti}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: ti * 0.1, duration: 0.5 }}
                    >
                      <div className="ctc-header">
                        <div className="ctc-left">
                          <div
                            className="ctc-icon"
                            style={{
                              background: `${type.color}12`,
                              color: type.color,
                            }}
                          >
                            <TypeIcon size={18} />
                          </div>
                          <div>
                            <h4>{type.name}</h4>
                            <span
                              className="ctc-badge"
                              style={{
                                background: type.required
                                  ? `${type.color}12`
                                  : 'var(--bg-alt)',
                                color: type.required
                                  ? type.color
                                  : 'var(--text-3)',
                                borderColor: type.required
                                  ? `${type.color}25`
                                  : 'var(--border)',
                              }}
                            >
                              {type.required ? 'Always Active' : 'Optional'}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="ctc-desc">{type.description}</p>

                      {/* Cookie table */}
                      <div className="ctc-table-wrap">
                        <table className="ctc-table">
                          <thead>
                            <tr>
                              <th>Cookie Name</th>
                              <th>Purpose</th>
                              <th>Duration</th>
                            </tr>
                          </thead>
                          <tbody>
                            {type.examples.map((ex, ei) => (
                              <tr key={ei}>
                                <td>
                                  <code className="ctc-code">{ex.cookie}</code>
                                </td>
                                <td>{ex.purpose}</td>
                                <td>
                                  <span className="ctc-duration">{ex.duration}</span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Remaining sections */}
            {sections.slice(1).map((section, i) => {
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

export default CookiesPage;