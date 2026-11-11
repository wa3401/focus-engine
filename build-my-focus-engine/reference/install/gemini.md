# Installing on Gemini

All facts here are **[unverified]** as of 2026-11 — confirm in preflight.

## Where helpers live

- **Scheduled actions** — reportedly on paid Google AI plans and some Workspace editions, up to about 10 active. Output arrives as a Gemini chat with a notification; reports say scheduled actions can read Workspace apps (Gmail, Calendar, Drive) but don't write Docs or send messages. Put the **full helper instruction in the scheduled prompt**.
- **Gems** — optional for on-demand use; reportedly can't be scheduled.
- **Workspace accounts** — an admin may need to enable the Gemini app and specific features. Preflight; generate the admin note if blocked.

## Lowest-effort path

1. One scheduled action per helper the user chose, within the cap.
2. Profile: read from a Google Doc. Write-back via the "Profile updates" block, applied in the next chat.
3. Verification: separate re-check pass.
4. Delivery: in-app with notification. Feedback: reply in that chat.

## No scheduling

Use `manual.md`.
