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

<div class="irf-features" markdown>

<div class="irf-feature-card" markdown>
**🌐 Cœur technique universel**
<br>
Chaque action du runbook propose deux voies :
- **Outil dédié** (CrowdStrike, SentinelOne, Splunk) 
- **Alternative CLI & open source** (`tasklist`, `netstat`, Sysinternals, Volatility)
<br>
_un analyste sans EDR peut exécuter 100 % du runbook avec ce qui est natif._
</div>

<div class="irf-feature-card" markdown>
**💰 Bas du spectre (low-resource first)**
<br>
Le projet supprime toute dépendance à un outil commercial comme prérequis.
Les variantes commerciales sont un bonus, jamais une porte d'entrée.
</div>

<div class="irf-feature-card" markdown>
**🌍 Bilingue FR/EN par construction**
<br>
- L'anglais est la langue de référence (cohérence MITRE, NIST, CISA)
- Le français est une traduction de qualité égale, jamais un résumé
- Règle d'or : une PR de runbook n'est mergeable que si elle livre les deux langues
</div>

<div class="irf-feature-card" markdown>
**✅ Qualité vérifiable, jamais déclarée**
<br>
Le passage en v1.0 n'est déclenché que par la fermeture d'une Issue
`real-world-tested` sur ce runbook. La qualité est une preuve, pas une opinion.
</div>

</div>

## Comment un runbook est construit

Chacun suit la même forme : les signaux qui indiquent de l'ouvrir, des
objectifs de temps internes pour le confinement et l'éradication, un
arbre de décision, des actions numérotées pour la première réponse et
pour l'investigation approfondie, un renvoi générique vers l'autorité de
votre propre juridiction — jamais une autorité précise — et ce qui
détruit les preuves si on s'y prend mal.

## Quoi de l'intérieur

Dix scénarios d'incident, chacun sous forme de runbook complet (critères
de déclenchement, objectifs de temps, arbre de décision, actions
numérotées L1/L2, et écueils à éviter) plus une check-list d'aide-mémoire
d'une page.

- **Rançongiciel — 0.1 (brouillon)** ⧗
- **Compromission de compte — 0.1 (brouillon)** ⧗
- **Hameçonnage / BEC — 0.1 (brouillon)** ⧗
- **DDoS — 0.1 (brouillon)** ⧗
- **Compromission web — 0.1 (brouillon)** ⧗
- **Vulnérabilité critique (exploitation active) — 0.1 (brouillon)** ⧗
- **Compromission de chaîne d'approvisionnement — 0.1 (brouillon)** ⧗
- **Fuite de données — 0.1 (brouillon)** ⧗
- **Menace interne — 0.1 (brouillon)** ⧗
- **Infection malware — 0.1 (brouillon)** ⧗

_Chaque runbook est doublé d'une quick-reference : une page = une checklist
L1 condensée (10–15 actions ordonnées), conçue pour être imprimée et utilisée
en pleine crise._

## Contribuer

Vous avez utilisé l'un d'eux lors d'un incident réel ? C'est la chose la
plus précieuse que vous puissiez rapporter — c'est littéralement ce qui
fait passer un runbook en v1.0. Un scénario manquant, ou une section
française qui sonne comme une traduction plutôt que comme le vrai
contenu ? Même porte, autre sujet.

<div class="irf-cta" markdown>
> **Votre incident réel peut faire passer un runbook en v1.0.**
> Partagez votre expérience via une issue `Feedback` — c'est la contribution
> la plus précieuse que ce projet puisse recevoir.
</div>

[Comment contribuer →](contributing.md)

---

<div class="irf-disclaimer" markdown>
> **Ces runbooks sont un guide technique, pas un conseil juridique.**
> Ils ne contiennent volontairement aucun délai légal spécifique à une
> juridiction et ne nomment aucune agence gouvernementale comme étape
> obligatoire — voir [`finding-your-csirt.md`](fr/finding-your-csirt.md)
> pour identifier qui contacter, et consultez votre propre conseil
> juridique pour vos obligations de notification.
</div>

Le contenu est publié sous licence
[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
