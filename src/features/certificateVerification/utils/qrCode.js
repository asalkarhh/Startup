import { normalizeCertificateId } from './certificateId';

export const buildCertificateVerificationUrl = (
  certificateId,
  baseUrl = typeof window !== 'undefined'
    ? window.location.origin
    : 'https://yourdomain.com'
) => {
  const normalizedId = normalizeCertificateId(certificateId);
  const verificationUrl = new URL('/verify', baseUrl);

  if (normalizedId) {
    verificationUrl.searchParams.set('id', normalizedId);
  }

  return verificationUrl.toString();
};
