import React from 'react';
import { motion } from 'framer-motion';
import PageBanner from '../components/PageBanner';
import { FaBuilding, FaEnvelope, FaGlobe, FaIdCard, FaMapMarkerAlt, FaPhone, FaUserShield } from 'react-icons/fa';

const corporateDetails = [
  {
    icon: FaBuilding,
    title: 'Legal Name',
    text: 'Asalkar Techworks Private Limited',
  },
  {
    icon: FaIdCard,
    title: 'Corporate Identity Number (CIN)',
    text: 'U62011PN2026PTC256155',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Registered Office',
    text: '21/1 Gahkul Vasanat, Vivekanand Nagar, Vite, Khanapur, Sangli - 415311, Maharashtra, India',
  },
  {
    icon: FaBuilding,
    title: 'Date of Incorporation',
    text: '26 May 2026',
  },
  {
    icon: FaEnvelope,
    title: 'Email',
    text: 'asalkartechworks@gmail.com',
    href: 'mailto:asalkartechworks@gmail.com',
  },
  {
    icon: FaPhone,
    title: 'Phone',
    text: '+91 8087818729',
    href: 'tel:+918087818729',
  },
  {
    icon: FaGlobe,
    title: 'Website',
    text: 'www.asalkar.in',
    href: 'https://www.asalkar.in',
  },
  {
    icon: FaUserShield,
    title: 'Queries & Grievances',
    text: 'Saurabh Asalkar — asalkartechworks@gmail.com',
    href: 'mailto:asalkartechworks@gmail.com',
  },
];

const CorporateInformationPage = () => (
  <>
    <PageBanner
      title="Corporate Information"
      subtitle="Official registration and contact details of our company."
      breadcrumb="Corporate Information"
    />

    <section className="legal-page-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <motion.div
              className="legal-intro"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p>
                Asalkar Techworks Private Limited is incorporated under the Companies Act, 2013
                and provides information technology and digital technology services in India.
              </p>
            </motion.div>

            {corporateDetails.map((detail, index) => {
              const DetailIcon = detail.icon;

              return (
                <motion.div
                  className="legal-section-card"
                  key={detail.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: index * 0.04, duration: 0.5 }}
                >
                  <div className="lsc-header">
                    <div className="lsc-icon-wrap">
                      <DetailIcon size={20} />
                    </div>
                    <h2>{detail.title}</h2>
                  </div>
                  <div className="lsc-body">
                    <p>
                      {detail.href ? (
                        <a href={detail.href}>{detail.text}</a>
                      ) : (
                        detail.text
                      )}
                    </p>
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

export default CorporateInformationPage;
