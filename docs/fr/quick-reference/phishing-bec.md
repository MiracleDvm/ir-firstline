# Phishing / BEC — Aide-mémoire

**Statut :** 0.1 (brouillon) — dérivé de [`runbooks/phishing-bec.md`](../runbooks/phishing-bec.md) ; ne pas modifier indépendamment.

- [ ] 1. Confirmez le signalement : récupérez les en-têtes, le corps, les pièces jointes et les liens du message — n'ouvrez rien sur un appareil sensible.
- [ ] 2. Si une demande financière est en jeu, vérifiez-la hors bande — appelez un numéro déjà enregistré, **jamais** celui du message.
- [ ] 3. Si un virement a déjà été effectué, contactez immédiatement votre banque pour demander un rappel ou un blocage.
- [ ] 4. Identifiez qui d'autre a reçu le message et si quelqu'un a cliqué, ouvert une pièce jointe, ou saisi des identifiants.
- [ ] 5. Confinez tout compte montrant des signes de compromission : désactivez-le, révoquez les sessions, réinitialisez son mot de passe.
- [ ] 6. Bloquez l'expéditeur et tout domaine/lien/pièce jointe malveillants ; supprimez le message des autres boîtes de réception.
- [ ] 7. Escaladez vers le L2 avec le message, qui a été ciblé, et si des identifiants ou de l'argent ont été compromis.
- [ ] 8. Analysez le message et toute pièce jointe/lien dans un environnement isolé ou sandboxé.
- [ ] 9. Déterminez le type de campagne (collecte d'identifiants, malware, fraude BEC) et si elle est ciblée.
- [ ] 10. Auditez les règles de boîte de réception et l'accès délégué des comptes affectés à la recherche de persistance plantée par l'attaquant.
- [ ] 11. Déterminez le périmètre complet : utilisateurs, services, exposition financière.
- [ ] 12. Si un contenu frauduleux est hébergé en ligne, déposez une demande d'abus/retrait avec les preuves jointes.
- [ ] 13. Durcissez l'authentification email (SPF/DKIM/DMARC) et désactivez les protocoles d'authentification hérités.
- [ ] 14. Si de l'argent a été transféré, documentez la perte avec la finance et ajoutez une friction temporaire au processus de paiement.
- [ ] 15. Notifiez votre autorité compétente (CERT national, DPO, régulateur) selon la réglementation applicable à votre juridiction — consultez votre conseil juridique. Voir `finding-your-csirt.md` pour identifier qui contacter.
