# IR Firstline

Collection open source de runbooks d'incident response bilingues (EN/FR)
pour analystes SOC L1/L2 — utilisable dans n'importe quelle organisation,
sous n'importe quelle juridiction, y compris les structures à faibles
ressources sans EDR ni SIEM commercial.

Ouvrez le runbook correspondant à votre incident, suivez la checklist,
contenez la situation — quel que soit votre outillage, quel que soit votre
pays.

## État du projet

Les trois runbooks prévus pour la v1 sont disponibles : **Ransomware**,
**Compromission de compte**, et **Phishing/BEC** — tous au statut brouillon
(0.x). Un runbook ne passe en v1.0 qu'une fois qu'un retour d'expérience
réel confirme qu'il a fait ses preuves lors d'un incident — voir
[Contribuer](contributing.md).

## Fonctionnement

- **Runbooks** (`docs/runbooks/`) — procédures complètes : critères de
  déclenchement, objectifs de temps, arbre de décision, actions L1/L2,
  notifications & escalade, erreurs à éviter, ressources et sources.
- **Aide-mémoire** (`docs/quick-reference/`) — une checklist condensée et
  imprimable, dérivée de chaque runbook, pour un usage en pleine crise.
- **Chaque action technique** propose deux options : un outil commercial
  dédié, et une alternative CLI/open source gratuite obtenant le même
  résultat — voir les modèles dans `docs/templates/` pour le motif exact.
- **Aucune juridiction n'est présumée.** Les runbooks ne nomment jamais une
  agence gouvernementale précise ni un délai légal chiffré. Quand une
  notification est nécessaire, voir
  [Trouver son CSIRT](finding-your-csirt.md) — un annuaire de CERT nationaux
  et régionaux pour identifier qui contacter.

## Contribuer

Voir [Contribuer](contributing.md) pour savoir comment soumettre un retour
d'expérience réel, proposer un nouveau scénario, ou corriger une traduction
— les templates d'Issues sont en place pour les trois.

## Licence

Le contenu est publié sous licence
[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
