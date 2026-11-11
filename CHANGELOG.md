# Changelog

All notable changes to focus-engine. Versions follow [semantic versioning](https://semver.org/): a new major version means your helpers should be regenerated with "upgrade my focus engine".

## [Unreleased]

### Fixed (eval round 1)
- Helpers never build links: they reuse a stored link or give the source ID.
- "Last night", "this morning" and "yesterday" are worked out in the user's time zone; otherwise a plain day and time.
- Shared channels leave out the topic of compensation, HR and personal items, not only the figures.
- Checked lists sources read and sources that failed or weren't read. Muted, snoozed and dismissed items are never named (a bare count is fine). Snoozed items stay out of Coming up too.
- One Pending updates flow: paste the block at the top of the Profile; every run treats it as applied; a run that can write folds it in and clears it.
- Feedback line examples use this delivery's item numbers and only actions that apply.
- Acknowledgments set `kind: commitment`; helpers that don't own an entry append `kind(<id>, commitment, <due>)`. Both event forms are in the data-block schema.
- Pasted-data runs add a neutral "Not checked" line.
- Artifact feedback saves only through real storage; otherwise the page asks the user to copy and paste it in chat.
- Shutdown: proposed focus blocks end with "Not booked. Reply `book it` to hold it."; catch-up after skipped days; re-opens sources linked from open items.
- Brief: prep cards only when meeting prep is folded in; email output starts at the Subject line.
- Audit: doc layout (ranked table and build plan), only allowed build forms, "built, untested" rows, no cap language.
- Setup: all four Helper settings rows kept, with defaults for helpers left off; pause without scheduling; no restating what runs automatically after preflight; a draft request is not evidence it was sent.
- Evals: fixture helpers updated to the new wording, empty source files for connectors with nothing new, sdd-04 `last_run` fixed, msa-01 now delivers in-app so msa-05b is the only Slack DM case.

### Added
- `build-my-focus-engine` setup skill: preflight capability check, memory-first interview, per-helper configuration, Profile creation, generation, test-drive, install, handover card; upgrade, change, pause and remove modes.
- Helper templates: `my-smart-assistant`, `prep-my-meetings`, `shut-down-my-day`, `hand-off-my-busywork`.
- Shared modules: run loop, verification, feedback, safety, Profile reads and writes.
- Assistant Profile template (readable sections + data block).
- Install guides for Claude, ChatGPT, Gemini, Microsoft 365 Copilot, and tools without scheduling.
- Build script that produces the copy-paste `PROMPT.md` and the Claude skill folder.
