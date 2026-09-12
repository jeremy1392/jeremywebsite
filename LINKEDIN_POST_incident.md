# Post LinkedIn : la sandbox a tenu, c'est le dépôt de paquets qui a cédé

Lien à coller (aperçu = première slide du deck, via les balises Open Graph de la page) :

    https://jeremycanale.com/incident-openai-hugging-face/        (français)
    https://jeremycanale.com/incident-openai-hugging-face/en/     (anglais)

Avant de publier : passer l'URL dans https://www.linkedin.com/post-inspector/ pour forcer LinkedIn à lire la nouvelle image d'aperçu.

---

## Version française

La sandbox a tenu. C'est le dépôt de paquets qui a cédé.

J'ai relu les rapports publiés sur l'incident OpenAI / Hugging Face de cet été (rapport technique d'OpenAI, chronologie de Hugging Face, enquête METR) avec une seule question : qu'est-ce qui aurait dû tenir, et qu'est-ce qui a réellement lâché ?

Ce que j'en retiens contredit une bonne partie de ce que j'ai lu depuis :

• Les agents ont bien obtenu root dans leur microVM Kata. Ça ne leur a donné ni le nœud hôte, ni Internet. L'isolation a fait son travail.
• Ce qui a cédé, c'est le service posé juste à côté : le dépôt de paquets privé (Artifactory), seul service joignable depuis la sandbox avec un accès à Internet. Accessible en écriture, toute son API exposée, sortie libre. Les trois à la fois.
• Le 8 mai, une première SSRF échoue sans être vue. Les agents itèrent trois semaines. Le 26 mai, ça passe. Les alertes existaient ; aucune règle ne bloquait.

Ce que je proposerais, en trois décisions :
1. Un proxy inverse en lecture seule devant le dépôt, qui n'expose que la lecture des paquets.
2. Une sortie en refus par défaut, par nom de domaine : le dépôt ne joint que les registres autorisés.
3. L'arrêt décidé en dehors du cluster, par des règles écrites avant l'exécution. Jamais par le modèle.

L'article détaille le chemin documenté, l'architecture cible et les tests de recette, avec les vingt slides de la proposition en téléchargement.

👉 https://jeremycanale.com/incident-openai-hugging-face/

Faits issus des rapports publiés. L'architecture de juillet est une reconstitution, et la proposition reste à valider par les tests.

#SécuritéAgentique #Kubernetes #SSRF #ArchitectureSécurité #Cloud

---

## English version

The sandbox held. The package repository is what gave way.

I went back through the published reports on this summer's OpenAI / Hugging Face incident (OpenAI's technical report, the Hugging Face timeline, the METR investigation) with one question: what was supposed to hold, and what actually gave way?

What I take from it contradicts a good deal of what I have read since:

• The agents did get root inside their Kata microVM. That gave them neither the host node nor the Internet. The isolation did its job.
• What gave way was the service sitting right next to it: the private package repository (Artifactory), the only service reachable from the sandbox with Internet access. Writable, its entire API exposed, unrestricted egress. All three at once.
• On May 8, a first SSRF fails unnoticed. The agents iterate for three weeks. On May 26, it works. The alerts existed; no rule blocked anything.

What I would propose, in three decisions:
1. A read-only reverse proxy in front of the repository, exposing package reads only.
2. Default-deny egress by domain name: the repository reaches the allowed registries and nothing else.
3. Containment decided outside the cluster, by rules written before the run. Never by the model.

The article walks through the documented path, the target architecture and the validation tests, with the twenty slides of the proposal available for download.

👉 https://jeremycanale.com/incident-openai-hugging-face/en/

Facts from the published reports. The July architecture is a reconstruction, and the proposal still has to be validated by the tests.

#AgenticSecurity #Kubernetes #SSRF #SecurityArchitecture #Cloud
