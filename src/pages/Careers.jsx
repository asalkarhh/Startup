import React, { useEffect, useState } from 'react';

const internshipPositions = [
  {
    title: "Web Development Intern",
    skills: "HTML, CSS, JavaScript, React",
    duration: "1-6 Months",
    mode: "Remote / Hybrid",
    color: "#61DAFB"
  },
  {
    title: "Python Developer Intern",
    skills: "Python, Flask, APIs",
    duration: "1-6 Months",
    mode: "Remote / Hybrid",
    color: "#3776AB"
  },
  {
    title: "Java Developer Intern",
    skills: "Java, Spring Boot",
    duration: "1-6 Months",
    mode: "Remote / Hybrid",
    color: "#E83E8C"
  },
  {
    title: "UI/UX Design Intern",
    skills: "Figma, UI Design",
    duration: "1-6 Months",
    mode: "Remote / Hybrid",
    color: "#F59E0B"
  }
];

const whyJoinUs = [
  "Work on Live Industry Projects",
  "Internship Certificate",
  "Letter of Recommendation",
  "Mentorship by Experienced Professionals",
  "Flexible Working Environment",
  "Skill Development Opportunities"
];

const Careers = () => {
  const [formData, setFormData] = useState({
    fullName: '', email: '', mobile: '', collegeName: '',
    branch: '', currentYear: '', position: '', coverLetter: ''
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Careers | Asalkar Techworks Private Limited";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = "Apply for internships and career opportunities at Asalkar Techworks Private Limited. Explore openings in web development, software development, UI/UX design, digital marketing, and technology solutions.";
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!resumeFile) {
      alert("Please select a resume file.");
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Prepare FormData for Cloudinary
      const uploadData = new FormData();
      uploadData.append("file", resumeFile);
      uploadData.append("upload_preset", "internship_resumes");

      // 2. Upload to Cloudinary (using "auto" resource type to support PDFs & DOCs)
      const cloudinaryRes = await fetch(
        "https://api.cloudinary.com/v1_1/dmo1xlvvl/auto/upload",
        {
          method: "POST",
          body: uploadData,
        }
      );

      const cloudinaryResult = await cloudinaryRes.json();

      if (!cloudinaryRes.ok) {
        throw new Error(cloudinaryResult.error?.message || "Upload failed");
      }

      const resumeUrl = cloudinaryResult.secure_url;
      console.log("Successfully uploaded to Cloudinary! URL:", resumeUrl);

      // 3. Send email via EmailJS with the resume URL
      const emailPayload = {
        service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        template_id: import.meta.env.VITE_EMAILJS_CAREERS_TEMPLATE_ID || import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        template_params: {
          fullName: formData.fullName,
          email: formData.email,
          mobile: formData.mobile,
          collegeName: formData.collegeName,
          branch: formData.branch,
          currentYear: formData.currentYear,
          position: formData.position,
          coverLetter: formData.coverLetter,
          resumeUrl: resumeUrl,
        }
      };

      const emailRes = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emailPayload)
      });

      if (!emailRes.ok) {
        const errText = await emailRes.text();
        throw new Error(`EmailJS Error (${emailRes.status}): ${errText}`);
      }

      alert("Application submitted successfully! We will get back to you shortly.");
      
      // 4. Reset form
      setFormData({
        fullName: '', email: '', mobile: '', collegeName: '',
        branch: '', currentYear: '', position: '', coverLetter: ''
      });
      setResumeFile(null);
      e.target.reset();
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Something went wrong during the file upload. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <main className="page-transition-wrapper">
      {/* Hero Section */}
      <section className="page-banner">
        <div className="pb-orb pb-orb-1"></div>
        <div className="pb-orb pb-orb-2"></div>
        <div className="container">
          <div className="pb-content" data-aos="fade-up">
            <span className="pb-breadcrumb">
              <a href="/">Home</a> / <span>Careers</span>
            </span>
            <h1>Build Your Career With Asalkar Techworks Private Limited</h1>
            <p>Join our growing team of developers, designers, marketers, and innovators. Gain real-world experience, work on live projects, and build a strong professional future.</p>
            <div className="hero-btns mt-4 justify-content-center">
              <a href="#application-form" className="btn-primary-glow hoverable">Apply for Internship</a>
              <a href="#opportunities" className="btn-outline-hero hoverable">View Opportunities</a>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Opportunities */}
      <section id="opportunities" className="section-pad">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-label">Open Positions</span>
            <h2 className="section-heading">Internship <span className="gradient-text">Opportunities</span></h2>
          </div>
          <div className="row g-4">
            {internshipPositions.map((job, idx) => (
              <div className="col-lg-6" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="project-card hoverable p-4 h-100" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <h3 style={{ color: job.color, fontSize: '1.5rem', marginBottom: '10px' }}>{job.title}</h3>
                  <p className="mb-1" style={{ color: 'var(--text)' }}><strong>Skills:</strong> {job.skills}</p>
                  <p className="mb-1" style={{ color: 'var(--text)' }}><strong>Duration:</strong> {job.duration}</p>
                  <p className="mb-0" style={{ color: 'var(--text)' }}><strong>Mode:</strong> {job.mode}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section-pad" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-label">Benefits</span>
            <h2 className="section-heading">Why <span className="gradient-text">Join Us</span></h2>
          </div>
          <div className="row g-4 justify-content-center">
            {whyJoinUs.map((benefit, idx) => (
              <div className="col-lg-4 col-md-6" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="why-card hoverable h-100">
                  <div className="why-icon-wrap" style={{ fontSize: '24px' }}>🚀</div>
                  <h4 className="mt-3">{benefit}</h4>
                  <div className="why-card-glow"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="section-pad contact-page-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8" data-aos="fade-up">
              <div className="contact-form-card">
                <div className="text-center mb-4">
                  <h3 className="cfc-title">Internship Application Form</h3>
                  <p className="cfc-sub">Take the next step in your career journey.</p>
                </div>
                <form onSubmit={handleSubmit} className="row g-3">
                  <div className="col-md-6"><label className="form-label">Full Name *</label><input type="text" name="fullName" className="form-field" required onChange={handleChange} /></div>
                  <div className="col-md-6"><label className="form-label">Email Address *</label><input type="email" name="email" className="form-field" required onChange={handleChange} /></div>
                  <div className="col-md-6"><label className="form-label">Mobile Number *</label><input type="tel" name="mobile" className="form-field" required onChange={handleChange} /></div>
                  <div className="col-md-6"><label className="form-label">College Name *</label><input type="text" name="collegeName" className="form-field" required onChange={handleChange} /></div>
                  <div className="col-md-6"><label className="form-label">Branch / Department</label><input type="text" name="branch" className="form-field" onChange={handleChange} /></div>
                  <div className="col-md-6"><label className="form-label">Current Year</label><select name="currentYear" className="form-field" onChange={handleChange}><option value="">Select Year</option><option value="1st Year">1st Year</option><option value="2nd Year">2nd Year</option><option value="3rd Year">3rd Year</option><option value="4th Year">4th Year</option><option value="Graduated">Graduated</option></select></div>
                  <div className="col-md-12"><label className="form-label">Internship Position *</label><select name="position" className="form-field" required onChange={handleChange}><option value="">Select Position</option><option value="Web Development Intern">Web Development Intern</option><option value="Python Developer Intern">Python Developer Intern</option><option value="Java Developer Intern">Java Developer Intern</option><option value="UI/UX Design Intern">UI/UX Design Intern</option></select></div>
                  <div className="col-md-12"><label className="form-label">Resume Upload (PDF/DOC) *</label><input type="file" accept=".pdf,.doc,.docx" className="form-field" required style={{ padding: "10px" }} onChange={(e) => setResumeFile(e.target.files[0])} /></div>
                  <div className="col-md-12"><label className="form-label">Cover Letter</label><textarea name="coverLetter" rows="4" className="form-field" placeholder="Tell us why you're a great fit..." onChange={handleChange}></textarea></div>
                  <div className="col-12 text-center mt-4">
                    <button type="submit" className="btn-primary-glow hoverable" disabled={isSubmitting}>{isSubmitting ? "Uploading..." : "Apply Now"}</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Careers;
