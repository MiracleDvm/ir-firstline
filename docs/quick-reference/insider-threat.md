# Insider Threat — Quick Reference

**Status:** 0.1 (draft) — derived from [`runbooks/insider-threat.md`](../runbooks/insider-threat.md); do not edit independently.
{: .irf-status }

- [ ] 1. Confirm the report is credible against logs for the specific account only — not the whole environment.
- [ ] 2. Do **not** take containment or confrontational action yourself — escalate to L2 immediately.
- [ ] 3. Preserve the triggering evidence quietly — don't alert the subject or their colleagues.
- [ ] 4. Note whether the person still has active access right now (employed, on notice, departed).
- [ ] 5. Confirm the authorization path before anything further happens.
- [ ] 6. Involve HR, legal counsel, and the subject's manager before proceeding — nothing further happens without their sign-off.
- [ ] 7. Once authorized, freeze all access paths at once: applications, system/service accounts, VPN, physical badge.
- [ ] 8. If the subject stays at work pending the outcome, reduce access to the minimum rather than removing it.
- [ ] 9. Investigate without tipping off the subject: logs, data access history, and authorized device/account review.
- [ ] 10. Review code, scripts, and scheduled tasks the subject created for backdoors or sabotage.
- [ ] 11. Determine the full scope: what data/systems were accessed, and what left the organization's control.
- [ ] 12. If malicious/fraudulent activity is confirmed, stop independent investigation and hand off to legal counsel.
- [ ] 13. If nothing malicious is confirmed, restore access and close the case discreetly.
- [ ] 14. Escalate internally first — brief your SOC/IR lead and management with what you've confirmed and what's still uncertain. The decision to notify anyone outside your organization (a national CERT, a regulator, law enforcement) belongs to your organization's leadership and legal/DPO function, not to the responding analyst. See `finding-your-csirt.md` if your organization needs help identifying which external body to reach.
