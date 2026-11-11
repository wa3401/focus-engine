# Example: Darnell Brooks, nonprofit Executive Director (read-only Profile, no Slack)

Darnell leads Blue Ridge Literacy Project (blueridgeliteracy.example), a 12-person literacy nonprofit, with a state grant due Dec 1 and a year-end campaign running at the same time. He works in Outlook and Teams and has no time for extra chats. *All people, organizations and data here are invented.*

## Tool, plan, and what preflight found

**Microsoft 365 Copilot** (nonprofit Microsoft 365 plan with a Copilot license), work account.

| Check | Result |
| --- | --- |
| Read Outlook mail, Calendar, Teams, OneDrive | Yes |
| Write a doc (the Profile) | No: Copilot Chat can't save to OneDrive. Copilot in Word could edit the doc with him present, so that's how the weekly tidy works |
| Scheduled prompts | Yes, up to 10; output is a Copilot chat with an optional email notification |
| Send email or Teams messages | No (only the run notification email) |
| Sub-agents | No |
| Past chats | No (the audit asks for a 5-minute walkthrough instead) |
| Admin gates | None; no admin note needed |

## Helpers he chose, and why

- **my-smart-assistant** with meeting prep folded in: one chat a morning instead of several. Test drive cut the cap from 7 to 5 ("I only get through 5") and added a grant countdown line at the top until Dec 1.
- **shut-down-my-day**, passive: he won't reply at 4:30, so it summarizes and open items carry by default.
- **hand-off-my-busywork**, on demand as an agent ("Busywork audit"), with a calendar nudge every other Wednesday.
- No separate **prep-my-meetings**: board, Angela, grant-office and donor meetings get cards inside the brief.

Verification: a separate re-check pass (finish drafting, then re-open every source and re-derive each claim).

## What runs when (America/New_York)

| Helper | Schedule | Delivers to | Feedback | Characters (limit 8,000) |
| --- | --- | --- | --- | --- |
| [my-smart-assistant](helpers/my-smart-assistant.md) | Weekdays 8:30am (scheduled prompt) | Copilot chat + email notification | Pending updates box in the Profile | 7,809 |
| [shut-down-my-day](helpers/shut-down-my-day.md) | Weekdays 4:30pm (scheduled prompt) | Copilot chat + email notification | Pending updates box | 5,145 |
| [hand-off-my-busywork](helpers/hand-off-my-busywork.md) | On demand (agent); reminder every other Wed 2:00pm | Copilot chat | Chat + Pending updates | 5,065 |

2 of 10 scheduled prompts used. The audit agent's instructions fit the 8,000-character agent limit.

## What's manual for him

- **Pasting updates:** each delivery ends with a "Profile updates" block. He pastes it, plus any one-line feedback ("done 2, snooze 3 to Mon"), into the Pending updates box at the bottom of his Profile. Helpers treat that box as already applied. About 15 seconds a day.
- **Friday tidy (2 minutes):** he opens the Profile in Word and asks Copilot to apply Pending updates to the data block and clear the box.
- **Nudges:** drafted in the brief; he sends them himself.
- **Schedule check:** no expiry is published for scheduled prompts, so his card says to confirm both are still active on Feb 17, 2027.
- **Changes:** he pastes revised prompt text over the old scheduled prompt.

## Files

- [setup-transcript.md](setup-transcript.md): the condensed setup conversation
- [assistant-profile.md](assistant-profile.md): his Profile, snapshot Mon Nov 23 with Pending updates filled in
- [handover-card.md](handover-card.md): his one-page card
- [sample-outputs/](sample-outputs/): [brief with prep card](sample-outputs/morning-brief.md), [shutdown](sample-outputs/shutdown.md), [audit](sample-outputs/audit.md), Nov 23–25, 2026
