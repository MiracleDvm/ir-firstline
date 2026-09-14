# Fuite / exposition de données — Aide-mémoire

**Statut :** 0.1 (brouillon) — dérivé de [`runbooks/data-leak.md`](../runbooks/data-leak.md) ; ne pas modifier indépendamment.

- [ ] 1. Confirmez que l'exposition est réelle, sensible, et réellement accessible.
- [ ] 2. Stoppez immédiatement l'exposition en cours — révoquez l'accès, mettez la ressource hors ligne, ou bloquez le destinataire/l'URL.
- [ ] 3. Préservez les preuves (métadonnées, horodatages, chemin exact) sans télécharger plus que nécessaire pour confirmer le périmètre.
- [ ] 4. Faites-vous une première idée de la cause probable : mauvaise configuration, attaquant externe, ou action d'un utilisateur légitime.
- [ ] 5. Vérifiez la même mauvaise configuration sur les ressources similaires.
- [ ] 6. Escaladez vers le L2 avec ce qui a été exposé, depuis quand, et la cause probable.
- [ ] 7. Déterminez exactement quelles données ont été exposées et leur sensibilité.
- [ ] 8. Déterminez depuis combien de temps l'exposition dure et qui aurait pu y accéder.
- [ ] 9. Vérifiez si les données se sont déjà propagées (moteurs de recherche, sites de paste, trackers de fuite).
- [ ] 10. Si un individu précis semble être la source, impliquez les RH et le juridique **avant** toute action supplémentaire.
- [ ] 11. Si une compromission externe est la cause, reliez cet incident à `account-compromise.md` ou `ransomware.md`.
- [ ] 12. Demandez le retrait de toute copie publique, preuves à l'appui.
- [ ] 13. Corrigez la cause racine largement — vérifiez tout l'environnement, pas seulement la ressource concernée.
- [ ] 14. Surveillez la propagation continue et les signes d'utilisation frauduleuse des données.
- [ ] 15. Notifiez votre autorité compétente (CERT national, DPO, régulateur) selon la réglementation applicable à votre juridiction — consultez votre conseil juridique. Voir `finding-your-csirt.md` pour identifier qui contacter.
