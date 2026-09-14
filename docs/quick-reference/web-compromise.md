# Web Application / Server Compromise — Quick Reference

**Status:** 0.1 (draft) — derived from [`runbooks/web-compromise.md`](../runbooks/web-compromise.md); do not edit independently.

- [ ] 1. Confirm the compromise: defaced content, unexpected file in the web root, unrecognized processes, or a WAF/IDS alert.
- [ ] 2. Contain the host — isolate a critical service (stay powered on) or power off a non-critical one.
- [ ] 3. If public-facing content is affected, take it offline or serve a static maintenance page (no dynamic code).
- [ ] 4. Preserve evidence: a disk/memory image if possible, and a timestamped copy of any defaced content.
- [ ] 5. Disable any local or admin account on the server you don't recognize.
- [ ] 6. Escalate to L2 with the affected host/service, a sample of the issue, and a rough timeline.
- [ ] 7. Identify the entry vector: SQL injection, RFI, vulnerable plugin, exposed admin panel, or unpatched CVE.
- [ ] 8. Search for webshells and unauthorized files in web-accessible directories.
- [ ] 9. Identify persistence beyond the web root — scheduled tasks, cron jobs, new services, SSH keys.
- [ ] 10. Check for lateral movement to other internal systems.
- [ ] 11. Fix the root cause before restoring service — patch, update/remove the vulnerable component, fix the code.
- [ ] 12. Rebuild from a known-good image rather than manually cleaning if you're not fully confident.
- [ ] 13. Restore content from a verified-clean backup and reset every affected account's credentials.
- [ ] 14. Monitor closely after restoring service for signs of reinfection.
- [ ] 15. Notify your competent authority (national CERT, DPO, regulator) according to the regulations applicable in your jurisdiction — consult your legal counsel. See `finding-your-csirt.md` to identify who to contact.
