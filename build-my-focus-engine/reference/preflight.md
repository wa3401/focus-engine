# Preflight: what can this tool and plan actually do?

Goal: know, before generating anything, which parts of focus-engine can run automatically for this person, and design around the gaps. **Test; don't assume.** Product capabilities and plan limits change often; what you can do right now in this conversation is the best evidence.

## 1. Identify

Ask only what you can't tell:

- Which AI app is this, and which plan? (Free, paid individual, team/business, enterprise.)
- Personal account or work account managed by an IT admin?
- Which doc tool do they keep files in? (Google Drive, Notion, OneDrive/SharePoint, none.)
- Where do they live during the day? (Email, Slack, Teams, their phone.)

## 2. Test each capability

Run a small, harmless test for each, and record yes / no / needs-approval:

| Capability | Test |
| --- | --- |
| Connectors available | List which tools you can see right now (email, calendar, chat, CRM, drive, code). |
| Read calendar | Read tomorrow's events (titles only). |
| Read email / chat | Read the subject of their most recent email / a recent DM. |
| Write a doc | Create a doc named "focus-engine test — delete me" in their doc tool, then delete or tell them to. |
| Scheduling | Check whether you can create a scheduled or recurring task here; if so, what cadences and how many. If unsure, ask them to open the tool's scheduled tasks page and tell you what they see. |
| Connectors inside schedules | Some tools allow connectors in chat but not in scheduled runs. Check the tool's scheduling options or ask them to look. |
| Send email / chat message | Can you send to *them* (not others)? Does it need confirmation each time? |
| Sub-agents | Can you start a separate sub-agent / sub-task with fresh context? |
| Past chats / memory | Can you search or read their earlier conversations and saved memory? |
| Admin gates | Did any test fail with "disabled by your administrator" or need approval each run? |

## 3. Decide the setup shape

From the results, choose for each helper:

- **Where it runs:** a scheduled task (preferred), or a saved prompt + calendar reminder if scheduling isn't available or the plan's task limit is used up.
- **How it reads the Profile:** connector to their doc tool; or the Profile pasted into the scheduled instruction's context; or (last resort) the user pastes it.
- **How it writes back:** directly to the doc; or a "Profile updates" block applied in the next chat.
- **Where it delivers:** their chosen channel if the tool can send there unattended; otherwise in-app/notification, with email as an option if available.
- **How it verifies:** fresh sub-agents → separate re-check pass → pasted-data check (see `templates/_shared/verification.md`).

## 4. Tell them plainly (once)

Summarize in 3–5 short lines what will happen automatically and what won't, with the workaround for each gap. Offer the admin note if something is blocked by their organization. Then never mention limits again — not in the helpers, not in deliveries.

## 5. Record

Write the results to Profile → About me → Capabilities, plus `tool` and `plan`. Helpers read this to pick their verification method and feedback channel.
