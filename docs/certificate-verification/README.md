# Internship Certificate Verification

This document contains the full setup, integration, and testing guide for the Internship Certificate Verification System added to this React project.

## What was added

- Frontend route: `/verify`
- Query param support: `/verify?id=ATW-2026-X7K29P`
- Isolated feature module inside `src/features/certificateVerification/`
- Google Sheets based certificate store
- Google Apps Script verification API
- Unique certificate ID generator
- QR verification URL helper
- Valid, invalid, loading, and error UI states

## Feature file structure

```text
src/
  features/
    certificateVerification/
      components/
        VerificationResultCard.jsx
        VerificationSearchForm.jsx
      pages/
        CertificateVerificationPage.jsx
      services/
        certificateVerificationApi.js
        google-apps-script.gs
      styles/
        certificateVerification.css
      utils/
        certificateId.js
        qrCode.js
        sanitizeVerificationResponse.js
      index.js
```

## Route details

- Public page route: `/verify`
- Auto verification URL format:

```text
https://yourdomain.com/verify?id=ATW-2026-X7K29P
```

## Environment configuration

Add this variable to your local `.env` file:

```env
VITE_CERTIFICATE_VERIFICATION_API_URL=https://script.google.com/macros/s/XXXX/exec
```

Important:

- Replace `XXXX` with your deployed Google Apps Script web app ID.
- After changing `.env`, restart the React development server.

## Google Sheet setup

The current Apps Script files are preconfigured for this shared Google Sheet:

```text
1NYBoQHZPQI-vjCjRB0utOHAPQN6r2a6GoRyanBVLOd0
```

and the current worksheet tab:

```text
Sheet1
```

To populate the sheet quickly, import or paste the rows from:

```text
docs/certificate-verification/sample-certificates.csv
```

Use this exact header order in row 1:

| Certificate ID | Student Name | College | Duration | Issue Date | Status |
| --- | --- | --- | --- | --- | --- |
| ATW-2026-X7K29P | Rahul Patil | ABC College | Jan 2026 - Jun 2026 | 22 May 2026 | VALID |
| ATW-2026-Q8M4TZ | Sneha Joshi | XYZ Institute | Feb 2026 - Jul 2026 | 23 May 2026 | VALID |
| ATW-2026-Z9L2MN | Demo Student | Demo College | Jan 2026 - Mar 2026 | 20 May 2026 | REVOKED |

Rules:

- Only certificates with `Status = VALID` should verify successfully.
- Any missing ID should return invalid.
- Any ID present with a non-`VALID` status should also return invalid.
- Do not add extra columns before the required six columns unless you also update the Apps Script.

## Google Apps Script backend setup

Use either of these files as your source:

- `src/features/certificateVerification/services/google-apps-script.gs`
- `docs/certificate-verification/google-apps-script.gs`

### Setup steps

1. Open [Google Apps Script](https://script.google.com/).
2. Create a new script project.
3. Delete the default sample code.
4. Paste the contents of `google-apps-script.gs`.
5. The shared Google Sheet ID is already filled in.
6. Confirm `SHEET_NAME` is `Sheet1`, or update it if you rename the tab.
7. Save the script project.

### Deploy as web app

1. Click `Deploy`.
2. Click `New deployment`.
3. Choose `Web app`.
4. Set `Execute as` to `Me`.
5. Set access to `Anyone` or `Anyone with the link`.
6. Deploy.
7. Authorize the script when Google asks.
8. Copy the generated `/exec` URL.

Example:

```text
https://script.google.com/macros/s/AKfycbyour-app-id/exec
```

Then put that URL into `.env` as `VITE_CERTIFICATE_VERIFICATION_API_URL`.

## Expected API behavior

### Request format

```text
GET https://script.google.com/macros/s/XXXX/exec?id=ATW-2026-X7K29P
```

### Valid response example

```json
{
  "valid": true,
  "certificateId": "ATW-2026-X7K29P",
  "studentName": "Rahul Patil",
  "college": "ABC College",
  "duration": "Jan 2026 - Jun 2026",
  "issueDate": "22 May 2026",
  "status": "VALID"
}
```

### Invalid response example

```json
{
  "valid": false
}
```

## Local frontend setup

From the project root run:

```powershell
npm install
npm start
```

Vite usually starts on:

```text
http://localhost:5173
```

Then open:

```text
http://localhost:5173/verify
```

## How to test the backend first

Before testing the React page, verify the Apps Script URL directly.

### Browser test

Open this in the browser:

```text
https://script.google.com/macros/s/XXXX/exec?id=ATW-2026-X7K29P
```

Expected result:

- If the ID exists and status is `VALID`, you should see JSON with `valid: true`
- If the ID does not exist, you should see `{"valid":false}`

### PowerShell test

Valid certificate:

```powershell
Invoke-RestMethod "https://script.google.com/macros/s/XXXX/exec?id=ATW-2026-X7K29P"
```

Invalid certificate:

```powershell
Invoke-RestMethod "https://script.google.com/macros/s/XXXX/exec?id=ATW-2026-AAAAAA"
```

What to verify:

- JSON is returned
- `certificateId` matches the requested ID
- `status` is `VALID` only for approved rows
- Unknown IDs return `valid = false`

## How to test the frontend

Test the page in this order.

### 1. Page load test

Open:

```text
http://localhost:5173/verify
```

Expected:

- Page title section is visible
- Certificate ID input is visible
- Verify button is visible
- No crash
- No existing route is affected

### 2. Empty input validation test

Steps:

1. Open `/verify`
2. Leave the input empty
3. Click `Verify`

Expected:

- No API call should succeed
- Validation message should appear
- User should see: `Enter a certificate ID to continue.`

### 3. Invalid format test

Steps:

1. Enter `abc`
2. Click `Verify`

Expected:

- Validation message should appear
- User should see: `Use format: ATW-INT + [CLG] + [DD] + [No].`

### 4. Valid certificate test

Steps:

1. Ensure the sheet contains:

```text
ATW-2026-X7K29P | Rahul Patil | ABC College | Jan 2026 - Jun 2026 | 22 May 2026 | VALID
```

2. Enter `ATW-2026-X7K29P`
3. Click `Verify`

Expected:

- Loading state appears first
- Success card appears
- Message shows `Certificate Verified`
- The following fields are visible:
  - Student Name
  - Certificate ID
  - College
  - Internship Duration
  - Issue Date
  - Status
- Status value should be `VALID`

### 5. Invalid certificate test

Steps:

1. Enter an ID not present in the sheet, such as `ATW-2026-AAAAAA`
2. Click `Verify`

Expected:

- Invalid state appears
- Message shows `Invalid Certificate`
- User should see: `This certificate was not issued by Asalkar Techworks Pvt. Ltd.`

### 6. Non-valid status test

Steps:

1. Add a row like:

```text
ATW-2026-Z9L2MN | Demo Student | Demo College | Jan 2026 - Mar 2026 | 20 May 2026 | REVOKED
```

2. Search for `ATW-2026-Z9L2MN`

Expected:

- Response should be treated as invalid
- The page should not show student details as verified

### 7. Auto verify query param test

Open:

```text
http://localhost:5173/verify?id=ATW-2026-X7K29P
```

Expected:

- Input auto-fills with `ATW-2026-X7K29P`
- Verification starts automatically
- Success result shows without clicking the button

Repeat with an unknown ID:

```text
http://localhost:5173/verify?id=ATW-2026-AAAAAA
```

Expected:

- Input auto-fills
- Verification runs automatically
- Invalid result appears

### 8. Network or config error test

To simulate a config error:

1. Put a wrong value in `.env`
2. Restart the frontend
3. Try verifying an ID

Expected:

- Error state appears
- User sees a service/configuration error message

To simulate a backend outage:

1. Temporarily undeploy the script or use a bad URL
2. Retry verification

Expected:

- Error state appears
- UI does not crash

### 9. Input change while loading test

Steps:

1. Start verification
2. Quickly change the input value before the previous request finishes

Expected:

- In-flight request should be aborted
- Stale result should not overwrite the current input context

### 10. Responsive UI test

Test on:

- Desktop width
- Tablet width
- Mobile width

Expected:

- Input and button stack correctly on small screens
- Result cards remain readable
- No content overflows horizontally

## How to test the QR verification flow

The QR code should encode a URL in this format:

```text
https://yourdomain.com/verify?id=ATW-2026-X7K29P
```

### Generate the verification URL in code

Example helper usage:

```js
const url = buildCertificateVerificationUrl(
  'ATW-2026-X7K29P',
  'https://yourdomain.com'
);
```

### QR test steps

1. Generate a verification URL for a real certificate ID.
2. Convert that URL into a QR code using your certificate creation workflow.
3. Scan the QR code on a phone.
4. Confirm it opens the `/verify?id=...` page.
5. Confirm the page auto-verifies the certificate.

Expected:

- QR opens the verification page directly
- Correct certificate ID is populated
- Verification runs automatically

## How to test the certificate ID generator

The helper file is:

```text
src/features/certificateVerification/utils/certificateId.js
```

Example:

```js
const certificateId = generateCertificateId(2026);
```

Expected format:

```text
ATW-2026-X7K29P
ATW-2026-Q8M4TZ
```

Validation rules:

- Prefix is always `ATW`
- Year is 4 digits
- Last segment is 6 uppercase alphanumeric characters
- Letters avoid ambiguous characters where possible

## Security notes

- The frontend only requests one certificate ID at a time.
- The Apps Script only returns the matched row.
- The full Google Sheet is not exposed through the UI.
- Input is normalized before request.
- API response values are sanitized before rendering.
- Only `VALID` certificates are treated as verified.

## Troubleshooting

### Problem: verification always shows invalid

Check:

- The certificate ID exactly matches the sheet value
- The row status is `VALID`
- The sheet tab name matches `SHEET_NAME` in the Apps Script
- The deployed script is using the correct Google Sheet ID

### Problem: verification page shows service error

Check:

- `.env` has `VITE_CERTIFICATE_VERIFICATION_API_URL`
- The Apps Script deployment URL is the `/exec` URL, not `/dev`
- The frontend server was restarted after editing `.env`

### Problem: direct API URL does not return JSON

Check:

- The script was saved before deployment
- The latest version was deployed
- The web app access is public enough for frontend use

### Problem: QR code opens page but does not verify

Check:

- The QR URL includes `?id=`
- The certificate ID in the QR matches the sheet record
- The scanned URL points to the correct domain and route

## Final verification checklist

Before production rollout, confirm all of these:

- `.env` contains the correct Apps Script `/exec` URL
- Google Sheet has the correct headers
- At least one known valid certificate exists in the sheet
- `/verify` opens successfully
- `/verify?id=VALID_ID` auto-verifies successfully
- Unknown certificate IDs show invalid
- Non-`VALID` certificate rows show invalid
- Mobile layout works
- QR code opens the correct verification URL
- Existing pages and routes still work normally

## Related project files

- `src/App.js`
- `src/features/certificateVerification/pages/CertificateVerificationPage.jsx`
- `src/features/certificateVerification/services/certificateVerificationApi.js`
- `src/features/certificateVerification/services/google-apps-script.gs`
- `docs/certificate-verification/google-apps-script.gs`
