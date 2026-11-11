# Installing on Claude

## Where helpers live

- **Scheduled tasks (Cowork)** — preferred. Each run is its own session with the same connectors, skills and plugins as a normal task, and runs in the cloud while the computer sleeps; tasks needing local files still need the machine. Cadences: hourly, daily, weekly, weekdays, or manual. Create by describing the task in chat or via the scheduled tasks settings. **[verified 2026-11]** (support.claude.com/en/articles/13854387)
- **Skills** — optional, for on-demand use ("prep my 2pm"). Installed by uploading a ZIP whose root contains `SKILL.md`, under Customize → Skills. **[verified 2026-11]** (support.claude.com/en/articles/12512180)
- **Projects** — optional home for on-demand helpers with the Profile attached.

## Plans

- Free: no scheduled tasks. Use `manual.md`. **[verified 2026-11]**
- Pro / Max: scheduled tasks available. **[verified 2026-11]**
- Team / Enterprise: owners can restrict cloud runs, connectors and user-created skills; write-capable connector actions may need approval per task unless the admin allows them. **[verified 2026-11]** → run preflight carefully; generate the admin note if blocked.

## Lowest-effort path

1. Create one scheduled task per helper (or a merged task if the user prefers fewer), with the **full generated helper instruction** as the task prompt — shared modules inlined. Nothing else to install.
2. Point it at the Profile doc via the user's Drive/Notion/OneDrive connector.
3. Delivery: in-app by default; Slack DM or email if those connectors can send to the user unattended (preflight confirms).
4. Sub-agents: generally available in Cowork sessions — preflight confirms; use the sub-agent verification method when it does.

## Limits to fit

- Count runs per day across helpers; if the user's plan or admin limits are tight, fold meeting prep into the brief and keep the audit on demand.
- Keep each task prompt focused; long reference material can live in the Profile's Helper settings or a reference doc the task reads.
