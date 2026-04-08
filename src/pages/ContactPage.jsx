import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import SocialIcons3D from '../components/SocialIcons3D';
import CTASection from '../components/CTASection';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane, FaCheckCircle, FaHeadset } from 'react-icons/fa';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    
    if (!form.phone.trim()) {
      e.phone = 'Contact number is required';
    } else if (form.phone.length !== 10) {
      e.phone = 'Phone number must be exactly 10 digits';
    }

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Please enter a valid email address';
    }

    if (!form.subject) e.subject = 'Please select a service';
    return e;
  };

  const handle = (ev) => {
    const { name, value } = ev.target;
    const newValue = name === 'phone' ? value.replace(/\D/g, '').slice(0, 10) : value;
    setForm({ ...form, [name]: newValue });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const submit = async (ev) => {
    ev.preventDefault();
    const v = validate();
    if (Object.keys(v).length) return setErrors(v);
    
    try {
      const payload = {
        service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        template_params: {
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
        }
      };

      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setSent(true);
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setSent(false), 6000);
      } else {
        alert("There was an issue sending your message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please check your connection.");
    }
  };

  const info = [
    { icon: <FaMapMarkerAlt />, title: 'Visit Us', lines: ['Vita , Sangli', 'Maharashtra, 415 311'] },
    { icon: <FaPhone />, title: 'Call Us', lines: ['+91 8087818729', '+91 9766761763'] },
    { icon: <FaEnvelope />, title: 'Email Us', lines: ['hello@Asalkar Techworks.com', 'support@Asalkar Techworks.com'] },
    { 
  icon: <FaClock />, 
  title: 'Hours', 
  lines: [
    'Mon-Sat: 9AM-6PM', 
    <>Sun: <span style={{ color: 'red', fontWeight: 'bold' }}>Closed</span></>
  ] 
},
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
                        <label className="form-label">Email Address</label>
                        <input type="email" name="email" className={`form-field ${errors.email ? 'err' : ''}`} placeholder="john@example.com" value={form.email} onChange={handle} />
                        {errors.email && <span className="field-err">{errors.email}</span>}
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Phone Number *</label>
                        <input type="tel" name="phone" className={`form-field ${errors.phone ? 'err' : ''}`} placeholder="1234567890" value={form.phone} onChange={handle} />
                        {errors.phone && <span className="field-err">{errors.phone}</span>}
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Service Needed *</label>
                        <select name="subject" className={`form-field ${errors.subject ? 'err' : ''}`} value={form.subject} onChange={(e) => {
                          handle(e);
                          e.target.blur();
                        }}>
                          <option value="">Select service</option>
                          <option>Website Development</option>
                          <option>E-Commerce Development</option>
                          <option>SEO Optimization</option>
                          <option>Google Business & Maps</option>
                          <option>Other</option>
                        </select>
                        {errors.subject && <span className="field-err">{errors.subject}</span>}
                      </div>
                      <div className="col-12">
                        <label className="form-label">Your Message</label>
                        <textarea name="message" rows="5" className="form-field" placeholder="Tell us about your project..." value={form.message} onChange={handle} />
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
                  title="Asalkar Techworks Location"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6280.404101034591!2d74.5247757!3d17.2714247!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1673e2410e551%3A0x90f70a51c435819e!2sAsalkar%20Digital!5e1!3m2!1sen!2sin!4v1775118547771!5m2!1sen!2sin"
                  width="100%"
                  height="220"
                  style={{ border: 0, borderRadius: '16px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
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

      <CTASection 
        badgeText="Fast Response"
        badgeIcon={FaHeadset}
        title="Need immediate assistance?"
        description="Give us a call or send a direct email. Our support team is ready to provide you with the answers you need right away."
        primaryBtnText="Call Us Now"
        primaryBtnLink="tel:+91 9766761763"
        secondaryBtnText="Email Us"
        secondaryBtnLink="mailto:asalkarhh@gmail.com"
      />
    </>
  );
};

export default ContactPage;