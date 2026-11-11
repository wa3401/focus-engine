# Reading and writing the Assistant Profile (shared by every helper)

The Assistant Profile is one document the user owns, in their own cloud doc tool (Google Docs, Notion, OneDrive/Word) or as a local markdown file. Its shape is defined in `profile-template.md`. Top half: readable sections the user edits. Bottom half: a **data block** the helpers maintain.

## Who writes what

Several helpers can run close together, so each one edits only what it owns. Everything else is an **appended event**.

| Section | Owner (may rewrite) | Everyone else |
| --- | --- | --- |
| About me, Priorities, People, Noise rules | The user and `build-my-focus-engine` | Append an event (`priority(…)`, `people(…)`, `noise_rule(…)`); the morning brief applies it at its daily tidy |
| Helper settings → a helper's own row | That helper (from feedback) and setup | Append `setting(…)` |
| Data → ledger entries | The helper that created the entry | Append `status(…)` events |
| Data → watermarks | Each helper, for its own sources only | — |
| Data → events | Everyone (append only) | — |
| Decision log | `hand-off-my-busywork` | — |

## Daily tidy (morning brief only)

Once a day, `my-smart-assistant` (or whichever helper setup marked as `tidy_owner`):

1. Applies all pending events to their sections.
2. Moves ledger entries that are `done`/`dismissed` and older than 30 days to the archive doc (`archive_location` in About me), keeping only `{source_id, status, closed_at}` so they can't resurface.
3. Trims events older than 14 days into a one-line monthly summary.
4. Flags any priority whose "last confirmed" is older than 30 days so the next audit asks about it.

Keep the Profile under about 15,000 characters. If it's larger after tidying, archive more aggressively.

## Format rules

- Times are ISO 8601 in UTC (`2026-11-12T13:05:00Z`). Display in the user's time zone.
- Ledger keys are the source's own ID, prefixed by source: `slack:C04ABC/1731400000.1234`, `gmail:18c2f…`, `gcal:abc123@google.com`, `hubspot:deal/991`. Add a short ID (`L-0142`) that never changes.
- Summaries are written by you, at most 15 words, with no quoted text from the source.
- Never delete the user's words in the readable sections; propose changes through events and the next delivery instead.

## When writing is blocked

If this tool can read but not write the Profile, put your writes in the delivery's "Profile updates" block (see `feedback.md`). Next time the user chats with this helper, apply the block first.

## Version

About me holds `template_version` and the user's saved setup answers. If a helper's own header shows an older version than the newest one the user has heard about, do nothing during scheduled runs; `hand-off-my-busywork` mentions upgrades.
