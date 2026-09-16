# DDoS (Déni de Service Distribué)

**Statut :** 0.1 (brouillon)
{: .irf-status }

---

## 1. Critères de déclenchement

Ouvrez ce runbook dès que l'un de ces signaux apparaît, seul ou combiné :

- Un service, un site web ou une API devient lent ou injoignable, avec un trafic ou une consommation de ressources très éloignés de la normale.
- Un pare-feu, un WAF, un IDS ou un fournisseur anti-DDoS déclenche une alerte décrivant une inondation volumétrique ou applicative.
- Des utilisateurs ou clients signalent une interruption de service, sans cause légitime identifiée par la supervision interne (déploiement, changement de capacité).
- Un email d'extorsion demandant un paiement pour arrêter ou éviter une attaque arrive sur une adresse de sécurité ou une adresse listée dans le WHOIS.
- Un groupe hacktiviste ou un attaquant revendique une attaque en cours ou à venir contre votre organisation sur les réseaux sociaux ou un forum.
- Le nombre de connexions ou la charge des serveurs, routeurs ou répartiteurs de charge augmente fortement en peu de temps.

## 2. Objectifs de temps

- **L1 :** appliquer une première mesure d'atténuation en < 30 min après déclenchement.
- **L2 :** restaurer le service normal en < 4 h après confinement.

Ce sont des cibles opérationnelles internes à challenger avec des données d'incidents réels — pas des délais réglementaires. Remarque : pour une attaque volumétrique importante, le délai réel de résolution dépend souvent de la rapidité d'action de votre FAI ou fournisseur anti-DDoS en amont, pas seulement de votre propre vitesse de réponse — escaladez tôt vers eux plutôt que d'attendre de voir si les mesures internes suffisent.

## 3. Arbre de décision

???+ note "Arbre de décision — cliquer pour réduire"

    ```mermaid
    flowchart LR
        A[Service dégradé / alerte DDoS] --> B{DDoS confirmé ?}
        B -->|Non| C[Investiguer comme un problème de capacité/config]
        B -->|Oui| D{Couche réseau ou couche application ?}
        D -->|Réseau| E[Limiter / blackholer près de la bordure]
        D -->|Application| F[Désactiver la fonctionnalité / nettoyer le trafic applicatif]
        E --> G[Escalade L2 + FAI/fournisseur]
        F --> G
        G --> H[Capturer le trafic, vérifier extorsion/revendication]
        H --> I[Confirmer le retour à la normale]
        I --> J[Retirer les mesures de mitigation]
        J --> K[Notifier + tirer les leçons]
    ```

## 4. Actions L1

1. **Confirmez qu'il s'agit bien d'un DDoS** — pas d'un pic de trafic légitime, d'un déploiement raté, ou d'une erreur de configuration interne. Comparez la charge et le nombre de connexions actuels à votre référence habituelle.
    - **Outil dédié** : tableau de bord d'analyse du fournisseur anti-DDoS ou du WAF.
    - **Alternative CLI / open source** : une capture `tcpdump`/`tshark` comparée à l'historique du trafic avec un outil gratuit comme `ntop`/`ntopng`, Cacti, ou Nagios.

2. **Classez la couche ciblée** — réseau/volumétrique (saturation de bande passante ou de la table de connexions) ou applicative (inondation HTTP, requêtes lentes/coûteuses) — car la mitigation diffère.
    - **Outil dédié** : classification de l'attaque par le fournisseur anti-DDoS.
    - **Alternative CLI / open source** : vérifiez le nombre de connexions avec `netstat`/`ss`, et examinez les logs du serveur web à la recherche d'un pic de requêtes vers un endpoint coûteux spécifique.

3. **Limitez ou bloquez le trafic malveillant au plus près de la bordure du réseau.**
    - **Outil dédié** : activation de la mitigation par le fournisseur anti-DDoS/de nettoyage en amont.
    - **Alternative CLI / open source** : règles de limitation de débit `iptables`/`nftables` sur votre propre équipement de bordure, ou routez le trafic via un CDN/reverse proxy à offre gratuite devant le service affecté.

4. **Si une fonctionnalité applicative précise est le goulot d'étranglement, désactivez-la temporairement** plutôt que de couper tout le service.
    - **Outil dédié** : bascule de fonctionnalité via la console d'administration.
    - **Alternative CLI / open source** : commentez ou redirigez la route concernée dans la configuration du serveur web (`nginx`/Apache) et rechargez.

5. **Si possible, basculez vers un site alternatif, un edge CDN, ou une route de nettoyage via le DNS.**
    - **Outil dédié** : activation du basculement DNS / du service de nettoyage de trafic.
    - **Alternative CLI / open source** : repointez manuellement l'enregistrement DNS vers une origine de secours ou un CDN à offre gratuite — ceci ne fonctionne rapidement que si le TTL DNS était déjà maintenu court avant l'attaque.

6. **Mettez en place un canal de communication alternatif** pour tenir informés utilisateurs et clients pendant que le service principal est dégradé.
    - **Outil dédié** : une plateforme de page de statut.
    - **Alternative CLI / open source** : une mise à jour de statut statique hébergée ailleurs (un autre hébergement gratuit, ou une publication sur les réseaux sociaux) non affectée par l'attaque sur votre service principal.

7. **Escaladez vers le L2 et vers votre FAI ou fournisseur en amont avec ce que vous avez** — heure de début de l'attaque, services affectés, et caractéristiques du trafic observé (IP sources, ports de destination, protocoles).
    - **Outil dédié** : ligne d'assistance d'urgence de votre FAI ou fournisseur anti-DDoS.
    - **Alternative CLI / open source** : un appel téléphonique au NOC/service abus de votre FAI — la plupart des fournisseurs offrent une aide basique de contrôle du trafic sur demande, même sans contrat anti-DDoS payant — plus votre document d'incident habituel ou TheHive.

## 5. Actions L2

1. **Déterminez si vous êtes la cible visée ou une victime collatérale** — un voisin d'hébergement mutualisé ou de CDN attaqué peut aussi dégrader votre service.
    - **Outil dédié** : analyse des flux de trafic du fournisseur anti-DDoS.
    - **Alternative CLI / open source** : corrélez manuellement les IP et ports de destination dans vos logs pour voir si le trafic est largement distribué ou précisément dirigé vers vous.

2. **Capturez et analysez le trafic d'attaque** pour construire une signature de mitigation — IP/AS sources, ports de destination, URL, et indicateurs de protocole.
    - **Outil dédié** : un NIDS/IPS avec déploiement de signature personnalisée.
    - **Alternative CLI / open source** : `tcpdump`/Tshark pour la capture, et des outils gratuits comme Snort ou Suricata pour écrire et déployer une signature de détection/blocage.

3. **Vérifiez l'existence d'une demande d'extorsion ou d'une revendication** liée à l'attaque.
    - **Outil dédié** : recherche par mots-clés de la passerelle de sécurité email sur la boîte abus/sécurité.
    - **Alternative CLI / open source** : recherchez manuellement dans la boîte de sécurité et l'adresse listée dans le WHOIS un message de type rançon-DDoS ; vérifiez les réseaux sociaux et les canaux hacktivistes connus pour une revendication.

4. **Travaillez avec votre FAI ou fournisseur anti-DDoS sur le filtrage en amont, le nettoyage de trafic, ou le routage blackhole** — ces contrôles se situent généralement hors de votre propre réseau et seuls eux peuvent les appliquer efficacement.
    - **Outil dédié** : console de mitigation du fournisseur anti-DDoS.
    - **Alternative CLI / open source** : si vous opérez votre propre espace d'adressage IP, demandez un routage blackhole à distance (RTBH) à votre fournisseur de transit — une capacité offerte sur demande par la plupart des FAI, pas un produit payant.

5. **Configurez un filtrage de sortie** pour que vos propres systèmes n'aggravent pas le problème en répondant à du trafic usurpé ou réfléchi.
    - **Outil dédié** : déploiement de politique de sortie sur pare-feu nouvelle génération.
    - **Alternative CLI / open source** : règles de sortie `iptables`/`nftables` bloquant le trafic de réponse sortant inattendu.

6. **Confirmez la reprise** — service à nouveau joignable et performances revenues à la normale — avant d'annuler quoi que ce soit.
    - **Outil dédié** : supervision synthétique / SaaS de disponibilité.
    - **Alternative CLI / open source** : un vérificateur gratuit auto-hébergé comme Uptime Kuma, ou des vérifications manuelles répétées depuis plusieurs points d'observation.

7. **Annulez les mesures de mitigation** — basculement DNS, routes blackhole, limitations de débit d'urgence — une fois le trafic confirmé normal, en coordination avec l'équipe réseau.
    - **Outil dédié** : annulation via la console DNS/de gestion du trafic.
    - **Alternative CLI / open source** : annulez manuellement les enregistrements DNS et règles de pare-feu, en vérifiant chaque changement au fur et à mesure.

## 6. Notifications & escalade

> Escaladez d'abord en interne — informez votre responsable SOC/IR et la direction de ce que vous avez confirmé et de ce qui reste incertain. La décision de notifier une entité externe (CERT national, régulateur, forces de l'ordre) revient à la direction et au service juridique/DPO de votre organisation, pas à l'analyste qui répond à l'incident. Voir `finding-your-csirt.md` si votre organisation a besoin d'aide pour identifier l'organisme externe à contacter.

## 7. Erreurs à éviter

- **Mettre en blackhole ou null-router votre propre IP comme solution rapide sans réaliser que cela termine le travail de l'attaquant à sa place** — cela cause une interruption complète du service. Utilisez-le seulement en dernier recours, de façon ciblée et temporaire, après avoir pesé le coût par rapport à celui de l'attaque en cours.
- **Considérer le DDoS comme toute l'histoire** — il peut être un écran de fumée pour une tentative d'intrusion plus ciblée en cours simultanément. Continuez à surveiller vos autres alertes plutôt que de vous focaliser uniquement sur l'inondation.
- **Négocier sur le fond avec une demande d'extorsion** — gagnez du temps si nécessaire, mais n'allez pas au-delà ; impliquez les personnes habilitées à décider.
- **Annuler les mesures de mitigation avant confirmation de la stabilité des performances** — provoque une rechute immédiate.
- **Considérer votre FAI ou fournisseur anti-DDoS comme optionnel** — l'essentiel de la mitigation efficace pour une attaque volumétrique importante se joue en amont, hors de votre propre réseau. Escalader tardivement gaspille les minutes les plus critiques.
- **Ne pas avoir de TTL DNS courts et de contacts FAI prêts avant qu'une attaque ne survienne** — le temps que vous en ayez besoin pour une redirection DNS rapide, il est trop tard pour raccourcir un TTL déjà long.

## 8. Ressources

- MITRE ATT&CK [T1498](https://attack.mitre.org/techniques/T1498/) — Network Denial of Service (inondation directe ou par amplification par réflexion).
- MITRE ATT&CK [T1499](https://attack.mitre.org/techniques/T1499/) — Endpoint Denial of Service (y compris les inondations d'épuisement de service/application).
- Outils cités en exemple : [tcpdump](https://www.tcpdump.org/), [Wireshark/Tshark](https://www.wireshark.org/), [Snort](https://www.snort.org/), [Suricata](https://suricata.io/), [ntop/ntopng](https://www.ntop.org/), [MRTG](https://oss.oetiker.ch/mrtg/), [Cacti](https://www.cacti.net/), [Nagios](https://www.nagios.org/), [iptables/nftables](https://www.netfilter.org/), [Uptime Kuma](https://github.com/louislam/uptime-kuma).

## 9. Sources d'inspiration

- CERT Société Générale — IRM #4 « DDoS Incident Response » (v2.0) — [github.com/certsocietegenerale/IRM](https://github.com/certsocietegenerale/IRM) — CC BY 3.0 Unported.
- CERT aDvens — IRM-04 « Déni de Service Distribué (DDOS) » (2025-10-27) — [github.com/cert-advens/IRM](https://github.com/cert-advens/IRM) — CC BY 3.0 Unported.
