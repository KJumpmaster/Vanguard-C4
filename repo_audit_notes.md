# Vanguard C4 Repository Audit Notes

## Live site observation

The Azure-hosted homepage currently presents a cinematic, dark military/aviation-themed page titled `COMBINED AIR OPERATIONS CENTER`, with the tagline `Into the Savage Skies - We Ascend`. It contains three visual panels: NORDEN II, a center Sky Pilot logo video, and AIR TASKING ORDER. The live page currently reads more like a placeholder command hub than a marketing site for a product suite.

## Repository access

The repository inferred from the GitHub settings link is public and accessible at `https://github.com/KJumpmaster/Home`. It was cloned successfully to `/home/ubuntu/Home`.

## Deployment

The GitHub Actions workflow `.github/workflows/main_skypilot-toc.yml` deploys the full repository to the Azure Web App named `SKYPILOT-TOC` on pushes to `main`, using the secret `AZURE_WEBAPP_PUBLISH_PROFILE`. This means changes pushed to `main` are likely to redeploy the Azure site automatically.

## Primary site files

The current public homepage is defined mainly by `index.html` and `style.css`. It loads these media assets: `caoc_banner.mp4`, `Norden II Logo.mp4`, `SKY_PILOT_LOGO.mp4`, `ATO.mp4`, `Wonder.mp3`, and `metal_background.png`.

## Important cleanup findings

The repository mixes multiple older purposes: a static Azure homepage, a tiny Flask app, legacy Jekyll files, aircraft-data automation, and Sky Pilot research-tree prototypes. The new marketing-site direction should keep the valuable cinematic assets but reorganize the homepage around `Vanguard C4` as the suite, with modules for `SkyPilot`, `Norden 2`, and `Scout`.

## Initial opinion

The cinematic is worth keeping, but the current first impression is not strong enough. The main headline should become `Vanguard C4`, with a direct value proposition beneath it. `Into the Savage Skies — We Ascend` should become a smaller brand line, not the main message. The module cards should communicate outcomes: squadron command, tactical planning, and scouting/intelligence/coordination, rather than sounding like isolated tools.

## Local redesign preview findings

The redesigned local homepage loads successfully from `file:///home/ubuntu/Home/index.html`. The hero section now gives immediate prominence to `Vanguard C4`, with the cinematic background visible but darkened enough for readable copy. The navigation, hero call-to-action buttons, and suite status panel render correctly. The module section presents SkyPilot, Norden 2, and Scout as three operational panels, and the workflow section is readable and consistent with the tactical-operations-suite positioning.

The visual direction is substantially stronger than the original placeholder page. It now communicates a suite-level product rather than three disconnected links. The current Scout panel still uses the old ATO video as a placeholder until the user provides the preferred Scout icon.

## Revised Local Preview — 2026-05-26

The revised Vanguard C4 homepage now opens with a balanced first viewport: the motto is centered above the stacked Vanguard/C4 title, the tactical operations center copy is clear, and the uploaded Vanguard C4 emblem is constrained to a supporting mission-status card rather than overpowering the headline. Legacy acronym wording remains removed, with the site language using Tactical Operations Center and Squadron TOC instead.

The current visual direction successfully keeps the cinematic aircraft background while making Vanguard C4 the immediate brand anchor. The Scout patch and product screenshots are incorporated as evidence assets lower on the page, supporting the suite positioning without burying the visitor in detail on the first screen.

## Revised asset preview notes — 2026-05-26

The updated local preview opens correctly with the centered Vanguard/C4 hero hierarchy, the motto centered above the main wordmark, and the Vanguard C4 emblem reduced to a supporting status card rather than overpowering the first viewport. The first page remains focused on the tactical operations center positioning and contains no legacy acronym or command-operations wording.

After adding the new SkyPilot and Norden II files, local validation found all referenced assets present. The page now references web-friendly product media under `assets/`, including the supplied SkyPilot video/poster, Norden II video/poster, the Vanguard emblem, and the Scout patch.

## Final browser preview pass — 2026-05-26

The ecosystem section now shows three strong module cards: SkyPilot uses the supplied storm/patch visual, Norden II uses the supplied green animated-logo visual, and S.C.O.U.T. uses the Scout patch. The section reads clearly as a unified Vanguard C4 ecosystem rather than disconnected tools.

The evidence section is populated with actual product-preview imagery rather than blank placeholders. The first visible SONAR panel renders successfully, and the lower personnel/recognition cards are visible below it. My opinion is that this is now ready for user review as a v2 package; the only remaining content caveat is that the screenshots are still best treated as review placeholders until the user approves the exact crop/order.

## Cloud Sync Preview Pass — 2026-05-26

The cache-busted local preview confirmed that the new **Secure Cloud Sync** section appears between the operational flow and evidence/screenshot sections. The navigation now includes **Cloud Sync**, the headline reads “Approved data moves through Vanguard C4, not scattered file handoffs,” and the provided cloud-sync architecture diagram is displayed as a large evidence asset beside explanatory copy.

The role-based pipeline cards are visible for SkyPilot, Norden II, and S.C.O.U.T. / SONAR. The section successfully communicates that Azure-backed Vanguard Cloud Sync replaces manual Google Drive file handoffs and distributes approved readiness, mission, loadout, status, and command updates to commanders, flight captains, sortie leads, pilots, and the squadron picture.

## Cloud Sync Diagram Fit Adjustment — 2026-05-26

A second local preview confirmed the **Cloud Sync** navigation link, cloud-sync section copy, and final tagline are present in the rendered page. The diagram image was adjusted from cropped cover behavior to contained wide-ratio display so the full architecture can be seen instead of losing the left and right edges. The final tagline appears near the mission close: **SkyPilot** tells you what is ready, **Norden II** tells you how to fight, **S.C.O.U.T.** tells the squadron what to do, and **Vanguard C4** keeps it all connected.
