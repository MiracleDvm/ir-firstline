<div class="irf-hero" markdown>
<span class="irf-kicker">OPEN SOURCE, BUILT IN THE OPEN</span>

# The first response shouldn't depend on your budget.

Most incident response guidance is written for one country's laws, one
vendor's console, or a team with the budget to buy both. This project
isn't. Every action here works whether you're running a commercial EDR or
a Windows box with nothing installed on it.
</div>

## The problem

L1 and L2 analysts handle most incidents. What they're handed to work
from is usually one of three things: locked inside a single
organization's internal wiki, written around one country's regulators,
or built around one vendor's console. None of that helps an analyst on
a small team, in a country the original authors never considered,
without the tooling the runbook quietly assumes.

Real-world lessons — what actually worked, what a "30-minute" objective
actually took — mostly stay in a team's private Slack, instead of
feeding back into the documentation everyone else is using.

## What's different here

- **The technical core is universal.** No agency name, no vendor
  requirement, and no legal deadline lives in the body of a runbook.
  Ever.
- **Every action has a free path.** Each step names a dedicated tool
  and a CLI/open-source alternative that gets the same result — an
  analyst with nothing but native OS tools can run the whole thing.
- **Bilingual by construction.** English and French, same structure,
  same depth — not a summary in one language and the real thing in the
  other.
- **Quality is proven, not declared.** A runbook stays a draft until
  someone reports that it held up in a real incident. No one —
  including the maintainers — marks their own work "validated."

## How a runbook is built

Each one follows the same shape: the signals that tell you to open it,
internal time targets for containment and eradication, a decision
tree, numbered actions for first response and for deeper
investigation, a generic pointer to your own jurisdiction's authority
— never a specific one — and what destroys evidence if you get it
wrong.

[Browse the runbooks →](runbooks/index.md)

## Contribute

Used one of these during an actual incident? That's the single most
valuable thing you can report — it's literally how a runbook earns its
v1.0. Found a scenario missing, or a French section that reads like a
translation instead of the real thing? Same door, different issue.

[How to contribute →](contributing.md)

---

Content is published under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
