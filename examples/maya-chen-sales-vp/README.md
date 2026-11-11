# Example: Maya Chen, VP of Sales (full engine)

Maya runs sales at Northwind Analytics (northwind.example), a 40-person B2B SaaS company: two AEs, the big renewals, and a CEO who wants the Q4 number. She lives in Slack, and her days are back-to-back customer calls. *All people, companies and data here are invented.*

## Tool, plan, and what preflight found

**Claude Max**, work account with no admin restrictions. Connectors: Slack, Gmail, Google Calendar, Google Drive, HubSpot.

| Check | Result |
| --- | --- |
| Read calendar, Gmail, Slack, HubSpot, Drive | Yes, in chat and inside a scheduled test task |
| Write a doc (the Profile) | Yes (Google Drive) |
| Scheduled tasks | Yes: hourly, daily, weekly, weekdays; runs in the cloud with the laptop closed |
| Post to her own Slack DM on a schedule | Yes; one "Always allow" click per task on first run |
| Sub-agents | Not documented for scheduled tasks, so preflight tested it inside one: available |
| Past chats / memory | Yes |
| Admin gates | None |

Two schedule workarounds: "every other Friday" became a weekly Friday task that skips itself on off weeks, and "15 minutes before external calls" became an hourly run at :45 for calls in the next hour.

## Helpers she chose, and why

- **my-smart-assistant**: her whole morning used to be "catch me up" in Slack. Brief at 7:30, cap 7, with FYI removed at test drive ("if it doesn't need me, don't tell me").
- **prep-my-meetings**: customer calls are where deals move. Cards for today and tomorrow morning ride in the brief, plus a fresh card before each external call. Quick cards, capped at 3 questions (test-drive change); full briefs for Dana's forecast review, QBRs and big Acme or Globex calls.
- **shut-down-my-day**: interactive at 5:00, so tomorrow's brief starts accurate and promises like "pricing by Friday 9am" get caught.
- **hand-off-my-busywork**: every other Friday, in chat. She says yes to builds but checks anything Dana sees.

Verification: fresh sub-agents (one checker per source, plus a separate relevance pass).

## What runs when (America/New_York)

| Helper | Schedule | Delivers to | Feedback | Characters |
| --- | --- | --- | --- | --- |
| [my-smart-assistant](helpers/my-smart-assistant.md) | Weekdays 7:30am | Slack DM | Thread reply + ✅ 💤 👎 | 9,182 |
| [prep-my-meetings](helpers/prep-my-meetings.md) | In the brief + hourly at :45, 8:45am–4:45pm weekdays (posts only before external calls) | Slack DM | Thread reply + reactions | 5,505 |
| [shut-down-my-day](helpers/shut-down-my-day.md) | Weekdays 5:00pm, interactive | Slack DM | One-line reply | 4,586 |
| [hand-off-my-busywork](helpers/hand-off-my-busywork.md) | Fridays 1:00pm, every other week (first Nov 13) + on demand | Chat + notification | Chat | 5,060 |

Each helper is the full instruction inside its scheduled task. There's no hard length limit for Claude scheduled tasks; these are kept short anyway. On-demand prep ("prep my 2pm") also comes as a skill ZIP: a `prep-my-meetings` folder with `SKILL.md` inside.

## What's manual for her

Almost nothing. She clicks "Always allow" once per task the first time it posts to Slack or writes the Profile, replies to the shutdown, and picks a hand-off in each audit.

## Files

- [setup-transcript.md](setup-transcript.md): the condensed setup conversation
- [assistant-profile.md](assistant-profile.md): her Profile, snapshot Thu Nov 12 after the shutdown
- [handover-card.md](handover-card.md): her one-page card
- [sample-outputs/](sample-outputs/): [brief](sample-outputs/morning-brief.md), [meeting prep](sample-outputs/meeting-prep.md), [shutdown](sample-outputs/shutdown.md), [audit](sample-outputs/audit.md), all from Nov 12–13, 2026
