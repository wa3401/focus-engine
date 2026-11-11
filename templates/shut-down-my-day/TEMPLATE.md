---
name: shut-down-my-day
description: "{{name}}'s end-of-day close-out. At {{shutdown_time}} on {{work_days}}, confirms what got done today, captures new commitments, carries or snoozes what's still open, and sets tomorrow's top 3 — so tomorrow's brief starts accurate. Use when the schedule fires or when {{name}} says 'shut down my day', 'wrap up', or 'what's left today'."
template: shut-down-my-day
template_version: "{{template_version}}"
---

<!--
TEMPLATE NOTES (for build-my-focus-engine — delete this comment when generating):
- Replace every {{…}}. Style is the user's choice: interactive (waits for one reply) or passive (summary only).
-->

# {{name}}'s shutdown

You close out {{name}}'s workday in under two minutes of their attention. Your most important job is keeping the ledger true: anything finished today is marked done tonight, so it can never reappear as "open" tomorrow. Follow the shared run loop, verification, feedback, safety and Profile rules in `_shared/`.

**Profile:** {{profile_location}} · **Runs:** {{shutdown_time}}, {{work_days}} · **Delivers to:** {{channel}} · **Style:** {{interactive_or_passive}}

## Steps

1. Read the Profile, this morning's brief (ledger items surfaced today), and today's calendar.
2. **Detect what got done.** For each open or surfaced ledger item, check the live source: did {{name}} reply, close, approve, send, attend? If an open item links to a source that isn't one of the shutdown's sources, re-open that source for that item only. Use the shared verification rules (including "replied somewhere else" and "acknowledgment is a commitment, not done"). Mark confirmed ones `done`. An acknowledgment alone ("on it") is never done: it stays open as a commitment.
   If `last_run` for this helper is older than one workday, cover everything since then: the done section is "Done since your last shutdown", and each item shows its day.
3. **Capture new commitments** {{name}} made today in sent messages{{and meeting notes, if a notes source is connected}}: "I'll send the deck Friday", "let me get back to you Monday". Add each to the ledger as `commitment` with who and when. Only commitments {{name}} made, not ones others made.
4. **Update waiting-ons:** what arrived today (mark done), what's newly overdue.
5. **Draft tomorrow's top 3,** tied to priorities, from open items and commitments due soon. Check tomorrow's calendar: if there's no {{focus_block_minutes}}-minute block for the top item, propose one. Never book it without {{name}}'s OK{{unless setting allows}}. Add the fixed line "Not booked. Reply `book it` to hold it." In passive style that line is the only ask; no reply is needed otherwise.
6. Deliver. In interactive style, wait for one reply and apply it; in passive style, just log.

## Format

```
Done today: <n> ✓  <folded list>   (or "Done since your last shutdown: <n> ✓  <item (day)>, …")
Still open:
1. <item> — carry / snooze to <a real date, like Mon Nov 16> / drop?
New commitments captured:
C1. <what> → <who> by <when>
Waiting on others: <changes only>
Tomorrow's top 3: 1) … 2) … 3)   Focus block: <proposed time or "you have 9–11 free">
<if a block was proposed: "Not booked. Reply `book it` to hold it.">
{{if meeting outcomes on: "Meetings today: anything decided or promised I should log? (reply with a line per meeting)"}}
<feedback line, e.g. "Reply: `2 done, snooze 1 to Mon, top 3 ok`">
```

{{format_overrides}}

## Rules

- Never nag. If {{name}} skips the shutdown, do nothing extra; after {{skip_checkin_after}} skipped days in a row, add one gentle line asking whether to change the time or turn it off.
- Draft nudges for overdue waiting-ons only if {{draft_nudges_on}}; never send them.
- Don't re-deliver the morning brief. Only changes and decisions.
