# Post LinkedIn : SOC et Blue Teaming, deux cas d'usage de l'IA et leur ROI

Lien à coller (aperçu = première slide du deck, via les balises Open Graph de la page) :

    https://jeremycanale.com/ai-soc-blue/        (français)
    https://jeremycanale.com/ai-soc-blue/en/     (anglais)

Avant de publier : passer l'URL dans https://www.linkedin.com/post-inspector/ pour forcer LinkedIn à lire l'image d'aperçu (`images/ai-soc-blue-cover-fr.jpg` / `-en.jpg`).

---

## Version française

Un SOC de dix personnes reste à dix. Une Blue Team de dix passe à cinq. Même IA, deux ROI différents.

J'ai pris deux cas d'usage concrets sur la pile Microsoft d'une banque et je les ai chiffrés jusqu'au bout, comme on le présenterait à un CISO et à son CFO.

Cas 1, le SOC. Un agent d'investigation lit Sentinel, Defender, Entra ID et la Threat Intelligence, reconstruit la chronologie et propose la remédiation. Les dix analystes restent : ce que l'IA apporte ici, c'est de la capacité (10 à 20 % de gain, soit 102 à 204 k€ par an sur 1,02 M€ de coût direct), pas une masse salariale plus faible.

Cas 2, la Blue Team. Un agent pilote Malcat via MCP pour le triage de malware : 45 outils de lecture et de transformation, pas de shell, pas de Python, pas d'Internet, l'échantillon n'est jamais exécuté. Si la moitié de la charge de l'équipe part dans le premier passage malware et que l'automatisation l'absorbe, l'équipe peut être rebâtie autour de cinq profils seniors : 1,36 M€ → 0,70 M€ par an.

Le business case, avec 400 k€ de build et 200 k€ d'OPEX annuel :
• 656 k€ d'économie directe par an
• 456 k€ de gain net récurrent
• payback en 10,5 mois
• 968 k€ de bénéfice net cumulé sur trois ans, soit 97 % de ROI

Et la condition pour que ça tienne, dans les deux cas : le modèle propose, il n'exécute jamais.
1. L'agent est en lecture seule et ne peut écrire qu'un manifeste typé.
2. Un Policy Decision Point sans LLM revalide chaque manifeste avec sa propre identité.
3. Des workers à identité unique exécutent une seule action chacun ; les actions interdites n'ont pas de worker.
4. Trois kill switches, aucun accessible depuis le runtime de l'agent.

L'article détaille l'architecture, les tests d'injection de prompt, la sensibilité du business case (7, 6 ou 5 personnes) et ce que le calcul ne valorise pas, avec les 26 slides en téléchargement.

👉 https://jeremycanale.com/ai-soc-blue/

Salaires, part de charge malware et coûts de plateforme sont des hypothèses illustratives (sources : Robert Half, Eurostat, Microsoft, IBM, DORA, Malcat). À remplacer par vos données avant toute décision.

#Cybersécurité #SOC #BlueTeam #SécuritéAgentique #IA #AgentsIA #PromptInjection #MicrosoftSentinel #MicrosoftDefender #Azure #Malcat #MCP #TriageMalware #ThreatIntelligence #RSSI #CISO #ROI #ArchitectureSécurité #Banque #DORA

---

## English version

A ten-person SOC stays at ten. A ten-person Blue Team goes to five. Same AI, two different returns.

I took two concrete use cases on a bank's Microsoft stack and costed them all the way through, the way you would present them to a CISO and their CFO.

Case 1, the SOC. An investigation agent reads Sentinel, Defender, Entra ID and threat intelligence, rebuilds the timeline and proposes the remediation. All ten analysts stay: what AI brings here is capacity (a 10 to 20% gain, €102k to €204k a year on €1.02M of direct labor cost), not a smaller payroll.

Case 2, the Blue Team. An agent drives Malcat over MCP for malware triage: 45 read-and-transform tools, no shell, no Python, no Internet, the sample is never executed. If half of the team's workload goes to the malware first pass and automation absorbs it, the team can be rebuilt around five senior profiles: €1.36M → €0.70M a year.

The business case, with a €400k build and €200k of annual OPEX:
• €656k of direct savings a year
• €456k of recurring net benefit
• payback in 10.5 months
• €968k of cumulative net benefit over three years, 97% ROI

And the condition for any of it to hold, in both cases: the model proposes, it never executes.
1. The agent is read-only and can write exactly one thing, a typed manifest.
2. A Policy Decision Point with no LLM re-validates every manifest with its own identity.
3. Single-identity workers execute one action each; prohibited actions have no worker.
4. Three kill switches, none reachable from the agent's runtime.

The article covers the architecture, the prompt-injection tests, the sensitivity of the business case (7, 6 or 5 people) and what the calculation leaves out, with the 26 slides available for download.

👉 https://jeremycanale.com/ai-soc-blue/en/

Salaries, malware workload share and platform costs are illustrative assumptions (sources: Robert Half, Eurostat, Microsoft, IBM, DORA, Malcat). Replace them with your own data before any decision.

#Cybersecurity #SOC #BlueTeam #AgenticSecurity #AI #AIAgents #PromptInjection #MicrosoftSentinel #MicrosoftDefender #Azure #Malcat #MCP #MalwareTriage #ThreatIntelligence #CISO #ROI #SecurityArchitecture #Banking #DORA

---

## Version simple (FR)

Nouvel article : automatiser le SOC et la Blue Team avec l'IA, et ce que ça rapporte.

Deux cas d'usage sur la pile Microsoft d'une banque :
• un agent qui investigue les incidents et propose la remédiation, sans jamais l'exécuter
• un agent qui trie les malwares avec Malcat, sans shell ni accès Internet

Et le business case qui va avec : le SOC garde ses dix analystes et gagne en capacité, la Blue Team passe de dix à cinq. Environ 456 k€ de gain net par an, payback en 10,5 mois.

Les 26 slides sont en téléchargement dans l'article.

👉 https://jeremycanale.com/ai-soc-blue/

#Cybersécurité #SOC #BlueTeam #IA #RSSI

## Punchy version for CISOs (EN)

Two questions come up when AI enters the SOC: what does it save, and what happens when the model is manipulated. This article addresses both, on a bank's Microsoft stack.

On the savings side, the answer depends on the team. A generalist SOC gains capacity: faster investigations, more consistent summaries, the same analysts. A Blue Team that spends much of its time on malware triage can go further: that first pass is repeatable work an agent can take over with Malcat, which allows the team to be rebuilt around fewer, more senior profiles.

On the security side, a phishing email with hidden text is enough to influence the agent. In the target architecture it is still influenced, but it cannot act: the agent proposes, a Policy Decision Point with no LLM decides, isolated workers execute, and three kill switches remain outside its reach.

The full business case, with its assumptions, and the 26 slides are in the article.

👉 https://jeremycanale.com/ai-soc-blue/en/

#CISO #SOC #BlueTeam #AISecurity #AgenticSecurity #Cybersecurity #AIAgents #PromptInjection #MalwareTriage #Malcat #MCP #MicrosoftSentinel #MicrosoftDefender #Azure #ThreatIntelligence #SecurityArchitecture #ROI #Banking #DORA #ZeroTrust

## Version percutante pour les CISO (FR)

Deux questions reviennent dès que l'IA entre dans le SOC : qu'est-ce que cela rapporte, et que se passe-t-il quand le modèle est manipulé. Cet article traite les deux, sur la pile Microsoft d'une banque.

Côté gains, la réponse dépend de l'équipe. Un SOC généraliste gagne en capacité : investigations plus rapides, synthèses plus homogènes, mêmes analystes. Une Blue Team qui consacre une grande part de son temps au triage de malware peut aller plus loin : ce premier passage est un travail répétable qu'un agent peut reprendre avec Malcat, ce qui permet de rebâtir l'équipe autour de profils moins nombreux et plus seniors.

Côté sécurité, un e-mail de phishing avec du texte caché suffit à influencer l'agent. Dans l'architecture cible, il est toujours influencé, mais il ne peut pas agir : l'agent propose, un Policy Decision Point sans LLM décide, des workers isolés exécutent, et trois kill switches restent hors de sa portée.

Le business case complet, avec ses hypothèses, et les 26 slides sont dans l'article.

👉 https://jeremycanale.com/ai-soc-blue/

#CISO #RSSI #SOC #BlueTeam #SécuritéIA #SécuritéAgentique #Cybersécurité #AgentsIA #PromptInjection #TriageMalware #Malcat #MCP #MicrosoftSentinel #MicrosoftDefender #Azure #ThreatIntelligence #ArchitectureSécurité #ROI #Banque #DORA

## Simple version (EN)

New article: automating the SOC and the Blue Team with AI, and what it returns.

Two use cases on a bank's Microsoft stack:
• an agent that investigates incidents and proposes the remediation, without ever executing it
• an agent that triages malware with Malcat, with no shell and no Internet access

Plus the business case: the SOC keeps its ten analysts and gains capacity, the Blue Team goes from ten to five. About €456k of net benefit a year, payback in 10.5 months.

The 26 slides are available for download in the article.

👉 https://jeremycanale.com/ai-soc-blue/en/

#Cybersecurity #SOC #BlueTeam #AI #CISO
