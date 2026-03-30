# Evidence Collector Skill — Anchor Platform

## Identity
- **Role Focus:** Evidence sufficiency, artifact collection, upload feature testing
- **Operates As:** Assessor (`assessor`) on agency pages, or Agency Rep (`agency_rep`) for agency-side uploads
- **Demo Login Keys:** `fieldassessor` (assessor view) · `mdot` / `dpscs` / `msde` (agency rep view)
- **Primary Pages:** Agency Evidence Collection section

---

## Evidence Collector Scope
This skill covers the full evidence lifecycle — from requesting evidence, to upload, review, acceptance, and sufficiency validation.

---

## Core Skill Set

### 1. Evidence Request Management (Assessor Side)
- Review the evidence request list per agency
- Identify what's required vs. optional per assessment template
- Track submission status for each requested item:
  - **Not Started** — agency hasn't begun
  - **Pending** — uploaded, awaiting assessor review
  - **Under Review** — assessor actively reviewing
  - **Accepted** — evidence is sufficient
  - **Rejected** — evidence is insufficient, must resubmit
- Send reminders to agencies for overdue items
- Add new evidence requests mid-assessment if gaps are discovered

### 2. Upload Feature Testing
- Navigate to Evidence Collection on any agency page
- Test file upload via the upload zone (click to browse OR drag-and-drop)
- Verify supported file types: PDF, DOCX, XLSX, PNG, JPG
- Verify max file size enforcement: 50MB per file
- Confirm file appears in upload list with name and size
- Confirm status transitions: Uploading → Uploaded
- Test submitting evidence with evidence category and CSF function selected
- Test saving as draft
- Verify previously submitted files list populates correctly

### 3. Evidence Sufficiency Validation
For each CSF function area, verify evidence covers:

| CSF Function | Key Evidence Types |
|---|---|
| GOVERN | Information Security Policy, Risk Management Framework, Org Chart |
| IDENTIFY | Software/Hardware Asset Inventory, Data Classification Policy |
| PROTECT | Access Control Policy, MFA Configuration, Training Records, Patch Logs |
| DETECT | SIEM configuration docs, Log management policy, Monitoring procedures |
| RESPOND | Incident Response Plan, IR test results, Communication procedures |
| RECOVER | Disaster Recovery Plan, BCP documentation, Recovery test results |

### 4. Evidence Completeness Check
Run through this matrix per agency before moving to CSF scoring:
- [ ] Minimum 1 evidence item per CSF function area
- [ ] Information Security Policy present and dated within 2 years
- [ ] Network diagram current (within 12 months)
- [ ] Patch management logs cover at least 90 days
- [ ] Training records show completion rates
- [ ] No critical evidence items left as Pending or Under Review
- [ ] All uploaded files are readable (not corrupted, not password-protected)
- [ ] Third-party vendor contracts reviewed for security provisions

### 5. Evidence Linking to Controls
- In CSF Assessment, each control has an evidence upload button
- Upload evidence directly linked to specific controls
- Verify evidence file names follow convention: `[AGENCY]_[Category]_[Date].[ext]`
- Flag controls with no linked evidence — these cannot be scored "Yes" or "Partial"

### 6. Agency-Side Upload Testing (Agency Rep Perspective)
- Login as agency rep (e.g., MDOT — Lisa Harmon)
- Navigate to Evidence Collection
- Select evidence category and CSF function from dropdowns
- Add description/notes for the upload
- Upload a file via the upload zone
- Confirm it appears in Previously Submitted Files with correct status badge
- Check notifications panel — confirm upload acknowledgment appears

---

## Upload Feature Test Script

### Test 1 — Basic Upload Flow
1. Login as `mdot` (agency rep)
2. Navigate to Evidence Collection
3. Select Category: "Software Inventory"
4. Select CSF Function: "IDENTIFY — Asset Management"
5. Add note: "Q1 2026 software inventory export from SCCM"
6. Click upload zone → select a file
7. ✅ Verify: file appears in list as "Uploading..." then "Uploaded"
8. Click "Submit Evidence"
9. ✅ Verify: success notification fires
10. ✅ Verify: file appears in "Previously Submitted Files"

### Test 2 — Draft Save
1. Upload a file but click "Save Draft" instead of "Submit Evidence"
2. ✅ Verify: "Draft saved" notification fires
3. Navigate away and return
4. ✅ Verify: draft state is preserved

### Test 3 — Multiple File Types
Test upload with each supported type:
- [ ] PDF — policy document
- [ ] DOCX — procedure document
- [ ] XLSX — inventory spreadsheet
- [ ] PNG — network diagram screenshot
- [ ] JPG — screenshot

### Test 4 — Assessor Evidence Review
1. Login as `fieldassessor` (assessor)
2. Navigate to MDOT → Evidence Collection
3. Review submitted files list
4. Verify status badges are visible (Accepted / Under Review / Rejected)
5. ✅ Verify: assessor can see all submitted files

---

## Evidence Sufficiency Red Flags
Flag these issues before clearing evidence as sufficient:
- ❌ Policy document older than 3 years
- ❌ Network diagram without date or version
- ❌ Patch logs covering fewer than 30 days
- ❌ Training records showing less than 70% completion
- ❌ No evidence for DETECT function (SIEM/monitoring)
- ❌ IR Plan never tested (flag finding: "IR Plan not tested")
- ❌ Vendor contracts with no security provisions section

---

## Demo Talking Points
- Dual-interface: agency reps upload on their side, assessors review on theirs — same data, different views
- Real-time status tracking eliminates email chains about "did you get my file?"
- Evidence directly linked to CSF controls — no manual cross-referencing
- Overdue alerts built into notifications — agencies know exactly what's late
