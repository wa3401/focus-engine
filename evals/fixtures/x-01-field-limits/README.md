# x-01-field-limits fixture

Three sub-fixtures, one setup run each (same prompt). Each has its own `capabilities.json` (with `field_limits`), `user_script.md` and `sources/chats.json`.

| Folder | Tool · plan | Target field under test | Limit |
| --- | --- | --- | --- |
| `priya-plus/` | ChatGPT · Plus | custom instructions (on-demand meeting prep) | 5,000 chars |
| `priya-free/` | ChatGPT · Free | custom instructions (same request) | 1,500 chars |
| `darnell/` | Microsoft 365 Copilot | Agent Builder: instructions / description / name | 8,000 / 1,000 / 30 chars |

Limits come from `build-my-focus-engine/reference/install/*.md` [verified 2026-11]. Scheduled-task / scheduled-prompt bodies have no published limit; the run should say so rather than invent one.
