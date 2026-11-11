# Installing on ChatGPT

Source: `research/platform-facts-2026-11-11.md` (official OpenAI help pages, read 2026-11-11).

## Where helpers live

- **Scheduled tasks** — preferred. Available on Free, Go, Plus, Pro, Business, Enterprise and Edu. **[verified 2026-11]**
  - Active-task caps: **Free/Go 3, Plus 5, Business/Edu 10, Pro/Enterprise 15.** **[verified 2026-11]**
  - Frequency: **Free runs at most once a day in flexible windows** (morning, afternoon, night — no exact time); paid plans can run hourly at exact times. **[verified 2026-11]**
  - Event-triggered tasks (new) can fire on Gmail, Slack or GitHub events. **[verified 2026-11]**
  - Results appear in the task's conversation and the Scheduled page, with push and/or email notifications (Settings → Notifications). **[verified 2026-11]**
  - Tasks can use supported apps — the help page names **Gmail, Slack and GitHub**; Calendar and Drive aren't named, so test them in preflight. **[verified 2026-11 / partial]**
  - Tasks **can't use custom GPTs**, and a task created in a project **can't read the project's files**. **[verified 2026-11]** → put the **full helper instruction in the task prompt itself**.
  - Actions that send a message or change external data **may require approval and pause the task**. **[verified 2026-11]** → deliver in-app; write back via the "Profile updates" block.
- **Custom instructions** — 1,500 characters on Free/Go, 5,000 on paid plans; a single field under Settings → Personalization. **[verified 2026-11]** Use only for a short pointer ("my focus-engine Profile is <link>"), not a whole helper.
- **Projects** — fine for on-demand helpers (instructions + Profile file). The instruction length limit isn't published.
- **Skills** — only on Business, Enterprise, Healthcare and Edu: sidebar **Plugins** → Plugin Directory → **Skills** → **Create** → **Upload from your computer**. Uploads are scanned. **[verified 2026-11]**
- **Custom GPTs — don't use.** Personal accounts can no longer create them and all GPTs retire on **Dec 11, 2026**. **[verified 2026-11]**

## Lowest-effort path

1. Fit helpers to the cap. Plus (5): one task each for brief (with meeting prep folded in) and shutdown; audit on demand. Free (3, daily windows): brief as a daily task; shutdown and audit on demand — tell the user once that the brief arrives in a morning window rather than at an exact time.
2. Profile: read from a connected doc if Drive works in preflight; otherwise attach it to a project for on-demand runs. Write-back via the "Profile updates" block, applied in the next chat.
3. Verification: separate re-check pass (sub-agents aren't documented).
4. Delivery: in-app with push/email notification. Feedback: reply in the task's conversation.
