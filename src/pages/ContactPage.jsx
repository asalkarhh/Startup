import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import SocialIcons3D from '../components/SocialIcons3D';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handle = (ev) => {
    setForm({ ...form, [ev.target.name]: ev.target.value });
    if (errors[ev.target.name]) setErrors({ ...errors, [ev.target.name]: '' });
  };

  const submit = (ev) => {
    ev.preventDefault();
    const v = validate();
    if (Object.keys(v).length) return setErrors(v);
    setSent(true);
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 6000);
  };

  const info = [
    { icon: <FaMapMarkerAlt />, title: 'Visit Us', lines: ['123 Business Ave, Suite 456', 'Tech City, TC 78901'] },
    { icon: <FaPhone />, title: 'Call Us', lines: ['+1 (555) 123-4567', '+1 (555) 987-6543'] },
    { icon: <FaEnvelope />, title: 'Email Us', lines: ['hello@nexabyte.com', 'support@nexabyte.com'] },
    { icon: <FaClock />, title: 'Hours', lines: ['Mon-Fri: 9AM-6PM', 'Sat: 10AM-2PM'] },
  ];

  return (
    <>
      <PageBanner title="Contact Us" subtitle="Ready to transform your digital presence? Let's talk." breadcrumb="Contact" />

      <section className="section-pad contact-page-section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="contact-form-card">
                <h3 className="cfc-title">Send Us a Message</h3>
                <p className="cfc-sub">Fill out the form and we'll get back within 24 hours.</p>

                {sent ? (
                  <div className="form-success">
                    <FaCheckCircle className="fs-icon" />
                    <h3>Message Sent!</h3>
                    <p>We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={submit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label">Full Name *</label>
                        <input type="text" name="name" className={`form-field ${errors.name ? 'err' : ''}`} placeholder="John Doe" value={form.name} onChange={handle} />
                        {errors.name && <span className="field-err">{errors.name}</span>}
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Email Address *</label>
                        <input type="email" name="email" className={`form-field ${errors.email ? 'err' : ''}`} placeholder="john@example.com" value={form.email} onChange={handle} />
                        {errors.email && <span className="field-err">{errors.email}</span>}
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Phone Number</label>
                        <input type="tel" name="phone" className="form-field" placeholder="+1 (555) 123-4567" value={form.phone} onChange={handle} />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Service Needed</label>
                        <select name="subject" className="form-field" value={form.subject} onChange={handle}>
                          <option value="">Select service</option>
                          <option>Website Development</option>
                          <option>E-Commerce Development</option>
                          <option>SEO Optimization</option>
                          <option>Google Business & Maps</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label className="form-label">Your Message *</label>
                        <textarea name="message" rows="5" className={`form-field ${errors.message ? 'err' : ''}`} placeholder="Tell us about your project..." value={form.message} onChange={handle} />
                        {errors.message && <span className="field-err">{errors.message}</span>}
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn-primary-glow hoverable">
                          <FaPaperPlane /> Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>

            <div className="col-lg-5" data-aos="fade-left">
              <div className="contact-info-stack">
                {info.map((item, i) => (
                  <div className="ci-item" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                    <div className="ci-icon">{item.icon}</div>
                    <div>
                      <h5>{item.title}</h5>
                      {item.lines.map((l, li) => <p key={li}>{l}</p>)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-map" data-aos="fade-up" data-aos-delay="400">
                <iframe
                  title="NexaByte Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019!2d-122.419!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzA5LjkiVw!5e0!3m2!1sen!2sus!4v1634567890123"
                  width="100%" height="220" style={{ border: 0, borderRadius: '16px' }}
                  allowFullScreen="" loading="lazy"
                />
              </div>

              <div className="contact-social-3d" data-aos="fade-up" data-aos-delay="500">
                <h5>Connect With Us</h5>
                <SocialIcons3D />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;