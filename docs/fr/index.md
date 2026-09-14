<div class="irf-hero" markdown>
<span class="irf-kicker">OPEN SOURCE, CONSTRUIT AU GRAND JOUR</span>

# La première réponse ne devrait pas dépendre de votre budget.

La plupart des guides de réponse à incident sont écrits pour la
législation d'un seul pays, la console d'un seul éditeur, ou une équipe
ayant les moyens d'acheter les deux. Ce projet non. Chaque action ici
fonctionne que vous ayez un EDR commercial ou un poste Windows sans rien
d'installé dessus.
</div>

## Le problème

Les analystes L1 et L2 gèrent la majorité des incidents. Ce qu'on leur
donne pour travailler tient généralement en trois catégories : enfermé
dans le wiki interne d'une seule organisation, écrit autour de la
réglementation d'un seul pays, ou construit autour de la console d'un
seul éditeur. Rien de tout ça n'aide un analyste dans une petite équipe,
dans un pays que les auteurs d'origine n'ont jamais envisagé, sans
l'outillage que le runbook suppose silencieusement.

Les leçons du terrain — ce qui a vraiment fonctionné, ce qu'un objectif
« 30 minutes » a réellement pris — restent le plus souvent dans le Slack
privé d'une équipe, au lieu de nourrir la documentation que tout le
monde utilise.

## Ce qui change ici

- **Le cœur technique est universel.** Aucun nom d'agence, aucune
  exigence d'éditeur, aucun délai légal ne vit dans le corps d'un
  runbook. Jamais.
- **Chaque action a un chemin gratuit.** Chaque étape propose un outil
  dédié et une alternative CLI/open source obtenant le même résultat —
  un analyste avec seulement les outils natifs de l'OS peut exécuter le
  runbook en entier.
- **Bilingue par construction.** Anglais et français, même structure,
  même profondeur — pas un résumé dans une langue et le vrai contenu
  dans l'autre.
- **La qualité se prouve, elle ne se déclare pas.** Un runbook reste un
  brouillon jusqu'à ce que quelqu'un rapporte qu'il a tenu lors d'un
  incident réel. Personne — pas même les mainteneurs — ne marque son
  propre travail « validé ».

## Comment un runbook est construit

Chacun suit la même forme : les signaux qui indiquent de l'ouvrir, des
objectifs de temps internes pour le confinement et l'éradication, un
arbre de décision, des actions numérotées pour la première réponse et
pour l'investigation approfondie, un renvoi générique vers l'autorité de
votre propre juridiction — jamais une autorité précise — et ce qui
détruit les preuves si on s'y prend mal.

[Parcourir les runbooks →](runbooks/index.md)

## Contribuer

Vous avez utilisé l'un d'eux lors d'un incident réel ? C'est la chose la
plus précieuse que vous puissiez rapporter — c'est littéralement ce qui
fait passer un runbook en v1.0. Un scénario manquant, ou une section
française qui sonne comme une traduction plutôt que comme le vrai
contenu ? Même porte, autre sujet.

[Comment contribuer →](contributing.md)

---

Le contenu est publié sous licence
[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
