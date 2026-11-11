# Assistant Profile — Maya Chen

> Your AI helpers read this before every run and update the bottom part after. Edit the top part any time; your edits win. Keep this doc private (only you, and the AI tool you connected).

**Template version:** 1.0.0 · **Created:** 2026-11-02

## About me

- **Role:** VP of Sales at Northwind Analytics (40-person B2B SaaS); runs two AEs, owns new business and renewals
- **What success looks like this quarter:** Acme renewed and Globex expanded before Dec 15, two AEs signed by end of January, partner program ready to launch in Q1
- **Working hours:** Mon–Fri, 08:00–17:30
- **Time zone:** America/New_York
- **Quiet hours / days off:** after 19:00 on weekdays; weekends off
- **AI tool and plan:** Claude · Max
- **Capabilities (from setup preflight):** schedule=yes, connectors_in_schedule=yes, write_profile=yes, send_email=yes, send_chat=yes, subagents=yes, admin_notes=none
- **Archive doc:** Google Drive → "Assistant Profile — archive (Maya)" (drive:doc_archive_maya)
- **Vacation mode:** off

## Priorities

Ranked. The audit asks whether these still hold once a month.

| # | Priority | Why it matters | Last confirmed |
| --- | --- | --- | --- |
| 1 | Close Q4: Acme renewal ($120k) and Globex expansion by Dec 15 | Makes the Q4 number; Acme is the largest account | 2026-11-02 |
| 2 | Hire two account executives by end of January | Q1 quota assumes two new AEs ramping | 2026-11-02 |
| 3 | Launch the partner program in Q1 | New pipeline source the board asked for | 2026-11-02 |

## People

| Name | Who they are | Treat as |
| --- | --- | --- |
| Dana Whitfield | CEO, Maya's manager (dana@northwind.example, Slack U_DANA) | VIP |
| Priya Shah | Acme champion (priya.shah@acme.example) | VIP (external) |
| Tom Becker | Globex buyer (tom.becker@globex.example) | client |
| Sam Ortiz | Account executive (Slack U_SAM) | direct report |
| Lena Park | Account executive (Slack U_LENA) | direct report |
| Raj Mehta | RevOps lead (Slack U_RAJ) | colleague |
| Jordan Lee | Recruiter at TalentBridge (jordan.lee@talentbridge.example) | waiting-on |

## Noise rules

Things never to show me:

- vendor newsletters and marketing email
- Slack #random and #social
- automated HubSpot digests

## Helper settings

| Helper | On | When | Delivered to | Feedback by | Sections / options | Cap |
| --- | --- | --- | --- | --- | --- | --- |
| my-smart-assistant | on | weekdays 7:30 | in-app chat | reply in chat | Needs you, Waiting on others, Coming up, FYI; Friday roll-up on; urgent alerts off | 7 |
| prep-my-meetings | on | in morning brief | same | same | external + Dana only; quick cards | 4 |
| shut-down-my-day | on | weekdays 17:00 | Slack DM | one-line reply | interactive | — |
| hand-off-my-busywork | on | every other Friday | chat | chat | may build: saved prompts, scheduled tasks | 3 |

**Tidy owner:** my-smart-assistant

## Setup answers

<details><summary>Saved so upgrades can regenerate your helpers (don't need to edit)</summary>

```yaml
name: Maya Chen
role_one_line: VP of Sales at Northwind Analytics; runs two AEs, owns new business and renewals
company_domain: northwind.example
tool: Claude
plan: Max
iana_tz: America/New_York
work_days: Mon-Fri
hours: "08:00-17:30"
quiet_hours: "after 19:00; weekends"
profile_location: "Google Docs: Assistant Profile — Maya Chen"
sources:
  slack: {channels: ["#deals", "#leadership", "#hiring"], skip: ["#random", "#social"]}
  gmail: {skip: [promotions, newsletters, hubspot digests]}
  gcal: {lookahead_days: 2}
  hubspot: {deals_owned_next_step_within_days: 7}
brief: {time: "07:30", days: weekdays, channel: in_app, cap: 7, nudge_days: 3, vip_nudge_days: 1, friday_rollup: true, urgent_alerts: false}
prep: {rule: "external or Dana", timing: folded_into_brief, depth: quick, web: false}
shutdown: {time: "17:00", mode: interactive, draft_nudges: true, ask_outcomes: true}
audit: {cadence: every_other_friday, delivery: chat, may_build: [saved_prompts, scheduled_tasks]}
```

</details>

## Decision log

| Date | What was handed off | Form | Est. min/month | Actual (next audit) |
| --- | --- | --- | --- | --- |

---

## Data (maintained by your helpers)

> You can read this. Edit only if you mean to — for example, delete a ledger line to make an item reappear.

```yaml
last_tidy: 2026-11-11T12:34:00Z
last_run:
  my-smart-assistant: 2026-11-11T12:30:00Z
  shut-down-my-day: 2026-11-11T22:00:00Z
watermarks:
  slack: 2026-11-11T12:30:00Z
  gmail: 2026-11-11T12:30:00Z
  gcal: 2026-11-11T12:30:00Z
  crm: 2026-11-11T12:30:00Z
ledger:
  - id: L-0101
    key: gmail:19a0c5f6
    link: https://mail.example.com/mail/u/0/#all/19a0c5f6
    kind: waiting_on
    who: [Tom Becker]
    summary: Tom to confirm final Globex seat count for the expansion quote
    due: null
    status: waiting
    snoozed_until: null
    created_by: my-smart-assistant
    last_checked: 2026-11-11T12:29:00Z
events: []
```
