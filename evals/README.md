# Evals

34 cases: 6 per skill (30) plus 4 cross-cutting cases. A case passes only when it passes **3 runs out of 3** (a brief has to be right every day, not most days). Each case runs **with the skill and without it** (baseline), so the README can show what the skill adds.

## Layout

```
evals/
  README.md                 this file (format + how to run)
  RUNNER.md                 the instruction prepended to every eval run
  <skill>/evals.json        cases for one skill (skill-creator format, below)
  fixtures/<case-id>/       everything one case needs
    now.txt                 simulated current time, ISO 8601 with offset, e.g. 2026-11-12T07:30:00-05:00
    profile.md              seeded Assistant Profile (from profile-template.md, fully filled)
    helper.md               (optional) the generated helper under test, if the case tests a helper
    sources/                simulated connectors — the "live" state at run time
      slack.json  gmail.json  gcal.json  crm.json  drive.json  chats.json  notes.md
    deliveries/             (optional) the helper's previous delivery + replies to it (feedback tests)
    capabilities.json       (optional) what the simulated tool/plan can do (setup tests)
    user_script.md          (optional) the simulated user's answers for interactive cases
```

Use only the source files a case needs. Fake data only — fake people, fake companies, `example.com`/`example.org` domains, and no real phone numbers.

## Source file shapes

All times ISO 8601 UTC (`Z`). IDs are stable strings; the Profile ledger refers to them with a source prefix (`slack:`, `gmail:`, `gcal:`, `crm:`, `drive:`).

```jsonc
// slack.json
{ "user": {"id": "U_ME", "name": "Maya Chen"},
  "channels": [{"id": "C_DEALS", "name": "deals"}],
  "messages": [
    {"id": "C_DEALS/1731400000.1234", "channel": "C_DEALS", "ts": "2026-11-11T15:02:00Z",
     "from": "U_SAM", "from_name": "Sam Ortiz", "text": "…", "thread_of": null,
     "reactions": [{"name": "white_check_mark", "users": ["U_ME"]}] }
  ] }

// gmail.json
{ "user": "maya@example.com",
  "threads": [
    {"id": "18c2f0a1", "subject": "…", "labels": ["INBOX"],
     "messages": [{"from": "dana@acme.example", "to": ["maya@example.com"], "at": "2026-11-11T14:00:00Z", "body": "…"}] }
  ] }

// gcal.json
{ "tz": "America/New_York",
  "events": [
    {"id": "evt_123", "title": "…", "start": "2026-11-12T19:00:00Z", "end": "2026-11-12T19:30:00Z",
     "attendees": [{"email": "…", "name": "…", "response": "accepted"}], "organizer": "…",
     "description": "…", "status": "confirmed", "recurring": false } ] }

// crm.json
{ "deals": [{"id": "deal/991", "name": "…", "owner": "Maya Chen", "stage": "Proposal", "amount": 48000,
             "next_step": "…", "next_step_due": "2026-11-14", "contacts": ["…"]}] }

// chats.json  (past AI conversations, for the audit and memory-first setup)
{ "memory": ["…saved memory lines…"],
  "chats": [{"id": "chat_01", "at": "2026-11-03T13:10:00Z", "title": "…", "user_turns": ["…"]}] }

// capabilities.json  (setup cases)
{ "tool": "ChatGPT", "plan": "Plus", "account": "personal",
  "schedule": true, "max_scheduled_tasks": 5, "connectors": ["gmail", "gcal", "gdrive"],
  "connectors_in_schedule": true, "write_profile": false, "send_email": false, "send_chat": false,
  "subagents": false, "past_chat_search": true, "admin_blocks": [], "field_limits": {"gpt_instructions": 8000} }
```

## evals.json format (skill-creator)

```json
{
  "skill_name": "my-smart-assistant",
  "evals": [
    {
      "id": "msa-02-already-replied",
      "name": "Already-replied trap",
      "tests": "Accuracy",
      "prompt": "It's the scheduled run. Produce today's brief.",
      "files": ["evals/fixtures/msa-02-already-replied/"],
      "expected_output": "A brief where neither the answered Slack thread nor the cancelled meeting appears as open; the thread is marked done in the ledger write-back.",
      "expectations": [
        "The Slack thread C_DEALS/1731400000.1234 does not appear under Needs you",
        "The ledger write-back sets slack:C_DEALS/1731400000.1234 to done",
        "The cancelled event evt_442 does not appear under Coming up",
        "The brief has no more than 7 items under Needs you"
      ]
    }
  ]
}
```

Write **expectations** that a grader can check objectively from the output (a specific item present/absent, a count, a field value, a phrase that must not appear). Leave subjective quality to human review. Avoid expectations that would pass even without the skill.

## How to run (Claude, automated)

For each case and each of 3 runs:

1. Start a fresh session with the skill installed (or, for helper cases, with `fixtures/<case>/helper.md` as the system/task instruction).
2. Prepend `evals/RUNNER.md`, then the case `prompt`, with the fixture folder attached.
3. Save the output to `evals/results/<date>/<case>/run-<n>.md`.
4. Grade each expectation (model grader + spot-check by a human). The case passes only if all expectations pass in all 3 runs.
5. Repeat without the skill for the baseline.

Other tools (ChatGPT, Gemini, Copilot): one hand-run setup each plus the 5 core cases marked `"smoke": true`. Results are labelled "hand-checked" in the README.

## Running on ChatGPT, Gemini or Copilot

These tools can't read a fixture folder, so pack each case into one paste-ready file:

```bash
npm run evals:bundle            # smoke cases
npm run evals:bundle -- --all   # every case
npm run evals:bundle -- msa-02  # by id prefix
```

That writes two files per case to `dist/evals/`:

- `<id>.run.md`: open a **fresh chat** (memory off, or a temporary chat) and attach the file, or paste it if it fits. Send it. The reply is the run output.
- `<id>.grade.md`: open a **separate** chat, attach or paste it, then paste the run output at the end. The grader returns PASS or FAIL per expectation and `RESULT: n/N`.

Grade with a different chat than the one that ran the case. Grading on Claude is fine for runs from any platform. The pass bar is 3 runs out of 3, so repeat each run in a new chat.

Record results in `evals/results/<platform>-<date>.md`: case id, plan, RESULT line, and the first failed expectation.

Limits of this mode: no real connectors, no sub-agents, no scheduled trigger, and no real write-back. This tests the instructions, not the platform plumbing. Use `SMOKE-CHECKLIST.md` for that.
