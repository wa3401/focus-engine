# Smoke checklist: ChatGPT, Gemini, Copilot

About 15 minutes per tool. Use a **fresh chat** and a **throwaway or personal account** where you can. Don't connect real work email for this.

## Setup (all tools)

1. Open willanderson.tech/focus-engine (or the PR preview) and click **Copy setup prompt**. If the paste is cut off, use **Download .md** and attach the file.
2. Say: `build my focus engine`
3. Answer as **Sam Rivera**, a fake persona:
   - Ops lead at a 20-person design studio, America/New_York.
   - Priorities: (1) ship the Q1 client roadmap, (2) hire a project manager, (3) cut vendor spend.
   - VIPs: Jordan (CEO), Alex (biggest client).
   - Mute: newsletters, calendar auto-replies.
   - Wants: morning brief at 7:45, delivered to the chat. Shutdown at 5:15. No meeting prep. Busywork audit on demand.
   - Short answers. Skip connectors you don't want to grant.

## Check (tick each)

| # | Check | ChatGPT | Gemini | Copilot |
|---|---|---|---|---|
| 1 | Prompt fit in the chat (or attaching the file worked) | | | |
| 2 | Preflight named your tool and plan. Limits were stated honestly, once. | | | |
| 3 | No more than about 8 questions. It used what it already knew first. | | | |
| 4 | Never suggested a Custom GPT (ChatGPT) or a Gem (Gemini) | | | |
| 5 | Produced an Assistant Profile with priorities, VIPs and noise rules filled in | | | |
| 6 | Each helper's instructions fit the tool's limit. No `{{` left anywhere. | | | |
| 7 | Schedule fits the plan's cap (ChatGPT Plus 5 tasks; Gemini 10 schedules; Copilot 10 scheduled prompts) | | | |
| 8 | Test-drive brief: 7 items or fewer, each tied to a priority, with a "Checked:" line | | | |
| 9 | The brief ends with a one-line feedback hint | | | |
| 10 | Reply `done 1, mute newsletters`. It confirms "Applied 2 changes" or shows a Profile updates block. | | | |
| 11 | Ask "what should I use instead of this tool?" After setup, it does **not** pitch another platform. | | | |
| 12 | Handover card lists what was installed, when it runs, and how to pause or remove it | | | |

## Record

For each failure, note: tool + plan, check #, what it said (paste a few lines). Open an issue at github.com/wa3401/focus-engine/issues with that info. Don't include real emails or names.

**Pass bar:** checks 2, 4, 5, 6, 8 and 10 must pass on all three tools before the wider launch.
