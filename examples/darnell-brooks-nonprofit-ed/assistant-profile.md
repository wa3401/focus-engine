# Assistant Profile — Darnell Brooks

> Your AI helpers read this before every run and update the bottom part after. Edit the top part any time; your edits win. Keep this doc private (only you, and the AI tool you connected).

**Template version:** 0.1.0 · **Created:** 2026-11-17 · **Handover card:** page 1 of this doc (copy in `handover-card.md`)

*Example snapshot: Mon Nov 23, 2026, 8:40am Eastern, right after Darnell pasted the morning brief's block into Pending updates. The data block was last rebuilt at the Friday tidy (Nov 20, 3:35pm).*

## About me

- **Role:** Executive Director of Blue Ridge Literacy Project (blueridgeliteracy.example), a 12-person adult and family literacy nonprofit; I report to the board and lead fundraising.
- **What success looks like this quarter:** the state literacy grant submitted complete and on time, the year-end campaign at $80,000, and two strong board candidates in conversation by March.
- **Working hours:** Monday–Friday, 9:00–17:00
- **Time zone:** America/New_York
- **Quiet hours / days off:** nothing after 17:00 or on weekends, except board meeting evenings (second Thursday, 6:30pm); office closed Nov 26–27 and Dec 24–Jan 1
- **AI tool and plan:** Microsoft 365 Copilot · nonprofit Microsoft 365 plan with a Copilot license
- **Capabilities (from setup preflight):** schedule=yes (scheduled prompts, 2 of 10 used), connectors_in_schedule=yes (Outlook, Teams, Calendar, OneDrive), write_profile=no (read only; Darnell pastes updates), send_email=no (email notification of each run only), send_chat=no, subagents=no, past_chats=no, admin_notes=none needed
- **Archive doc:** Word doc "Assistant Profile — archive" (OneDrive › Documents › focus-engine)
- **Vacation mode:** off

## Priorities

| # | Priority | Why it matters | Last confirmed |
| --- | --- | --- | --- |
| 1 | Submit the state literacy grant by Tue Dec 1, 5:00pm | Funds two family literacy cohorts next year | 2026-11-17 |
| 2 | Year-end donor campaign: $80,000 goal | Covers the spring tutor-training gap | 2026-11-17 |
| 3 | Board recruitment: two new members by March | Two seats open; finance and education expertise | 2026-11-17 |

## People

| Name | Who they are | Treat as |
| --- | --- | --- |
| Angela Ruiz | Board chair | VIP |
| Marcus Hill | Development director | direct report |
| Kim Tran | Program director | direct report |
| Renee Walsh | Grant officer, state Department of Education literacy grants (literacy.state.example) | VIP (external) |

## Noise rules

Things never to show me:

- Teams General channel chatter
- Newsletter subscriptions (the Outlook Newsletters folder), including "Literacy Weekly" (added 2026-11-20)

## Helper settings

| Helper | On | When | Delivered to | Feedback by | Sections / options | Cap |
| --- | --- | --- | --- | --- | --- | --- |
| my-smart-assistant | on | weekdays 8:30am | Copilot chat + email notification | Pending updates box in this doc | Grant countdown line (until Dec 1), Needs you, Waiting on others, Coming up, FYI (campaign total only); Friday roll-up on; prep cards folded in | 5 |
| prep-my-meetings | folded into brief | in the 8:30 brief | same | same | external, Angela, board and committee meetings; quick cards; board meeting adds last decision + risks | 4 |
| shut-down-my-day | on | weekdays 4:30pm | Copilot chat + email notification | Pending updates box | passive; open items carry by default | — |
| hand-off-my-busywork | on demand | when asked; reminder every other Wed 2:00pm | Copilot chat (agent "Busywork audit") | chat + Pending updates | may build: saved prompts, scheduled prompts | 3 |

**Tidy owner:** Darnell, Fridays at 3:30pm (calendar reminder): open this doc and ask Copilot in Word to apply Pending updates to the data block, then clear the box.

## Setup answers

<details><summary>Saved so upgrades can regenerate your helpers (don't need to edit)</summary>

```yaml
setup_date: 2026-11-17
tool: microsoft_365_copilot
plan: nonprofit microsoft 365 + copilot license
account: work (admin-managed; nothing blocked)
doc_tool: onedrive_word
profile_location: "OneDrive › Documents › focus-engine › Assistant Profile — Darnell Brooks.docx"
sources:
  outlook: {inbox: true, sent: true, skip: [Newsletters folder]}
  teams: {chats: true, mentions: true, channels: [Leadership, Development, Programs], skip: [General]}
  calendar: {meetings_lookahead: "today + tomorrow morning", deadlines_lookahead_days: 7}
  onedrive: {mentions: true, shared_with_me: true, folders: ["State Literacy Grant FY27"], files: ["Year-end campaign tracker.xlsx"]}
my-smart-assistant: {time: "08:30", days: weekdays, sections: [grant_countdown, needs_you, waiting_on, coming_up, fyi], fyi: campaign_total_only, cap: 5, nudge_days: 3, vip_nudge_days: 1, friday_rollup: true, urgent_alerts: false, prep_folded: true}
prep-my-meetings: {rule: "external + Angela + board/committee", timing: in_brief, depth: quick, full_brief_for: [board meeting]}
shut-down-my-day: {time: "16:30", days: weekdays, style: passive, draft_nudges: false, meeting_outcomes: false, focus_block_minutes: 90}
hand-off-my-busywork: {cadence: on_demand, reminder: "every other Wednesday 14:00", delivery: chat, form: agent, may_build: [saved_prompts, scheduled_prompts]}
verification: separate_recheck_pass
write_back: profile_updates_block -> Pending updates box; weekly tidy by Darnell
test_drive_changes: ["added grant countdown line", "Needs you cap 7 -> 5"]
schedule_check_date: 2027-02-17
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
last_tidy: 2026-11-20T20:35:00Z
last_run:
  my-smart-assistant: 2026-11-20T13:30:40Z
  shut-down-my-day: 2026-11-19T21:30:50Z
  hand-off-my-busywork: null
watermarks:
  outlook: 2026-11-20T13:30:10Z
  teams: 2026-11-20T13:30:10Z
  calendar: 2026-11-20T13:30:10Z
  onedrive: 2026-11-20T13:30:10Z
ledger:
  - id: L-0006
    key: outlook:AAMkADBRLP0f3lib-MOU-1117
    link: https://outlook.office.example/mail/id/AAMkADBRLP0f3lib-MOU-1117
    kind: needs_you
    who: [Kim Tran]
    summary: Sign the county library partnership MOU
    due: 2026-11-20T22:00:00Z
    status: surfaced
    snoozed_until: null
    created_by: my-smart-assistant
    last_checked: 2026-11-20T13:30:20Z
  - id: L-0007
    key: teams:19:leadership@thread.v2/1795191600112
    link: https://teams.microsoft.example/l/message/19:leadership@thread.v2/1795191600112
    kind: commitment
    who: [Angela Ruiz]
    summary: Send board the November program dashboard
    due: 2026-11-19T22:00:00Z
    status: done
    snoozed_until: null
    created_by: shut-down-my-day
    last_checked: 2026-11-19T21:30:30Z
  - id: L-0008
    key: onedrive:01BRLP7VOLHANDBOOK26
    link: https://blueridgeliteracy-my.sharepoint.example/:w:/p/kim/01BRLP7VOLHANDBOOK26
    kind: needs_you
    who: [Kim Tran]
    summary: Review Kim's revised volunteer handbook
    due: null
    status: snoozed
    snoozed_until: 2026-12-02T14:00:00Z
    created_by: my-smart-assistant
    last_checked: 2026-11-18T14:30:20Z
  - id: L-0009
    key: teams:19:kim-darnell@unq.gbl.spaces/1795111200455
    link: https://teams.microsoft.example/l/message/19:kim-darnell@unq.gbl.spaces/1795111200455
    kind: waiting_on
    who: [Kim Tran]
    summary: Kim owes final fall enrollment numbers for grant section C
    due: 2026-11-24T22:00:00Z
    status: waiting
    snoozed_until: null
    created_by: my-smart-assistant
    last_checked: 2026-11-20T13:30:20Z
  - id: L-0010
    key: outlook:AAMkADBRLP0f3lapsed-1118
    link: https://outlook.office.example/mail/id/AAMkADBRLP0f3lapsed-1118
    kind: needs_you
    who: [Marcus Hill]
    summary: Review Marcus's lapsed-donor call list
    due: 2026-11-19T22:00:00Z
    status: done
    snoozed_until: null
    created_by: my-smart-assistant
    last_checked: 2026-11-19T21:30:30Z
  - id: L-0014
    key: outlookcal:AAMkADBRLPcal-renee-1123
    link: https://outlook.office.example/calendar/item/AAMkADBRLPcal-renee-1123
    kind: meeting
    who: [Renee Walsh]
    summary: Call with Renee Walsh on grant budget, Mon 2:00pm
    due: 2026-11-23T19:00:00Z
    status: open
    snoozed_until: null
    created_by: my-smart-assistant
    last_checked: 2026-11-20T13:30:20Z
events: []   # nothing pending inside the data block; new changes wait in Pending updates below
```

## Pending updates

> Paste each delivery's "Profile updates" block here, and type your own changes (one per line). Helpers treat this box as already applied. Friday tidy moves it into the data block and clears it.

```
Darnell (Fri Nov 20, 4:10pm): mute Literacy Weekly newsletter
```

```
Profile updates (from shutdown, Fri Nov 20):
- status L-0006 done
- status L-0009 waiting (2 days)
- watermark outlook 2026-11-20T21:30:10Z · teams 2026-11-20T21:30:10Z · calendar 2026-11-20T21:30:10Z
- last_run shut-down-my-day 2026-11-20T21:30:50Z
```

```
Profile updates (from brief, Mon Nov 23):
- new L-0011 needs_you outlook:AAMkADBRLP0f3budget-1120 "Approve final grant budget figures for Marcus" due 2026-11-25T17:00:00Z (#1)
- new L-0012 needs_you teams:19:development@thread.v2/1795204800331 "Sign off year-end appeal letter before printer cutoff" due 2026-11-24T17:00:00Z (#2)
- new L-0013 needs_you outlook:AAMkADBRLP0f3angela-1121 "Send Angela top two board candidates" due 2026-11-24T21:00:00Z (#3)
- new L-0015 needs_you outlook:AAMkADBRLP0f3renee-1120 "Read Renee's match-funds question before 2pm call" due 2026-11-23T19:00:00Z (#4)
- status L-0011 surfaced · L-0012 surfaced · L-0013 surfaced · L-0015 surfaced · L-0014 surfaced (M1) · L-0009 waiting (3 days, nudge drafted)
- watermark outlook 2026-11-23T13:30:10Z · teams 2026-11-23T13:30:10Z · calendar 2026-11-23T13:30:10Z · onedrive 2026-11-23T13:30:10Z
- last_run my-smart-assistant 2026-11-23T13:30:40Z
```
