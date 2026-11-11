# Assistant Profile — Darnell Brooks

> Your AI helpers read this before every run and update the bottom part after. Edit the top part any time; your edits win. Keep this doc private (only you, and the AI tool you connected).

**Template version:** 1.0.0 · **Created:** 2026-11-04

## Pending updates

> Paste "Profile updates" blocks from your helpers here. Every run treats these lines as already applied. A run that can write the Profile folds them in and clears this section.

## About me

- **Role:** Executive Director, Blue Ridge Literacy Project (12 staff)
- **What success looks like this quarter:** state literacy grant submitted by Dec 1, $80k raised in the year-end campaign, two board candidates identified
- **Working hours:** Mon–Fri, 09:00–17:00
- **Time zone:** America/New_York
- **Quiet hours / days off:** after 18:00 and weekends (except the monthly evening board meeting)
- **AI tool and plan:** Microsoft 365 Copilot · nonprofit license
- **Capabilities (from setup preflight):** schedule=yes, connectors_in_schedule=yes, write_profile=no, send_email=no, send_chat=no, subagents=no, admin_notes=none
- **Archive doc:** OneDrive → "Assistant Profile — archive (Darnell)"
- **Vacation mode:** off

## Priorities

| # | Priority | Why it matters | Last confirmed |
| --- | --- | --- | --- |
| 1 | Submit the state literacy grant by Dec 1 | Funds two reading specialists next year | 2026-11-04 |
| 2 | Year-end donor campaign: $80k goal | Covers the winter program gap | 2026-11-04 |
| 3 | Board recruitment: two new members by March | Two seats open after spring terms end | 2026-11-04 |

## People

| Name | Who they are | Treat as |
| --- | --- | --- |
| Angela Ruiz | Board chair (angela.ruiz@ruizlaw.example) | VIP |
| Marcus Hill | Development director (marcus@blueridgeliteracy.example) | direct report |
| Kim Tran | Program director (kim@blueridgeliteracy.example) | direct report |
| Ellen Ford | State grant officer (ellen.ford@education.state.example) | VIP (external) |

## Noise rules

- Teams "General" channel chatter
- newsletter subscriptions (Nonprofit Weekly, GrantWatch Digest)

## Helper settings

| Helper | On | When | Delivered to | Feedback by | Sections / options | Cap |
| --- | --- | --- | --- | --- | --- | --- |
| my-smart-assistant | on | weekdays 8:45 | Copilot chat | reply in chat | Needs you, Waiting on others, Coming up (with prep notes), FYI | 5 |
| prep-my-meetings | off (folded into brief) | in morning brief | same | same | grant officer, board, major donors | 3 |
| shut-down-my-day | on | weekdays 16:30 | Copilot chat | reply in chat | passive | — |
| hand-off-my-busywork | on | on demand | chat | chat | may build: saved prompts | 3 |

**Tidy owner:** my-smart-assistant

## Setup answers

<details><summary>Saved so upgrades can regenerate your helpers (don't need to edit)</summary>

```yaml
name: Darnell Brooks
tool: Microsoft 365 Copilot
plan: nonprofit
iana_tz: America/New_York
sources: {outlook: true, teams: {skip: [General]}, calendar: {lookahead_days: 1}}
brief: {time: "08:45", days: weekdays, channel: copilot_chat, cap: 5}
```

</details>

## Decision log

| Date | What was handed off | Form | Est. min/month | Actual (next audit) |
| --- | --- | --- | --- | --- |

---

## Data (maintained by your helpers)

```yaml
last_tidy: 2026-11-11T13:50:00Z
last_run:
  my-smart-assistant: 2026-11-11T13:45:00Z
watermarks:
  outlook: 2026-11-11T13:45:00Z
  teams: 2026-11-11T13:45:00Z
  calendar: 2026-11-11T13:45:00Z
ledger:
  - id: L-0031
    key: outlook:AAMkAG-kim-0110
    link: https://outlook.example.com/mail/AAMkAG-kim-0110
    kind: waiting_on
    who: [Kim Tran]
    summary: Kim to send program outcome numbers for the grant narrative
    due: 2026-11-14T22:00:00Z
    status: waiting
    snoozed_until: null
    created_by: my-smart-assistant
    last_checked: 2026-11-11T13:44:00Z
events: []
```
