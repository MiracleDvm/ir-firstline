# Web Application / Server Compromise

**Status:** 0.1 (draft)
{: .irf-status }

---

## 1. Trigger Criteria

Open this runbook when any of the following appear, alone or together:

- A public-facing page's content has been altered without authorization — an obvious defacement message, or a discreet injection (e.g. a hidden `iframe` or script).
- An unexpected file appears in a web-accessible directory (an unfamiliar script, an unusually-named file, a file with suspicious permissions).
- A server shows unrecognized outbound connections, unfamiliar processes, or CPU/network activity that doesn't match its normal baseline.
- A WAF, IDS/IPS, or log-analysis rule fires on an exploitation pattern (SQL injection, remote file inclusion, a known CVE signature) against a public-facing application.
- An unrecognized local or admin account appears on a server, or a scheduled task/cron job no one created.
- A file-integrity monitoring alert fires for unexpected changes to system binaries or website content.
- A user, a public vulnerability-tracking service (e.g. Google Safe Browsing), or a security researcher reports that your site is compromised or serving malicious content.

## 2. Time Objectives

- **L1:** contain the affected host/service within < 30 min of trigger.
- **L2:** complete eradication within < 4 h of containment.

These are internal operational targets to challenge with real incident data — not regulatory deadlines.

## 3. Decision Tree

???+ note "Decision tree — click to collapse"

    ```mermaid
    flowchart LR
        A[Defacement / webshell / intrusion alert] --> B{Public-facing content affected?}
        B -->|Yes| C[Take offline or serve maintenance page]
        B -->|No| D[Isolate the host]
        C --> E[Preserve evidence]
        D --> E
        E --> F[Escalate to L2]
        F --> G[Find entry vector + persistence]
        G --> H[Eradicate + patch vulnerability]
        H --> I[Restore from clean backup]
        I --> J[Notify + lessons learned]
    ```

## 4. L1 Actions

1. **Confirm the compromise.** Check for defaced content, an unexpected file in the web root, unrecognized processes or connections, or the alert that triggered this (WAF/IDS rule, file-integrity check).
    - **Dedicated tool**: EDR/WAF alert console, or a website-integrity monitoring service.
    - **CLI / open-source alternative**: compare the current page/files against a known-good baseline by hand, and list recently modified files.

        === "Linux"

            ```bash
            find /var/www -mtime -1 -type f
            ```

        === "Windows"

            ```powershell
            Get-ChildItem -Recurse | Sort-Object LastWriteTime -Descending
            ```

2. **Contain the host.** For a critical service, isolate it from the network while keeping it powered on (preserves evidence); for a non-critical host you may power it off directly — this scenario doesn't carry ransomware's destructive-shutdown risk.
    - **Dedicated tool**: EDR network isolation, or a firewall/load-balancer rule pulling the host out of rotation.
    - **CLI / open-source alternative**: disable the network adapter (`ip link set <iface> down` / `netsh interface set interface "<name>" admin=disable`), or physically disconnect the host.

3. **If public-facing content is affected, take it offline or redirect to a static maintenance page** — static HTML only, no dynamic code, so the same vulnerability can't be re-exploited while you investigate.
    - **Dedicated tool**: CDN/WAF failover rule, or a maintenance-mode toggle.
    - **CLI / open-source alternative**: point the web server's document root, or your DNS/load-balancer target, at a pre-prepared static HTML holding page.

4. **Preserve evidence before remediating.** Capture a disk and/or memory image if you can do so without delay, and take a timestamped copy of any defaced content.
    - **Dedicated tool**: EDR forensic triage / full-disk imaging.
    - **CLI / open-source alternative**: `dd` or FTK Imager for a disk image, a free memory-capture tool compatible with Volatility, and `wget`/HTTrack for a timestamped copy of a defaced page.

5. **Disable accounts and credentials that may be compromised** — especially any local or admin account on the server that you don't recognize.
    - **Dedicated tool**: IAM/PAM console.
    - **CLI / open-source alternative**: disable the account, and review `/etc/passwd` for unexpected UID 0 entries.

        === "Linux"

            ```bash
            usermod -L <account>
            ```

        === "Windows"

            ```powershell
            net user <account> /active:no
            ```

6. **Escalate to L2 with what you have** — the affected host/service, a sample of the defacement or suspicious file, a rough timeline, and whether the vulnerability still looks exploitable.
    - **Dedicated tool**: your case-management/ticketing platform.
    - **CLI / open-source alternative**: TheHive, or a shared incident document.

## 5. L2 Actions

1. **Identify the entry vector.** Check server logs and error logs for SQL injection, remote file inclusion, a vulnerable CMS plugin, an exposed admin panel, or exploitation of a known unpatched CVE.
    - **Dedicated tool**: WAF/IDS forensic log search.
    - **CLI / open-source alternative**: grep the access/error logs by hand (e.g. `grep -i "union select\|\.\./\.\." access.log`) and review requests around the time of compromise.

2. **Search for webshells and unauthorized files.** Look for recently modified or newly created files in web-accessible directories, and files with unusual names, permissions, or content patterns.
    - **Dedicated tool**: EDR or dedicated webshell-detection module.
    - **CLI / open-source alternative**: run YARA rules against known webshell signatures; `find /var/www -mtime -7 -type f` combined with manual review of anything matching common webshell patterns (heavy `base64`/`eval()` use in a script file, for example).

3. **Identify persistence beyond the web root** — scheduled tasks, cron jobs, new services, autostart entries, or SSH keys/accounts the attacker added.
    - **Dedicated tool**: EDR persistence-hunting module.
    - **CLI / open-source alternative**: Sysinternals Autoruns (Windows); review `crontab -l`, `/etc/cron.*`, and `~/.ssh/authorized_keys` by hand (Linux).

4. **Check for lateral movement** — whether the compromised host connected to other internal systems or shares it shouldn't have.
    - **Dedicated tool**: EDR/network-flow analysis across the fleet.
    - **CLI / open-source alternative**: review firewall or NetFlow logs manually, and correlate the host's outbound connection history against your asset inventory.

5. **Fix the root cause before restoring service** — patch the exploited vulnerability, update or remove the vulnerable CMS plugin, close the open/writable folder, or fix the injectable code.
    - **Dedicated tool**: vulnerability-management platform tracking the fix to closure.
    - **CLI / open-source alternative**: apply the vendor patch yourself, or add a WAF/reverse-proxy rule blocking the specific exploitation pattern if a permanent fix isn't ready yet.

6. **Rebuild rather than clean where you're not fully confident.** Reinstall the server from a known-good image or official package source rather than trying to manually remove every attacker artifact.
    - **Dedicated tool**: your standard server-imaging / golden-image pipeline.
    - **CLI / open-source alternative**: reinstall from the distribution's official ISO/packages and reapply configuration from version control.

7. **Restore content from a verified-clean backup, and reset credentials** for every account with access to the server — admin panel, deployment, and database.
    - **Dedicated tool**: backup platform's integrity-verified restore.
    - **CLI / open-source alternative**: restore from a backup predating the compromise, checked against known-good hashes; reset each affected account's password by hand.

8. **Monitor closely after restoring service.** The same vulnerability, or a leftover backdoor, is the most common cause of reinfection.
    - **Dedicated tool**: WAF/IDS alerting tuned to the confirmed indicators, plus uptime/integrity monitoring.
    - **CLI / open-source alternative**: a scheduled script comparing current file hashes to the clean baseline, and manual log review for several days after recovery.

## 6. Notification & Escalation

> Escalate internally first — brief your SOC/IR lead and management with what you've confirmed and what's still uncertain. The decision to notify anyone outside your organization (a national CERT, a regulator, law enforcement) belongs to your organization's leadership and legal/DPO function, not to the responding analyst. See `finding-your-csirt.md` if your organization needs help identifying which external body to reach.

## 7. Pitfalls to Avoid

- **Powering off a critical host before capturing volatile evidence** — destroys memory-resident indicators. (For a genuinely non-critical host, powering off is an acceptable tradeoff — just know which case you're in.)
- **Restoring content or service before fixing the root-cause vulnerability** — the same webshell or exploit reappears within hours.
- **Removing only the visible defacement or webshell** without hunting for additional persistence (cron jobs, new accounts, SSH keys) — the attacker regains access silently.
- **Assuming the compromise is limited to the web application** — check whether the underlying host or other services were also touched.
- **Trusting local log files and hashes without verifying they weren't altered** — an attacker with root/admin access can tamper with local logs.
- **Treating a "harmless-looking" defacement as low priority** — even a joke message means the attacker had write access, and reconnaissance or a persistent foothold may be the real goal, not the visible message.

## 8. Resources

- MITRE ATT&CK [T1190](https://attack.mitre.org/techniques/T1190/) — Exploit Public-Facing Application.
- MITRE ATT&CK [T1505.003](https://attack.mitre.org/techniques/T1505/003/) — Server Software Component: Web Shell.
- MITRE ATT&CK [T1053](https://attack.mitre.org/techniques/T1053/) — Scheduled Task/Job.
- MITRE ATT&CK [T1136](https://attack.mitre.org/techniques/T1136/) — Create Account.
- Tools cited as examples: [YARA](https://virustotal.github.io/yara/), [Sysinternals Autoruns](https://learn.microsoft.com/en-us/sysinternals/downloads/autoruns), [AIDE](https://aide.github.io/), [rkhunter](https://rkhunter.sourceforge.net/), [Sleuth Kit/Autopsy](https://www.sleuthkit.org/), [Volatility](https://volatilityfoundation.org/), [FTK Imager](https://www.exterro.com/digital-forensics-software/ftk-imager), [HTTrack](https://www.httrack.com/), [TheHive](https://github.com/TheHive-Project/TheHive).

## 9. Sources of Inspiration

- CERT Société Générale — IRM #2 "Windows Intrusion Detection" (v2.0) — [github.com/certsocietegenerale/IRM](https://github.com/certsocietegenerale/IRM) — CC BY 3.0 Unported.
- CERT Société Générale — IRM #3 "Unix/Linux Intrusion Detection" (v2.0) — [github.com/certsocietegenerale/IRM](https://github.com/certsocietegenerale/IRM) — CC BY 3.0 Unported.
- CERT Société Générale — IRM #6 "Website Defacement" (v2.0) — [github.com/certsocietegenerale/IRM](https://github.com/certsocietegenerale/IRM) — CC BY 3.0 Unported.
- Counteractive — "Playbook: Website Defacement" — [github.com/counteractive/incident-response-plan-template](https://github.com/counteractive/incident-response-plan-template) — Apache License 2.0.
