# Compromission de compte — Aide-mémoire

**Statut :** 0.1 (brouillon) — dérivé de [`runbooks/account-compromise.md`](../runbooks/account-compromise.md) ; ne pas modifier indépendamment.
{: .irf-status }

- [ ] 1. Confirmez la compromission : vérifiez les journaux de connexion/audit à la recherche d'un nouveau pays, d'un nouvel appareil, d'un déplacement impossible, ou d'échecs MFA suivis d'un succès.
- [ ] 2. Désactivez le compte et révoquez immédiatement toutes les sessions et jetons actifs — une réinitialisation de mot de passe seule ne met pas fin à une session ouverte.
- [ ] 3. Réinitialisez les identifiants du compte et supprimez toute méthode MFA non reconnue.
- [ ] 4. Recherchez une persistance : règles de transfert/boîte de réception, règles de transport, accès délégué à la boîte aux lettres, et consentements d'applications OAuth.
- [ ] 5. Préservez les preuves : l'email de phishing s'il existe, les entrées exactes de journaux, les applications consenties et leurs permissions, les horodatages.
- [ ] 6. Escaladez vers le L2 avec le point d'entrée suspecté et si d'autres comptes montrent le même motif.
- [ ] 7. Déterminez le point d'entrée : phishing, password spray, identifiant divulgué, ou phishing par consentement.
- [ ] 8. Inventoriez chaque application tierce (OAuth) ayant accès, et les permissions accordées.
- [ ] 9. Désactivez — **ne supprimez pas** — toute application aux permissions illégitimes ou excessives.
- [ ] 10. Déterminez le périmètre complet entre comptes (même expéditeur, mêmes IP sources, ou même identifiant d'application).
- [ ] 11. Bloquez la ou les IP sources de l'attaquant et les domaines d'envoi malveillants confirmés — traitez cela comme temporaire, pas comme un confinement durable.
- [ ] 12. Supprimez toute la persistance trouvée, sur chaque compte affecté.
- [ ] 13. Durcissez : imposez le MFA, désactivez l'authentification héritée/basique, activez des politiques de connexion basées sur le risque.
- [ ] 14. Surveillez une seconde vague visant d'autres utilisateurs de la même organisation.
- [ ] 15. Escaladez d'abord en interne — informez votre responsable SOC/IR et la direction de ce que vous avez confirmé et de ce qui reste incertain. La décision de notifier une entité externe (CERT national, régulateur, forces de l'ordre) revient à la direction et au service juridique/DPO de votre organisation, pas à l'analyste qui répond à l'incident. Voir `finding-your-csirt.md` si votre organisation a besoin d'aide pour identifier l'organisme externe à contacter.
