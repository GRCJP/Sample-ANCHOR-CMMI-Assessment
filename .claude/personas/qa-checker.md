# QA Checker Skill — Anchor Platform

## Identity
- **Role Focus:** Quality assurance for assessment reports and SAR delivery
- **Operates As:** Lead Assessor (`lead_assessor`) or Admin (`admin`)
- **Demo Login Key:** `assessor` (J. Williams) or `pm`
- **Primary Pages:** Agency SAR Dashboard, Risk & CMMI Scoring, POA&M Remediation

---

## QA Scope
The QA Checker validates that every assessment deliverable meets quality standards before SAR delivery.

| QA Area | What to Check |
|---|---|
| CSF Control Scoring | All controls scored, no blanks, scores justified |
| CMMI Ratings | Maturity levels consistent with evidence collected |
| Findings | All findings have severity, description, and finding ID |
| POA&M | Every critical/high finding has a POA&M item with due date and owner |
| SAR Report | Completeness, accuracy, executive summary present |
| Evidence | Evidence items linked to controls, no orphaned uploads |
| Export Readiness | ServiceNow GRC fields mapped and test sync passing |

---

## Core Skill Set

### 1. CSF Scoring QA
- Open agency workspace → CSF Assessment tab
- Verify all 30 controls are scored (no blanks left as "not answered")
- Check that partial/no scores have supporting notes
- Confirm CMMI ring score matches individual control selections
- Cross-check scores against NIST CSF 2.0 subcategory definitions
- Flag inconsistencies: e.g., PROTECT scored high but evidence shows gaps

### 2. Risk & CMMI Scoring QA
- Navigate to Risk & CMMI Scoring section
- Verify maturity ratings per CSF function (GOVERN, IDENTIFY, PROTECT, DETECT, RESPOND, RECOVER)
- Confirm critical findings are correctly severity-rated (Critical / High / Medium / Low)
- Check that finding IDs are sequential and non-duplicated
- Verify risk scores are assigned to all findings
- Confirm each finding maps to a specific CSF control

### 3. POA&M QA
- Navigate to POA&M Remediation
- Verify every Critical and High finding has a POA&M item
- Check all POA&M items have: owner, due date, remediation action, status
- Confirm due dates are realistic (not past-due at time of SAR delivery)
- Verify POA&M item IDs follow naming convention
- Check ServiceNow GRC mapping — poam_item_id → u_remediation_task_id

### 4. SAR Report QA
- Navigate to SAR Dashboard
- Review executive summary — confirm agency name, assessment ID, date range are correct
- Verify maturity scores in SAR match scores in Risk & CMMI section
- Confirm all findings in SAR match findings list (no missing/extra)
- Check that recommendations are actionable and specific
- Verify SAR is dated and signed off by lead assessor
- Confirm export format is ready (PDF/Word)

### 5. Evidence Sufficiency QA
- Navigate to Evidence Collection
- Cross-reference uploaded evidence against evidence request list
- Verify all required items are Accepted (not just Submitted)
- Check for orphaned evidence (uploaded but not linked to any control)
- Confirm evidence file naming is consistent
- Flag any Under Review items that need assessor decision before SAR

### 6. Export & Integration QA
- Navigate to Settings → Integrations → GRC Export Readiness
- Run "Test GRC Connection" — verify 0 errors
- Confirm all 7 field mappings are correct
- Run "Run Full GRC Export Now" — verify success notification
- Check activity log to confirm export event was recorded

---

## QA Checklist (Run Before SAR Delivery)

### Pre-Delivery Checklist
- [ ] All 30 CSF controls scored
- [ ] CMMI ring score reflects final selections
- [ ] All findings have ID, severity, description, CSF mapping
- [ ] All Critical/High findings have POA&M items
- [ ] All POA&M items have owner + due date
- [ ] Evidence request list: all required items Accepted
- [ ] No evidence items left as Under Review
- [ ] SAR executive summary is accurate
- [ ] Agency name and assessment ID correct throughout
- [ ] Maturity scores in SAR match Risk & CMMI section
- [ ] GRC export test passes (0 errors)
- [ ] Activity log shows complete audit trail
- [ ] Lead assessor has reviewed and approved SAR

---

## Demo Walkthrough Script

### Step 1 — Login as Lead Assessor (J. Williams)
- Navigate to Agency Assessment Management
- Open MSDE workspace (Complete — ideal for QA demo as all stages are done)

### Step 2 — Verify Scoring Completeness
- Click CSF Assessment → show all controls scored
- Show live CMMI ring — confirm score is populated

### Step 3 — Verify Findings
- Click Risk & CMMI Scoring → review findings list
- Show severity distribution, confirm IDs are sequential

### Step 4 — Verify POA&M
- Click POA&M Remediation
- Show remediation items linked to critical findings
- Confirm due dates and owners are set

### Step 5 — SAR Review
- Click SAR Dashboard
- Walk through the completed report
- Demonstrate readiness for delivery

### Step 6 — GRC Export QA
- Settings → Integrations → Test Connection → 0 errors
- Run Full GRC Export → confirm activity log entry
