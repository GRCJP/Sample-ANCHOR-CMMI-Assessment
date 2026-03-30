# Government Agency POC Skill — Anchor Platform

## Identity
- **Name:** Lisa Harmon (MDOT) · Angela Torres (DPSCS) · Patricia Hall (MSDE)
- **Role:** Agency Representative (`agency_rep`)
- **Org:** Maryland Executive Branch Agency
- **Demo Login Keys:** `mdot` · `dpscs` · `msde`
- **Landing Pages:** agency-mdot.html · agency-dpscs.html · agency-msde.html

---

## Access Map
| Module | Access | Notes |
|---|---|---|
| State Cybersecurity Dashboard | ❌ | Statewide data — not for agency view |
| Agency Assessment Management | ❌ | Admin/assessor only |
| Own Agency Workspace | ✅ Full | Scoped to their agency only |
| Other Agency Workspaces | ❌ | Auth-guarded by data-require-agency |
| Intake & Scoping | ✅ | Complete and submit agency profile |
| Evidence Collection | ✅ | Upload evidence artifacts |
| CSF Assessment | ❌ | Assessor tool only |
| Risk & CMMI Scoring | ❌ | Assessor tool only |
| POA&M Remediation | ❌ | Assessor tool only |
| SAR Dashboard | ❌ | Delivered by assessor after completion |

---

## Core Skill Set

### 1. Agency Intake & Scoping
- Complete the agency profile form (name, contact, IT environment details)
- Confirm system type, size tier, data classification, cloud environments
- Answer questionnaire about MFA coverage, SIEM deployment, IR plan status
- Review and confirm pod assignment and wave scheduling
- Submit the intake package to the Assurit assessment team

### 2. Evidence Collection
- Review the evidence request list — know what's required vs. optional
- Upload evidence artifacts (PDF, DOCX, XLSX, PNG, JPG — max 50MB)
- Categorize uploads by Evidence Category and NIST CSF Function
- Track submission status: Pending → Under Review → Accepted/Rejected
- Respond to assessor requests for additional or revised evidence
- Monitor overdue items and prioritize uploads

### 3. Findings Response
- Review draft findings issued by the Assurit assessment team
- Submit formal agency responses: Concur / Dispute / Risk Accepted
- Provide remediation timeline and action plan for each finding
- Save drafts and submit all responses before the deadline

### 4. Assessment Timeline Awareness
- Use the workflow progress tracker (top banner) to see full pipeline status
- Know current stage and what's coming next
- Track target completion date
- Receive and act on notifications (overdue items, new findings, evidence accepted)

---

## Demo Walkthrough Script

### MDOT Rep (Lisa Harmon) — In Progress
**Step 1 — Login**
- Select "Agency Rep — MDOT (L. Harmon)" from dropdown
- Land directly on MDOT workspace — no access to statewide dashboard

**Step 2 — Observe Pipeline Tracker**
- Top banner shows: ✅ Intake → **▶ Evidence (Active)** → ○ CSF → ○ Risk → ○ POA&M → ○ SAR
- Makes clear where they are in the process

**Step 3 — Evidence Collection**
- Click Evidence Collection in sidebar
- Review evidence request table — 3 items submitted, 3 pending/overdue
- Upload a new file using the upload zone
- Confirm file appears in "Previously Submitted Files"

**Step 4 — Notifications**
- Check the notifications panel
- Show overdue warning for Software Inventory
- Show "6 Draft Findings Ready for Review" alert

### MSDE Rep (Patricia Hall) — Complete
**Step 1 — Login as MSDE**
- Land on MSDE workspace
- Pipeline tracker shows all 6 stages complete (all green)
- Demonstrates what a finished assessment looks like from the agency side

---

## What the Agency POC Cannot Do
- View other agencies' data
- Access CSF scoring or risk analysis tools
- See the statewide compliance dashboard
- Modify assessment scope or template settings
- View the SAR until delivered by the assessor

---

## Key Demo Talking Points
- Agency reps have a focused, clean view — only what they need to complete their dependencies
- Automatic scoping via auth-guard — no manual access control per user
- Real-time evidence status tracking reduces back-and-forth with assessors
- Overdue notifications built in — reduces missed deadlines
