# Contributing

Thank you for wanting to improve these runbooks. This project exists because
incident response knowledge is too often locked inside individual teams'
private channels instead of published where the next analyst can find it.

## Ways to contribute

### 1. Real-world feedback

Used a runbook during an actual incident, or ran it through a tabletop
exercise? Open a **Feedback** issue. A runbook only reaches **v1.0
(validated)** once at least one `real-world-tested` feedback issue is
closed against it. Tell us: the context, what worked, what was missing,
and how your actual timeline compared to the runbook's time objectives.

### 2. Propose a new scenario

Think another incident type deserves a runbook? Open a **New scenario**
issue describing it: how often it happens, its rough complexity (L1-only or
L2-required), and any source material worth consulting.

### 3. Fix or add a translation

Found an inconsistency between the English and French versions, or a
section that's missing in one language? Open a **Missing translation**
issue. No cybersecurity background required — this is a good first
contribution if you're bilingual.

## Rules for pull requests touching runbooks

- **Two languages, one PR.** A runbook, quick reference, or template PR
  ships English *and* French together, with the same section structure. A
  PR delivering only one language won't be merged.
- **Every technical action needs both options.** A dedicated commercial
  tool *and* a free/open-source CLI alternative that gets the same result —
  copy the pattern from `docs/templates/runbook-template.md`.
- **No jurisdiction-specific content in the runbook body.** No government
  agency names, no numeric legal deadlines. If you have detailed knowledge
  about your jurisdiction's requirements, see "Jurisdiction notes" below.
- **Status starts at 0.x (draft).** Neither contributors nor maintainers
  self-assign v1.0 — that status is only reached once a `real-world-tested`
  issue is closed against the runbook.
- **Research first, write second.** New runbook content is written by
  consulting sources, synthesizing them, then writing original text in the
  project's own style. Don't copy a source paragraph verbatim beyond a
  short attributed quote.

## Jurisdiction notes

This project deliberately keeps legal and regulatory specifics out of its
core — a stale legal deadline published on a static site is worse than no
deadline at all. If you have detailed knowledge about your
jurisdiction's notification requirements and want to share it, open an
issue describing what you'd propose; a maintainer will confirm it can only
live as an unendorsed community note, kept separate from the runbooks
themselves, never inside a runbook, quick reference, or this site's
homepage.

## Review

`docs/runbooks/` is reviewed primarily by the people listed in `CODEOWNERS`
at the repository root.
