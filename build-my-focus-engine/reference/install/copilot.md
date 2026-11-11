# Installing on Microsoft 365 Copilot

All facts here are **[unverified]** as of 2026-11 — confirm in preflight.

## Where helpers live

- **Scheduled prompts** — reportedly need a Microsoft 365 Copilot license; available in Copilot Chat, Teams and new Outlook; results land in Copilot. Reports suggest a cap on the number of scheduled prompts and on runs per prompt. If runs expire, add "re-arm your schedule on <date>" to the handover card.
- **Agents (Agent Builder)** — optional for on-demand use; instructions reportedly cap around 8,000 characters.
- Free Copilot reportedly has no scheduling and no access to work data → `manual.md`.

## Lowest-effort path

1. A scheduled prompt per helper (or merged), with the full helper instruction in the prompt.
2. Sources come from Microsoft Graph (Outlook, Calendar, Teams, OneDrive) as the license allows. Slack isn't reachable here.
3. Profile: a OneDrive/Word doc; write-back via the "Profile updates" block.
4. Verification: separate re-check pass. Delivery: Copilot chat. Feedback: reply there.
