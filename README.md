# IR Firstline

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Status: drafts](https://img.shields.io/badge/status-drafts-orange.svg)](#status)

Open source, bilingual (EN/FR) incident response runbooks for L1/L2 SOC
analysts — usable by any organization, in any jurisdiction, including
low-resource teams with no commercial EDR or SIEM.

> **FR** — Collection open source de runbooks d'incident response (L1/L2),
> bilingues français/anglais, conçue pour n'importe quel analyste SOC, dans
> n'importe quelle organisation, sous n'importe quelle juridiction — y
> compris les structures à faibles ressources.

## Disclaimer

These runbooks are technical guidance, not legal advice. They deliberately
contain no jurisdiction-specific legal deadlines and name no government
agency as a mandatory step — see `finding-your-csirt.md` (coming in a later
phase) to identify who to contact, and consult your own legal counsel for
notification obligations.

> **FR** — Ces runbooks sont un guide technique, pas un conseil juridique.
> Ils ne contiennent volontairement aucun délai légal spécifique à une
> juridiction et ne nomment aucune agence gouvernementale comme étape
> obligatoire — voir `finding-your-csirt.md` (à venir) pour identifier qui
> contacter, et consultez votre propre conseil juridique pour vos
> obligations de notification.

## Status

Ten runbooks are available, in English and French, all as drafts: Ransomware,
Account Compromise, Phishing/BEC, DDoS, Web Compromise, Critical
Vulnerability, Supply Chain, Data Leak, Insider Threat, and Malware
Infection. See `VISION_PROJET_incident-response-runbooks.md` for the
project vision and rationale.

## Structure

```
docs/                    English (reference language)
docs/fr/                 French (full mirror)
docs/runbooks/            full procedures
docs/quick-reference/     printable checklists derived from each runbook
docs/templates/           templates for new runbooks and quick references
```

## Running locally

```bash
pip install mkdocs-material mkdocs-static-i18n
mkdocs serve
```

## License

Content is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — see `LICENSE`.

## Contributing

See `CONTRIBUTING.md` for how to submit feedback, propose a scenario, or
fix a translation.
