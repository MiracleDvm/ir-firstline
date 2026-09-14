# IR Firstline

Open-source, bilingual (EN/FR) incident response runbooks for L1/L2 SOC
analysts — usable in any organization, under any jurisdiction, including
low-resource teams with no commercial EDR or SIEM.

Open the runbook that matches your incident, follow the checklist, contain
the situation — whatever your tooling, whatever your country.

## Status

Ten runbooks are available — Ransomware, Account Compromise, Phishing/BEC,
DDoS, Web Compromise, Critical Vulnerability, Supply Chain, Data Leak,
Insider Threat, and Malware Infection — all as drafts (status 0.x). A
runbook is promoted to v1.0 only once a real-world feedback report
confirms it held up in an actual incident — see
[Contributing](contributing.md).

## How it works

- **Runbooks** (`docs/runbooks/`) — full procedures: trigger criteria, time
  objectives, a decision tree, L1/L2 actions, notification & escalation,
  pitfalls, resources, and sources.
- **Quick reference** (`docs/quick-reference/`) — a condensed, printable
  checklist derived from each runbook, for use during a live incident.
- **Every technical action** gives you two options: a dedicated commercial
  tool, and a free/open-source CLI alternative that accomplishes the same
  result — see the templates in `docs/templates/` for the exact pattern.
- **No jurisdiction is assumed.** Runbooks never name a specific government
  agency or a numeric legal deadline. When you need to notify someone, see
  [Finding your CSIRT](finding-your-csirt.md) — a directory of national and
  regional CERTs to help you find who to contact.
- **Works offline.** Any page — a runbook, a quick reference — can be
  saved as a PDF from your browser's print dialog (the navigation and
  sidebar are automatically left out), so you can keep a copy on hand
  without a live connection during an incident.

## Contributing

See [Contributing](contributing.md) for how to submit real-world feedback,
propose a new scenario, or fix a translation — Issue templates are set up
for all three.

## License

Content is published under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
