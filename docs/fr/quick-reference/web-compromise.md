# Compromission d'application/serveur web — Aide-mémoire

**Statut :** 0.1 (brouillon) — dérivé de [`runbooks/web-compromise.md`](../runbooks/web-compromise.md) ; ne pas modifier indépendamment.

- [ ] 1. Confirmez la compromission : contenu défacé, fichier inattendu dans la racine web, processus non reconnus, ou alerte WAF/IDS.
- [ ] 2. Confinez l'hôte — isolez un service critique (laissez-le allumé) ou éteignez un hôte non critique.
- [ ] 3. Si le contenu public est affecté, mettez-le hors ligne ou servez une page de maintenance statique (pas de code dynamique).
- [ ] 4. Préservez les preuves : une image disque/mémoire si possible, et une copie horodatée de tout contenu défacé.
- [ ] 5. Désactivez tout compte local ou administrateur du serveur que vous ne reconnaissez pas.
- [ ] 6. Escaladez vers le L2 avec l'hôte/service affecté, un échantillon du problème, et une chronologie approximative.
- [ ] 7. Identifiez le vecteur d'entrée : injection SQL, RFI, plugin vulnérable, panneau d'administration exposé, ou CVE non corrigé.
- [ ] 8. Recherchez des webshells et fichiers non autorisés dans les répertoires accessibles depuis le web.
- [ ] 9. Identifiez la persistance au-delà de la racine web — tâches planifiées, cron jobs, nouveaux services, clés SSH.
- [ ] 10. Vérifiez les mouvements latéraux vers d'autres systèmes internes.
- [ ] 11. Corrigez la cause racine avant de rétablir le service — patchez, mettez à jour/supprimez le composant vulnérable, corrigez le code.
- [ ] 12. Reconstruisez depuis une image connue saine plutôt que de nettoyer manuellement en cas de doute.
- [ ] 13. Restaurez le contenu depuis une sauvegarde vérifiée saine et réinitialisez les identifiants de chaque compte affecté.
- [ ] 14. Surveillez étroitement après le rétablissement du service pour détecter une éventuelle réinfection.
- [ ] 15. Notifiez votre autorité compétente (CERT national, DPO, régulateur) selon la réglementation applicable à votre juridiction — consultez votre conseil juridique. Voir `finding-your-csirt.md` pour identifier qui contacter.
