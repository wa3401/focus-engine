# Installing on Microsoft 365 Copilot

Source: `research/platform-facts-2026-11-11.md` (official Microsoft pages, read 2026-11-11).

## Where helpers live

- **Scheduled prompts** — preferred for work accounts. Need a **Microsoft 365 Copilot license**; on by default unless "Optional connected experiences" is turned off. **[verified 2026-11]**
  - Create in Copilot Chat, Copilot in Teams, or Outlook (web and desktop). **[verified 2026-11]**
  - Up to **10 scheduled prompts per user**. You choose how many times each runs; no maximum or expiry is published. **[verified 2026-11 / partial]** → put "check your schedule is still active on <date>" on the handover card.
  - Output: a bolded chat under Chats in Copilot, with an optional email notification. **[verified 2026-11]** Sending email or posting to Teams isn't documented.
  - Put the **full helper instruction in the scheduled prompt**.
- **Agents (Agent Builder)** — for on-demand helpers. Instructions up to **8,000 characters** (name 30, description 1,000); shared within the organization with "Can edit" or "Can chat". **[verified 2026-11]** Scheduling agents isn't documented.
- **Copilot Cowork** (preview, including personal accounts) supports scheduled prompts and skills. **[verified 2026-11]** Limits aren't published; test in preflight if the user has it.

## Without the license

Copilot Chat without a Microsoft 365 Copilot license only reasons over uploaded files — no email, calendar or Teams access. **[verified 2026-11]** → `manual.md` with pasted data, unless the user has Copilot Cowork for personal accounts.

## Lowest-effort path

1. A scheduled prompt per helper within the 10-prompt cap (brief with folded meeting prep, shutdown); audit on demand or as an agent.
2. Sources: Outlook mail, Calendar, Teams and OneDrive through the license. Slack isn't reachable from here.
3. Profile: a OneDrive/Word doc; write-back via the "Profile updates" block.
4. Verification: separate re-check pass. Delivery: Copilot chat (+ optional email notification). Feedback: reply there.
