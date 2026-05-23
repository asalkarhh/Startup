import { normalizeCertificateId } from './certificateId';

const sanitizeText = (value, maxLength) =>
  String(value || '')
    .replace(/[<>]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLength);

export const sanitizeVerificationResponse = (payload, requestedId) => {
  if (!payload || typeof payload !== 'object') {
    throw new Error('The verification service returned an unexpected response.');
  }

  if (payload.valid !== true) {
    return {
      valid: false,
      certificateId: requestedId,
      status: 'INVALID',
    };
  }

  const certificateId =
    normalizeCertificateId(payload.certificateId) ||
    normalizeCertificateId(requestedId);
  const studentName = sanitizeText(payload.studentName, 80);
  const college = sanitizeText(payload.college, 120);
  const duration = sanitizeText(payload.duration, 80);
  const issueDate = sanitizeText(payload.issueDate, 40);
  const status = sanitizeText(payload.status, 10).toUpperCase();

  if (!certificateId || !studentName || !duration || !issueDate || status !== 'VALID') {
    throw new Error('The verification service returned incomplete certificate data.');
  }

  return {
    valid: true,
    certificateId,
    studentName,
    college,
    duration,
    issueDate,
    status,
  };
};
