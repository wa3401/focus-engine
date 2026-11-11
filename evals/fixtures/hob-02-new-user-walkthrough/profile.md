# Assistant Profile — Darnell Brooks

> Your AI helpers read this before every run and update the bottom part after. Edit the top part any time; your edits win. Keep this doc private (only you, and the AI tool you connected).

**Template version:** 0.1.0 · **Created:** 2026-10-26

## Pending updates

> Paste "Profile updates" blocks from your helpers here. Every run treats these lines as already applied. A run that can write the Profile folds them in and clears this section.

## About me

- **Role:** Executive Director of Blue Ridge Literacy Project (blueridgeliteracy.example), a 12-person nonprofit
- **What success looks like this quarter:** State literacy grant submitted by Dec 1; year-end donor campaign on track for $80k
- **Working hours:** Mon–Fri, 9:00–17:00
- **Time zone:** America/New_York
- **Quiet hours / days off:** after 18:00 on weekdays (except the monthly evening board meeting); weekends
- **AI tool and plan:** Microsoft 365 Copilot · nonprofit license (work account)
- **Capabilities (from setup preflight):** schedule=yes, connectors_in_schedule=yes, write_profile=no, send_email=no, send_chat=no, subagents=no, admin_notes=output stays in the app; Profile updates via pasted blocks
- **Archive doc:** OneDrive → "Assistant Profile Archive — Darnell Brooks"
- **Vacation mode:** off

## Priorities

Ranked. The audit asks whether these still hold once a month.

| # | Priority | Why it matters | Last confirmed |
| --- | --- | --- | --- |
| 1 | Submit the state literacy grant (due Dec 1) | Funds two reading coordinators for 2027 | 2026-10-26 |
| 2 | Year-end donor campaign ($80k goal) | Covers the 2027 operating gap | 2026-10-26 |
| 3 | Board recruitment: two new members by March | Two seats open after January | 2026-10-26 |

## People

| Name | Who they are | Treat as |
| --- | --- | --- |
| Angela Ruiz | Board chair, angela.ruiz@ruizlaw.example | VIP |
| Marcus Hill | Development director, marcus@blueridgeliteracy.example | direct report |
| Kim Tran | Program director, kim@blueridgeliteracy.example | direct report |
| Ellen Ford | State grant officer, ellen.ford@stategrants.example | external |

## Noise rules

Things never to show me:

- Teams "General" channel chatter
- newsletter subscriptions

## Helper settings

| Helper | On | When | Delivered to | Feedback by | Sections / options | Cap |
| --- | --- | --- | --- | --- | --- | --- |
| my-smart-assistant | on | weekdays 8:30 | Copilot chat | chat reply | Needs you, Waiting on others, Coming up (meeting prep folded in), FYI | 7 |
| prep-my-meetings | off (folded into the brief) | — | — | — | — | — |
| shut-down-my-day | on | weekdays 4:30pm | Copilot chat | chat reply | passive; draft nudges: no; meeting outcomes: no; focus block 90 min; check-in after 3 skipped days | — |
| hand-off-my-busywork | on | on demand | chat | chat | may build: saved prompts, scheduled prompts | 3 |

**Tidy owner:** my-smart-assistant

## Setup answers

<details><summary>Saved so upgrades can regenerate your helpers (don't need to edit)</summary>

```yaml
name: Darnell Brooks
tz: America/New_York
company_domain: blueridgeliteracy.example
sources: [outlook, outlook_calendar, onedrive]
brief: {time: "08:30", days: weekdays, channel: in_app, cap: 7, prep_folded: true}
shutdown: {time: "16:30", days: weekdays, style: passive, draft_nudges: false, meeting_outcomes: false, focus_block_minutes: 90, skip_checkin_after: 3}
audit: {cadence: on_demand, delivery: chat, may_build: [saved_prompt, scheduled_prompt]}
profile_write: paste_blocks
```

</details>

## Decision log

| Date | What was handed off | Form | Est. min/month | Actual (next audit) |
| --- | --- | --- | --- | --- |

---

## Data (maintained by your helpers)

> You can read this. Edit only if you mean to — for example, delete a ledger line to make an item reappear.

```yaml
last_tidy: "2026-11-12T13:35:00Z"
last_run:
  my-smart-assistant: "2026-11-12T13:30:00Z"
  shut-down-my-day: "2026-11-11T21:30:00Z"
watermarks:
  outlook: "2026-11-12T13:30:00Z"
  outlook_calendar: "2026-11-12T13:30:00Z"
  onedrive: "2026-11-12T13:30:00Z"
ledger: []
events: []
```
