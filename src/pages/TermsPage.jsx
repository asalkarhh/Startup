import React from 'react';
import { motion } from 'framer-motion';
import PageBanner from '../components/PageBanner';
import {
  FaFileContract, FaHandshake, FaCreditCard, FaBan,
  FaBalanceScale, FaGavel, FaExclamationTriangle, FaEnvelope,
} from 'react-icons/fa';

const sections = [
  {
    icon: FaHandshake,
    title: '1. Acceptance of Terms',
    content: [
      {
        subtitle: 'Agreement to Terms',
        text: 'By accessing and using the Asalkar Techworks Digital website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.',
      },
      {
        subtitle: 'Eligibility',
        text: 'You must be at least 18 years old or have the consent of a legal guardian to use our services. By using our services, you represent and warrant that you meet these eligibility requirements and have the legal authority to enter into a binding agreement.',
      },
    ],
  },
  {
    icon: FaFileContract,
    title: '2. Services & Deliverables',
    content: [
      {
        subtitle: 'Scope of Services',
        text: 'Asalkar Techworks Digital provides website development, e-commerce solutions, SEO optimization, Google Business management, mobile app development, and UI/UX design services. The specific scope, deliverables, timeline, and pricing for each project are outlined in individual project proposals and contracts.',
      },
      {
        subtitle: 'Project Modifications',
        text: 'Any changes to the agreed scope of work must be documented through a formal change request process. Additional work beyond the original scope may incur additional fees and affect project timelines. We will provide written estimates for any scope changes before proceeding.',
      },
      {
        subtitle: 'Intellectual Property',
        text: 'Upon full payment, clients receive ownership of all custom deliverables created specifically for their project. Asalkar Techworks retains the right to use generic, non-client-specific components, frameworks, and methodologies. We reserve the right to showcase completed work in our portfolio unless otherwise agreed in writing.',
      },
    ],
  },
  {
    icon: FaCreditCard,
    title: '3. Payment Terms',
    content: [
      {
        subtitle: 'Pricing & Invoicing',
        text: 'All prices are quoted in USD unless otherwise specified. We typically require a 50% deposit before commencing work, with the remaining balance due upon project completion or as outlined in the project agreement. Custom payment schedules may be arranged for larger projects.',
      },
      {
        subtitle: 'Late Payments',
        text: 'Invoices are due within 15 business days of issuance. Late payments may incur a monthly interest charge of 1.5% on the outstanding balance. We reserve the right to suspend work on a project if payment is overdue by more than 30 days.',
      },
      {
        subtitle: 'Refund Policy',
        text: 'Due to the nature of digital services, refunds are handled on a case-by-case basis. If a project has not commenced, a full refund of any deposits may be issued. Once work has begun, refunds will be prorated based on the work completed and resources allocated.',
      },
    ],
  },
  {
    icon: FaBan,
    title: '4. Prohibited Uses',
    content: [
      {
        subtitle: 'Restrictions',
        text: 'You agree not to use our services for any unlawful purpose, to violate any international, federal, or state regulations, to infringe upon our intellectual property rights, to upload malicious code, to spam or harass others, or to engage in any activity that could damage, disable, or impair our services or infrastructure.',
      },
      {
        subtitle: 'Content Responsibility',
        text: 'Clients are solely responsible for the content they provide for their projects, including text, images, logos, and other materials. Asalkar Techworks is not responsible for any content that infringes on third-party intellectual property rights. Clients warrant that they have all necessary rights and permissions for the content they provide.',
      },
    ],
  },
  {
    icon: FaExclamationTriangle,
    title: '5. Limitation of Liability',
    content: [
      {
        subtitle: 'Warranty Disclaimer',
        text: 'Our services are provided "as is" and "as available" without any warranties of any kind, either express or implied. While we strive for the highest quality, we do not guarantee that our services will be uninterrupted, error-free, or meet all of your specific requirements.',
      },
      {
        subtitle: 'Liability Cap',
        text: 'In no event shall Asalkar Techworks Digital, its directors, employees, partners, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.',
      },
    ],
  },
  {
    icon: FaBalanceScale,
    title: '6. Indemnification',
    content: [
      {
        subtitle: 'Client Indemnification',
        text: 'You agree to indemnify, defend, and hold harmless Asalkar Techworks Digital and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including attorney fees) arising from your use of our services, your violation of these Terms, or your violation of any rights of a third party.',
      },
    ],
  },
  {
    icon: FaGavel,
    title: '7. Governing Law & Disputes',
    content: [
      {
        subtitle: 'Jurisdiction',
        text: 'These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions. Any disputes arising from these Terms or our services shall be resolved through binding arbitration in San Francisco, California.',
      },
      {
        subtitle: 'Severability',
        text: 'If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that the remaining provisions shall remain in full force and effect.',
      },
    ],
  },
  {
    icon: FaEnvelope,
    title: '8. Contact Information',
    content: [
      {
        subtitle: 'Questions About These Terms',
        text: 'If you have any questions about these Terms of Service, please contact us at legal@Asalkar Techworks.com or write to us at Asalkar Techworks Digital, 123 Business Avenue, Suite 456, Tech City, TC 78901. We aim to respond to all inquiries within 5 business days.',
      },
    ],
  },
];

const TermsPage = () => (
  <>
    <PageBanner
      title="Terms of Service"
      subtitle="The rules and guidelines governing the use of our services."
      breadcrumb="Terms of Service"
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
              <FaFileContract className="lun-icon" />
              <div>
                <strong>Last Updated:</strong> January 15, 2025
                <span className="lun-sep">•</span>
                <strong>Version:</strong> 2.1
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
                Welcome to Asalkar Techworks Digital. These Terms of Service ("Terms") govern your
                access to and use of our website, products, and services. Please read these
                Terms carefully before engaging our services. These Terms constitute a
                legally binding agreement between you and Asalkar Techworks Digital.
              </p>
            </motion.div>

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

export default TermsPage;