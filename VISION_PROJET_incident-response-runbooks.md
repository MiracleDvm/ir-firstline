# VISION DU PROJET — Incident Response Runbooks (Collaboratifs)

> Document de référence — Version 1.4 — 13 septembre 2026
> Statut : périmètre stabilisé, prêt pour implémentation

---

## 1. En une phrase

**Une collection open source de runbooks d'incident response (L1/L2), bilingues français/anglais,
conçus pour être utilisables par n'importe quel analyste SOC dans n'importe quelle organisation,
sous n'importe quelle juridiction — y compris les structures à faibles ressources.**

---

## 2. Le problème

### 2.1 Constat

Les analystes L1/L2 sont les premiers répondants de 90 % des incidents. Or :

- Les runbooks existants sont soit **propriétaires** (internes aux grands SOC, EDR vendors),
  soit **juridictionnellement biaisés** (écrits pour les US, ou l'UE, avec des références
  FBI/CISA/ANSSI codées en dur) ;
- Les CERTs nationaux publient d'excellentes méthodologies (IRM du CERT Société Générale,
  playbooks CISA, playbooks Microsoft), mais **éparses, monolingues, et jamais pensées
  pour la contribution communautaire** ;
- Un L1 en Afrique de l'Ouest, en Amérique latine ou dans un PME européenne n'a ni les
  mêmes outils (pas d'EDR, pas de SIEM commercial), ni les mêmes obligations légales,
  ni le même budget — **aucune ressource existante n'est neutre à l'égard de ces réalités** ;
- Les retours d'expérience réels ("ça a marché en production", "le délai annoncé est
  irréaliste") restent **enfermés dans les Slack/Discord des équipes** au lieu d'enrichir
  la documentation.
- Le NIST lui-même reconnaît ce vide : sa Rev. 3 de SP 800-61 (avril 2025) abandonne
  volontairement le contenu procédural détaillé qu'avait la Rev. 2, expliquant que les
  spécificités opérationnelles de la réponse à incident évoluent trop vite et varient
  trop d'un contexte à l'autre pour rester figées dans une publication statique unique —
  et renvoie vers des ressources maintenues en continu. C'est exactement le vide que ce
  projet vient combler : des runbooks procéduraux, versionnés, maintenus par une
  communauté plutôt que par un cycle de publication figé.

### 2.2 Conséquence

En crise, l'analyste improvisé :
- éteint la machine compromise (destruction des preuves volatiles) ;
- ignore qu'il doit notifier une autorité ;
- suit une procédure conçue pour un outil qu'il ne possède pas ;
- perd un temps précieux à chercher qui contacter.

---

## 3. La réponse du projet

### 3.1 Ce que le projet EST

- Une **collection de runbooks techniques** (Markdown) couvrant les scénarios L1/L2
  les plus fréquents : **Ransomware, Phishing/BEC, Compromission de compte** (v1) ;
- Un **site statique** (MkDocs Material, hébergé sur GitHub Pages) bilingue FR/EN,
  consultable en ligne et **exploitable hors-ligne** ;
- Une **méthodologie de contribution** : chaque runbook s'améliore par les retours
  d'expérience de la communauté, traçables via les Issues GitHub ;
- Une **philosophie d'universalité** : aucune dépendance à un outil commercial,
  aucune référence à une juridiction unique.

### 3.2 Ce que le projet N'EST PAS

- ❌ Pas un outil logiciel (pas de code d'exécution — de la documentation) ;
- ❌ Pas une base de données juridique (aucun délai légal chiffré, aucun conseil juridique) ;
- ❌ Pas un framework de SOC managé (les runbooks s'adaptent, ils ne prescrivent pas l'infra) ;
- ❌ Pas un projet de formation/certification (le public sait déjà faire, il lui faut
  une procédure fiable sous la main).

### 3.3 Différenciation

| Existant | Leur limite | Notre position |
|---|---|---|
| IRM CERT Société Générale | Monolingue, pas contributif | Inspirés d'eux (CC BY 3.0), ouverts aux retours d'XP |
| Playbooks CISA | Centrés US (FBI, agences fédérales) | Universels : annuaire CERT mondial, zéro agence codée en dur |
| Playbooks Microsoft | Stack M365 assumée | Variante CLI/open source systématique |
| Docs internes des SOC | Propriétaires, inaccessibles | Open source, CC BY 4.0 |
| Dépôts portfolio individuels (playbooks personnels d'analystes) | Portfolio individuel, non validé | Gouvernance collective, critère de validation public (`real-world-tested`) |

---

## 4. Les cinq principes fondateurs

### P1 — Cœur technique universel

Les actions L1/L2 (isoler, préserver, éradiquer, restaurer) sont **identiques partout dans le monde**.
Le cœur des runbooks ne contient donc **jamais** :
- de nom d'agence (FBI, CISA, ANSSI, DGSSI...) ;
- de nom d'outil commercial comme prérequis ;
- de chiffre réglementaire (délai de notification).

Le juridictionnel et l'outillage commercial vivent **en périphérie** (annuaire CERT,
variantes « outil dédié »), jamais dans le chemin critique.

### P2 — Bas du spectre (low-resource first)

Pour **chaque** action technique, le motif obligatoire :

> **Outil dédié** (ex. CrowdStrike, SentinelOne) / **Alternative CLI & open source**
> (ex. `tasklist`, `netstat`, Sysinternals, Volatility, TheHive)

Un L1 sans EDR, dans un SOC sous-équipé, doit pouvoir exécuter **100 % du runbook**
avec ce qui est gratuit et natif. Les variantes commerciales sont un bonus, pas une porte d'entrée.

### P3 — Bilingue FR/EN par construction

- L'**anglais est la langue de référence** (cohérence avec MITRE, NIST, CISA, communauté internationale) ;
- Le **français est une traduction de qualité égale**, maintenue par l'auteur ;
- Règle de contribution : *« Une PR de runbook n'est mergeable que si elle livre les deux langues »* ;
- Après FR/EN, l'architecture i18n (`mkdocs-static-i18n`) accueillera ES / PT / AR
  dès qu'un contributeur les demande réellement — **on ne tranche pas ces langues aujourd'hui**.

### P4 — Qualité vérifiable, pas déclarée

Le passage d'un runbook en version **1.0 (validé)** est conditionné à la fermeture d'au moins
une Issue **`real-world-tested`** sur ce runbook (retour d'expérience d'un usage en production).
Un runbook sans retour réel reste en **0.x (brouillon/revue)**. La qualité est une preuve,
pas une opinion.

### P5 — Séparation stricte technique / juridique

- Aucun délai légal, aucun texte de loi détaillé : ce serait un projet de veille juridique
  permanent que personne n'a la compétence de maintenir, et **une erreur de délai légal cause
  un préjudice réel** (contrairement à une section technique incomplète, qui ne coûte qu'une friction) ;
- À la place : un fichier **`finding-your-csirt.md`** (annuaire FIRST — 878 équipes,
  118 pays — + corps régionaux AfricaCERT, CSIRTAmericas, APCERT, TF-CSIRT/ENISA) ;
- Chaque runbook garde l'étape générique :
  > « Notifiez votre autorité compétente (CERT national, DPO, régulateur) selon la
  > réglementation applicable à votre juridiction — consultez votre conseil juridique. »
  Le pointeur règle le « qui », la phrase règle le « pensez-y ».

---

## 5. Architecture du dépôt

```
ir-firstline/
├── docs/                          # Anglais (langue de référence)
│   ├── index.md                   # Accueil + comment contribuer
│   ├── finding-your-csirt.md      # Annuaire CERT mondial (pas de droit comparé)
│   ├── runbooks/
│   │   ├── ransomware.md
│   │   ├── phishing-bec.md
│   │   └── account-compromise.md
│   ├── quick-reference/           # Checklists L1 condensées (usage en crise)
│   │   ├── ransomware.md
│   │   ├── phishing-bec.md
│   │   └── account-compromise.md
│   ├── templates/                 # Templates de contribution
│   │   ├── runbook-template.md
│   │   └── quick-reference-template.md
│   └── contributing.md
├── docs/fr/                       # Miroir français complet
│   └── (même arborescence)
├── .github/
│   └── ISSUE_TEMPLATE/
│       ├── feedback.md            # Retour d'expérience (-> label real-world-tested)
│       ├── new-runbook.md         # Demande de nouveau scénario
│       └── missing-translation.md # Traduction manquante / correction
├── mkdocs.yml                     # Material + mkdocs-static-i18n (en default, fr)
├── README.md                      # Bilingue, badges, disclaimer
├── LICENSE                        # CC BY 4.0
├── CONTRIBUTING.md
└── .gitignore
```

### Stack technique

| Besoin | Choix | Pourquoi |
|---|---|---|
| Site statique | MkDocs + Material for MkDocs | Gratuit, search intégré, Mermaid natif, standard de l'industrie |
| Bilinguisme | `mkdocs-static-i18n` | Sélecteur de langue, nav traduite, recherche par langue |
| Arbres de décision | Mermaid (labels neutres, identiques FR/EN) | Lisible en crise, versionné en git |
| Hébergement | GitHub Pages | Gratuit, proche du dépôt = proche des contributeurs |
| CI/CD | **Reporté** (pas de GitHub Actions en v1) | `mkdocs gh-deploy` local suffit ; l'automatisation n'est pas prioritaire |
| PDF hors-ligne | Plugin d'impression simple | Usage en crise sans connectivité fiable ; **pas** de pipeline pandoc/LaTeX |
| Licences contenus sources | CC BY 3.0 (IRM), Apache 2.0 (counteractive) | Vérifiées ; attribution obligatoire dans la section « Sources d'inspiration » |

---

## 6. Standard d'un runbook

Chaque runbook suit ce squelette (les deux langues) :

1. **Critères de déclenchement** — les signaux concrets qui ouvrent le runbook ;
2. **Objectifs de temps** — L1 : contenir < 30 min ; L2 : éradiquer < 4 h ;
3. **Arbre de décision Mermaid** — labels courts et neutres ;
4. **Actions L1** — numérotées, chacune au motif Outil dédié / Alternative CLI-open source ;
5. **Actions L2** — investigation, éradication ;
6. **Notifications & escalade** — étape générique + renvoi `finding-your-csirt.md` ;
7. **Erreurs à éviter** — ce qui détruit des preuves ou aggrave la crise ;
8. **Ressources** — MITRE ATT&CK (ex. T1486 pour le ransomware), outils ;
9. **Sources d'inspiration** — attribution licence des références consultées.

Chaque runbook est doublé d'une **quick-reference** : une page = une checklist L1 condensée
(10–15 actions ordonnées), conçue pour être imprimée et utilisée en pleine crise.

---

## 7. Modèle collaboratif

### 7.1 Entrées en contribution (Issues GitHub)

| Template | Label | Contenu |
|---|---|---|
| Retour d'expérience | `feedback` (+ `real-world-tested` si usage réel) | Contexte, ce qui a fonctionné/manqué, timeline réelle vs objectifs |
| Nouveau scénario | `enhancement` | Scénario proposé, fréquence, complexité, données sources |
| Traduction manquante | `translation` | Français ou anglais — entrée en douceur pour les non-techniciens |

### 7.2 Gouvernance

- **CODEOWNERS** : l'auteur est reviewer principal sur `docs/runbooks/` ;
- **Labels** : `feedback`, `enhancement`, `translation`, `L1-only`, `L2-required`,
  `needs-validation`, `real-world-tested` ;
- **Règle des deux langues** : une PR de runbook livre EN + FR ou n'est pas mergée ;
- **Critère de v1.0** : au moins une Issue `real-world-tested` fermée sur le runbook.

### 7.3 Position sur les annexes pays

Si un contributeur propose un jour une note détaillée sur sa juridiction : bienvenue en PR,
mais **jamais dans les runbooks, les quick-references, le README ou `docs/index.md`**
(P5 y reste absolu). Elle prend place dans un dossier séparé, non créé en v1 —
`docs/community-notes/` —, avec la bannière « contribuée par la communauté, non
vérifiée par les mainteneurs, à valider localement ». Le projet ne *porte* pas cette
responsabilité, il l'*héberge*, et seulement à l'écart du cœur technique.

---

## 8. Feuille de route

### Phase 1 — Fondation (semaine 1)
Scaffolding du dépôt, `mkdocs.yml` + i18n FR/EN, templates (runbook + quick-reference, EN+FR).

### Phase 2 — Contenu core (semaines 2–3)
Ransomware EN+FR (priorité absolue) → Compromission de compte EN+FR. Méthode : consulter
les sources de référence (IRM-2022, counteractive, playbooks Microsoft), synthétiser,
rédiger du contenu original dans notre template.

### Phase 3 — Collaboration (semaine 4)
Templates d'Issues, CONTRIBUTING.md, `finding-your-csirt.md`, labels, CODEOWNERS.

### Phase 4 — Diffusion (semaine 5)
Activation GitHub Pages, première Issue « test » ouverte par l'auteur, annonce
(LinkedIn, communautés r/cybersecurity, Discord SOC).

### Phase 5 — Complétion (semaine 6+)
Phishing/BEC EN+FR, éventuel 4e runbook, export PDF simple.

### Mois 2 (hors v1, à décider plus tard)
CI/CD GitHub Actions, langues supplémentaires (ES/PT/AR), export JSON des arbres de décision
pour TheHive/Cortex, notes juridictionnelles communautaires non endossées.

---

## 9. Sources de référence (vérifiées)

| Source | Nature | Licence / statut |
|---|---|---|
| `certsocietegenerale/IRM` (IRM-2022) | Méthodologies d'IR par type d'incident — **dépôt actif** (⚠️ ne pas confondre avec `IRM-deprecated`) | CC BY 3.0 — attribution requise |
| `cert-advens/IRM` | Traduction française de référence des IRM | CC BY 3.0 |
| `counteractive/incident-response-plan-template` | Playbooks ransomware/phishing, scénarios de déclenchement concrets | Apache 2.0 — NOTICE préservé |
| Playbooks Microsoft (MicrosoftDocs/security) | Phishing, password spray, app consent grant — **réf. n°1 compromission de compte M365** | Licence permissive |
| Playbooks CISA (2021) | Phases standard (déclaration → leçons apprises) | Domaine public (gouv. US) — seule source réutilisable verbatim |
| NIST SP 800-61 Rev. 3 (avril 2025) — remplace la Rev. 2, retirée | Référence normative, restructurée autour des fonctions du NIST CSF 2.0 | Domaine public — `csrc.nist.gov/pubs/sp/800/61/r3/final` |
| FIRST (first.org) | Annuaire : 878 équipes, 118 pays | Annuaire public |
| AfricaCERT / CSIRTAmericas / APCERT / TF-CSIRT | Corps régionaux — points d'entrée mondiaux | Publics |
| World Bank, *Digital First Responders* (2024) | Réalité des CSIRTs low-resource — justifie le principe P2 | Rapport public |
| awesome-incident-response | Inventaire d'outils (TheHive, MISP, Volatility, Sysmon...) | Liste communautaire |
| mermaid.live | Éditeur pour tester les arbres de décision | Gratuit |

---

## 10. Mesures de succès

| Horizon | Indicateur | Cible indicative |
|---|---|---|
| 1 mois | Site en ligne, 2 runbooks publiés (Ransomware, Compromission de compte — EN+FR), templates d'Issues actifs | 100 % |
| 3 mois | Premières Issues de retour d'expérience externes | ≥ 3 |
| 6 mois | Premier runbook passé en v1.0 (Issue `real-world-tested` fermée) | ≥ 1 |
| 12 mois | Contributeurs externes distincts (PR mergées) | ≥ 5 |
| Continu | Issues contestant une information de `finding-your-csirt.md` | Suivi ouvert (métrique observable, pas de cible fixe) |

---

## 11. Risques identifiés et parades

| Risque | Parade |
|---|---|
| Contenu recopié d'une source non libre | Méthode « consulter → synthétiser → rédiger du neuf » ; section « Sources d'inspiration » systématique |
| Drift FR/EN (les traductions dérivent du référentiel) | Règle des deux langues par PR ; label `translation` ; anglais fait foi |
| Runbooks théoriques jamais testés | Critère `real-world-tested` pour la v1.0 ; objectifs de temps explicites pour challenger la réalité |
| Portée qui gonfle (juridique, multi-langue, SIEM export) | Ce document — le périmètre non prioritaire est listé en « Mois 2, à décider » |
| Références légales périmées publiées par un contributeur | P5 : le cœur du projet (runbooks, README, index) n'héberge que des annuaires (FIRST) et des disclaimers, jamais de chiffres — une contribution communautaire détaillée reste possible mais isolée dans `docs/community-notes/`, non endossée, jamais dans le chemin critique |
| Stack outil obsolète (MkDocs, i18n) | Stack standard, peu de dépendances, aucune action requise pour rester lisible (Markdown brut) |

---

## 12. Identité et positionnement

- **Nom** : Incident Response Runbooks (collaboratifs) ;
- **Nom du dépôt GitHub** : `ir-firstline` ;
- **Licence** : CC BY 4.0 (contenu) ;
- **Ton** : impératif, direct, orienté crise (« Isolez. Préservez. Notifiez. ») ;
- **Public** : analystes L1/L2, étudiants en SOC, petites structures sans documentation IR,
  contributeurs CERT/CSIRT mondiaux ;
- **Promesse** : *« Ouvrez le bon runbook, suivez la checklist, sauvez votre organisation —
  quel que soit votre outillage, quel que soit votre pays. »*
