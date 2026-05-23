import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaDatabase, FaQrcode, FaShieldAlt } from 'react-icons/fa';
import PageBanner from '../../../components/PageBanner';
import VerificationResultCard from '../components/VerificationResultCard';
import VerificationSearchForm from '../components/VerificationSearchForm';
import { verifyCertificate } from '../services/certificateVerificationApi';
import {
  isCertificateIdFormat,
  normalizeCertificateId,
} from '../utils/certificateId';
import { buildCertificateVerificationUrl } from '../utils/qrCode';
import '../styles/certificateVerification.css';

const trustPoints = [
  {
    icon: <FaShieldAlt />,
    title: 'Official validation',
    text: 'Only certificates marked VALID in the official issue register are approved.',
  },
  {
    icon: <FaDatabase />,
    title: 'Minimal data exposure',
    text: 'The verification API returns only the matched certificate record, never the full sheet.',
  },
  {
    icon: <FaQrcode />,
    title: 'QR-first workflow',
    text: 'QR codes can point directly to the certificate-specific verification page.',
  },
];

const CertificateVerificationPage = () => {
  const [searchParams] = useSearchParams();
  const [certificateId, setCertificateId] = useState('');
  const [requestState, setRequestState] = useState('idle');
  const [result, setResult] = useState(null);
  const [formError, setFormError] = useState('');
  const [systemError, setSystemError] = useState('');
  const abortControllerRef = useRef(null);
  const autoVerifiedIdRef = useRef('');

  const queryCertificateId = searchParams.get('id') || '';
  const qrPreviewUrl = buildCertificateVerificationUrl(
    certificateId || 'ATW-2026-X7K29P'
  );

  const handleCertificateIdChange = (value) => {
    if (requestState === 'loading') {
      abortControllerRef.current?.abort();
      abortControllerRef.current = null;
    }

    setCertificateId(normalizeCertificateId(value));
    setFormError('');
    setResult(null);
    setSystemError('');
    setRequestState('idle');
  };

  const runVerification = async (providedId = certificateId) => {
    const normalizedId = normalizeCertificateId(providedId);

    if (!normalizedId) {
      setFormError('Enter a certificate ID to continue.');
      setResult(null);
      setRequestState('idle');
      return;
    }

    if (!isCertificateIdFormat(normalizedId)) {
      setFormError('Enter a valid ID like ATW-2026-X7K29P.');
      setResult(null);
      setRequestState('idle');
      return;
    }

    abortControllerRef.current?.abort();
    const controller = new AbortController();
    abortControllerRef.current = controller;

    setCertificateId(normalizedId);
    setFormError('');
    setSystemError('');
    setResult(null);
    setRequestState('loading');

    try {
      const verificationResult = await verifyCertificate(
        normalizedId,
        controller.signal
      );

      setResult(verificationResult);
      setRequestState(verificationResult.valid ? 'success' : 'invalid');
    } catch (error) {
      if (error.name === 'AbortError') {
        return;
      }

      setSystemError(
        error.message ||
          'The verification service is temporarily unavailable. Please try again.'
      );
      setRequestState('error');
    } finally {
      if (abortControllerRef.current === controller) {
        abortControllerRef.current = null;
      }
    }
  };

  useEffect(() => {
    return () => {
      abortControllerRef.current?.abort();
    };
  }, []);

  useEffect(() => {
    if (!queryCertificateId) {
      return;
    }

    const normalizedQueryId = normalizeCertificateId(queryCertificateId);
    setCertificateId(normalizedQueryId);

    if (!normalizedQueryId || autoVerifiedIdRef.current === normalizedQueryId) {
      return;
    }

    autoVerifiedIdRef.current = normalizedQueryId;
    void runVerification(normalizedQueryId);
  }, [queryCertificateId]);

  return (
    <>
      <PageBanner
        title="Certificate Verification"
        subtitle="Verify internship certificates issued by Asalkar Techworks Pvt. Ltd."
        breadcrumb="Verify"
      />

      <section className="cert-verify-section">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-lg-5" data-aos="fade-right">
              <div className="cert-verify-intro-card">
                <span className="cert-verify-chip">Secure Verification</span>
                <h2>Trusted certificate checks for internships</h2>
                <p>
                  Use the certificate ID or QR link to confirm whether an
                  internship certificate was officially issued by Asalkar
                  Techworks Pvt. Ltd.
                </p>

                <div className="cert-verify-trust-grid">
                  {trustPoints.map((point) => (
                    <div className="cert-verify-trust-item" key={point.title}>
                      <span className="cert-verify-trust-icon">{point.icon}</span>
                      <div>
                        <h3>{point.title}</h3>
                        <p>{point.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="cert-verify-panel">
                <VerificationSearchForm
                  certificateId={certificateId}
                  helperText={
                    formError ||
                    'Supports direct links like /verify?id=ATW-2026-X7K29P.'
                  }
                  hasError={Boolean(formError)}
                  isLoading={requestState === 'loading'}
                  onCertificateIdChange={handleCertificateIdChange}
                  onSubmit={runVerification}
                />

                <VerificationResultCard
                  qrPreviewUrl={qrPreviewUrl}
                  requestState={requestState}
                  result={result}
                  systemError={systemError}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CertificateVerificationPage;
