import React from 'react';
import {
  FaBuilding,
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
  FaExclamationTriangle,
  FaIdBadge,
  FaQrcode,
  FaShieldAlt,
  FaSpinner,
  FaTimesCircle,
  FaUserGraduate,
} from 'react-icons/fa';

const VerificationResultCard = ({
  qrPreviewUrl,
  requestState,
  result,
  systemError,
}) => {
  if (requestState === 'loading') {
    return (
      <div
        className="cert-verify-result-card cert-verify-result-card-loading"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="cert-verify-result-icon cert-verify-result-icon-loading">
          <FaSpinner className="cert-verify-spinner" />
        </div>
        <h3>Checking certificate record...</h3>
        <p>
          We are validating the certificate ID against the official internship
          certificate register.
        </p>
      </div>
    );
  }

  if (requestState === 'error') {
    return (
      <div
        className="cert-verify-result-card cert-verify-result-card-error"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="cert-verify-result-icon cert-verify-result-icon-error">
          <FaExclamationTriangle />
        </div>
        <h3>Unable to verify right now</h3>
        <p>{systemError}</p>
      </div>
    );
  }

  if (requestState === 'invalid') {
    return (
      <div
        className="cert-verify-result-card cert-verify-result-card-invalid"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="cert-verify-result-icon cert-verify-result-icon-invalid">
          <FaTimesCircle />
        </div>
        <h3>Invalid Certificate</h3>
        <p>
          This certificate was not issued by Asalkar Techworks Pvt. Ltd.
        </p>
      </div>
    );
  }

  if (requestState === 'success' && result?.valid) {
    const details = [
      {
        icon: <FaUserGraduate />,
        label: 'Student Name',
        value: result.studentName,
      },
      {
        icon: <FaIdBadge />,
        label: 'Certificate ID',
        value: result.certificateId,
      },
      {
        icon: <FaBuilding />,
        label: 'College',
        value: result.college,
      },
      {
        icon: <FaClock />,
        label: 'Internship Duration',
        value: result.duration,
      },
      {
        icon: <FaCalendarAlt />,
        label: 'Issue Date',
        value: result.issueDate,
      },
      {
        icon: <FaShieldAlt />,
        label: 'Status',
        value: result.status,
      },
    ].filter((detail) => detail.value);

    return (
      <div
        className="cert-verify-result-card cert-verify-result-card-success"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="cert-verify-result-hero">
          <div className="cert-verify-result-icon cert-verify-result-icon-success">
            <FaCheckCircle />
          </div>
          <div>
            <span className="cert-verify-result-badge">Verified Record</span>
            <h3>Certificate Verified</h3>
            <p>
              This certificate matches the official record issued by Asalkar
              Techworks Pvt. Ltd.
            </p>
          </div>
        </div>

        <div className="cert-verify-detail-grid">
          {details.map((detail) => (
            <div className="cert-verify-detail-item" key={detail.label}>
              <span className="cert-verify-detail-icon">{detail.icon}</span>
              <div>
                <span className="cert-verify-detail-label">{detail.label}</span>
                <strong className="cert-verify-detail-value">{detail.value}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const steps = [
    'Scan the QR code printed on the certificate, or paste the Certificate ID.',
    'The verification service checks the official Google Sheet record.',
    'Only matching VALID certificates return the student details shown here.',
  ];

  return (
    <div
      className="cert-verify-result-card cert-verify-result-card-placeholder"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="cert-verify-result-icon cert-verify-result-icon-placeholder">
        <FaQrcode />
      </div>
      <h3>QR-ready verification flow</h3>
      <p>
        Each certificate can point to a unique verification URL that opens this
        page and verifies the ID automatically.
      </p>

      <div className="cert-verify-steps">
        {steps.map((step, index) => (
          <div className="cert-verify-step" key={step}>
            <span>{`0${index + 1}`}</span>
            <p>{step}</p>
          </div>
        ))}
      </div>

      <div className="cert-verify-url-preview">
        <span>QR verification URL</span>
        <code>{qrPreviewUrl}</code>
      </div>
    </div>
  );
};

export default VerificationResultCard;
