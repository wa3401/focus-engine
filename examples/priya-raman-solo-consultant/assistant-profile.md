# Assistant Profile — Priya Raman

> Your AI helpers read this before every run and update the bottom part after. Edit the top part any time; your edits win. Keep this doc private (only you, and the AI tool you connected).

**Template version:** 0.1.0 · **Created:** 2026-11-16 · **Handover card:** page 1 of this doc (copy in `handover-card.md`)

*Example snapshot: Tue Nov 24, 2026, 9:10am Mountain, right after Priya pasted the morning brief's block into Pending updates. The data block was last rebuilt at the Thursday tidy (Nov 19, 3:45pm).*

## About me

- **Role:** Solo brand designer and consultant running Raman Studio (ramanstudio.example); identity systems and packaging for small food, wellness and retail businesses, 4–6 clients at a time.
- **What success looks like this quarter:** Fernwood's rebrand delivered on time and loved, two Q1 retainers signed, and three real deep-work blocks every week.
- **Working hours:** Monday–Thursday, roughly 9:30–16:00 (flexible)
- **Time zone:** America/Denver
- **Quiet hours / days off:** Fridays and weekends off; nothing before 9:00 or after 16:00; Thanksgiving Thu–Fri Nov 26–27 off
- **AI tool and plan:** ChatGPT · Plus
- **Capabilities (from setup preflight):** schedule=yes (tasks, 5 active, 4 in use), connectors_in_schedule=yes (Gmail, Google Calendar, Google Drive read, tested in a task), write_profile=no (read only; Priya pastes updates), send_email=no (asks for approval each time, not used), send_chat=no, subagents=no, past_chats=yes, admin_notes=none (personal account)
- **Archive doc:** Google Doc "Assistant Profile — archive" (Drive › Raman Studio › Admin)
- **Vacation mode:** off

## Priorities

| # | Priority | Why it matters | Last confirmed |
| --- | --- | --- | --- |
| 1 | Deliver the Fernwood rebrand by Sun Dec 6 | Biggest project of the year; Leo's board launches it in January | 2026-11-16 |
| 2 | Land two new retainers for Q1 | Steady income after Fernwood ends; Northfield Yoga and Harbor & Pine are in play | 2026-11-16 |
| 3 | Protect 3 deep-work blocks a week (2+ hours) | Design work doesn't happen in 30-minute gaps | 2026-11-16 |

## People

| Name | Who they are | Treat as |
| --- | --- | --- |
| Leo Grant | Founder, Fernwood (fernwood.example) | VIP (client) |
| Mia Sato | Owner, Oakline Coffee (oaklinecoffee.example) | client |
| Carla Nguyen | My accountant, Nguyen CPA (nguyencpa.example) | waiting-on |
| Ben Ortega | Owner, Northfield Yoga (northfieldyoga.example) | prospect |
| Sofia Delgado | Owner, Harbor & Pine Florist (harborandpine.example) | prospect |

## Noise rules

Things never to show me:

- Design newsletters
- LinkedIn notifications
- Dribbble digests

## Helper settings

| Helper | On | When | Delivered to | Feedback by | Sections / options | Cap |
| --- | --- | --- | --- | --- | --- | --- |
| my-smart-assistant | on | Mon–Thu 9:00am | task conversation (push notification) | reply there + Pending updates | Deep-work line, Needs you, Waiting on others, Today's calls; no FYI; no Friday roll-up; no urgent alerts; prep cards folded in | 5 |
| prep-my-meetings | folded into brief | in the 9:00 brief | same | same | every client and prospect call; quick cards; prospect background from their site only | 3 |
| shut-down-my-day | on | Mon–Thu 3:30pm | task conversation (push notification) | one-line reply + Pending updates | interactive; deep-work block proposal; no meeting-outcome question | — |
| hand-off-my-busywork | on demand | when asked, in the "Focus engine" project; calendar nudge every other Wed 2:00pm | chat | chat + Pending updates | may build: project prompts, follow-up templates, edits to existing tasks; 1 free task slot | 3 |

**Tidy owner:** Priya, Thursdays after the shutdown: say "tidy my profile" in the Focus engine project and paste the new data block.

## Setup answers

<details><summary>Saved so upgrades can regenerate your helpers (don't need to edit)</summary>

```yaml
setup_date: 2026-11-16
tool: chatgpt
plan: plus
account: personal
doc_tool: google_drive
profile_location: "Drive › Raman Studio › Admin › Assistant Profile — Priya Raman"
task_slots: {cap: 5, existing: ["Monday invoice reminder", "Thursday LinkedIn post idea"], focus_engine: 2, free: 1}
sources:
  gmail: {inbox: true, sent: true, skip: [design newsletters, linkedin notifications, dribbble digests]}
  gcal: {calls: today, deep_work_window: this_week, deadlines_days: 10}
  gdrive: {folders: [Fernwood, Oakline], comments_mentioning_me: true, shared_with_me: true}
my-smart-assistant: {time: "09:00", days: mon-thu, sections: [deep_work, needs_you, waiting_on, todays_calls], cap: 5, nudge_days: 3, vip_nudge_days: 1, friday_rollup: false, urgent_alerts: false, prep_folded: true}
prep-my-meetings: {rule: "all client and prospect calls", timing: in_brief, depth: quick, web: "prospect's own site only"}
shut-down-my-day: {time: "15:30", days: mon-thu, style: interactive, draft_nudges: false, meeting_outcomes: false, focus_block_minutes: 120}
hand-off-my-busywork: {cadence: on_demand, reminder: "every other Wednesday 14:00", home: "Focus engine project", may_build: [project_prompts, followup_templates, existing_task_edits]}
schedule_fit: "wanted brief, prep before calls, shutdown, biweekly audit, Sunday preview (5); 3 slots free -> merged to 2"
verification: separate_recheck_pass
write_back: profile_updates_block -> Pending updates; weekly tidy by Priya
test_drive_changes: ["added deep-work count line to the top of the brief", "removed FYI"]
```

</details>

## Decision log

| Date | What was handed off | Form | Est. min/month | Actual (next audit) |
| --- | --- | --- | --- | --- |
| — | First audit not run yet | — | — | — |

---

## Data (maintained by your helpers)

> You can read this. Edit only if you mean to — for example, delete a ledger line to make an item reappear.

```yaml
last_tidy: 2026-11-19T22:45:00Z
last_run:
  my-smart-assistant: 2026-11-19T16:00:40Z
  shut-down-my-day: 2026-11-19T22:30:50Z
  hand-off-my-busywork: null
watermarks:
  gmail: 2026-11-19T22:30:10Z
  gcal: 2026-11-19T22:30:10Z
  gdrive: 2026-11-19T16:00:10Z
ledger:
  - id: L-0002
    key: gmail:18f6a1c0d2fern01
    link: https://mail.google.example/mail/u/0/#all/18f6a1c0d2fern01
    kind: needs_you
    who: [Leo Grant]
    summary: Present Fernwood round-1 logo directions to Leo
    due: 2026-11-19T21:00:00Z
    status: done
    snoozed_until: null
    created_by: my-smart-assistant
    last_checked: 2026-11-19T22:30:30Z
  - id: L-0003
    key: gmail:18f61b77e9spkr02
    link: https://mail.google.example/mail/u/0/#all/18f61b77e9spkr02
    kind: needs_you
    who: []
    summary: Reply to design meetup speaking invite
    due: null
    status: dismissed
    snoozed_until: null
    created_by: my-smart-assistant
    last_checked: 2026-11-18T16:00:30Z
  - id: L-0004
    key: gmail:18f65d02a3cpa03
    link: https://mail.google.example/mail/u/0/#all/18f65d02a3cpa03
    kind: waiting_on
    who: [Carla Nguyen]
    summary: Carla owes Q4 estimated tax figure
    due: 2026-12-10T23:00:00Z
    status: waiting
    snoozed_until: null
    created_by: my-smart-assistant
    last_checked: 2026-11-19T22:30:30Z
  - id: L-0005
    key: gmail:18f66e4b10oak04
    link: https://mail.google.example/mail/u/0/#all/18f66e4b10oak04
    kind: needs_you
    who: [Mia Sato]
    summary: Send Oakline the November invoice
    due: 2026-11-23T23:00:00Z
    status: open
    snoozed_until: null
    created_by: my-smart-assistant
    last_checked: 2026-11-19T22:30:30Z
  - id: L-0006
    key: gmail:18f67f9c44prf05
    link: https://mail.google.example/mail/u/0/#all/18f67f9c44prf05
    kind: needs_you
    who: [Leo Grant]
    summary: Approve Fernwood stationery print proof
    due: 2026-11-23T23:00:00Z
    status: open
    snoozed_until: null
    created_by: my-smart-assistant
    last_checked: 2026-11-19T22:30:30Z
  - id: L-0007
    key: gmail:msg/18f68a2e71nfy06
    link: https://mail.google.example/mail/u/0/#sent/18f68a2e71nfy06
    kind: commitment
    who: [Ben Ortega]
    summary: Send Northfield Yoga Q1 retainer proposal by Tuesday
    due: 2026-11-24T23:00:00Z
    status: open
    snoozed_until: null
    created_by: shut-down-my-day
    last_checked: 2026-11-19T22:30:30Z
events: []   # pending changes live in Pending updates below until Thursday's tidy
```

## Pending updates

> Paste each delivery's "Profile updates" block here, and type your own changes (one per line). Helpers treat this box as already applied. Thursday tidy moves it into the data block and clears it.

```
Profile updates (from brief, Mon Nov 23):
- new L-0008 needs_you gmail:18f6b3d5c8oak07 "Reply to Mia on Oakline holiday menu-board scope" due null (#3)
- new L-0010 needs_you gmail:18f6a9e0b2hnp08 "Book discovery call with Sofia, Harbor & Pine" due null (#4)
- status L-0005 surfaced (#1) · L-0006 surfaced (#2) · L-0004 waiting (2 days)
- watermark gmail 2026-11-23T16:00:10Z · gcal 2026-11-23T16:00:10Z · gdrive 2026-11-23T16:00:10Z
- last_run my-smart-assistant 2026-11-23T16:00:40Z
```

```
Profile updates (from shutdown, Mon Nov 23):
- status L-0005 done · L-0006 done
- status L-0008 surfaced (carried)
- watermark gmail 2026-11-23T22:30:10Z · gcal 2026-11-23T22:30:10Z
- last_run shut-down-my-day 2026-11-23T22:30:50Z
Priya replied 3:41pm: carry 1, snooze 2 to Tue
```

```
Profile updates (from brief, Tue Nov 24):
- event status L-0010 snoozed until 2026-11-24T16:00:00Z (from your Mon shutdown reply; now due, so it's #4)
- new L-0011 needs_you gmail:18f6c41a09fern09 "Send Leo round-2 logo lockups before his board review" due 2026-11-26T00:00:00Z (#1)
- new L-0012 meeting gcal:fernwood-weekly-20261124@google.example "Fernwood weekly check-in with Leo, 11:00" due 2026-11-24T18:00:00Z (M1)
- new L-0013 meeting gcal:northfield-q1-20261124@google.example "Northfield Yoga Q1 retainer call with Ben, 2:00" due 2026-11-24T21:00:00Z (M2)
- status L-0011 surfaced (#1) · L-0008 surfaced (#2) · L-0007 surfaced (#3) · L-0010 surfaced (#4) · L-0004 waiting (3 days, nudge drafted)
- watermark gmail 2026-11-24T16:00:10Z · gcal 2026-11-24T16:00:10Z · gdrive 2026-11-24T16:00:10Z
- last_run my-smart-assistant 2026-11-24T16:00:40Z
```
