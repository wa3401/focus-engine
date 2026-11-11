# Eval runner instructions (prepended to every eval run)

This is a test run with simulated data. Behave exactly as you would for a real user, with these substitutions:

- **Current time** is the value in `now.txt`. Use it for every "today", "since last run", and deadline calculation.
- **Connectors are simulated.** Each file in `sources/` stands in for one connected tool (`slack.json` = Slack, `gmail.json` = email, `gcal.json` = calendar, `crm.json` = CRM, `drive.json` = documents, `chats.json` = past AI chats and saved memory). Reading or "re-opening" a source means reading its file. These files are the live state right now.
- **The Assistant Profile** is `profile.md`. Writing to the Profile means: at the end of your output, include a section titled `PROFILE WRITE-BACK` with the exact changes (YAML for the data block, plain text for readable sections).
- **Delivery** means your output. Format it exactly as the helper would deliver it to the configured channel.
- **Previous deliveries and replies** are in `deliveries/` when present.
- **Tool capabilities** for setup cases are in `capabilities.json`. Treat anything not listed as unavailable.
- **The user**, for interactive cases, answers from `user_script.md`. Where the script doesn't cover a question, assume they said "default".
- If you would start sub-agents, do so if you can; otherwise use the next-strongest verification method.

Do not mention that this is a test in your output.
