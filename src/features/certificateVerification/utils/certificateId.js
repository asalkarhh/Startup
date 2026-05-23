const CERTIFICATE_PREFIX = 'ATW';
const RANDOM_SEGMENT_LENGTH = 6;
const RANDOM_CHARSET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const CERTIFICATE_ID_PATTERN = /^ATW-\d{4}-[A-Z0-9]{6}$/;

export const normalizeCertificateId = (value) =>
  String(value || '')
    .toUpperCase()
    .replace(/[^A-Z0-9-]/g, '')
    .trim()
    .slice(0, 20);

const createRandomSegment = (length) => {
  let output = '';

  for (let index = 0; index < length; index += 1) {
    const randomIndex = Math.floor(Math.random() * RANDOM_CHARSET.length);
    output += RANDOM_CHARSET[randomIndex];
  }

  return output;
};

export const generateCertificateId = (year = new Date().getFullYear()) => {
  const normalizedYear = String(year).replace(/\D/g, '').slice(0, 4) || '2026';
  return `${CERTIFICATE_PREFIX}-${normalizedYear}-${createRandomSegment(
    RANDOM_SEGMENT_LENGTH
  )}`;
};

export const isCertificateIdFormat = (value) =>
  CERTIFICATE_ID_PATTERN.test(normalizeCertificateId(value));
