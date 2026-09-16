# Menace interne

**Statut :** 0.1 (brouillon)
{: .irf-status }

---

## 1. Critères de déclenchement

Ouvrez ce runbook dès que l'un de ces signaux apparaît, seul ou combiné :

- Une règle SIEM ou de corrélation signale un comportement anormal lié à un compte interne déjà authentifié.
- Une alerte DLP se déclenche pour une exfiltration de données inhabituelle ou un téléchargement massif par un utilisateur autorisé.
- Un système de contrôle d'accès physique enregistre l'usage d'un badge en dehors des horaires ou du lieu habituels d'une personne.
- Un manager ou un collègue signale un comportement suspect d'un membre de l'équipe.
- L'équipe risque, conformité ou audit signale une anomalie opérationnelle traçable à un employé précis.
- Un partenaire externe signale des incohérences qui remontent à un acteur interne.
- Le motif d'accès d'un employé change brutalement autour d'une date de démission ou de licenciement.

## 2. Objectifs de temps

- **L1 :** confirmer et escalader en < 30 min après une détection crédible — le L1 ne confine **pas** unilatéralement dans ce runbook (voir Erreurs à éviter).
- **L2 :** achever le confinement autorisé en < 4 h après obtention du feu vert.

Ce sont des cibles opérationnelles internes à challenger avec des données d'incidents réels — pas des délais réglementaires. Contrairement à la plupart des runbooks de ce projet, la vitesse passe ici après l'autorisation : agir avant que les bonnes personnes aient donné leur accord est le risque principal, pas le délai.

## 3. Arbre de décision

???+ note "Arbre de décision — cliquer pour réduire"

    ```mermaid
    flowchart LR
        A[Activité interne suspecte] --> B{Caractère malveillant/frauduleux confirmé ?}
        B -->|Incertain| C[Escalade L2 - investigation discrète]
        B -->|Oui| D[Escalade L2 - arrêter l'action technique]
        C --> E[Obtenir une autorisation écrite]
        E --> F[Geler l'accès + préserver les preuves]
        F --> G{Caractère malveillant confirmé ?}
        G -->|Oui| D
        G -->|Non| H[Restaurer l'accès, clôturer le dossier]
        D --> I[Transmettre au juridique/RH]
        I --> J[Notifier + tirer les leçons]
    ```

## 4. Actions L1

1. **Confirmez que le signalement est crédible.** Recoupez l'alerte avec les journaux du compte concerné — pas de l'ensemble de l'environnement.
    - **Outil dédié** : console SIEM/UEBA, centrée sur l'utilisateur.
    - **Alternative CLI / open source** : examinez manuellement les journaux de connexion et d'accès aux fichiers du compte — journal des événements de sécurité Windows, ou journaux `auditd` sous Linux — pour la période concernée.

2. **N'entreprenez aucune action de confinement ou de confrontation vous-même.** Escaladez immédiatement vers le L2 et votre responsable d'incident avec ce que vous avez.
    - **Outil dédié** : votre plateforme de gestion de cas/tickets, avec le cas marqué à visibilité restreinte.
    - **Alternative CLI / open source** : TheHive avec la visibilité du cas limitée aux intervenants nommés, ou un canal privé à accès restreint — évitez le canal partagé habituel de votre équipe.

3. **Préservez la preuve déclenchante exactement telle que trouvée** — capture d'écran, extrait de journal, export — sans alerter le sujet ou ses collègues qu'une enquête a commencé.
    - **Outil dédié** : export de dossier SIEM / capture forensique de l'EDR.
    - **Alternative CLI / open source** : exportez manuellement les lignes de journal pertinentes vers un fichier horodaté ; consignez les horaires système exacts et vos propres actions pour garder une piste d'audit propre.

4. **Notez si la personne dispose encore d'un accès actif en ce moment** — toujours employée, en préavis, ou déjà partie. Cela détermine l'urgence avec laquelle le L2 doit agir.
    - **Outil dédié** : recherche du statut employé dans le système RH/IAM.
    - **Alternative CLI / open source** : vérifiez directement dans votre annuaire la dernière authentification réussie du compte et ses appartenances de groupe actuelles.

5. **Confirmez le circuit d'autorisation avant toute suite.** Rien au-delà de la détection et de l'escalade ne doit avancer sans feu vert écrit des parties prenantes appropriées (voir Action L2 1).
    - **Outil dédié** : le workflow d'approbation de votre plateforme de gestion d'incidents.
    - **Alternative CLI / open source** : une approbation écrite simple (email, ou commentaire signé sur un ticket) conservée dans le dossier du cas.

## 5. Actions L2

1. **Impliquez les bonnes personnes avant de continuer.** Généralement les RH, le conseil juridique, et le manager du sujet, aux côtés de votre responsable d'enquête. Rien au-delà de cette étape ne se fait sans leur feu vert.
    - **Outil dédié** : le workflow parties prenantes/approbation de votre plateforme de gestion d'incidents.
    - **Alternative CLI / open source** : une trace écrite (fil d'emails, ticket signé) nommant qui a autorisé quoi, conservée avec le dossier du cas.

2. **Une fois autorisé, gelez l'accès du sujet en une seule fois** — habilitations applicatives, comptes système/de service, accès distant (VPN, tokens), et accès physique (badge) — pour éviter de l'alerter entre deux étapes.
    - **Outil dédié** : révocation en masse depuis la console IAM/PAM, combinée au système de contrôle d'accès physique.
    - **Alternative CLI / open source** : `Disable-ADAccount` ou l'équivalent de votre annuaire pour le compte ; désactivation manuelle du badge via le système du bâtiment ; suppression manuelle des profils VPN/accès distant.

3. **Si le sujet reste au travail en attendant l'issue, réduisez son accès au minimum nécessaire** plutôt que de le supprimer entièrement — cela évite de l'alerter prématurément pendant que vous finissez le cadrage.
    - **Outil dédié** : plateforme d'accès en moindre privilège / juste-à-temps.
    - **Alternative CLI / open source** : ajustez manuellement les appartenances de groupe vers une base restreinte dans votre annuaire.

4. **Enquêtez sans alerter le sujet** : journaux de connexion, historique d'accès aux données, et — avec l'autorisation appropriée — le contenu de ses appareils et comptes professionnels.
    - **Outil dédié** : plateforme d'imagerie forensique, console d'investigation DLP.
    - **Alternative CLI / open source** : outils de forensique standard (ex. un outil d'imagerie disque gratuit, revue de journaux native de l'OS) — voir `runbooks/account-compromise.md` pour la technique générale d'investigation des journaux ; ce runbook couvre ce qui est spécifique à l'angle interne.

5. **Passez en revue tout code, script, tâche planifiée ou automatisation** créé par le sujet ou auquel il avait accès, à la recherche de tout ce qui pourrait servir de porte dérobée ou de mécanisme de sabotage.
    - **Outil dédié** : outil d'audit de gestion de version, chasse à la persistance de l'EDR.
    - **Alternative CLI / open source** : examinez manuellement l'historique des commits et les tâches planifiées/cron sur les systèmes que le sujet administrait ; Sysinternals Autoruns pour la revue de persistance Windows.

6. **Déterminez le périmètre complet** : quelles données ou systèmes ont été accédés, sur quelle période, et ce qui a quitté le contrôle de l'organisation.
    - **Outil dédié** : journal d'activité DLP/CASB, plateforme de classification des données.
    - **Alternative CLI / open source** : corrélez manuellement les horodatages d'accès aux fichiers avec les journaux de transfert sortant (email, upload cloud, support amovible) dont vous disposez.

7. **Si une activité malveillante ou frauduleuse est confirmée, arrêtez l'investigation technique indépendante et transmettez au conseil juridique** — et aux forces de l'ordre, sur leurs instructions — avec les preuves rassemblées. Ne continuez pas à creuser seul au-delà de ce point.
    - **Outil dédié** : fonction d'export de preuves / chaîne de conservation de votre plateforme de gestion de cas.
    - **Alternative CLI / open source** : un dossier de preuves documenté et horodaté (avec les empreintes des fichiers/journaux exportés), remis selon les instructions de votre équipe juridique.

8. **Si rien de malveillant n'est finalement confirmé, restaurez l'accès de la personne et clôturez le dossier discrètement.** Un employé blanchi ne devrait garder aucune trace visible de l'enquête.
    - **Outil dédié** : restauration d'accès depuis la console IAM.
    - **Alternative CLI / open source** : inversez les mêmes étapes manuelles utilisées pour geler l'accès.

## 6. Notifications & escalade

> Escaladez d'abord en interne — informez votre responsable SOC/IR et la direction de ce que vous avez confirmé et de ce qui reste incertain. La décision de notifier une entité externe (CERT national, régulateur, forces de l'ordre) revient à la direction et au service juridique/DPO de votre organisation, pas à l'analyste qui répond à l'incident. Voir `finding-your-csirt.md` si votre organisation a besoin d'aide pour identifier l'organisme externe à contacter.

## 7. Erreurs à éviter

- **Prendre une mesure de confinement — désactiver l'accès, confronter la personne — avant d'avoir obtenu une autorisation écrite.** C'est la règle la plus importante de ce runbook ; la contourner peut créer une exposition légale pour l'organisation.
- **Discuter de l'enquête dans les canaux d'équipe habituels** ou avec des collègues non intégrés au dossier — les cas internes exigent un contrôle de l'information plus strict que la plupart des autres incidents.
- **Poursuivre votre propre investigation technique après confirmation d'une activité malveillante ou frauduleuse.** À partir de ce point, la gestion des preuves suit les instructions de votre équipe juridique, pas la pratique IR standard.
- **Ne geler qu'une partie des accès** (ex. le compte principal) en en laissant d'autres ouverts (VPN, badge physique, comptes de service) — un confinement partiel alerte un employé habile sans réellement l'arrêter.
- **Traiter un dossier blanchi comme dénué de preuves.** Documentez-le quand même — une piste d'audit incomplète est elle-même un risque, même quand rien de malveillant n'est trouvé.
- **Supposer que la remédiation est un problème purement technique.** Les décisions disciplinaires et juridiques sortent du rôle d'un intervenant technique ; votre travail, c'est la preuve, pas le jugement.

## 8. Ressources

- MITRE ATT&CK [T1078](https://attack.mitre.org/techniques/T1078/) — Valid Accounts (pertinent quand l'accès d'un employé parti n'a pas été révoqué).
- MITRE ATT&CK [T1531](https://attack.mitre.org/techniques/T1531/) — Account Access Removal (un motif de sabotage courant : verrouiller les autres en partant).
- MITRE ATT&CK [T1052](https://attack.mitre.org/techniques/T1052/) — Exfiltration Over Physical Medium (le classique chemin d'exfiltration par support amovible).
- Outils cités en exemple : [`auditd`](https://github.com/linux-audit/audit-userspace), la suite [Sysinternals](https://learn.microsoft.com/en-us/sysinternals/) ([Autoruns](https://learn.microsoft.com/en-us/sysinternals/downloads/autoruns), [Sysmon](https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon)), [TheHive](https://github.com/TheHive-Project/TheHive), [MISP](https://www.misp-project.org/), [osquery](https://osquery.io/), outils gratuits d'imagerie disque.

## 9. Sources d'inspiration

- CERT Société Générale — IRM #12 « Insider Abuse » (v2.0) — [github.com/certsocietegenerale/IRM](https://github.com/certsocietegenerale/IRM) — CC BY 3.0 Unported.
- CERT aDvens — IRM-12 « Attaques en interne » (2025-10-27) — [github.com/cert-advens/IRM](https://github.com/cert-advens/IRM) — CC BY 3.0 Unported.
