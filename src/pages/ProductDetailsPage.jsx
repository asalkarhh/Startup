import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle, FaExternalLinkAlt, FaFileInvoiceDollar, FaSms } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';
import { products } from '../data/products';

const ProductDetailsPage = () => {
  const { slug } = useParams();
  const product = products[slug];

  if (!product) return <Navigate to="/projects" replace />;

  const ProductIcon = product.icon === 'sms' ? FaSms : FaFileInvoiceDollar;

  return (
    <>
      <PageBanner title={product.title} subtitle={product.tagline} breadcrumb="Product Details" />

      <section className="section-pad product-detail-section">
        <div className="container">
          <Link to="/projects" className="product-back-link"><FaArrowLeft /> Back to Projects & Products</Link>

          <div className="product-detail-hero" style={{ background: product.theme }} data-aos="fade-up">
            <div className={`product-detail-icon${product.image ? ' product-detail-image' : ''}`}>
              {product.image ? <img src={product.image} alt={product.title} /> : <ProductIcon />}
            </div>
            <div>
              <span>{product.category}</span>
              <h2>{product.title}</h2>
              <p>{product.summary}</p>
            </div>
          </div>

          <div className="row g-4 mt-2">
            <div className="col-lg-7" data-aos="fade-up">
              <div className="product-content-card">
                <span className="section-label">About the Product</span>
                <h3>Built to make everyday business simpler</h3>
                <p>{product.description}</p>
              </div>
            </div>
            <div className="col-lg-5" data-aos="fade-up" data-aos-delay="100">
              <div className="product-content-card">
                <span className="section-label">Ideal For</span>
                <div className="product-chip-list">
                  {product.idealFor.map(item => <span key={item}>{item}</span>)}
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4 mt-1">
            <div className="col-lg-7" data-aos="fade-up">
              <div className="product-content-card">
                <span className="section-label">Business Benefits</span>
                <h3>How it helps business owners</h3>
                <div className="product-benefit-list">
                  {product.benefits.map(benefit => <div key={benefit}><FaCheckCircle /> <span>{benefit}</span></div>)}
                </div>
              </div>
            </div>
            <div className="col-lg-5" data-aos="fade-up" data-aos-delay="100">
              <div className="product-content-card">
                <span className="section-label">How It Works</span>
                <h3>A simple four-step workflow</h3>
                <div className="product-step-list">
                  {product.steps.map((step, index) => <div key={step}><strong>{index + 1}</strong><p>{step}</p></div>)}
                </div>
              </div>
            </div>
          </div>

          <div className="product-detail-cta" data-aos="fade-up">
            <div><span>Interested in {product.title}?</span><h3>Fill out the form and our team will contact you.</h3></div>
            <div className="product-detail-actions">
              {product.websiteUrl && <a href={product.websiteUrl} target="_blank" rel="noopener noreferrer" className="btn-outline-hero">Visit Website <FaExternalLinkAlt /></a>}
              <a href={product.formUrl} target="_blank" rel="noopener noreferrer" className="btn-primary-glow">Get {product.ctaTitle || product.title} <FaExternalLinkAlt /></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsPage;
