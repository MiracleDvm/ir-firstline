# Phishing / BEC — Quick Reference

**Status:** 0.1 (draft) — derived from [`runbooks/phishing-bec.md`](../runbooks/phishing-bec.md); do not edit independently.
{: .irf-status }

- [ ] 1. Confirm the report: get the message's headers, body, attachments, and links — don't open attachments or follow links on a sensitive device.
- [ ] 2. If a financial request is involved, verify it out-of-band — call a number you already had on file, **never** one from the message.
- [ ] 3. If a transfer already went out, contact your bank immediately to request a recall or hold.
- [ ] 4. Identify who else received the message and whether anyone clicked, opened an attachment, or entered credentials.
- [ ] 5. Contain any account showing signs of compromise: disable it, revoke sessions, reset its password.
- [ ] 6. Block the sender and any malicious domains/links/attachments; remove the message from other inboxes.
- [ ] 7. Escalate to L2 with the message, who was targeted, and whether credentials or money moved.
- [ ] 8. Analyze the message and any attachments/links in an isolated or sandboxed environment.
- [ ] 9. Determine the campaign type (credential harvesting, malware, BEC fraud) and whether it's targeted.
- [ ] 10. Audit mailbox rules and delegated access on affected accounts for attacker-planted persistence.
- [ ] 11. Determine the full scope: users, departments, and financial exposure.
- [ ] 12. If fraudulent content is hosted online, file an abuse/takedown request with evidence attached.
- [ ] 13. Harden email authentication (SPF/DKIM/DMARC) and disable legacy authentication protocols.
- [ ] 14. If money moved, document the loss with finance and add temporary friction to the payment process.
- [ ] 15. Escalate internally first — brief your SOC/IR lead and management with what you've confirmed and what's still uncertain. The decision to notify anyone outside your organization (a national CERT, a regulator, law enforcement) belongs to your organization's leadership and legal/DPO function, not to the responding analyst. See `finding-your-csirt.md` if your organization needs help identifying which external body to reach.
