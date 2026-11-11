# Platform facts — as of 2026-11-11

Every fact here was read on an official vendor page in a real browser (Claude in Chrome) on 2026-11-11. Nothing was filled in from memory or from third-party sources.

**How to read this file**

- **Status:** VERIFIED means the official page states it. PARTIAL means the page answers only part of the question, or answers it indirectly. NOT FOUND means no official page I could reach states it.
- **Page date:** some help centers show a relative date ("Updated 11 days ago"). Those are converted to an approximate date and marked `~`. Pages with no date say "not shown".
- **Sign-in:** the pages were read while signed in to the vendors' sites. Google help pages can differ slightly between personal and Workspace accounts.

---

## (a) Answers

| # | Answer | Status | URL | Quote | Page date |
|---|---|---|---|---|---|
| 1a | **ChatGPT Tasks — plans:** Free, Go, Plus, Pro, Business, Enterprise, Edu, plus ChatGPT for Healthcare workspaces. | VERIFIED | https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt | "Scheduled tasks and scheduled task sharing are available to eligible ChatGPT Free, Go, Plus, Pro, Business, Enterprise, and Edu users" | ~2026-10-31 ("Updated: 11 days ago") |
| 1b | **Active-task caps:** Free/Go 3, Plus 5, Business/Edu 10, Pro/Enterprise 15. **Most frequent schedule:** Free is at most once a day, in flexible windows (morning, afternoon, night). Paid plans can run hourly at exact times. Event-triggered tasks (new) can run up to 30 times an hour and 720 times a day. | VERIFIED | same | "Active task limits depend on the plan: 3 for Free and Go, 5 for Plus, 10 for Business and Edu, and 15 for Pro and Enterprise." | ~2026-10-31 |
| 1c | **Delivery:** results appear in the task's conversation and on the Scheduled page. Notifications go by push, email, or both (Settings > Notifications). | VERIFIED | same | "To manage task notifications, go to Settings > Notifications and select Push, Email, or both." | ~2026-10-31 |
| 2a | **Connected apps inside tasks:** yes, for supported apps. The page names Gmail, Slack and GitHub. It does not name Google Calendar, Google Drive or Outlook. Event-triggered tasks support only Gmail, Slack and GitHub. | PARTIAL | same | "Scheduled tasks can use supported apps, including Gmail, Slack, and GitHub, when those apps are available for your account or workspace." | ~2026-10-31 |
| 2b | **Custom GPTs:** not supported in tasks. **Projects:** a task created in a project can't use the project's files. The page doesn't say whether it uses project instructions. | PARTIAL | same | "If you create a task in a project, it cannot access uploaded files or files stored in that project." (The "not supported" list includes "GPTs".) | ~2026-10-31 |
| 2c | **Sending without confirmation:** actions that send messages or change external data may need approval, which pauses the task. Workspace admins control persistent permissions. Sending is not guaranteed to run unattended. | PARTIAL | same | "An action that sends a message or changes external data may require approval. If approval is required, the task pauses until you review it." | ~2026-10-31 |
| 3a | **Custom GPT instruction limit:** no number on the current page. Custom GPTs are being retired: personal accounts can no longer create new GPTs, and retirement is Dec 11, 2026. | NOT FOUND (limit) / VERIFIED (retirement) | https://help.openai.com/en/articles/8554397-creating-and-editing-gpts | "New GPT creation and publishing are not available on personal ChatGPT accounts, including Free, Go, Plus, and Pro." | ~2026-11-03 ("Updated: 8 days ago") |
| 3b | **Custom instructions:** 1,500 characters on Free and Go; 5,000 on Plus, Pro, Business, Enterprise and Edu. It is now a single "Custom Instructions" field (Settings > Personalization), not the old two boxes. | VERIFIED | https://help.openai.com/en/articles/8096356-chatgpt-custom-instructions | "Free and Go users can save up to 1,500 characters in custom instructions. Plus, Pro, Enterprise, Business, and Education users can save up to 5,000 characters." | ~2026-10-28 ("Updated: 14 days ago") |
| 3c | **Project instructions limit:** not stated. The page only says project instructions override global custom instructions. File caps per project: Free 5; Go and Plus 25; Edu, Pro, Business and Enterprise 40. | NOT FOUND | https://help.openai.com/en/articles/10169521-projects-in-chatgpt | "Project instructions apply only within that project and override your global custom instructions." | ~2026-10-31 ("Updated: 11 days ago") |
| 3d | **Largest single message:** no help-center article states a limit. Searched for "message too long character limit prompt". | NOT FOUND | https://help.openai.com/en/?q=message+too+long+character+limit+prompt | — | — |
| 4 | **ChatGPT skills:** yes. Personal skills are on Business, Enterprise, Healthcare and Edu, not consumer plans. To upload: sidebar **Plugins** → Plugin Directory → **Skills** tab → **Create** → **Upload from your computer**. Uploads are scanned and can be marked "Needs Review" or "Blocked". The page does not state a SKILL.md or ZIP format for skills. Admins can upload a plugin ZIP from Admin console > Plugins > Add > Upload plugin. | VERIFIED | https://help.openai.com/en/articles/20001066-skills-in-chatgpt | "Skills are available to eligible ChatGPT Business, Enterprise, Healthcare, and Edu users, subject to workspace settings and product availability." | ~2026-10-20 ("Updated: 22 days ago") |
| 5 | **Pulse:** the only official page found is the Sept 25, 2025 launch post (Pro preview on mobile). Two help-center searches ("pulse", "ChatGPT Pulse") return no Pulse article. I couldn't confirm whether it's still live, retired, or which plans have it now. | NOT FOUND (current status) | https://openai.com/index/introducing-chatgpt-pulse/ | "Today we're releasing a preview of ChatGPT Pulse to Pro users on mobile." | 2025-09-25 |
| 6 | **Agent mode:** retired, replaced by **ChatGPT Work**. The page still shows the old limits (Plus 40/month, Pro 400/month, Business & Enterprise 40/month) and the old "repeat daily/weekly/monthly" option. Treat those as historical. I didn't research ChatGPT Work's limits. | VERIFIED (retired) | https://help.openai.com/en/articles/11752874-chatgpt-agent | "ChatGPT agent is no longer available. Use ChatGPT Work for longer, multi-step tasks and finished deliverables." | ~2026-10-27 ("Updated: 15 days ago") |
| 7a | **Gemini "scheduled actions" are now "Schedules":** available on personal Google Accounts (rolling out gradually) and on work or school accounts with a qualifying Workspace edition. Keep Activity must be on. No country list is given. | VERIFIED | https://support.google.com/gemini/answer/16316416?hl=en | "A work or school Google Account with access to a qualifying edition of Google Workspace." | not shown |
| 7b | **Maximum:** 10 active schedules. | VERIFIED | same | "Important: You can have up to 10 active schedules at a time." | not shown |
| 7c | **Output:** on the web, the chat is marked unread and appears on the Scheduled page. On mobile, a push notification. Email delivery is not mentioned. | VERIFIED | same | "When each response is ready, Gemini will notify you" (web: unread chat and Scheduled page; mobile: device notification) | not shown |
| 7d | **Gmail, Calendar, Drive, Docs:** chat schedules can use Workspace apps if those apps are connected. The new **tasks** mode can read and write Calendar, Docs, Drive, Gmail, Keep, Sheets, Slides and Tasks. | VERIFIED | same; and https://support.google.com/gemini/answer/17094507?hl=en | "If you ask Gemini Apps to schedule an action that uses another app, like Google Workspace, that app must be connected." | not shown |
| 7e | **Write Docs or send email:** chat Schedules: not stated. **Tasks:** can create or edit Google Docs; edits to shared docs need confirmation. In Gmail it can "draft, forward, reply". The page doesn't say outright that it sends a new email without confirmation. | PARTIAL | https://support.google.com/gemini/answer/17094507?hl=en | "Write & edit documents: Create documents in Google Docs or edit existing ones" / "Draft & reply: Compose email drafts, forward emails, or reply to existing email threads." | not shown |
| 7f | **Gems in schedules:** not stated. Gems are being retired in favour of **skills**, which tasks can use with `@skill`. | NOT FOUND (Gems) | https://support.google.com/gemini/answer/17094507?hl=en | "To specify an existing skill to use, enter @, then select the skill." | not shown |
| 8a | **Gem instruction length limit:** not stated on the Gems pages. | NOT FOUND | https://support.google.com/gemini/answer/15146780?hl=en | — | not shown |
| 8b | **Gem sharing:** Gems can be shared, but the details are on a linked page I didn't open. Gems shared with you aren't added to your list until you open them. **Gems are retiring:** personal 18+ accounts go read-only on Nov 17, 2026, and Gems are removed on Dec 17, 2026. Workspace business, enterprise and non-profit accounts follow in March 2027; education in June 2027. They are auto-converted to skills (max 100 active). | PARTIAL (sharing) / VERIFIED (retirement) | https://support.google.com/gemini/answer/15146780?hl=en ; https://support.google.com/gemini/answer/18560919?hl=en | "Starting in November 2026, Gems will transition to skills in Gemini Apps for personal Google Accounts, and in 2027, for work and school accounts." | not shown |
| 8c | **Scheduling a Gem:** not documented. | NOT FOUND | https://support.google.com/gemini/answer/15146780?hl=en | — | not shown |
| 9 | **Gemini agent that runs on a schedule and acts:** yes, **Tasks in Gemini**, formerly "Spark". Schedules can be time-based (once, hourly, daily, weekly, monthly, yearly), Gmail monitors, or topic monitors. Requirements: personal Google Account only (no work or school), age 18+, Google AI Pro or Ultra. Not available in the EEA, Nigeria, Switzerland or the UK. Up to 15 tasks can run at once. **Schedules don't run while task mode is off or the device is off.** | VERIFIED | https://support.google.com/gemini/answer/17094710?hl=en ; https://support.google.com/gemini/answer/17094507?hl=en | "Since May, we've been testing Spark in beta with our subscribers. ... so we renamed it Task to make it easier to understand." | not shown |
| 10 | **Workspace admin:** the Gemini app is a core service on business and enterprise editions and all Education editions. To give it access to Workspace apps: Admin console > Generative AI > Gemini app > Apps > **Workspace apps** (on by default). This needs the Gemini Settings admin privilege, and users must have Gemini conversation history on. I found no separate admin toggle for Schedules. Tasks aren't available to Workspace accounts at all. | PARTIAL | https://knowledge.workspace.google.com/admin/generative-ai/gemini-app/turn-google-apps-in-gemini-on-or-off | "You must turn on Gemini conversation history to use Workspace apps in Gemini." | not shown |
| 11a | **M365 scheduled prompts — license:** a Microsoft Copilot license is required. Scheduled prompts are on by default unless "Optional connected experiences" is turned off. | VERIFIED | https://support.microsoft.com/en-us/microsoft-365-copilot/schedule-your-most-used-copilot-prompts | "A Microsoft Copilot license is required." | not shown |
| 11b | **Where they can be created:** Copilot Chat, Copilot in Teams, and Outlook (web and desktop). | VERIFIED | same | "To schedule prompts, you'll need to use Copilot Chat, Microsoft Copilot in Microsoft Teams, or Microsoft Outlook for the web and Desktop." | not shown |
| 11c | **How many:** up to 10 per user. You choose "how many times it will run", but the page gives no maximum run count or expiry. | PARTIAL | same | "You can create up to 10 different scheduled prompts." | not shown |
| 11d | **Output:** a bolded chat in Copilot's Chats list, with an optional email notification. | VERIFIED | same | "After a scheduled prompt has run, you'll see chat responses on the left side of the Copilot window, in the Chats section." | not shown |
| 11e | **Sending email or posting to Teams:** not stated. The new **Copilot Cowork** (preview) can schedule prompts and loads a "compose emails" skill, but the page doesn't say it sends without asking. | NOT FOUND | https://support.microsoft.com/en-us/microsoft-365-copilot/cowork-manage-tasks-schedule-prompts | — | not shown |
| 12a | **Agent Builder instructions:** 8,000 characters. Name: 30 characters. Description: 1,000 characters. | VERIFIED | https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-builder-build-agents | "Character limit of 8,000 characters." | 2026-10-26 |
| 12b | **Scheduling an agent:** not documented on the Agent Builder pages. | NOT FOUND | same | — | 2026-10-26 |
| 12c | **Sharing:** with people, groups or email addresses in your org, with "Can edit" or "Can chat" access. There is an org-wide chat-access toggle, agents can have multiple owners, and you can submit an agent to the org catalog. Publishing to multiple channels needs Copilot Studio. | VERIFIED | https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-builder-share-manage-agents | "You can share the agents you build in Agent Builder with users in your organization. Agents support multiple owners" | 2026-11-06 |
| 13a | **Free Copilot scheduling:** M365 scheduled prompts need the license. **But** "Microsoft Copilot Cowork for personal accounts" is in preview and supports scheduled prompts. I found no consumer page with limits. | PARTIAL | https://support.microsoft.com/en-us/microsoft-365-copilot/cowork-manage-tasks-schedule-prompts | "Microsoft Copilot Cowork for personal accounts is currently in preview." | not shown |
| 13b | **Work email and calendar without the license:** Copilot Chat without a license reasons over work data only from uploaded files. Full access to meetings, email and chats needs the license. | VERIFIED | https://support.microsoft.com/en-us/microsoft-365-copilot/how-copilot-chat-works-with-and-without-a-microsoft-365-copilot-license | "Work data reasoning (Work IQ): Limited (uploaded files)" vs "Full (meetings, emails, chats, files, and more)" | not shown |
| 14a | **Claude Cowork scheduled tasks — plans:** all paid plans: Pro, Max, **Ultra** (new), Team, Enterprise. Not on Free. | VERIFIED | https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork | "Scheduled tasks are available on all paid plans (Pro, Max, Ultra, Team, and Enterprise), in Claude Cowork and in the new Claude experience." | 2026-11-05 |
| 14b | **Cadences:** hourly, daily, weekly, on weekdays, or manual. | VERIFIED | same | "How frequently the task will run (hourly, daily, weekly, on weekdays, or manually)" | 2026-11-05 |
| 14c | **Runs when the computer is off:** yes. Tasks run remotely, unless the task needs local files or apps. On Pro, Max and Ultra, local tasks created before Oct 6 keep running locally. | VERIFIED | same | "Scheduled tasks run remotely, so they run on their cadence even when your computer is asleep or the Claude Desktop app is closed." | 2026-11-05 |
| 14d | **Connectors, skills, plugins:** yes. Sub-agents are not mentioned. | PARTIAL | same | "Scheduled tasks have access to the same capabilities as regular Cowork tasks, including connected tools, skills, and installed plugins." | 2026-11-05 |
| 14e | **Run limits per plan:** none stated on the Cowork page. | NOT FOUND | same | — | 2026-11-05 |
| 15 | **Team and Enterprise admin controls:** see the list below this table. | VERIFIED | https://support.claude.com/en/articles/13455879-use-claude-cowork-on-team-and-enterprise-plans ; https://support.claude.com/en/articles/12512180-use-skills-in-claude | "Allow "Always allow" for connector tools ... controls whether members can skip per-task approval for write-capable connector tools in Cowork. This setting is off by default." | 2026-11-02 ; 2026-11-10 |
| 16a | **Installing skills:** Customize > Skills > **"+"** > **"+ Create skill"** > **"Upload a skill"**, then upload "a ZIP file containing your skill folder". The folder name must match the skill name and the folder must contain the required `skill.md`. | VERIFIED | https://support.claude.com/en/articles/12512180-use-skills-in-claude | "Package your skill folder as a ZIP file." | 2026-11-10 |
| 16b | **Plans:** Free, Pro, Max, Ultra, Team and Enterprise. Code execution must be enabled. | VERIFIED | same | "Skills are available for users on Free, Pro, Max, Ultra, Team, and Enterprise plans. This feature requires code execution to be enabled." | 2026-11-10 |
| 16c | **Size or file limit:** a limit exists ("ZIP file exceeds size limits"), but no number is given. | PARTIAL | same | "ZIP file exceeds size limits" | 2026-11-10 |
| 17a | **Claude Code routines:** renamed **cloud scheduled tasks** (research preview). Each one is a saved prompt plus optional repositories and connectors, run in the cloud by a schedule, API or GitHub trigger. Plans: Pro, Max, Ultra, Team, Enterprise. **There is no per-plan daily cap.** The limits are hourly: 100 scheduled runs an hour per account; Run now/API 30 an hour per task; 100 API fires an hour per account. Runs also count against subscription usage. The minimum interval is hourly. | VERIFIED (no daily cap documented) | https://code.claude.com/docs/en/routines | "Create scheduled tasks, formerly routines, that run in the cloud on a schedule, on API calls, or on GitHub events." | not shown |
| 17b | **Repo required:** no. The same dialog creates claude.ai chat tasks with no repo. A task becomes a "Claude Code task" when you add a repo, GitHub trigger or API trigger. | VERIFIED | same | "To make yours what the dialog calls a Claude Code task, select a repository or add a GitHub event or API trigger" | not shown |
| 18a | **`.claude-plugin/marketplace.json`:** required fields are `name`, `owner` (object with `name`) and a `plugins` array. Each entry needs `name` and `source`. `source` is either a relative path from the marketplace root (no `..`) or an object: `github`, `git-subdir`, `url`, `archive`, `npm` or `command`. `description` is optional. Example below this table. | VERIFIED | https://code.claude.com/docs/en/plugin-marketplaces | "The file requires a name, an owner, and a plugins array." | not shown |
| 18b | **Adding a GitHub repo as a marketplace:** run `claude plugin marketplace add <owner>/<repo>` (or `/plugin marketplace add` inside a session), then `claude plugin install <entry>@<marketplace>`. | VERIFIED | same | "Your teammates then run claude plugin marketplace add <owner>/<repo> in their shell for a GitHub repository" | not shown |

### Q15 detail: Claude Team and Enterprise admin controls

- **Cowork on or off:** Organization settings > Cowork > "Enable for your organization". On by default; off by default in HIPAA orgs.
- **Cloud runs:** Organization settings > Cowork > "Run Cowork in the cloud". On by default for Team, **off by default for Enterprise**, where it also needs a custom-role grant. Unavailable under the HIPAA local-mode configuration.
- **Write actions:** "Allow 'Always allow' for connector tools" is **off by default**. While it's off, members approve write-capable connector tools once per task.
- **Auto-approve mode:** Organization settings > Capabilities. "Start new tasks in Automatically approve" is off by default on Enterprise.
- **User-uploaded skills:** owners can turn off "User-created skills". On Enterprise, the custom role must include the "Create skills" capability. Skills and code execution are controlled under Organization settings > Plugins & skills > Policy. Enterprise can also scan skills.
- **Plugins:** inside Cowork there's no separate toggle. Owners distribute plugins through org marketplaces with these options: Installed by default, Available, Required, or Not available.
- **Claude Code cloud scheduled tasks:** Organization settings > Capabilities > Remote sessions > "Scheduled tasks (Was Routines)".

### Q18 example `marketplace.json` (from the docs page)

```json
{
  "name": "my-marketplace",
  "description": "Plugins for my team",
  "owner": { "name": "Your Name" },
  "plugins": [
    { "name": "my-first-plugin", "source": "./plugins/my-first-plugin", "description": "A greeting plugin to learn the basics" }
  ]
}
```

---

## (b) Corrections to our install guides

### `build-my-focus-engine/reference/install/chatgpt.md`

| Guide claim | Verdict | Source (Q#) |
|---|---|---|
| Task caps "roughly 3 on Free/Go, 5 on Plus, 10–15 on Business/Pro/Enterprise" | **Confirmed, can be made precise:** Free/Go 3, Plus 5, Business/Edu 10, Pro/Enterprise 15. Mark [verified 2026-11]. | 1b |
| "at most hourly" | **Partly wrong:** hourly only on paid plans. Free is at most once a day, in flexible windows with no exact time. | 1b |
| "Results arrive in-app with push/email notification" | **Confirmed.** | 1c |
| "tasks can't use custom GPTs or Project files → put the full helper instruction in the task prompt itself" | **Confirmed:** GPTs aren't supported, and a task can't read project files. Keep the advice. | 2b |
| "Connected apps (Gmail, Calendar, Drive, etc.) may be usable inside tasks on paid plans; sending may ask for confirmation" | **Partly confirmed:** the page names Gmail, Slack and GitHub, not Calendar or Drive, and doesn't limit app use to paid plans. A send or write may need approval and pauses the task. | 2a, 2c |
| "GPT instructions reportedly cap around 8,000 characters" | **Outdated:** no limit is published, and personal accounts can't create new GPTs. **All custom GPTs retire Dec 11, 2026** and migrate to plugins and skills. Remove GPTs as a recommended place for helpers. | 3a |
| "custom instructions around 1,500 (free) to 5,000 (paid)" | **Confirmed:** 1,500 on Free/Go; 5,000 on Plus, Pro, Business, Enterprise and Edu. | 3b |
| "Skills / custom GPTs / Projects — optional for on-demand use" | **Needs update:** Skills exist but only on Business, Enterprise, Healthcare and Edu. GPTs are retiring. Projects are still fine. | 4, 3a |
| "Use manual.md if tasks aren't available" (Free plan section) | **Needs update:** Free does have tasks (3 active, once a day). | 1a, 1b |

### `build-my-focus-engine/reference/install/gemini.md`

| Guide claim | Verdict | Source (Q#) |
|---|---|---|
| "Scheduled actions" | **Renamed "Schedules".** Update the wording. | 7a |
| "on paid Google AI plans and some Workspace editions" | **Wrong:** Schedules are rolling out to all personal Google Accounts (no paid plan needed) and to qualifying Workspace editions. | 7a |
| "up to about 10 active" | **Confirmed:** exactly 10. | 7b |
| "Output arrives as a Gemini chat with a notification" | **Confirmed.** | 7c |
| "can read Workspace apps (Gmail, Calendar, Drive) but don't write Docs or send messages" | **Partly outdated:** true for chat Schedules as far as documented. The new **Tasks** mode (Pro/Ultra, personal accounts, outside EEA/UK/CH/NG) can create and edit Docs, draft, reply and forward in Gmail, and manage Calendar. Add Tasks as an option. | 7e, 9 |
| "Gems — optional for on-demand use; reportedly can't be scheduled" | **Outdated:** Gems retire on Dec 17, 2026 (personal) and in 2027 (Workspace), replaced by **skills**. Skills accept a SKILL.md folder upload, and tasks can use them. Scheduling a Gem isn't documented. | 8b, 8c |
| "Workspace accounts — an admin may need to enable the Gemini app and specific features" | **Confirmed:** Admin console > Generative AI > Gemini app > Apps > Workspace apps, which is on by default. Note that Tasks aren't available to Workspace accounts. | 10 |

### `build-my-focus-engine/reference/install/copilot.md`

| Guide claim | Verdict | Source (Q#) |
|---|---|---|
| "Scheduled prompts — reportedly need a Microsoft 365 Copilot license; available in Copilot Chat, Teams and new Outlook; results land in Copilot" | **Confirmed.** The Outlook surfaces are "Outlook for the web and Desktop". There's also an optional email notification. | 11a, 11b, 11d |
| "cap on the number of scheduled prompts and on runs per prompt" | **Partly confirmed:** 10 prompts per user. You set the number of runs, but no maximum is published. Keep the "re-arm" advice. | 11c |
| "Agents (Agent Builder) … instructions reportedly cap around 8,000 characters" | **Confirmed:** 8,000 characters. | 12a |
| "Free Copilot reportedly has no scheduling and no access to work data" | **Mostly confirmed for unlicensed Copilot Chat:** work data comes only from uploaded files. **New caveat:** Copilot Cowork for personal accounts (preview) supports scheduled prompts. | 13a, 13b |
| "Slack isn't reachable here" | Not checked. | — |

### `build-my-focus-engine/reference/install/claude.md`

| Guide claim | Verdict | Source (Q#) |
|---|---|---|
| Scheduled tasks run in the cloud while the computer sleeps; local-file tasks need the machine; same connectors, skills and plugins | **Confirmed** (page updated 2026-11-05). | 14c, 14d |
| Cadences: hourly, daily, weekly, weekdays, or manual | **Confirmed.** | 14b |
| "Create by describing the task in chat or via the scheduled tasks settings" | **Confirmed.** Creation is now from the "Scheduled" sidebar (Create with Claude / Set up manually) or any chat in the new unified experience. | 14a |
| "Installed by uploading a ZIP whose root contains `SKILL.md`, under Customize → Skills" | **Wrong structure:** the ZIP should contain the **skill folder**, whose name matches the skill name, with `SKILL.md` inside it. The path is Customize > Skills > "+" > "+ Create skill" > "Upload a skill". | 16a |
| "Free: no scheduled tasks" | **Confirmed:** only paid plans have them. Note that Free **does** have skills. | 14a, 16b |
| "Pro / Max: scheduled tasks available" | **Outdated:** add the new **Ultra** plan (Pro, Max, Ultra, Team, Enterprise). | 14a |
| "Team / Enterprise: owners can restrict cloud runs, connectors and user-created skills; write-capable connector actions may need approval per task unless the admin allows them" | **Confirmed.** Add that **cloud runs are off by default on Enterprise**, which means Enterprise scheduled tasks won't run with the laptop closed until an owner enables them. | 15 |
| "Sub-agents: generally available in Cowork sessions" | **Not confirmed:** the scheduled-tasks page doesn't mention sub-agents. Keep the preflight check. | 14d |
| "Count runs per day … if the user's plan or admin limits are tight" | **No per-plan Cowork run limit is published.** Runs use normal subscription usage. | 14e |

---

## (c) Changes since 2026-11

New launches and renames:

- **ChatGPT event-triggered tasks:** new triggers for Gmail, Slack and GitHub; shareable task links; an auto-created "Weekly finances update" task.
- **ChatGPT Skills and Plugins:** skills on Business, Enterprise, Healthcare and Edu; plugin directory; Plugin Creator; GitHub marketplace import for admins.
- **ChatGPT Work** replaces agent mode.
- **Gemini:** "scheduled actions" renamed **Schedules**; **Spark renamed Tasks** (Pro/Ultra, personal accounts only); **Gemini skills** with SKILL.md folder upload (max 100 active).
- **Microsoft Copilot Cowork:** in preview, including for personal accounts, with scheduled prompts and skills. "Home" merges Chat and Cowork.
- **Claude:** new **Ultra** plan; the "new Claude experience" merges chat and Cowork; Claude Code **routines renamed cloud scheduled tasks**; skills sync from claude.ai into Claude Code (v2.1.273+).

Retirements:

- **ChatGPT custom GPTs:** Enterprise creation ended Oct 26, 2026. Retirement is **Dec 11, 2026** (Feb 11, 2027 for FedRAMP and approved deferrals). Personal accounts can't create new GPTs.
- **ChatGPT agent mode:** no longer available.
- **Gemini Gems:** personal accounts go read-only on Nov 17, 2026 and Gems are removed on **Dec 17, 2026**. Workspace business, enterprise and non-profit accounts follow in March 2027; Education in June 2027. Opal and Gems by Google Labs are also going away.
- **ChatGPT Pulse:** status unknown. No current help article was found.

---

## (d) Pages not accessed, and why

- **ChatGPT maximum message size:** no help-center article covers it, so no URL.
- **ChatGPT Pulse current help article:** none returned by help-center search. Only the 2025 launch post exists.
- **ChatGPT Work usage limits:** not researched. It's outside the questions as written, but it now replaces agent mode.
- **Gemini "share a Gem" detail page:** linked from https://support.google.com/gemini/answer/15146780 but not opened, so sharing options are PARTIAL.
- **Gemini Gem instruction length:** not stated on any Gems page I opened.
- **Google Workspace admin control for Schedules or Tasks:** Admin Help search returned only end-user articles.
- **Microsoft scheduled-prompt run cap:** not stated on the support page. I found no learn.microsoft.com admin page for scheduled prompts.
- **Microsoft consumer Copilot (copilot.microsoft.com) scheduling:** no dedicated consumer support page found beyond the Cowork preview article.
- **Claude skill ZIP size limit and sub-agents in scheduled tasks:** not stated on the support pages. docs.claude.com wasn't checked.
- **Login walls:** none blocked access. All pages above loaded while signed in.
