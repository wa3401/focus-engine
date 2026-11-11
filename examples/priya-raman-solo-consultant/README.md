# Example: Priya Raman, solo brand consultant (light stack, task cap)

Priya runs Raman Studio (ramanstudio.example) on her own: four to six clients, a big rebrand due Dec 6, two prospects to close for Q1, and a constant fight for uninterrupted design time. She works Monday to Thursday. *All people, businesses and data here are invented.*

## Tool, plan, and what preflight found

**ChatGPT Plus**, personal account. Connected: Gmail, Google Calendar, Google Drive.

| Check | Result |
| --- | --- |
| Read Gmail, Calendar, Drive in chat | Yes |
| Same inside a scheduled task | Gmail is documented for tasks; Calendar and Drive aren't, so a one-time test task checked them: all three worked |
| Write a doc (the Profile) | No: writing from a task asked for approval and paused, so the Profile is treated as read only |
| Scheduled tasks | Yes: 5 active on Plus, exact times; 2 already used (her invoice reminder and LinkedIn idea task) |
| Send email | Asks for approval each time, so not used; delivery stays in-app |
| Sub-agents | No |
| Past chats / memory | Yes |
| Admin gates | None (personal account) |

## Schedule fitting

She asked for five scheduled things: brief, prep before each call, shutdown, an audit every other Thursday, and a Sunday "week ahead." Only 3 slots were free. Setup merged them into **2 tasks**:

- Prep folded into the 9:00 brief (one or two calls a day, so one card each).
- The week ahead folded into Monday's brief, plus a deep-work count in every brief.
- The audit runs on demand in a "Focus engine" project, with a calendar nudge.
- The shutdown kept its own task.

Result: 4 of 5 tasks in use, one left free for whatever the audit builds.

## Helpers she chose, and why

- **my-smart-assistant** with prep folded in: cap 5, no FYI. The test drive added the "Deep work this week: n of 3" line at the top, with the free 2-hour gaps.
- **shut-down-my-day**, interactive: a short reply each afternoon, and a proposed focus block for tomorrow.
- **hand-off-my-busywork**, on demand: also does the weekly "tidy my profile."

Verification: a separate re-check pass.

## What runs when (America/Denver)

| Helper | Schedule | Delivers to | Feedback | Characters (kept ≤8,000) |
| --- | --- | --- | --- | --- |
| [my-smart-assistant](helpers/my-smart-assistant.md) | Mon–Thu 9:00am (task) | Task conversation + push | Reply there + Pending updates | 7,326 |
| [shut-down-my-day](helpers/shut-down-my-day.md) | Mon–Thu 3:30pm (task) | Task conversation + push | One-line reply + Pending updates | 5,250 |
| [hand-off-my-busywork](helpers/hand-off-my-busywork.md) | On demand in the Focus engine project; nudge every other Wed 2:00pm | Chat | Chat + Pending updates | 5,321 |

Each task holds its full instruction, since tasks can't read project files.

## What's manual for her

- **Pasting updates:** each delivery ends with a "Profile updates" block; she pastes it into Pending updates in her Google Doc (about 15 seconds).
- **Thursday tidy (1 minute):** "tidy my profile" in the Focus engine project, then paste the new data block over the old one.
- **Booking focus blocks and sending nudges:** the helpers propose and draft; she books and sends.
- **Changes:** she pastes revised text into the task (Scheduled › the task › Edit).

## Files

- [setup-transcript.md](setup-transcript.md): the condensed setup conversation
- [assistant-profile.md](assistant-profile.md): her Profile, snapshot Tue Nov 24 with Pending updates filled in
- [handover-card.md](handover-card.md): her one-page card
- [sample-outputs/](sample-outputs/): [brief with prep cards](sample-outputs/morning-brief.md), [shutdown](sample-outputs/shutdown.md), [audit](sample-outputs/audit.md), Nov 24–25, 2026
