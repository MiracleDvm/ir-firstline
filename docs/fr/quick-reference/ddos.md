# DDoS — Aide-mémoire

**Statut :** 0.1 (brouillon) — dérivé de [`runbooks/ddos.md`](../runbooks/ddos.md) ; ne pas modifier indépendamment.
{: .irf-status }

- [ ] 1. Confirmez qu'il s'agit bien d'un DDoS — pas de trafic légitime, de problème de déploiement, ou de mauvaise configuration.
- [ ] 2. Classez la couche : réseau/volumétrique, ou applicative.
- [ ] 3. Limitez ou bloquez le trafic malveillant au plus près de la bordure du réseau.
- [ ] 4. Si une fonctionnalité applicative précise est le goulot d'étranglement, désactivez-la temporairement.
- [ ] 5. Si possible, basculez vers un site alternatif, un edge CDN, ou une route de nettoyage via le DNS.
- [ ] 6. Mettez en place un canal de communication alternatif pour les utilisateurs/clients pendant que le service est dégradé.
- [ ] 7. Escaladez vers le L2 et vers votre FAI/fournisseur anti-DDoS avec l'heure de début, les services affectés, et les caractéristiques du trafic.
- [ ] 8. Déterminez si vous êtes la cible visée ou une victime collatérale.
- [ ] 9. Capturez et analysez le trafic d'attaque pour construire une signature de mitigation.
- [ ] 10. Vérifiez l'existence d'une demande d'extorsion ou d'une revendication liée à l'attaque.
- [ ] 11. Travaillez avec votre FAI/fournisseur anti-DDoS sur le filtrage en amont, le nettoyage, ou le routage blackhole.
- [ ] 12. Configurez un filtrage de sortie pour que vos systèmes n'aggravent pas le problème.
- [ ] 13. Confirmez la reprise du service à la normale avant d'annuler quoi que ce soit.
- [ ] 14. Annulez les mesures de mitigation une fois le trafic confirmé normal.
- [ ] 15. Escaladez d'abord en interne — informez votre responsable SOC/IR et la direction de ce que vous avez confirmé et de ce qui reste incertain. La décision de notifier une entité externe (CERT national, régulateur, forces de l'ordre) revient à la direction et au service juridique/DPO de votre organisation, pas à l'analyste qui répond à l'incident. Voir `finding-your-csirt.md` si votre organisation a besoin d'aide pour identifier l'organisme externe à contacter.
