# Rançongiciel — Aide-mémoire

**Statut :** 0.1 (brouillon) — dérivé de [`runbooks/ransomware.md`](../runbooks/ransomware.md) ; ne pas modifier indépendamment.

- [ ] 1. Confirmez les signes de ransomware : note de rançon, extensions de fichiers inhabituelles, modifications massives de fichiers en peu de temps, ou alerte EDR/SIEM.
- [ ] 2. Isolez immédiatement le(s) poste(s) affecté(s) du réseau — ne les éteignez **pas**.
- [ ] 3. Déconnectez ou verrouillez les partages réseau et sauvegardes accessibles depuis le poste affecté.
- [ ] 4. Préservez les preuves : photographiez la note de rançon, notez le motif d'extension des fichiers, enregistrez les horodatages exacts.
- [ ] 5. Désactivez les comptes montrant des signes de compromission (comptes à privilèges, connexions à heures inhabituelles, comptes nouvellement créés).
- [ ] 6. Escaladez vers le L2 avec ce que vous avez. Ne négociez **pas**, ne payez **pas**, et ne restaurez **pas** encore depuis une sauvegarde.
- [ ] 7. Identifiez la famille/variante de ransomware à partir de la note de rançon et de l'extension des fichiers.
- [ ] 8. Déterminez le périmètre complet — recherchez les mêmes indicateurs sur les postes, comptes et partages.
- [ ] 9. Trouvez le vecteur d'infection (phishing, RDP exposé, autopropagation, dépôt par un autre logiciel malveillant).
- [ ] 10. Confinez au niveau réseau — bloquez les domaines/IP de command-and-control, isolez le segment affecté.
- [ ] 11. Éradiquez — supprimez la persistance, reconstruisez à partir de supports connus sains en cas de doute.
- [ ] 12. Récupérez — restaurez depuis une sauvegarde vérifiée saine et réinitialisez les identifiants à privilèges avant de reconnecter quoi que ce soit.
- [ ] 13. Vérifiez l'existence d'un déchiffreur connu avant d'envisager toute autre option pour des données irrécupérables.
- [ ] 14. Surveillez une éventuelle réinfection et la publication d'une fuite de données liée à cet incident.
- [ ] 15. Notifiez votre autorité compétente (CERT national, DPO, régulateur) selon la réglementation applicable à votre juridiction — consultez votre conseil juridique. Voir `finding-your-csirt.md` pour identifier qui contacter.
