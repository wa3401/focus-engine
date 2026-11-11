# Installing on Gemini

Source: `research/platform-facts-2026-11-11.md` (official Google help pages, read 2026-11-11).

## Where helpers live

- **Schedules** (formerly "scheduled actions") — preferred. Rolling out to **personal Google Accounts** (no paid plan required) and to work/school accounts on qualifying Workspace editions; Keep Activity must be on. **[verified 2026-11]**
  - Up to **10 active schedules**. **[verified 2026-11]**
  - Output: the chat is marked unread and listed on the Scheduled page (web); push notification on mobile. No email delivery documented. **[verified 2026-11]**
  - Can use Gmail, Calendar, Drive and Docs **if those apps are connected**. **[verified 2026-11]** Writing Docs or sending email from a chat schedule isn't documented → write back via the "Profile updates" block.
  - Put the **full helper instruction in the schedule's prompt**.
- **Tasks** (formerly "Spark") — an agent mode that can run on a schedule and create/edit Google Docs, draft/reply/forward in Gmail, and manage Calendar. **Personal accounts only, 18+, Google AI Pro or Ultra, not in the EEA, UK, Switzerland or Nigeria.** Up to 15 tasks at once. Schedules don't run while task mode is off or the device is off. **[verified 2026-11]** Offer it as an upgrade path when the user qualifies (it can write the Profile directly), but keep the "drafts only, never send to others" rule.
- **Skills** — replace Gems; tasks can call them with `@skill`; up to 100 active. **[verified 2026-11]** Good for on-demand helpers.
- **Gems — don't use.** Personal Gems go read-only Nov 17, 2026 and are removed Dec 17, 2026; Workspace accounts follow in 2027. **[verified 2026-11]**

## Workspace accounts

The Gemini app's access to Workspace apps is set in Admin console → Generative AI → Gemini app → Apps → **Workspace apps** (on by default) and requires Gemini conversation history to be on. **[verified 2026-11]** Tasks aren't available to Workspace accounts. Generate the admin note if access is off.

## Lowest-effort path

1. One Schedule per helper within the 10-schedule cap (brief with folded meeting prep, shutdown; audit on demand).
2. Profile: a Google Doc read via the Docs/Drive connection. Write-back via the "Profile updates" block — or directly, if the user runs helpers as Tasks.
3. Verification: separate re-check pass.
4. Delivery: Gemini chat + notification. Feedback: reply in that chat.
