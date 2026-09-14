# DDoS — Quick Reference

**Status:** 0.1 (draft) — derived from [`runbooks/ddos.md`](../runbooks/ddos.md); do not edit independently.
{: .irf-status }

- [ ] 1. Confirm it's actually a DDoS — not legitimate traffic, a deployment issue, or a misconfiguration.
- [ ] 2. Classify the layer: network/volumetric, or application-layer.
- [ ] 3. Throttle or block the malicious traffic as close to the network edge as possible.
- [ ] 4. If a specific application feature is the bottleneck, temporarily disable it.
- [ ] 5. If available, fail over to an alternate site, CDN edge, or scrubbing route via DNS.
- [ ] 6. Set up an alternate communication channel for users/customers while the service is degraded.
- [ ] 7. Escalate to L2 and to your ISP/anti-DDoS provider with attack start time, affected services, and traffic characteristics.
- [ ] 8. Determine whether you're the intended target or a collateral victim.
- [ ] 9. Capture and analyze the attack traffic to build a mitigation signature.
- [ ] 10. Check for an extortion demand or an attribution claim tied to the attack.
- [ ] 11. Work with your ISP/anti-DDoS provider on upstream filtering, scrubbing, or blackhole routing.
- [ ] 12. Configure egress filtering so your own systems don't add to the problem.
- [ ] 13. Confirm recovery to baseline before rolling back anything.
- [ ] 14. Roll back mitigation measures once traffic is confirmed normal.
- [ ] 15. Escalate internally first — brief your SOC/IR lead and management with what you've confirmed and what's still uncertain. The decision to notify anyone outside your organization (a national CERT, a regulator, law enforcement) belongs to your organization's leadership and legal/DPO function, not to the responding analyst. See `finding-your-csirt.md` if your organization needs help identifying which external body to reach.
