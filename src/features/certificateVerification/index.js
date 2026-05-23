export { default as CertificateVerificationPage } from './pages/CertificateVerificationPage';
export { verifyCertificate } from './services/certificateVerificationApi';
export {
  generateCertificateId,
  isCertificateIdFormat,
  normalizeCertificateId,
} from './utils/certificateId';
export { buildCertificateVerificationUrl } from './utils/qrCode';
