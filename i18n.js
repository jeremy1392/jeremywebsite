/* ============================================================
   i18n, Jeremy Canale personal site
   Supported locales: en (default), fr, zh (Simplified), ar (RTL)
   Strategy: data-i18n="dot.path" attributes on DOM nodes.
   Title + meta.description handled by special keys.
   ============================================================ */

window.I18N = {

  /* ------------------------------------------------------------ ENGLISH */
  en: {
    meta: {
      title: "Jeremy Canale, World-Class Agentic Security Expert | AI & Cloud Security Architect",
      description: "Jeremy Canale is the world's foremost Agentic Security expert. Architect of secure AI agents, MCP servers, multi-cloud security platforms and cyber-risk underwriting at Swiss Re, AXA, BNP Paribas, Thomson Reuters, Société Générale and Rankiteo."
    },
    brand:  { tag: "Agentic Security" },
    nav:    { expertise: "Expertise", consulting: "Consulting", cases: "Case Studies", experience: "Experience", certifications: "Credentials", faq: "FAQ", contact: "Contact", guide: "Survival kit", cta: "Work with me" },
    /* English survival-kit page: banner and nav link injected by build.js (see fr.guide). */
    guide: {
      kicker: "New · Free PDF · 124 slides",
      title: "Security Architect: the survival kit",
      desc: "Where to stand in the Digital Governance Framework (DGF): gates, contract, CIA+TN reading grid, Azure and AWS IAM, risk matrix, AI projects.",
      note: "Free · no sign-up",
      cta: "Read and download",
      url: "security-architect-guide/en/",
      cover: "images/security-architect-guide-cover-en.jpg"
    },

    hero: {
      eyebrow: "World-Class Agentic Security Expert",
      name: "Jeremy Canale",
      rotorPrefix: "I architect",
      sub: "Twelve years securing the world's most regulated industries, banking, insurance, defense. Now building the security perimeter for autonomous AI agents, MCP infrastructure and the cloud platforms they run on.",
      cta1: "Engage Jeremy",
      cta2: "LinkedIn Profile",
      meta1Value: "12+", meta1Label: "years in cyber",
      meta2Value: "8",   meta2Label: "Fortune-500 clients",
      meta3Value: "25+", meta3Label: "industry certifications",
      meta4Value: "3",   meta4Label: "continents · SG · UAE · EU",
      rotor: ["secure AI agents", "MCP infrastructure", "cloud security", "cyber underwriting", "AI governance"]
    },

    trust: { label: "Hands-on experience for" },

    expertise: {
      kicker: "Domains",
      title: "Where I operate at the frontier",
      lede: "From securing autonomous AI agents to underwriting cyber risk for global insurers, my work sits at the intersection of regulated industries and emerging AI.",
      flagship: "Signature practice",
      c1: { title: "Agentic AI Security",       desc: "Securing autonomous LLM agents end-to-end: MCP servers, tool-call authorization, prompt-injection defense, sub-agent isolation and runtime guardrails." },
      c2: { title: "AI Governance & Trust",     desc: "Operationalizing ISO/IEC 42001, NIST AI RMF and the EU AI Act. Bringing Anthropic's AI Fluency Framework into the enterprise risk register." },
      c3: { title: "Cloud Security & CSPM",     desc: "Multi-cloud security architecture for AWS, Azure and GCP. Global Prisma Cloud deployment at AXA. Cloudflare estate at Thomson Reuters. Hardened blueprints, IaC and SRE practices." },
      c4: { title: "Cyber Risk Quantification", desc: "Founder & CEO of Rankiteo, the first AI-powered cyber-underwriting desktop platform. Pricing, exposure and portfolio analytics for insurers and reinsurers." },
      c5: { title: "GRC & Compliance",          desc: "ISO/IEC 27001 group certifications, SOC 2, HIPAA, DORA, NIS2, UAE & KSA PDPL. Built the GRC program at Seddiqi Holding and the BNP Paribas maturity roadmap." },
      c6: { title: "Threat Intel & Offensive",  desc: "Published OWASP research in Hakin9. Pentesting, exploit prediction, attack-surface intelligence and the Rankiteo Cyber Incident Chronicle (100k+ incidents)." }
    },

    showcase: {
      kicker: "Trust by design",
      title: "One architect. Every framework that matters.",
      desc: "From ISO/IEC 27001 to the EU AI Act, my engagements bridge engineering and regulation. I translate frameworks into deployable controls, and prove them with measurable assurance.",
      b1: "Cyber maturity 0 → 30% in under 12 months for BNP Paribas Asset Management.",
      b2: "Global Prisma CSPM rollout across all AXA entities, worldwide.",
      b3: "Group ISO 27001 program at Seddiqi Holding, aligned to UAE & KSA PDPL.",
      b4: "Security architecture gatekeeper at Swiss Re & Thomson Reuters."
    },

    experience: {
      kicker: "Career",
      title: "Twelve years at the security helm of regulated enterprises",
      lede: "Hands-on roles, from Vice-President at Swiss Re to Deputy CISO at the BNP Paribas Asset Management group, and now CEO of an AI cyber-underwriting company.",
      now: "now", remote: "Remote", hybrid: "Hybrid",
      hal: "Security leadership for Hal, SC Ventures' born-in-AI, agentic-first growth platform for GCC SMEs, built with Microsoft. Cyber strategy, ISMS, cloud and AI-agent security governance.",
      nusavest: "Cyber strategy and ISMS for a Southeast-Asia asset-backed securities platform (SC Ventures · Standard Chartered).",
      rankiteo: "Building the world's first multi-OS AI cyber-underwriting desktop platform. Cyber ratings, third-party risk and exposure modeling, distributed MCP-native to Cursor, Claude Desktop, ChatGPT and n8n.",
      seddiqi:  "Group ISO/IEC 27001 certification program across the holding. Risk register, Statement of Applicability, UAE & KSA PDPL alignment for every department.",
      gambit:   "Built a NIST-based cybersecurity program from the ground up. After BNP Paribas acquisition, drove maturity transformation from 0% to 30% within the group framework.",
      axa:      "Technical lead for the worldwide rollout of Palo Alto Prisma CSPM across every AXA entity. Aligned global standards with local regulatory constraints.",
      tr:       "Security architecture gatekeeper within enterprise architecture governance. Global Cloudflare deployment. Cyber-underwriting advisory bridging engineering and insurance.",
      swissre:  "Security by design across the enterprise. Architecture review for every major program. Reusable security blueprints across cloud, application and infrastructure domains.",
      sg:       "Defined and enforced the cloud security framework for the bank. Risk-based cloud governance and security-by-design for every cloud initiative.",
      architectTitle: "Security Solutions Architect · multiple Fortune-500",
      architect: "Cloud migrations under PCI-DSS, HIPAA and regulated workloads. IaC, hardened blueprints, vulnerability automation and native cloud SSO."
    },

    cases: {
      kicker: "Case Studies",
      title: "Selected engagements at the frontier of agentic security",
      lede: "Anonymised summaries of recent missions across cyber insurance, multi-cloud security and group GRC. Details vary by industry and are kept deliberately broad to respect client confidentiality.",
      label: { challenge: "Challenge", approach: "Approach", outcome: "Outcome" },
      c1: { sector: "Cyber Insurance", title: "AI driven cyber underwriting platform",
            challenge: "Insurers and reinsurers needed real time, evidence based cyber risk data to replace static questionnaires and accelerate the pricing workflow.",
            approach: "Designed and shipped a multi OS desktop application backed by an AI rating engine, with MCP native distribution to common assistant clients and an underlying incident intelligence corpus.",
            outcome: "A production grade platform recognised across the cyber insurance market." },
      c2: { sector: "Global Insurance Group", title: "Worldwide CSPM rollout",
            challenge: "A multinational insurer operating across dozens of entities had a heterogeneous cloud security posture and no unified visibility.",
            approach: "Technical lead for the global deployment. Cross entity workshops, alignment of group security standards with local regulatory constraints and translation into implementable controls.",
            outcome: "A single CSPM signal across the entire group, with regulatory alignment per jurisdiction." },
      c3: { sector: "Asset Management, Tier 1 Banking", title: "Post acquisition cyber maturity",
            challenge: "A newly acquired entity needed a formalised cyber programme aligned to the acquirer's group framework, with measurable, defensible evidence of progress.",
            approach: "Built a NIST based cybersecurity programme from the ground up. Controls, policies and procedures, risk register, structured reporting to group level stakeholders.",
            outcome: "Validated maturity progress within the acquirer's framework." },
      c4: { sector: "Diversified Holding, GCC", title: "Group ISO 27001 certification",
            challenge: "A multi business holding with no unified information security management system, operating under regional data protection laws.",
            approach: "High level designs, application level IT risk assessments, group policy framework, Statement of Applicability, and alignment to regional regulatory requirements.",
            outcome: "Group wide ISO 27001 readiness with structured assurance per department." },
      c5: { sector: "Global Financial Information Provider", title: "Security architecture stewardship",
            challenge: "A global enterprise required consistent security by design across every major digital initiative.",
            approach: "Acted as security architecture gatekeeper within enterprise architecture governance, with reusable blueprints across cloud, application and infrastructure domains.",
            outcome: "Accelerated secure delivery and stronger, more consistent control maturity." },
      c6: { sector: "Southeast Asia, Asset Backed Securities", title: "Fractional CISO mandate",
            challenge: "An emerging investment platform needed senior cyber leadership to define its information security strategy and ISMS from day one.",
            approach: "Fractional CISO engagement covering target operating model, risk appetite, control catalogue and the regulatory roadmap, in coordination with a global banking parent.",
            outcome: "A defensible cyber posture, ready for investor and regulator scrutiny." }
    },

    pubs: {
      kicker: "Publications & Recognition",
      title: "A decade contributing to the public conversation",
      lede: "OWASP vulnerability research, an early social media search engine recognised at the highest level, and ongoing coverage of the agentic cyber underwriting work.",
      p1: { tag: "Magazine, OWASP research",
            title: "Hakin9 Magazine, international IT security publication",
            desc: "In depth research on OWASP based vulnerabilities affecting major platforms, published in a renowned international IT security magazine." },
      p2: { tag: "Product, recognition",
            title: "AnoSearch, social media search engine",
            desc: "Built an early social media search engine extracting signal from more than twenty networks. Recognised as a top national IT project of the year and presented to top CEOs and to the French Minister of Defense." },
      p3: { tag: "Industry press",
            title: "International reinsurance press coverage of Rankiteo",
            desc: "Featured commentary on AI driven cyber underwriting and data driven cyber insurance in leading international reinsurance media." },
      p4: { tag: "Open source, MCP",
            title: "Public MCP documentation for cyber rating tooling",
            desc: "Open documentation and integrations for an MCP native cyber rating server, deployable in mainstream assistant clients and automation platforms." },
      p5: { tag: "Marketplace feature",
            title: "Featured cyber rating MCP server on Smithery.ai",
            desc: "Listed as a reference MCP server for cyber rating workflows in one of the leading MCP discovery directories." }
    },

    faq: {
      kicker: "FAQ",
      title: "Questions enterprises ask before engaging",
      lede: "Short answers to the questions that come up most often from boards, CISOs and AI platform teams scoping their first agentic security engagement.",
      q1: { q: "What is Agentic Security and why does it matter now?",
            a: "Agentic Security is the discipline of securing autonomous AI agents and the infrastructure they call into. Unlike a chatbot, an agent reasons, plans, invokes tools, spawns sub agents and chains decisions across systems. Each tool call is an executable action with real world impact, which means the security perimeter must move from the user session to the tool invocation itself. With the rapid adoption of Model Context Protocol, LangGraph, LangChain and frameworks like Azure AI Foundry, enterprises now ship agents into production faster than their security teams can catch up. Agentic Security is what closes that gap." },
      q2: { q: "How does Agentic Security differ from traditional AI or LLM security?",
            a: "Traditional LLM security focuses on the prompt and the model output: jailbreaks, prompt injection, hallucinations, data leakage at inference time. Agentic Security extends that perimeter to everything the agent can do once it has produced a plan, including authorization of tool calls, isolation of sub agents, observability of multi step workflows, reversibility of actions, and red teaming against tool chain abuse and data exfiltration. The blast radius is no longer a single response but an entire workflow." },
      q3: { q: "What engagement models do you offer?",
            a: "Three primary engagement models. Strategy: a board level diagnostic of your AI agent estate with a target architecture and a twelve month roadmap. Build: forward deployed engineering with your teams to implement guardrails, sub agent isolation, tool authorization and Langfuse observability in production. Assure: an independent agentic security audit including red teaming and a regulatory mapping pack ready for boardroom review. Fractional CISO engagements are also available for emerging platforms." },
      q4: { q: "Which industries do you serve?",
            a: "Regulated industries with high stakes, including banking, insurance and reinsurance, asset management, financial information providers, defense, healthcare, and the public sector. Twelve years of engagements span Europe, the GCC and Asia, with hands on experience for Swiss Re, AXA, BNP Paribas, Standard Chartered, Thomson Reuters, Société Générale, Seddiqi Holding, NusaVest, Thales, Dassault Systèmes, Veolia, Baxter and Gemalto." },
      q5: { q: "Which frameworks and regulations do you align with?",
            a: "ISO/IEC 42001 for AI management systems, NIST AI Risk Management Framework, and the EU AI Act for AI specific governance. ISO/IEC 27001 and 27701, SOC 2 Type II, HIPAA, PCI DSS, DORA, NIS2, and regional regimes such as UAE PDPL, KSA PDPL and GDPR for information security and data protection. Engagements consistently translate these frameworks into deployable controls rather than paperwork." },
      q6: { q: "Where are you based and how do you work?",
            a: "Based across Singapore, Dubai, Paris and Palo Alto, with active engagements across three continents. Most work is delivered remotely, with on site visits scoped to the engagement. Typical projects run from a few weeks for a strategy or audit, to multi quarter programmes for full builds and fractional CISO mandates." },
      q7: { q: "How do we get started?",
            a: "A short scoping call, typically thirty minutes, no commitment. The call clarifies your agent estate, your regulatory exposure and the outcome you need. Most engagements start with a structured diagnostic and a written proposal within ten working days." }
    },

    consulting: {
      kicker: "Consulting",
      title: "Hands-on consulting for AI-native enterprises",
      lede: "End-to-end advisory and implementation across the agentic security stack, from boardroom strategy and architecture blueprints to production-grade guardrails on Azure AI Foundry, LangGraph, NeMo, SageMaker and Prisma Cloud.",
      t1: { step: "Phase 01 · Strategy", title: "Agentic AI Security Strategy",
            desc: "Boardroom-level diagnostic of your AI agent estate. Target architecture, regulatory posture, and the 12-month roadmap to get there.",
            l1: "Threat model of every agent & tool call",
            l2: "Mapping to NIST AI RMF, ISO 42001, EU AI Act",
            l3: "CISO-ready risk & cost model" },
      t2: { step: "Phase 02 · Build", title: "Build & Harden",
            desc: "Forward-deployed engineering on your stack. Guardrails, sub-agent isolation, tool authorization, Langfuse observability, shipped to production.",
            l1: "Reference architecture on Azure AI Foundry / AWS Bedrock",
            l2: "LangGraph + LangChain workflows with guardrails",
            l3: "Prisma Cloud + Cloudflare integration" },
      t3: { step: "Phase 03 · Assure", title: "Audit & Assurance",
            desc: "Independent agentic security audit. Red-team prompt injection, tool-chain abuse, data exfiltration. Boardroom-ready evidence pack.",
            l1: "Red-team across prompt, tool & data layers",
            l2: "SOC 2 / ISO 27001 / DORA / NIS2 mapping",
            l3: "Continuous-assurance Langfuse dashboards" },
      s1: { title: "Agentic AI platforms & orchestration" },
      s2: { title: "Model serving & inference" },
      s3: { title: "Cloud security & CSPM" },
      s4: { title: "Observability, evals & guardrails" },
      s5: { title: "Governance, risk & compliance" },
      cta: { title: "Ready to secure your agentic platform?",
             sub: "Initial scoping call, typically 30 minutes, no commitment." }
    },

    certs: {
      kicker: "Credentials",
      title: "Certified across the agentic stack",
      lede: "From Anthropic AI Fluency to NVIDIA Generative-AI LLMs, ISACA CISM/CRISC, and the full Microsoft Cybersecurity Architect & AWS Security tracks.",
      agentic: "Agentic automation security curriculum."
    },

    manifesto: {
      kicker: "Manifesto",
      title: "Autonomous agents need a new perimeter.",
      p1: "Legacy security was built for humans clicking buttons. Agents click thousands per minute, call external tools, spawn sub-agents and chain decisions across systems. The blast radius is no longer a session, it's a workflow.",
      p2: "My work re-anchors the perimeter at the place where intent meets execution: the tool call. I design authorization, observability and policy guardrails that make autonomous agents auditable, reversible and trustworthy at enterprise scale.",
      quote: "\"In the agentic era, the question isn't <em>can</em> the AI take an action. It's <em>should</em> it, and <em>can we prove it</em> after the fact.\""
    },

    contact: {
      kicker: "Let's talk",
      title: "Securing your agentic platform starts with a conversation.",
      desc: "Boards, CISOs, insurers and AI platform teams, if you're shipping autonomous agents, multi-cloud workloads or building cyber-underwriting capability, I can help.",
      linkedin: "LinkedIn",
      loc1: "Singapore", loc2: "Dubai", loc3: "Paris", loc4: "Palo Alto"
    },

    footer: { tag: "Agentic Security · AI Trust · Cloud GRC" }
  },

  /* ------------------------------------------------------------ FRANÇAIS */
  fr: {
    meta: {
      title: "Jeremy Canale, Expert mondial en Sécurité Agentique | Architecte IA & Cloud Security",
      description: "Jeremy Canale est l'expert mondial de référence en sécurité agentique. Architecte de la sécurité des agents IA autonomes, des serveurs MCP, des plateformes cloud et du cyber-underwriting chez Swiss Re, AXA, BNP Paribas, Thomson Reuters, Société Générale et Rankiteo."
    },
    brand:  { tag: "Sécurité Agentique" },
    nav:    { expertise: "Expertise", consulting: "Conseil", cases: "Études de cas", experience: "Parcours", certifications: "Certifications", faq: "FAQ", contact: "Contact", guide: "Kit de survie", cta: "Collaborer" },
    /* Ressource FR uniquement : le bandeau et le lien de menu sont injectés par build.js
       pour chaque locale qui possède ce bloc `guide`. */
    guide: {
      kicker: "Nouveau · PDF gratuit · 124 slides",
      title: "Architecte Sécurité : le kit de survie",
      desc: "Où se placer dans le Cadre de Gouvernance Numérique (DGF) : jalons, contrat, grille de lecture CIA+TN, IAM Azure et AWS, matrice de risques, projets IA.",
      note: "Gratuit · sans inscription",
      cta: "Découvrir et télécharger",
      url: "security-architect-guide/",
      cover: "images/security-architect-guide-cover.jpg"
    },

    hero: {
      eyebrow: "Expert mondial en Sécurité Agentique",
      name: "Jeremy Canale",
      rotorPrefix: "Je conçois",
      sub: "Douze ans à sécuriser les industries les plus régulées au monde, banque, assurance, défense. Aujourd'hui je construis le périmètre de sécurité des agents IA autonomes, des infrastructures MCP et des plateformes cloud qui les supportent.",
      cta1: "Me solliciter",
      cta2: "Profil LinkedIn",
      meta1Value: "12+", meta1Label: "ans en cybersécurité",
      meta2Value: "8",   meta2Label: "clients Fortune-500",
      meta3Value: "25+", meta3Label: "certifications",
      meta4Value: "3",   meta4Label: "continents · SG · UAE · UE",
      rotor: ["agents IA sécurisés", "infrastructures MCP", "sécurité cloud", "cyber-underwriting", "gouvernance IA"]
    },

    trust: { label: "En mission pour" },

    expertise: {
      kicker: "Domaines",
      title: "Là où j'opère à la frontière",
      lede: "De la sécurisation des agents IA autonomes au pricing du cyber-risque pour les grands assureurs, mon travail se situe à l'intersection des industries régulées et de l'IA émergente.",
      flagship: "Pratique signature",
      c1: { title: "Sécurité IA agentique",       desc: "Sécurisation de bout en bout des agents LLM autonomes : serveurs MCP, autorisation des tool-calls, défense contre l'injection de prompt, isolation des sous-agents et garde-fous runtime." },
      c2: { title: "Gouvernance IA & Confiance",  desc: "Opérationnalisation d'ISO/IEC 42001, du NIST AI RMF et de l'AI Act européen. Intégration du AI Fluency Framework d'Anthropic dans le registre des risques d'entreprise." },
      c3: { title: "Sécurité Cloud & CSPM",       desc: "Architecture multi-cloud AWS, Azure et GCP. Déploiement Prisma Cloud mondial chez AXA. Estate Cloudflare chez Thomson Reuters. Blueprints durcis, IaC et pratiques SRE." },
      c4: { title: "Quantification du cyber-risque", desc: "Fondateur & CEO de Rankiteo, la première plateforme desktop d'AI cyber-underwriting. Pricing, exposition et analytique de portefeuille pour assureurs et réassureurs." },
      c5: { title: "GRC & Conformité",            desc: "Certifications ISO/IEC 27001 groupe, SOC 2, HIPAA, DORA, NIS2, PDPL EAU & KSA. Programme GRC chez Seddiqi Holding et roadmap de maturité BNP Paribas." },
      c6: { title: "Threat Intel & Offensif",     desc: "Publications OWASP dans Hakin9. Pentesting, prédiction d'exploits, attack-surface intelligence et la Cyber Incident Chronicle Rankiteo (100k+ incidents)." }
    },

    showcase: {
      kicker: "Confiance dès la conception",
      title: "Un seul architecte. Tous les frameworks qui comptent.",
      desc: "D'ISO/IEC 27001 à l'AI Act européen, mes missions font le pont entre ingénierie et régulation. Je traduis les frameworks en contrôles déployables, et les prouve par une assurance mesurable.",
      b1: "Maturité cyber 0 → 30 % en moins de 12 mois pour BNP Paribas Asset Management.",
      b2: "Déploiement Prisma CSPM mondial sur toutes les entités AXA.",
      b3: "Programme ISO 27001 groupe chez Seddiqi Holding, aligné PDPL EAU & KSA.",
      b4: "Gardien de l'architecture de sécurité chez Swiss Re & Thomson Reuters."
    },

    experience: {
      kicker: "Parcours",
      title: "Douze ans à la barre de la sécurité des entreprises régulées",
      lede: "Postes opérationnels, de Vice-Président chez Swiss Re à Deputy CISO chez BNP Paribas Asset Management, et aujourd'hui CEO d'une société de cyber-underwriting IA.",
      now: "auj.", remote: "Distanciel", hybrid: "Hybride",
      hal: "Direction sécurité de Hal, la plateforme de croissance née dans l'IA et agentic-first de SC Ventures pour les PME du Golfe, construite avec Microsoft. Stratégie cyber, SMSI, gouvernance de la sécurité cloud et des agents IA.",
      nusavest: "Stratégie cyber et SMSI pour une plateforme sud-est-asiatique d'asset-backed securities (SC Ventures · Standard Chartered).",
      rankiteo: "Construction de la première plateforme desktop multi-OS d'AI cyber-underwriting. Cyber-ratings, risque tiers, modélisation d'exposition, distribuée nativement en MCP vers Cursor, Claude Desktop, ChatGPT et n8n.",
      seddiqi:  "Programme de certification ISO/IEC 27001 groupe à travers tout le holding. Registre des risques, SoA, alignement PDPL EAU & KSA pour chaque département.",
      gambit:   "Construction d'un programme cybersécurité basé NIST de zéro. Après acquisition par BNP Paribas, transformation de la maturité de 0 % à 30 % dans le framework groupe.",
      axa:      "Lead technique du déploiement mondial de Palo Alto Prisma CSPM sur chaque entité AXA. Alignement des standards globaux avec les contraintes réglementaires locales.",
      tr:       "Gardien de l'architecture de sécurité dans la gouvernance d'architecture d'entreprise. Déploiement Cloudflare global. Conseil cyber-underwriting au pont entre ingénierie et assurance.",
      swissre:  "Security by design à l'échelle entreprise. Revue d'architecture pour chaque programme majeur. Blueprints de sécurité réutilisables cloud, application et infrastructure.",
      sg:       "Définition et application du framework de sécurité cloud de la banque. Gouvernance cloud risque-based et security-by-design pour chaque initiative cloud.",
      architectTitle: "Security Solutions Architect · plusieurs Fortune-500",
      architect: "Migrations cloud sous PCI-DSS, HIPAA et workloads régulés. IaC, blueprints durcis, automation vulnérabilité et SSO cloud natif."
    },

    cases: {
      kicker: "Études de cas",
      title: "Quelques missions à la frontière de la sécurité agentique",
      lede: "Résumés anonymisés de missions récentes en cyber-assurance, sécurité multi-cloud et GRC de groupe. Les détails varient selon le secteur et restent délibérément larges pour préserver la confidentialité des clients.",
      label: { challenge: "Enjeu", approach: "Approche", outcome: "Résultat" },
      c1: { sector: "Cyber-assurance", title: "Plateforme de cyber-underwriting pilotée par l'IA",
            challenge: "Les assureurs et réassureurs avaient besoin de données de cyber-risque en temps réel et basées sur la preuve, pour remplacer les questionnaires statiques et accélérer le pricing.",
            approach: "Conception et livraison d'une application desktop multi-OS adossée à un moteur de notation IA, avec distribution MCP native vers les clients assistants courants et un corpus d'incidents sous-jacent.",
            outcome: "Une plateforme de niveau production reconnue sur le marché de la cyber-assurance." },
      c2: { sector: "Groupe d'assurance mondial", title: "Déploiement CSPM mondial",
            challenge: "Un assureur multinational opérant à travers des dizaines d'entités avait une posture cloud hétérogène et aucune visibilité unifiée.",
            approach: "Lead technique du déploiement mondial. Ateliers inter-entités, alignement des standards de sécurité groupe avec les contraintes réglementaires locales et traduction en contrôles implémentables.",
            outcome: "Un signal CSPM unique sur tout le groupe, avec alignement réglementaire par juridiction." },
      c3: { sector: "Gestion d'actifs, banque de premier plan", title: "Maturité cyber post-acquisition",
            challenge: "Une entité nouvellement acquise devait formaliser un programme cyber aligné sur le cadre de l'acquéreur, avec une preuve mesurable et défendable de la progression.",
            approach: "Construction d'un programme cybersécurité basé NIST de zéro. Contrôles, politiques et procédures, registre des risques, reporting structuré aux parties prenantes du groupe.",
            outcome: "Progression de maturité validée dans le cadre de l'acquéreur." },
      c4: { sector: "Holding diversifié, CCG", title: "Certification ISO 27001 groupe",
            challenge: "Un holding multi-métiers sans système de management de la sécurité de l'information unifié, opérant sous des lois régionales de protection des données.",
            approach: "High-level designs, évaluations de risque IT au niveau applicatif, cadre politique groupe, Statement of Applicability et alignement aux exigences réglementaires régionales.",
            outcome: "Préparation ISO 27001 à l'échelle du groupe avec assurance structurée par département." },
      c5: { sector: "Fournisseur mondial d'information financière", title: "Pilotage de l'architecture de sécurité",
            challenge: "Une entreprise mondiale exigeait une approche security-by-design cohérente sur chaque initiative numérique majeure.",
            approach: "Gardien de l'architecture de sécurité au sein de la gouvernance d'architecture d'entreprise, avec des blueprints réutilisables cloud, application et infrastructure.",
            outcome: "Livraison sécurisée accélérée et maturité de contrôle plus forte et plus homogène." },
      c6: { sector: "Asie du Sud-Est, titres adossés à des actifs", title: "Mandat de CISO fractionné",
            challenge: "Une plateforme d'investissement émergente avait besoin d'un leadership cyber senior pour définir sa stratégie de sécurité de l'information et son SMSI dès le premier jour.",
            approach: "Mission de CISO fractionné couvrant le modèle opérationnel cible, l'appétit au risque, le catalogue de contrôles et la feuille de route réglementaire, en coordination avec un groupe bancaire mondial.",
            outcome: "Une posture cyber défendable, prête pour la scrutation des investisseurs et des régulateurs." }
    },

    pubs: {
      kicker: "Publications & Reconnaissance",
      title: "Une décennie de contribution au débat public",
      lede: "Recherche de vulnérabilités OWASP, un moteur de recherche social précoce reconnu au plus haut niveau, et une couverture continue des travaux d'agentic cyber-underwriting.",
      p1: { tag: "Magazine, recherche OWASP",
            title: "Hakin9 Magazine, publication internationale de sécurité informatique",
            desc: "Recherche approfondie sur des vulnérabilités OWASP affectant des plateformes majeures, publiée dans un magazine international de sécurité informatique reconnu." },
      p2: { tag: "Produit, reconnaissance",
            title: "AnoSearch, moteur de recherche réseaux sociaux",
            desc: "Construction d'un moteur de recherche social précoce extrayant le signal de plus de vingt réseaux. Reconnu projet IT national de l'année et présenté à des CEOs de premier plan et au Ministre français de la Défense." },
      p3: { tag: "Presse spécialisée",
            title: "Couverture internationale de Rankiteo dans la presse réassurance",
            desc: "Commentaires repris sur l'IA cyber-underwriting et la cyber-assurance data-driven dans les médias internationaux de la réassurance." },
      p4: { tag: "Open source, MCP",
            title: "Documentation MCP publique pour outillage de cyber-rating",
            desc: "Documentation ouverte et intégrations d'un serveur MCP natif de cyber-rating, déployable dans les clients assistants courants et les plateformes d'automatisation." },
      p5: { tag: "Mise en avant marketplace",
            title: "Serveur MCP de cyber-rating mis en avant sur Smithery.ai",
            desc: "Référencé comme serveur MCP de référence pour les workflows de cyber-rating dans l'un des annuaires MCP majeurs." }
    },

    faq: {
      kicker: "FAQ",
      title: "Les questions posées avant chaque mission",
      lede: "Réponses courtes aux questions les plus fréquentes des conseils d'administration, des CISOs et des équipes plateforme IA qui cadrent leur première mission de sécurité agentique.",
      q1: { q: "Qu'est-ce que la Sécurité Agentique et pourquoi est-elle cruciale maintenant ?",
            a: "La Sécurité Agentique est la discipline qui sécurise les agents IA autonomes et l'infrastructure qu'ils appellent. Contrairement à un chatbot, un agent raisonne, planifie, invoque des outils, génère des sous-agents et enchaîne des décisions à travers des systèmes. Chaque tool-call est une action exécutable avec un impact réel : le périmètre de sécurité doit donc se déplacer de la session utilisateur vers l'invocation d'outil elle-même. Avec l'adoption rapide du Model Context Protocol, de LangGraph, LangChain et de frameworks comme Azure AI Foundry, les entreprises mettent des agents en production plus vite que leurs équipes de sécurité ne suivent. La Sécurité Agentique comble cet écart." },
      q2: { q: "En quoi diffère-t-elle de la sécurité IA / LLM traditionnelle ?",
            a: "La sécurité LLM traditionnelle se concentre sur le prompt et la sortie du modèle : jailbreaks, injection de prompt, hallucinations, fuite de données à l'inférence. La Sécurité Agentique étend ce périmètre à tout ce que l'agent peut faire une fois qu'il a produit un plan : autorisation des tool-calls, isolation des sous-agents, observabilité des workflows multi-étapes, réversibilité des actions et red-team contre l'abus de chaîne d'outils et l'exfiltration de données. Le blast radius n'est plus une réponse unique, mais un workflow entier." },
      q3: { q: "Quels modèles de mission proposes-tu ?",
            a: "Trois modèles principaux. Stratégie : diagnostic comité exécutif de votre parc d'agents IA, architecture cible et roadmap 12 mois. Build : ingénierie forward-deployed avec vos équipes pour implémenter garde-fous, isolation des sous-agents, autorisation tool-call et observabilité Langfuse en production. Assurance : audit indépendant de sécurité agentique incluant red-team et dossier de cartographie réglementaire prêt pour le board. Des mandats de CISO fractionné sont également possibles pour les plateformes émergentes." },
      q4: { q: "Quelles industries servez-vous ?",
            a: "Les industries régulées à forts enjeux : banque, assurance et réassurance, gestion d'actifs, fournisseurs d'information financière, défense, santé et secteur public. Douze ans de missions à travers l'Europe, le CCG et l'Asie, avec une expérience terrain pour Swiss Re, AXA, BNP Paribas, Standard Chartered, Thomson Reuters, Société Générale, Seddiqi Holding, NusaVest, Thales, Dassault Systèmes, Veolia, Baxter et Gemalto." },
      q5: { q: "Sur quels cadres et régulations vous alignez-vous ?",
            a: "ISO/IEC 42001 pour les systèmes de management de l'IA, NIST AI Risk Management Framework et l'AI Act européen pour la gouvernance IA. ISO/IEC 27001 et 27701, SOC 2 Type II, HIPAA, PCI DSS, DORA, NIS2 et les régimes régionaux comme PDPL EAU, PDPL KSA et RGPD pour la sécurité de l'information et la protection des données. Les missions traduisent systématiquement ces cadres en contrôles déployables plutôt qu'en paperasse." },
      q6: { q: "Où es-tu basé et comment travailles-tu ?",
            a: "Basé entre Singapour, Dubaï, Paris et Palo Alto, avec des missions actives sur trois continents. La majorité du travail est livrée à distance, avec des visites sur site cadrées selon la mission. Les projets typiques vont de quelques semaines pour une stratégie ou un audit, à plusieurs trimestres pour des builds complets et des mandats de CISO fractionné." },
      q7: { q: "Comment commence-t-on ?",
            a: "Un appel de cadrage court, typiquement trente minutes, sans engagement. L'appel clarifie votre parc d'agents, votre exposition réglementaire et le résultat attendu. La plupart des missions démarrent par un diagnostic structuré et une proposition écrite sous dix jours ouvrés." }
    },

    consulting: {
      kicker: "Conseil",
      title: "Conseil opérationnel pour les entreprises AI-native",
      lede: "Conseil et implémentation de bout en bout sur toute la pile de sécurité agentique, de la stratégie comité exécutif aux blueprints d'architecture, jusqu'aux garde-fous de production sur Azure AI Foundry, LangGraph, NeMo, SageMaker et Prisma Cloud.",
      t1: { step: "Phase 01 · Stratégie", title: "Stratégie de sécurité IA agentique",
            desc: "Diagnostic comité exécutif de votre parc d'agents IA. Architecture cible, posture réglementaire et roadmap 12 mois pour y parvenir.",
            l1: "Threat-model de chaque agent et tool-call",
            l2: "Cartographie NIST AI RMF, ISO 42001, AI Act",
            l3: "Modèle risque & coût prêt pour le CISO" },
      t2: { step: "Phase 02 · Build", title: "Construction & durcissement",
            desc: "Ingénierie forward-deployed sur votre stack. Garde-fous, isolation des sous-agents, autorisation tool-call, observabilité Langfuse, livrés en production.",
            l1: "Architecture de référence sur Azure AI Foundry / AWS Bedrock",
            l2: "Workflows LangGraph + LangChain avec garde-fous",
            l3: "Intégration Prisma Cloud + Cloudflare" },
      t3: { step: "Phase 03 · Assurance", title: "Audit & Assurance",
            desc: "Audit indépendant de sécurité agentique. Red-team d'injection de prompt, abus de chaîne d'outils, exfiltration de données. Dossier de preuve prêt pour le board.",
            l1: "Red-team sur les couches prompt, tool et data",
            l2: "Cartographie SOC 2 / ISO 27001 / DORA / NIS2",
            l3: "Dashboards Langfuse d'assurance continue" },
      s1: { title: "Plateformes agentiques & orchestration" },
      s2: { title: "Serving de modèles & inférence" },
      s3: { title: "Sécurité cloud & CSPM" },
      s4: { title: "Observabilité, évals & garde-fous" },
      s5: { title: "Gouvernance, risque & conformité" },
      cta: { title: "Prêt à sécuriser votre plateforme agentique ?",
             sub: "Premier appel de cadrage, typiquement 30 minutes, sans engagement." }
    },

    certs: {
      kicker: "Certifications",
      title: "Certifié sur toute la pile agentique",
      lede: "De l'AI Fluency Anthropic au NVIDIA Generative-AI LLMs, ISACA CISM/CRISC, et l'intégralité des parcours Microsoft Cybersecurity Architect & AWS Security.",
      agentic: "Cursus de sécurité de l'automation agentique."
    },

    manifesto: {
      kicker: "Manifeste",
      title: "Les agents autonomes exigent un nouveau périmètre.",
      p1: "La sécurité historique a été construite pour des humains qui cliquent. Les agents cliquent des milliers de fois par minute, appellent des outils externes, déclenchent des sous-agents et enchaînent des décisions à travers des systèmes. Le blast radius n'est plus une session, c'est un workflow entier.",
      p2: "Mon travail ré-ancre le périmètre là où l'intention rencontre l'exécution : le tool-call. Je conçois l'autorisation, l'observabilité et les garde-fous de politique qui rendent les agents autonomes auditables, réversibles et dignes de confiance à l'échelle entreprise.",
      quote: "« À l'ère agentique, la question n'est plus de savoir si l'IA <em>peut</em> exécuter une action. C'est de savoir si elle <em>doit</em>, et <em>si nous pouvons le prouver</em> a posteriori. »"
    },

    contact: {
      kicker: "Échangeons",
      title: "Sécuriser votre plateforme agentique commence par une conversation.",
      desc: "Conseils d'administration, CISOs, assureurs, équipes plateforme IA, si vous déployez des agents autonomes, des workloads multi-cloud ou bâtissez une capacité de cyber-underwriting, je peux vous aider.",
      linkedin: "LinkedIn",
      loc1: "Singapour", loc2: "Dubaï", loc3: "Paris", loc4: "Palo Alto"
    },

    footer: { tag: "Sécurité Agentique · Confiance IA · GRC Cloud" }
  },

  /* ------------------------------------------------------------ 中文 (Simplified Chinese) */
  zh: {
    meta: {
      title: "Jeremy Canale, 世界级智能体安全专家 | AI 与云安全架构师",
      description: "Jeremy Canale 是全球顶尖的智能体（Agentic）AI 安全专家。曾在瑞士再保险、安盛、法国巴黎银行、汤森路透、法兴银行及 Rankiteo 担任 AI 智能体、MCP 服务器、多云安全平台与网络风险承保的总架构师。"
    },
    brand:  { tag: "智能体安全" },
    nav:    { expertise: "专长领域", consulting: "咨询服务", cases: "客户案例", experience: "履历", certifications: "资质认证", faq: "常见问题", contact: "联系", cta: "开启合作" },

    hero: {
      eyebrow: "世界级智能体安全专家",
      name: "Jeremy Canale",
      rotorPrefix: "我设计",
      sub: "十二年深耕全球最受监管的行业银行、保险与国防。如今，我为自主 AI 智能体、MCP 基础设施以及承载它们的云平台构建全新的安全边界。",
      cta1: "联系合作",
      cta2: "LinkedIn 主页",
      meta1Value: "12+", meta1Label: "年网络安全经验",
      meta2Value: "8",   meta2Label: "财富 500 强客户",
      meta3Value: "25+", meta3Label: "行业认证",
      meta4Value: "3",   meta4Label: "大洲 · 新加坡 · 阿联酋 · 欧洲",
      rotor: ["安全 AI 智能体", "MCP 基础设施", "云安全架构", "网络风险承保", "AI 治理框架"]
    },

    trust: { label: "深度服务过的企业" },

    expertise: {
      kicker: "领域",
      title: "我活跃在技术前沿",
      lede: "从保护自主 AI 智能体到为全球保险机构承保网络风险我的工作位于受监管行业与新兴 AI 的交汇点。",
      flagship: "标志性专长",
      c1: { title: "智能体 AI 安全",       desc: "全链路保护自主 LLM 智能体：MCP 服务器、工具调用授权、提示注入防御、子智能体隔离与运行时护栏。" },
      c2: { title: "AI 治理与信任",        desc: "落地 ISO/IEC 42001、NIST AI RMF 与欧盟 AI 法案。将 Anthropic AI Fluency 框架纳入企业风险登记册。" },
      c3: { title: "云安全与 CSPM",        desc: "AWS、Azure、GCP 多云安全架构。安盛全球 Prisma Cloud 部署，汤森路透 Cloudflare 体系。加固蓝图、IaC 与 SRE 实践。" },
      c4: { title: "网络风险量化",         desc: "Rankiteo 创始人兼 CEO全球首个 AI 驱动的桌面级网络承保平台。为保险与再保险公司提供定价、敞口与组合分析。" },
      c5: { title: "GRC 与合规",           desc: "ISO/IEC 27001 集团认证、SOC 2、HIPAA、DORA、NIS2、阿联酋 / 沙特 PDPL。Seddiqi Holding GRC 计划与 BNP Paribas 成熟度路线图主导者。" },
      c6: { title: "威胁情报与攻击面",     desc: "在《Hakin9》发表 OWASP 研究。渗透测试、漏洞预测、攻击面情报，以及 Rankiteo 网络事件编年史（10 万 + 起）。" }
    },

    showcase: {
      kicker: "默认安全",
      title: "一位架构师，覆盖每一个关键合规框架。",
      desc: "从 ISO/IEC 27001 到欧盟 AI 法案，我的项目横跨工程与监管。我将框架转化为可部署的控制并用可度量的合规证据加以验证。",
      b1: "为 BNP Paribas 资产管理在 12 个月内将网络成熟度从 0 提升至 30%。",
      b2: "在安盛全球所有实体完成 Prisma CSPM 部署。",
      b3: "Seddiqi 控股集团 ISO 27001 计划，对齐阿联酋 / 沙特 PDPL。",
      b4: "瑞士再保险与汤森路透安全架构守门人。"
    },

    experience: {
      kicker: "职业生涯",
      title: "十二年掌舵受监管企业的安全战略",
      lede: "亲历一线，从瑞士再保险副总裁到 BNP Paribas 资产管理副 CISO如今是一家 AI 网络承保公司的 CEO。",
      now: "至今", remote: "远程", hybrid: "混合办公",
      hal: "为 Hal 提供安全领导：SC Ventures 面向海湾中小企业、与 Microsoft 共建的 AI 原生、智能体优先增长平台。网络战略、ISMS、云与 AI 智能体安全治理。",
      nusavest: "为东南亚资产支持证券平台（SC Ventures · 渣打银行）制定网络战略与 ISMS。",
      rankiteo: "打造全球首个多操作系统 AI 网络承保桌面平台。提供网络评级、第三方风险与敞口建模通过 MCP 原生分发至 Cursor、Claude Desktop、ChatGPT 与 n8n。",
      seddiqi:  "在整个控股集团推行 ISO/IEC 27001 认证计划。风险登记、SoA 与阿联酋 / 沙特 PDPL 对齐。",
      gambit:   "从零搭建基于 NIST 的网络安全计划。在 BNP Paribas 收购后，于集团框架内将成熟度从 0 提升至 30%。",
      axa:      "负责 Palo Alto Prisma CSPM 在安盛全球各实体的部署。在全球标准与本地监管约束之间寻求一致。",
      tr:       "企业架构治理中的安全架构守门人。Cloudflare 全球部署。在工程与保险之间架起网络承保咨询桥梁。",
      swissre:  "全企业默认安全。对每个重大项目进行架构审查。云、应用与基础设施领域的可复用安全蓝图。",
      sg:       "为银行定义并执行云安全框架。基于风险的云治理与每个云项目的默认安全。",
      architectTitle: "安全解决方案架构师 · 多家财富 500 强",
      architect: "PCI-DSS、HIPAA 等受监管工作负载的云迁移。IaC、加固蓝图、漏洞自动化与原生云 SSO。"
    },

    cases: {
      kicker: "客户案例",
      title: "智能体安全前沿的精选项目",
      lede: "近期网络保险、多云安全与集团 GRC 项目的匿名化摘要。细节因行业而异，并刻意保持宏观，以尊重客户保密。",
      label: { challenge: "挑战", approach: "方法", outcome: "成果" },
      c1: { sector: "网络保险", title: "AI 驱动的网络承保平台",
            challenge: "保险公司与再保险公司亟需实时、基于证据的网络风险数据，以取代静态问卷并加速定价流程。",
            approach: "设计并交付了多操作系统桌面应用，背后是 AI 评级引擎，并通过 MCP 原生方式分发至常见助手客户端，底层依托事件情报语料。",
            outcome: "在网络保险市场获得认可的生产级平台。" },
      c2: { sector: "全球保险集团", title: "全球 CSPM 部署",
            challenge: "一家跨国保险公司在数十个实体之间运营，云安全姿态参差不齐，缺乏统一视图。",
            approach: "担任全球部署技术负责人。跨实体研讨、将集团安全标准与本地监管约束对齐，并转化为可实施的控制。",
            outcome: "整个集团获得单一 CSPM 信号，按司法辖区进行监管对齐。" },
      c3: { sector: "资产管理 · 一级银行集团", title: "并购后的网络成熟度",
            challenge: "新收购实体需要一套形式化的网络计划，对齐收购方的集团框架，并提供可衡量、可辩护的进展证据。",
            approach: "从零搭建基于 NIST 的网络安全计划。控制、政策与程序、风险登记，并对集团层面进行结构化汇报。",
            outcome: "在收购方框架内验证的成熟度提升。" },
      c4: { sector: "海湾地区多元化控股", title: "集团 ISO 27001 认证",
            challenge: "一家多业务控股没有统一的信息安全管理体系，且需符合地区数据保护法规。",
            approach: "高层设计、应用级 IT 风险评估、集团政策框架、SoA，以及与地区监管要求对齐。",
            outcome: "集团范围的 ISO 27001 准备就绪，按部门提供结构化保障。" },
      c5: { sector: "全球金融信息服务商", title: "安全架构守护",
            challenge: "一家全球企业要求在每个重大数字化项目中保持一致的默认安全。",
            approach: "在企业架构治理框架内担任安全架构守门人，提供可复用的云、应用与基础设施蓝图。",
            outcome: "加速的安全交付与更强、更一致的控制成熟度。" },
      c6: { sector: "东南亚 · 资产支持证券", title: "兼职 CISO 任务",
            challenge: "一家新兴投资平台需要资深网络领导力，自第一天起定义其信息安全战略与 ISMS。",
            approach: "兼职 CISO 任务，覆盖目标运营模型、风险偏好、控制目录与监管路线图，并与全球银行母公司协调。",
            outcome: "一套面向投资者与监管者审视的可辩护网络姿态。" }
    },

    pubs: {
      kicker: "出版与认可",
      title: "十年来对公共议题的贡献",
      lede: "OWASP 漏洞研究，曾获最高级别认可的早期社交媒体搜索引擎，以及智能体网络承保工作的持续报道。",
      p1: { tag: "杂志 · OWASP 研究",
            title: "Hakin9 杂志，国际 IT 安全出版物",
            desc: "针对影响主流平台的 OWASP 漏洞进行深入研究，发表于一本国际知名的 IT 安全杂志。" },
      p2: { tag: "产品 · 认可",
            title: "AnoSearch，社交媒体搜索引擎",
            desc: "构建了一个早期社交媒体搜索引擎，从 20 多个网络中提取信号。被评为年度国家级 IT 项目，并向顶级 CEO 与法国国防部长进行展示。" },
      p3: { tag: "行业媒体",
            title: "国际再保险媒体对 Rankiteo 的报道",
            desc: "在主流国际再保险媒体上对 AI 驱动的网络承保与数据驱动的网络保险进行报道与评论。" },
      p4: { tag: "开源 · MCP",
            title: "面向网络评级工具的公开 MCP 文档",
            desc: "MCP 原生网络评级服务器的开放文档与集成，可在主流助手客户端与自动化平台中部署。" },
      p5: { tag: "市场推荐",
            title: "在 Smithery.ai 上推荐的网络评级 MCP 服务器",
            desc: "在主流 MCP 发现目录之一中，被列为网络评级工作流的参考 MCP 服务器。" }
    },

    faq: {
      kicker: "常见问题",
      title: "合作前企业最常问的问题",
      lede: "针对董事会、CISO 与 AI 平台团队首次启动智能体安全项目时最常提出的问题，提供简洁回答。",
      q1: { q: "什么是智能体安全，为何此刻至关重要？",
            a: "智能体安全是一门保护自主 AI 智能体及其调用基础设施的学科。与聊天机器人不同，智能体会推理、规划、调用工具、派生子智能体并跨系统串联决策。每一次工具调用都是具有现实影响的可执行动作，因此安全边界必须从用户会话转移到工具调用本身。随着 Model Context Protocol、LangGraph、LangChain 以及 Azure AI Foundry 等框架的快速普及，企业把智能体推向生产的速度已经超过其安全团队的跟进速度，智能体安全正是用来弥合这一差距。" },
      q2: { q: "它与传统 AI / LLM 安全有何不同？",
            a: "传统 LLM 安全聚焦于提示与模型输出：越狱、提示注入、幻觉、推理时的数据泄露。智能体安全把这一边界扩展到智能体生成计划后所能做的一切，包括工具调用授权、子智能体隔离、多步骤工作流可观测性、动作可回滚，以及针对工具链滥用与数据外泄的红队演练。爆炸半径不再是单次回应，而是一整条工作流。" },
      q3: { q: "您提供哪些合作模式？",
            a: "三种主要合作模式。战略：对您 AI 智能体资产进行董事会级诊断，给出目标架构与 12 个月路线图。构建：与您团队共同前置部署工程能力，在生产环境中实施护栏、子智能体隔离、工具授权与 Langfuse 可观测性。验证：独立的智能体安全审计，包括红队与可呈送董事会的监管映射档案。新兴平台亦可采用兼职 CISO 模式。" },
      q4: { q: "您服务于哪些行业？",
            a: "高风险的受监管行业，包括银行、保险与再保险、资产管理、金融信息服务商、国防、医疗与公共部门。十二年的项目跨越欧洲、海湾地区与亚洲，并对 Swiss Re、AXA、BNP Paribas、Standard Chartered、Thomson Reuters、Société Générale、Seddiqi Holding、NusaVest、Thales、Dassault Systèmes、Veolia、Baxter 与 Gemalto 拥有实战经验。" },
      q5: { q: "您依据哪些框架与法规？",
            a: "针对 AI 治理：ISO/IEC 42001、NIST AI 风险管理框架与欧盟 AI 法案。针对信息安全与数据保护：ISO/IEC 27001 与 27701、SOC 2 Type II、HIPAA、PCI DSS、DORA、NIS2，以及阿联酋 PDPL、沙特 PDPL 与 GDPR 等区域性法规。项目始终把这些框架转化为可部署的控制，而非文书。" },
      q6: { q: "您驻地何处，如何工作？",
            a: "驻地分布在新加坡、迪拜、巴黎与帕罗奥图，跨三大洲承接项目。绝大多数工作以远程方式交付，按项目范围安排现场拜访。典型项目时长：战略或审计数周，完整构建与兼职 CISO 任务则可长达数个季度。" },
      q7: { q: "如何开始合作？",
            a: "一次简短的范围沟通，通常 30 分钟，无须承诺。沟通将厘清您的智能体资产、监管暴露与期望成果。大多数项目在十个工作日内提交结构化诊断与书面方案。" }
    },

    consulting: {
      kicker: "咨询服务",
      title: "面向 AI 原生企业的实战咨询",
      lede: "从董事会战略与架构蓝图，到 Azure AI Foundry、LangGraph、NeMo、SageMaker 与 Prisma Cloud 上的生产级护栏覆盖智能体安全全栈的端到端咨询与落地。",
      t1: { step: "阶段 01 · 战略", title: "智能体 AI 安全战略",
            desc: "对您的 AI 智能体资产进行董事会级诊断。目标架构、监管姿态以及 12 个月的实施路线图。",
            l1: "对每个智能体与工具调用进行威胁建模",
            l2: "对齐 NIST AI RMF、ISO 42001、欧盟 AI 法案",
            l3: "面向 CISO 的风险与成本模型" },
      t2: { step: "阶段 02 · 构建", title: "构建与加固",
            desc: "在您的技术栈上前置部署工程能力。护栏、子智能体隔离、工具授权、Langfuse 可观测性交付至生产环境。",
            l1: "Azure AI Foundry / AWS Bedrock 上的参考架构",
            l2: "带护栏的 LangGraph + LangChain 工作流",
            l3: "Prisma Cloud + Cloudflare 集成" },
      t3: { step: "阶段 03 · 验证", title: "审计与保障",
            desc: "独立的智能体安全审计。提示注入、工具链滥用、数据外泄的红队演练。可呈送董事会的证据档案。",
            l1: "覆盖提示、工具与数据层的红队",
            l2: "SOC 2 / ISO 27001 / DORA / NIS2 映射",
            l3: "持续保障的 Langfuse 仪表板" },
      s1: { title: "智能体 AI 平台与编排" },
      s2: { title: "模型服务与推理" },
      s3: { title: "云安全与 CSPM" },
      s4: { title: "可观测性、评测与护栏" },
      s5: { title: "治理、风险与合规" },
      cta: { title: "准备好为您的智能体平台护航？",
             sub: "首次范围沟通通常 30 分钟，无须承诺。" }
    },

    certs: {
      kicker: "资质认证",
      title: "贯穿整个智能体技术栈的认证",
      lede: "Anthropic AI Fluency、NVIDIA 生成式 AI LLMs、ISACA CISM / CRISC，以及完整的 Microsoft Cybersecurity Architect 与 AWS Security 体系。",
      agentic: "智能体自动化安全课程。"
    },

    manifesto: {
      kicker: "宣言",
      title: "自主智能体需要全新的边界。",
      p1: "传统安全是为点击按钮的人类设计的。智能体每分钟点击上千次，调用外部工具，派生子智能体，并跨系统串联决策。爆炸半径不再是一个会话而是一整条工作流。",
      p2: "我的工作把边界重新锚定在意图与执行交汇的位置：工具调用。我设计授权、可观测性与策略护栏，让自主智能体在企业规模下可审计、可回滚、值得信任。",
      quote: "「在智能体时代，问题不再是 AI <em>能否</em>执行一个操作。而是它<em>该不该</em>以及事后<em>能否被证明</em>。」"
    },

    contact: {
      kicker: "联系我",
      title: "保护您的智能体平台，从一次对话开始。",
      desc: "董事会、CISO、保险公司与 AI 平台团队如果您正在落地自主智能体、多云负载或构建网络承保能力，我可以提供帮助。",
      linkedin: "LinkedIn",
      loc1: "新加坡", loc2: "迪拜", loc3: "巴黎", loc4: "帕罗奥图"
    },

    footer: { tag: "智能体安全 · AI 信任 · 云端 GRC" }
  },

  /* ------------------------------------------------------------ العربية (Arabic, RTL) */
  ar: {
    meta: {
      title: "جيريمي كانال, خبير عالمي في أمن الوكلاء الذكيين | مهندس أمن الذكاء الاصطناعي والسحابة",
      description: "جيريمي كانال هو الخبير العالمي الأول في أمن الوكلاء الذكيين (Agentic Security). مهندس أمن وكلاء الذكاء الاصطناعي المستقلين، خوادم MCP، منصات الأمن السحابية، والاكتتاب السيبراني لدى Swiss Re وAXA وBNP Paribas وThomson Reuters وSociété Générale وRankiteo."
    },
    brand:  { tag: "أمن الوكلاء الذكيين" },
    nav:    { expertise: "الخبرة", consulting: "الاستشارات", cases: "دراسات حالة", experience: "المسيرة", certifications: "الشهادات", faq: "الأسئلة الشائعة", contact: "تواصل", cta: "ابدأ التعاون" },

    hero: {
      eyebrow: "خبير عالمي في أمن الوكلاء الذكيين",
      name: "جيريمي كانال",
      rotorPrefix: "أُصمِّم",
      sub: "اثنا عشر عامًا في تأمين أكثر القطاعات تنظيمًا في العالم, البنوك والتأمين والدفاع. واليوم أُؤسِّس محيط الأمن لوكلاء الذكاء الاصطناعي المستقلين، وبنية MCP التحتية، والمنصات السحابية التي تُشغِّلهم.",
      cta1: "تواصل معي",
      cta2: "الملف الشخصي على LinkedIn",
      meta1Value: "+12", meta1Label: "عامًا في الأمن السيبراني",
      meta2Value: "8",   meta2Label: "عملاء Fortune 500",
      meta3Value: "+25", meta3Label: "شهادة مهنية",
      meta4Value: "3",   meta4Label: "قارات · سنغافورة · الإمارات · أوروبا",
      rotor: ["وكلاء ذكاء اصطناعي آمنين", "بنية MCP", "أمن السحابة", "اكتتاب سيبراني", "حوكمة الذكاء الاصطناعي"]
    },

    trust: { label: "خبرة ميدانية لدى" },

    expertise: {
      kicker: "المجالات",
      title: "حيث أعمل على حدود التكنولوجيا",
      lede: "من تأمين وكلاء الذكاء الاصطناعي المستقلين إلى اكتتاب المخاطر السيبرانية لكبرى شركات التأمين, يقع عملي عند تقاطع القطاعات المنظَّمة والذكاء الاصطناعي الصاعد.",
      flagship: "الممارسة المميِّزة",
      c1: { title: "أمن الذكاء الاصطناعي الوكيلي",   desc: "تأمين شامل لوكلاء LLM المستقلين: خوادم MCP، تفويض استدعاء الأدوات، الدفاع ضد حقن التعليمات، عزل الوكلاء الفرعيين، وضوابط زمن التشغيل." },
      c2: { title: "حوكمة الذكاء الاصطناعي والثقة", desc: "تفعيل ISO/IEC 42001 وNIST AI RMF وقانون الذكاء الاصطناعي الأوروبي. دمج إطار AI Fluency من Anthropic في سجل المخاطر المؤسسي." },
      c3: { title: "أمن السحابة و CSPM",            desc: "هندسة أمنية متعددة السحب لـ AWS وAzure وGCP. نشر Prisma Cloud عالميًا لدى AXA. منظومة Cloudflare لدى Thomson Reuters. مخطَّطات مُحصَّنة، IaC وممارسات SRE." },
      c4: { title: "تقدير المخاطر السيبرانية",     desc: "مؤسس ومدير تنفيذي لـ Rankiteo, أول منصة سطح مكتب للاكتتاب السيبراني المعزَّز بالذكاء الاصطناعي. التسعير، التعرُّض وتحليلات المحفظة للمؤمِّنين ومُعيدي التأمين." },
      c5: { title: "الحوكمة والامتثال GRC",         desc: "شهادات ISO/IEC 27001 على مستوى المجموعة، SOC 2، HIPAA، DORA، NIS2، PDPL الإمارات والمملكة العربية السعودية. بناء برنامج GRC لمجموعة الصدِّيقي وخارطة طريق نضج BNP Paribas." },
      c6: { title: "استخبارات التهديدات والاختراق", desc: "أبحاث OWASP منشورة في مجلة Hakin9. اختبار الاختراق، التنبؤ بالاستغلال، استخبارات سطح الهجوم، وسجل حوادث Rankiteo (أكثر من 100 ألف حادثة)." }
    },

    showcase: {
      kicker: "الثقة بالتصميم",
      title: "مهندس واحد. كل إطار تنظيمي يهمّ.",
      desc: "من ISO/IEC 27001 إلى قانون الذكاء الاصطناعي الأوروبي، تربط مهامي الهندسة بالتنظيم. أُترجم الأُطر إلى ضوابط قابلة للنشر, وأُثبتها بضمان قابل للقياس.",
      b1: "نضج سيبراني من 0% إلى 30% في أقل من 12 شهرًا لـ BNP Paribas Asset Management.",
      b2: "نشر Prisma CSPM عالميًا عبر جميع كيانات AXA حول العالم.",
      b3: "برنامج ISO 27001 على مستوى المجموعة لدى الصدِّيقي القابضة، متوافق مع PDPL الإمارات والسعودية.",
      b4: "حارس بوابة الهندسة الأمنية لدى Swiss Re وThomson Reuters."
    },

    experience: {
      kicker: "المسيرة",
      title: "اثنا عشر عامًا في قيادة أمن المؤسسات المنظَّمة",
      lede: "أدوار ميدانية، من نائب رئيس Swiss Re إلى نائب رئيس أمن المعلومات في مجموعة BNP Paribas Asset Management, واليوم رئيس تنفيذي لشركة اكتتاب سيبراني بالذكاء الاصطناعي.",
      now: "الآن", remote: "عن بُعد", hybrid: "هجين",
      hal: "قيادة الأمن لمنصة Hal، منصة النمو المولودة في الذكاء الاصطناعي والقائمة على الوكلاء من SC Ventures للمنشآت الصغيرة والمتوسطة في الخليج، والمبنية مع Microsoft. استراتيجية سيبرانية، نظام إدارة أمن المعلومات، وحوكمة أمن السحابة ووكلاء الذكاء الاصطناعي.",
      nusavest: "استراتيجية الأمن السيبراني ونظام إدارة أمن المعلومات لمنصة جنوب شرق آسيوية للأوراق المالية المدعومة بالأصول (SC Ventures · Standard Chartered).",
      rankiteo: "بناء أول منصة سطح مكتب متعددة الأنظمة للاكتتاب السيبراني بالذكاء الاصطناعي. تصنيفات سيبرانية، مخاطر الطرف الثالث ونمذجة التعرُّض, مع توزيع MCP أصيل إلى Cursor وClaude Desktop وChatGPT وn8n.",
      seddiqi:  "برنامج شهادة ISO/IEC 27001 على مستوى المجموعة عبر كامل القابضة. سجل المخاطر، بيان القابلية للتطبيق، ومحاذاة PDPL الإمارات والسعودية لكل قسم.",
      gambit:   "بناء برنامج أمن سيبراني قائم على NIST من الصفر. بعد استحواذ BNP Paribas، قُدت تحوُّل النضج من 0% إلى 30% ضمن إطار المجموعة.",
      axa:      "القيادة التقنية للنشر العالمي لـ Palo Alto Prisma CSPM عبر كل كيانات AXA. مواءمة المعايير العالمية مع القيود التنظيمية المحلية.",
      tr:       "حارس بوابة الهندسة الأمنية ضمن حوكمة هندسة المؤسسة. نشر Cloudflare عالميًا. استشارات اكتتاب سيبراني تربط الهندسة بالتأمين.",
      swissre:  "الأمن بالتصميم على مستوى المؤسسة. مراجعة معمارية لكل برنامج رئيسي. مخططات أمنية قابلة لإعادة الاستخدام عبر السحابة والتطبيقات والبنية التحتية.",
      sg:       "تعريف وإنفاذ إطار أمن السحابة للبنك. حوكمة سحابية قائمة على المخاطر، وأمن بالتصميم لكل مبادرة سحابية.",
      architectTitle: "مهندس حلول أمنية · عدة شركات Fortune 500",
      architect: "هجرات سحابية تحت PCI-DSS وHIPAA وأحمال العمل المنظَّمة. IaC، مخططات مُحصَّنة، أتمتة الثغرات، و SSO سحابي أصيل."
    },

    cases: {
      kicker: "دراسات حالة",
      title: "مهام مختارة على حدود أمن الوكلاء الذكيين",
      lede: "ملخصات مجهولة الهوية لمهام حديثة في التأمين السيبراني وأمن السحابة المتعددة والحوكمة على مستوى المجموعة. التفاصيل تختلف بحسب القطاع وتبقى عامة عمدًا احترامًا لسرية العملاء.",
      label: { challenge: "التحدّي", approach: "المقاربة", outcome: "النتيجة" },
      c1: { sector: "التأمين السيبراني", title: "منصة اكتتاب سيبراني مدعومة بالذكاء الاصطناعي",
            challenge: "احتاج المؤمِّنون ومُعيدو التأمين إلى بيانات مخاطر سيبرانية لحظية مستندة إلى أدلة، بديلًا عن الاستبيانات الثابتة، ولتسريع مسار التسعير.",
            approach: "تصميم وتسليم تطبيق سطح مكتب متعدد الأنظمة مدعوم بمحرك تصنيف بالذكاء الاصطناعي، مع توزيع MCP أصيل إلى عملاء المساعدين الشائعين، ومرتكز على مجموعة معرفية للحوادث.",
            outcome: "منصة بدرجة إنتاج معترف بها في سوق التأمين السيبراني." },
      c2: { sector: "مجموعة تأمين عالمية", title: "نشر CSPM على المستوى العالمي",
            challenge: "كان لدى شركة تأمين متعددة الجنسيات تعمل عبر عشرات الكيانات وضع أمني سحابي متباين دون رؤية موحدة.",
            approach: "القيادة التقنية للنشر العالمي. ورش عمل عابرة للكيانات، ومواءمة معايير الأمن للمجموعة مع القيود التنظيمية المحلية، وترجمتها إلى ضوابط قابلة للتنفيذ.",
            outcome: "إشارة CSPM موحدة عبر المجموعة بأكملها، مع مواءمة تنظيمية لكل ولاية." },
      c3: { sector: "إدارة الأصول · مجموعة مصرفية كبرى", title: "نضج سيبراني بعد الاستحواذ",
            challenge: "احتاج كيان مستحدث الاستحواذ إلى برنامج سيبراني مُؤطَّر يتماشى مع إطار المجموعة المستحوذة، مع أدلة قابلة للقياس والدفاع عنها.",
            approach: "بناء برنامج أمن سيبراني قائم على NIST من الصفر. ضوابط وسياسات وإجراءات وسجل مخاطر وتقارير منظمة إلى الجهات المعنية على مستوى المجموعة.",
            outcome: "تقدُّم نضج موثَّق ضمن إطار المجموعة المستحوذة." },
      c4: { sector: "مجموعة قابضة متنوعة · الخليج", title: "اعتماد ISO 27001 على مستوى المجموعة",
            challenge: "مجموعة متعددة الأنشطة دون نظام موحد لإدارة أمن المعلومات، تعمل تحت قوانين حماية بيانات إقليمية.",
            approach: "تصاميم عالية المستوى، تقييمات مخاطر تقنية على مستوى التطبيقات، إطار سياسات للمجموعة، بيان القابلية للتطبيق، ومواءمة مع المتطلبات التنظيمية الإقليمية.",
            outcome: "جاهزية ISO 27001 على مستوى المجموعة مع ضمان مهيكل لكل قسم." },
      c5: { sector: "مزوّد معلومات مالية عالمي", title: "حراسة الهندسة الأمنية",
            challenge: "احتاجت مؤسسة عالمية إلى أمن بالتصميم متسق عبر كل مبادرة رقمية كبرى.",
            approach: "العمل بوصفه حارس بوابة الهندسة الأمنية ضمن حوكمة هندسة المؤسسة، مع مخططات قابلة لإعادة الاستخدام عبر السحابة والتطبيقات والبنية التحتية.",
            outcome: "تسليم آمن مُتسارع ونضج تحكُّم أقوى وأكثر اتساقًا." },
      c6: { sector: "جنوب شرق آسيا · أوراق مالية مدعومة بالأصول", title: "تكليف CISO جزئي",
            challenge: "احتاجت منصة استثمار ناشئة إلى قيادة سيبرانية كبيرة لتعريف استراتيجية أمن المعلومات ونظام ISMS منذ اليوم الأول.",
            approach: "تكليف CISO جزئي يغطي نموذج التشغيل المستهدف، شهية المخاطر، كتالوج الضوابط، وخارطة الطريق التنظيمية، بالتنسيق مع مجموعة مصرفية عالمية أم.",
            outcome: "وضع سيبراني قابل للدفاع جاهز لتدقيق المستثمرين والجهات التنظيمية." }
    },

    pubs: {
      kicker: "النشر والاعتراف",
      title: "عقد من الإسهام في النقاش العام",
      lede: "بحث ثغرات OWASP، ومحرك بحث اجتماعي مبكر حظي بأعلى مستويات الاعتراف، وتغطية مستمرة لأعمال الاكتتاب السيبراني الوكيلي.",
      p1: { tag: "مجلة · بحث OWASP",
            title: "مجلة Hakin9، منشور دولي لأمن المعلومات",
            desc: "بحث معمَّق حول ثغرات قائمة على OWASP تؤثر في منصات كبرى، نُشِر في مجلة دولية مرموقة في أمن المعلومات." },
      p2: { tag: "منتج · اعتراف",
            title: "AnoSearch، محرك بحث وسائل التواصل الاجتماعي",
            desc: "بناء محرك بحث اجتماعي مبكر يستخرج الإشارة من أكثر من عشرين شبكة. اعتُرف به كأحد أفضل المشاريع التقنية الوطنية للسنة، وقُدِّم لرؤساء تنفيذيين كبار ولوزير الدفاع الفرنسي." },
      p3: { tag: "صحافة متخصصة",
            title: "تغطية إعلام إعادة التأمين الدولي لـ Rankiteo",
            desc: "تعليقات بارزة حول الاكتتاب السيبراني المعتمد على الذكاء الاصطناعي والتأمين السيبراني المدفوع بالبيانات في أبرز وسائل إعلام إعادة التأمين الدولية." },
      p4: { tag: "مفتوح المصدر · MCP",
            title: "وثائق MCP عامة لأدوات التصنيف السيبراني",
            desc: "وثائق وتكاملات مفتوحة لخادم MCP أصيل للتصنيف السيبراني، قابل للنشر في عملاء المساعدين الرئيسية ومنصات الأتمتة." },
      p5: { tag: "إدراج في السوق",
            title: "خادم MCP للتصنيف السيبراني مُميَّز على Smithery.ai",
            desc: "مُدرَج بوصفه خادم MCP مرجعيًا لمسارات التصنيف السيبراني ضمن أحد أبرز أدلة اكتشاف MCP." }
    },

    faq: {
      kicker: "الأسئلة الشائعة",
      title: "الأسئلة التي تطرحها المؤسسات قبل أي تعاون",
      lede: "إجابات موجزة على الأسئلة الأكثر تكرارًا من مجالس الإدارة ومدراء أمن المعلومات وفِرق منصات الذكاء الاصطناعي عند تأطير أول مهمة لأمن الوكلاء الذكيين.",
      q1: { q: "ما هو أمن الوكلاء الذكيين ولماذا يهم الآن؟",
            a: "أمن الوكلاء الذكيين هو علم تأمين وكلاء الذكاء الاصطناعي المستقلين والبنية التحتية التي يستدعونها. على خلاف روبوت المحادثة، يقوم الوكيل بالاستدلال والتخطيط واستدعاء الأدوات وتوليد وكلاء فرعيين وربط القرارات عبر الأنظمة. كل استدعاء أداة هو إجراء قابل للتنفيذ بأثر حقيقي، ولذلك يجب أن ينتقل محيط الأمن من جلسة المستخدم إلى استدعاء الأداة نفسه. مع التبني السريع لـ Model Context Protocol وLangGraph وLangChain وأطر مثل Azure AI Foundry، باتت المؤسسات تدفع الوكلاء إلى الإنتاج أسرع مما تستطيع فِرق الأمن مواكبته. وأمن الوكلاء الذكيين هو ما يسدّ هذه الفجوة." },
      q2: { q: "كيف يختلف عن أمن الذكاء الاصطناعي أو LLM التقليدي؟",
            a: "يركّز أمن LLM التقليدي على الموجّه وإخراج النموذج: كسر القيود، حقن الموجّه، الهلوسة، تسريب البيانات أثناء الاستدلال. أمن الوكلاء الذكيين يوسّع هذا المحيط ليشمل كل ما يستطيع الوكيل فعله بعد إنتاج خطة، بما في ذلك تفويض استدعاءات الأدوات، عزل الوكلاء الفرعيين، رصد سير العمل متعدد الخطوات، إمكانية التراجع عن الإجراءات، والفِرَق الحمراء ضد إساءة استخدام سلاسل الأدوات وتسريب البيانات. لم يعد نصف قطر الانفجار ردًّا واحدًا، بل سير عمل بأكمله." },
      q3: { q: "ما نماذج التعاون التي تقدّمها؟",
            a: "ثلاثة نماذج رئيسية. الاستراتيجية: تشخيص بمستوى مجلس الإدارة لمنظومة وكلاء الذكاء الاصطناعي لديك، مع بنية مستهدفة وخارطة طريق لاثني عشر شهرًا. البناء: هندسة مُسبَقة النشر مع فِرقك لتنفيذ ضوابط وعزل الوكلاء الفرعيين وتفويض الأدوات ورصد Langfuse في الإنتاج. الضمان: تدقيق مستقل لأمن الوكلاء الذكيين يشمل فرقًا حمراء وحزمة تخطيط تنظيمي جاهزة لمجلس الإدارة. تتاح أيضًا تكليفات CISO جزئية للمنصات الناشئة." },
      q4: { q: "ما القطاعات التي تخدمها؟",
            a: "القطاعات المنظَّمة عالية المخاطر، بما في ذلك البنوك، التأمين وإعادة التأمين، إدارة الأصول، مزوّدو المعلومات المالية، الدفاع، الرعاية الصحية، والقطاع العام. اثنا عشر عامًا من المهام تمتد عبر أوروبا والخليج وآسيا، مع خبرة ميدانية لصالح Swiss Re وAXA وBNP Paribas وStandard Chartered وThomson Reuters وSociété Générale ومجموعة الصدِّيقي وNusaVest وThales وDassault Systèmes وVeolia وBaxter وGemalto." },
      q5: { q: "ما الأُطُر واللوائح التي تواءم بينها؟",
            a: "ISO/IEC 42001 لأنظمة إدارة الذكاء الاصطناعي، وNIST AI RMF، وقانون الذكاء الاصطناعي الأوروبي للحوكمة الخاصة بالذكاء الاصطناعي. ISO/IEC 27001 و27701 وSOC 2 Type II وHIPAA وPCI DSS وDORA وNIS2، والأنظمة الإقليمية مثل PDPL الإمارات وPDPL السعودية والـ GDPR لأمن المعلومات وحماية البيانات. تترجم المهام دائمًا هذه الأُطر إلى ضوابط قابلة للنشر بدلًا من أوراق." },
      q6: { q: "أين مقرّك وكيف تعمل؟",
            a: "مقرّ موزَّع بين سنغافورة ودبي وباريس وبالو ألتو، مع مهام نشطة عبر ثلاث قارات. تُسلَّم معظم الأعمال عن بُعد، مع زيارات ميدانية بحسب نطاق المهمة. تتراوح المشاريع المعتادة من بضعة أسابيع للاستراتيجية أو التدقيق إلى عدة أرباع للبناء الكامل ومهام CISO الجزئي." },
      q7: { q: "كيف نبدأ؟",
            a: "مكالمة استكشاف قصيرة، عادةً ثلاثون دقيقة، دون أي التزام. توضّح المكالمة منظومة وكلائك، وتعرّضك التنظيمي، والنتيجة المطلوبة. تبدأ معظم المهام بتشخيص مهيكل ومقترح مكتوب خلال عشرة أيام عمل." }
    },

    consulting: {
      kicker: "الاستشارات",
      title: "استشارات ميدانية للمؤسسات الأصيلة في الذكاء الاصطناعي",
      lede: "استشارات وتنفيذ شاملان عبر كامل حزمة أمن الوكلاء الذكيين, من الاستراتيجية على مستوى مجلس الإدارة ومخططات الهندسة المعمارية، وصولاً إلى ضوابط الإنتاج على Azure AI Foundry وLangGraph وNeMo وSageMaker وPrisma Cloud.",
      t1: { step: "المرحلة 01 · الاستراتيجية", title: "استراتيجية أمن الذكاء الاصطناعي الوكيلي",
            desc: "تشخيص على مستوى مجلس الإدارة لمنظومة وكلاء الذكاء الاصطناعي لديك. البنية المستهدفة، الوضع التنظيمي، وخارطة طريق 12 شهرًا للوصول إليها.",
            l1: "نمذجة تهديد لكل وكيل واستدعاء أداة",
            l2: "المواءمة مع NIST AI RMF وISO 42001 وقانون الذكاء الاصطناعي الأوروبي",
            l3: "نموذج مخاطر وتكاليف جاهز للـ CISO" },
      t2: { step: "المرحلة 02 · البناء", title: "البناء والتحصين",
            desc: "هندسة مُسبَقة النشر على منصتك. ضوابط، عزل الوكلاء الفرعيين، تفويض الأدوات، رصد Langfuse, وتسليم إلى الإنتاج.",
            l1: "بنية مرجعية على Azure AI Foundry / AWS Bedrock",
            l2: "تدفقات LangGraph + LangChain مع ضوابط",
            l3: "تكامل Prisma Cloud + Cloudflare" },
      t3: { step: "المرحلة 03 · الضمان", title: "التدقيق والضمان",
            desc: "تدقيق مستقل لأمن الوكلاء الذكيين. فِرَق حمراء لحقن التعليمات وإساءة استخدام سلاسل الأدوات وتسريب البيانات. ملف أدلة جاهز لمجلس الإدارة.",
            l1: "فِرَق حمراء عبر طبقات التعليمات والأدوات والبيانات",
            l2: "مواءمة SOC 2 / ISO 27001 / DORA / NIS2",
            l3: "لوحات Langfuse للضمان المستمر" },
      s1: { title: "منصات وتنسيق الوكلاء الذكيين" },
      s2: { title: "تقديم النماذج والاستدلال" },
      s3: { title: "أمن السحابة وCSPM" },
      s4: { title: "الرصد والتقييم والضوابط" },
      s5: { title: "الحوكمة والمخاطر والامتثال" },
      cta: { title: "هل أنت جاهز لتأمين منصتك للوكلاء الذكيين؟",
             sub: "مكالمة استكشاف أولية, عادةً 30 دقيقة، دون أي التزام." }
    },

    certs: {
      kicker: "الشهادات",
      title: "معتمد عبر كامل حزمة الوكلاء الذكيين",
      lede: "من Anthropic AI Fluency إلى NVIDIA Generative-AI LLMs، وISACA CISM/CRISC، وكامل مسارات Microsoft Cybersecurity Architect وAWS Security.",
      agentic: "منهج أمن الأتمتة الوكيلية."
    },

    manifesto: {
      kicker: "البيان",
      title: "الوكلاء المستقلون يحتاجون محيطًا جديدًا.",
      p1: "الأمن التقليدي بُني للبشر الذين ينقرون أزرارًا. الوكلاء ينقرون آلاف المرات في الدقيقة، يستدعون أدوات خارجية، يُولِّدون وكلاء فرعيين، ويربطون قرارات عبر أنظمة. نصف قطر الانفجار لم يعد جلسة, بل سير عمل كامل.",
      p2: "عملي يُعيد ترسيخ المحيط في النقطة التي تلتقي فيها النيَّة بالتنفيذ: استدعاء الأداة. أُصمِّم التفويض والرصد وضوابط السياسة التي تجعل الوكلاء المستقلين قابلين للتدقيق والعكس والثقة على نطاق المؤسسة.",
      quote: "«في عصر الوكلاء، السؤال ليس هل <em>تستطيع</em> الذكاء الاصطناعي تنفيذ إجراء. بل هل <em>ينبغي</em> له, و <em>هل يمكننا إثبات ذلك</em> لاحقًا.»"
    },

    contact: {
      kicker: "لنتحدَّث",
      title: "تأمين منصتك للوكلاء الذكيين يبدأ بمحادثة.",
      desc: "مجالس الإدارة، مدراء أمن المعلومات، شركات التأمين، وفرق منصات الذكاء الاصطناعي, إن كنت تُطلق وكلاء مستقلين أو أحمال عمل متعددة السحب أو تبني قدرة اكتتاب سيبراني، يمكنني المساعدة.",
      linkedin: "LinkedIn",
      loc1: "سنغافورة", loc2: "دبي", loc3: "باريس", loc4: "بالو ألتو"
    },

    footer: { tag: "أمن الوكلاء الذكيين · ثقة الذكاء الاصطناعي · GRC السحابي" }
  }

};

window.I18N_RTL = { ar: true };
window.I18N_DEFAULT = 'en';
