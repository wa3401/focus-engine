# Assistant Profile — Priya Raman

> Your AI helpers read this before every run and update the bottom part after. Edit the top part any time; your edits win. Keep this doc private (only you, and the AI tool you connected).

**Template version:** 1.0.0 · **Created:** 2026-11-03

## Pending updates

> Paste "Profile updates" blocks from your helpers here. Every run treats these lines as already applied. A run that can write the Profile folds them in and clears this section.

## About me

- **Role:** Solo brand consultant, Raman Studio; 4–6 active clients
- **What success looks like this quarter:** Fernwood rebrand delivered on Dec 6, two retainers signed for Q1, three deep-work blocks a week protected
- **Working hours:** Mon–Thu, 09:30–16:00 (flexible)
- **Time zone:** America/Denver
- **Quiet hours / days off:** Fridays and weekends off; nothing after 18:00
- **AI tool and plan:** ChatGPT · Plus
- **Capabilities (from setup preflight):** schedule=yes, connectors_in_schedule=yes, write_profile=no, send_email=no, send_chat=no, subagents=no, admin_notes=none
- **Archive doc:** Google Drive → "Assistant Profile — archive (Priya)"
- **Vacation mode:** off

## Priorities

| # | Priority | Why it matters | Last confirmed |
| --- | --- | --- | --- |
| 1 | Deliver the Fernwood rebrand by Dec 6 | Biggest project of the year; referral source | 2026-11-03 |
| 2 | Land two new retainers for Q1 | Smooths income after Fernwood ends | 2026-11-03 |
| 3 | Protect 3 deep-work blocks a week | Design quality depends on it | 2026-11-03 |

## People

| Name | Who they are | Treat as |
| --- | --- | --- |
| Leo Grant | Fernwood, marketing lead (leo@fernwood.example) | VIP (client) |
| Mia Sato | Oakline Coffee, owner (mia@oaklinecoffee.example) | client |
| Hal Brennan | Accountant (hal@brennancpa.example) | waiting-on |
| Nora Quinn | Tidewater Outfitters, prospect (nora@tidewater.example) | prospect |
| Ben Ito | Larkspur Studio, prospect (ben@larkspur.example) | prospect |

## Noise rules

- design newsletters
- LinkedIn notifications
- Dribbble digests

## Helper settings

| Helper | On | When | Delivered to | Feedback by | Sections / options | Cap |
| --- | --- | --- | --- | --- | --- | --- |
| my-smart-assistant | on | Mon–Thu 9:00 | in-app | reply in conversation | Needs you, Waiting on others, Coming up + prep cards, FYI | 5 |
| prep-my-meetings | on (folded into brief) | in morning brief | same | same | clients + prospects | 3 |
| shut-down-my-day | on | Mon–Thu 15:30 | in-app | reply in conversation | passive | — |
| hand-off-my-busywork | on | on demand | chat | chat | may build: saved prompts | 3 |

**Tidy owner:** my-smart-assistant

## Setup answers

<details><summary>Saved so upgrades can regenerate your helpers (don't need to edit)</summary>

```yaml
name: Priya Raman
tool: ChatGPT
plan: Plus
iana_tz: America/Denver
work_days: Mon-Thu
sources: {gmail: {skip: [dribbble, linkedin, design newsletters]}, gcal: {lookahead_days: 1}, gdrive: profile_only}
brief: {time: "09:00", days: Mon-Thu, channel: in_app, cap: 5, prep_folded: true}
shutdown: {time: "15:30", days: Mon-Thu, mode: passive}
audit: {cadence: on_demand}
scheduled_tasks_used: 2
```

</details>

## Decision log

| Date | What was handed off | Form | Est. min/month | Actual (next audit) |
| --- | --- | --- | --- | --- |

---

## Data (maintained by your helpers)

```yaml
last_tidy: 2026-11-11T16:05:00Z
last_run:
  my-smart-assistant: 2026-11-11T16:00:00Z
watermarks:
  gmail: 2026-11-11T16:00:00Z
  gcal: 2026-11-11T16:00:00Z
ledger:
  - id: L-0501
    key: gmail:19b0a001
    link: https://mail.example.com/mail/u/0/#all/19b0a001
    kind: needs_you
    who: [Leo Grant]
    summary: Approve the Fernwood print vendor quote
    due: 2026-11-12T00:00:00Z
    status: surfaced
    snoozed_until: null
    created_by: my-smart-assistant
    last_checked: 2026-11-11T15:58:00Z
  - id: L-0502
    key: gmail:19b0a002
    link: https://mail.example.com/mail/u/0/#all/19b0a002
    kind: waiting_on
    who: [Hal Brennan]
    summary: Hal to send Q4 estimated tax figures
    due: null
    status: waiting
    snoozed_until: null
    created_by: my-smart-assistant
    last_checked: 2026-11-11T15:58:00Z
events: []
```
