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

<div class="irf-features" markdown>

<div class="irf-feature-card" markdown>
**🌐 Universal technical core**
<br>
Every runbook action offers two paths:
- **Dedicated tool** (CrowdStrike, SentinelOne, Splunk)
- **CLI / open-source alternative** (`tasklist`, `netstat`, Sysinternals, Volatility)
<br>
_An analyst without EDR can run 100% of the runbook with native tools._
</div>

<div class="irf-feature-card" markdown>
**💰 Low-resource first**
<br>
The project removes any dependency on a commercial tool as a prerequisite.
Commercial variants are a bonus, not an entry point.
</div>

<div class="irf-feature-card" markdown>
**🌍 Bilingual FR/EN by construction**
<br>
- English is the reference language (consistency with MITRE, NIST, CISA)
- French is a quality-equal translation, never a summary
- Golden rule: a runbook PR is only merged if it delivers both languages
</div>

<div class="irf-feature-card" markdown>
**✅ Verifiable quality, never declared**
<br>
The transition to v1.0 is only triggered by closing a `real-world-tested`
Issue against this runbook. Quality is a proof, not an opinion.
</div>

</div>

## How a runbook is built

Each one follows the same shape: the signals that tell you to open it,
internal time targets for containment and eradication, a decision
tree, numbered actions for first response and for deeper
investigation, a generic pointer to your own jurisdiction's authority
— never a specific one — and what destroys evidence if you get it
wrong.

[Browse the runbooks →](runbooks/index.md)

## What's inside

Ten incident scenarios, each as a full runbook (trigger criteria, time
targets, a decision tree, step-by-step L1/L2 actions, and pitfalls to
avoid) plus a one-page quick-reference checklist.

- Ransomware — **0.1 (draft)** ⧗
- Account Compromise — **0.1 (draft)** ⧗
- Phishing / Business Email Compromise (BEC) — **0.1 (draft)** ⧗
- DDoS — **0.1 (draft)** ⧗
- Web / Application Compromise — **0.1 (draft)** ⧗
- Critical Vulnerability (active exploitation) — **0.1 (draft)** ⧗
- Supply Chain Compromise — **0.1 (draft)** ⧗
- Data Leak — **0.1 (draft)** ⧗
- Insider Threat — **0.1 (draft)** ⧗
- Malware Infection — **0.1 (draft)** ⧗

_Chaque runbook est doublé d'une quick-reference : une page = une checklist
L1 condensée (10–15 actions ordonnées), conçue pour être imprimée et utilisée
en pleine crise._

## Contribute

Used one of these during a real incident? That's the single most
valuable thing you can report — it's literally how a runbook earns its
v1.0. Found a missing scenario, or a French section that reads like
a translation instead of the real thing? Same door, different issue.

<div class="irf-cta" markdown>
> **Votre incident réel peut faire passer un runbook en v1.0.**
> Partagez votre expérience via une issue `Feedback` — c'est la contribution
> la plus précieuse que ce projet puisse recevoir.
</div>

[How to contribute →](contributing.md)

---

<div class="irf-disclaimer" markdown>
> **Ces runbooks sont un guide technique, pas un conseil juridique.**
> Ils ne contiennent volontairement aucun délai légal spécifique à une
> juridiction et ne nomment aucune agence gouvernementale comme étape
> obligatoire — voir [`finding-your-csirt.md`](finding-your-csirt.md)
> pour identifier qui contacter, et consultez votre propre conseil
> juridique pour vos obligations de notification.
</div>

Content is published under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
