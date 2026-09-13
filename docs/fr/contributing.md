# Contribuer

Merci de vouloir améliorer ces runbooks. Ce projet existe parce que la
connaissance en réponse à incident reste trop souvent enfermée dans les
canaux privés de chaque équipe au lieu d'être publiée là où le prochain
analyste pourra la trouver.

## Comment contribuer

### 1. Retour d'expérience réel

Vous avez utilisé un runbook lors d'un incident réel, ou lors d'un exercice
sur table ? Ouvrez une issue **Feedback**. Un runbook n'atteint le statut
**v1.0 (validé)** qu'une fois qu'au moins une issue de retour d'expérience
`real-world-tested` a été fermée à son sujet. Dites-nous : le contexte, ce
qui a fonctionné, ce qui manquait, et comment votre chronologie réelle
s'est comparée aux objectifs de temps du runbook.

### 2. Proposer un nouveau scénario

Vous pensez qu'un autre type d'incident mérite un runbook ? Ouvrez une issue
**Nouveau scénario** en décrivant : sa fréquence, sa complexité approximative
(L1 seul ou L2 nécessaire), et toute source qui mériterait d'être consultée.

### 3. Corriger ou ajouter une traduction

Vous avez trouvé une incohérence entre les versions anglaise et française,
ou une section manquante dans une langue ? Ouvrez une issue **Traduction
manquante**. Aucune connaissance en cybersécurité n'est requise — c'est une
bonne première contribution si vous êtes bilingue.

## Règles pour les pull requests touchant aux runbooks

- **Deux langues, une seule PR.** Une PR de runbook, d'aide-mémoire ou de
  modèle livre l'anglais *et* le français ensemble, avec la même structure
  de sections. Une PR ne livrant qu'une seule langue ne sera pas mergée.
- **Chaque action technique nécessite les deux options.** Un outil
  commercial dédié *et* une alternative CLI/open source gratuite obtenant
  le même résultat — reprenez le motif de
  `docs/templates/runbook-template.md`.
- **Aucun contenu spécifique à une juridiction dans le corps du runbook.**
  Aucun nom d'agence gouvernementale, aucun délai légal chiffré. Si vous
  avez des connaissances détaillées sur les exigences de votre
  juridiction, voir « Annexes juridictionnelles » ci-dessous.
- **Le statut commence à 0.x (brouillon).** Ni les contributeurs ni les
  mainteneurs ne s'attribuent eux-mêmes le statut v1.0 — il n'est atteint
  que lorsqu'une issue `real-world-tested` est fermée sur le runbook.
- **La recherche avant la rédaction.** Le contenu d'un nouveau runbook est
  rédigé en consultant les sources, en les synthétisant, puis en écrivant
  un texte original dans le style du projet. Ne copiez jamais un
  paragraphe source tel quel au-delà d'une courte citation attribuée.

## Annexes juridictionnelles

Ce projet garde délibérément les spécificités légales et réglementaires en
dehors de son cœur — un délai légal périmé publié sur un site statique est
pire que l'absence de délai. Si vous avez des
connaissances détaillées sur les exigences de notification de votre
juridiction et souhaitez les partager, ouvrez une issue décrivant ce que
vous proposez ; un mainteneur vous confirmera qu'elles ne peuvent vivre que
comme une note communautaire non endossée, séparée des runbooks eux-mêmes,
jamais dans un runbook, un aide-mémoire, ou la page d'accueil du site.

## Revue

`docs/runbooks/` est revu en priorité par les personnes listées dans
`CODEOWNERS` à la racine du dépôt.
