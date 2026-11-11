# Assistant Profile — {{name}}

> Your AI helpers read this before every run and update the bottom part after. Edit the top part any time; your edits win. Keep this doc private (only you, and the AI tool you connected).

**Template version:** {{template_version}} · **Created:** {{created_date}}

## About me

- **Role:** {{role_one_line}}
- **What success looks like this quarter:** {{success}}
- **Working hours:** {{work_days}}, {{start_time}}–{{end_time}}
- **Time zone:** {{iana_tz}}
- **Quiet hours / days off:** {{quiet_hours}}
- **AI tool and plan:** {{tool}} · {{plan}}
- **Capabilities (from setup preflight):** schedule={{yes/no}}, connectors_in_schedule={{yes/no}}, write_profile={{yes/no}}, send_email={{yes/no}}, send_chat={{yes/no}}, subagents={{yes/no}}, admin_notes={{…}}
- **Archive doc:** {{archive_location}}
- **Vacation mode:** off

## Priorities

Ranked. The audit asks whether these still hold once a month.

| # | Priority | Why it matters | Last confirmed |
| --- | --- | --- | --- |
| 1 | {{priority_1}} | {{why_1}} | {{date}} |
| 2 | {{priority_2}} | {{why_2}} | {{date}} |
| 3 | {{priority_3}} | {{why_3}} | {{date}} |

## People

| Name | Who they are | Treat as |
| --- | --- | --- |
| {{person}} | {{role / relationship}} | VIP / direct report / client / waiting-on |

## Noise rules

Things never to show me:

- {{e.g. vendor newsletters}}
- {{e.g. #random, #social}}

## Helper settings

| Helper | On | When | Delivered to | Feedback by | Sections / options | Cap |
| --- | --- | --- | --- | --- | --- | --- |
| my-smart-assistant | {{on}} | {{weekdays 7:30}} | {{Slack DM}} | {{thread reply + reactions}} | {{Needs you, Waiting on others, Coming up, FYI}} | {{7}} |
| prep-my-meetings | {{on}} | {{in morning brief}} | {{same}} | {{same}} | {{external + VIP only; quick cards}} | {{4}} |
| shut-down-my-day | {{on}} | {{weekdays 5:00pm}} | {{Slack DM}} | {{one-line reply}} | {{interactive}} | — |
| hand-off-my-busywork | {{on}} | {{every other Friday}} | {{chat}} | {{chat}} | {{may build: saved prompts, scheduled tasks}} | 3 |

**Tidy owner:** my-smart-assistant

## Setup answers

<details><summary>Saved so upgrades can regenerate your helpers (don't need to edit)</summary>

{{setup_answers_yaml}}

</details>

## Decision log

| Date | What was handed off | Form | Est. min/month | Actual (next audit) |
| --- | --- | --- | --- | --- |

---

## Data (maintained by your helpers)

> You can read this. Edit only if you mean to — for example, delete a ledger line to make an item reappear.

```yaml
last_tidy: null
last_run: {}            # helper -> ISO time (UTC)
watermarks: {}          # source -> ISO time (UTC) of last successful read
ledger: []              # see below
events: []              # append-only
```

Ledger entry shape:

```yaml
- id: L-0001                       # short ID, never changes
  key: slack:C04ABC/1731400000.1234
  link: https://…
  kind: needs_you | waiting_on | commitment | meeting | fyi
  who: [Sam Lee]
  summary: Sam needs a yes/no on the Q1 venue   # your words, ≤15, no quotes
  due: 2026-11-14T22:00:00Z
  status: open | surfaced | done | dismissed | snoozed | waiting
  snoozed_until: null
  created_by: my-smart-assistant
  last_checked: 2026-11-12T12:58:00Z
```

Event shape:

```yaml
- at: 2026-11-12T13:40:00Z
  by: user | <helper>
  via: slack_reply | email_reply | artifact | chat | shutdown
  event: status | noise_rule | priority | people | setting | signal | verifier_miss
  args: {…}
  applied: false
```
