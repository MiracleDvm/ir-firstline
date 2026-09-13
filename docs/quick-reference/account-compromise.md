# Account Compromise — Quick Reference

**Status:** 0.1 (draft) — derived from [`runbooks/account-compromise.md`](../runbooks/account-compromise.md); do not edit independently.

- [ ] 1. Confirm the compromise: check sign-in/audit logs for new country, new device, impossible travel, or MFA failures followed by a success.
- [ ] 2. Disable the account and revoke all active sessions and tokens immediately — a password reset alone does not end an open session.
- [ ] 3. Reset the account's credentials and remove any unrecognized MFA method.
- [ ] 4. Check for persistence: forwarding/inbox rules, transport rules, delegated mailbox access, and OAuth app consents.
- [ ] 5. Preserve evidence: the phishing email if any, exact log entries, consented apps and permissions, timestamps.
- [ ] 6. Escalate to L2 with the suspected entry point and whether other accounts show the same pattern.
- [ ] 7. Determine the entry point: phishing, password spray, leaked credential, or consent-grant phishing.
- [ ] 8. Inventory every third-party (OAuth) application with access, and its granted permissions.
- [ ] 9. Disable — **do not delete** — any application with illegitimate or excessive permissions.
- [ ] 10. Determine the full scope across accounts (same sender, source IPs, or application ID).
- [ ] 11. Block the attacker's source IP(s) and malicious sending domains — treat this as temporary, not durable containment.
- [ ] 12. Remove all persistence found, across every affected account.
- [ ] 13. Harden: enforce MFA, disable legacy/basic authentication, enable risk-based sign-in policies.
- [ ] 14. Watch for a second wave targeting other users in the same organization.
- [ ] 15. Notify your competent authority (national CERT, DPO, regulator) according to the regulations applicable in your jurisdiction — consult your legal counsel. See `finding-your-csirt.md` to identify who to contact.
