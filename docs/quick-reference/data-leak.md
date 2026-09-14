# Data Leak / Exposure — Quick Reference

**Status:** 0.1 (draft) — derived from [`runbooks/data-leak.md`](../runbooks/data-leak.md); do not edit independently.

- [ ] 1. Confirm the exposure is real, sensitive, and actually accessible.
- [ ] 2. Stop the ongoing exposure immediately — revoke access, take the resource offline, or block the recipient/URL.
- [ ] 3. Preserve evidence (metadata, timestamps, exact path) without downloading more than needed to confirm scope.
- [ ] 4. Get a first read on the likely cause: misconfiguration, external attacker, or a legitimate user's action.
- [ ] 5. Check for the same misconfiguration on sibling resources.
- [ ] 6. Escalate to L2 with what was exposed, since when, and the likely cause.
- [ ] 7. Determine exactly what data was exposed and its sensitivity.
- [ ] 8. Determine how long it was exposed and who could plausibly have accessed it.
- [ ] 9. Check whether the data has already spread (search engines, paste sites, leak trackers).
- [ ] 10. If a specific individual appears to be the source, involve HR and legal **before** any further action.
- [ ] 11. If external compromise is the cause, link this incident to `account-compromise.md` or `ransomware.md`.
- [ ] 12. Request takedown of any public copies, with evidence attached.
- [ ] 13. Fix the root cause broadly — check the whole environment, not just the one resource.
- [ ] 14. Monitor for continued spread and for signs the data is being misused.
- [ ] 15. Notify your competent authority (national CERT, DPO, regulator) according to the regulations applicable in your jurisdiction — consult your legal counsel. See `finding-your-csirt.md` to identify who to contact.
