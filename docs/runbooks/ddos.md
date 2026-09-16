# DDoS (Distributed Denial of Service)

**Status:** 0.1 (draft)
{: .irf-status }

---

## 1. Trigger Criteria

Open this runbook when any of the following appear, alone or together:

- A service, website, or API becomes slow or unreachable, with traffic or resource usage far outside its normal baseline.
- A firewall, WAF, IDS, or anti-DDoS provider fires an alert describing a volumetric or application-layer flood.
- Users or customers report an outage, and internal monitoring shows no legitimate cause (deployment, capacity change).
- An extortion email demanding payment to stop or avoid an attack arrives at a security or WHOIS-listed contact address.
- A hacktivist group or attacker claims an ongoing or upcoming attack against your organization on social media or a forum.
- Load and connection counts on servers, routers, or load balancers spike sharply in a short window.

## 2. Time Objectives

- **L1:** apply initial mitigation within < 30 min of trigger.
- **L2:** restore normal service within < 4 h of containment.

These are internal operational targets to challenge with real incident data — not regulatory deadlines. Note: for a large volumetric attack, actual resolution time often depends on how quickly your upstream ISP or anti-DDoS provider acts, not just your own response speed — escalate to them early rather than waiting to see if internal measures are enough.

## 3. Decision Tree

???+ note "Decision tree — click to collapse"

    ```mermaid
    flowchart LR
        A[Service degraded / DDoS alert] --> B{Confirmed DDoS?}
        B -->|No| C[Investigate as capacity/config issue]
        B -->|Yes| D{Network layer or application layer?}
        D -->|Network| E[Throttle / blackhole near the edge]
        D -->|Application| F[Disable feature / scrub app traffic]
        E --> G[Escalate to L2 + ISP/provider]
        F --> G
        G --> H[Capture traffic, check extortion/claim]
        H --> I[Confirm recovery to baseline]
        I --> J[Roll back mitigations]
        J --> K[Notify + lessons learned]
    ```

## 4. L1 Actions

1. **Confirm it's actually a DDoS** — not a legitimate traffic spike, a botched deployment, or an internal misconfiguration. Compare current load and connection counts against your normal baseline.
    - **Dedicated tool**: anti-DDoS provider or WAF analytics dashboard.
    - **CLI / open-source alternative**: run a capture with `tcpdump`/`tshark` and compare against historical traffic with a free tool such as `ntop`/`ntopng`, Cacti, or Nagios.

2. **Classify which layer is being targeted** — network/volumetric (bandwidth or connection-table exhaustion) or application-layer (HTTP flood, slow/expensive requests) — since the mitigation differs.
    - **Dedicated tool**: anti-DDoS provider's attack classification.
    - **CLI / open-source alternative**: check connection counts with `netstat`/`ss`, and inspect web server access logs for a spike in requests to a specific expensive endpoint.

3. **Throttle or block the malicious traffic as close to the network edge as possible.**
    - **Dedicated tool**: upstream anti-DDoS/scrubbing provider's mitigation activation.
    - **CLI / open-source alternative**: `iptables`/`nftables` rate-limiting rules on your own edge device, or route traffic through a CDN/reverse proxy with a free tier in front of the affected service.

4. **If a specific application feature is the bottleneck, temporarily disable it** rather than taking the whole service down.
    - **Dedicated tool**: application feature flag via the admin console.
    - **CLI / open-source alternative**: comment out or redirect the specific route at the web server configuration (`nginx`/Apache) and reload.

5. **If available, fail over to an alternate site, CDN edge, or scrubbing route via DNS.**
    - **Dedicated tool**: DNS failover / traffic-scrubbing service activation.
    - **CLI / open-source alternative**: manually repoint the DNS record to a backup origin or a free-tier CDN — this only works quickly if your DNS TTL was already kept short before the attack.

6. **Set up an alternate communication channel** to keep users and customers informed while the primary service is degraded.
    - **Dedicated tool**: a status-page platform.
    - **CLI / open-source alternative**: a static status update hosted elsewhere (a separate free host, or a social media post) that isn't affected by the attack on your main service.

7. **Escalate to L2 and to your ISP or upstream provider with what you have** — attack start time, affected services, and observed traffic characteristics (source IPs, destination ports, protocols).
    - **Dedicated tool**: your ISP or anti-DDoS provider's emergency support line.
    - **CLI / open-source alternative**: a phone call to your ISP's NOC/abuse line — most providers offer basic traffic-control help on request even without a paid anti-DDoS contract — plus your usual incident doc or TheHive.

## 5. L2 Actions

1. **Determine whether you're the intended target or a collateral victim** — e.g., a shared hosting or CDN neighbor being attacked can degrade your service too.
    - **Dedicated tool**: anti-DDoS provider's traffic-flow analysis.
    - **CLI / open-source alternative**: manually correlate destination IPs and ports across your logs to see whether the traffic is broadly distributed or narrowly aimed at you.

2. **Capture and analyze the attack traffic** to build a mitigation signature — source IPs/ASNs, destination ports, URLs, and protocol flags.
    - **Dedicated tool**: a NIDS/IPS with custom signature deployment.
    - **CLI / open-source alternative**: `tcpdump`/Tshark for the capture, and free tools such as Snort or Suricata to write and deploy a detection/blocking signature.

3. **Check for an extortion demand or an attribution claim** tied to the attack.
    - **Dedicated tool**: email security gateway keyword search across the abuse/security mailbox.
    - **CLI / open-source alternative**: manually search the security mailbox and the WHOIS-listed contact address for a ransom-DDoS message; check social media and known hacktivist channels for a claimed attack.

4. **Work with your ISP or anti-DDoS provider on upstream filtering, traffic scrubbing, or blackhole routing** — these controls usually sit outside your own network and only they can apply them effectively.
    - **Dedicated tool**: anti-DDoS provider's mitigation console.
    - **CLI / open-source alternative**: if you operate your own IP space, request remote-triggered blackhole (RTBH) routing from your transit provider — a capability most ISPs offer on request, not a paid product.

5. **Configure egress filtering** so your own systems don't add to the problem by responding to spoofed or reflected traffic.
    - **Dedicated tool**: next-generation firewall egress policy push.
    - **CLI / open-source alternative**: `iptables`/`nftables` egress rules blocking unexpected outbound response traffic.

6. **Confirm recovery** — service reachability and performance back to your baseline — before rolling back anything.
    - **Dedicated tool**: synthetic monitoring / uptime SaaS.
    - **CLI / open-source alternative**: a free self-hosted checker such as Uptime Kuma, or manual repeated checks from multiple vantage points.

7. **Roll back mitigation measures** — DNS failover, blackhole routes, emergency rate limits — once traffic is confirmed normal, in coordination with the network team.
    - **Dedicated tool**: DNS/traffic-management console rollback.
    - **CLI / open-source alternative**: manually revert DNS records and firewall rules, verifying each change as you go.

## 6. Notification & Escalation

> Escalate internally first — brief your SOC/IR lead and management with what you've confirmed and what's still uncertain. The decision to notify anyone outside your organization (a national CERT, a regulator, law enforcement) belongs to your organization's leadership and legal/DPO function, not to the responding analyst. See `finding-your-csirt.md` if your organization needs help identifying which external body to reach.

## 7. Pitfalls to Avoid

- **Blackholing or null-routing your own IP as a quick fix without realizing it finishes the attacker's job for them** — this causes a complete outage. Use it only as a last-resort, targeted, temporary measure, and only after weighing it against the cost of the ongoing attack.
- **Treating the DDoS as the whole story** — it can be a smokescreen for a more targeted intrusion attempt happening at the same time. Keep watching your other alerts instead of fixating only on the flood.
- **Substantively negotiating with an extortion demand** — buy time if you must, but don't engage beyond that; involve the people who make that call.
- **Rolling back mitigations before performance is confirmed stable** — causes an immediate relapse.
- **Treating your ISP or anti-DDoS provider as optional** — most effective mitigation for a large volumetric attack happens upstream, outside your own network. Escalating late wastes the most critical minutes.
- **Not having short DNS TTLs and ISP contacts ready before an attack happens** — by the time you need fast DNS redirection, it's too late to shorten a long-lived TTL.

## 8. Resources

- MITRE ATT&CK [T1498](https://attack.mitre.org/techniques/T1498/) — Network Denial of Service (direct flood or reflection amplification).
- MITRE ATT&CK [T1499](https://attack.mitre.org/techniques/T1499/) — Endpoint Denial of Service (including application/service exhaustion floods).
- Tools cited as examples: [tcpdump](https://www.tcpdump.org/), [Wireshark/Tshark](https://www.wireshark.org/), [Snort](https://www.snort.org/), [Suricata](https://suricata.io/), [ntop/ntopng](https://www.ntop.org/), [MRTG](https://oss.oetiker.ch/mrtg/), [Cacti](https://www.cacti.net/), [Nagios](https://www.nagios.org/), [iptables/nftables](https://www.netfilter.org/), [Uptime Kuma](https://github.com/louislam/uptime-kuma).

## 9. Sources of Inspiration

- CERT Société Générale — IRM #4 "DDoS Incident Response" (v2.0) — [github.com/certsocietegenerale/IRM](https://github.com/certsocietegenerale/IRM) — CC BY 3.0 Unported.
- CERT aDvens — IRM-04 "Déni de Service Distribué (DDOS)" (2025-10-27) — [github.com/cert-advens/IRM](https://github.com/cert-advens/IRM) — CC BY 3.0 Unported.
