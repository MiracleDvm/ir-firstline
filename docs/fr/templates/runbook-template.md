# Modèle de runbook

> Copiez ce fichier vers `docs/runbooks/<scenario>.md` **et** son miroir vers
> `docs/fr/runbooks/<scenario>.md` lorsque vous démarrez un nouveau runbook.
> Gardez les neuf mêmes sections, dans le même ordre, avec le même niveau de
> détail, dans les deux langues — un runbook n'est pas livré tant que les
> deux versions n'existent pas.
>
> Avant de rédiger : un runbook porte le statut **0.x (brouillon)**. Il ne
> passe en **v1.0 (validé)** que lorsqu'une Issue `real-world-tested` est
> fermée à son sujet — ne t'attribue jamais ce statut toi-même.

**Statut :** 0.1 (brouillon)
{: .irf-status }

---

## 1. Critères de déclenchement

Liste les signaux concrets et observables qui signifient « ouvrir ce
runbook » — types d'alertes, signalements utilisateurs, motifs de logs.
Sois assez précis pour qu'un analyste puisse s'auto-diagnostiquer sans
deviner quel runbook s'applique.

## 2. Objectifs de temps

Indique les objectifs opérationnels internes pour ce scénario, par exemple :

- **L1 :** contenir en < 30 min après déclenchement.
- **L2 :** éradiquer en < 4 h après confinement.

Ce sont des cibles de travail que l'équipe doit challenger avec des données
réelles — pas des délais réglementaires. Ne formule jamais cette section
comme une obligation légale ou contractuelle.

## 3. Arbre de décision

Utilise des labels Mermaid courts et clairs. Traduis-les dans la langue
cible — le lecteur voit ce diagramme sur une page par ailleurs entièrement
traduite, donc un diagramme resté en anglais sur la version française
sonne cassé. Garde les mêmes identifiants de nœuds, flèches et logique de
branchement dans les deux versions, pour que les deux diagrammes ne
divergent jamais structurellement, même si leur texte visible diffère.

Utilise `flowchart LR` (gauche à droite), pas `TD` — un arbre vertical de
10 étapes ou plus devient très long et impose un défilement lourd. Encadre-le
dans un bloc repliable (`???+ note "..."`, ouvert par défaut) pour qu'il ne
domine pas la page et que le lecteur puisse le replier une fois vu :

```markdown
???+ note "Arbre de décision — cliquer pour réduire"

    ```mermaid
    flowchart LR
        A[Alerte] --> B{Isoler ?}
        B -->|Oui| C[Préserver les preuves]
        B -->|Non| D[Poursuivre la surveillance]
        C --> E[Escalade L2]
        D --> A
    ```
```

## 4. Actions L1

Numérotées, classées par priorité. **Chaque** action technique doit proposer
les deux options — un analyste sans EDR ni SIEM commercial doit pouvoir
exécuter 100 % du runbook avec la seule colonne gratuite/open source :

1. **Nom de l'action** — quoi faire et pourquoi c'est important maintenant.
   - **Outil dédié** (ex. CrowdStrike, SentinelOne, Splunk) : étape concrète
     avec cet outil.
   - **Alternative CLI / open source** (ex. `tasklist`, `netstat`,
     Sysinternals, Volatility) : étape concrète obtenant le même résultat.

## 5. Actions L2

Même format numéroté et même motif Outil dédié / Alternative CLI-open source
que la section 4, pour l'investigation et l'éradication.

1. **Nom de l'action** — étape d'investigation ou d'éradication.
   - **Outil dédié** (ex. ...) : ...
   - **Alternative CLI / open source** (ex. ...) : ...

## 6. Notifications & escalade

Utilise exactement ce texte générique (traduit, jamais complété par un
chiffre) — ne nomme jamais une autorité précise ni un délai de
notification :

> Escaladez d'abord en interne — informez votre responsable SOC/IR et la direction de ce que vous avez confirmé et de ce qui reste incertain. La décision de notifier une entité externe (CERT national, régulateur, forces de l'ordre) revient à la direction et au service juridique/DPO de votre organisation, pas à l'analyste qui répond à l'incident. Voir `finding-your-csirt.md` si votre organisation a besoin d'aide pour identifier l'organisme externe à contacter.

## 7. Erreurs à éviter

Ce qui détruit des preuves ou aggrave l'incident — ex. extinction prématurée
d'un hôte compromis, restauration depuis une sauvegarde contaminée avant
d'avoir identifié la cause racine.

## 8. Ressources

Références uniquement — c'est la seule section (avec la §9) autorisée à
nommer des organismes ou standards externes :

- Techniques MITRE ATT&CK pertinentes pour ce scénario (ex. `T1486` pour le
  ransomware).
- Outils cités en exemple (noms de projets open source, jamais un argumentaire
  commercial).

## 9. Sources d'inspiration

Cite chaque source réellement consultée pendant la recherche pour ce
runbook, avec sa licence. Méthode : consulter → synthétiser → rédiger du
texte original — ne jamais copier un paragraphe source tel quel.

- Nom de la source — URL — licence.
