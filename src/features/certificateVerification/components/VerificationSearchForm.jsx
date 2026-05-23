import React from 'react';
import { FaArrowRight, FaSearch } from 'react-icons/fa';

const VerificationSearchForm = ({
  certificateId,
  helperText,
  hasError,
  isLoading,
  onCertificateIdChange,
  onSubmit,
}) => (
  <div className="cert-verify-form-card" data-aos="fade-up">
    <div className="cert-verify-form-head">
      <span className="cert-verify-chip">
        <FaSearch />
        Verify by Certificate ID
      </span>
      <h2>Check certificate authenticity instantly</h2>
      <p>
        Enter the certificate ID printed on the internship certificate, or open
        a QR verification link to verify it automatically.
      </p>
    </div>

    <form
      className="cert-verify-form"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <label className="cert-verify-label" htmlFor="certificate-id">
        Certificate ID
      </label>

      <div
        className={`cert-verify-input-group${
          hasError ? ' cert-verify-input-group-invalid' : ''
        }`}
      >
        <input
          id="certificate-id"
          type="text"
          value={certificateId}
          onChange={(event) => onCertificateIdChange(event.target.value)}
          className="cert-verify-input"
          placeholder="ATW-2026-X7K29P"
          autoComplete="off"
          spellCheck="false"
          aria-invalid={hasError}
        />

        <button
          type="submit"
          className="cert-verify-button"
          disabled={isLoading}
        >
          <span>{isLoading ? 'Verifying...' : 'Verify'}</span>
          {!isLoading && <FaArrowRight />}
        </button>
      </div>

      <p
        className={`cert-verify-helper${
          hasError ? ' cert-verify-helper-error' : ''
        }`}
      >
        {helperText}
      </p>
    </form>
  </div>
);

export default VerificationSearchForm;
