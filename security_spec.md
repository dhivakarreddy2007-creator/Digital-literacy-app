# Security Specification: Smart Digital Literacy Project

## 1. Data Invariants
- **Surveys Collection (`/surveys/{surveyId}`)**:
  - A survey response must contain all required demographic and usage fields.
  - No survey response can be modified or deleted after creation (Immutable audit trail).
  - Anyone can submit a survey, but reading is restricted to authenticated users.
  - Document ID poisoning is prevented by verifying `isValidId(surveyId)`.
- **Certificates Collection (`/certificates/{certId}`)**:
  - Single certificate documents (`get`) can be read publicly for third-party B.Tech project validation.
  - Certificate query scraping (`list`) is blocked.
  - Certificates are immutable after creation.
- **Progress Logs Collection (`/progress/{userId}`)**:
  - Reading, creating, and updating is strictly bound to the authenticated owner (`request.auth.uid == userId`).
  - Progress documents are strictly type-checked to prevent state hijacking or badge injections.

## 2. The "Dirty Dozen" Malicious Payloads
The following payloads are designed to challenge our Zero-Trust architecture. Our rules must reject all of them successfully.

### Payload 1: ID Poisoning Attack on Survey
Attempting to create a survey with a bloated/malicious character ID.
- **Path**: `/surveys/survey%%%%$$$$invalid-characters`
- **Result**: `PERMISSION_DENIED`

### Payload 2: Ghost Field Inject in Survey
Attempting to insert a hidden privilege/status field into the survey response.
- **Payload**:
  ```json
  {
    "id": "srv_abcdef1",
    "fullName": "Malicious User",
    "villageName": "Chinnur",
    "age": 30,
    "gender": "Male",
    "phoneNumber": "9999999999",
    "educationLevel": "Graduate",
    "isSmartphoneUser": true,
    "isInternetUser": true,
    "hasDigitalAwareness": true,
    "createdAt": "2026-06-05T00:00:00Z",
    "role": "admin"
  }
  ```
- **Result**: `PERMISSION_DENIED` (Keys length size limit matched strictly to 11).

### Payload 3: Invalid Type Injection
Attempting to submit survey with an age stored as a string or an excessively large number.
- **Payload**:
  ```json
  {
    "id": "srv_abcdef2",
    "fullName": "Malicious User",
    "villageName": "Chinnur",
    "age": "thirty",
    "gender": "Male",
    "phoneNumber": "9999999999",
    "educationLevel": "Graduate",
    "isSmartphoneUser": true,
    "isInternetUser": true,
    "hasDigitalAwareness": true,
    "createdAt": "2026-06-05T00:00:00Z"
  }
  ```
- **Result**: `PERMISSION_DENIED` (Age is not verified as integer type).

### Payload 4: Invalid Phone String Size Limit Attack (Denial of Wallet)
Attempting to populate phone number with 5MB of junk text.
- **Payload**:
  ```json
  {
    "id": "srv_abcdef3",
    "fullName": "Malicious User",
    "villageName": "Chinnur",
    "age": 30,
    "gender": "Male",
    "phoneNumber": "[Repeated 500,000 times]",
    "educationLevel": "Graduate",
    "isSmartphoneUser": true,
    "isInternetUser": true,
    "hasDigitalAwareness": true,
    "createdAt": "2026-06-05T00:00:00Z"
  }
  ```
- **Result**: `PERMISSION_DENIED` (PhoneNumber field size limit enforced <= 20).

### Payload 5: Unauthorized Survey Listing
An unauthenticated guest client attempting to fetch list queries on `/surveys`.
- **Result**: `PERMISSION_DENIED`

### Payload 6: Mutating Completed Surveys
Attempting to edit demographic details on a previously submitted survey.
- **Result**: `PERMISSION_DENIED` (Immutes all updates).

### Payload 7: Deleting Survey Records
Attempting to clear out survey logs from the database without authorization.
- **Result**: `PERMISSION_DENIED` (Immutes all deletions).

### Payload 8: Fake Badge Injections on Progress
A user trying to write arbitrary badges they didn't earn (e.g., "super_admin_coordinator").
- **Payload**:
  ```json
  {
    "surveyCompleted": true,
    "completedModules": [],
    "quizHighScores": {},
    "badges": ["super_admin_coordinator", "badge_of_god"]
  }
  ```
- **Result**: `PERMISSION_DENIED` (Rejected if list content is not validated, or write matches strict owner logic only).

### Payload 9: Hijacking Peer Progress Logs
User `alice` attempting to write or read user `bob`'s `/progress/bob` document.
- **Result**: `PERMISSION_DENIED`

### Payload 10: Injecting Malicious Types in quizHighScores Map
Attempting to store nested objects/arrays inside `quizHighScores`.
- **Payload**:
  ```json
  {
    "surveyCompleted": true,
    "completedModules": [],
    "quizHighScores": { "general": { "score": 100, "hack": true } },
    "badges": []
  }
  ```
- **Result**: `PERMISSION_DENIED`

### Payload 11: Fake Certificate Generation
An unauthenticated user attempting to register a fake passing certificate directly into `/certificates`.
- **Result**: `PERMISSION_DENIED`

### Payload 12: Certificate Score Poisoning
Attempting to record a quiz passing score of 10000% inside certificates.
- **Payload**:
  ```json
  {
    "id": "cert_xyz11",
    "userName": "Hacker",
    "villageName": "Vallur",
    "score": 10000,
    "date": "2026-06-05",
    "sha": "A1B2C3"
  }
  ```
- **Result**: `PERMISSION_DENIED` (Checks score boundary <= 100).

---

## 3. Test Runner Design
The complete `firestore.rules.test.ts` layout maps all assertions directly to the simulator or emulator framework.

```typescript
import { 
  initializeTestApp, 
  initializeAdminApp, 
  clearFirestoreData 
} from "@firebase/rules-unit-testing";

const PROJECT_ID = "wise-chalice-8r4g1";

describe("Smart Digital Literacy Security Rules", () => {
  afterEach(async () => {
    await clearFirestoreData({ projectId: PROJECT_ID });
  });

  it("denies survey creation with invalid path variables or Poisoned IDs", async () => {
    const db = initializeTestApp({ projectId: PROJECT_ID, auth: null }).firestore();
    const maliciousDoc = db.collection("surveys").doc("survey%%%%$$$$invalid-characters");
    await expect(maliciousDoc.set({ fullName: "A", villageName: "B" })).to.be.rejected;
  });

  it("prevents ghost field insertion on survey submissions", async () => {
    const db = initializeTestApp({ projectId: PROJECT_ID, auth: null }).firestore();
    const doc = db.collection("surveys").doc("srv_abcdef1");
    await expect(doc.set({
      id: "srv_abcdef1",
      fullName: "Malicious User",
      villageName: "Chinnur",
      age: 30,
      gender: "Male",
      phoneNumber: "9999999999",
      educationLevel: "Graduate",
      isSmartphoneUser: true,
      isInternetUser: true,
      hasDigitalAwareness: true,
      createdAt: "2026-06-05T00:00:00Z",
      role: "admin"
    })).to.be.rejected;
  });

  it("restricts progress reads and writes to the correct authenticated owner", async () => {
    const aliceDb = initializeTestApp({ projectId: PROJECT_ID, auth: { uid: "alice" } }).firestore();
    const bobDb = initializeTestApp({ projectId: PROJECT_ID, auth: { uid: "bob" } }).firestore();

    await expect(aliceDb.collection("progress").doc("bob").get()).to.be.rejected;
    await expect(bobDb.collection("progress").doc("bob").set({
      surveyCompleted: false,
      completedModules: [],
      quizHighScores: {},
      badges: []
    })).to.be.fulfilled;
  });
});
```
