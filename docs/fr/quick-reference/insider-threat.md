# Menace interne — Aide-mémoire

**Statut :** 0.1 (brouillon) — dérivé de [`runbooks/insider-threat.md`](../runbooks/insider-threat.md) ; ne pas modifier indépendamment.

- [ ] 1. Confirmez que le signalement est crédible en recoupant les journaux du compte concerné uniquement — pas de tout l'environnement.
- [ ] 2. N'entreprenez **aucune** action de confinement ou de confrontation vous-même — escaladez immédiatement vers le L2.
- [ ] 3. Préservez la preuve déclenchante discrètement — n'alertez pas le sujet ni ses collègues.
- [ ] 4. Notez si la personne dispose encore d'un accès actif en ce moment (employée, en préavis, partie).
- [ ] 5. Confirmez le circuit d'autorisation avant toute suite.
- [ ] 6. Impliquez les RH, le conseil juridique, et le manager du sujet avant de continuer — rien d'autre n'avance sans leur feu vert.
- [ ] 7. Une fois autorisé, gelez tous les accès en une seule fois : applications, comptes système/service, VPN, badge physique.
- [ ] 8. Si le sujet reste au travail en attendant l'issue, réduisez l'accès au minimum plutôt que de le supprimer.
- [ ] 9. Enquêtez sans alerter le sujet : journaux, historique d'accès aux données, et revue autorisée des appareils/comptes.
- [ ] 10. Passez en revue le code, les scripts et les tâches planifiées créés par le sujet à la recherche de portes dérobées ou de sabotage.
- [ ] 11. Déterminez le périmètre complet : quelles données/systèmes ont été accédés, et ce qui a quitté le contrôle de l'organisation.
- [ ] 12. Si une activité malveillante/frauduleuse est confirmée, arrêtez l'investigation indépendante et transmettez au conseil juridique.
- [ ] 13. Si rien de malveillant n'est confirmé, restaurez l'accès et clôturez le dossier discrètement.
- [ ] 14. Notifiez votre autorité compétente (CERT national, DPO, régulateur) selon la réglementation applicable à votre juridiction — consultez votre conseil juridique. Voir `finding-your-csirt.md` pour identifier qui contacter.
