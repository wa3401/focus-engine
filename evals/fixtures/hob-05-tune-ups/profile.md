# Assistant Profile — Maya Chen

> Your AI helpers read this before every run and update the bottom part after. Edit the top part any time; your edits win. Keep this doc private (only you, and the AI tool you connected).

**Template version:** 0.1.0 · **Created:** 2026-10-28

## About me

- **Role:** VP of Sales at Northwind Analytics (northwind.example), a 40-person B2B SaaS company; leads two AEs and works with RevOps
- **What success looks like this quarter:** Acme renewal and Globex expansion signed by Dec 15; two AE offers accepted by end of January
- **Working hours:** Mon–Fri, 8:00–17:30
- **Time zone:** America/New_York
- **Quiet hours / days off:** after 19:00 on weekdays; weekends
- **AI tool and plan:** Claude · Max (personal-ish work account)
- **Capabilities (from setup preflight):** schedule=yes, connectors_in_schedule=yes, write_profile=yes, send_email=yes, send_chat=yes, subagents=yes, admin_notes=none
- **Archive doc:** Google Drive → "Assistant Profile Archive — Maya Chen"
- **Vacation mode:** off

## Priorities

Ranked. The audit asks whether these still hold once a month.

| # | Priority | Why it matters | Last confirmed |
| --- | --- | --- | --- |
| 1 | Close Q4: Acme renewal ($120k) and Globex expansion by Dec 15 | Q4 number depends on both | 2026-10-28 |
| 2 | Hire two account executives by end of January | Q1 pipeline coverage | 2026-10-28 |
| 3 | Launch the new partner program in Q1 | New channel for 2027 growth | 2026-10-28 |

## People

| Name | Who they are | Treat as |
| --- | --- | --- |
| Dana Whitfield | CEO, dana@northwind.example | VIP |
| Sam Ortiz | Account executive, sam@northwind.example | direct report |
| Lena Park | Account executive, lena@northwind.example | direct report |
| Raj Mehta | RevOps lead, raj@northwind.example | colleague |
| Priya Shah | Acme champion, priya.shah@acme.example | VIP (external) |
| Tom Becker | Globex buyer, tom.becker@globex.example | client |
| Jordan Lee | Recruiter at TalentBridge, jordan.lee@talentbridge.example | waiting-on |

## Noise rules

Things never to show me:

- vendor newsletters
- Slack #random and #social
- automated HubSpot digests

## Helper settings

| Helper | On | When | Delivered to | Feedback by | Sections / options | Cap |
| --- | --- | --- | --- | --- | --- | --- |
| my-smart-assistant | on | weekdays 7:30 | Slack DM | thread reply + reactions | Needs you, Waiting on others, Coming up, FYI; Friday roll-up | 7 |
| prep-my-meetings | on | weekdays 7:30 "Today's prep" post + card 15 min before external calls | Slack DM | thread reply + reactions | external + Dana only; quick cards (Why it matters, Who, Open between you, Your goal, Ask / decide, Bring/read); full brief for board and partner pitches; public web for new external people: yes | 4 |
| shut-down-my-day | on | weekdays 5:00pm | Slack DM | one-line thread reply | interactive; draft nudges: yes; meeting outcomes: yes; focus block 90 min; check-in after 3 skipped days | — |
| hand-off-my-busywork | on | every other Friday 10:00 | chat | chat | may build: saved prompts, scheduled tasks | 3 |

**Tidy owner:** my-smart-assistant

## Setup answers

<details><summary>Saved so upgrades can regenerate your helpers (don't need to edit)</summary>

```yaml
name: Maya Chen
tz: America/New_York
company_domain: northwind.example
sources: [slack, gmail, gcal, gdrive, hubspot]
brief: {time: "07:30", days: weekdays, channel: slack_dm, cap: 7, nudge_days: 3, vip_nudge_days: 1, friday_rollup: true, urgent_alerts: false}
prep: {rule: external_or_vip, timing: [morning_post_0730, 15_min_before_external], depth: quick, full_brief_for: [board, partner_pitch], web_allowed: true}
shutdown: {time: "17:00", days: weekdays, style: interactive, draft_nudges: true, meeting_outcomes: true, focus_block_minutes: 90, skip_checkin_after: 3}
audit: {cadence: every_other_friday_1000, delivery: chat, may_build: [saved_prompt, scheduled_task]}
```

</details>

## Decision log

| Date | What was handed off | Form | Est. min/month | Actual (next audit) |
| --- | --- | --- | --- | --- |

---

## Data (maintained by your helpers)

> You can read this. Edit only if you mean to — for example, delete a ledger line to make an item reappear.

```yaml
last_tidy: "2026-11-13T12:35:00Z"
last_run:
  my-smart-assistant: "2026-11-13T12:30:00Z"
  hand-off-my-busywork: "2026-10-30T15:20:00Z"
watermarks:
  slack: "2026-11-13T12:30:00Z"
  gmail: "2026-11-13T12:30:00Z"
  gcal: "2026-11-13T12:30:00Z"
  hubspot: "2026-11-13T12:30:00Z"
  gdrive: "2026-11-13T12:30:00Z"
ledger:
  - id: L-0262
    key: "gmail:18f1c7d2"
    link: "https://mail.google.com/mail/u/0/#all/18f1c7d2"
    kind: needs_you
    who: [Tom Becker]
    summary: Tom asked for Globex security docs
    due: null
    status: done
    snoozed_until: null
    created_by: my-smart-assistant
    last_checked: "2026-11-04T12:28:00Z"
  - id: L-0279
    key: "gmail:18f2e5a9"
    link: "https://mail.google.com/mail/u/0/#all/18f2e5a9"
    kind: needs_you
    who: [Priya Shah]
    summary: Priya asked for Acme renewal redlines
    due: null
    status: done
    snoozed_until: null
    created_by: my-smart-assistant
    last_checked: "2026-11-10T12:28:00Z"
events:
  - at: "2026-10-30T13:05:00Z"
    by: user
    via: slack_reply
    event: signal
    args:
      direction: "-"
      kind: fyi
      said: FYI section not useful
    applied: true
  - at: "2026-11-02T12:20:00Z"
    by: user
    via: slack_reply
    event: setting
    args:
      helper: my-smart-assistant
      deliver_at: "08:15"
      scope: today only
    applied: true
  - at: "2026-11-03T12:58:00Z"
    by: user
    via: slack_reply
    event: signal
    args:
      direction: "-"
      kind: fyi
      said: FYI section not useful
    applied: true
  - at: "2026-11-04T12:18:00Z"
    by: user
    via: slack_reply
    event: setting
    args:
      helper: my-smart-assistant
      deliver_at: "08:15"
      scope: today only
    applied: true
  - at: "2026-11-04T13:30:00Z"
    by: user
    via: slack_reply
    event: verifier_miss
    args:
      id: L-0262
      key: "gmail:18f1c7d2"
    applied: true
  - at: "2026-11-04T13:30:00Z"
    by: user
    via: slack_reply
    event: status
    args:
      id: L-0262
      status: done
    applied: true
  - at: "2026-11-05T13:10:00Z"
    by: user
    via: slack_reply
    event: signal
    args:
      direction: "-"
      kind: fyi
      said: FYI section not useful
    applied: true
  - at: "2026-11-05T13:20:00Z"
    by: user
    via: slack_reply
    event: status
    args:
      id: L-0270
      status: done
    applied: true
  - at: "2026-11-06T12:52:00Z"
    by: user
    via: slack_reply
    event: signal
    args:
      direction: "-"
      kind: fyi
      said: FYI section not useful
    applied: true
  - at: "2026-11-09T12:22:00Z"
    by: user
    via: slack_reply
    event: setting
    args:
      helper: my-smart-assistant
      deliver_at: "08:15"
      scope: today only
    applied: true
  - at: "2026-11-09T22:10:00Z"
    by: user
    via: shutdown
    event: status
    args:
      id: L-0284
      status: snoozed
      until: "2026-11-11T13:00:00Z"
    applied: true
  - at: "2026-11-10T13:01:00Z"
    by: user
    via: slack_reply
    event: signal
    args:
      direction: "-"
      kind: fyi
      said: FYI section not useful
    applied: true
  - at: "2026-11-10T13:12:00Z"
    by: user
    via: slack_reply
    event: verifier_miss
    args:
      id: L-0279
      key: "gmail:18f2e5a9"
    applied: true
  - at: "2026-11-10T13:12:00Z"
    by: user
    via: slack_reply
    event: status
    args:
      id: L-0279
      status: done
    applied: true
  - at: "2026-11-11T12:15:00Z"
    by: user
    via: slack_reply
    event: setting
    args:
      helper: my-smart-assistant
      deliver_at: "08:15"
      scope: today only
    applied: true
  - at: "2026-11-12T12:47:00Z"
    by: user
    via: slack_reply
    event: signal
    args:
      direction: "-"
      kind: fyi
      said: FYI section not useful
    applied: true
```
