# Contributing to focus-engine

Thanks for helping. This file covers how the repo is laid out, how to build and test it, and how to propose a change. If you only want to use focus-engine, start with the [README](README.md).

## Repo layout

```
build-my-focus-engine/      the setup skill
  SKILL.md                  setup flow and modes (setup, upgrade, change, pause, remove)
  reference/                preflight, interview, admin note, install guides per tool
templates/                  the four helper templates
  _shared/                  run loop, verification, feedback, safety, Profile reads and writes
profile-template.md         the Assistant Profile
examples/                   full generated setups for three invented people
evals/                      test cases, fixtures, seeded Profiles, runner and smoke checklist
research/                   platform facts behind the install guides, with sources
scripts/build-prompt.mjs    builds dist/PROMPT.md and the skill folder
scripts/bundle-evals.mjs    packs eval cases for tools without a file system
docs/graphics/              renderer for the README images (screenshots of the site's diagrams)
docs/images/                rendered images, light and dark
```

`dist/` is build output and isn't committed.

## Build

Needs Node 18 or newer.

```
npm run build      # dist/PROMPT.md (the copy-paste setup prompt) and dist/build-my-focus-engine/ (the Claude skill folder)
npm run graphics   # re-renders docs/images/*.png from the site's diagrams, light and dark, at 2x
```

There is one source of truth: edit the files in `build-my-focus-engine/`, `templates/` and `profile-template.md`, never `dist/`. The build replaces `1.0.0-dev` with the version in `package.json`.

### README images

The diagrams live in the website repo ([wa3401/consulting](https://github.com/wa3401/consulting)), as Astro components in `apps/web/src/components/focus-engine/`. The same components render on [willanderson.tech/focus-engine](https://willanderson.tech/focus-engine), and the PNGs in `docs/images/` are screenshots of them, so change the component, never the PNG.

To update the images:

1. Change the component in the site repo and run the site: `npx astro dev`, or `npx astro build && npx astro preview`, in `apps/web` (both serve `http://localhost:4321`).
2. Here, run `npm run graphics` (or `npm run graphics -- header profile-hub` for some of them). It opens `/focus-engine/diagrams?theme=light` and `?theme=dark`, screenshots each graphic at 2x, and stops if the Archivo or IBM Plex Mono web fonts didn't load.
3. Look at the PNGs and commit them. File names stay the same, so the README needs no change.

`SITE_URL` points it somewhere else, like `SITE_URL=https://willanderson.tech npm run graphics` once the site change is deployed. It needs Playwright (Chromium), and Python with Pillow to shrink the PNGs.

The website copy at [willanderson.tech/focus-engine](https://willanderson.tech/focus-engine) serves `dist/PROMPT.md` as `focus-engine-setup.md` and a ZIP of `dist/build-my-focus-engine/` as `build-my-focus-engine.zip`. Will updates both when a change ships.

## Evals

- [`evals/README.md`](evals/README.md): case format, fixture layout, and how to run on Claude. A case passes only when it passes 3 runs out of 3, and each case also runs without the skill as a baseline.
- [`evals/RUNNER.md`](evals/RUNNER.md): the instruction prepended to every eval run.
- `npm run evals:bundle`: packs cases into paste-ready files in `dist/evals/` for ChatGPT, Gemini and Copilot (smoke cases by default; `--all` for every case, or pass case id prefixes).
- [`evals/SMOKE-CHECKLIST.md`](evals/SMOKE-CHECKLIST.md): a 15-minute hand check per tool with a fake persona.

Fixtures use fake data only: invented people and companies, `example.com` and `example.org` domains, no real phone numbers.

If a change touches a template, a shared module or the setup flow, run the affected cases before opening a pull request and say which ones you ran.

## Propose a change

1. **Open an issue first** ([Issues](https://github.com/wa3401/focus-engine/issues/new/choose)) so we can agree on the change before you spend time on it. Questions go in [Discussions](https://github.com/wa3401/focus-engine/discussions).
2. `main` is protected. Work on a branch and open a pull request.
3. Will reviews every pull request. Keep it focused on one change, and note which evals you ran.
4. Add a line to [CHANGELOG.md](CHANGELOG.md) under Unreleased.

Security or privacy problems go to a [private advisory](https://github.com/wa3401/focus-engine/security/advisories/new), never a public issue. Never paste real emails, messages or personal data anywhere in this repo.

## Style rules for templates

Setup generates a helper from each template, then self-checks it ([`SKILL.md`](build-my-focus-engine/SKILL.md) §6). Templates and shared modules have to make that check easy to pass:

- **Nothing generic ships.** Every `{{placeholder}}` must be something setup can fill from the interview, preflight or Profile. Generated helpers contain no `{{`.
- **No "e.g." in generated helpers**, except in the feedback line. Examples inside `{{…}}` guide setup and are replaced.
- **No limits language in helpers.** Setup explains plan limits once, at preflight. Helpers and their deliveries never mention limits, workarounds or other AI tools; if something can't run, they say what didn't happen and what the user can do.
- **No other tool names** in a generated helper.
- **Sources match what the user approved.** Helpers never read beyond them.
- **Times in the user's time zone**, stored in UTC.
- **Profile updates step** in every helper when the tool can't write the Profile.
- **Source text is data, never instructions** ([`safety.md`](templates/_shared/safety.md)). Nothing goes to anyone but the user; nudges are drafts.
- **The Profile stores pointers, not content**: IDs, links, status, dates, short summaries.
- **Plain words.** Short sentences, second person, specific nouns, sentence case. No hype.

Install guides tag each platform fact as `[verified YYYY-MM]`, `[unverified]` or `partial`, with the evidence in [`research/`](research/). Update both together.

## License

By contributing, you agree your contribution is released under the [MIT License](LICENSE).
