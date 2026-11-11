# Installing on Claude

Source: `research/platform-facts-2026-11-11.md` (official Claude help pages, read 2026-11-11).

## Where helpers live

- **Scheduled tasks** — preferred. Available on all paid plans: Pro, Max, Ultra, Team, Enterprise; not on Free. **[verified 2026-11]** Create from the **Scheduled** sidebar (Create with Claude / Set up manually) or by describing the task in any chat. Cadences: hourly, daily, weekly, weekdays, or manual. **[verified 2026-11]** Tasks run remotely, so they keep running while the computer is asleep or the app is closed — unless the task needs local files or apps. **[verified 2026-11]** Each run has the same connected tools, skills and plugins as a normal task. **[verified 2026-11]** No per-plan run cap is published; runs count toward normal usage.
- **Skills** — optional, for on-demand use ("prep my 2pm"). Available on Free, Pro, Max, Ultra, Team and Enterprise (code execution must be on). **[verified 2026-11]** Install: Customize → Skills → **+** → **+ Create skill** → **Upload a skill**, then upload a ZIP **containing the skill folder** — the folder's name matches the skill name and it holds `SKILL.md`. **[verified 2026-11]**
- **Projects** — optional home for on-demand helpers with the Profile attached.

## Team and Enterprise admin settings (check in preflight)

All **[verified 2026-11]**:

- Cowork can be turned off for the organization (off by default in HIPAA orgs).
- **Cloud runs** ("Run Cowork in the cloud"): on by default for Team, **off by default for Enterprise** (and needs a custom-role grant). If off, scheduled tasks won't run while the laptop is closed → generate the admin note, or use manual runs.
- **Write actions:** "Allow 'Always allow' for connector tools" is off by default, so write-capable connector tools (writing the Profile doc, sending a Slack DM) need approval once per task → prefer in-app delivery and the "Profile updates" block unless the admin enables it.
- **User-created skills** can be turned off; on Enterprise the custom role needs "Create skills".

## Lowest-effort path

1. One scheduled task per helper (or merged, if the user prefers fewer), with the **full generated helper instruction** as the task prompt — shared modules inlined. Nothing else to install.
2. Point it at the Profile doc via the user's Drive/Notion/OneDrive connector.
3. Delivery: in-app by default; Slack DM or email if those connectors can send to the user without per-run approval (preflight confirms).
4. Sub-agents: not documented for scheduled tasks — test in preflight; if unavailable, use the separate re-check pass.

## Free plan

No scheduled tasks. Skills work, so offer the skill ZIP for on-demand use, plus `manual.md` reminders.
