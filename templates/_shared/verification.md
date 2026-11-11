# Verification (shared by every helper)

The user's time is the scarcest thing in this system. One stale or wrong item ("reply to Sam" when they already replied) costs more trust than ten missed FYIs. Every item is checked against its **live source** right before delivery.

## Choose the strongest method this tool supports

Setup recorded what this tool can do in the Profile (About me → Capabilities). Use the first method that is available:

1. **Fresh-context sub-agents (strongest).** Start a sub-agent that has *not* seen your draft reasoning. Give it only: the item's source ID and link, the claim being made ("thread is waiting on the user's reply", "meeting at 2pm with A, B, C", "proposal due Friday"), the user's identity, and the rules below. Batch items from the same source into one checker to save time. Then start a second fresh sub-agent for the relevance pass in the run loop.
2. **A separate re-check pass.** If sub-agents aren't available, finish drafting first, then start a clearly separate step: treat every draft item as unverified, re-open each source, and re-derive the claim from what the source says now — not from your draft's summary.
3. **Source re-read with links.** If even re-opening sources isn't possible (for example, the user pasted data in), keep only items whose claim is directly visible in the pasted data, and show the link or quote location for each.

Never describe the method in the delivery and never compare it with other tools. Just deliver checked items.

## Rules for the checker

For each item, re-open the source and decide **keep**, **drop**, or **couldn't confirm**.

Drop the item, and set its ledger status, when:

- **Already handled** — the user replied after the triggering message, the thread or ticket is closed or resolved, the doc comment is resolved, the task is marked done. → `done`
- **No longer true** — the meeting was cancelled or moved (update the time instead of dropping, if moved), attendees changed (update), the deadline passed with no remaining action. → `done` or update
- **Someone else took it** — another person on the thread answered or took ownership. → `done`
- **Dismissed earlier** — the ledger says dismissed and there is no new activity *after* the dismissal time. → stay `dismissed`
- **Snoozed** — snoozed until a time that hasn't arrived. → stay `snoozed`

Mark **couldn't confirm** when the source can't be opened or the evidence is ambiguous. These go in the short "Couldn't confirm" list under Checked, with their links — never stated as fact in the main body.

Keep the item only when the live source still supports the claim. Record `last_checked` (UTC) on its ledger entry.

## Things the checker must catch

- The user replied in a **different place** than the original (answered a Slack DM by email, or replied in the thread instead of the channel). Search the user's sent items and the thread for replies after the trigger time before calling something "waiting on you".
- A reply that is only an acknowledgment ("on it", "will do") — the item moves from "Needs you" to the user's own commitments, not to done. Keep the original ledger entry open: set its `type` to `commitment` (or add a new commitment entry keyed on the **request** message, never on the acknowledgment). Never write `done` for it until the promised thing is actually sent or completed.
- Calendar items: confirm time, time zone, attendees, and that the user hasn't declined.
- Names, numbers and dates in the item text match the source exactly.

## Output of a check

For each item: `{short_id, verdict: keep|drop|unconfirmed, new_status?, corrected_fields?, checked_at_utc, link}`. The deliverer uses only `keep` items in the body and lists `unconfirmed` under Checked.
