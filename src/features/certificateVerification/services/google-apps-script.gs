const SPREADSHEET_ID = '1NYBoQHZPQI-vjCjRB0utOHAPQN6r2a6GoRyanBVLOd0';
const SHEET_NAME = 'Sheet1';
const HEADER_ROW = 1;
const TOTAL_COLUMNS = 6;

function doGet(e) {
  const certificateId = normalizeCertificateId_(
    (e && e.parameter && e.parameter.id) || ''
  );

  if (!certificateId) {
    return jsonResponse_({ valid: false });
  }

  return jsonResponse_(findCertificateById_(certificateId));
}

function findCertificateById_(certificateId) {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(
    SHEET_NAME
  );

  if (!sheet) {
    return { valid: false };
  }

  const totalDataRows = sheet.getLastRow() - HEADER_ROW;

  if (totalDataRows <= 0) {
    return { valid: false };
  }

  const idRange = sheet.getRange(HEADER_ROW + 1, 1, totalDataRows, 1);
  const match = idRange
    .createTextFinder(certificateId)
    .matchEntireCell(true)
    .findNext();

  if (!match) {
    return { valid: false };
  }

  const rowValues = sheet
    .getRange(match.getRow(), 1, 1, TOTAL_COLUMNS)
    .getDisplayValues()[0]
    .map(sanitizeCell_);

  const [foundId, studentName, college, duration, issueDate, statusValue] =
    rowValues;
  const status = String(statusValue || '').toUpperCase();

  if (normalizeCertificateId_(foundId) !== certificateId || status !== 'VALID') {
    return { valid: false };
  }

  return {
    valid: true,
    certificateId: foundId,
    studentName: studentName,
    college: college,
    duration: duration,
    issueDate: issueDate,
    status: status,
  };
}

function jsonResponse_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function normalizeCertificateId_(value) {
  return String(value || '')
    .toUpperCase()
    .replace(/[^A-Z0-9-]/g, '')
    .trim();
}

function sanitizeCell_(value) {
  return String(value || '')
    .replace(/[<>]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}
