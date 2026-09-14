# Supply Chain / Third-Party Compromise — Quick Reference

**Status:** 0.1 (draft) — derived from [`runbooks/supply-chain-compromise.md`](../runbooks/supply-chain-compromise.md); do not edit independently.

- [ ] 1. Confirm the signal against your vendor/access inventory — what does this third party actually reach in your environment?
- [ ] 2. Cut or suspend the interconnection immediately if compromise is confirmed, or if it isn't business-critical.
- [ ] 3. Disable any account, API key, or credential dedicated to that third party.
- [ ] 4. Quarantine or filter the vendor's email rather than blocking it outright — you may still need their updates.
- [ ] 5. Preserve interconnection logs (traffic, auth, API calls) before they roll off retention.
- [ ] 6. Escalate to L2 with the vendor, the access scope, and whether business-critical traffic is involved.
- [ ] 7. Establish a direct, out-of-band channel with the vendor's security team.
- [ ] 8. Determine the full scope of what the vendor could reach — systems, data, credentials.
- [ ] 9. Hunt for indicators of lateral movement from the vendor's access point into your environment.
- [ ] 10. If the vendor supplies software, check whether you're running the compromised version and verify updates against checksums.
- [ ] 11. Request a formal incident report and an up-to-date IOC list from the vendor.
- [ ] 12. Coordinate joint containment with the vendor's security team.
- [ ] 13. Verify independently — not just on the vendor's word — before reopening, and rotate every shared credential.
- [ ] 14. Reassess the vendor's risk profile and access scope going forward.
- [ ] 15. Notify your competent authority (national CERT, DPO, regulator) according to the regulations applicable in your jurisdiction — consult your legal counsel. See `finding-your-csirt.md` to identify who to contact.
