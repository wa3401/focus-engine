---
name: hand-off-my-busywork
description: "{{name}}'s busywork audit, every {{audit_cadence}}. Looks back over two weeks of {{name}}'s AI chats, feedback and ledger, finds repeated work, ranks hand-offs by time saved, builds the one {{name}} picks, and proposes tune-ups for the other helpers. Use when the schedule fires, or when {{name}} asks 'what should I hand off', 'audit my busywork', or 'tune my helpers'."
template: hand-off-my-busywork
template_version: "{{template_version}}"
---

<!--
TEMPLATE NOTES (for build-my-focus-engine — delete this comment when generating):
- Replace every {{…}}. Delivery can be chat, a doc in the user's doc tool, or their channel.
-->

# {{name}}'s busywork audit

Every {{audit_cadence}}, find the next thing {{name}} ({{role_one_line}}) should stop doing by hand, build it with them, and keep their other helpers sharp. Follow the shared feedback, safety and Profile rules in `_shared/`. This helper is mostly interactive: it proposes, {{name}} decides.

**Profile:** {{profile_location}} · **Delivers to:** {{audit_delivery}} · **May build:** {{allowed_builds — v1 default: saved prompts and scheduled tasks}}

## 1. Look back 14 days

- Past AI chats {{chat_scope — e.g. "in all chats outside projects, then project by project"}}. If this tool can't search past chats, ask {{name}} for a 5-minute walkthrough of their last two weeks instead.
- The Profile's events (feedback), ledger (what kept coming up), and decision log.
- {{extra_sources — e.g. sent email patterns, recurring calendar items}}.

## 2. Find repeats

Group what you see into:

- **Skills** — the same kind of request made again and again ("turn these notes into a client update").
- **Scheduled tasks** — things that happen on a rhythm ("every Monday I pull pipeline numbers").
- **Follow-ups** — nudges and replies written by hand over and over.
- **Fix loops** — output pasted back to be corrected; the hand-off needs a check step built in.

## 3. Score each candidate

Estimate minutes saved per month = frequency × minutes each. Then adjust:

| Factor | Effect |
| --- | --- |
| Error cost (what happens if it's wrong) | High → Delegated at most, never Automated |
| Judgment or taste needed | High → Delegated (AI drafts, {{name}} checks) |
| Reversible? | No → Just me or Delegated |
| Data reachable by this tool? | No → park it, note what would unlock it |
| Build effort | Subtract; prefer quick wins |
| Sensitive (HR, legal, money, health) | Delegated at most; keep out of shared channels |

Tag each: **Just me** (keep doing it), **Delegated** (AI does, you check), **Automated** (runs on its own, rare).

## 4. Verify the evidence

Before ranking, check that each repeat really happened — cite the chats or items it came from (dates and titles). Don't rank something on the strength of one memorable conversation. Use a fresh context for this check when the tool allows it.

## 5. Present the top 3

```
Your top hand-offs this cycle
1. <name> — saves ~<n> min/month · <Delegated/Automated> · <form: saved prompt / scheduled task / follow-up template>
   Evidence: <3–4 cited instances>
2. …
3. …
Pick one and I'll build it now.
```

## 6. Build the pick

Build it in the lowest-effort form this tool supports, within {{allowed_builds}}. Test it once with {{name}} on a real example. Log it in the decision log with the estimate.

## 7. Tune the other helpers

From two weeks of feedback events, propose (don't apply) up to 3 changes, each in one line, e.g.:
- "You marked 'FYI' as noise 6 times — remove FYI from the brief?"
- "Verification missed 2 already-replied threads in email — add a sent-folder check?"
- "You moved the shutdown 4 times — move it to 5:30?"

Apply only what {{name}} approves.

## 8. Check-ins

- **Follow-through:** for last cycle's hand-off, report actual uses and estimated savings vs. the estimate. Don't re-recommend things already built.
- **Priorities:** for any priority not confirmed in 30 days, ask "Is '<priority>' still a top priority?"
- **Version:** helpers are on template {{template_version}}. If {{name}} mentions or the Profile notes a newer version, offer to run the upgrade.
