# Assistant Profile — Maya Chen

> Your AI helpers read this before every run and update the bottom part after. Edit the top part any time; your edits win. Keep this doc private (only you, and the AI tool you connected).

**Template version:** 0.1.0 · **Created:** 2026-11-02 · **Handover card:** pinned on page 1 of this doc (copy in `handover-card.md`)

*Example snapshot taken Thu Nov 12, 2026, 5:20pm Eastern, after the shutdown and Maya's reply. Three events are still pending; tomorrow's 7:30 brief applies them at its tidy.*

## About me

- **Role:** VP of Sales at Northwind Analytics (northwind.example), a 40-person B2B SaaS company; I run two AEs, own the big renewals, and report to Dana.
- **What success looks like this quarter:** Acme renewed and Globex expanded before Dec 15, two AE offers accepted by end of January, partner program ready to launch in Q1.
- **Working hours:** Monday–Friday, 8:00–17:30
- **Time zone:** America/New_York
- **Quiet hours / days off:** nothing after 19:00 or on weekends; US holidays off
- **AI tool and plan:** Claude · Max (personal-ish work account, no admin restrictions)
- **Capabilities (from setup preflight):** schedule=yes (hourly, daily, weekly, weekdays), connectors_in_schedule=yes, write_profile=yes, send_email=yes (to Maya only, not used), send_chat=yes (Slack DM to Maya), subagents=yes (tested inside a scheduled task), admin_notes=none
- **Archive doc:** Google Doc "Assistant Profile — archive" (Drive › focus-engine)
- **Vacation mode:** off

## Priorities

| # | Priority | Why it matters | Last confirmed |
| --- | --- | --- | --- |
| 1 | Close Q4: Acme renewal ($120k) and Globex expansion ($40k) by Dec 15 | Q4 number; Dana's board update on Dec 17 | 2026-11-02 |
| 2 | Hire two account executives by end of January | Q1 capacity; Sam and Lena are at full territory | 2026-11-02 |
| 3 | Launch the new partner program in Q1 | Next year's pipeline; Raj owns ops, I own the pitch | 2026-11-02 |

## People

| Name | Who they are | Treat as |
| --- | --- | --- |
| Dana Whitfield | CEO, my manager | VIP |
| Sam Ortiz | Account executive | direct report |
| Lena Park | Account executive | direct report |
| Raj Mehta | RevOps lead; partner program ops | colleague |
| Priya Shah | Acme Corp champion (acme.example) | VIP (external) |
| Tom Becker | Globex buyer (globex.example) | client |
| Jordan Lee | Recruiter, Talentbridge (talentbridge.example) | waiting-on |

## Noise rules

Things never to show me:

- Slack #random and #social
- Automated HubSpot digests (email and the Slack digest bot)
- Vendor newsletters and webinar invites, including ones sent by vendor account managers (added 2026-11-11 from brief feedback)
- Routine pipeline updates from Sam and Lena that don't ask me for anything

## Helper settings

| Helper | On | When | Delivered to | Feedback by | Sections / options | Cap |
| --- | --- | --- | --- | --- | --- | --- |
| my-smart-assistant | on | weekdays 7:30am | Slack DM | thread reply + reactions | Needs you, Waiting on others, Coming up (FYI cut at test drive); Friday roll-up on; urgent alerts off; prep cards folded in | 7 |
| prep-my-meetings | on | in the brief + hourly at :45, 8:45am–4:45pm weekdays | Slack DM | thread reply + reactions | external + Dana; quick cards; full brief for Dana's forecast review, QBRs, big Acme/Globex calls; public web: company sites and news only | 4 per brief |
| shut-down-my-day | on | weekdays 5:00pm | Slack DM | one-line thread reply | interactive; draft nudges on; meeting outcomes for external meetings; focus block 90 min | — |
| hand-off-my-busywork | on | every other Friday 1:00pm (first Nov 13) + on demand | chat (notification) | chat | may build: saved prompts, scheduled tasks, follow-up templates | 3 |

**Tidy owner:** my-smart-assistant

## Setup answers

<details><summary>Saved so upgrades can regenerate your helpers (don't need to edit)</summary>

```yaml
setup_date: 2026-11-02
tool: claude
plan: max
account: work, no admin restrictions
doc_tool: google_drive
profile_location: "Drive › focus-engine › Assistant Profile — Maya Chen"
sources:
  slack: {dms: true, mentions: true, threads: true, channels: ["#deals", "#leadership", "#revops", "#hiring"], skip: ["#random", "#social", "hubspot-digest bot"]}
  gmail: {inbox: true, sent: true, skip: [promotions, vendor marketing, hubspot digests]}
  gcal: {lookahead_business_days: 2}
  hubspot: {deals: "owned or on deal team", next_step_within_days: 7}
  gdrive: {comments_mentioning_me: true, shared_with_me: true}
my-smart-assistant: {time: "07:30", days: weekdays, channel: slack_dm, sections: [needs_you, waiting_on, coming_up], cap: 7, nudge_days: 3, vip_nudge_days: 1, friday_rollup: true, urgent_alerts: false, prep_folded: true}
prep-my-meetings: {rule: "external + Dana", timing: ["in_brief", "hourly :45 08:45-16:45"], depth: quick, full_brief_for: ["Dana forecast review", "QBRs", "Acme/Globex with 3+ customer attendees"], web: "company sites and news only"}
shut-down-my-day: {time: "17:00", days: weekdays, style: interactive, draft_nudges: true, meeting_outcomes: external_only, focus_block_minutes: 90}
hand-off-my-busywork: {cadence: "every other Friday 13:00", anchor: 2026-11-13, delivery: chat, may_build: [saved_prompts, scheduled_tasks, followup_templates]}
verification: subagents
test_drive_changes: ["removed FYI section from brief", "prep card 'Ask' capped at 3 questions"]
```

</details>

## Decision log

| Date | What was handed off | Form | Est. min/month | Actual (next audit) |
| --- | --- | --- | --- | --- |
| — | First audit runs Fri Nov 13 | — | — | — |

---

## Data (maintained by your helpers)

> You can read this. Edit only if you mean to — for example, delete a ledger line to make an item reappear.

```yaml
last_tidy: 2026-11-12T12:31:20Z
last_run:
  my-smart-assistant: 2026-11-12T12:30:40Z
  prep-my-meetings: 2026-11-12T21:45:30Z
  shut-down-my-day: 2026-11-12T22:00:50Z
  hand-off-my-busywork: null
watermarks:
  slack: 2026-11-12T22:00:10Z
  gmail: 2026-11-12T22:00:10Z
  gcal: 2026-11-12T21:45:05Z
  hubspot: 2026-11-12T12:30:05Z
  gdrive: 2026-11-12T12:30:05Z
ledger:
  - id: L-0026
    key: slack:C05DEALS1/1794326100.044200
    link: https://northwind.slack.example/archives/C05DEALS1/p1794326100044200
    kind: needs_you
    who: [Lena Park]
    summary: Lena needs approval on Initech discount desk request
    due: 2026-11-11T22:00:00Z
    status: done
    snoozed_until: null
    created_by: my-smart-assistant
    last_checked: 2026-11-11T12:30:20Z
  - id: L-0027
    key: slack:D07JLEE4K/1793992320.004100
    link: https://northwind.slack.example/archives/D07JLEE4K/p1793992320004100
    kind: waiting_on
    who: [Jordan Lee]
    summary: Jordan owes a third AE candidate profile
    due: null
    status: waiting
    snoozed_until: null
    created_by: my-smart-assistant
    last_checked: 2026-11-12T22:00:30Z
  - id: L-0028
    key: slack:D06DANAW2/1794330900.009100
    link: https://northwind.slack.example/archives/D06DANAW2/p1794330900009100
    kind: needs_you
    who: [Dana Whitfield]
    summary: Confirm December forecast review time with Dana
    due: 2026-11-11T17:00:00Z
    status: done
    snoozed_until: null
    created_by: my-smart-assistant
    last_checked: 2026-11-11T12:30:20Z
  - id: L-0029
    key: gmail:18f2c7d90a4be311
    link: https://mail.google.example/mail/u/0/#all/18f2c7d90a4be311
    kind: needs_you
    who: [Tom Becker]
    summary: Tom asked about Globex seat count; reply owed
    due: null
    status: surfaced          # done event pending (shutdown, 22:01Z)
    snoozed_until: null
    created_by: my-smart-assistant
    last_checked: 2026-11-12T22:00:30Z
  - id: L-0031
    key: gmail:18f31b2e55c0a7d4
    link: https://mail.google.example/mail/u/0/#all/18f31b2e55c0a7d4
    kind: needs_you
    who: [Priya Shah]
    summary: Approve 8% Acme renewal discount before Friday
    due: 2026-11-13T22:00:00Z
    status: surfaced
    snoozed_until: null
    created_by: my-smart-assistant
    last_checked: 2026-11-12T22:00:30Z
  - id: L-0032
    key: gdrive:file/1Hq4InitechMAPx9
    link: https://docs.google.example/document/d/1Hq4InitechMAPx9
    kind: needs_you
    who: [Sam Ortiz]
    summary: Sign off Sam's Initech mutual action plan
    due: 2026-11-13T22:00:00Z
    status: snoozed           # done event pending (shutdown, 22:01Z)
    snoozed_until: 2026-11-13T12:00:00Z
    created_by: my-smart-assistant
    last_checked: 2026-11-12T22:00:30Z
  - id: L-0034
    key: slack:D07JLEE4K/1794433200.118300
    link: https://northwind.slack.example/archives/D07JLEE4K/p1794433200118300
    kind: needs_you
    who: [Jordan Lee, Dana Whitfield]
    summary: Pick AE finalist from Jordan's two profiles for Dana's Monday interview
    due: 2026-11-13T22:00:00Z
    status: surfaced
    snoozed_until: null
    created_by: my-smart-assistant
    last_checked: 2026-11-12T22:00:30Z
  - id: L-0035
    key: gdrive:file/1Rk7PartnerOnePgr2
    link: https://docs.google.example/document/d/1Rk7PartnerOnePgr2
    kind: needs_you
    who: [Raj Mehta]
    summary: Review partner program one-pager; Raj's comments open
    due: null
    status: surfaced          # snooze event pending (Maya, 22:14Z)
    snoozed_until: null
    created_by: my-smart-assistant
    last_checked: 2026-11-12T22:00:30Z
  - id: L-0037
    key: gcal:5u2k9globexexp20261113@google.example
    link: https://calendar.google.example/calendar/event?eid=5u2k9globexexp20261113
    kind: meeting
    who: [Tom Becker]
    summary: Globex expansion call, Fri 10:00 Eastern
    due: 2026-11-13T15:00:00Z
    status: surfaced
    snoozed_until: null
    created_by: my-smart-assistant
    last_checked: 2026-11-12T21:45:20Z
  - id: L-0038
    key: gmail:msg/18f3d0a7c21e9b65
    link: https://mail.google.example/mail/u/0/#sent/18f3d0a7c21e9b65
    kind: commitment
    who: [Tom Becker]
    summary: Send Globex pricing to Tom by Friday 9am
    due: 2026-11-13T14:00:00Z
    status: open
    snoozed_until: null
    created_by: shut-down-my-day
    last_checked: 2026-11-12T22:00:30Z
events:                 # excerpt: Nov 11–12 only; earlier events (Nov 2–10) omitted here
  - {at: 2026-11-11T13:02:00Z, by: user, via: slack_reply, event: status, args: {id: L-0026, status: done}, applied: true}
  - {at: 2026-11-11T13:02:00Z, by: user, via: slack_reply, event: status, args: {id: L-0028, status: done}, applied: true}
  - {at: 2026-11-11T13:04:00Z, by: user, via: slack_reply, event: noise_rule, args: {action: add, rule: "vendor newsletters and webinar invites"}, applied: true}
  - {at: 2026-11-12T22:01:10Z, by: shut-down-my-day, via: shutdown, event: status, args: {id: L-0029, status: done}, applied: false}
  - {at: 2026-11-12T22:01:10Z, by: shut-down-my-day, via: shutdown, event: status, args: {id: L-0032, status: done}, applied: false}
  - {at: 2026-11-12T22:14:00Z, by: user, via: slack_reply, event: status, args: {id: L-0035, status: snoozed, until: 2026-11-16T12:00:00Z}, applied: false}
```
