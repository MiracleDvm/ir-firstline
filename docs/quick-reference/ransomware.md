# Ransomware — Quick Reference

**Status:** 0.1 (draft) — derived from [`runbooks/ransomware.md`](../runbooks/ransomware.md); do not edit independently.
{: .irf-status }

- [ ] 1. Confirm ransomware signs: ransom note, unusual file extensions, mass file changes in a short window, or an EDR/SIEM alert.
- [ ] 2. Isolate the affected host(s) from the network immediately — do **not** power them off.
- [ ] 3. Disconnect or lock down shared drives and backups reachable from the affected host.
- [ ] 4. Preserve evidence: photograph the ransom note, note the file-extension pattern, record exact timestamps.
- [ ] 5. Disable accounts showing signs of compromise (privileged accounts, unusual-hour logons, newly created accounts).
- [ ] 6. Escalate to L2 with what you have. Do **not** negotiate, pay, or restore from backup yet.
- [ ] 7. Identify the ransomware family/variant from the ransom note and file extension.
- [ ] 8. Determine the full scope — hunt the same indicators across hosts, accounts, and shares.
- [ ] 9. Find the infection vector (phishing, exposed RDP, self-propagation, delivery by other malware).
- [ ] 10. Contain at network level — block command-and-control domains/IPs, isolate the affected segment.
- [ ] 11. Eradicate — remove persistence, rebuild from known-clean media wherever in doubt.
- [ ] 12. Recover — restore from a verified-clean backup and reset privileged credentials before reconnecting anything.
- [ ] 13. Check for a known decryptor before considering any other option for unrecoverable data.
- [ ] 14. Watch for reinfection and for data-leak publication tied to this incident.
- [ ] 15. Escalate internally first — brief your SOC/IR lead and management with what you've confirmed and what's still uncertain. The decision to notify anyone outside your organization (a national CERT, a regulator, law enforcement) belongs to your organization's leadership and legal/DPO function, not to the responding analyst. See `finding-your-csirt.md` if your organization needs help identifying which external body to reach.
