# Data Leak / Exposure

**Status:** 0.1 (draft)
{: .irf-status }

---

## 1. Trigger Criteria

Open this runbook when any of the following appear, alone or together:

- A DLP tool, CASB, or cloud security scanner alerts on sensitive data leaving the network or sitting in a publicly accessible location.
- A cloud storage bucket, database, code repository, or file share is found configured with public or overly broad access.
- An employee or partner reports sending sensitive files to the wrong recipient.
- A customer, researcher, or journalist reports finding your organization's data exposed online.
- Sensitive documents or records appear on a search engine, a paste site, a public code repository, or a forum.
- A ransomware operator's leak site references your organization (see `ransomware.md` if this is the trigger).
- An unusually large export or download of sensitive data is logged shortly before symptoms appear.
- A vendor or dependency is found to have leaked data that includes your organization's information (see `supply-chain-compromise.md` if this is the trigger).

## 2. Time Objectives

- **L1:** stop the ongoing exposure within < 30 min of trigger.
- **L2:** complete scoping and root-cause containment within < 4 h.

These are internal operational targets to challenge with real incident data — not regulatory deadlines.

## 3. Decision Tree

???+ note "Decision tree — click to collapse"

    ```mermaid
    flowchart LR
        A[Exposed / leaked data reported] --> B{Exposure still active?}
        B -->|Yes| C[Stop the exposure now]
        B -->|No| D[Preserve evidence]
        C --> D
        D --> E{Likely cause?}
        E -->|Misconfiguration| F[Escalate to L2 - fix access controls]
        E -->|External attacker| G[Escalate to L2 - link to compromise]
        E -->|Suspected insider| H[Escalate to L2 - involve HR/legal]
        F --> I[Determine what, how much, who could access]
        G --> I
        H --> I
        I --> J[Request takedown + monitor spread]
        J --> K[Notify + lessons learned]
    ```

## 4. L1 Actions

1. **Confirm the exposure.** Verify the data is real, sensitive, and actually accessible — not a false positive or test data.
    - **Dedicated tool**: DLP/CASB alert console.
    - **CLI / open-source alternative**: fetch the reported location yourself (`curl -I <url>`, or an incognito browser check); for cloud storage, check permissions directly with the provider's free CLI (`aws s3api get-bucket-acl`, `az storage container show-permission`, `gsutil iam get gs://<bucket>`).

2. **Stop the ongoing exposure immediately** — revoke public access, take the resource offline, or block the recipient/URL, whichever applies.
    - **Dedicated tool**: cloud security posture management (CSPM) one-click remediation.
    - **CLI / open-source alternative**: flip the resource to private directly via the provider's free CLI (`aws s3api put-bucket-acl --acl private`, `az storage container set-permission --public-access off`, `gsutil iam ch -d allUsers`); for email, recall the message if supported, or immediately ask the recipient to delete it.

3. **Preserve evidence before doing anything else destructive.** Save the exposed data as found — metadata, timestamps, exact URL or path — without downloading more than needed to confirm scope.
    - **Dedicated tool**: DLP incident evidence capture.
    - **CLI / open-source alternative**: screenshots plus a targeted `curl`/`wget` of the resource's listing or header (not the full dataset) into a secure evidence folder, with timestamps recorded.

4. **Get a first read on the likely cause** — misconfiguration, external compromise (look for unfamiliar accounts or IPs accessing the resource before the leak), or a legitimate user's action.
    - **Dedicated tool**: cloud audit log / SIEM correlation around the exposure window.
    - **CLI / open-source alternative**: manually review the resource's access logs for the period before discovery (`aws s3api get-bucket-logging` plus log review, or your platform's free audit-log export).

5. **Check for the same misconfiguration elsewhere.** If one bucket, share, or repository was exposed, sibling resources built from the same template often are too.
    - **Dedicated tool**: CSPM / cloud security scanner sweeping all resources.
    - **CLI / open-source alternative**: a short script looping your provider's free CLI across all buckets/containers/repositories, checking public-access flags.

6. **Escalate to L2 with what you have** — what was exposed, since when (if known), how it was found, and the likely cause.
    - **Dedicated tool**: your case-management/ticketing platform.
    - **CLI / open-source alternative**: TheHive, or a shared incident document.

## 5. L2 Actions

1. **Determine exactly what data was exposed and its sensitivity.** Personal data, credentials, financial records, intellectual property — classify it.
    - **Dedicated tool**: data classification / DLP content-inspection tool.
    - **CLI / open-source alternative**: sample and grep the exposed dataset for patterns (email address formats, card-number-like sequences) to characterize its contents without exfiltrating more of it yourself.

2. **Determine how long the data was exposed and who could plausibly have accessed it.**
    - **Dedicated tool**: cloud audit log analytics / CASB access history.
    - **CLI / open-source alternative**: export and grep the resource's raw access logs for the exposure window; for a public resource, check search-engine caches to see if it was indexed.

3. **Check whether the leaked data has already spread** — search engines, paste sites, public code repositories, or a leak-site tracker if a ransomware group is implicated.
    - **Dedicated tool**: threat-intelligence / dark-web and leak-site monitoring service.
    - **CLI / open-source alternative**: manual search-engine queries for distinctive strings from the dataset, a public paste-site search, and free ransomware leak-site trackers where relevant.

4. **If a specific individual appears to be the source, involve HR and legal before taking any further action** — do not unilaterally search a named employee's private files or communications.
    - **Dedicated tool**: your organization's established HR/legal escalation process.
    - **CLI / open-source alternative**: none — this step has no technical substitute. If a deeper investigation of a specific user's activity is warranted, follow `insider-threat.md` once HR/legal has authorized it.

5. **If external attacker compromise is the likely cause, link this incident to the relevant runbook and continue eradication there** rather than duplicating that work here.
    - **Dedicated tool**: SIEM/EDR case linking.
    - **CLI / open-source alternative**: cross-reference the same IOCs and timeline in your shared incident document; follow `account-compromise.md` or `ransomware.md` as applicable.

6. **Request takedown of any copies posted publicly.** Contact the hosting provider, registrar, or platform's abuse contact with evidence attached.
    - **Dedicated tool**: a brand-protection / takedown service.
    - **CLI / open-source alternative**: `whois` the domain or hosting provider yourself and email their abuse contact directly with the URL, screenshots, and timestamps.

7. **Fix the root cause broadly, not just the single exposed resource.** Correct the underlying permission template, IAM policy, or process that allowed the exposure, then re-run the sweep from L1 action 5 across the whole environment.
    - **Dedicated tool**: infrastructure-as-code policy scanner / CSPM auto-remediation.
    - **CLI / open-source alternative**: update the shared provisioning template (Terraform, CloudFormation, or your manual checklist) and manually re-check every similar resource.

8. **Monitor for continued spread and for signs the data is being used** — targeted phishing referencing the leaked data, or fraud attempts against exposed individuals.
    - **Dedicated tool**: threat-intelligence feed tuned to this incident's indicators.
    - **CLI / open-source alternative**: a scheduled search-engine/paste-site query for distinctive dataset strings, continued for several weeks.

## 6. Notification & Escalation

> Escalate internally first — brief your SOC/IR lead and management with what you've confirmed and what's still uncertain. The decision to notify anyone outside your organization (a national CERT, a regulator, law enforcement) belongs to your organization's leadership and legal/DPO function, not to the responding analyst. See `finding-your-csirt.md` if your organization needs help identifying which external body to reach.

## 7. Pitfalls to Avoid

- **Downloading or copying more of the exposed data than needed to confirm scope** — every additional copy is another place it could leak from again.
- **Fixing the single exposed resource without checking for the same misconfiguration elsewhere** — sibling resources built from the same template often share the same mistake.
- **Assuming a takedown request removes the risk** — once data is public, assume it has already been copied; takedown reduces further spread, it doesn't undo what already happened.
- **Investigating a suspected insider's private files or communications without HR/legal sign-off first** — this can be unlawful depending on jurisdiction and can taint any subsequent action.
- **Treating "we can't find where the data went" as proof it wasn't accessed** — absence of access logs doesn't mean absence of access, especially for a public resource with logging disabled.
- **Waiting for a full picture of the cause before stopping the exposure** — restrict access first, investigate cause second, almost always in that order.

## 8. Resources

- MITRE ATT&CK [T1530](https://attack.mitre.org/techniques/T1530/) — Data from Cloud Storage.
- MITRE ATT&CK [T1567](https://attack.mitre.org/techniques/T1567/) — Exfiltration Over Web Service.
- MITRE ATT&CK [T1213](https://attack.mitre.org/techniques/T1213/) — Data from Information Repositories.
- Tools cited as examples: the [AWS CLI](https://aws.amazon.com/cli/), [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/), and [`gcloud`](https://cloud.google.com/cli)/[`gsutil`](https://cloud.google.com/storage/docs/gsutil) (all free), [Aleph](https://github.com/alephdata/aleph) (open-source tool for investigating leaked document sets), [TheHive](https://github.com/TheHive-Project/TheHive), [MISP](https://www.misp-project.org/).

## 9. Sources of Inspiration

- CERT Société Générale — IRM #11 "Information Leakage" (v2.0) — [github.com/certsocietegenerale/IRM](https://github.com/certsocietegenerale/IRM) — CC BY 3.0 Unported.
- CERT aDvens — IRM-11 "Fuite de données" (2025-10-27) — [github.com/cert-advens/IRM](https://github.com/cert-advens/IRM) — CC BY 3.0 Unported.
