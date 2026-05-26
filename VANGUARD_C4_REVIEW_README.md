# Vanguard C4 Marketing Site Review Package — v2

## Overview

This package contains the updated local redesign of the current Azure-hosted homepage for **Vanguard C4**, the umbrella marketing brand for **SkyPilot**, **Norden II**, and **S.C.O.U.T. / SONAR**. Nothing has been pushed to GitHub or Azure. The redesign is intended for your review first, then approval or adjustment before deployment.

## What Changed

The homepage now leads with **Vanguard C4** instead of the old placeholder identity. The phrase **Into the Savage Skies — We Ascend** remains, but it is treated as a centered brand motto above the main **Vanguard** / **C4** hierarchy. The opening screen explains the value proposition immediately: Vanguard C4 is a **tactical operations center for squadrons** that want readiness visibility, mission planning, aircraft inventory, pilot tracking, recognition workflows, AARs, operational oversight, and secure module-to-module data movement through Vanguard Cloud Sync.

| Area | Previous Direction | New Direction |
|---|---|---|
| Main identity | Combined Air Operations Center placeholder | **Vanguard C4** |
| Hero hierarchy | Atmospheric title first | **Into the Savage Skies — We Ascend** above **Vanguard**, with **C4** centered underneath |
| Product framing | Disconnected links/tools | **SkyPilot**, **Norden II**, and **S.C.O.U.T. / SONAR** as one connected suite |
| Visitor impression | Placeholder command hub | Cinematic tactical marketing homepage |
| Deployment | Existing GitHub/Azure workflow unchanged | Local-only package for review |
| Data movement | Manual file handoffs and scattered updates | Azure-backed **Vanguard Cloud Sync** connecting SkyPilot, Norden II, and S.C.O.U.T. / SONAR |

## Included Files

The key changed files are `index.html`, `style.css`, and `app.py`. The media assets required for local review are included in the `assets/` directory, including the Vanguard C4 emblem, Scout patch, SkyPilot media, Norden II media, the new cloud-sync diagram, and evidence-section screenshot previews. The file `vanguard_c4_design_direction.md` explains the messaging strategy behind the redesign, while `repo_audit_notes.md` documents the repository audit and validation findings.

## v2 Asset Updates

This v2 package includes the newly incorporated product media that were not present in the first review ZIP. The SkyPilot card now uses the supplied SkyPilot visual/video assets, the Norden II card uses the supplied Norden II animated media, and the S.C.O.U.T. card uses the Scout patch concept. The lower evidence section is also populated with product-preview imagery instead of broken or empty placeholders. This update also adds `assets/vanguard_cloud_sync_diagram.webp` and a new Secure Cloud Sync section explaining that approved readiness, CPR, loadout, mission, status, and command data can flow through the Azure backend instead of being manually passed through Google Drive.

| Asset Area | Current Treatment | My Opinion |
|---|---|---|
| Vanguard C4 emblem | Supporting suite-status card | Stronger than using it as the main hero centerpiece because the wordmark remains more readable. |
| SkyPilot | Product media integrated into module card | This now feels like a real product panel rather than a generic placeholder. |
| Norden II | Animated/logo media integrated into module card | The green tactical look fits the military systems tone well. |
| S.C.O.U.T. / SONAR | Scout patch plus screenshot evidence | The patch is strong and should remain; final screenshot crops can still be refined. |
| Vanguard Cloud Sync | Supplied architecture diagram plus role-based explanation | This is the missing connective tissue; it makes the suite feel operational instead of just visually connected. |
| Closing tagline | Four-line punchline near the mission close | Strong and memorable: SkyPilot tells readiness, Norden II tells fight planning, S.C.O.U.T. tells the squadron what to do, and Vanguard C4 keeps it connected. |

## How To Preview

The simplest way to preview is to unzip the package and open `index.html` in a browser. If you want to preview it through the lightweight Python server, install the requirements if needed and run:

```bash
pip install -r requirements.txt
python app.py
```

Then open `http://127.0.0.1:8000/` in a browser.

## Validation Notes

I ran a local reference check against `index.html` and `style.css` and found no missing local assets. I also scanned the deliverable homepage files and found no forbidden legacy acronym wording. The file named `norden_icon` from the upload folder was identified as a PNG and converted into `assets/norden_icon.webp` for safe inclusion in the review package. The supplied cloud-sync diagram is included as `assets/vanguard_cloud_sync_diagram.webp`.

## My Opinion

This is now ready for review as the stronger v2 package. It communicates the correct hierarchy: **Vanguard C4 is the squadron operating system**, while SkyPilot, Norden II, and S.C.O.U.T. / SONAR are the connected mission systems underneath it. I would not push this to Azure until you approve the final screenshot order and wording, but as a marketing-site direction, it is a major upgrade from the placeholder page.

## Recommended Next Adjustments

The next best improvements are to confirm the final wording for each module, decide whether the final call-to-action should say `Build the TOC`, `Request Access`, `Explore the Suite`, or another launch-specific phrase, and approve the exact screenshots/crops used in the evidence section.
