# Quick Reference Template

> Copy this file to `docs/quick-reference/<scenario>.md` **and** its mirror
> to `docs/fr/quick-reference/<scenario>.md`. A quick reference is always
> *derived* from its full runbook — never written independently, to avoid
> the two drifting apart. It ships in both languages, in the same task as
> the runbook it condenses.

**Status:** 0.1 (draft) — inherits the status of its parent runbook.
{: .irf-status }

---

No prose, no Mermaid diagram, no "Resources" section here — this page is
built to be printed or kept open during a live incident. One checklist,
10–15 ordered items maximum, each actionable in a single glance.

- [ ] 1. First containment action.
- [ ] 2. ...
- [ ] 3. ...
- [ ] 4. ...
- [ ] 5. ...
- [ ] 6. ...
- [ ] 7. ...
- [ ] 8. ...
- [ ] 9. ...
- [ ] 10. Escalate internally first — brief your SOC/IR lead and management with what you've confirmed and what's still uncertain. The decision to notify anyone outside your organization (a national CERT, a regulator, law enforcement) belongs to your organization's leadership and legal/DPO function, not to the responding analyst. See `finding-your-csirt.md` if your organization needs help identifying which external body to reach.

> This notification item is mandatory on every quick reference — it is
> precisely in the middle of a live crisis, checklist in hand, that it
> gets skipped otherwise. Never add a number or deadline to it.
