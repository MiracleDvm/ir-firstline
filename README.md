# IR Firstline

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Status: drafts](https://img.shields.io/badge/status-drafts-orange.svg)](#status)
[![Languages: EN | FR](https://img.shields.io/badge/languages-EN%20%7C%20FR-blue.svg)](#structure)

**[Read the runbooks →](https://miracledvm.github.io/ir-firstline/)**

Open source, bilingual (English/French) incident response runbooks for
L1/L2 SOC analysts — usable by any organization, in any jurisdiction,
including low-resource teams with no commercial EDR or SIEM.

**English** is this project's reference language; every runbook also
ships in **French**, kept to the same depth and structure, never a
summary.

> [!NOTE]
> **FR** — Collection open source de runbooks de réponse à incident
> (L1/L2), bilingue anglais/français, conçue pour n'importe quel
> analyste SOC, dans n'importe quelle organisation, sous n'importe
> quelle juridiction — y compris les structures à faibles ressources.
> **L'anglais** est la langue de référence du projet ; chaque runbook
> existe aussi en **français**, à la même profondeur et avec la même
> structure — jamais un simple résumé.

## What's inside

Ten incident scenarios, each as a full runbook (trigger criteria, time
targets, a decision tree, step-by-step L1/L2 actions, and pitfalls to
avoid) plus a one-page quick-reference checklist:

- Ransomware
- Account Compromise
- Phishing / Business Email Compromise (BEC)
- DDoS
- Web / Application Compromise
- Critical Vulnerability (active exploitation)
- Supply Chain Compromise
- Data Leak
- Insider Threat
- Malware Infection

Every technical action lists **both** a dedicated-tool path and a
free/open-source CLI alternative, so a runbook is usable end-to-end with
no commercial security stack. See [why this project
exists](https://miracledvm.github.io/ir-firstline/) for the full
rationale.

## Disclaimer

These runbooks are technical guidance, not legal advice. They
deliberately contain no jurisdiction-specific legal deadlines and name
no government agency as a mandatory step — see
[`finding-your-csirt.md`](https://miracledvm.github.io/ir-firstline/finding-your-csirt/)
to identify who to contact, and consult your own legal counsel for
notification obligations.

> [!NOTE]
> **FR** — Ces runbooks sont un guide technique, pas un conseil
> juridique. Ils ne contiennent volontairement aucun délai légal
> spécifique à une juridiction et ne nomment aucune agence
> gouvernementale comme étape obligatoire — voir
> [`finding-your-csirt.md`](https://miracledvm.github.io/ir-firstline/fr/finding-your-csirt/)
> pour identifier qui contacter, et consultez votre propre conseil
> juridique pour vos obligations de notification.

## Status

All ten runbooks are published, in English and French, as **drafts**
(v0.x). A runbook only moves to v1.0 once someone reports, via a
[`real-world-tested`
issue](https://github.com/MiracleDvm/ir-firstline/issues/new/choose),
that it held up in an actual incident — see
[`VISION_PROJET_incident-response-runbooks.md`](VISION_PROJET_incident-response-runbooks.md)
for the full project vision and governance model.

## Structure

```
docs/                     English (reference language)
docs/fr/                  French (full mirror, same structure)
docs/runbooks/            full procedures — trigger criteria through lessons learned
docs/quick-reference/     one-page checklists derived from each runbook
docs/templates/           templates for proposing a new runbook or translation
```

## Running locally

```bash
pip install mkdocs-material mkdocs-static-i18n
mkdocs serve
```

## License

Content is licensed under
[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — see
[`LICENSE`](LICENSE).

## Contributing

Used one of these during a real incident? That report is how a runbook
earns v1.0 — it's the single most valuable contribution this project
can get. Found a missing scenario, or a French section that reads like
a translation instead of the real thing? Same door, different issue.
See [`CONTRIBUTING.md`](CONTRIBUTING.md) for how to submit feedback,
propose a scenario, or fix a translation.
