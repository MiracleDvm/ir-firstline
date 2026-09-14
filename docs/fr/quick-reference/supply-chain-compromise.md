# Compromission tierce-partie / supply chain — Aide-mémoire

**Statut :** 0.1 (brouillon) — dérivé de [`runbooks/supply-chain-compromise.md`](../runbooks/supply-chain-compromise.md) ; ne pas modifier indépendamment.
{: .irf-status }

- [ ] 1. Confirmez le signal par rapport à votre inventaire fournisseurs/accès — que peut réellement atteindre ce tiers dans votre environnement ?
- [ ] 2. Coupez ou suspendez immédiatement l'interconnexion si la compromission est confirmée, ou si elle n'est pas critique pour l'activité.
- [ ] 3. Désactivez tout compte, clé API, ou identifiant dédié à ce tiers.
- [ ] 4. Mettez en quarantaine ou filtrez l'email du fournisseur plutôt que de le bloquer entièrement — vous aurez peut-être encore besoin de ses mises à jour.
- [ ] 5. Préservez les logs de l'interconnexion (trafic, authentification, appels API) avant qu'ils ne sortent de la rétention.
- [ ] 6. Escaladez vers le L2 avec le fournisseur, le périmètre d'accès, et si du trafic critique pour l'activité est en jeu.
- [ ] 7. Établissez un canal direct et hors bande avec l'équipe sécurité du fournisseur.
- [ ] 8. Déterminez le périmètre complet de ce que le fournisseur pouvait atteindre — systèmes, données, identifiants.
- [ ] 9. Recherchez des indicateurs de mouvement latéral depuis le point d'accès du fournisseur vers votre environnement.
- [ ] 10. Si le fournisseur livre du logiciel, vérifiez si vous exécutez la version compromise et validez les mises à jour contre des sommes de contrôle.
- [ ] 11. Demandez un rapport d'incident formel et une liste d'IOC à jour au fournisseur.
- [ ] 12. Coordonnez un confinement conjoint avec l'équipe sécurité du fournisseur.
- [ ] 13. Vérifiez de manière indépendante — pas seulement sur la parole du fournisseur — avant de rouvrir, et faites tourner chaque identifiant partagé.
- [ ] 14. Réévaluez le profil de risque du fournisseur et le périmètre de son accès pour l'avenir.
- [ ] 15. Escaladez d'abord en interne — informez votre responsable SOC/IR et la direction de ce que vous avez confirmé et de ce qui reste incertain. La décision de notifier une entité externe (CERT national, régulateur, forces de l'ordre) revient à la direction et au service juridique/DPO de votre organisation, pas à l'analyste qui répond à l'incident. Voir `finding-your-csirt.md` si votre organisation a besoin d'aide pour identifier l'organisme externe à contacter.
