# Phase E: Real CSV Exports + SAR Print CSS Isolation

**Date:** 2026-04-05  
**Status:** Approved  

## Overview

Replace all stub export buttons with real implementations using the Blob API. Fix SAR printing by isolating output in a new browser window. Add a statewide summary CSV to the dashboard. All changes confined to 4 HTML files; no new libraries or files required.

## Architecture

**Files modified:**
- `agency-msde.html` — SRTM CSV, POA&M CSV, SAR print isolation
- `agency-dpscs.html` — SRTM CSV, POA&M CSV, SAR print isolation
- `agency-mdot.html` — SRTM CSV, POA&M CSV, SAR print isolation
- `main-dashboard.html` — statewide summary CSV

**No new files, no new libraries.** CSV export uses the Blob API pattern already established in `src/js/agency-assessment.js` (`downloadCSV()`). That utility is replicated inline in each agency `<script>` block since agency pages do not import the JS module.

The statewide CSV reuses `computeSrtmStats()` added in Phase D.

## Feature 1: Agency SRTM CSV Export

**Trigger:** Existing "Export Full SRTM" button in each agency file  
**Function:** `exportSrtm()`  
**Data source:** `localStorage.getItem('anchor_srtm_{agencyKey}')`

**Columns:**
| Column | Source |
|--------|--------|
| Control ID | `ctrl.id` |
| CSF Function | `ctrl.fn` or derived from control ID prefix |
| Control Name | `ctrl.name` or `ctrl.title` |
| Implementation Status | `ctrl.impl` |
| Result | `ctrl.result` (MET / NOT MET / N/A) |
| CMMI Score | `ctrl.cmmiScore` |
| Observations | `ctrl.obs` |

**Filename:** `{AGENCY_KEY}_SRTM_Export_{YYYY-MM-DD}.csv`  
**Fallback:** If no SRTM data in localStorage, call `notify('No assessment data found — complete the CSF Assessment first.')` and return.

## Feature 2: Agency POA&M CSV Export

**Trigger:** Existing "Export POA&M" button in each agency file  
**Function:** `exportPoam()`  
**Data source:** Same `anchor_srtm_{agencyKey}` — filter to NOT MET controls only

**Columns:**
| Column | Source |
|--------|--------|
| Item # | Row counter (1-based) |
| Control ID | `ctrl.id` |
| Finding Description | `ctrl.obs` or `ctrl.name + ' — remediation required'` |
| CSF Function | `ctrl.fn` |
| Priority | Auto-assigned: CMMI ≤ 1 → P1, CMMI ≤ 2 → P2, else P3 |
| Owner | Auto-assigned: GOVERN/RESPOND → CISO, others → IT Director |
| Due Date | Auto-assigned: P1 → 90 days, P2 → 180 days, P3 → 270 days from today |
| Status | "Open" |

**Filename:** `{AGENCY_KEY}_POAM_Export_{YYYY-MM-DD}.csv`  
**Fallback:** If no NOT MET controls, `notify('No open POA&M items — all controls are MET or N/A.')` and return.

## Feature 3: SAR Print Isolation

**Trigger:** "Print / Save PDF" button in the SAR modal of each agency file  
**Current:** `onclick="window.print()"` — prints entire page  
**New function:** `printSar()`

**Algorithm:**
1. Get SAR modal content: `document.querySelector('#sar-modal > div').innerHTML` — grabs the inner white card div, excluding the dark overlay background
2. Open new window: `const w = window.open('', '_blank', 'width=900,height=700')`
3. Write HTML shell with print-optimized CSS and SAR content
4. Call `w.focus(); w.print(); w.close()`

**Print CSS in new window:**
- Background: white; text: black
- Font: system-ui, 11pt
- Margins: 1in all sides
- Page size: letter
- `page-break-inside: avoid` on tables and section headers
- `page-break-before: always` on major SAR sections (Scope, Findings, Recommendations)
- Hide any buttons/interactive elements inside the modal content

**Fallback:** If `window.open()` returns null (popup blocked), fall back to `window.print()` and show `notify('Pop-up blocked — using standard print. For best results, allow pop-ups for this page.')`.

## Feature 4: Dashboard Statewide Summary CSV

**Trigger:** "Export Trend Report" button in `main-dashboard.html` (line 274)  
**Current:** Inline `onclick="notify(...)"` — replace with `onclick="exportTrendReport()"` and add the function  
**Data source:** `computeSrtmStats()` called for each of the 3 agencies (msde, dpscs, mdot)

**Columns:**
| Column | Source |
|--------|--------|
| Agency | Agency display name |
| Avg CMMI Score | `stats.avgCmmi` or AGENCY_MATURITY fallback |
| Controls Assessed | `stats.totalControls` |
| MET | `stats.met` |
| NOT MET | `stats.notMet` |
| N/A | `stats.na` |
| Open POA&M Items | `stats.poamCount` |

**Filename:** `MD_Statewide_SRTM_Summary_{YYYY-MM-DD}.csv`  
**Fallback:** If no SRTM data for any agency, use AGENCY_MATURITY constants for CMMI column and show dashes for control counts.

## Helper: Inline downloadCSV

Each agency file needs a local `downloadCsv(filename, rows)` function (identical to the one in `agency-assessment.js`). Add it once per file inside the existing `<script>` block. Skip adding to `main-dashboard.html` if it already has one; otherwise add it there too.

```javascript
function downloadCsv(filename, rows) {
  const csv = rows.map(r =>
    r.map(c => {
      const s = String(c == null ? '' : c);
      return /[,"\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
    }).join(',')
  ).join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
```

## Success Criteria

- [ ] "Export Full SRTM" on each agency page downloads a real CSV with control data
- [ ] "Export POA&M" on each agency page downloads a CSV of NOT MET controls only
- [ ] Both CSVs show fallback notify() when localStorage has no SRTM data
- [ ] "Print / Save PDF" opens a clean new window with only SAR content and prints it
- [ ] Popup-blocked fallback degrades to window.print() gracefully
- [ ] "Export Trend Report" on dashboard downloads statewide summary CSV
- [ ] All exports produce dated filenames
- [ ] No changes to any other buttons or functionality
