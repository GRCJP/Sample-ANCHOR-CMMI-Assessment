# IAM Engineer Skill — Anchor Platform

## Identity
- **Name:** James Wilson (admin access)
- **Role:** `admin` — Settings/IAM-focused workflow
- **Demo Login Key:** `pm`
- **Focus Area:** Settings → IAM Users, Integrations, Activity Log

---

## Access Map
| Settings Tab | Access |
|---|---|
| IAM Users | ✅ Full — view, invite, deactivate, filter |
| Invite User | ✅ Full — role assignment, agency scoping, email preview |
| Role Definitions | ✅ View |
| Integrations | ✅ Full — ServiceNow, email, connected systems |
| GRC Export Architecture | ✅ Full — field mapping, test connection |
| Activity Log | ✅ Full — audit trail of all platform actions |

---

## Core Skill Set

### 1. User Provisioning
- Invite new users via Settings → IAM → Invite User
- Assign roles: Admins, LeadAssessors, Assessors, AgencyPOCs, DoITReviewers
- Scope agency_rep users to their specific agency (MDOT, DPSCS, MSDE)
- Set invitation expiry (24hr / 72hr / 7 days)
- Preview the invitation email before sending
- Send test email to confirm SMTP delivery

### 2. User Management
- View all platform users with role and status filters
- Filter by role (All / Admin / Lead Assessor / Assessor / Agency POC / DoIT Reviewer)
- Filter by status (All / Active / Pending / Inactive)
- Deactivate users who should no longer have access
- Resend invitations to pending users

### 3. Role-Based Access Verification
- Confirm each role's nav visibility using the access matrix
- Verify agency_rep users are scoped to correct agency via data-require-agency
- Confirm admin-only sections (Settings) are not visible to other roles
- Confirm doit_reviewer has read-only access to dashboards only

### 4. Integration Management
- Configure ServiceNow GRC instance URL and OAuth credentials
- Set sync frequency (real-time / 15min / hourly)
- Select data modules to sync (Risk + POA&M + Evidence)
- Test connection — verify 847 records, 0 errors
- Review Connected Systems table (ServiceNow, DoIT SSO, S3, SharePoint)
- Configure GRC field mapping for export readiness

### 5. Audit & Compliance
- Review platform activity log — full audit trail
- Filter by user, role, action type
- Export activity log as CSV
- Verify sensitive actions (scoring, evidence upload, user changes) are logged

---

## Demo Walkthrough Script

### Step 1 — Navigate to Settings
- Login as PM → Click **Settings** in sidebar
- Default view: IAM Users tab

### Step 2 — Review Users
- Show current user roster with roles and statuses
- Filter by "Agency POC" → shows the 3 agency reps
- Filter by "Active" → shows active platform users
- Point out role/agency pairing (MDOT rep scoped to MDOT only)

### Step 3 — Invite a New User
- Click Invite User tab
- Fill in name, email, select role "Assessor"
- Watch agency field appear/disappear based on role selection
- Add a custom invitation message
- Show live email preview update
- Click "Send Invitation" → confirm success notification

### Step 4 — Integrations
- Click Integrations tab
- Show ServiceNow GRC config (URL, OAuth, sync status)
- Click "Test Connection" → "847 records, 0 errors"
- Scroll to GRC Export Readiness card
- Walk through field mapping table (Anchor → ServiceNow fields)
- Show JSON export payload example

### Step 5 — Activity Log
- Click Activity Log tab
- Show full audit trail with timestamps, users, roles, actions
- Point out: scoring events, evidence uploads, login events
- Click "Export Log" → confirm CSV export notification

---

## Security Considerations for Demo
- Settings nav item only visible to `admin` role — verified via data-visible-to="admin"
- All other roles land on dashboard with no Settings access
- Agency scoping enforced at both nav level and auth-guard body attribute level
- Activity log provides complete non-repudiation trail
