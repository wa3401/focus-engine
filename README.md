# focus-engine

**Fewer prompts, more focus.** One setup prompt that builds you an AI chief of staff: helpers that bring you what needs your attention — checked, short, and tuned to how you work — so you stop typing "catch me up on everything" every morning.

> Status: **in development (v0.1)**. First release goes to AI Hacks & Hops attendees, then wider.

## What you get

Run **`build-my-focus-engine`** once. It checks what your AI tool and plan can do, interviews you (starting from what it already knows), and writes up to four helpers tailored to you:

| Helper | What it brings you |
| --- | --- |
| `my-smart-assistant` | A morning brief: what needs you (7 items max), what you're waiting on, what's coming up |
| `prep-my-meetings` | A short prep card for the meetings that matter: who, what's open between you, your goal, three questions |
| `shut-down-my-day` | An end-of-day close-out: what got done, new commitments, tomorrow's top 3 |
| `hand-off-my-busywork` | Every two weeks: what you keep doing by hand, ranked by time saved — then it builds the top one |

All four share one **Assistant Profile**, a doc in your own drive with your priorities, people, noise rules and a record of what's done, snoozed or dismissed. You can read and edit it anytime.

## How it stays accurate

Every run collects your feedback, reads your Profile, gathers what's new, and **re-checks every item against its live source** before you see it — so a thread you already answered doesn't show up as "waiting on you." Only actionable, relevant, verified items make it through. Reply in one line ("done 2, snooze 4 to Fri, mute vendor newsletters") and the next run applies it.

## Get started

1. Copy or download [`PROMPT.md`](https://willanderson.tech/focus-engine) (built from this repo).
2. Paste or attach it in a new chat with your AI assistant — Claude, ChatGPT, Gemini or Microsoft 365 Copilot.
3. Say **"build my focus engine"** and answer its questions. Most people finish in 20–30 minutes.

Prefer a Claude Skill? Download `build-my-focus-engine.zip` from [Releases](../../releases) and upload it under Customize → Skills.

## Your data

- Reads only what you connect and approve. Start connectors read-only.
- Sends nothing to anyone but you; nudges are drafts.
- Ignores instructions hidden in emails or docs.
- No server, no account, no tracking. See [SECURITY.md](SECURITY.md).

## Repository layout

```
build-my-focus-engine/   the setup skill (SKILL.md + reference/)
templates/               the four helper templates + shared modules (_shared/)
profile-template.md      the Assistant Profile
evals/                   test cases, fixtures and seeded Profiles
examples/                fully generated setups for fake personas
scripts/build-prompt.mjs builds dist/PROMPT.md and the skill folder
```

Build locally: `npm run build` (Node 18+).

## Help and feedback

- Questions: [Discussions](../../discussions). Bugs and ideas: [Issues](../../issues) — never paste real emails or personal data.
- Best-effort, no support promise.

## License

MIT © Will Anderson
