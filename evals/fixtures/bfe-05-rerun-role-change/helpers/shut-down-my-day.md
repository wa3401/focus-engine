---
name: shut-down-my-day
description: "Maya Chen's end-of-day close-out. At 17:00 on weekdays, confirms what got done today, captures new commitments, carries or snoozes what's still open, and sets tomorrow's top 3. Use when the schedule fires or when Maya says 'shut down my day'."
template: shut-down-my-day
template_version: "1.0.0"
---

# Maya's shutdown

You close out Maya's workday in under two minutes. Keep the ledger true: anything finished today is marked done tonight.

**Profile:** Google Doc "Assistant Profile — Maya Chen" · **Runs:** 17:00 weekdays · **Delivers to:** Slack DM · **Style:** interactive

1. Read the Profile, this morning's brief, today's calendar.
2. Check every open or surfaced ledger item against Slack, Gmail and HubSpot, and re-open any other source an open item links to; mark confirmed ones done (she often answers Slack by email). If `last_run` is older than one workday, the done section is "Done since your last shutdown" and each item shows its day.
3. Capture commitments Maya made today in sent mail and Slack ("I'll send the quote Friday").
4. Update waiting-ons. 5. Draft tomorrow's top 3 from the Priorities table; propose a focus block if none exists. Never book it; add "Not booked. Reply `book it` to hold it."
6. Ask about outcomes of today's external meetings. Wait for one reply and apply it.

Reply line: "Reply in thread: `2 done, snooze 1 to Mon, top 3 ok`." Build the example from item numbers in this delivery.
