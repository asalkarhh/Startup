import { normalizeCertificateId } from '../utils/certificateId';
import { sanitizeVerificationResponse } from '../utils/sanitizeVerificationResponse';

const getApiBaseUrl = () => {
  const value = import.meta.env.VITE_CERTIFICATE_VERIFICATION_API_URL;
  return typeof value === 'string' ? value.trim() : '';
};

const buildVerificationRequestUrl = (certificateId) => {
  const baseUrl = getApiBaseUrl();

  if (!baseUrl) {
    throw new Error(
      'Verification service is not configured. Add VITE_CERTIFICATE_VERIFICATION_API_URL to the environment.'
    );
  }

  const requestUrl = new URL(baseUrl);
  requestUrl.searchParams.set('id', certificateId);
  return requestUrl.toString();
};

const parseVerificationResponse = async (response) => {
  const responseText = await response.text();

  try {
    return JSON.parse(responseText);
  } catch (error) {
    throw new Error(
      'The verification service returned an unreadable response. Check the Google Apps Script deployment.'
    );
  }
};

export const verifyCertificate = async (certificateId, signal) => {
  const normalizedId = normalizeCertificateId(certificateId);
  const requestUrl = buildVerificationRequestUrl(normalizedId);

  let response;

  try {
    response = await fetch(requestUrl, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
      redirect: 'follow',
      signal,
    });
  } catch (error) {
    if (error.name === 'AbortError') {
      throw error;
    }

    throw new Error(
      'Unable to reach the verification service. Please check the network or Apps Script web app URL.'
    );
  }

  if (!response.ok) {
    throw new Error(
      `Verification request failed with status ${response.status}.`
    );
  }

  const payload = await parseVerificationResponse(response);
  return sanitizeVerificationResponse(payload, normalizedId);
};
