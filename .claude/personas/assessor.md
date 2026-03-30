# Assessor Persona — Anchor Platform

## Identity
- **Name:** R. Okafor
- **Role:** Assessor (`assessor`)
- **Org:** Assurit Consulting Group
- **Demo Login Key:** `fieldassessor`
- **Email:** r.okafor@assurit.com
- **Landing Page:** main-dashboard.html → auto-redirects to Agency Assessment Management

---

## What the Assessor Can Access

### Main Dashboard (main-dashboard.html)
| Module | Access | Notes |
|---|---|---|
| State Cybersecurity Dashboard | ❌ | Admin / Lead Assessor / DoIT Reviewer only |
| Agency Assessment Management | ✅ Full | View, filter, open any agency — **default landing** |
| CSF Intake & Upload | ✅ Full | Conduct intake, score controls |
| 2-Year Pipeline | ❌ | Admin / Lead Assessor / DoIT Reviewer only |
| Workflow Templates | ✅ Full | Apply and configure templates |
| Settings | ❌ | Admin only |

### Agency Workspaces (agency-mdot/dpscs/msde.html)
| Section | Access | Notes |
|---|---|---|
| Intake & Scoping | ✅ Full | Complete agency setup form |
| Evidence Collection | ✅ Full | Upload and review evidence |
| CSF Assessment | ✅ Full | Score all 30 NIST CSF controls |
| Risk & CMMI Scoring | ✅ Full | Set maturity levels, review risk |
| POA&M Remediation | ✅ Full | Track and manage remediation items |
| SAR Dashboard | ✅ Full | Review and deliver assessment report |

---

## Assessor Skill Set

### Core Assessment Skills
1. **Agency Intake** — Complete agency profile, confirm IT environment details, pod/wave assignment
2. **Evidence Review** — Upload, review, and accept/reject evidence artifacts
3. **CSF Control Scoring** — Score each of the 30 NIST CSF 2.0 controls (Yes / Partial / No) with CMMI 0–5 ratings
4. **Risk & Findings** — Identify and document critical/high/medium findings, assign risk scores
5. **POA&M Management** — Create, assign, and track remediation tasks with due dates
6. **SAR Delivery** — Compile and deliver the Security Assessment Report

### Platform Navigation Skills
1. Land directly on **Agency Assessment Management** — find assigned agencies immediately
2. Use the **Assessment Pipeline tracker** (top banner on agency pages) to see stage at a glance
3. Navigate all 6 agency workspace sections (Intake → Evidence → CSF → Risk → POA&M → SAR)
4. Apply **Workflow Templates** before beginning a new assessment
5. Submit CSF Intake via **CSF Intake & Upload** module

---

## Demo Walkthrough Script

### Step 1 — Login
- Select **"Assessor — R. Okafor"** from the demo dropdown
- Land directly on **Agency Assessment Management** (bypasses State Dashboard)
- See the 3 agencies listed with status, stage, and progress %

### Step 2 — Find Your Agency
- Locate DPSCS (In Progress · CSF Assessment · 35%)
- Click **Open** to enter the DPSCS workspace

### Step 3 — Review the Pipeline
- The workflow progress tracker at the top shows: Intake ✓ → Evidence ✓ → **CSF Active** → Risk → POA&M → SAR
- Click **CSF Assessment** in the sidebar

### Step 4 — Score Controls
- Score NIST CSF controls across GOVERN, IDENTIFY, PROTECT, DETECT, RESPOND, RECOVER
- Watch the live CMMI ring score update in real time
- Add evidence uploads per control

### Step 5 — Risk & Findings
- Navigate to **Risk & CMMI Scoring**
- Review flagged findings, assign severity
- Confirm maturity scores per function

### Step 6 — POA&M
- Navigate to **POA&M Remediation**
- Create a remediation task for a critical finding
- Set due date and owner

### Step 7 — SAR Dashboard
- Navigate to **SAR Dashboard**
- Review the compiled assessment report
- Demonstrate export/delivery capability

---

## What the Assessor Cannot Do
- View the **State Cybersecurity Dashboard** (statewide analytics — admin/lead only)
- View the **2-Year Pipeline** (scheduling view — admin/lead only)
- Access **Settings** or IAM user management
- Delete agencies from the tracker
- Modify system-level configuration

---

## Key Differentiators vs Other Roles
| | Admin | Lead Assessor | **Assessor** | DoIT Reviewer | Agency Rep |
|---|---|---|---|---|---|
| State Dashboard | ✅ | ✅ | ❌ | ✅ (read) | ❌ |
| Agency Mgmt | ✅ | ✅ | ✅ | ❌ | ❌ |
| 2-Year Pipeline | ✅ | ✅ | ❌ | ✅ (read) | ❌ |
| CSF Scoring | ✅ | ✅ | ✅ | ❌ | ❌ |
| Settings / IAM | ✅ | ❌ | ❌ | ❌ | ❌ |
| Own Agency Only | ❌ | ❌ | ❌ | ❌ | ✅ |
