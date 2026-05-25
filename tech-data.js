/* ============================================================
   Tech landing-page data, 12 flagship technologies x up to 4 languages.
   Auto-merged by merge-tech-trans.js, do not edit by hand below this line.

   Per-language schema:
     category, subtitle, what (paragraph),
     why (bullets[]), how (paragraph), deliverables (bullets[])
   ============================================================ */

const TECH = [

  {
    slug: "azure-ai-foundry",
    title: "Azure AI Foundry",
    vendor: "microsoft",
    vendorName: "Microsoft",
    group: "agentic-platform",
    content: {
      en: {
        category: "Agentic AI platform",
        subtitle: "Building & governing agentic AI on Azure, ready for regulated enterprises.",
        what: "Microsoft's unified platform for building, evaluating, governing and operating generative AI applications and agents on Azure. Azure AI Foundry bundles a model catalog, agent orchestration, content safety, prompt shields, evaluations and the security primitives needed to ship AI agents into regulated enterprise environments.",
        why: [
          "Single control plane for every AI workload across the Azure tenant",
          "Native integration with Microsoft Entra, Defender for Cloud and Sentinel",
          "Built-in content safety, prompt shield and groundedness evaluations",
          "Regulatory alignment for EU AI Act, NIST AI RMF and ISO/IEC 42001",
          "Compresses time-to-production for AI agents from months to weeks"
        ],
        how: "I lead Azure AI Foundry deployments end-to-end: landing-zone design, identity model on Microsoft Entra, agent guardrail and content-safety policy set, prompt shielding, observability, threat modelling, and the security review needed to clear Defender for Cloud benchmarks. I also coach internal teams on the secure operating model.",
        deliverables: [
          "Reference architecture and landing-zone blueprint",
          "Identity and entitlement model on Microsoft Entra",
          "Agent guardrail and content-safety policy set",
          "Threat model of the agent estate",
          "Operating model, runbooks and on-call playbook",
          "Security review pack aligned to internal compliance frameworks"
        ]
      },
      fr: {
        category: "Plateforme d'IA agentique",
        subtitle: "Concevoir et gouverner l'IA agentique sur Azure, prête pour les entreprises régulées.",
        what: "La plateforme unifiée de Microsoft pour concevoir, évaluer, gouverner et exploiter des applications et agents d'IA générative sur Azure. Azure AI Foundry rassemble un catalogue de modèles, l'orchestration d'agents, la sûreté de contenu, les prompt shields, les évaluations et les primitives de sécurité nécessaires pour déployer des agents IA dans des environnements d'entreprise régulés.",
        why: [
          "Plan de contrôle unique pour toutes les charges IA du tenant Azure",
          "Intégration native avec Microsoft Entra, Defender for Cloud et Sentinel",
          "Sûreté de contenu, prompt shield et évaluations de groundedness intégrés",
          "Alignement réglementaire EU AI Act, NIST AI RMF et ISO/IEC 42001",
          "Réduit le délai de mise en production des agents IA de mois à semaines"
        ],
        how: "Je pilote les déploiements Azure AI Foundry de bout en bout : conception de la landing zone, modèle d'identité sur Microsoft Entra, jeu de politiques de garde-fous d'agents et de sûreté de contenu, prompt shielding, observabilité, modélisation des menaces et revue de sécurité nécessaire pour passer les benchmarks Defender for Cloud. J'accompagne aussi les équipes internes sur le modèle opérationnel sécurisé.",
        deliverables: [
          "Architecture de référence et blueprint de landing zone",
          "Modèle d'identité et d'habilitations sur Microsoft Entra",
          "Jeu de politiques de garde-fous d'agents et de sûreté de contenu",
          "Modélisation des menaces sur le parc d'agents",
          "Modèle opérationnel, runbooks et playbook d'astreinte",
          "Dossier de revue de sécurité aligné aux référentiels de conformité internes"
        ]
      },
      zh: {
        category: "智能体 AI 平台",
        subtitle: "在 Azure 上构建并治理智能体 AI，面向受监管企业开箱即用。",
        what: "Microsoft 在 Azure 上构建、评估、治理并运营生成式 AI 应用与智能体的统一平台。Azure AI Foundry 整合了模型目录、智能体编排、内容安全、Prompt Shields、评估能力以及将 AI 智能体投放至受监管企业环境所需的安全原语。",
        why: [
          "覆盖 Azure 租户内所有 AI 工作负载的统一控制面",
          "与 Microsoft Entra、Defender for Cloud 和 Sentinel 原生集成",
          "内置内容安全、Prompt Shield 与基于事实性的评估",
          "对齐 EU AI Act、NIST AI RMF 与 ISO/IEC 42001 等监管要求",
          "将 AI 智能体的投产周期从数月压缩至数周"
        ],
        how: "我端到端主导 Azure AI Foundry 落地：着陆区设计、基于 Microsoft Entra 的身份模型、智能体护栏与内容安全策略集、Prompt 防护、可观测性、威胁建模，以及通过 Defender for Cloud 基线所需的安全评审。同时为内部团队提供安全运营模式的辅导。",
        deliverables: [
          "参考架构与着陆区蓝图",
          "基于 Microsoft Entra 的身份与权限模型",
          "智能体护栏与内容安全策略集",
          "智能体生态的威胁模型",
          "运营模式、操作手册与值班 playbook",
          "对齐内部合规框架的安全评审包"
        ]
      },
      ar: {
        category: "منصة الذكاء الاصطناعي الوكيل",
        subtitle: "بناء وحوكمة الذكاء الاصطناعي الوكيل على Azure، جاهز للمؤسسات الخاضعة للتنظيم.",
        what: "منصة Microsoft الموحّدة لبناء وتقييم وحوكمة وتشغيل تطبيقات ووكلاء الذكاء الاصطناعي التوليدي على Azure. تجمع Azure AI Foundry بين كتالوج النماذج، وتنسيق الوكلاء، وأمان المحتوى، ودروع التوجيهات، والتقييمات، والركائز الأمنية اللازمة لإطلاق وكلاء الذكاء الاصطناعي داخل بيئات المؤسسات الخاضعة للتنظيم.",
        why: [
          "مستوى تحكّم موحّد لكل أحمال عمل الذكاء الاصطناعي عبر مستأجر Azure",
          "تكامل أصلي مع Microsoft Entra وDefender for Cloud وSentinel",
          "أمان محتوى مدمج، ودرع توجيهات، وتقييمات للترسيخ",
          "توافق تنظيمي مع EU AI Act وNIST AI RMF وISO/IEC 42001",
          "اختصار زمن الوصول إلى الإنتاج لوكلاء الذكاء الاصطناعي من أشهر إلى أسابيع"
        ],
        how: "أقود عمليات نشر Azure AI Foundry من البداية إلى النهاية، تصميم منطقة الهبوط، ونموذج الهوية على Microsoft Entra، ومجموعة سياسات حواجز الوكلاء وأمان المحتوى، ودرع التوجيهات، والرصد، ونمذجة التهديدات، والمراجعة الأمنية اللازمة لاجتياز معايير Defender for Cloud. كما أُدرّب الفرق الداخلية على نموذج التشغيل الآمن.",
        deliverables: [
          "هندسة مرجعية ومخطط لمنطقة الهبوط",
          "نموذج الهوية والصلاحيات على Microsoft Entra",
          "مجموعة سياسات حواجز الوكلاء وأمان المحتوى",
          "نموذج تهديدات لمنظومة الوكلاء",
          "نموذج تشغيلي، وأدلة تشغيل، ودليل المناوبة",
          "حزمة مراجعة أمنية متوائمة مع أطر الامتثال الداخلية"
        ]
      }
    }
  },

  {
    slug: "langgraph",
    title: "LangGraph",
    vendor: "generic-violet",
    vendorName: "LangChain Inc.",
    group: "agentic-platform",
    content: {
      en: {
        category: "Stateful agent orchestration",
        subtitle: "The graph-shaped runtime for stateful, multi-actor agent workflows.",
        what: "LangGraph is the open framework for building stateful, multi-actor agent workflows as graphs. Each node is an LLM call or tool invocation, edges encode control flow, and the runtime persists state across turns. LangGraph is the natural choice when an agent needs to reason over multiple steps, branch on outputs, and resume after human-in-the-loop checkpoints.",
        why: [
          "Native support for stateful, long-running agent workflows",
          "Built-in human-in-the-loop checkpoints and approval gates",
          "Time-travel debugging and graph replay for audit",
          "First-class observability through LangSmith and Langfuse",
          "Production friendly: streaming, retries, persistence, sub-graphs"
        ],
        how: "I design LangGraph workflows with security baked in from the first node: scoped tool authorization, sub-graph isolation, deterministic checkpoints for audit, and policy guardrails enforced at edge transitions. I also harden the persistence layer and the observability pipeline.",
        deliverables: [
          "LangGraph reference workflow with security guardrails",
          "Tool authorization model and policy engine integration",
          "Persistence and replay design with audit trail",
          "Observability integration (Langfuse, LangSmith)",
          "Red-team report on tool-chain abuse and prompt injection"
        ]
      },
      fr: {
        category: "Orchestration d'agents à état",
        subtitle: "Le runtime en graphe pour des workflows d'agents multi-acteurs à état.",
        what: "LangGraph est le framework ouvert pour concevoir des workflows d'agents multi-acteurs à état sous forme de graphes. Chaque nœud est un appel LLM ou une invocation d'outil, les arêtes encodent le flux de contrôle et le runtime persiste l'état entre les tours. LangGraph s'impose dès qu'un agent doit raisonner sur plusieurs étapes, brancher sur des sorties et reprendre après des points de contrôle human-in-the-loop.",
        why: [
          "Support natif des workflows d'agents à état et de longue durée",
          "Points de contrôle human-in-the-loop et portes d'approbation intégrés",
          "Débogage time-travel et rejeu de graphe pour l'audit",
          "Observabilité de première classe via LangSmith et Langfuse",
          "Prêt pour la production : streaming, retries, persistance, sous-graphes"
        ],
        how: "Je conçois des workflows LangGraph avec la sécurité intégrée dès le premier nœud : autorisation d'outils à portée limitée, isolation des sous-graphes, points de contrôle déterministes pour l'audit et garde-fous de politique appliqués aux transitions d'arêtes. Je durcis aussi la couche de persistance et le pipeline d'observabilité.",
        deliverables: [
          "Workflow LangGraph de référence avec garde-fous de sécurité",
          "Modèle d'autorisation d'outils et intégration au moteur de politiques",
          "Conception de persistance et de rejeu avec piste d'audit",
          "Intégration de l'observabilité (Langfuse, LangSmith)",
          "Rapport de red team sur l'abus de chaînes d'outils et l'injection de prompt"
        ]
      },
      zh: {
        category: "有状态智能体编排",
        subtitle: "面向有状态、多角色智能体工作流的图式运行时。",
        what: "LangGraph 是以图形方式构建有状态、多角色智能体工作流的开源框架。每个节点是一次 LLM 调用或工具调用，边表示控制流，运行时跨轮次持久化状态。当智能体需要多步推理、按输出分支以及在人机协同检查点之后恢复执行时，LangGraph 是自然之选。",
        why: [
          "原生支持有状态、长时运行的智能体工作流",
          "内置人机协同检查点与审批关卡",
          "支持时间回溯调试与图回放，便于审计",
          "通过 LangSmith 与 Langfuse 实现一流的可观测性",
          "贴近生产：流式、重试、持久化、子图皆备"
        ],
        how: "我从第一个节点起就把安全融入 LangGraph 工作流设计：限定范围的工具授权、子图隔离、可审计的确定性检查点，以及在边转换处强制执行的策略护栏。我同时强化持久化层与可观测性管道。",
        deliverables: [
          "带安全护栏的 LangGraph 参考工作流",
          "工具授权模型与策略引擎集成",
          "带审计轨迹的持久化与回放设计",
          "可观测性集成（Langfuse、LangSmith）",
          "针对工具链滥用与提示注入的红队报告"
        ]
      },
      ar: {
        category: "تنسيق وكلاء بحالة محفوظة",
        subtitle: "وقت التشغيل ذو الشكل البياني لسير عمل الوكلاء متعددي الجهات بحالة محفوظة.",
        what: "LangGraph إطار عمل مفتوح لبناء سير عمل وكلاء متعددي الجهات بحالة محفوظة على شكل رسوم بيانية. كل عقدة هي استدعاء لنموذج لغوي أو لأداة، والحواف ترمز إلى تدفّق التحكّم، ووقت التشغيل يحفظ الحالة عبر الأدوار. LangGraph هو الخيار الطبيعي حين يحتاج الوكيل إلى التفكير عبر عدة خطوات، والتفرّع وفق المخرجات، والاستئناف بعد نقاط تفتيش بمشاركة بشرية.",
        why: [
          "دعم أصلي لسير عمل الوكلاء طويل الأمد وبحالة محفوظة",
          "نقاط تفتيش بمشاركة بشرية وبوّابات اعتماد مدمجة",
          "تنقيح بالسفر عبر الزمن وإعادة تشغيل الرسم البياني للتدقيق",
          "رصد من الطراز الأول عبر LangSmith وLangfuse",
          "ملائم للإنتاج، البثّ المتدفّق، إعادة المحاولات، الثبات، الرسوم الفرعية"
        ],
        how: "أصمّم سير عمل LangGraph بالأمان مدمجاً من العقدة الأولى، تفويض الأدوات بنطاق محدّد، عزل الرسوم الفرعية، نقاط تفتيش حتمية للتدقيق، وحواجز سياسات مُفعَّلة عند انتقالات الحواف. كما أُحصِّن طبقة الثبات وخطّ الرصد.",
        deliverables: [
          "سير عمل مرجعي على LangGraph مع حواجز أمنية",
          "نموذج تفويض الأدوات وتكامل محرك السياسات",
          "تصميم الثبات وإعادة التشغيل مع مسار تدقيق",
          "تكامل الرصد (Langfuse، LangSmith)",
          "تقرير فريق أحمر حول إساءة استخدام سلسلة الأدوات وحقن التوجيهات"
        ]
      }
    }
  },

  {
    slug: "langchain",
    title: "LangChain",
    vendor: "generic-violet",
    vendorName: "LangChain Inc.",
    group: "agentic-platform",
    content: {
      en: {
        category: "LLM application framework",
        subtitle: "The most widely deployed open framework for composing LLM applications.",
        what: "LangChain provides the primitives for chains, agents, tool calls, retrieval and memory, with adapters for every major model provider and vector store. It accelerates time-to-prototype, but reaching production requires careful hardening across tool authorization, observability and evaluation.",
        why: [
          "Largest ecosystem of model, tool and vector-store integrations",
          "Fast prototyping for retrieval, agents and tool use",
          "Production primitives: streaming, tracing, batching, async",
          "Smooth migration path to LangGraph for stateful workflows",
          "Strong community and well-documented patterns"
        ],
        how: "I review existing LangChain deployments for security gaps, migrate retrieval and agent components to a hardened reference architecture, and replace ad-hoc tool integrations with a policy-aware tool layer. I help teams move from prototype to a production-grade pipeline with proper observability and evals.",
        deliverables: [
          "Security audit of existing LangChain code",
          "Hardened reference for chains, agents and retrieval",
          "Tool authorization wrapper and policy enforcement",
          "Evaluation harness (Langfuse with Promptfoo or DeepEval)",
          "Production deployment runbook"
        ]
      },
      fr: {
        category: "Framework applicatif LLM",
        subtitle: "Le framework open source le plus largement déployé pour composer des applications LLM.",
        what: "LangChain fournit les primitives pour les chaînes, agents, appels d'outils, retrieval et mémoire, avec des adaptateurs pour tous les grands fournisseurs de modèles et magasins vectoriels. Il accélère le time-to-prototype, mais atteindre la production exige un durcissement soigné sur l'autorisation d'outils, l'observabilité et l'évaluation.",
        why: [
          "Plus grand écosystème d'intégrations de modèles, outils et magasins vectoriels",
          "Prototypage rapide pour retrieval, agents et tool use",
          "Primitives de production : streaming, tracing, batching, async",
          "Chemin de migration fluide vers LangGraph pour les workflows à état",
          "Communauté forte et patterns bien documentés"
        ],
        how: "Je passe en revue les déploiements LangChain existants pour identifier les failles de sécurité, je migre les composants retrieval et agents vers une architecture de référence durcie, et je remplace les intégrations d'outils ad hoc par une couche d'outils sensible aux politiques. J'aide les équipes à passer du prototype à un pipeline de qualité production avec une observabilité et des évaluations appropriées.",
        deliverables: [
          "Audit de sécurité du code LangChain existant",
          "Référence durcie pour chaînes, agents et retrieval",
          "Wrapper d'autorisation d'outils et application des politiques",
          "Harness d'évaluation (Langfuse avec Promptfoo ou DeepEval)",
          "Runbook de déploiement en production"
        ]
      },
      zh: {
        category: "LLM 应用框架",
        subtitle: "全球部署最广的 LLM 应用编排开源框架。",
        what: "LangChain 提供链、智能体、工具调用、检索与记忆等原语，覆盖主流模型供应商与向量库的适配器。它能显著缩短原型周期，但走向生产需要在工具授权、可观测性与评估等方面进行系统化加固。",
        why: [
          "拥有最大的模型、工具与向量库集成生态",
          "可快速搭建检索、智能体与工具调用原型",
          "具备生产原语：流式、追踪、批处理、异步",
          "向 LangGraph 平滑迁移，支撑有状态工作流",
          "社区庞大，模式文档完善"
        ],
        how: "我审查既有 LangChain 部署的安全短板，将检索与智能体组件迁移至加固后的参考架构，并以策略感知的工具层取代零散集成。我帮助团队从原型走向具备完备可观测性与评估能力的生产级管道。",
        deliverables: [
          "现有 LangChain 代码的安全审计",
          "链、智能体与检索的加固参考实现",
          "工具授权封装与策略执行",
          "评估流水线（Langfuse 搭配 Promptfoo 或 DeepEval）",
          "生产部署操作手册"
        ]
      },
      ar: {
        category: "إطار عمل تطبيقات النماذج اللغوية",
        subtitle: "الإطار المفتوح الأوسع انتشاراً لتأليف تطبيقات النماذج اللغوية.",
        what: "يوفّر LangChain الركائز للسلاسل والوكلاء واستدعاء الأدوات والاسترجاع والذاكرة، مع موائمات لكل مزوّدي النماذج الكبار ومخازن المتجهات. يُسرّع زمن النموذج الأوّلي، لكن الوصول إلى الإنتاج يستلزم تحصيناً دقيقاً عبر تفويض الأدوات والرصد والتقييم.",
        why: [
          "أوسع منظومة تكامل مع النماذج والأدوات ومخازن المتجهات",
          "بناء أوّلي سريع للاسترجاع والوكلاء واستخدام الأدوات",
          "ركائز إنتاجية، البثّ المتدفّق، التتبّع، الدفعات، اللاتزامن",
          "مسار انتقال سلس إلى LangGraph لسير العمل بحالة محفوظة",
          "مجتمع قوي وأنماط موثّقة جيداً"
        ],
        how: "أُراجع عمليات نشر LangChain القائمة بحثاً عن الثغرات الأمنية، وأنقل مكوّنات الاسترجاع والوكلاء إلى هندسة مرجعية محصّنة، وأستبدل تكاملات الأدوات المرتجلة بطبقة أدوات مدركة للسياسات. أُساعد الفرق على الانتقال من النموذج الأوّلي إلى خطّ إنتاج بدرجة احترافية مع رصد وتقييمات سليمة.",
        deliverables: [
          "تدقيق أمني لشيفرة LangChain القائمة",
          "مرجع محصّن للسلاسل والوكلاء والاسترجاع",
          "غلاف تفويض الأدوات وفرض السياسات",
          "حُزمة تقييم (Langfuse مع Promptfoo أو DeepEval)",
          "دليل تشغيل النشر الإنتاجي"
        ]
      }
    }
  },

  {
    slug: "mcp",
    title: "Model Context Protocol",
    vendor: "anthropic",
    vendorName: "Anthropic",
    group: "agentic-platform",
    content: {
      en: {
        category: "Open agent integration standard",
        subtitle: "The connector standard for the agentic era, securing every tool call.",
        what: "The Model Context Protocol is the emerging open standard that lets autonomous agents discover and call external tools, data sources and prompt servers through a unified interface. MCP decouples agent code from tool code, and the same tools become usable by Claude Desktop, Cursor, ChatGPT, n8n and any compliant client.",
        why: [
          "Single integration surface for every tool an agent needs",
          "Decouples agent runtime from tool implementation",
          "Out-of-the-box support in major assistant clients",
          "Enables federated, cross-organisation tool ecosystems",
          "Makes tool calls auditable, scoped and reversible by design"
        ],
        how: "I design MCP servers with security as a first principle: per-tool authorization, transport hardening (mTLS, signed tokens), structured audit, rate limiting and sandboxed execution. I also help teams pick the right MCP integration model for their use case and assistant clients.",
        deliverables: [
          "MCP server reference implementation",
          "Tool authorization and scope model",
          "Transport hardening and key-management plan",
          "Audit-log schema and SIEM integration",
          "Compatibility matrix across major MCP clients"
        ]
      },
      fr: {
        category: "Standard ouvert d'intégration d'agents",
        subtitle: "Le standard de connecteurs de l'ère agentique, qui sécurise chaque appel d'outil.",
        what: "Le Model Context Protocol est le standard ouvert émergent qui permet à des agents autonomes de découvrir et d'appeler des outils, sources de données et serveurs de prompts externes via une interface unifiée. MCP découple le code d'agent du code d'outil, et les mêmes outils deviennent utilisables par Claude Desktop, Cursor, ChatGPT, n8n et tout client conforme.",
        why: [
          "Surface d'intégration unique pour tous les outils dont un agent a besoin",
          "Découple le runtime de l'agent de l'implémentation des outils",
          "Support prêt à l'emploi dans les principaux clients assistants",
          "Permet des écosystèmes d'outils fédérés et inter-organisationnels",
          "Rend les appels d'outils auditables, à portée définie et réversibles par conception"
        ],
        how: "Je conçois des serveurs MCP avec la sécurité comme premier principe : autorisation par outil, durcissement du transport (mTLS, jetons signés), audit structuré, limitation de débit et exécution sandboxée. J'aide aussi les équipes à choisir le bon modèle d'intégration MCP pour leur cas d'usage et leurs clients assistants.",
        deliverables: [
          "Implémentation de référence d'un serveur MCP",
          "Modèle d'autorisation et de portée d'outils",
          "Plan de durcissement du transport et de gestion des clés",
          "Schéma de journal d'audit et intégration SIEM",
          "Matrice de compatibilité avec les principaux clients MCP"
        ]
      },
      zh: {
        category: "开放式智能体集成标准",
        subtitle: "智能体时代的连接器标准，让每次工具调用都安全可控。",
        what: "Model Context Protocol 是新兴的开放标准，让自治智能体通过统一接口发现并调用外部工具、数据源与 prompt 服务。MCP 将智能体代码与工具代码解耦，同一套工具可被 Claude Desktop、Cursor、ChatGPT、n8n 以及任何兼容客户端调用。",
        why: [
          "为智能体所需的全部工具提供统一接入面",
          "将智能体运行时与工具实现解耦",
          "在主流助手客户端中开箱可用",
          "支撑联邦化、跨组织的工具生态",
          "工具调用天生可审计、可限定范围、可回退"
        ],
        how: "我以安全为首要原则设计 MCP 服务器：按工具粒度的授权、传输加固（mTLS、签名令牌）、结构化审计、限流以及沙箱执行。我也帮助团队为其用例与助手客户端选择合适的 MCP 集成模式。",
        deliverables: [
          "MCP 服务器参考实现",
          "工具授权与范围模型",
          "传输加固与密钥管理方案",
          "审计日志 schema 与 SIEM 集成",
          "覆盖主流 MCP 客户端的兼容性矩阵"
        ]
      },
      ar: {
        category: "معيار مفتوح لتكامل الوكلاء",
        subtitle: "معيار الموصّلات لعصر الوكلاء، يؤمّن كل استدعاء أداة.",
        what: "Model Context Protocol هو المعيار المفتوح الناشئ الذي يتيح للوكلاء المستقلين اكتشاف واستدعاء الأدوات الخارجية ومصادر البيانات وخوادم التوجيهات عبر واجهة موحّدة. يفصل MCP شيفرة الوكيل عن شيفرة الأدوات، فتصبح الأدوات نفسها قابلة للاستخدام من Claude Desktop وCursor وChatGPT وn8n وأي عميل متوافق.",
        why: [
          "سطح تكامل واحد لكل أداة يحتاجها الوكيل",
          "يفصل وقت تشغيل الوكيل عن تنفيذ الأدوات",
          "دعم جاهز في عملاء المساعدين الكبار",
          "يُمكّن منظومات أدوات اتحادية وعابرة للمؤسسات",
          "يجعل استدعاءات الأدوات قابلة للتدقيق والتحديد والعكس بحكم التصميم"
        ],
        how: "أصمّم خوادم MCP بالأمان مبدأً أول، تفويض لكل أداة، تحصين النقل (mTLS، رموز موقّعة)، تدقيق منظَّم، تحديد المعدّل، تنفيذ معزول. كما أساعد الفرق على اختيار نموذج تكامل MCP المناسب لحالة الاستخدام وعملاء المساعدين لديهم.",
        deliverables: [
          "تنفيذ مرجعي لخادم MCP",
          "نموذج تفويض الأدوات ونطاقاتها",
          "تحصين النقل وخطة إدارة المفاتيح",
          "مخطّط سجلّ التدقيق وتكامل SIEM",
          "مصفوفة توافق عبر عملاء MCP الكبار"
        ]
      }
    }
  },

  {
    slug: "nvidia-nemo",
    title: "NVIDIA NeMo",
    vendor: "nvidia",
    vendorName: "NVIDIA",
    group: "inference",
    content: {
      en: {
        category: "Generative AI stack",
        subtitle: "NVIDIA's full stack for in-house generative AI, with built-in guardrails.",
        what: "NVIDIA NeMo is the full stack for building and customising generative AI models, including foundation model training, fine-tuning, retrieval, and NeMo Guardrails for safety. NeMo is the natural choice when an enterprise wants to deploy and adapt models inside its own perimeter, on accelerated infrastructure.",
        why: [
          "End-to-end stack from data curation to deployment",
          "Native NeMo Guardrails for input, output and topic safety",
          "Optimised for NVIDIA GPUs and accelerated infrastructure",
          "On-premise and sovereign-cloud friendly",
          "Integrates with Triton for high-throughput inference"
        ],
        how: "I help teams deploy NeMo for in-house generative AI workloads, configure NeMo Guardrails to enforce safety policies, integrate with Triton for serving, and pass the security and regulatory review needed for regulated industries.",
        deliverables: [
          "NeMo deployment architecture",
          "NeMo Guardrails policy set",
          "Triton integration plan for serving",
          "Threat model and red-team report",
          "Operational runbooks and monitoring"
        ]
      },
      fr: {
        category: "Stack d'IA générative",
        subtitle: "La stack complète de NVIDIA pour l'IA générative interne, avec garde-fous intégrés.",
        what: "NVIDIA NeMo est la stack complète pour concevoir et adapter des modèles d'IA générative, incluant l'entraînement de modèles de fondation, le fine-tuning, le retrieval et NeMo Guardrails pour la sûreté. NeMo s'impose quand une entreprise veut déployer et adapter des modèles à l'intérieur de son propre périmètre, sur une infrastructure accélérée.",
        why: [
          "Stack de bout en bout, de la curation des données au déploiement",
          "NeMo Guardrails natifs pour la sûreté en entrée, sortie et par sujet",
          "Optimisée pour les GPU NVIDIA et l'infrastructure accélérée",
          "Compatible on-premise et cloud souverain",
          "S'intègre à Triton pour l'inférence à fort débit"
        ],
        how: "J'aide les équipes à déployer NeMo pour des charges d'IA générative internes, à configurer NeMo Guardrails pour appliquer des politiques de sûreté, à l'intégrer à Triton pour le serving, et à passer la revue de sécurité et réglementaire requise dans les industries régulées.",
        deliverables: [
          "Architecture de déploiement NeMo",
          "Jeu de politiques NeMo Guardrails",
          "Plan d'intégration Triton pour le serving",
          "Modélisation des menaces et rapport de red team",
          "Runbooks opérationnels et supervision"
        ]
      },
      zh: {
        category: "生成式 AI 全栈",
        subtitle: "NVIDIA 的自有生成式 AI 全栈，内置安全护栏。",
        what: "NVIDIA NeMo 是用于构建与定制生成式 AI 模型的全栈，涵盖基础模型训练、微调、检索以及用于安全治理的 NeMo Guardrails。当企业希望在自有边界与加速基础设施内部署并改造模型时，NeMo 是自然之选。",
        why: [
          "从数据治理到部署的端到端全栈",
          "原生 NeMo Guardrails，覆盖输入、输出与话题安全",
          "针对 NVIDIA GPU 与加速基础设施做了深度优化",
          "适配本地化部署与主权云",
          "可与 Triton 集成，实现高吞吐推理"
        ],
        how: "我帮助团队部署 NeMo 以承载自有生成式 AI 工作负载，配置 NeMo Guardrails 强制执行安全策略，集成 Triton 完成服务化，并通过受监管行业所需的安全与合规评审。",
        deliverables: [
          "NeMo 部署架构",
          "NeMo Guardrails 策略集",
          "面向服务化的 Triton 集成方案",
          "威胁模型与红队报告",
          "运维手册与监控方案"
        ]
      },
      ar: {
        category: "حزمة الذكاء الاصطناعي التوليدي",
        subtitle: "حزمة NVIDIA الكاملة للذكاء الاصطناعي التوليدي داخل المؤسسة، بحواجز مدمجة.",
        what: "NVIDIA NeMo هي الحزمة الكاملة لبناء وتخصيص نماذج الذكاء الاصطناعي التوليدي، تشمل تدريب النماذج الأساسية، والضبط الدقيق، والاسترجاع، وNeMo Guardrails للأمان. NeMo هو الخيار الطبيعي حين ترغب المؤسسة في نشر النماذج وتكييفها داخل محيطها الخاص، على بنية تحتية مُسرَّعة.",
        why: [
          "حزمة كاملة من تنسيق البيانات إلى النشر",
          "حواجز NeMo Guardrails أصلية للأمان في المدخلات والمخرجات والمواضيع",
          "محسَّنة لوحدات GPU من NVIDIA والبنية التحتية المُسرَّعة",
          "ملائمة للنشر داخل المؤسسة والسحابة السيادية",
          "تتكامل مع Triton لاستدلال عالي الإنتاجية"
        ],
        how: "أُساعد الفرق على نشر NeMo لأحمال عمل الذكاء الاصطناعي التوليدي داخل المؤسسة، وتهيئة NeMo Guardrails لفرض سياسات الأمان، والتكامل مع Triton للخدمة، واجتياز المراجعة الأمنية والتنظيمية اللازمة للقطاعات الخاضعة للتنظيم.",
        deliverables: [
          "هندسة نشر NeMo",
          "مجموعة سياسات NeMo Guardrails",
          "خطة تكامل Triton للخدمة",
          "نموذج تهديدات وتقرير فريق أحمر",
          "أدلة تشغيل ورصد"
        ]
      }
    }
  },

  {
    slug: "nvidia-triton",
    title: "NVIDIA Triton Inference Server",
    vendor: "nvidia",
    vendorName: "NVIDIA",
    group: "inference",
    content: {
      en: {
        category: "High-performance model serving",
        subtitle: "Multi-framework, multi-device inference at production scale.",
        what: "NVIDIA Triton is the high-performance inference server for serving any model framework, including PyTorch, TensorFlow, ONNX, TensorRT, OpenVINO and vLLM, on CPU or GPU, with dynamic batching, model versioning and ensemble support. Triton is the workhorse for production model serving at scale.",
        why: [
          "Multi-framework, multi-device serving in one server",
          "Dynamic batching for cost-efficient GPU utilisation",
          "Model versioning, ensembles and inference pipelines",
          "Standard metrics (Prometheus), tracing and health endpoints",
          "Battle-tested at hyperscale"
        ],
        how: "I design Triton deployments tuned for latency, throughput and cost, with rolling-update model management, multi-tenant isolation, GPU scheduling, and security boundaries between models and tenants. I integrate Triton with the broader observability and security stack.",
        deliverables: [
          "Triton deployment architecture",
          "Model packaging and version policy",
          "Multi-tenant isolation and authorization plan",
          "Observability integration (Prometheus, OpenTelemetry)",
          "Performance and cost benchmark"
        ]
      },
      fr: {
        category: "Serving de modèles haute performance",
        subtitle: "Inférence multi-framework et multi-device à l'échelle de la production.",
        what: "NVIDIA Triton est le serveur d'inférence haute performance pour servir n'importe quel framework de modèle, dont PyTorch, TensorFlow, ONNX, TensorRT, OpenVINO et vLLM, sur CPU ou GPU, avec batching dynamique, versioning de modèles et support des ensembles. Triton est le cheval de trait du serving de modèles en production à grande échelle.",
        why: [
          "Serving multi-framework et multi-device dans un seul serveur",
          "Batching dynamique pour une utilisation GPU efficiente en coût",
          "Versioning de modèles, ensembles et pipelines d'inférence",
          "Métriques standard (Prometheus), tracing et endpoints de santé",
          "Éprouvé à l'échelle hyperscale"
        ],
        how: "Je conçois des déploiements Triton optimisés pour la latence, le débit et le coût, avec gestion de modèles en rolling-update, isolation multi-tenant, scheduling GPU et frontières de sécurité entre modèles et tenants. J'intègre Triton à la stack plus large d'observabilité et de sécurité.",
        deliverables: [
          "Architecture de déploiement Triton",
          "Politique de packaging et de versions de modèles",
          "Plan d'isolation multi-tenant et d'autorisation",
          "Intégration de l'observabilité (Prometheus, OpenTelemetry)",
          "Benchmark de performance et de coût"
        ]
      },
      zh: {
        category: "高性能模型服务化",
        subtitle: "多框架、多设备的生产级推理服务。",
        what: "NVIDIA Triton 是面向各类模型框架的高性能推理服务，支持 PyTorch、TensorFlow、ONNX、TensorRT、OpenVINO 与 vLLM，可在 CPU 或 GPU 上运行，具备动态批处理、模型版本管理与集成模型能力。Triton 是规模化生产推理的主力引擎。",
        why: [
          "单一服务即可承载多框架、多设备推理",
          "动态批处理，提升 GPU 使用经济性",
          "支持模型版本、集成模型与推理流水线",
          "标准化指标（Prometheus）、追踪与健康检查端点",
          "已在超大规模环境中验证"
        ],
        how: "我设计兼顾时延、吞吐与成本的 Triton 部署，支持滚动更新的模型管理、多租户隔离、GPU 调度以及模型与租户之间的安全边界。我把 Triton 接入更广义的可观测性与安全栈。",
        deliverables: [
          "Triton 部署架构",
          "模型打包与版本策略",
          "多租户隔离与授权方案",
          "可观测性集成（Prometheus、OpenTelemetry）",
          "性能与成本基准测试"
        ]
      },
      ar: {
        category: "خدمة نماذج عالية الأداء",
        subtitle: "استدلال متعدّد الأُطر والأجهزة على نطاق إنتاجي.",
        what: "NVIDIA Triton هو خادم استدلال عالي الأداء لخدمة أي إطار نماذج، يشمل PyTorch وTensorFlow وONNX وTensorRT وOpenVINO وvLLM، على CPU أو GPU، مع تجميع ديناميكي للدفعات، وإدارة إصدارات النماذج، ودعم التجميعات. Triton هو حصان العمل لخدمة النماذج إنتاجياً على نطاق واسع.",
        why: [
          "خدمة متعدّدة الأُطر والأجهزة في خادم واحد",
          "تجميع ديناميكي للدفعات لاستخدام GPU بكفاءة من حيث التكلفة",
          "إدارة إصدارات النماذج، والتجميعات، وخطوط أنابيب الاستدلال",
          "مقاييس قياسية (Prometheus)، وتتبّع، ونقاط نهاية للصحة",
          "مُختبَر ميدانياً على نطاق فائق"
        ],
        how: "أصمّم عمليات نشر Triton مضبوطة على الكمون والإنتاجية والتكلفة، مع إدارة النماذج بالتحديث التدريجي، وعزل متعدّد المستأجرين، وجدولة GPU، وحدود أمنية بين النماذج والمستأجرين. أُدمج Triton مع الحزمة الأوسع للرصد والأمن.",
        deliverables: [
          "هندسة نشر Triton",
          "سياسة تغليف النماذج وإصداراتها",
          "خطة عزل متعدّد المستأجرين والتفويض",
          "تكامل الرصد (Prometheus، OpenTelemetry)",
          "قياس مرجعي للأداء والتكلفة"
        ]
      }
    }
  },

  {
    slug: "aws-sagemaker",
    title: "AWS SageMaker",
    vendor: "aws",
    vendorName: "Amazon Web Services",
    group: "inference",
    content: {
      en: {
        category: "Managed ML lifecycle",
        subtitle: "The natural home for ML workloads inside the AWS perimeter.",
        what: "AWS SageMaker is the managed platform for the full ML lifecycle, from data labelling and training to deployment, monitoring and governance. SageMaker now includes managed endpoints for foundation models, native vector stores and built-in model evaluation, with deep AWS integration.",
        why: [
          "Managed end-to-end ML lifecycle on AWS",
          "Native integration with IAM, KMS, PrivateLink and CloudTrail",
          "Foundation-model deployment via JumpStart and Bedrock interop",
          "Built-in model monitoring, drift detection and Clarify",
          "Strong compliance posture (HIPAA, SOC 2, FedRAMP)"
        ],
        how: "I design SageMaker architectures aligned to your security boundary: VPC isolation, KMS-encrypted artefacts, fine-grained IAM, model approval workflow, and integration with your existing CSPM tooling. I also help with the cost and governance review.",
        deliverables: [
          "SageMaker landing-zone and VPC design",
          "IAM model with least-privilege boundaries",
          "Endpoint deployment and approval workflow",
          "Monitoring, drift detection and audit pipeline",
          "Cost and governance review"
        ]
      },
      fr: {
        category: "Cycle de vie ML managé",
        subtitle: "Le foyer naturel des charges ML à l'intérieur du périmètre AWS.",
        what: "AWS SageMaker est la plateforme managée pour l'intégralité du cycle de vie ML, de l'étiquetage des données et l'entraînement au déploiement, à la supervision et à la gouvernance. SageMaker inclut désormais des endpoints managés pour les modèles de fondation, des magasins vectoriels natifs et l'évaluation de modèles intégrée, avec une intégration AWS profonde.",
        why: [
          "Cycle de vie ML managé de bout en bout sur AWS",
          "Intégration native avec IAM, KMS, PrivateLink et CloudTrail",
          "Déploiement de modèles de fondation via JumpStart et interopérabilité Bedrock",
          "Supervision de modèles, détection de dérive et Clarify intégrés",
          "Posture de conformité solide (HIPAA, SOC 2, FedRAMP)"
        ],
        how: "Je conçois des architectures SageMaker alignées à votre frontière de sécurité : isolation VPC, artefacts chiffrés par KMS, IAM à granularité fine, workflow d'approbation de modèles et intégration à votre outillage CSPM existant. J'accompagne aussi la revue de coûts et de gouvernance.",
        deliverables: [
          "Landing zone SageMaker et conception VPC",
          "Modèle IAM avec frontières de moindre privilège",
          "Workflow de déploiement et d'approbation d'endpoints",
          "Pipeline de supervision, détection de dérive et audit",
          "Revue de coûts et de gouvernance"
        ]
      },
      zh: {
        category: "托管式 ML 生命周期",
        subtitle: "AWS 边界内承载 ML 工作负载的自然之家。",
        what: "AWS SageMaker 是面向 ML 全生命周期的托管平台，覆盖数据标注、训练、部署、监控与治理。SageMaker 现已纳入基础模型托管端点、原生向量库与内置模型评估，并与 AWS 服务深度集成。",
        why: [
          "在 AWS 上托管端到端 ML 生命周期",
          "与 IAM、KMS、PrivateLink 及 CloudTrail 原生集成",
          "通过 JumpStart 与 Bedrock 互通部署基础模型",
          "内置模型监控、漂移检测与 Clarify",
          "合规姿态稳健（HIPAA、SOC 2、FedRAMP）"
        ],
        how: "我根据贵司的安全边界设计 SageMaker 架构：VPC 隔离、KMS 加密的产物、细粒度 IAM、模型审批流，以及与现有 CSPM 工具的对接。我也协助进行成本与治理评审。",
        deliverables: [
          "SageMaker 着陆区与 VPC 设计",
          "遵循最小权限边界的 IAM 模型",
          "端点部署与审批工作流",
          "监控、漂移检测与审计管道",
          "成本与治理评审"
        ]
      },
      ar: {
        category: "دورة حياة تعلّم الآلة المُدارة",
        subtitle: "البيت الطبيعي لأحمال عمل تعلّم الآلة داخل محيط AWS.",
        what: "AWS SageMaker هي المنصة المُدارة لدورة حياة تعلّم الآلة الكاملة، من وسم البيانات والتدريب إلى النشر والرصد والحوكمة. تشمل SageMaker الآن نقاط نهاية مُدارة للنماذج الأساسية، ومخازن متجهات أصلية، وتقييماً مدمجاً للنماذج، مع تكامل عميق مع AWS.",
        why: [
          "دورة حياة كاملة لتعلّم الآلة مُدارة على AWS",
          "تكامل أصلي مع IAM وKMS وPrivateLink وCloudTrail",
          "نشر النماذج الأساسية عبر JumpStart وتشغيل بيني مع Bedrock",
          "رصد للنماذج، وكشف الانحراف، وClarify مدمج",
          "وضع امتثال قوي (HIPAA، SOC 2، FedRAMP)"
        ],
        how: "أصمّم هندسات SageMaker متوائمة مع حدودك الأمنية، عزل VPC، مُكوَّنات مُشفَّرة بـ KMS، IAM دقيق التحبيب، سير عمل اعتماد النماذج، وتكامل مع أدوات CSPM القائمة لديك. كما أساعد في مراجعة التكلفة والحوكمة.",
        deliverables: [
          "تصميم منطقة هبوط SageMaker وVPC",
          "نموذج IAM بحدود الحدّ الأدنى من الامتيازات",
          "سير عمل نشر نقاط النهاية واعتمادها",
          "خطّ رصد، وكشف انحراف، وتدقيق",
          "مراجعة التكلفة والحوكمة"
        ]
      }
    }
  },

  {
    slug: "palo-alto-prisma-cloud",
    title: "Palo Alto Prisma Cloud",
    vendor: "paloalto",
    vendorName: "Palo Alto Networks",
    group: "cloud-security",
    content: {
      en: {
        category: "Code-to-cloud security platform",
        subtitle: "A single pane of glass for security across multi-cloud estates.",
        what: "Palo Alto Prisma Cloud is the code-to-cloud security platform that bundles CSPM, CIEM, CWPP, IaC scanning, container security and AI runtime security across AWS, Azure, GCP and Oracle Cloud. It is the unified posture and runtime defence layer for enterprises operating across multiple clouds.",
        why: [
          "Unified posture across AWS, Azure, GCP and OCI",
          "Code-to-cloud: IaC scan, registry scan and runtime in one product",
          "CIEM for identity and entitlement risk across clouds",
          "Runtime defence for containers, hosts, serverless and AI workloads",
          "Strong compliance content for ISO, SOC, HIPAA, PCI and NIST"
        ],
        how: "I have led the worldwide rollout of Prisma Cloud at a tier-one global insurer. I design the deployment topology, the policy framework, the alert triage workflow and the SOC integration. I also coach teams through the operating model so the platform sticks long after onboarding.",
        deliverables: [
          "Deployment topology across all cloud accounts",
          "Policy framework covering governance, code and runtime",
          "Alert triage and SOC integration workflow",
          "Identity and entitlement remediation plan",
          "Onboarding plan and operating model"
        ]
      },
      fr: {
        category: "Plateforme de sécurité code-to-cloud",
        subtitle: "Une vue unique pour la sécurité sur des parcs multi-cloud.",
        what: "Palo Alto Prisma Cloud est la plateforme de sécurité code-to-cloud qui rassemble CSPM, CIEM, CWPP, scan IaC, sécurité des conteneurs et sécurité runtime de l'IA sur AWS, Azure, GCP et Oracle Cloud. C'est la couche unifiée de posture et de défense runtime pour les entreprises opérant sur plusieurs clouds.",
        why: [
          "Posture unifiée sur AWS, Azure, GCP et OCI",
          "Code-to-cloud : scan IaC, scan de registre et runtime dans un seul produit",
          "CIEM pour le risque d'identité et d'habilitations entre clouds",
          "Défense runtime pour conteneurs, hôtes, serverless et charges IA",
          "Contenu de conformité solide pour ISO, SOC, HIPAA, PCI et NIST"
        ],
        how: "J'ai piloté le déploiement mondial de Prisma Cloud chez un assureur global de premier rang. Je conçois la topologie de déploiement, le cadre de politiques, le workflow de triage d'alertes et l'intégration au SOC. J'accompagne aussi les équipes sur le modèle opérationnel pour que la plateforme s'enracine bien après l'onboarding.",
        deliverables: [
          "Topologie de déploiement sur l'ensemble des comptes cloud",
          "Cadre de politiques couvrant gouvernance, code et runtime",
          "Workflow de triage d'alertes et intégration SOC",
          "Plan de remédiation des identités et habilitations",
          "Plan d'onboarding et modèle opérationnel"
        ]
      },
      zh: {
        category: "代码到云的安全平台",
        subtitle: "覆盖多云资产的统一安全单一视图。",
        what: "Palo Alto Prisma Cloud 是覆盖代码到云的安全平台，在 AWS、Azure、GCP 与 Oracle Cloud 上整合 CSPM、CIEM、CWPP、IaC 扫描、容器安全以及 AI 运行时安全。它是横跨多云企业的统一态势与运行时防御层。",
        why: [
          "在 AWS、Azure、GCP 与 OCI 上提供统一态势",
          "代码到云：IaC 扫描、镜像仓库扫描与运行时防御一体化",
          "通过 CIEM 治理跨云的身份与权限风险",
          "为容器、主机、Serverless 及 AI 工作负载提供运行时防御",
          "对 ISO、SOC、HIPAA、PCI 与 NIST 的合规内容丰富"
        ],
        how: "我曾在一家全球一级保险集团主导 Prisma Cloud 的全球落地。我设计部署拓扑、策略框架、告警分诊流程与 SOC 集成。我也指导团队建立运营模式，确保平台在交付之后长期生根。",
        deliverables: [
          "覆盖所有云账户的部署拓扑",
          "覆盖治理、代码与运行时的策略框架",
          "告警分诊与 SOC 集成工作流",
          "身份与权限修复方案",
          "上线计划与运营模式"
        ]
      },
      ar: {
        category: "منصة أمن من الشيفرة إلى السحابة",
        subtitle: "لوحة موحّدة للأمن عبر منظومات السحابة المتعدّدة.",
        what: "Palo Alto Prisma Cloud هي منصة أمن من الشيفرة إلى السحابة، تجمع CSPM وCIEM وCWPP وفحص IaC وأمن الحاويات وأمن وقت تشغيل الذكاء الاصطناعي عبر AWS وAzure وGCP وOracle Cloud. هي طبقة الوضع الموحَّد والدفاع في وقت التشغيل للمؤسسات العاملة عبر سحابات متعدّدة.",
        why: [
          "وضع موحّد عبر AWS وAzure وGCP وOCI",
          "من الشيفرة إلى السحابة، فحص IaC، فحص السجلّات، ووقت التشغيل في منتج واحد",
          "CIEM لمخاطر الهوية والصلاحيات عبر السحابات",
          "دفاع في وقت التشغيل للحاويات والمضيفات وبدون الخوادم وأحمال الذكاء الاصطناعي",
          "محتوى امتثال قوي لـ ISO وSOC وHIPAA وPCI وNIST"
        ],
        how: "قدتُ النشر العالمي لـ Prisma Cloud لدى شركة تأمين عالمية من الفئة الأولى. أصمّم طوبولوجيا النشر، وإطار السياسات، وسير عمل فرز التنبيهات، وتكامل مركز العمليات الأمنية. كما أُدرّب الفرق على النموذج التشغيلي ليبقى استخدام المنصّة راسخاً بعد الإعداد بوقت طويل.",
        deliverables: [
          "طوبولوجيا نشر عبر كل حسابات السحابة",
          "إطار سياسات يغطّي الحوكمة والشيفرة ووقت التشغيل",
          "سير عمل فرز التنبيهات والتكامل مع مركز العمليات الأمنية",
          "خطة معالجة الهوية والصلاحيات",
          "خطة الإعداد والنموذج التشغيلي"
        ]
      }
    }
  },

  {
    slug: "langfuse",
    title: "Langfuse",
    vendor: "generic-green",
    vendorName: "Langfuse",
    group: "observability",
    content: {
      en: {
        category: "LLM observability & evaluation",
        subtitle: "The standard observability layer for production LLM and agent applications.",
        what: "Langfuse is the open-source observability and evaluation platform for LLM applications. It captures every prompt, tool call and trace from your agent stack, then provides evaluations, datasets, prompt management and cost tracking. Langfuse is rapidly becoming the default observability layer for production agentic systems.",
        why: [
          "End-to-end traces for every agent run and tool call",
          "Online and offline evaluations with custom evaluators",
          "Prompt versioning and A/B testing",
          "Cost and latency tracking at the call level",
          "Open source, self-hosted friendly, SDKs for major frameworks"
        ],
        how: "I integrate Langfuse into your existing agent stack (LangGraph, LangChain, OpenAI Agents, Bedrock Agents), design the evaluation harness, set up alerts on drift and policy violations, and pipe traces into your SIEM for audit.",
        deliverables: [
          "Langfuse self-hosted deployment design",
          "SDK integration across your agent stack",
          "Evaluation harness with custom evaluators",
          "Drift and policy-violation alerting",
          "SIEM integration for audit"
        ]
      },
      fr: {
        category: "Observabilité et évaluation LLM",
        subtitle: "La couche d'observabilité standard pour les applications LLM et agents en production.",
        what: "Langfuse est la plateforme open source d'observabilité et d'évaluation pour les applications LLM. Elle capture chaque prompt, appel d'outil et trace de votre stack d'agents, puis fournit évaluations, datasets, gestion de prompts et suivi des coûts. Langfuse devient rapidement la couche d'observabilité par défaut des systèmes agentiques en production.",
        why: [
          "Traces de bout en bout pour chaque exécution d'agent et appel d'outil",
          "Évaluations online et offline avec évaluateurs personnalisés",
          "Versioning de prompts et tests A/B",
          "Suivi des coûts et de la latence au niveau de l'appel",
          "Open source, compatible self-hosted, SDK pour les principaux frameworks"
        ],
        how: "J'intègre Langfuse dans votre stack d'agents existante (LangGraph, LangChain, OpenAI Agents, Bedrock Agents), je conçois le harness d'évaluation, je mets en place des alertes sur les dérives et les violations de politique, et je redirige les traces vers votre SIEM pour l'audit.",
        deliverables: [
          "Conception du déploiement Langfuse self-hosted",
          "Intégration SDK sur l'ensemble de votre stack d'agents",
          "Harness d'évaluation avec évaluateurs personnalisés",
          "Alerting sur dérive et violations de politique",
          "Intégration SIEM pour l'audit"
        ]
      },
      zh: {
        category: "LLM 可观测性与评估",
        subtitle: "生产级 LLM 与智能体应用的标准可观测层。",
        what: "Langfuse 是面向 LLM 应用的开源可观测性与评估平台。它捕获智能体栈中每一次 prompt、工具调用与链路，并提供评估、数据集、prompt 管理与成本追踪能力。Langfuse 正在迅速成为生产级智能体系统的默认可观测层。",
        why: [
          "为每次智能体运行与工具调用提供端到端链路",
          "支持在线与离线评估，可自定义评估器",
          "支持 prompt 版本化与 A/B 测试",
          "在调用粒度追踪成本与时延",
          "开源、易自托管，覆盖主流框架 SDK"
        ],
        how: "我把 Langfuse 接入贵司既有的智能体栈（LangGraph、LangChain、OpenAI Agents、Bedrock Agents），设计评估流水线，针对漂移与策略违规建立告警，并将链路打入 SIEM 以备审计。",
        deliverables: [
          "Langfuse 自托管部署设计",
          "智能体栈的 SDK 集成",
          "带自定义评估器的评估流水线",
          "漂移与策略违规告警",
          "面向审计的 SIEM 集成"
        ]
      },
      ar: {
        category: "رصد وتقييم النماذج اللغوية",
        subtitle: "طبقة الرصد القياسية لتطبيقات النماذج اللغوية والوكلاء في الإنتاج.",
        what: "Langfuse هي منصة الرصد والتقييم مفتوحة المصدر لتطبيقات النماذج اللغوية. تلتقط كل توجيه واستدعاء أداة وتتبّع من حزمة الوكلاء لديك، ثم تُوفّر تقييمات ومجموعات بيانات وإدارة توجيهات وتتبّعاً للتكلفة. تتجه Langfuse بسرعة لتكون طبقة الرصد الافتراضية للأنظمة الوكيلة الإنتاجية.",
        why: [
          "تتبّعات شاملة لكل تشغيل وكيل واستدعاء أداة",
          "تقييمات متّصلة وغير متّصلة بمُقيِّمات مخصّصة",
          "إدارة إصدارات التوجيهات واختبار A/B",
          "تتبّع التكلفة والكمون على مستوى الاستدعاء",
          "مفتوحة المصدر، ملائمة للاستضافة الذاتية، حزم SDK للأُطر الكبرى"
        ],
        how: "أُدمج Langfuse في حزمة الوكلاء القائمة لديك (LangGraph، LangChain، OpenAI Agents، Bedrock Agents)، وأصمّم حُزمة التقييم، وأُعدّ التنبيهات على الانحراف وانتهاكات السياسات، وأُمرّر التتبّعات إلى SIEM للتدقيق.",
        deliverables: [
          "تصميم نشر Langfuse باستضافة ذاتية",
          "تكامل SDK عبر حزمة الوكلاء لديك",
          "حُزمة تقييم بمُقيِّمات مخصّصة",
          "تنبيهات الانحراف وانتهاك السياسات",
          "تكامل SIEM للتدقيق"
        ]
      }
    }
  },

  {
    slug: "iso-42001",
    title: "ISO/IEC 42001",
    vendor: "generic-cyan",
    vendorName: "ISO/IEC",
    group: "grc",
    content: {
      en: {
        category: "AI Management Systems",
        subtitle: "The first international standard for managing AI responsibly, end to end.",
        what: "ISO/IEC 42001 is the first international standard for AI Management Systems. It defines the requirements and controls an organisation needs to govern its AI lifecycle responsibly, similar in spirit to ISO 27001 but specific to AI. It is rapidly becoming the de-facto signal that an organisation manages AI risk seriously.",
        why: [
          "First and only international AI management-system standard",
          "Strong signal for customers, partners, regulators and investors",
          "Maps cleanly to NIST AI RMF and EU AI Act expectations",
          "Strengthens internal AI governance, lifecycle and risk practices",
          "Audit-ready, certifiable by accredited bodies"
        ],
        how: "I help organisations design and implement an AI Management System aligned to ISO 42001: gap analysis, policy and control framework, risk register, AI inventory, lifecycle controls and the readiness pack for certification audit.",
        deliverables: [
          "Gap analysis against ISO/IEC 42001",
          "AI Management System policy and control framework",
          "AI inventory and risk register",
          "Lifecycle controls and evidence pack",
          "Certification-readiness assessment"
        ]
      },
      fr: {
        category: "Systèmes de management de l'IA",
        subtitle: "La première norme internationale pour gérer l'IA de manière responsable, de bout en bout.",
        what: "ISO/IEC 42001 est la première norme internationale pour les systèmes de management de l'IA. Elle définit les exigences et contrôles dont une organisation a besoin pour gouverner son cycle de vie IA de manière responsable, dans l'esprit d'ISO 27001 mais spécifique à l'IA. Elle devient rapidement le signal de fait qu'une organisation gère sérieusement le risque IA.",
        why: [
          "Première et seule norme internationale de système de management de l'IA",
          "Signal fort pour clients, partenaires, régulateurs et investisseurs",
          "Se mappe proprement aux attentes du NIST AI RMF et de l'EU AI Act",
          "Renforce la gouvernance IA interne, le cycle de vie et les pratiques de risque",
          "Prête à l'audit, certifiable par des organismes accrédités"
        ],
        how: "J'aide les organisations à concevoir et mettre en œuvre un système de management de l'IA aligné à ISO 42001 : analyse d'écart, cadre de politiques et de contrôles, registre de risques, inventaire IA, contrôles du cycle de vie et dossier de préparation à l'audit de certification.",
        deliverables: [
          "Analyse d'écart par rapport à ISO/IEC 42001",
          "Cadre de politiques et de contrôles du système de management de l'IA",
          "Inventaire IA et registre de risques",
          "Contrôles du cycle de vie et dossier de preuves",
          "Évaluation de préparation à la certification"
        ]
      },
      zh: {
        category: "AI 管理体系",
        subtitle: "首个面向负责任 AI 端到端治理的国际标准。",
        what: "ISO/IEC 42001 是首个面向 AI 管理体系的国际标准。它定义了组织负责任治理 AI 生命周期所需的要求与控制，理念上与 ISO 27001 类似但聚焦 AI。它正在迅速成为表明组织认真管理 AI 风险的事实信号。",
        why: [
          "首个且唯一的国际 AI 管理体系标准",
          "对客户、合作伙伴、监管与投资人构成有力信号",
          "与 NIST AI RMF 及 EU AI Act 期望高度对齐",
          "强化内部 AI 治理、生命周期与风险实践",
          "可审计，可由具备资质的认证机构发证"
        ],
        how: "我帮助组织设计并落地对齐 ISO 42001 的 AI 管理体系：差距分析、策略与控制框架、风险登记册、AI 资产清单、生命周期控制以及面向认证审核的准备包。",
        deliverables: [
          "对标 ISO/IEC 42001 的差距分析",
          "AI 管理体系策略与控制框架",
          "AI 资产清单与风险登记册",
          "生命周期控制与证据包",
          "认证就绪度评估"
        ]
      },
      ar: {
        category: "أنظمة إدارة الذكاء الاصطناعي",
        subtitle: "أول معيار دولي لإدارة الذكاء الاصطناعي بمسؤولية، من الطرف إلى الطرف.",
        what: "ISO/IEC 42001 هو أول معيار دولي لأنظمة إدارة الذكاء الاصطناعي. يُحدّد المتطلبات والضوابط التي تحتاجها المؤسسة لحوكمة دورة حياة الذكاء الاصطناعي لديها بمسؤولية، مماثل في روحه لـ ISO 27001 لكنه خاص بالذكاء الاصطناعي. يتجه بسرعة ليكون الإشارة الفعلية على أن المؤسسة تُدير مخاطر الذكاء الاصطناعي بجدّية.",
        why: [
          "أول وأوحد معيار دولي لأنظمة إدارة الذكاء الاصطناعي",
          "إشارة قوية للعملاء والشركاء والجهات التنظيمية والمستثمرين",
          "يتطابق بسلاسة مع توقّعات NIST AI RMF وEU AI Act",
          "يُعزّز حوكمة الذكاء الاصطناعي الداخلية ودورة الحياة وممارسات المخاطر",
          "جاهز للتدقيق، وقابل للاعتماد من جهات مُؤهَّلة"
        ],
        how: "أُساعد المؤسسات على تصميم وتنفيذ نظام إدارة ذكاء اصطناعي متوائم مع ISO 42001، تحليل الفجوات، إطار السياسات والضوابط، سجلّ المخاطر، جرد الذكاء الاصطناعي، ضوابط دورة الحياة، وحزمة الجاهزية لتدقيق الاعتماد.",
        deliverables: [
          "تحليل فجوات قياساً على ISO/IEC 42001",
          "إطار سياسات وضوابط نظام إدارة الذكاء الاصطناعي",
          "جرد الذكاء الاصطناعي وسجلّ المخاطر",
          "ضوابط دورة الحياة وحزمة الأدلة",
          "تقييم الجاهزية للاعتماد"
        ]
      }
    }
  },

  {
    slug: "nist-ai-rmf",
    title: "NIST AI Risk Management Framework",
    vendor: "generic-violet",
    vendorName: "NIST",
    group: "grc",
    content: {
      en: {
        category: "AI risk governance",
        subtitle: "The most widely cited AI risk reference globally, made operational.",
        what: "The NIST AI Risk Management Framework is the voluntary framework from the US National Institute of Standards and Technology for managing AI risk across the Govern, Map, Measure and Manage functions. NIST AI RMF is the most widely cited AI risk reference globally and the natural backbone for any enterprise AI governance programme.",
        why: [
          "Most widely adopted AI risk reference globally",
          "Maps cleanly to ISO 42001 and the EU AI Act",
          "Practical structure: Govern, Map, Measure, Manage",
          "Backed by the AI RMF Playbook with concrete actions",
          "Free, voluntary and respected by regulators"
        ],
        how: "I help enterprises operationalise the NIST AI RMF: map the framework to your AI inventory, design the controls, instrument the Measure function with concrete metrics, and stand up the governance committee that runs it.",
        deliverables: [
          "NIST AI RMF mapping to your AI inventory",
          "Govern, Map, Measure, Manage control set",
          "Metrics catalogue and dashboards",
          "Governance committee terms of reference",
          "Roadmap to ongoing maturity"
        ]
      },
      fr: {
        category: "Gouvernance du risque IA",
        subtitle: "Le référentiel de risque IA le plus largement cité au monde, rendu opérationnel.",
        what: "Le NIST AI Risk Management Framework est le cadre volontaire du National Institute of Standards and Technology des États-Unis pour gérer le risque IA à travers les fonctions Govern, Map, Measure et Manage. Le NIST AI RMF est le référentiel de risque IA le plus largement cité au monde et l'ossature naturelle de tout programme de gouvernance IA en entreprise.",
        why: [
          "Référentiel de risque IA le plus largement adopté au monde",
          "Se mappe proprement à ISO 42001 et à l'EU AI Act",
          "Structure pratique : Govern, Map, Measure, Manage",
          "Appuyé par l'AI RMF Playbook avec des actions concrètes",
          "Gratuit, volontaire et respecté par les régulateurs"
        ],
        how: "J'aide les entreprises à opérationnaliser le NIST AI RMF : mapping du cadre à votre inventaire IA, conception des contrôles, instrumentation de la fonction Measure avec des métriques concrètes et mise en place du comité de gouvernance qui le pilote.",
        deliverables: [
          "Mapping du NIST AI RMF sur votre inventaire IA",
          "Jeu de contrôles Govern, Map, Measure, Manage",
          "Catalogue de métriques et tableaux de bord",
          "Termes de référence du comité de gouvernance",
          "Feuille de route vers une maturité continue"
        ]
      },
      zh: {
        category: "AI 风险治理",
        subtitle: "全球引用最广的 AI 风险参考，可被落地为运营机制。",
        what: "NIST AI 风险管理框架是美国国家标准与技术研究院发布的自愿性框架，从 Govern、Map、Measure 与 Manage 四大职能管理 AI 风险。NIST AI RMF 是全球引用最广的 AI 风险参考，是任何企业 AI 治理项目的天然主干。",
        why: [
          "全球采纳度最高的 AI 风险参考",
          "与 ISO 42001 及 EU AI Act 高度对齐",
          "实用结构：Govern、Map、Measure、Manage",
          "AI RMF Playbook 提供可执行的具体动作",
          "免费、自愿，并获监管机构认可"
        ],
        how: "我帮助企业将 NIST AI RMF 落地为运营机制：把框架映射到 AI 资产清单、设计控制、以具体指标支撑 Measure 职能，并搭建运行这一框架的治理委员会。",
        deliverables: [
          "NIST AI RMF 与 AI 资产清单的映射",
          "Govern、Map、Measure、Manage 控制集",
          "指标目录与仪表盘",
          "治理委员会职责说明",
          "面向持续成熟度的路线图"
        ]
      },
      ar: {
        category: "حوكمة مخاطر الذكاء الاصطناعي",
        subtitle: "المرجع الأكثر استشهاداً عالمياً لمخاطر الذكاء الاصطناعي، مُحوَّلاً إلى تطبيق عملي.",
        what: "NIST AI Risk Management Framework هو الإطار الطوعي الصادر عن المعهد الوطني الأمريكي للمعايير والتقنية لإدارة مخاطر الذكاء الاصطناعي عبر وظائف الحوكمة والتخطيط والقياس والإدارة. NIST AI RMF هو المرجع الأكثر استشهاداً عالمياً لمخاطر الذكاء الاصطناعي والعمود الفقري الطبيعي لأي برنامج حوكمة ذكاء اصطناعي مؤسسي.",
        why: [
          "المرجع الأوسع تبنّياً عالمياً لمخاطر الذكاء الاصطناعي",
          "يتطابق بسلاسة مع ISO 42001 وEU AI Act",
          "بنية عملية، الحوكمة والتخطيط والقياس والإدارة",
          "مدعوم بدليل AI RMF Playbook بإجراءات ملموسة",
          "مجاني وطوعي ويحظى باحترام الجهات التنظيمية"
        ],
        how: "أُساعد المؤسسات على تشغيل NIST AI RMF عملياً، ربط الإطار بجرد الذكاء الاصطناعي لديك، تصميم الضوابط، تجهيز وظيفة القياس بمقاييس ملموسة، وإنشاء لجنة الحوكمة التي تُدير ذلك.",
        deliverables: [
          "ربط NIST AI RMF بجرد الذكاء الاصطناعي لديك",
          "مجموعة ضوابط الحوكمة والتخطيط والقياس والإدارة",
          "كتالوج المقاييس ولوحات المعلومات",
          "وثيقة اختصاصات لجنة الحوكمة",
          "خارطة طريق نحو نضج مستمر"
        ]
      }
    }
  },

  {
    slug: "eu-ai-act",
    title: "EU AI Act",
    vendor: "generic-amber",
    vendorName: "European Union",
    group: "grc",
    content: {
      en: {
        category: "Binding AI regulation",
        subtitle: "The world's first comprehensive AI law, with extraterritorial reach.",
        what: "The EU AI Act is the European Union's binding regulation for AI systems. It classifies systems by risk and imposes obligations on providers and deployers. It is the world's first comprehensive AI law, with extraterritorial reach, and applies whenever an AI system is placed on the EU market or affects EU citizens.",
        why: [
          "First binding comprehensive AI regulation worldwide",
          "Extraterritorial reach: applies wherever EU citizens are affected",
          "Defines clear obligations by risk class",
          "Significant financial penalties for non-compliance",
          "Aligns naturally with ISO 42001 and NIST AI RMF"
        ],
        how: "I help organisations assess their AI portfolio against the EU AI Act, classify systems by risk, design the required documentation and human oversight, and build the technical and organisational controls needed to demonstrate conformity.",
        deliverables: [
          "AI portfolio classification by EU AI Act risk class",
          "Risk-management system documentation",
          "Human oversight and transparency design",
          "Technical documentation pack",
          "Conformity-assessment roadmap"
        ]
      },
      fr: {
        category: "Réglementation IA contraignante",
        subtitle: "La première loi globale sur l'IA au monde, à portée extraterritoriale.",
        what: "L'EU AI Act est la réglementation contraignante de l'Union européenne pour les systèmes d'IA. Elle classifie les systèmes par risque et impose des obligations aux fournisseurs et déployeurs. C'est la première loi globale sur l'IA au monde, à portée extraterritoriale, et elle s'applique dès qu'un système d'IA est mis sur le marché de l'UE ou affecte des citoyens européens.",
        why: [
          "Première réglementation IA globale et contraignante au monde",
          "Portée extraterritoriale : s'applique partout où des citoyens européens sont affectés",
          "Définit des obligations claires par classe de risque",
          "Sanctions financières significatives en cas de non-conformité",
          "S'aligne naturellement à ISO 42001 et au NIST AI RMF"
        ],
        how: "J'aide les organisations à évaluer leur portefeuille IA au regard de l'EU AI Act, à classifier les systèmes par risque, à concevoir la documentation et la supervision humaine requises, et à bâtir les contrôles techniques et organisationnels nécessaires pour démontrer la conformité.",
        deliverables: [
          "Classification du portefeuille IA par classe de risque EU AI Act",
          "Documentation du système de gestion des risques",
          "Conception de la supervision humaine et de la transparence",
          "Dossier de documentation technique",
          "Feuille de route d'évaluation de conformité"
        ]
      },
      zh: {
        category: "具约束力的 AI 法规",
        subtitle: "全球首部综合性 AI 法律，具有域外效力。",
        what: "EU AI Act 是欧盟针对 AI 系统的具约束力法规。它按风险分级，并对提供方与部署方设定义务。它是全球首部综合性 AI 法律，具有域外效力，只要 AI 系统投放至欧盟市场或影响欧盟公民即受其约束。",
        why: [
          "全球首部具约束力的综合性 AI 法规",
          "具备域外效力：影响欧盟公民即适用",
          "按风险等级明确义务",
          "违规面临严厉的财务处罚",
          "与 ISO 42001 及 NIST AI RMF 自然对齐"
        ],
        how: "我帮助组织对照 EU AI Act 评估其 AI 资产组合，按风险分类系统，设计所需的文档与人工监督，并构建用于证明符合性的技术与组织控制。",
        deliverables: [
          "按 EU AI Act 风险等级的 AI 资产组合分类",
          "风险管理体系文档",
          "人工监督与透明度设计",
          "技术文档包",
          "符合性评估路线图"
        ]
      },
      ar: {
        category: "تنظيم مُلزِم للذكاء الاصطناعي",
        subtitle: "أول قانون شامل للذكاء الاصطناعي في العالم، بنطاق خارج الحدود.",
        what: "EU AI Act هو التنظيم المُلزِم للاتحاد الأوروبي لأنظمة الذكاء الاصطناعي. يُصنّف الأنظمة حسب المخاطر ويفرض التزامات على المزوّدين والمشغّلين. هو أول قانون شامل للذكاء الاصطناعي في العالم، بنطاق خارج الحدود، ويسري كلما طُرح نظام ذكاء اصطناعي في السوق الأوروبية أو أثّر في مواطني الاتحاد الأوروبي.",
        why: [
          "أول تنظيم مُلزِم شامل للذكاء الاصطناعي على مستوى العالم",
          "نطاق خارج الحدود، يسري حيثما يتأثّر مواطنو الاتحاد الأوروبي",
          "يُحدّد التزامات واضحة بحسب فئة المخاطر",
          "عقوبات مالية كبيرة على عدم الامتثال",
          "يتوائم طبيعياً مع ISO 42001 وNIST AI RMF"
        ],
        how: "أُساعد المؤسسات على تقييم محفظة الذكاء الاصطناعي لديها قياساً على EU AI Act، وتصنيف الأنظمة حسب المخاطر، وتصميم التوثيق المطلوب والإشراف البشري، وبناء الضوابط التقنية والتنظيمية اللازمة لإثبات المطابقة.",
        deliverables: [
          "تصنيف محفظة الذكاء الاصطناعي حسب فئات مخاطر EU AI Act",
          "توثيق نظام إدارة المخاطر",
          "تصميم الإشراف البشري والشفافية",
          "حزمة التوثيق التقني",
          "خارطة طريق لتقييم المطابقة"
        ]
      }
    }
  },

  {
    slug: "openai-assistants",
    title: "OpenAI Assistants & Realtime",
    vendor: "generic-green",
    vendorName: "OpenAI",
    group: "agentic-platform",
    content: {
      en: {
        category: "Assistant & voice agent platform",
        subtitle: "OpenAI's hosted assistant and realtime voice runtime, production-ready out of the box.",
        what: "OpenAI Assistants and the Realtime API are OpenAI's hosted runtimes for building agents. Assistants gives you threads, tools and file search with managed state. Realtime adds bidirectional voice and low-latency multi-modal interaction. Together they cover most agent and voice-agent use cases on managed infrastructure.",
        why: [
          "Fully managed: no agent runtime to operate",
          "Built-in threads, tools, file search and code interpreter",
          "Realtime API for production-grade voice agents",
          "Native integration with OpenAI safety and moderation",
          "Compatible with major orchestration frameworks"
        ],
        how: "I design OpenAI Assistant deployments that respect your data perimeter (Azure OpenAI, enterprise tenancy, BYOK, PII redaction), wrap tool calls with a policy layer, and add observability through Langfuse or LangSmith.",
        deliverables: [
          "Tenant and key-management plan",
          "Tool authorization wrapper and policy layer",
          "Observability integration",
          "Threat model and red-team report",
          "Operating model and runbooks"
        ]
      },
      fr: {
        category: "Plateforme d'assistants et d'agents vocaux",
        subtitle: "Les runtimes hébergés d'OpenAI pour assistants et voix temps réel, prêts pour la production.",
        what: "OpenAI Assistants et l'API Realtime sont les runtimes hébergés d'OpenAI pour concevoir des agents. Assistants apporte threads, outils et recherche de fichiers avec état managé. Realtime ajoute la voix bidirectionnelle et l'interaction multi-modale à faible latence. Ensemble ils couvrent la plupart des cas d'usage agents et agents vocaux sur une infrastructure managée.",
        why: [
          "Entièrement managé : pas de runtime d'agent à exploiter",
          "Threads, outils, recherche de fichiers et code interpreter intégrés",
          "API Realtime pour des agents vocaux de qualité production",
          "Intégration native avec la sûreté et la modération OpenAI",
          "Compatible avec les principaux frameworks d'orchestration"
        ],
        how: "Je conçois des déploiements OpenAI Assistants qui respectent votre périmètre de données (Azure OpenAI, tenancy entreprise, BYOK, masquage PII), j'enveloppe les appels d'outils d'une couche de politiques et j'ajoute l'observabilité via Langfuse ou LangSmith.",
        deliverables: [
          "Plan de tenancy et de gestion des clés",
          "Wrapper d'autorisation d'outils et couche de politiques",
          "Intégration de l'observabilité",
          "Modélisation des menaces et rapport de red team",
          "Modèle opérationnel et runbooks"
        ]
      },
      zh: {
        category: "助手与语音智能体平台",
        subtitle: "OpenAI 托管的助手与实时语音运行时，开箱可投产。",
        what: "OpenAI Assistants 与 Realtime API 是 OpenAI 用于构建智能体的托管运行时。Assistants 提供线程、工具与文件搜索，并由平台托管状态。Realtime 在此之上加入双向语音与低时延多模态交互。两者结合可在托管基础设施上覆盖大多数智能体与语音智能体场景。",
        why: [
          "全托管，无需自行运维智能体运行时",
          "内置线程、工具、文件搜索与代码解释器",
          "Realtime API 适用于生产级语音智能体",
          "原生集成 OpenAI 的安全与内容审核",
          "兼容主流编排框架"
        ],
        how: "我设计的 OpenAI Assistant 部署严格尊重贵司数据边界（Azure OpenAI、企业租户、BYOK、PII 脱敏），用策略层封装工具调用，并通过 Langfuse 或 LangSmith 接入可观测性。",
        deliverables: [
          "租户与密钥管理方案",
          "工具授权封装与策略层",
          "可观测性集成",
          "威胁模型与红队报告",
          "运营模式与操作手册"
        ]
      },
      ar: {
        category: "منصة المساعد ووكلاء الصوت",
        subtitle: "وقت التشغيل المُستضاف للمساعدين وللصوت اللحظي من OpenAI، جاهز للإنتاج منذ اللحظة الأولى.",
        what: "OpenAI Assistants وواجهة Realtime API هما وقتا التشغيل المُستضافان من OpenAI لبناء الوكلاء. تُتيح Assistants المحادثات والأدوات والبحث في الملفات بحالة مُدارة. تُضيف Realtime تفاعلاً صوتياً ثنائي الاتجاه وتفاعلاً متعدّد الوسائط بكمون منخفض. يُغطّيان معاً معظم حالات استخدام الوكلاء والوكلاء الصوتيين على بنية تحتية مُدارة.",
        why: [
          "مُدارة بالكامل، لا وقت تشغيل وكلاء لتشغيله",
          "محادثات وأدوات وبحث ملفات ومُفسِّر شيفرة مدمج",
          "Realtime API لوكلاء صوتيين بدرجة إنتاجية",
          "تكامل أصلي مع أمان OpenAI والإشراف على المحتوى",
          "متوافقة مع أُطر التنسيق الكبرى"
        ],
        how: "أصمّم عمليات نشر OpenAI Assistant تحترم محيط بياناتك (Azure OpenAI، استئجار مؤسسي، BYOK، حجب البيانات الشخصية)، وأُغلّف استدعاءات الأدوات بطبقة سياسات، وأُضيف الرصد عبر Langfuse أو LangSmith.",
        deliverables: [
          "خطة المستأجر وإدارة المفاتيح",
          "غلاف تفويض الأدوات وطبقة السياسات",
          "تكامل الرصد",
          "نموذج تهديدات وتقرير فريق أحمر",
          "نموذج تشغيلي وأدلة تشغيل"
        ]
      }
    }
  },

  {
    slug: "aws-bedrock-agents",
    title: "AWS Bedrock Agents",
    vendor: "aws",
    vendorName: "Amazon Web Services",
    group: "agentic-platform",
    content: {
      en: {
        category: "Managed agent platform on AWS",
        subtitle: "Native agent runtime inside the AWS perimeter, with full IAM and KMS integration.",
        what: "AWS Bedrock Agents is the managed agent runtime that uses foundation models hosted on Bedrock, with native action groups, knowledge bases and guardrails. It is the natural choice for agentic workloads that must stay inside the AWS security boundary.",
        why: [
          "Hosted entirely inside the AWS perimeter",
          "Native IAM, KMS, PrivateLink, CloudTrail",
          "Choice of foundation models (Anthropic, Meta, AI21, Mistral, Amazon)",
          "Built-in Bedrock Guardrails for input and output filtering",
          "Strong compliance posture (HIPAA, SOC 2, FedRAMP)"
        ],
        how: "I design Bedrock Agents architectures aligned to your AWS security boundary: VPC isolation, action group authorization, knowledge base hardening, Guardrails policy, and integration with your existing CSPM tooling.",
        deliverables: [
          "Bedrock Agents landing-zone design",
          "Action group and tool authorization plan",
          "Knowledge base hardening and PII redaction",
          "Bedrock Guardrails policy set",
          "Audit-log pipeline to your SIEM"
        ]
      },
      fr: {
        category: "Plateforme d'agents managée sur AWS",
        subtitle: "Runtime d'agents natif à l'intérieur du périmètre AWS, avec intégration complète IAM et KMS.",
        what: "AWS Bedrock Agents est le runtime d'agents managé qui s'appuie sur les modèles de fondation hébergés sur Bedrock, avec action groups natifs, knowledge bases et guardrails. C'est le choix naturel pour des charges agentiques qui doivent rester à l'intérieur de la frontière de sécurité AWS.",
        why: [
          "Hébergé entièrement à l'intérieur du périmètre AWS",
          "IAM, KMS, PrivateLink, CloudTrail natifs",
          "Choix de modèles de fondation (Anthropic, Meta, AI21, Mistral, Amazon)",
          "Bedrock Guardrails intégrés pour le filtrage en entrée et sortie",
          "Posture de conformité solide (HIPAA, SOC 2, FedRAMP)"
        ],
        how: "Je conçois des architectures Bedrock Agents alignées à votre frontière de sécurité AWS : isolation VPC, autorisation des action groups, durcissement des knowledge bases, politique Guardrails et intégration à votre outillage CSPM existant.",
        deliverables: [
          "Conception de landing zone Bedrock Agents",
          "Plan d'autorisation des action groups et des outils",
          "Durcissement des knowledge bases et masquage PII",
          "Jeu de politiques Bedrock Guardrails",
          "Pipeline de journal d'audit vers votre SIEM"
        ]
      },
      zh: {
        category: "AWS 托管智能体平台",
        subtitle: "AWS 边界内的原生智能体运行时，深度集成 IAM 与 KMS。",
        what: "AWS Bedrock Agents 是基于 Bedrock 托管基础模型的托管智能体运行时，原生提供动作组、知识库与 Guardrails。当智能体工作负载必须留在 AWS 安全边界内时，它是自然之选。",
        why: [
          "完整托管在 AWS 边界内",
          "原生 IAM、KMS、PrivateLink、CloudTrail",
          "可选 Anthropic、Meta、AI21、Mistral、Amazon 等基础模型",
          "内置 Bedrock Guardrails，过滤输入与输出",
          "合规姿态稳健（HIPAA、SOC 2、FedRAMP）"
        ],
        how: "我根据贵司 AWS 安全边界设计 Bedrock Agents 架构：VPC 隔离、动作组授权、知识库加固、Guardrails 策略，以及与现有 CSPM 工具的对接。",
        deliverables: [
          "Bedrock Agents 着陆区设计",
          "动作组与工具授权方案",
          "知识库加固与 PII 脱敏",
          "Bedrock Guardrails 策略集",
          "面向 SIEM 的审计日志管道"
        ]
      },
      ar: {
        category: "منصة وكلاء مُدارة على AWS",
        subtitle: "وقت تشغيل وكلاء أصلي داخل محيط AWS، بتكامل كامل مع IAM وKMS.",
        what: "AWS Bedrock Agents هو وقت تشغيل الوكلاء المُدار الذي يستخدم النماذج الأساسية المُستضافة على Bedrock، مع مجموعات إجراءات أصلية، وقواعد معرفة، وحواجز. هو الخيار الطبيعي لأحمال العمل الوكيلة التي يجب أن تبقى داخل حدود AWS الأمنية.",
        why: [
          "مُستضاف بالكامل داخل محيط AWS",
          "IAM وKMS وPrivateLink وCloudTrail أصلية",
          "اختيار من النماذج الأساسية (Anthropic، Meta، AI21، Mistral، Amazon)",
          "Bedrock Guardrails مدمجة لتصفية المدخلات والمخرجات",
          "وضع امتثال قوي (HIPAA، SOC 2، FedRAMP)"
        ],
        how: "أصمّم هندسات Bedrock Agents متوائمة مع حدود AWS الأمنية لديك، عزل VPC، تفويض مجموعات الإجراءات، تحصين قواعد المعرفة، سياسة Guardrails، وتكامل مع أدوات CSPM القائمة لديك.",
        deliverables: [
          "تصميم منطقة هبوط Bedrock Agents",
          "خطة تفويض مجموعات الإجراءات والأدوات",
          "تحصين قواعد المعرفة وحجب البيانات الشخصية",
          "مجموعة سياسات Bedrock Guardrails",
          "خطّ سجلّ تدقيق إلى SIEM لديك"
        ]
      }
    }
  },

  {
    slug: "vertex-ai-agents",
    title: "Google Vertex AI Agents",
    vendor: "google",
    vendorName: "Google Cloud",
    group: "agentic-platform",
    content: {
      en: {
        category: "Managed agent platform on Google Cloud",
        subtitle: "Vertex AI Agent Builder, Gemini-native agents inside the Google Cloud perimeter.",
        what: "Google Vertex AI Agents combines Agent Builder, Gemini foundation models and Google Cloud security primitives into a managed agent runtime. It is the natural fit for agentic workloads that must stay inside the Google Cloud security boundary, with Gemini as the default model family.",
        why: [
          "Hosted entirely inside the Google Cloud perimeter",
          "Native IAM, KMS, VPC-SC, Cloud Audit Logs",
          "Gemini foundation models with long context windows",
          "Built-in safety filters and Model Armor",
          "Strong compliance posture (HIPAA, SOC 2, ISO)"
        ],
        how: "I design Vertex AI Agent deployments aligned to your Google Cloud security boundary: VPC Service Controls, IAM model, Model Armor configuration, observability, and integration with your existing CSPM tooling.",
        deliverables: [
          "Vertex AI Agent landing-zone design",
          "IAM model with least-privilege boundaries",
          "Model Armor and safety policy set",
          "Observability and audit pipeline",
          "Operating model and runbooks"
        ]
      },
      fr: {
        category: "Plateforme d'agents managée sur Google Cloud",
        subtitle: "Vertex AI Agent Builder, des agents natifs Gemini à l'intérieur du périmètre Google Cloud.",
        what: "Google Vertex AI Agents combine Agent Builder, les modèles de fondation Gemini et les primitives de sécurité de Google Cloud dans un runtime d'agents managé. C'est l'option naturelle pour des charges agentiques qui doivent rester à l'intérieur de la frontière de sécurité Google Cloud, avec Gemini comme famille de modèles par défaut.",
        why: [
          "Hébergé entièrement à l'intérieur du périmètre Google Cloud",
          "IAM, KMS, VPC-SC, Cloud Audit Logs natifs",
          "Modèles de fondation Gemini avec longues fenêtres de contexte",
          "Filtres de sûreté et Model Armor intégrés",
          "Posture de conformité solide (HIPAA, SOC 2, ISO)"
        ],
        how: "Je conçois des déploiements Vertex AI Agents alignés à votre frontière de sécurité Google Cloud : VPC Service Controls, modèle IAM, configuration Model Armor, observabilité et intégration à votre outillage CSPM existant.",
        deliverables: [
          "Conception de landing zone Vertex AI Agents",
          "Modèle IAM avec frontières de moindre privilège",
          "Jeu de politiques Model Armor et de sûreté",
          "Pipeline d'observabilité et d'audit",
          "Modèle opérationnel et runbooks"
        ]
      },
      zh: {
        category: "Google Cloud 托管智能体平台",
        subtitle: "Vertex AI Agent Builder，Google Cloud 边界内 Gemini 原生智能体。",
        what: "Google Vertex AI Agents 把 Agent Builder、Gemini 基础模型与 Google Cloud 安全原语整合成托管智能体运行时。当智能体工作负载必须留在 Google Cloud 安全边界内、并默认使用 Gemini 模型家族时，它是自然之选。",
        why: [
          "完整托管在 Google Cloud 边界内",
          "原生 IAM、KMS、VPC-SC、Cloud Audit Logs",
          "Gemini 基础模型，具备长上下文窗口",
          "内置安全过滤与 Model Armor",
          "合规姿态稳健（HIPAA、SOC 2、ISO）"
        ],
        how: "我根据贵司 Google Cloud 安全边界设计 Vertex AI Agent 部署：VPC Service Controls、IAM 模型、Model Armor 配置、可观测性，以及与现有 CSPM 工具的对接。",
        deliverables: [
          "Vertex AI Agent 着陆区设计",
          "遵循最小权限边界的 IAM 模型",
          "Model Armor 与安全策略集",
          "可观测性与审计管道",
          "运营模式与操作手册"
        ]
      },
      ar: {
        category: "منصة وكلاء مُدارة على Google Cloud",
        subtitle: "Vertex AI Agent Builder، وكلاء أصليون على Gemini داخل محيط Google Cloud.",
        what: "Google Vertex AI Agents تجمع بين Agent Builder ونماذج Gemini الأساسية وركائز أمان Google Cloud في وقت تشغيل وكلاء مُدار. هي الملاءمة الطبيعية لأحمال العمل الوكيلة التي يجب أن تبقى داخل حدود Google Cloud الأمنية، مع Gemini عائلة النماذج الافتراضية.",
        why: [
          "مُستضاف بالكامل داخل محيط Google Cloud",
          "IAM وKMS وVPC-SC وCloud Audit Logs أصلية",
          "نماذج Gemini الأساسية بنوافذ سياق طويلة",
          "مرشّحات أمان مدمجة وModel Armor",
          "وضع امتثال قوي (HIPAA، SOC 2، ISO)"
        ],
        how: "أصمّم عمليات نشر Vertex AI Agent متوائمة مع حدود Google Cloud الأمنية لديك، VPC Service Controls، نموذج IAM، تهيئة Model Armor، الرصد، وتكامل مع أدوات CSPM القائمة لديك.",
        deliverables: [
          "تصميم منطقة هبوط Vertex AI Agent",
          "نموذج IAM بحدود الحدّ الأدنى من الامتيازات",
          "Model Armor ومجموعة سياسات الأمان",
          "خطّ الرصد والتدقيق",
          "نموذج تشغيلي وأدلة تشغيل"
        ]
      }
    }
  },

  {
    slug: "n8n-cursor-mcp-clients",
    title: "n8n, Cursor & MCP-native clients",
    vendor: "generic-violet",
    vendorName: "Open ecosystem",
    group: "agentic-platform",
    content: {
      en: {
        category: "Agent client ecosystem",
        subtitle: "The MCP-native client ecosystem that brings agents into everyday workflows.",
        what: "n8n, Cursor, Claude Desktop and the growing family of MCP-native clients are how agents reach end users in production. They consume MCP servers and assistant runtimes to bring AI capabilities into developer workflows, business automation and internal tooling.",
        why: [
          "n8n: open-source automation platform, MCP-native, self-hostable",
          "Cursor: AI-native IDE, MCP-enabled tool calls",
          "Claude Desktop: reference MCP host with the full protocol",
          "Rapidly growing ecosystem of compliant clients",
          "Decouples capability from user surface"
        ],
        how: "I help teams package their MCP servers for safe, multi-client distribution: authentication, scope mapping per client, version compatibility, observability and audit, plus the operating model for managing multiple consumer surfaces.",
        deliverables: [
          "Client compatibility matrix",
          "Per-client authentication and scope mapping",
          "Version compatibility and deprecation policy",
          "Observability and audit across clients",
          "End-user rollout plan"
        ]
      },
      fr: {
        category: "Écosystème de clients d'agents",
        subtitle: "L'écosystème de clients natifs MCP qui amène les agents dans les workflows du quotidien.",
        what: "n8n, Cursor, Claude Desktop et la famille grandissante de clients natifs MCP sont la façon dont les agents atteignent les utilisateurs finaux en production. Ils consomment des serveurs MCP et des runtimes d'assistants pour apporter les capacités IA dans les workflows développeurs, l'automatisation métier et l'outillage interne.",
        why: [
          "n8n : plateforme d'automatisation open source, native MCP, self-hostable",
          "Cursor : IDE AI-native, appels d'outils via MCP",
          "Claude Desktop : hôte MCP de référence avec le protocole complet",
          "Écosystème de clients conformes en forte croissance",
          "Découple la capacité de la surface utilisateur"
        ],
        how: "J'aide les équipes à empaqueter leurs serveurs MCP pour une distribution multi-clients sûre : authentification, mapping de portée par client, compatibilité de versions, observabilité et audit, plus le modèle opérationnel pour gérer plusieurs surfaces consommatrices.",
        deliverables: [
          "Matrice de compatibilité des clients",
          "Authentification et mapping de portée par client",
          "Politique de compatibilité de versions et de dépréciation",
          "Observabilité et audit transverses aux clients",
          "Plan de déploiement auprès des utilisateurs finaux"
        ]
      },
      zh: {
        category: "智能体客户端生态",
        subtitle: "原生 MCP 客户端生态，把智能体引入日常工作流。",
        what: "n8n、Cursor、Claude Desktop 以及不断壮大的原生 MCP 客户端家族，是智能体在生产中触达终端用户的方式。它们消费 MCP 服务器与助手运行时，把 AI 能力带入开发者工作流、业务自动化与内部工具。",
        why: [
          "n8n：开源自动化平台，原生 MCP，可自托管",
          "Cursor：AI 原生 IDE，支持 MCP 工具调用",
          "Claude Desktop：参考级 MCP 宿主，完整支持协议",
          "兼容客户端生态高速扩张",
          "将能力与用户界面解耦"
        ],
        how: "我帮助团队把 MCP 服务器封装为面向多客户端的安全分发包：身份认证、按客户端的范围映射、版本兼容性、可观测性与审计，并提供管理多个消费端的运营模式。",
        deliverables: [
          "客户端兼容性矩阵",
          "按客户端的身份认证与范围映射",
          "版本兼容性与弃用策略",
          "跨客户端的可观测性与审计",
          "终端用户上线计划"
        ]
      },
      ar: {
        category: "منظومة عملاء الوكلاء",
        subtitle: "منظومة العملاء الأصليين لـ MCP التي تُدخل الوكلاء في سير العمل اليومي.",
        what: "n8n وCursor وClaude Desktop والعائلة المتنامية من العملاء الأصليين لـ MCP هي الكيفية التي يصل بها الوكلاء إلى المستخدمين النهائيين في الإنتاج. تستهلك هذه العملاء خوادم MCP ووقت تشغيل المساعدين لإدخال قدرات الذكاء الاصطناعي إلى سير عمل المطوّرين، وأتمتة الأعمال، والأدوات الداخلية.",
        why: [
          "n8n، منصة أتمتة مفتوحة المصدر، أصلية لـ MCP، قابلة للاستضافة الذاتية",
          "Cursor، بيئة تطوير أصلية للذكاء الاصطناعي، بدعم استدعاء الأدوات عبر MCP",
          "Claude Desktop، مُضيف MCP المرجعي بكامل البروتوكول",
          "منظومة عملاء متوافقين تنمو بسرعة",
          "تفصل القدرة عن سطح المستخدم"
        ],
        how: "أُساعد الفرق على تغليف خوادم MCP الخاصة بها للتوزيع الآمن متعدّد العملاء، المصادقة، خرائط النطاقات لكل عميل، توافق الإصدارات، الرصد والتدقيق، إضافة إلى النموذج التشغيلي لإدارة عدّة أسطح للمستهلكين.",
        deliverables: [
          "مصفوفة توافق العملاء",
          "مصادقة وخريطة نطاقات لكل عميل",
          "سياسة توافق الإصدارات وإهمالها",
          "الرصد والتدقيق عبر العملاء",
          "خطة إطلاق للمستخدمين النهائيين"
        ]
      }
    }
  },

  {
    slug: "azure-machine-learning",
    title: "Azure Machine Learning",
    vendor: "microsoft",
    vendorName: "Microsoft",
    group: "inference",
    content: {
      en: {
        category: "Managed ML lifecycle on Azure",
        subtitle: "The natural home for ML workloads inside the Azure perimeter, complementary to AI Foundry.",
        what: "Azure Machine Learning is Microsoft's managed platform for the full ML lifecycle: data labelling, training, experimentation, deployment, monitoring and governance. It complements Azure AI Foundry by covering classical ML, custom model training and MLOps at scale.",
        why: [
          "Managed end-to-end ML lifecycle on Azure",
          "Native integration with Microsoft Entra, Key Vault, Private Endpoints",
          "MLOps with managed online and batch endpoints",
          "Responsible AI dashboards and model registry",
          "Strong compliance (HIPAA, SOC 2, FedRAMP, EU Data Boundary)"
        ],
        how: "I design Azure ML architectures aligned to your security boundary: workspace isolation, private endpoints, fine-grained role-based access control, model registry governance, and integration with Defender for Cloud and your existing CSPM tooling.",
        deliverables: [
          "Azure ML landing-zone design",
          "Identity and entitlement model",
          "Endpoint deployment and approval workflow",
          "Responsible AI and audit pipeline",
          "Cost and governance review"
        ]
      },
      fr: {
        category: "Cycle de vie ML managé sur Azure",
        subtitle: "Le foyer naturel des charges ML à l'intérieur du périmètre Azure, complémentaire d'AI Foundry.",
        what: "Azure Machine Learning est la plateforme managée de Microsoft pour l'intégralité du cycle de vie ML : étiquetage des données, entraînement, expérimentation, déploiement, supervision et gouvernance. Elle complète Azure AI Foundry en couvrant le ML classique, l'entraînement de modèles sur mesure et le MLOps à grande échelle.",
        why: [
          "Cycle de vie ML managé de bout en bout sur Azure",
          "Intégration native avec Microsoft Entra, Key Vault, Private Endpoints",
          "MLOps avec endpoints online et batch managés",
          "Tableaux de bord Responsible AI et registre de modèles",
          "Conformité solide (HIPAA, SOC 2, FedRAMP, EU Data Boundary)"
        ],
        how: "Je conçois des architectures Azure ML alignées à votre frontière de sécurité : isolation des workspaces, private endpoints, contrôle d'accès basé sur les rôles à granularité fine, gouvernance du registre de modèles, et intégration à Defender for Cloud et à votre outillage CSPM existant.",
        deliverables: [
          "Conception de landing zone Azure ML",
          "Modèle d'identité et d'habilitations",
          "Workflow de déploiement et d'approbation d'endpoints",
          "Pipeline Responsible AI et audit",
          "Revue de coûts et de gouvernance"
        ]
      },
      zh: {
        category: "Azure 托管 ML 生命周期",
        subtitle: "Azure 边界内承载 ML 工作负载的自然之家，与 AI Foundry 互补。",
        what: "Azure Machine Learning 是 Microsoft 面向 ML 全生命周期的托管平台：数据标注、训练、实验、部署、监控与治理。它与 Azure AI Foundry 互补，覆盖传统 ML、自定义模型训练与规模化 MLOps。",
        why: [
          "在 Azure 上托管端到端 ML 生命周期",
          "与 Microsoft Entra、Key Vault、专用终结点原生集成",
          "通过托管在线与批量端点实现 MLOps",
          "提供负责任 AI 仪表盘与模型注册表",
          "合规能力强（HIPAA、SOC 2、FedRAMP、EU Data Boundary）"
        ],
        how: "我根据贵司安全边界设计 Azure ML 架构：工作区隔离、专用终结点、细粒度基于角色的访问控制、模型注册表治理，以及与 Defender for Cloud 和现有 CSPM 工具的对接。",
        deliverables: [
          "Azure ML 着陆区设计",
          "身份与权限模型",
          "端点部署与审批工作流",
          "负责任 AI 与审计管道",
          "成本与治理评审"
        ]
      },
      ar: {
        category: "دورة حياة تعلّم الآلة المُدارة على Azure",
        subtitle: "البيت الطبيعي لأحمال تعلّم الآلة داخل محيط Azure، مكمّل لـ AI Foundry.",
        what: "Azure Machine Learning هي منصة Microsoft المُدارة لدورة حياة تعلّم الآلة الكاملة، وسم البيانات، التدريب، التجارب، النشر، الرصد والحوكمة. تُكمِّل Azure AI Foundry عبر تغطية تعلّم الآلة الكلاسيكي وتدريب النماذج المخصّصة وMLOps على نطاق واسع.",
        why: [
          "دورة حياة كاملة لتعلّم الآلة مُدارة على Azure",
          "تكامل أصلي مع Microsoft Entra وKey Vault ونقاط النهاية الخاصة",
          "MLOps بنقاط نهاية مُدارة عبر الإنترنت والدفعات",
          "لوحات الذكاء الاصطناعي المسؤول وسجلّ النماذج",
          "امتثال قوي (HIPAA، SOC 2، FedRAMP، EU Data Boundary)"
        ],
        how: "أصمّم هندسات Azure ML متوائمة مع حدودك الأمنية، عزل مساحة العمل، نقاط النهاية الخاصة، تحكّم وصول دقيق قائم على الأدوار، حوكمة سجلّ النماذج، وتكامل مع Defender for Cloud وأدوات CSPM القائمة لديك.",
        deliverables: [
          "تصميم منطقة هبوط Azure ML",
          "نموذج الهوية والصلاحيات",
          "سير عمل نشر نقاط النهاية واعتمادها",
          "خطّ الذكاء الاصطناعي المسؤول والتدقيق",
          "مراجعة التكلفة والحوكمة"
        ]
      }
    }
  },

  {
    slug: "vertex-ai-model-garden",
    title: "Vertex AI Model Garden",
    vendor: "google",
    vendorName: "Google Cloud",
    group: "inference",
    content: {
      en: {
        category: "Managed model catalog on Google Cloud",
        subtitle: "Curated foundation models on Vertex AI, served inside the Google Cloud perimeter.",
        what: "Vertex AI Model Garden is Google Cloud's curated catalog of foundation and open-source models, served on Vertex AI with managed endpoints, evaluation tools and fine-tuning. It is the central catalog for any team standardising AI on Google Cloud.",
        why: [
          "Curated catalog of first-party, partner and open-source models",
          "Managed endpoints with autoscaling and observability",
          "Native fine-tuning, distillation and evaluation",
          "VPC Service Controls and Cloud Audit Logs everywhere",
          "Strong compliance posture across regions"
        ],
        how: "I help teams choose the right model for each workload, design the endpoint topology, configure VPC-SC perimeter and Model Armor, and integrate with the rest of your observability and audit stack.",
        deliverables: [
          "Model selection matrix per workload",
          "Endpoint deployment and approval workflow",
          "VPC Service Controls and security perimeter",
          "Observability and audit integration",
          "Cost and governance review"
        ]
      },
      fr: {
        category: "Catalogue de modèles managé sur Google Cloud",
        subtitle: "Modèles de fondation curés sur Vertex AI, servis à l'intérieur du périmètre Google Cloud.",
        what: "Vertex AI Model Garden est le catalogue curé de modèles de fondation et open source de Google Cloud, servis sur Vertex AI avec endpoints managés, outils d'évaluation et fine-tuning. C'est le catalogue central pour toute équipe qui standardise son IA sur Google Cloud.",
        why: [
          "Catalogue curé de modèles first-party, partenaires et open source",
          "Endpoints managés avec autoscaling et observabilité",
          "Fine-tuning, distillation et évaluation natifs",
          "VPC Service Controls et Cloud Audit Logs partout",
          "Posture de conformité solide sur toutes les régions"
        ],
        how: "J'aide les équipes à choisir le bon modèle pour chaque charge, à concevoir la topologie des endpoints, à configurer le périmètre VPC-SC et Model Armor, et à intégrer le tout au reste de votre stack d'observabilité et d'audit.",
        deliverables: [
          "Matrice de sélection de modèles par charge",
          "Workflow de déploiement et d'approbation d'endpoints",
          "VPC Service Controls et périmètre de sécurité",
          "Intégration de l'observabilité et de l'audit",
          "Revue de coûts et de gouvernance"
        ]
      },
      zh: {
        category: "Google Cloud 托管模型目录",
        subtitle: "Vertex AI 上精选的基础模型，在 Google Cloud 边界内服务化。",
        what: "Vertex AI Model Garden 是 Google Cloud 精选的基础模型与开源模型目录，依托 Vertex AI 提供托管端点、评估工具与微调能力。对任何希望在 Google Cloud 上标准化 AI 的团队而言，它都是中央目录。",
        why: [
          "精选的一方、合作伙伴与开源模型目录",
          "托管端点支持自动伸缩与可观测性",
          "原生支持微调、蒸馏与评估",
          "全程具备 VPC Service Controls 与 Cloud Audit Logs",
          "跨地域具备稳健的合规姿态"
        ],
        how: "我帮助团队为每个工作负载选择合适的模型，设计端点拓扑，配置 VPC-SC 边界与 Model Armor，并与可观测性和审计栈对接。",
        deliverables: [
          "按工作负载的模型选型矩阵",
          "端点部署与审批工作流",
          "VPC Service Controls 与安全边界",
          "可观测性与审计集成",
          "成本与治理评审"
        ]
      },
      ar: {
        category: "كتالوج نماذج مُدار على Google Cloud",
        subtitle: "نماذج أساسية مُختارة على Vertex AI، تُخدَم داخل محيط Google Cloud.",
        what: "Vertex AI Model Garden هو كتالوج Google Cloud المُختار من النماذج الأساسية ومفتوحة المصدر، يُخدَم على Vertex AI بنقاط نهاية مُدارة وأدوات تقييم وضبط دقيق. هو الكتالوج المركزي لأي فريق يُوحّد الذكاء الاصطناعي على Google Cloud.",
        why: [
          "كتالوج مُختار من نماذج الطرف الأول والشركاء ومفتوحة المصدر",
          "نقاط نهاية مُدارة بمقياس تلقائي ورصد",
          "ضبط دقيق وتقطير وتقييم أصلية",
          "VPC Service Controls وCloud Audit Logs في كل مكان",
          "وضع امتثال قوي عبر المناطق"
        ],
        how: "أُساعد الفرق على اختيار النموذج المناسب لكل حِمل عمل، وتصميم طوبولوجيا نقاط النهاية، وتهيئة محيط VPC-SC وModel Armor، والتكامل مع بقية حزمة الرصد والتدقيق لديك.",
        deliverables: [
          "مصفوفة اختيار النماذج لكل حِمل عمل",
          "سير عمل نشر نقاط النهاية واعتمادها",
          "VPC Service Controls والمحيط الأمني",
          "تكامل الرصد والتدقيق",
          "مراجعة التكلفة والحوكمة"
        ]
      }
    }
  },

  {
    slug: "huggingface-tgi",
    title: "Hugging Face TGI",
    vendor: "generic-amber",
    vendorName: "Hugging Face",
    group: "inference",
    content: {
      en: {
        category: "Open-source inference server",
        subtitle: "Hugging Face Text Generation Inference, the open default for serving open-weight LLMs.",
        what: "Hugging Face Text Generation Inference (TGI) is the open-source server purpose-built for serving open-weight LLMs at production scale. It supports the latest open models, optimised attention kernels and structured streaming, and integrates cleanly with the wider Hugging Face ecosystem.",
        why: [
          "Built for the latest open-weight LLMs out of the box",
          "Production primitives: streaming, batching, structured output",
          "Tight integration with the Hugging Face Hub",
          "Self-hostable, no vendor lock-in",
          "Strong community and rapid model coverage"
        ],
        how: "I help teams stand up TGI deployments tuned for latency, throughput and cost, with model registry governance, key management for gated models, observability and a security boundary between models and tenants.",
        deliverables: [
          "TGI deployment architecture",
          "Model selection and registry plan",
          "GPU scheduling and autoscaling design",
          "Observability integration (Prometheus, OpenTelemetry)",
          "Performance and cost benchmark"
        ]
      },
      fr: {
        category: "Serveur d'inférence open source",
        subtitle: "Hugging Face Text Generation Inference, la référence ouverte pour servir des LLM à poids ouverts.",
        what: "Hugging Face Text Generation Inference (TGI) est le serveur open source dédié au serving de LLM à poids ouverts à l'échelle de la production. Il prend en charge les derniers modèles ouverts, des kernels d'attention optimisés et le streaming structuré, et s'intègre proprement à l'écosystème Hugging Face plus large.",
        why: [
          "Conçu pour les derniers LLM à poids ouverts d'emblée",
          "Primitives de production : streaming, batching, sortie structurée",
          "Intégration étroite avec le Hugging Face Hub",
          "Self-hostable, pas d'enfermement fournisseur",
          "Communauté forte et couverture rapide des nouveaux modèles"
        ],
        how: "J'aide les équipes à mettre en place des déploiements TGI optimisés pour la latence, le débit et le coût, avec gouvernance du registre de modèles, gestion de clés pour les modèles gatés, observabilité et frontière de sécurité entre modèles et tenants.",
        deliverables: [
          "Architecture de déploiement TGI",
          "Plan de sélection de modèles et de registre",
          "Conception du scheduling GPU et de l'autoscaling",
          "Intégration de l'observabilité (Prometheus, OpenTelemetry)",
          "Benchmark de performance et de coût"
        ]
      },
      zh: {
        category: "开源推理服务",
        subtitle: "Hugging Face Text Generation Inference，服务开源权重 LLM 的开源默认选择。",
        what: "Hugging Face Text Generation Inference（TGI）是为生产级服务开源权重 LLM 而生的开源服务。它支持最新的开源模型、优化的注意力内核与结构化流式输出，并与更广义的 Hugging Face 生态无缝衔接。",
        why: [
          "开箱即用支持最新开源权重 LLM",
          "具备生产原语：流式、批处理、结构化输出",
          "与 Hugging Face Hub 深度集成",
          "可自托管，无供应商锁定",
          "社区活跃，模型覆盖速度快"
        ],
        how: "我帮助团队建立面向时延、吞吐与成本调优的 TGI 部署，配套模型注册表治理、面向受限模型的密钥管理、可观测性以及模型与租户之间的安全边界。",
        deliverables: [
          "TGI 部署架构",
          "模型选型与注册表方案",
          "GPU 调度与自动伸缩设计",
          "可观测性集成（Prometheus、OpenTelemetry）",
          "性能与成本基准测试"
        ]
      },
      ar: {
        category: "خادم استدلال مفتوح المصدر",
        subtitle: "Hugging Face Text Generation Inference، الخيار المفتوح الافتراضي لخدمة النماذج اللغوية مفتوحة الأوزان.",
        what: "Hugging Face Text Generation Inference (TGI) هو الخادم مفتوح المصدر المبني خصّيصاً لخدمة النماذج اللغوية مفتوحة الأوزان على نطاق إنتاجي. يدعم أحدث النماذج المفتوحة، ونوى الانتباه المحسَّنة، والبثّ المُهيكَل، ويتكامل بسلاسة مع منظومة Hugging Face الأوسع.",
        why: [
          "مبني لأحدث النماذج اللغوية مفتوحة الأوزان منذ اللحظة الأولى",
          "ركائز إنتاجية، البثّ، الدفعات، المخرجات المُهيكَلة",
          "تكامل وثيق مع Hugging Face Hub",
          "قابل للاستضافة الذاتية، بلا قفل مع المورّد",
          "مجتمع قوي وتغطية سريعة للنماذج"
        ],
        how: "أُساعد الفرق على إقامة عمليات نشر TGI مضبوطة على الكمون والإنتاجية والتكلفة، مع حوكمة سجلّ النماذج، وإدارة المفاتيح للنماذج المحمية، والرصد، وحدود أمنية بين النماذج والمستأجرين.",
        deliverables: [
          "هندسة نشر TGI",
          "خطة اختيار النماذج والسجلّ",
          "تصميم جدولة GPU والمقياس التلقائي",
          "تكامل الرصد (Prometheus، OpenTelemetry)",
          "قياس مرجعي للأداء والتكلفة"
        ]
      }
    }
  },

  {
    slug: "vllm-ray-serve",
    title: "vLLM & Ray Serve",
    vendor: "generic-violet",
    vendorName: "Open ecosystem",
    group: "inference",
    content: {
      en: {
        category: "High-throughput open inference",
        subtitle: "The open-source stack for high-throughput LLM serving and elastic model orchestration.",
        what: "vLLM is the open-source inference engine optimised for throughput on GPUs, with PagedAttention and continuous batching. Ray Serve adds elastic, distributed orchestration of model replicas and pipelines. Together they form the open stack for high-throughput LLM serving at scale.",
        why: [
          "PagedAttention and continuous batching for top throughput",
          "Compatible with most open-weight LLMs",
          "Ray Serve for elastic orchestration and pipelines",
          "Self-hostable, no vendor lock-in",
          "Active community and rapid model coverage"
        ],
        how: "I design vLLM and Ray Serve deployments tuned for your throughput, latency and cost targets, with multi-tenant isolation, GPU scheduling and security boundaries. I integrate the stack with the broader observability and security tooling.",
        deliverables: [
          "vLLM + Ray Serve deployment architecture",
          "GPU scheduling and autoscaling plan",
          "Multi-tenant isolation and authorization",
          "Observability integration (Prometheus, OpenTelemetry)",
          "Performance and cost benchmark"
        ]
      },
      fr: {
        category: "Inférence ouverte à fort débit",
        subtitle: "La stack open source pour le serving LLM à fort débit et l'orchestration élastique de modèles.",
        what: "vLLM est le moteur d'inférence open source optimisé pour le débit sur GPU, avec PagedAttention et batching continu. Ray Serve ajoute une orchestration élastique et distribuée des réplicas de modèles et des pipelines. Ensemble ils forment la stack ouverte pour le serving LLM à fort débit à grande échelle.",
        why: [
          "PagedAttention et batching continu pour un débit de premier plan",
          "Compatible avec la plupart des LLM à poids ouverts",
          "Ray Serve pour l'orchestration élastique et les pipelines",
          "Self-hostable, pas d'enfermement fournisseur",
          "Communauté active et couverture rapide des nouveaux modèles"
        ],
        how: "Je conçois des déploiements vLLM et Ray Serve ajustés à vos objectifs de débit, de latence et de coût, avec isolation multi-tenant, scheduling GPU et frontières de sécurité. J'intègre la stack à l'outillage plus large d'observabilité et de sécurité.",
        deliverables: [
          "Architecture de déploiement vLLM + Ray Serve",
          "Plan de scheduling GPU et d'autoscaling",
          "Isolation multi-tenant et autorisation",
          "Intégration de l'observabilité (Prometheus, OpenTelemetry)",
          "Benchmark de performance et de coût"
        ]
      },
      zh: {
        category: "高吞吐开源推理",
        subtitle: "高吞吐 LLM 服务化与弹性模型编排的开源栈。",
        what: "vLLM 是面向 GPU 吞吐优化的开源推理引擎，具备 PagedAttention 与连续批处理。Ray Serve 在此之上提供模型副本与流水线的弹性、分布式编排。两者共同构成规模化高吞吐 LLM 服务化的开源栈。",
        why: [
          "PagedAttention 与连续批处理带来顶级吞吐",
          "兼容多数开源权重 LLM",
          "Ray Serve 提供弹性编排与流水线",
          "可自托管，无供应商锁定",
          "社区活跃，模型覆盖速度快"
        ],
        how: "我按贵司的吞吐、时延与成本目标设计 vLLM 与 Ray Serve 部署，配套多租户隔离、GPU 调度与安全边界，并把该栈与更广义的可观测性与安全工具对接。",
        deliverables: [
          "vLLM + Ray Serve 部署架构",
          "GPU 调度与自动伸缩方案",
          "多租户隔离与授权",
          "可观测性集成（Prometheus、OpenTelemetry）",
          "性能与成本基准测试"
        ]
      },
      ar: {
        category: "استدلال مفتوح عالي الإنتاجية",
        subtitle: "الحزمة مفتوحة المصدر لخدمة النماذج اللغوية عالية الإنتاجية وتنسيق النماذج المرن.",
        what: "vLLM هو محرّك الاستدلال مفتوح المصدر المحسَّن للإنتاجية على وحدات GPU، بـ PagedAttention والتجميع المستمرّ للدفعات. يُضيف Ray Serve تنسيقاً موزَّعاً ومرناً لنسخ النماذج وخطوط الأنابيب. يُشكّلان معاً الحزمة المفتوحة لخدمة النماذج اللغوية عالية الإنتاجية على نطاق واسع.",
        why: [
          "PagedAttention والتجميع المستمرّ للدفعات لإنتاجية قصوى",
          "متوافق مع معظم النماذج اللغوية مفتوحة الأوزان",
          "Ray Serve لتنسيق مرن وخطوط أنابيب",
          "قابل للاستضافة الذاتية، بلا قفل مع المورّد",
          "مجتمع نشط وتغطية سريعة للنماذج"
        ],
        how: "أصمّم عمليات نشر vLLM وRay Serve مضبوطة على أهداف الإنتاجية والكمون والتكلفة لديك، مع عزل متعدّد المستأجرين، وجدولة GPU، وحدود أمنية. أُدمج الحزمة مع أدوات الرصد والأمن الأوسع.",
        deliverables: [
          "هندسة نشر vLLM + Ray Serve",
          "خطة جدولة GPU والمقياس التلقائي",
          "عزل متعدّد المستأجرين والتفويض",
          "تكامل الرصد (Prometheus، OpenTelemetry)",
          "قياس مرجعي للأداء والتكلفة"
        ]
      }
    }
  },

  {
    slug: "aws-security-hub",
    title: "AWS Security Hub, GuardDuty & Inspector",
    vendor: "aws",
    vendorName: "Amazon Web Services",
    group: "cloud-security",
    content: {
      en: {
        category: "AWS-native security operations",
        subtitle: "The AWS-native trio for security posture, threat detection and vulnerability management.",
        what: "AWS Security Hub aggregates security findings across AWS services and partner tools. GuardDuty provides threat detection for accounts, workloads and data. Inspector scans EC2, containers and serverless for vulnerabilities. Together they form the AWS-native security operations stack.",
        why: [
          "Single pane of glass across AWS security signal",
          "Threat detection across logs, network and runtime",
          "Vulnerability scanning for EC2, ECR and Lambda",
          "Native integration with EventBridge, Lambda and Step Functions",
          "Strong compliance content (CIS, PCI, NIST, ISO)"
        ],
        how: "I design the activation topology across all your AWS accounts, tune the policy framework, route findings into your SOC tooling, and design the response automations through EventBridge and Lambda.",
        deliverables: [
          "Multi-account activation topology",
          "Policy framework and severity tuning",
          "SOC integration and alert triage workflow",
          "Response automation design",
          "Onboarding plan and operating model"
        ]
      },
      fr: {
        category: "Opérations de sécurité natives AWS",
        subtitle: "Le trio natif AWS pour la posture de sécurité, la détection de menaces et la gestion des vulnérabilités.",
        what: "AWS Security Hub agrège les findings de sécurité entre les services AWS et les outils partenaires. GuardDuty fournit la détection de menaces sur les comptes, charges et données. Inspector scanne EC2, conteneurs et serverless pour les vulnérabilités. Ensemble ils forment la stack native AWS d'opérations de sécurité.",
        why: [
          "Vue unique sur l'ensemble du signal de sécurité AWS",
          "Détection de menaces sur logs, réseau et runtime",
          "Scan de vulnérabilités pour EC2, ECR et Lambda",
          "Intégration native avec EventBridge, Lambda et Step Functions",
          "Contenu de conformité solide (CIS, PCI, NIST, ISO)"
        ],
        how: "Je conçois la topologie d'activation sur l'ensemble de vos comptes AWS, j'ajuste le cadre de politiques, je route les findings vers votre outillage SOC et je conçois les automatisations de réponse via EventBridge et Lambda.",
        deliverables: [
          "Topologie d'activation multi-comptes",
          "Cadre de politiques et ajustement des sévérités",
          "Intégration SOC et workflow de triage d'alertes",
          "Conception des automatisations de réponse",
          "Plan d'onboarding et modèle opérationnel"
        ]
      },
      zh: {
        category: "AWS 原生安全运营",
        subtitle: "AWS 原生的安全态势、威胁检测与漏洞管理三件套。",
        what: "AWS Security Hub 汇聚 AWS 服务与合作伙伴工具的安全发现。GuardDuty 为账户、工作负载与数据提供威胁检测。Inspector 扫描 EC2、容器与 Serverless 的漏洞。三者共同构成 AWS 原生的安全运营栈。",
        why: [
          "AWS 安全信号的单一视图",
          "覆盖日志、网络与运行时的威胁检测",
          "对 EC2、ECR 与 Lambda 的漏洞扫描",
          "与 EventBridge、Lambda 和 Step Functions 原生集成",
          "合规内容丰富（CIS、PCI、NIST、ISO）"
        ],
        how: "我设计在贵司全部 AWS 账户上的启用拓扑，调优策略框架，把发现路由至 SOC 工具，并通过 EventBridge 与 Lambda 设计响应自动化。",
        deliverables: [
          "多账户启用拓扑",
          "策略框架与严重度调优",
          "SOC 集成与告警分诊工作流",
          "响应自动化设计",
          "上线计划与运营模式"
        ]
      },
      ar: {
        category: "عمليات أمنية أصلية على AWS",
        subtitle: "الثلاثي الأصلي على AWS للوضع الأمني، وكشف التهديدات، وإدارة الثغرات.",
        what: "AWS Security Hub يُجمِّع نتائج الأمن عبر خدمات AWS وأدوات الشركاء. يُوفّر GuardDuty كشف التهديدات للحسابات وأحمال العمل والبيانات. يفحص Inspector EC2 والحاويات وبدون الخوادم بحثاً عن الثغرات. تُشكّل معاً حزمة العمليات الأمنية الأصلية على AWS.",
        why: [
          "لوحة موحّدة عبر إشارات أمن AWS",
          "كشف تهديدات عبر السجلّات والشبكة ووقت التشغيل",
          "فحص ثغرات لـ EC2 وECR وLambda",
          "تكامل أصلي مع EventBridge وLambda وStep Functions",
          "محتوى امتثال قوي (CIS، PCI، NIST، ISO)"
        ],
        how: "أصمّم طوبولوجيا التفعيل عبر كل حسابات AWS لديك، وأضبط إطار السياسات، وأُمرّر النتائج إلى أدوات مركز العمليات الأمنية، وأُصمّم أتمتة الاستجابة عبر EventBridge وLambda.",
        deliverables: [
          "طوبولوجيا تفعيل متعدّدة الحسابات",
          "إطار سياسات وضبط درجات الخطورة",
          "تكامل مركز العمليات الأمنية وسير عمل فرز التنبيهات",
          "تصميم أتمتة الاستجابة",
          "خطة الإعداد والنموذج التشغيلي"
        ]
      }
    }
  },

  {
    slug: "microsoft-defender-cloud",
    title: "Microsoft Defender for Cloud & Sentinel",
    vendor: "microsoft",
    vendorName: "Microsoft",
    group: "cloud-security",
    content: {
      en: {
        category: "Microsoft cloud security and SIEM",
        subtitle: "Microsoft's CSPM, CWPP and SIEM stack, unified across cloud and identity.",
        what: "Microsoft Defender for Cloud provides CSPM and CWPP across Azure, AWS and GCP, plus AI-specific posture for Azure AI Foundry. Microsoft Sentinel is the cloud-native SIEM and SOAR. Together they form Microsoft's unified security operations platform.",
        why: [
          "Multi-cloud posture and workload protection in one product",
          "Native integration with Microsoft Entra and the Microsoft graph",
          "AI posture management for Azure AI Foundry agents",
          "Sentinel for SIEM and SOAR with hundreds of connectors",
          "Strong compliance content (CIS, PCI, NIST, ISO, regulatory)"
        ],
        how: "I design Defender for Cloud and Sentinel deployments across multi-cloud estates, tune the policy framework, configure the analytic rules, and design the SOC operating model around them.",
        deliverables: [
          "Multi-cloud activation and policy framework",
          "Sentinel workspace and ingestion design",
          "Analytic rules and SOAR playbooks",
          "SOC operating model and runbooks",
          "Onboarding plan and cost optimisation"
        ]
      },
      fr: {
        category: "Sécurité cloud et SIEM Microsoft",
        subtitle: "La stack CSPM, CWPP et SIEM de Microsoft, unifiée à travers cloud et identité.",
        what: "Microsoft Defender for Cloud fournit CSPM et CWPP sur Azure, AWS et GCP, plus la posture spécifique IA pour Azure AI Foundry. Microsoft Sentinel est le SIEM et SOAR cloud-native. Ensemble ils forment la plateforme unifiée d'opérations de sécurité de Microsoft.",
        why: [
          "Posture multi-cloud et protection des charges dans un seul produit",
          "Intégration native avec Microsoft Entra et le graphe Microsoft",
          "Gestion de posture IA pour les agents Azure AI Foundry",
          "Sentinel pour SIEM et SOAR avec des centaines de connecteurs",
          "Contenu de conformité solide (CIS, PCI, NIST, ISO, réglementaire)"
        ],
        how: "Je conçois les déploiements Defender for Cloud et Sentinel sur des parcs multi-cloud, j'ajuste le cadre de politiques, je configure les règles analytiques et je conçois le modèle opérationnel SOC autour.",
        deliverables: [
          "Activation multi-cloud et cadre de politiques",
          "Conception du workspace Sentinel et de l'ingestion",
          "Règles analytiques et playbooks SOAR",
          "Modèle opérationnel SOC et runbooks",
          "Plan d'onboarding et optimisation des coûts"
        ]
      },
      zh: {
        category: "Microsoft 云安全与 SIEM",
        subtitle: "Microsoft 的 CSPM、CWPP 与 SIEM 栈，统一覆盖云与身份。",
        what: "Microsoft Defender for Cloud 在 Azure、AWS 与 GCP 上提供 CSPM 与 CWPP，并面向 Azure AI Foundry 提供 AI 专属态势。Microsoft Sentinel 是云原生 SIEM 与 SOAR。两者共同构成 Microsoft 统一的安全运营平台。",
        why: [
          "多云态势与工作负载防护合于一体",
          "与 Microsoft Entra 及 Microsoft graph 原生集成",
          "为 Azure AI Foundry 智能体提供 AI 态势管理",
          "Sentinel 提供 SIEM 与 SOAR，拥有数百个连接器",
          "合规内容丰富（CIS、PCI、NIST、ISO 与监管要求）"
        ],
        how: "我在多云资产上设计 Defender for Cloud 与 Sentinel 部署，调优策略框架，配置分析规则，并围绕它们构建 SOC 运营模式。",
        deliverables: [
          "多云启用与策略框架",
          "Sentinel 工作区与数据接入设计",
          "分析规则与 SOAR playbook",
          "SOC 运营模式与操作手册",
          "上线计划与成本优化"
        ]
      },
      ar: {
        category: "أمن السحابة وSIEM من Microsoft",
        subtitle: "حزمة Microsoft لـ CSPM وCWPP وSIEM، موحّدة عبر السحابة والهوية.",
        what: "يُوفّر Microsoft Defender for Cloud قدرات CSPM وCWPP عبر Azure وAWS وGCP، إضافة إلى وضع أمني خاص بـ Azure AI Foundry. Microsoft Sentinel هو SIEM وSOAR السحابي الأصلي. يُشكّلان معاً منصة العمليات الأمنية الموحّدة من Microsoft.",
        why: [
          "وضع متعدّد السحابة وحماية أحمال العمل في منتج واحد",
          "تكامل أصلي مع Microsoft Entra ومنظومة Microsoft graph",
          "إدارة وضع الذكاء الاصطناعي لوكلاء Azure AI Foundry",
          "Sentinel لـ SIEM وSOAR بمئات الموصّلات",
          "محتوى امتثال قوي (CIS، PCI، NIST، ISO، تنظيمي)"
        ],
        how: "أصمّم عمليات نشر Defender for Cloud وSentinel عبر منظومات متعدّدة السحابة، وأضبط إطار السياسات، وأُهيّئ قواعد التحليل، وأُصمّم النموذج التشغيلي لمركز العمليات الأمنية حولها.",
        deliverables: [
          "تفعيل متعدّد السحابة وإطار سياسات",
          "تصميم مساحة عمل Sentinel وابتلاع البيانات",
          "قواعد تحليل وأدلة استجابة SOAR",
          "نموذج تشغيلي لمركز العمليات الأمنية وأدلة تشغيل",
          "خطة الإعداد وتحسين التكلفة"
        ]
      }
    }
  },

  {
    slug: "google-security-command-center",
    title: "Google Security Command Center",
    vendor: "google",
    vendorName: "Google Cloud",
    group: "cloud-security",
    content: {
      en: {
        category: "Google Cloud security platform",
        subtitle: "Google's CSPM, CWPP and threat detection platform, native across Google Cloud.",
        what: "Google Security Command Center is the native security platform for Google Cloud. It bundles security posture, attack-surface management, threat detection and Mandiant intelligence into a single console, with deep integration across the Google Cloud control plane.",
        why: [
          "Native posture across all your Google Cloud projects",
          "Built-in Mandiant threat intelligence",
          "Attack-path analysis and risk prioritisation",
          "VPC Service Controls and IAM Recommender integrations",
          "Strong compliance content (CIS, PCI, NIST, ISO)"
        ],
        how: "I design the activation topology across your Google Cloud organisation, tune the policy framework, configure the Mandiant integrations and route findings into your SOC tooling.",
        deliverables: [
          "Organisation-wide activation topology",
          "Policy framework and severity tuning",
          "Mandiant and threat-intel integration",
          "SOC integration and alert workflow",
          "Onboarding plan and operating model"
        ]
      },
      fr: {
        category: "Plateforme de sécurité Google Cloud",
        subtitle: "La plateforme CSPM, CWPP et de détection de menaces de Google, native sur Google Cloud.",
        what: "Google Security Command Center est la plateforme de sécurité native de Google Cloud. Elle rassemble posture de sécurité, gestion de la surface d'attaque, détection de menaces et threat intelligence Mandiant dans une console unique, avec une intégration profonde au plan de contrôle Google Cloud.",
        why: [
          "Posture native sur l'ensemble de vos projets Google Cloud",
          "Threat intelligence Mandiant intégrée",
          "Analyse des chemins d'attaque et priorisation du risque",
          "Intégrations avec VPC Service Controls et IAM Recommender",
          "Contenu de conformité solide (CIS, PCI, NIST, ISO)"
        ],
        how: "Je conçois la topologie d'activation à l'échelle de votre organisation Google Cloud, j'ajuste le cadre de politiques, je configure les intégrations Mandiant et je route les findings vers votre outillage SOC.",
        deliverables: [
          "Topologie d'activation à l'échelle de l'organisation",
          "Cadre de politiques et ajustement des sévérités",
          "Intégration Mandiant et threat intelligence",
          "Intégration SOC et workflow d'alertes",
          "Plan d'onboarding et modèle opérationnel"
        ]
      },
      zh: {
        category: "Google Cloud 安全平台",
        subtitle: "Google 的 CSPM、CWPP 与威胁检测平台，Google Cloud 原生。",
        what: "Google Security Command Center 是 Google Cloud 的原生安全平台。它将安全态势、攻击面管理、威胁检测与 Mandiant 情报整合为单一控制台，深度集成 Google Cloud 控制面。",
        why: [
          "覆盖贵司所有 Google Cloud 项目的原生态势",
          "内置 Mandiant 威胁情报",
          "支持攻击路径分析与风险优先级排序",
          "与 VPC Service Controls 及 IAM Recommender 集成",
          "合规内容丰富（CIS、PCI、NIST、ISO）"
        ],
        how: "我在贵司 Google Cloud 组织范围内设计启用拓扑，调优策略框架，配置 Mandiant 集成，并把发现路由至 SOC 工具。",
        deliverables: [
          "组织级启用拓扑",
          "策略框架与严重度调优",
          "Mandiant 与威胁情报集成",
          "SOC 集成与告警工作流",
          "上线计划与运营模式"
        ]
      },
      ar: {
        category: "منصة أمن Google Cloud",
        subtitle: "منصة Google لـ CSPM وCWPP وكشف التهديدات، أصلية عبر Google Cloud.",
        what: "Google Security Command Center هي منصة الأمن الأصلية لـ Google Cloud. تجمع الوضع الأمني، وإدارة سطح الهجوم، وكشف التهديدات، واستخبارات Mandiant في وحدة تحكّم واحدة، بتكامل عميق عبر مستوى تحكّم Google Cloud.",
        why: [
          "وضع أصلي عبر كل مشاريع Google Cloud لديك",
          "استخبارات تهديد Mandiant مدمجة",
          "تحليل مسار الهجوم وتحديد أولويات المخاطر",
          "تكاملات VPC Service Controls وIAM Recommender",
          "محتوى امتثال قوي (CIS، PCI، NIST، ISO)"
        ],
        how: "أصمّم طوبولوجيا التفعيل عبر منظمة Google Cloud لديك، وأضبط إطار السياسات، وأُهيّئ تكاملات Mandiant، وأُمرّر النتائج إلى أدوات مركز العمليات الأمنية.",
        deliverables: [
          "طوبولوجيا تفعيل على مستوى المنظمة",
          "إطار سياسات وضبط درجات الخطورة",
          "تكامل Mandiant واستخبارات التهديد",
          "تكامل مركز العمليات الأمنية وسير عمل التنبيهات",
          "خطة الإعداد والنموذج التشغيلي"
        ]
      }
    }
  },

  {
    slug: "cloudflare-zero-trust",
    title: "Cloudflare Zero Trust & WAF",
    vendor: "generic-amber",
    vendorName: "Cloudflare",
    group: "cloud-security",
    content: {
      en: {
        category: "Edge zero trust and WAF",
        subtitle: "Cloudflare's edge security stack: zero trust access, WAF, bot management and AI Gateway.",
        what: "Cloudflare Zero Trust provides identity-aware access, ZTNA, secure web gateway, browser isolation and email security at the edge. The Cloudflare WAF and AI Gateway add application protection and a control point for outbound LLM traffic. I led the global Cloudflare deployment at a tier-one financial information provider.",
        why: [
          "Edge-delivered: low latency anywhere in the world",
          "Single console for ZTNA, SWG, CASB, WAF and email security",
          "AI Gateway as a control point for outbound LLM traffic",
          "Native integration with major IdPs",
          "Strong DDoS posture out of the box"
        ],
        how: "I design Cloudflare Zero Trust and WAF deployments across your global estate, design the policy framework, integrate with your IdP, and stand up the operating model around the platform.",
        deliverables: [
          "Zero Trust deployment topology",
          "Policy framework (ZTNA, SWG, WAF, AI Gateway)",
          "IdP integration and identity model",
          "SOC integration and alert workflow",
          "Onboarding plan and operating model"
        ]
      },
      fr: {
        category: "Zero trust en edge et WAF",
        subtitle: "La stack de sécurité edge de Cloudflare : accès zero trust, WAF, bot management et AI Gateway.",
        what: "Cloudflare Zero Trust fournit accès identity-aware, ZTNA, secure web gateway, isolation navigateur et sécurité e-mail en edge. Le WAF Cloudflare et l'AI Gateway ajoutent la protection applicative et un point de contrôle pour le trafic LLM sortant. J'ai piloté le déploiement mondial de Cloudflare chez un fournisseur d'informations financières de premier rang.",
        why: [
          "Livré en edge : faible latence partout dans le monde",
          "Console unique pour ZTNA, SWG, CASB, WAF et sécurité e-mail",
          "AI Gateway comme point de contrôle pour le trafic LLM sortant",
          "Intégration native avec les principaux IdP",
          "Posture anti-DDoS forte d'emblée"
        ],
        how: "Je conçois les déploiements Cloudflare Zero Trust et WAF sur votre parc global, je conçois le cadre de politiques, j'intègre votre IdP et je mets en place le modèle opérationnel autour de la plateforme.",
        deliverables: [
          "Topologie de déploiement Zero Trust",
          "Cadre de politiques (ZTNA, SWG, WAF, AI Gateway)",
          "Intégration IdP et modèle d'identité",
          "Intégration SOC et workflow d'alertes",
          "Plan d'onboarding et modèle opérationnel"
        ]
      },
      zh: {
        category: "边缘零信任与 WAF",
        subtitle: "Cloudflare 的边缘安全栈：零信任接入、WAF、机器人管理与 AI Gateway。",
        what: "Cloudflare Zero Trust 在边缘提供身份感知接入、ZTNA、安全 Web 网关、浏览器隔离与邮件安全。Cloudflare WAF 与 AI Gateway 在此之上加入应用防护与对外向 LLM 流量的控制点。我曾在一家一级金融信息供应商主导 Cloudflare 的全球部署。",
        why: [
          "边缘交付：全球任意位置都享低时延",
          "ZTNA、SWG、CASB、WAF 与邮件安全统一控制台",
          "AI Gateway 作为对外向 LLM 流量的控制点",
          "与主流 IdP 原生集成",
          "开箱即用的稳健 DDoS 防护姿态"
        ],
        how: "我在贵司全球资产上设计 Cloudflare Zero Trust 与 WAF 部署，设计策略框架，与 IdP 集成，并围绕平台搭建运营模式。",
        deliverables: [
          "零信任部署拓扑",
          "策略框架（ZTNA、SWG、WAF、AI Gateway）",
          "IdP 集成与身份模型",
          "SOC 集成与告警工作流",
          "上线计划与运营模式"
        ]
      },
      ar: {
        category: "ثقة صفرية على الحافة وWAF",
        subtitle: "حزمة Cloudflare الأمنية على الحافة، وصول ثقة صفرية، WAF، إدارة الروبوتات، وAI Gateway.",
        what: "يُوفّر Cloudflare Zero Trust وصولاً مدركاً للهوية، وZTNA، وبوّابة ويب آمنة، وعزل المتصفّح، وأمن البريد على الحافة. تُضيف Cloudflare WAF وAI Gateway حماية للتطبيقات ونقطة تحكّم لحركة النماذج اللغوية الصادرة. قُدتُ النشر العالمي لـ Cloudflare لدى مزوّد معلومات مالية من الفئة الأولى.",
        why: [
          "تُقدَّم على الحافة، كمون منخفض في أي مكان في العالم",
          "وحدة تحكّم واحدة لـ ZTNA وSWG وCASB وWAF وأمن البريد",
          "AI Gateway كنقطة تحكّم لحركة النماذج اللغوية الصادرة",
          "تكامل أصلي مع مزوّدي الهوية الكبار",
          "وضع قوي ضدّ هجمات DDoS منذ اللحظة الأولى"
        ],
        how: "أصمّم عمليات نشر Cloudflare Zero Trust وWAF عبر منظومتك العالمية، وأصمّم إطار السياسات، وأُدمج مع مزوّد الهوية لديك، وأُقيم النموذج التشغيلي حول المنصّة.",
        deliverables: [
          "طوبولوجيا نشر Zero Trust",
          "إطار سياسات (ZTNA، SWG، WAF، AI Gateway)",
          "تكامل مزوّد الهوية ونموذج الهوية",
          "تكامل مركز العمليات الأمنية وسير عمل التنبيهات",
          "خطة الإعداد والنموذج التشغيلي"
        ]
      }
    }
  },

  {
    slug: "wiz-lacework-orca",
    title: "Wiz, Lacework & Orca",
    vendor: "generic-cyan",
    vendorName: "Independent CNAPP vendors",
    group: "cloud-security",
    content: {
      en: {
        category: "Agentless CNAPP",
        subtitle: "The independent agentless CNAPP options, when you want CSPM beyond your cloud provider.",
        what: "Wiz, Lacework and Orca are the leading independent CNAPP platforms. They scan multi-cloud estates agentlessly through APIs and snapshots, surface risk via attack-path analysis, and provide CIEM, CWPP and DSPM in a single console. They are the natural choice when you want CSPM coverage beyond what your cloud provider offers natively.",
        why: [
          "Agentless scanning across AWS, Azure, GCP, OCI",
          "Attack-path analysis and risk prioritisation",
          "CIEM, CWPP and DSPM in one product",
          "Fast time-to-value, no agent footprint",
          "Independent vendors, no cloud-provider lock-in"
        ],
        how: "I help teams evaluate, select and roll out the right CNAPP for their estate, design the policy framework, integrate with their SOC and ticketing tooling, and operate the platform sustainably.",
        deliverables: [
          "CNAPP evaluation and selection report",
          "Deployment topology across all cloud accounts",
          "Policy framework and severity tuning",
          "SOC and ticketing integration",
          "Onboarding plan and operating model"
        ]
      },
      fr: {
        category: "CNAPP sans agent",
        subtitle: "Les options indépendantes de CNAPP sans agent, quand vous voulez du CSPM au-delà de votre fournisseur cloud.",
        what: "Wiz, Lacework et Orca sont les principales plateformes CNAPP indépendantes. Elles scannent les parcs multi-cloud sans agent, via API et snapshots, font émerger le risque par analyse des chemins d'attaque et fournissent CIEM, CWPP et DSPM dans une console unique. C'est le choix naturel quand vous voulez une couverture CSPM au-delà de ce qu'offre nativement votre fournisseur cloud.",
        why: [
          "Scan sans agent sur AWS, Azure, GCP, OCI",
          "Analyse des chemins d'attaque et priorisation du risque",
          "CIEM, CWPP et DSPM dans un seul produit",
          "Time-to-value rapide, pas d'empreinte d'agent",
          "Fournisseurs indépendants, pas d'enfermement fournisseur cloud"
        ],
        how: "J'aide les équipes à évaluer, sélectionner et déployer le bon CNAPP pour leur parc, à concevoir le cadre de politiques, à intégrer avec leur outillage SOC et ticketing et à exploiter la plateforme dans la durée.",
        deliverables: [
          "Rapport d'évaluation et de sélection CNAPP",
          "Topologie de déploiement sur l'ensemble des comptes cloud",
          "Cadre de politiques et ajustement des sévérités",
          "Intégration SOC et ticketing",
          "Plan d'onboarding et modèle opérationnel"
        ]
      },
      zh: {
        category: "无代理 CNAPP",
        subtitle: "独立的无代理 CNAPP 选项，适用于需要超越云供应商原生能力的 CSPM 场景。",
        what: "Wiz、Lacework 与 Orca 是领先的独立 CNAPP 平台。它们通过 API 与快照对多云资产进行无代理扫描，借助攻击路径分析显性化风险，并在单一控制台提供 CIEM、CWPP 与 DSPM。当贵司需要超越云供应商原生能力的 CSPM 覆盖时，它们是自然之选。",
        why: [
          "对 AWS、Azure、GCP、OCI 进行无代理扫描",
          "支持攻击路径分析与风险优先级排序",
          "CIEM、CWPP 与 DSPM 一体化",
          "上线快，零代理占用",
          "独立供应商，无云厂商锁定"
        ],
        how: "我帮助团队评估、选型并落地适合其资产的 CNAPP，设计策略框架，与 SOC 及工单工具集成，并实现平台的长期可持续运营。",
        deliverables: [
          "CNAPP 评估与选型报告",
          "覆盖所有云账户的部署拓扑",
          "策略框架与严重度调优",
          "SOC 与工单系统集成",
          "上线计划与运营模式"
        ]
      },
      ar: {
        category: "CNAPP بلا وكيل",
        subtitle: "خيارات CNAPP المستقلة بلا وكيل، حين تريد CSPM يتجاوز ما يُقدّمه مزوّد السحابة لديك.",
        what: "Wiz وLacework وOrca هي منصات CNAPP المستقلة الرائدة. تفحص منظومات متعدّدة السحابة بلا وكيل عبر واجهات API ولقطات، وتُظهِر المخاطر عبر تحليل مسار الهجوم، وتوفّر CIEM وCWPP وDSPM في وحدة تحكّم واحدة. هي الخيار الطبيعي حين تريد تغطية CSPM تتجاوز ما يُقدّمه مزوّد السحابة لديك أصلياً.",
        why: [
          "فحص بلا وكيل عبر AWS وAzure وGCP وOCI",
          "تحليل مسار الهجوم وتحديد أولويات المخاطر",
          "CIEM وCWPP وDSPM في منتج واحد",
          "زمن وصول سريع للقيمة، بلا بصمة وكيل",
          "مورّدون مستقلّون، بلا قفل مع مزوّد السحابة"
        ],
        how: "أُساعد الفرق على تقييم واختيار وإطلاق CNAPP المناسب لمنظومتها، وتصميم إطار السياسات، والتكامل مع مركز العمليات الأمنية وأدوات إدارة التذاكر، وتشغيل المنصّة بشكل مستدام.",
        deliverables: [
          "تقرير تقييم واختيار CNAPP",
          "طوبولوجيا نشر عبر كل حسابات السحابة",
          "إطار سياسات وضبط درجات الخطورة",
          "تكامل مركز العمليات الأمنية وإدارة التذاكر",
          "خطة الإعداد والنموذج التشغيلي"
        ]
      }
    }
  },

  {
    slug: "hashicorp-vault-terraform",
    title: "HashiCorp Vault & Terraform",
    vendor: "generic-violet",
    vendorName: "HashiCorp",
    group: "cloud-security",
    content: {
      en: {
        category: "Secrets and infrastructure as code",
        subtitle: "HashiCorp's secrets management and infrastructure-as-code, the multi-cloud foundation.",
        what: "HashiCorp Vault is the industry standard for secrets management, dynamic credentials, encryption-as-a-service and PKI. Terraform is the de-facto multi-cloud infrastructure-as-code language. Together they form the foundation of secure, repeatable multi-cloud infrastructure for AI and beyond.",
        why: [
          "Vault: dynamic secrets, KV, PKI, transit encryption, KMIP",
          "Terraform: idempotent, declarative, multi-cloud provisioning",
          "Strong open-source posture, optional enterprise features",
          "Native integrations with every major cloud and platform",
          "Mature governance: Sentinel policy-as-code, OPA, Terraform Cloud"
        ],
        how: "I design Vault and Terraform deployments aligned to your security boundary: secret namespace model, dynamic credentials for cloud, PKI for mTLS, Terraform module library, Sentinel or OPA policy framework.",
        deliverables: [
          "Vault deployment topology and namespace model",
          "Dynamic credentials and PKI plan",
          "Terraform module library and CI integration",
          "Policy-as-code framework",
          "Operating model and on-call playbook"
        ]
      },
      fr: {
        category: "Secrets et infrastructure as code",
        subtitle: "La gestion de secrets et l'infrastructure as code de HashiCorp, fondation multi-cloud.",
        what: "HashiCorp Vault est le standard du marché pour la gestion de secrets, les credentials dynamiques, le chiffrement-as-a-service et le PKI. Terraform est le langage de fait de l'infrastructure as code multi-cloud. Ensemble ils forment le socle d'une infrastructure multi-cloud sûre et reproductible, pour l'IA et au-delà.",
        why: [
          "Vault : secrets dynamiques, KV, PKI, chiffrement transit, KMIP",
          "Terraform : provisioning idempotent, déclaratif, multi-cloud",
          "Posture open source forte, fonctionnalités enterprise en option",
          "Intégrations natives avec tous les grands clouds et plateformes",
          "Gouvernance mûre : Sentinel policy-as-code, OPA, Terraform Cloud"
        ],
        how: "Je conçois les déploiements Vault et Terraform alignés à votre frontière de sécurité : modèle de namespaces de secrets, credentials dynamiques pour le cloud, PKI pour mTLS, bibliothèque de modules Terraform, cadre de policy Sentinel ou OPA.",
        deliverables: [
          "Topologie de déploiement Vault et modèle de namespaces",
          "Plan de credentials dynamiques et PKI",
          "Bibliothèque de modules Terraform et intégration CI",
          "Cadre policy-as-code",
          "Modèle opérationnel et playbook d'astreinte"
        ]
      },
      zh: {
        category: "密钥与基础设施即代码",
        subtitle: "HashiCorp 的密钥管理与基础设施即代码，多云的基础底座。",
        what: "HashiCorp Vault 是密钥管理、动态凭据、加密即服务与 PKI 的行业标准。Terraform 是事实意义上的多云基础设施即代码语言。两者共同构成 AI 及更广场景下安全、可复用多云基础设施的底座。",
        why: [
          "Vault：动态密钥、KV、PKI、传输加密、KMIP",
          "Terraform：幂等、声明式、多云配置",
          "稳固的开源姿态，可选企业级功能",
          "与每个主流云与平台原生集成",
          "成熟治理：Sentinel 策略即代码、OPA、Terraform Cloud"
        ],
        how: "我根据贵司安全边界设计 Vault 与 Terraform 部署：密钥命名空间模型、面向云的动态凭据、用于 mTLS 的 PKI、Terraform 模块库以及 Sentinel 或 OPA 策略框架。",
        deliverables: [
          "Vault 部署拓扑与命名空间模型",
          "动态凭据与 PKI 方案",
          "Terraform 模块库与 CI 集成",
          "策略即代码框架",
          "运营模式与值班 playbook"
        ]
      },
      ar: {
        category: "الأسرار والبنية التحتية كشيفرة",
        subtitle: "إدارة الأسرار والبنية التحتية كشيفرة من HashiCorp، الأساس لمتعدّد السحابة.",
        what: "HashiCorp Vault هو المعيار الصناعي لإدارة الأسرار، والاعتمادات الديناميكية، والتشفير كخدمة، وPKI. Terraform هي اللغة الفعلية للبنية التحتية كشيفرة عبر السحابات المتعدّدة. يُشكّلان معاً أساس بنية تحتية آمنة وقابلة للتكرار عبر السحابات المتعدّدة للذكاء الاصطناعي وما بعده.",
        why: [
          "Vault، أسرار ديناميكية، KV، PKI، تشفير العبور، KMIP",
          "Terraform، توفير مُجرَّد، تصريحي، عبر سحابات متعدّدة",
          "وضع قوي مفتوح المصدر، بميزات مؤسسية اختيارية",
          "تكاملات أصلية مع كل سحابة ومنصّة كبرى",
          "حوكمة ناضجة، Sentinel للسياسة كشيفرة، OPA، Terraform Cloud"
        ],
        how: "أصمّم عمليات نشر Vault وTerraform متوائمة مع حدودك الأمنية، نموذج فضاءات الأسرار، اعتمادات ديناميكية للسحابة، PKI لـ mTLS، مكتبة وحدات Terraform، إطار سياسة كشيفرة عبر Sentinel أو OPA.",
        deliverables: [
          "طوبولوجيا نشر Vault ونموذج فضاءات الأسماء",
          "خطة اعتمادات ديناميكية وPKI",
          "مكتبة وحدات Terraform وتكامل CI",
          "إطار سياسة كشيفرة",
          "نموذج تشغيلي ودليل المناوبة"
        ]
      }
    }
  },

  {
    slug: "weights-and-biases",
    title: "Weights & Biases",
    vendor: "generic-amber",
    vendorName: "Weights & Biases",
    group: "observability",
    content: {
      en: {
        category: "ML & LLM experiment tracking",
        subtitle: "The standard experiment tracking, evaluation and model registry for ML and LLM teams.",
        what: "Weights & Biases (W&B) provides experiment tracking, evaluations, model registry and Weave for LLM observability. It is the standard tool for ML teams that need rigorous experiment management, and it is rapidly extending into the LLM and agent observability space.",
        why: [
          "Experiment tracking with full lineage and reproducibility",
          "Model registry with promotion and approval workflows",
          "Weave for prompt and agent observability",
          "Native integrations with PyTorch, JAX, Hugging Face, LangChain",
          "Strong governance for regulated ML pipelines"
        ],
        how: "I integrate W&B into your ML and agent stack, design the experiment and model lifecycle, configure the registry promotion workflow, and connect the platform to your audit and SIEM tooling.",
        deliverables: [
          "W&B integration into your ML and agent stack",
          "Experiment and model lifecycle design",
          "Registry promotion and approval workflow",
          "Audit and SIEM integration",
          "Operating model and team enablement"
        ]
      },
      fr: {
        category: "Suivi d'expériences ML et LLM",
        subtitle: "Le standard de suivi d'expériences, d'évaluation et de registre de modèles pour les équipes ML et LLM.",
        what: "Weights & Biases (W&B) fournit suivi d'expériences, évaluations, registre de modèles et Weave pour l'observabilité LLM. C'est l'outil de référence pour les équipes ML qui ont besoin d'une gestion rigoureuse des expériences, et il s'étend rapidement à l'observabilité LLM et agents.",
        why: [
          "Suivi d'expériences avec traçabilité complète et reproductibilité",
          "Registre de modèles avec workflows de promotion et d'approbation",
          "Weave pour l'observabilité de prompts et d'agents",
          "Intégrations natives avec PyTorch, JAX, Hugging Face, LangChain",
          "Gouvernance solide pour les pipelines ML régulés"
        ],
        how: "J'intègre W&B dans votre stack ML et agents, je conçois le cycle de vie d'expériences et de modèles, je configure le workflow de promotion du registre et je connecte la plateforme à votre outillage d'audit et SIEM.",
        deliverables: [
          "Intégration de W&B dans votre stack ML et agents",
          "Conception du cycle de vie d'expériences et de modèles",
          "Workflow de promotion et d'approbation du registre",
          "Intégration audit et SIEM",
          "Modèle opérationnel et montée en compétence des équipes"
        ]
      },
      zh: {
        category: "ML 与 LLM 实验跟踪",
        subtitle: "ML 与 LLM 团队的标准实验跟踪、评估与模型注册表。",
        what: "Weights & Biases（W&B）提供实验跟踪、评估、模型注册表以及用于 LLM 可观测性的 Weave。对需要严格实验管理的 ML 团队而言，它是标准工具，并正在快速延伸至 LLM 与智能体可观测性领域。",
        why: [
          "实验跟踪具备完整血缘与可复现性",
          "模型注册表支持晋升与审批工作流",
          "Weave 提供 prompt 与智能体可观测性",
          "原生集成 PyTorch、JAX、Hugging Face、LangChain",
          "面向受监管 ML 流水线的稳健治理"
        ],
        how: "我把 W&B 接入贵司 ML 与智能体栈，设计实验与模型生命周期，配置注册表晋升工作流，并把平台对接到审计与 SIEM 工具。",
        deliverables: [
          "W&B 与贵司 ML 及智能体栈的集成",
          "实验与模型生命周期设计",
          "注册表晋升与审批工作流",
          "审计与 SIEM 集成",
          "运营模式与团队赋能"
        ]
      },
      ar: {
        category: "تتبّع تجارب تعلّم الآلة والنماذج اللغوية",
        subtitle: "المعيار لتتبّع التجارب والتقييم وسجلّ النماذج لفرق تعلّم الآلة والنماذج اللغوية.",
        what: "Weights & Biases (W&B) يُوفّر تتبّع التجارب والتقييمات وسجلّ النماذج وWeave لرصد النماذج اللغوية. هو الأداة المعيارية لفرق تعلّم الآلة التي تحتاج إلى إدارة تجارب صارمة، ويمتدّ بسرعة إلى فضاء رصد النماذج اللغوية والوكلاء.",
        why: [
          "تتبّع تجارب بنسب كامل وقابلية للتكرار",
          "سجلّ نماذج بسير عمل ترقية واعتماد",
          "Weave لرصد التوجيهات والوكلاء",
          "تكاملات أصلية مع PyTorch وJAX وHugging Face وLangChain",
          "حوكمة قوية لخطوط أنابيب تعلّم الآلة الخاضعة للتنظيم"
        ],
        how: "أُدمج W&B في حزمة تعلّم الآلة والوكلاء لديك، وأصمّم دورة حياة التجارب والنماذج، وأُهيّئ سير عمل ترقية السجلّ، وأربط المنصّة بأدوات التدقيق وSIEM لديك.",
        deliverables: [
          "تكامل W&B في حزمة تعلّم الآلة والوكلاء لديك",
          "تصميم دورة حياة التجارب والنماذج",
          "سير عمل ترقية واعتماد السجلّ",
          "تكامل التدقيق وSIEM",
          "نموذج تشغيلي وتمكين الفريق"
        ]
      }
    }
  },

  {
    slug: "arize-phoenix",
    title: "Arize Phoenix & TruLens",
    vendor: "generic-violet",
    vendorName: "Arize / TruLens",
    group: "observability",
    content: {
      en: {
        category: "Open LLM evaluation and tracing",
        subtitle: "Open-source observability and evaluation for LLM applications.",
        what: "Arize Phoenix is an open-source observability and evaluation tool for LLM and agent applications, with full OpenTelemetry tracing. TruLens provides programmatic evaluation primitives for RAG and agent applications. Together they cover open-source LLM observability and evaluation end-to-end.",
        why: [
          "Open source and self-hostable",
          "Native OpenTelemetry support for traces",
          "Programmatic evaluators for RAG and agent quality",
          "Integrations with LangChain, LlamaIndex, OpenAI Agents",
          "Plays well with Langfuse and other observability layers"
        ],
        how: "I integrate Phoenix and TruLens into your existing LLM stack, design the evaluation harness, configure custom evaluators for your domain, and connect the traces into your broader observability platform.",
        deliverables: [
          "Phoenix and TruLens deployment design",
          "Evaluation harness with custom evaluators",
          "OpenTelemetry trace integration",
          "Drift and quality alerting",
          "Operating model and team enablement"
        ]
      },
      fr: {
        category: "Évaluation et tracing LLM ouverts",
        subtitle: "Observabilité et évaluation open source pour les applications LLM.",
        what: "Arize Phoenix est un outil open source d'observabilité et d'évaluation pour applications LLM et agents, avec tracing OpenTelemetry complet. TruLens fournit des primitives d'évaluation programmables pour les applications RAG et agents. Ensemble ils couvrent de bout en bout l'observabilité et l'évaluation LLM open source.",
        why: [
          "Open source et self-hostable",
          "Support natif OpenTelemetry pour les traces",
          "Évaluateurs programmables pour la qualité RAG et agents",
          "Intégrations avec LangChain, LlamaIndex, OpenAI Agents",
          "Se combine bien avec Langfuse et d'autres couches d'observabilité"
        ],
        how: "J'intègre Phoenix et TruLens dans votre stack LLM existante, je conçois le harness d'évaluation, je configure des évaluateurs personnalisés pour votre domaine et je connecte les traces à votre plateforme d'observabilité plus large.",
        deliverables: [
          "Conception du déploiement Phoenix et TruLens",
          "Harness d'évaluation avec évaluateurs personnalisés",
          "Intégration des traces OpenTelemetry",
          "Alerting sur dérive et qualité",
          "Modèle opérationnel et montée en compétence des équipes"
        ]
      },
      zh: {
        category: "开源 LLM 评估与追踪",
        subtitle: "面向 LLM 应用的开源可观测性与评估。",
        what: "Arize Phoenix 是面向 LLM 与智能体应用的开源可观测性与评估工具，原生支持 OpenTelemetry 追踪。TruLens 为 RAG 与智能体应用提供可编程的评估原语。两者结合，端到端覆盖开源 LLM 可观测性与评估。",
        why: [
          "开源，可自托管",
          "原生支持 OpenTelemetry 追踪",
          "为 RAG 与智能体质量提供可编程评估器",
          "集成 LangChain、LlamaIndex、OpenAI Agents",
          "与 Langfuse 等可观测层共存良好"
        ],
        how: "我把 Phoenix 与 TruLens 接入贵司既有的 LLM 栈，设计评估流水线，为业务领域配置自定义评估器，并把追踪接入更广义的可观测性平台。",
        deliverables: [
          "Phoenix 与 TruLens 部署设计",
          "带自定义评估器的评估流水线",
          "OpenTelemetry 追踪集成",
          "漂移与质量告警",
          "运营模式与团队赋能"
        ]
      },
      ar: {
        category: "تقييم وتتبّع النماذج اللغوية المفتوح",
        subtitle: "رصد وتقييم مفتوح المصدر لتطبيقات النماذج اللغوية.",
        what: "Arize Phoenix أداة رصد وتقييم مفتوحة المصدر لتطبيقات النماذج اللغوية والوكلاء، بدعم كامل لتتبّع OpenTelemetry. يُوفّر TruLens ركائز تقييم برمجية لتطبيقات RAG والوكلاء. يُغطّيان معاً رصد وتقييم النماذج اللغوية مفتوح المصدر من الطرف إلى الطرف.",
        why: [
          "مفتوح المصدر وقابل للاستضافة الذاتية",
          "دعم أصلي لـ OpenTelemetry للتتبّعات",
          "مُقيِّمات برمجية لجودة RAG والوكلاء",
          "تكاملات مع LangChain وLlamaIndex وOpenAI Agents",
          "يتعايش جيداً مع Langfuse وطبقات الرصد الأخرى"
        ],
        how: "أُدمج Phoenix وTruLens في حزمة النماذج اللغوية القائمة لديك، وأصمّم حُزمة التقييم، وأُهيّئ مُقيِّمات مخصّصة لمجالك، وأربط التتبّعات بمنصّة الرصد الأوسع لديك.",
        deliverables: [
          "تصميم نشر Phoenix وTruLens",
          "حُزمة تقييم بمُقيِّمات مخصّصة",
          "تكامل تتبّع OpenTelemetry",
          "تنبيهات الانحراف والجودة",
          "نموذج تشغيلي وتمكين الفريق"
        ]
      }
    }
  },

  {
    slug: "promptfoo-deepeval",
    title: "Promptfoo & DeepEval",
    vendor: "generic-cyan",
    vendorName: "Open ecosystem",
    group: "observability",
    content: {
      en: {
        category: "Prompt and agent evaluation",
        subtitle: "CI-friendly evaluation harnesses for prompts, agents and RAG pipelines.",
        what: "Promptfoo and DeepEval are the open-source evaluation harnesses for prompts, agents and RAG pipelines. They support deterministic and LLM-as-judge evaluators, run in CI like any test suite, and produce structured reports that make regression visible before code lands.",
        why: [
          "Run like any test suite, native to CI/CD",
          "Built-in evaluators: factuality, safety, latency, cost",
          "LLM-as-judge with the model of your choice",
          "Compare prompts, models and configurations side by side",
          "Open source, self-hostable, no vendor lock-in"
        ],
        how: "I design evaluation harnesses for your agent and RAG pipelines, wire them into CI, define custom evaluators for your domain, and set the regression gates that block bad changes from reaching production.",
        deliverables: [
          "Evaluation harness for prompts, agents and RAG",
          "CI integration with regression gates",
          "Custom evaluators for your domain",
          "Reporting dashboards and review cadence",
          "Team enablement and operating model"
        ]
      },
      fr: {
        category: "Évaluation de prompts et d'agents",
        subtitle: "Harness d'évaluation compatibles CI pour prompts, agents et pipelines RAG.",
        what: "Promptfoo et DeepEval sont les harness d'évaluation open source pour prompts, agents et pipelines RAG. Ils supportent évaluateurs déterministes et LLM-as-judge, s'exécutent en CI comme n'importe quelle suite de tests et produisent des rapports structurés qui rendent la régression visible avant que le code n'arrive en production.",
        why: [
          "S'exécutent comme une suite de tests, natifs en CI/CD",
          "Évaluateurs intégrés : factualité, sûreté, latence, coût",
          "LLM-as-judge avec le modèle de votre choix",
          "Comparaison côte à côte de prompts, modèles et configurations",
          "Open source, self-hostable, pas d'enfermement fournisseur"
        ],
        how: "Je conçois des harness d'évaluation pour vos pipelines d'agents et RAG, je les câble en CI, je définis des évaluateurs personnalisés pour votre domaine et je pose les portes de régression qui bloquent les mauvaises modifications avant la production.",
        deliverables: [
          "Harness d'évaluation pour prompts, agents et RAG",
          "Intégration CI avec portes de régression",
          "Évaluateurs personnalisés pour votre domaine",
          "Tableaux de bord de reporting et cadence de revue",
          "Montée en compétence des équipes et modèle opérationnel"
        ]
      },
      zh: {
        category: "prompt 与智能体评估",
        subtitle: "面向 prompt、智能体与 RAG 流水线、对 CI 友好的评估流水线。",
        what: "Promptfoo 与 DeepEval 是面向 prompt、智能体与 RAG 流水线的开源评估流水线。它们支持确定性评估与 LLM-as-judge，能像普通测试套件一样运行于 CI，并产出结构化报告，让回归问题在代码合入之前即可见。",
        why: [
          "像测试套件一样运行，原生贴合 CI/CD",
          "内置评估器：事实性、安全、时延、成本",
          "可选用任意模型作为 LLM-as-judge",
          "在 prompt、模型与配置之间并排比较",
          "开源，可自托管，无供应商锁定"
        ],
        how: "我为贵司智能体与 RAG 流水线设计评估流水线，接入 CI，为业务领域定义自定义评估器，并设置阻断不良变更进入生产的回归关卡。",
        deliverables: [
          "面向 prompt、智能体与 RAG 的评估流水线",
          "带回归关卡的 CI 集成",
          "业务领域的自定义评估器",
          "报告仪表盘与评审节奏",
          "团队赋能与运营模式"
        ]
      },
      ar: {
        category: "تقييم التوجيهات والوكلاء",
        subtitle: "حُزم تقييم ملائمة لـ CI للتوجيهات والوكلاء وخطوط أنابيب RAG.",
        what: "Promptfoo وDeepEval هما حُزم التقييم مفتوحة المصدر للتوجيهات والوكلاء وخطوط أنابيب RAG. تدعمان مُقيِّمات حتمية ونموذج لغوي كحَكَم، تعملان في CI كأي مجموعة اختبارات، وتُنتجان تقارير مُهيكَلة تجعل التراجع مرئياً قبل أن تستقرّ الشيفرة.",
        why: [
          "تعمل كأي مجموعة اختبارات، أصلية لـ CI/CD",
          "مُقيِّمات مدمجة، الواقعية، الأمان، الكمون، التكلفة",
          "نموذج لغوي كحَكَم بالنموذج الذي تختاره",
          "مقارنة التوجيهات والنماذج والتهيئات جنباً إلى جنب",
          "مفتوح المصدر، قابل للاستضافة الذاتية، بلا قفل مع المورّد"
        ],
        how: "أصمّم حُزم تقييم لخطوط أنابيب الوكلاء وRAG لديك، وأربطها بـ CI، وأُعرّف مُقيِّمات مخصّصة لمجالك، وأضبط بوّابات تراجع تحجب التغييرات السيئة من بلوغ الإنتاج.",
        deliverables: [
          "حُزمة تقييم للتوجيهات والوكلاء وRAG",
          "تكامل CI ببوّابات تراجع",
          "مُقيِّمات مخصّصة لمجالك",
          "لوحات تقارير ووتيرة مراجعة",
          "تمكين الفريق ونموذج تشغيلي"
        ]
      }
    }
  },

  {
    slug: "guardrails-ai",
    title: "Guardrails AI & NeMo Guardrails",
    vendor: "generic-cyan",
    vendorName: "Open ecosystem",
    group: "observability",
    content: {
      en: {
        category: "Programmable agent guardrails",
        subtitle: "The open frameworks for enforcing policy at the prompt, output and tool-call layer.",
        what: "Guardrails AI and NeMo Guardrails are the leading open frameworks for enforcing policy on LLM inputs, outputs and agent actions. They provide programmable validators, structured output, topical guards and tool-call filters, executed deterministically alongside the model.",
        why: [
          "Deterministic policy enforcement at the prompt layer",
          "Structured output validation and repair",
          "Topical and content guards for inputs and outputs",
          "Tool-call filters and dialog management (NeMo)",
          "Open source, framework agnostic"
        ],
        how: "I design guardrail policy sets for your agent estate, integrate the frameworks into your runtime, write custom validators for your domain, and instrument the observability that proves the guardrails are firing as intended.",
        deliverables: [
          "Guardrail policy set for your agent estate",
          "Custom validators for your domain",
          "Runtime integration into LangGraph, LangChain or hosted runtimes",
          "Observability and audit of guardrail firings",
          "Red-team report on bypass attempts"
        ]
      },
      fr: {
        category: "Garde-fous d'agents programmables",
        subtitle: "Les frameworks ouverts pour appliquer la politique en entrée, en sortie et sur les appels d'outils.",
        what: "Guardrails AI et NeMo Guardrails sont les principaux frameworks ouverts pour appliquer la politique sur les entrées, sorties et actions d'agents LLM. Ils fournissent validators programmables, sortie structurée, gardes thématiques et filtres d'appels d'outils, exécutés de manière déterministe aux côtés du modèle.",
        why: [
          "Application déterministe des politiques à la couche prompt",
          "Validation et réparation de sortie structurée",
          "Gardes thématiques et de contenu en entrée et sortie",
          "Filtres d'appels d'outils et gestion de dialogue (NeMo)",
          "Open source, agnostiques du framework"
        ],
        how: "Je conçois les jeux de politiques de garde-fous pour votre parc d'agents, j'intègre les frameworks à votre runtime, j'écris des validators personnalisés pour votre domaine et j'instrumente l'observabilité qui prouve que les garde-fous se déclenchent comme prévu.",
        deliverables: [
          "Jeu de politiques de garde-fous pour votre parc d'agents",
          "Validators personnalisés pour votre domaine",
          "Intégration runtime à LangGraph, LangChain ou runtimes hébergés",
          "Observabilité et audit des déclenchements de garde-fous",
          "Rapport de red team sur les tentatives de contournement"
        ]
      },
      zh: {
        category: "可编程智能体护栏",
        subtitle: "在 prompt、输出与工具调用层强制执行策略的开源框架。",
        what: "Guardrails AI 与 NeMo Guardrails 是面向 LLM 输入、输出与智能体行为执行策略的领先开源框架。它们提供可编程校验器、结构化输出、话题护栏与工具调用过滤器，与模型并行确定性执行。",
        why: [
          "在 prompt 层确定性强制执行策略",
          "结构化输出的校验与修复",
          "面向输入与输出的话题与内容护栏",
          "工具调用过滤与对话管理（NeMo）",
          "开源，框架无关"
        ],
        how: "我为贵司智能体生态设计护栏策略集，把框架接入运行时，为业务领域编写自定义校验器，并搭建可观测性，证明护栏按预期触发。",
        deliverables: [
          "面向贵司智能体生态的护栏策略集",
          "面向业务领域的自定义校验器",
          "接入 LangGraph、LangChain 或托管运行时",
          "护栏触发的可观测性与审计",
          "面向绕过尝试的红队报告"
        ]
      },
      ar: {
        category: "حواجز وكلاء قابلة للبرمجة",
        subtitle: "الأُطر المفتوحة لفرض السياسات في طبقة التوجيهات والمخرجات واستدعاء الأدوات.",
        what: "Guardrails AI وNeMo Guardrails هما الإطاران المفتوحان الرائدان لفرض السياسات على مدخلات ومخرجات النماذج اللغوية وإجراءات الوكلاء. يُوفّران مُتحقّقات قابلة للبرمجة، ومخرجات مُهيكَلة، وحواجز موضوعية، ومرشّحات استدعاء الأدوات، تُنفَّذ حتمياً بجانب النموذج.",
        why: [
          "فرض سياسات حتمي في طبقة التوجيهات",
          "تحقّق وإصلاح المخرجات المُهيكَلة",
          "حواجز موضوعية ومحتوى للمدخلات والمخرجات",
          "مرشّحات استدعاء الأدوات وإدارة الحوار (NeMo)",
          "مفتوحة المصدر، محايدة لإطار العمل"
        ],
        how: "أصمّم مجموعات سياسات الحواجز لمنظومة الوكلاء لديك، وأُدمج الأُطر في وقت التشغيل لديك، وأكتب مُتحقّقات مخصّصة لمجالك، وأُجهِّز الرصد الذي يُثبت أنّ الحواجز تعمل كما هو مقصود.",
        deliverables: [
          "مجموعة سياسات حواجز لمنظومة الوكلاء لديك",
          "مُتحقّقات مخصّصة لمجالك",
          "تكامل وقت التشغيل في LangGraph وLangChain أو أوقات التشغيل المُستضافة",
          "رصد وتدقيق إطلاقات الحواجز",
          "تقرير فريق أحمر حول محاولات التحايل"
        ]
      }
    }
  },

  {
    slug: "datadog-llm-observability",
    title: "Datadog LLM Observability",
    vendor: "generic-violet",
    vendorName: "Datadog",
    group: "observability",
    content: {
      en: {
        category: "Enterprise LLM observability",
        subtitle: "LLM and agent traces inside the Datadog observability platform you already run.",
        what: "Datadog LLM Observability brings prompts, traces, evaluations and cost tracking for LLM and agent applications inside the Datadog platform. It is the natural fit for enterprises that already run Datadog and want LLM observability without standing up a separate platform.",
        why: [
          "One platform for infra, app and LLM observability",
          "Native traces, evaluations and cost tracking for LLMs",
          "Strong correlation with traces from the rest of your stack",
          "Enterprise compliance, SSO, RBAC out of the box",
          "Native integration with major model providers and frameworks"
        ],
        how: "I integrate Datadog LLM Observability into your agent stack, design the trace and evaluation model, set up alerts on drift, cost and policy violations, and connect traces to your broader Datadog dashboards and runbooks.",
        deliverables: [
          "Datadog LLM Observability integration across your agent stack",
          "Trace and evaluation model design",
          "Alerts on drift, cost and policy violations",
          "Dashboards and runbooks",
          "Operating model and team enablement"
        ]
      },
      fr: {
        category: "Observabilité LLM d'entreprise",
        subtitle: "Traces LLM et agents à l'intérieur de la plateforme d'observabilité Datadog que vous exploitez déjà.",
        what: "Datadog LLM Observability apporte prompts, traces, évaluations et suivi des coûts pour les applications LLM et agents à l'intérieur de la plateforme Datadog. C'est l'option naturelle pour les entreprises qui exploitent déjà Datadog et veulent l'observabilité LLM sans monter une plateforme séparée.",
        why: [
          "Une plateforme unique pour l'infra, l'app et l'observabilité LLM",
          "Traces, évaluations et suivi des coûts natifs pour les LLM",
          "Corrélation forte avec les traces du reste de votre stack",
          "Conformité d'entreprise, SSO, RBAC d'emblée",
          "Intégration native avec les principaux fournisseurs de modèles et frameworks"
        ],
        how: "J'intègre Datadog LLM Observability dans votre stack d'agents, je conçois le modèle de traces et d'évaluations, je mets en place des alertes sur dérive, coût et violations de politique, et je connecte les traces à vos tableaux de bord et runbooks Datadog plus larges.",
        deliverables: [
          "Intégration Datadog LLM Observability sur l'ensemble de votre stack d'agents",
          "Conception du modèle de traces et d'évaluations",
          "Alertes sur dérive, coût et violations de politique",
          "Tableaux de bord et runbooks",
          "Modèle opérationnel et montée en compétence des équipes"
        ]
      },
      zh: {
        category: "企业级 LLM 可观测性",
        subtitle: "在贵司既有的 Datadog 可观测性平台中承载 LLM 与智能体链路。",
        what: "Datadog LLM Observability 把 LLM 与智能体应用的 prompt、链路、评估与成本追踪带入 Datadog 平台。对已经使用 Datadog 又希望避免另起一个平台的企业而言，它是自然之选。",
        why: [
          "一个平台覆盖基础设施、应用与 LLM 可观测性",
          "为 LLM 原生提供链路、评估与成本追踪",
          "与其他栈链路具备强关联性",
          "开箱具备企业级合规、SSO、RBAC",
          "与主流模型供应商与框架原生集成"
        ],
        how: "我把 Datadog LLM Observability 接入贵司智能体栈，设计链路与评估模型，针对漂移、成本与策略违规建立告警，并把链路接入更广义的 Datadog 仪表盘与操作手册。",
        deliverables: [
          "Datadog LLM Observability 与贵司智能体栈的集成",
          "链路与评估模型设计",
          "漂移、成本与策略违规告警",
          "仪表盘与操作手册",
          "运营模式与团队赋能"
        ]
      },
      ar: {
        category: "رصد النماذج اللغوية في المؤسسة",
        subtitle: "تتبّعات النماذج اللغوية والوكلاء داخل منصّة Datadog للرصد التي تشغّلها أصلاً.",
        what: "تُدخِل Datadog LLM Observability التوجيهات والتتبّعات والتقييمات وتتبّع التكلفة لتطبيقات النماذج اللغوية والوكلاء داخل منصّة Datadog. هي الملاءمة الطبيعية للمؤسسات التي تشغّل Datadog أصلاً وتريد رصد النماذج اللغوية دون إقامة منصّة منفصلة.",
        why: [
          "منصّة واحدة لرصد البنية التحتية والتطبيق والنماذج اللغوية",
          "تتبّعات وتقييمات وتتبّع تكلفة أصلية للنماذج اللغوية",
          "ارتباط قوي مع تتبّعات بقية حزمتك",
          "امتثال مؤسسي، SSO، RBAC منذ اللحظة الأولى",
          "تكامل أصلي مع مزوّدي النماذج والأُطر الكبرى"
        ],
        how: "أُدمج Datadog LLM Observability في حزمة الوكلاء لديك، وأصمّم نموذج التتبّع والتقييم، وأُعدّ تنبيهات على الانحراف والتكلفة وانتهاكات السياسات، وأربط التتبّعات بلوحات Datadog وأدلة التشغيل الأوسع لديك.",
        deliverables: [
          "تكامل Datadog LLM Observability عبر حزمة الوكلاء لديك",
          "تصميم نموذج التتبّع والتقييم",
          "تنبيهات على الانحراف والتكلفة وانتهاكات السياسات",
          "لوحات وأدلة تشغيل",
          "نموذج تشغيلي وتمكين الفريق"
        ]
      }
    }
  },

  {
    slug: "opentelemetry-splunk",
    title: "OpenTelemetry & Splunk",
    vendor: "generic-amber",
    vendorName: "Open ecosystem + Splunk",
    group: "observability",
    content: {
      en: {
        category: "Open observability and SIEM",
        subtitle: "OpenTelemetry as the standard for LLM and agent telemetry, Splunk as the SIEM destination.",
        what: "OpenTelemetry is the open standard for telemetry, traces, metrics and logs, and the OpenTelemetry GenAI semantic conventions now cover LLM and agent traces. Splunk is the mature SIEM and observability platform many regulated industries already use to ingest and act on this telemetry.",
        why: [
          "Vendor-neutral telemetry standard",
          "OpenTelemetry GenAI semantic conventions for LLM traces",
          "Splunk for ingestion, search, alerting and compliance",
          "Reuses existing SIEM investment and operating model",
          "Pairs cleanly with Langfuse, Phoenix and Datadog"
        ],
        how: "I instrument your agent stack with OpenTelemetry GenAI conventions, design the collector topology, route traces and logs to Splunk and your LLM observability platform, and define the detection and audit playbooks.",
        deliverables: [
          "OpenTelemetry instrumentation plan",
          "Collector topology and routing design",
          "Splunk ingestion and detection playbooks",
          "SIEM and audit integration",
          "Operating model and on-call playbook"
        ]
      },
      fr: {
        category: "Observabilité ouverte et SIEM",
        subtitle: "OpenTelemetry comme standard de télémétrie LLM et agents, Splunk comme destination SIEM.",
        what: "OpenTelemetry est le standard ouvert de télémétrie, traces, métriques et logs, et les conventions sémantiques OpenTelemetry GenAI couvrent désormais les traces LLM et agents. Splunk est la plateforme SIEM et d'observabilité mature que beaucoup d'industries régulées utilisent déjà pour ingérer et agir sur cette télémétrie.",
        why: [
          "Standard de télémétrie agnostique du fournisseur",
          "Conventions sémantiques OpenTelemetry GenAI pour les traces LLM",
          "Splunk pour l'ingestion, la recherche, l'alerting et la conformité",
          "Réutilise l'investissement SIEM existant et le modèle opérationnel",
          "Se combine proprement avec Langfuse, Phoenix et Datadog"
        ],
        how: "J'instrumente votre stack d'agents avec les conventions OpenTelemetry GenAI, je conçois la topologie des collectors, je route traces et logs vers Splunk et votre plateforme d'observabilité LLM, et je définis les playbooks de détection et d'audit.",
        deliverables: [
          "Plan d'instrumentation OpenTelemetry",
          "Topologie de collectors et conception du routage",
          "Playbooks d'ingestion et de détection Splunk",
          "Intégration SIEM et audit",
          "Modèle opérationnel et playbook d'astreinte"
        ]
      },
      zh: {
        category: "开放可观测性与 SIEM",
        subtitle: "以 OpenTelemetry 作为 LLM 与智能体遥测标准，以 Splunk 作为 SIEM 落地端。",
        what: "OpenTelemetry 是遥测、链路、指标与日志的开放标准，OpenTelemetry GenAI 语义约定现已覆盖 LLM 与智能体链路。Splunk 是众多受监管行业既已采用、用于接入与处理此类遥测的成熟 SIEM 与可观测性平台。",
        why: [
          "供应商中立的遥测标准",
          "面向 LLM 链路的 OpenTelemetry GenAI 语义约定",
          "Splunk 提供数据接入、检索、告警与合规",
          "复用既有的 SIEM 投资与运营模式",
          "与 Langfuse、Phoenix 与 Datadog 协同良好"
        ],
        how: "我按 OpenTelemetry GenAI 约定为贵司智能体栈做埋点，设计收集器拓扑，把链路与日志路由至 Splunk 与 LLM 可观测性平台，并定义检测与审计 playbook。",
        deliverables: [
          "OpenTelemetry 埋点方案",
          "收集器拓扑与路由设计",
          "Splunk 接入与检测 playbook",
          "SIEM 与审计集成",
          "运营模式与值班 playbook"
        ]
      },
      ar: {
        category: "رصد مفتوح وSIEM",
        subtitle: "OpenTelemetry كمعيار لقياس النماذج اللغوية والوكلاء، وSplunk كوجهة SIEM.",
        what: "OpenTelemetry هو المعيار المفتوح للقياس عن بعد، والتتبّعات، والمقاييس، والسجلّات، وتُغطّي اتفاقيات OpenTelemetry GenAI الدلالية الآن تتبّعات النماذج اللغوية والوكلاء. Splunk هي منصّة SIEM والرصد الناضجة التي تستخدمها كثير من الصناعات الخاضعة للتنظيم لابتلاع هذا القياس والعمل عليه.",
        why: [
          "معيار قياس محايد للمورّد",
          "اتفاقيات OpenTelemetry GenAI الدلالية لتتبّعات النماذج اللغوية",
          "Splunk للابتلاع والبحث والتنبيه والامتثال",
          "إعادة استخدام استثمار SIEM القائم والنموذج التشغيلي",
          "يتعايش بسلاسة مع Langfuse وPhoenix وDatadog"
        ],
        how: "أُجهِّز حزمة الوكلاء لديك بقياس وفق اتفاقيات OpenTelemetry GenAI، وأصمّم طوبولوجيا المُجمِّع، وأُمرّر التتبّعات والسجلّات إلى Splunk ومنصّة رصد النماذج اللغوية لديك، وأُعرّف أدلة الكشف والتدقيق.",
        deliverables: [
          "خطة قياس OpenTelemetry",
          "طوبولوجيا المُجمِّع وتصميم التوجيه",
          "ابتلاع Splunk وأدلة الكشف",
          "تكامل SIEM والتدقيق",
          "نموذج تشغيلي ودليل المناوبة"
        ]
      }
    }
  },

  {
    slug: "iso-27001",
    title: "ISO/IEC 27001 & 27701",
    vendor: "generic-cyan",
    vendorName: "ISO/IEC",
    group: "grc",
    content: {
      en: {
        category: "Information security & privacy ISMS",
        subtitle: "The de-facto international standard for information security, plus its privacy extension.",
        what: "ISO/IEC 27001 is the international standard for Information Security Management Systems, the global baseline for trust in regulated industries. ISO/IEC 27701 is the privacy extension that maps the ISMS to GDPR and the broader privacy regime. I have led group-level ISO 27001 certification programs across diversified holdings.",
        why: [
          "International baseline for information security",
          "Strong signal for customers, partners, regulators and investors",
          "Maps cleanly to SOC 2, NIST CSF and most regulatory regimes",
          "27701 extends the ISMS to GDPR and global privacy laws",
          "Audit-ready, certifiable by accredited bodies"
        ],
        how: "I help organisations design and implement an ISMS aligned to ISO 27001 and 27701: gap analysis, policy and control framework, risk register, Statement of Applicability, lifecycle controls and the readiness pack for certification audit.",
        deliverables: [
          "Gap analysis against ISO 27001 and 27701",
          "ISMS policy and control framework",
          "Risk register and Statement of Applicability",
          "Lifecycle controls and evidence pack",
          "Certification-readiness assessment"
        ]
      },
      fr: {
        category: "ISMS sécurité de l'information et vie privée",
        subtitle: "La norme internationale de fait pour la sécurité de l'information, plus son extension vie privée.",
        what: "ISO/IEC 27001 est la norme internationale pour les systèmes de management de la sécurité de l'information, la base mondiale de confiance dans les industries régulées. ISO/IEC 27701 est l'extension vie privée qui mappe l'ISMS sur le RGPD et le régime de protection des données plus large. J'ai piloté des programmes de certification ISO 27001 à l'échelle du groupe dans des holdings diversifiés.",
        why: [
          "Base internationale pour la sécurité de l'information",
          "Signal fort pour clients, partenaires, régulateurs et investisseurs",
          "Se mappe proprement à SOC 2, NIST CSF et à la plupart des régimes réglementaires",
          "27701 étend l'ISMS au RGPD et aux lois mondiales de vie privée",
          "Prête à l'audit, certifiable par des organismes accrédités"
        ],
        how: "J'aide les organisations à concevoir et mettre en œuvre un ISMS aligné à ISO 27001 et 27701 : analyse d'écart, cadre de politiques et de contrôles, registre de risques, Déclaration d'Applicabilité, contrôles du cycle de vie et dossier de préparation à l'audit de certification.",
        deliverables: [
          "Analyse d'écart par rapport à ISO 27001 et 27701",
          "Cadre de politiques et de contrôles ISMS",
          "Registre de risques et Déclaration d'Applicabilité",
          "Contrôles du cycle de vie et dossier de preuves",
          "Évaluation de préparation à la certification"
        ]
      },
      zh: {
        category: "信息安全与隐私 ISMS",
        subtitle: "事实意义上的国际信息安全标准，及其隐私扩展。",
        what: "ISO/IEC 27001 是信息安全管理体系的国际标准，是受监管行业的全球信任基线。ISO/IEC 27701 是隐私扩展，把 ISMS 映射至 GDPR 与更广义的隐私法规。我曾在多元化控股集团层面主导 ISO 27001 认证项目。",
        why: [
          "信息安全的国际基线",
          "对客户、合作伙伴、监管与投资人构成有力信号",
          "与 SOC 2、NIST CSF 及多数监管体系高度对齐",
          "27701 将 ISMS 扩展至 GDPR 与全球隐私法",
          "可审计，可由具备资质的认证机构发证"
        ],
        how: "我帮助组织设计并落地对齐 ISO 27001 与 27701 的 ISMS：差距分析、策略与控制框架、风险登记册、适用性声明、生命周期控制以及面向认证审核的准备包。",
        deliverables: [
          "对标 ISO 27001 与 27701 的差距分析",
          "ISMS 策略与控制框架",
          "风险登记册与适用性声明",
          "生命周期控制与证据包",
          "认证就绪度评估"
        ]
      },
      ar: {
        category: "نظام إدارة أمن المعلومات والخصوصية",
        subtitle: "المعيار الدولي الفعلي لأمن المعلومات، مع امتداده الخاص بالخصوصية.",
        what: "ISO/IEC 27001 هو المعيار الدولي لأنظمة إدارة أمن المعلومات، الأساس العالمي للثقة في الصناعات الخاضعة للتنظيم. ISO/IEC 27701 هو امتداد الخصوصية الذي يربط نظام إدارة أمن المعلومات بـ GDPR ومنظومة الخصوصية الأوسع. قُدتُ برامج اعتماد ISO 27001 على مستوى المجموعة في كيانات قابضة متنوّعة.",
        why: [
          "أساس دولي لأمن المعلومات",
          "إشارة قوية للعملاء والشركاء والجهات التنظيمية والمستثمرين",
          "يتطابق بسلاسة مع SOC 2 وNIST CSF ومعظم الأنظمة التنظيمية",
          "27701 يمتدّ بنظام إدارة أمن المعلومات إلى GDPR وقوانين الخصوصية العالمية",
          "جاهز للتدقيق، وقابل للاعتماد من جهات مُؤهَّلة"
        ],
        how: "أُساعد المؤسسات على تصميم وتنفيذ نظام إدارة أمن معلومات متوائم مع ISO 27001 و27701، تحليل الفجوات، إطار السياسات والضوابط، سجلّ المخاطر، بيان قابلية التطبيق، ضوابط دورة الحياة، وحزمة الجاهزية لتدقيق الاعتماد.",
        deliverables: [
          "تحليل فجوات قياساً على ISO 27001 و27701",
          "إطار سياسات وضوابط نظام إدارة أمن المعلومات",
          "سجلّ المخاطر وبيان قابلية التطبيق",
          "ضوابط دورة الحياة وحزمة الأدلة",
          "تقييم الجاهزية للاعتماد"
        ]
      }
    }
  },

  {
    slug: "soc-2",
    title: "SOC 2 Type II",
    vendor: "generic-green",
    vendorName: "AICPA",
    group: "grc",
    content: {
      en: {
        category: "Trust services compliance",
        subtitle: "The de-facto trust signal for SaaS and B2B technology providers.",
        what: "SOC 2 Type II is the AICPA's audit framework for technology service providers, evaluating the operating effectiveness of controls across security, availability, confidentiality, processing integrity and privacy. It is the de-facto trust signal expected of any SaaS or B2B vendor.",
        why: [
          "Expected trust signal for SaaS and B2B vendors",
          "Type II proves controls operate effectively over time",
          "Covers security, availability, confidentiality and privacy",
          "Maps cleanly to ISO 27001 and most regulatory regimes",
          "Audit-ready, attested by accredited auditors"
        ],
        how: "I help organisations design the control set for SOC 2 Type II, run the readiness assessment, implement the missing controls, prepare the evidence pack, and coordinate with the auditor through the observation window.",
        deliverables: [
          "SOC 2 Type II readiness assessment",
          "Control set across the trust services criteria",
          "Evidence pack and ongoing collection process",
          "Auditor coordination and observation-window plan",
          "Operating model post-audit"
        ]
      },
      fr: {
        category: "Conformité Trust Services",
        subtitle: "Le signal de confiance de fait pour les fournisseurs SaaS et B2B.",
        what: "SOC 2 Type II est le cadre d'audit de l'AICPA pour les fournisseurs de services technologiques, qui évalue l'efficacité opérationnelle des contrôles sur la sécurité, la disponibilité, la confidentialité, l'intégrité de traitement et la vie privée. C'est le signal de confiance de fait attendu de tout fournisseur SaaS ou B2B.",
        why: [
          "Signal de confiance attendu des fournisseurs SaaS et B2B",
          "Type II prouve que les contrôles opèrent efficacement dans le temps",
          "Couvre sécurité, disponibilité, confidentialité et vie privée",
          "Se mappe proprement à ISO 27001 et à la plupart des régimes réglementaires",
          "Prêt à l'audit, attesté par des auditeurs accrédités"
        ],
        how: "J'aide les organisations à concevoir le jeu de contrôles pour SOC 2 Type II, à mener l'évaluation de préparation, à mettre en œuvre les contrôles manquants, à préparer le dossier de preuves et à coordonner avec l'auditeur pendant la fenêtre d'observation.",
        deliverables: [
          "Évaluation de préparation SOC 2 Type II",
          "Jeu de contrôles sur les critères Trust Services",
          "Dossier de preuves et processus de collecte continu",
          "Coordination avec l'auditeur et plan de fenêtre d'observation",
          "Modèle opérationnel post-audit"
        ]
      },
      zh: {
        category: "信任服务合规",
        subtitle: "SaaS 与 B2B 技术供应商事实意义上的信任信号。",
        what: "SOC 2 Type II 是 AICPA 面向技术服务供应商的审计框架，评估安全、可用性、保密性、处理完整性与隐私五大信任原则下控制的运行有效性。它是任何 SaaS 或 B2B 供应商都被期待具备的事实信任信号。",
        why: [
          "SaaS 与 B2B 供应商被期待具备的信任信号",
          "Type II 证明控制在一段时间内有效运行",
          "覆盖安全、可用性、保密性与隐私",
          "与 ISO 27001 及多数监管体系高度对齐",
          "可审计，由具备资质的审计师出具鉴证"
        ],
        how: "我帮助组织为 SOC 2 Type II 设计控制集，开展就绪度评估，落地缺失控制，准备证据包，并在观察期内与审计师协同推进。",
        deliverables: [
          "SOC 2 Type II 就绪度评估",
          "覆盖信任服务原则的控制集",
          "证据包与持续收集流程",
          "审计师协同与观察期计划",
          "审计后的运营模式"
        ]
      },
      ar: {
        category: "امتثال خدمات الثقة",
        subtitle: "إشارة الثقة الفعلية لمزوّدي تقنية SaaS والأعمال البينية.",
        what: "SOC 2 Type II هو إطار التدقيق من AICPA لمزوّدي خدمات التقنية، يُقيّم الفاعلية التشغيلية للضوابط عبر الأمن والتوافر والسرّية وسلامة المعالجة والخصوصية. هو إشارة الثقة الفعلية المتوقّعة من أي مورّد SaaS أو أعمال بينية.",
        why: [
          "إشارة الثقة المتوقّعة من مورّدي SaaS والأعمال البينية",
          "Type II يُثبت أنّ الضوابط تعمل بفاعلية مع الوقت",
          "يُغطّي الأمن والتوافر والسرّية والخصوصية",
          "يتطابق بسلاسة مع ISO 27001 ومعظم الأنظمة التنظيمية",
          "جاهز للتدقيق، يُصادَق عليه من مدقّقين مُعتمَدين"
        ],
        how: "أُساعد المؤسسات على تصميم مجموعة الضوابط لـ SOC 2 Type II، وإجراء تقييم الجاهزية، وتنفيذ الضوابط المفقودة، وتجهيز حزمة الأدلة، والتنسيق مع المدقّق عبر نافذة الملاحظة.",
        deliverables: [
          "تقييم جاهزية SOC 2 Type II",
          "مجموعة ضوابط عبر معايير خدمات الثقة",
          "حزمة أدلة وعملية جمع مستمرّ",
          "تنسيق مع المدقّق وخطة نافذة الملاحظة",
          "نموذج تشغيلي بعد التدقيق"
        ]
      }
    }
  },

  {
    slug: "hipaa-pci-dss",
    title: "HIPAA & PCI-DSS",
    vendor: "generic-amber",
    vendorName: "Sector regulations",
    group: "grc",
    content: {
      en: {
        category: "Sector-specific regulated workloads",
        subtitle: "The healthcare and payment security regimes for AI workloads in regulated industries.",
        what: "HIPAA is the US health information protection regime, applying to any system handling protected health information. PCI-DSS is the payment card industry data security standard, applying to anyone handling cardholder data. Both impose specific technical and organisational controls on AI workloads in their scope.",
        why: [
          "Required for any AI workload touching PHI or PAN data",
          "Define specific technical and organisational controls",
          "Map cleanly to ISO 27001 and SOC 2 baselines",
          "Specific guidance for cloud, encryption and access",
          "Audited by accredited bodies or QSAs"
        ],
        how: "I help teams scope HIPAA and PCI-DSS for their AI workloads, design the segmentation, encryption and access controls, build the evidence pack, and coordinate with HIPAA auditors or PCI QSAs.",
        deliverables: [
          "Scoping assessment for HIPAA or PCI-DSS",
          "Segmentation, encryption and access design",
          "Control implementation plan",
          "Evidence pack and audit coordination",
          "Operating model post-audit"
        ]
      },
      fr: {
        category: "Charges régulées par secteur",
        subtitle: "Les régimes de sécurité santé et paiement pour les charges IA dans les industries régulées.",
        what: "HIPAA est le régime américain de protection de l'information de santé, qui s'applique à tout système traitant des informations de santé protégées. PCI-DSS est le standard de sécurité des données du secteur des cartes de paiement, qui s'applique à quiconque traite des données porteur. Tous deux imposent des contrôles techniques et organisationnels spécifiques aux charges IA dans leur périmètre.",
        why: [
          "Requis pour toute charge IA touchant des données PHI ou PAN",
          "Définissent des contrôles techniques et organisationnels spécifiques",
          "Se mappent proprement aux bases ISO 27001 et SOC 2",
          "Orientations spécifiques pour cloud, chiffrement et accès",
          "Audités par des organismes accrédités ou des QSA"
        ],
        how: "J'aide les équipes à cadrer HIPAA et PCI-DSS pour leurs charges IA, à concevoir la segmentation, le chiffrement et les contrôles d'accès, à constituer le dossier de preuves et à coordonner avec les auditeurs HIPAA ou les QSA PCI.",
        deliverables: [
          "Évaluation de cadrage HIPAA ou PCI-DSS",
          "Conception de segmentation, chiffrement et accès",
          "Plan de mise en œuvre des contrôles",
          "Dossier de preuves et coordination d'audit",
          "Modèle opérationnel post-audit"
        ]
      },
      zh: {
        category: "行业受监管工作负载",
        subtitle: "受监管行业 AI 工作负载所适用的医疗与支付安全规制。",
        what: "HIPAA 是美国医疗信息保护规制，适用于任何处理受保护健康信息的系统。PCI-DSS 是支付卡行业数据安全标准，适用于任何处理持卡人数据的主体。两者都对其范围内的 AI 工作负载施加特定的技术与组织控制。",
        why: [
          "任何涉及 PHI 或 PAN 数据的 AI 工作负载都需遵从",
          "定义具体的技术与组织控制",
          "与 ISO 27001 和 SOC 2 基线高度对齐",
          "对云、加密与访问提供专门指引",
          "由具备资质的机构或 QSA 进行审核"
        ],
        how: "我帮助团队界定其 AI 工作负载的 HIPAA 与 PCI-DSS 范围，设计分段、加密与访问控制，构建证据包，并与 HIPAA 审计师或 PCI QSA 协同推进。",
        deliverables: [
          "HIPAA 或 PCI-DSS 的范围评估",
          "分段、加密与访问设计",
          "控制落地方案",
          "证据包与审计协同",
          "审计后的运营模式"
        ]
      },
      ar: {
        category: "أحمال عمل قطاعية خاضعة للتنظيم",
        subtitle: "أنظمة أمن الرعاية الصحية والمدفوعات لأحمال الذكاء الاصطناعي في الصناعات الخاضعة للتنظيم.",
        what: "HIPAA هو نظام حماية المعلومات الصحية الأمريكي، يسري على أي نظام يتعامل مع معلومات صحية محميّة. PCI-DSS هو معيار أمن بيانات صناعة بطاقات الدفع، يسري على كل من يتعامل مع بيانات حاملي البطاقات. يفرضان كلاهما ضوابط تقنية وتنظيمية محدّدة على أحمال الذكاء الاصطناعي ضمن نطاقهما.",
        why: [
          "مطلوب لأي حِمل ذكاء اصطناعي يمسّ بيانات PHI أو PAN",
          "يُحدّدان ضوابط تقنية وتنظيمية محدّدة",
          "يتطابقان بسلاسة مع أُسس ISO 27001 وSOC 2",
          "توجيه محدّد للسحابة والتشفير والوصول",
          "يُدقَّقان من جهات مُعتمَدة أو QSAs"
        ],
        how: "أُساعد الفرق على تحديد نطاق HIPAA وPCI-DSS لأحمال الذكاء الاصطناعي لديها، وتصميم التجزئة والتشفير وضوابط الوصول، وبناء حزمة الأدلة، والتنسيق مع مدقّقي HIPAA أو PCI QSAs.",
        deliverables: [
          "تقييم تحديد النطاق لـ HIPAA أو PCI-DSS",
          "تصميم التجزئة والتشفير والوصول",
          "خطة تنفيذ الضوابط",
          "حزمة أدلة وتنسيق التدقيق",
          "نموذج تشغيلي بعد التدقيق"
        ]
      }
    }
  },

  {
    slug: "dora-nis2",
    title: "DORA & NIS2",
    vendor: "generic-violet",
    vendorName: "European Union",
    group: "grc",
    content: {
      en: {
        category: "EU operational resilience and cyber",
        subtitle: "The EU's binding regulations for digital operational resilience and critical-sector cybersecurity.",
        what: "DORA (Digital Operational Resilience Act) is the EU's binding regulation for digital operational resilience in financial services. NIS2 expands the EU cybersecurity baseline across critical and important sectors. Both impose specific governance, risk and incident-response controls, with significant penalties for non-compliance.",
        why: [
          "Binding EU regulations with significant penalties",
          "DORA: required for financial entities and their ICT providers",
          "NIS2: covers critical and important sectors across the EU",
          "Specific controls for incident response and third-party risk",
          "Align cleanly with ISO 27001 and SOC 2 baselines"
        ],
        how: "I help organisations assess their DORA or NIS2 scope, design the governance and risk-management framework, map controls to the regulations, build the incident-response and third-party risk programs, and prepare the evidence pack.",
        deliverables: [
          "DORA and NIS2 scoping assessment",
          "Governance and risk-management framework",
          "Incident-response and third-party risk programs",
          "Control implementation and evidence pack",
          "Regulator-readiness plan"
        ]
      },
      fr: {
        category: "Résilience opérationnelle et cyber UE",
        subtitle: "Les réglementations contraignantes de l'UE pour la résilience opérationnelle numérique et la cybersécurité des secteurs critiques.",
        what: "DORA (Digital Operational Resilience Act) est la réglementation contraignante de l'UE pour la résilience opérationnelle numérique des services financiers. NIS2 étend la base cybersécurité de l'UE aux secteurs critiques et importants. Tous deux imposent des contrôles spécifiques de gouvernance, de risque et de réponse aux incidents, avec des sanctions significatives en cas de non-conformité.",
        why: [
          "Réglementations UE contraignantes avec sanctions significatives",
          "DORA : requise pour les entités financières et leurs fournisseurs ICT",
          "NIS2 : couvre les secteurs critiques et importants à travers l'UE",
          "Contrôles spécifiques pour la réponse aux incidents et le risque tiers",
          "S'alignent proprement aux bases ISO 27001 et SOC 2"
        ],
        how: "J'aide les organisations à évaluer leur périmètre DORA ou NIS2, à concevoir le cadre de gouvernance et de gestion des risques, à mapper les contrôles aux réglementations, à bâtir les programmes de réponse aux incidents et de risque tiers, et à préparer le dossier de preuves.",
        deliverables: [
          "Évaluation de cadrage DORA et NIS2",
          "Cadre de gouvernance et de gestion des risques",
          "Programmes de réponse aux incidents et de risque tiers",
          "Mise en œuvre des contrôles et dossier de preuves",
          "Plan de préparation au régulateur"
        ]
      },
      zh: {
        category: "欧盟运营韧性与网络安全",
        subtitle: "欧盟针对数字运营韧性与关键行业网络安全的具约束力法规。",
        what: "DORA（数字运营韧性法案）是欧盟针对金融服务数字运营韧性的具约束力法规。NIS2 则在欧盟范围内将网络安全基线扩展至关键与重要行业。两者均施加特定的治理、风险与事件响应控制，违规将面临严厉处罚。",
        why: [
          "具约束力的欧盟法规，处罚严厉",
          "DORA：金融实体及其 ICT 提供方必须遵从",
          "NIS2：覆盖欧盟范围内的关键与重要行业",
          "对事件响应与第三方风险设定具体控制",
          "与 ISO 27001 及 SOC 2 基线高度对齐"
        ],
        how: "我帮助组织评估其 DORA 或 NIS2 适用范围，设计治理与风险管理框架，将控制映射到法规要求，构建事件响应与第三方风险项目，并准备证据包。",
        deliverables: [
          "DORA 与 NIS2 范围评估",
          "治理与风险管理框架",
          "事件响应与第三方风险项目",
          "控制落地与证据包",
          "面向监管的就绪计划"
        ]
      },
      ar: {
        category: "الصمود التشغيلي والأمن السيبراني في الاتحاد الأوروبي",
        subtitle: "تنظيمات الاتحاد الأوروبي المُلزِمة للصمود التشغيلي الرقمي والأمن السيبراني للقطاعات الحيوية.",
        what: "DORA (Digital Operational Resilience Act) هو تنظيم الاتحاد الأوروبي المُلزِم للصمود التشغيلي الرقمي في الخدمات المالية. يُوسّع NIS2 الأساس السيبراني للاتحاد الأوروبي ليشمل القطاعات الحيوية والمهمّة. يفرض كلاهما ضوابط محدّدة للحوكمة والمخاطر والاستجابة للحوادث، بعقوبات كبيرة على عدم الامتثال.",
        why: [
          "تنظيمات مُلزِمة للاتحاد الأوروبي بعقوبات كبيرة",
          "DORA مطلوب للكيانات المالية ومزوّدي تقنية المعلومات والاتصالات لها",
          "NIS2 يُغطّي القطاعات الحيوية والمهمّة عبر الاتحاد الأوروبي",
          "ضوابط محدّدة للاستجابة للحوادث ومخاطر الأطراف الثالثة",
          "يتوائمان بسلاسة مع أُسس ISO 27001 وSOC 2"
        ],
        how: "أُساعد المؤسسات على تقييم نطاقها لـ DORA أو NIS2، وتصميم إطار الحوكمة وإدارة المخاطر، وربط الضوابط بالتنظيمات، وبناء برامج الاستجابة للحوادث ومخاطر الأطراف الثالثة، وتجهيز حزمة الأدلة.",
        deliverables: [
          "تقييم تحديد نطاق DORA وNIS2",
          "إطار الحوكمة وإدارة المخاطر",
          "برامج الاستجابة للحوادث ومخاطر الأطراف الثالثة",
          "تنفيذ الضوابط وحزمة الأدلة",
          "خطة الجاهزية للجهة التنظيمية"
        ]
      }
    }
  },

  {
    slug: "pdpl-gdpr",
    title: "UAE PDPL, KSA PDPL & GDPR",
    vendor: "generic-cyan",
    vendorName: "Regional privacy regulators",
    group: "grc",
    content: {
      en: {
        category: "Global privacy regulations",
        subtitle: "The regional and global privacy regimes that govern personal data in AI workloads.",
        what: "UAE PDPL and KSA PDPL are the personal data protection laws of the United Arab Emirates and the Kingdom of Saudi Arabia. GDPR is the European Union's general data protection regulation. Together they cover the privacy regimes most relevant for AI workloads in Europe, the GCC and any organisation serving citizens of those regions.",
        why: [
          "Required for any AI workload touching personal data of these regions",
          "Define lawful basis, rights and cross-border transfer rules",
          "Significant penalties for non-compliance",
          "GDPR is the de-facto global benchmark for privacy",
          "UAE and KSA PDPL are the GCC equivalents, broadly aligned"
        ],
        how: "I help organisations assess their privacy footprint across these regimes, design the data inventory and lawful basis register, implement the rights workflows, map cross-border transfers, and prepare for regulator engagement.",
        deliverables: [
          "Privacy footprint and data inventory",
          "Lawful basis register and consent design",
          "Rights workflows (access, deletion, portability)",
          "Cross-border transfer assessment",
          "Regulator-readiness plan"
        ]
      },
      fr: {
        category: "Réglementations mondiales de vie privée",
        subtitle: "Les régimes régionaux et mondiaux de vie privée qui gouvernent les données personnelles dans les charges IA.",
        what: "UAE PDPL et KSA PDPL sont les lois de protection des données personnelles des Émirats arabes unis et du Royaume d'Arabie saoudite. Le RGPD est le règlement général de l'Union européenne sur la protection des données. Ensemble ils couvrent les régimes de vie privée les plus pertinents pour les charges IA en Europe, dans le CCG et pour toute organisation servant les citoyens de ces régions.",
        why: [
          "Requis pour toute charge IA touchant des données personnelles de ces régions",
          "Définissent la base légale, les droits et les règles de transfert transfrontalier",
          "Sanctions significatives en cas de non-conformité",
          "Le RGPD est le repère mondial de fait pour la vie privée",
          "UAE et KSA PDPL sont les équivalents du CCG, largement alignés"
        ],
        how: "J'aide les organisations à évaluer leur empreinte vie privée sur ces régimes, à concevoir l'inventaire de données et le registre de bases légales, à mettre en œuvre les workflows de droits, à mapper les transferts transfrontaliers et à se préparer à l'engagement avec le régulateur.",
        deliverables: [
          "Empreinte vie privée et inventaire de données",
          "Registre de bases légales et conception du consentement",
          "Workflows de droits (accès, suppression, portabilité)",
          "Évaluation des transferts transfrontaliers",
          "Plan de préparation au régulateur"
        ]
      },
      zh: {
        category: "全球隐私法规",
        subtitle: "管辖 AI 工作负载中个人数据的区域与全球隐私规制。",
        what: "UAE PDPL 与 KSA PDPL 分别是阿拉伯联合酋长国与沙特阿拉伯王国的个人数据保护法。GDPR 是欧盟的通用数据保护条例。三者共同覆盖了欧洲、海湾合作委员会区域以及服务上述地区公民的组织最需关注的隐私规制。",
        why: [
          "任何涉及上述地区个人数据的 AI 工作负载均需遵从",
          "定义合法依据、个体权利与跨境传输规则",
          "违规面临严厉处罚",
          "GDPR 是事实意义上的全球隐私基准",
          "UAE 与 KSA PDPL 是 GCC 的对应规制，整体方向一致"
        ],
        how: "我帮助组织评估在上述规制下的隐私足迹，设计数据清单与合法依据登记册，落地个体权利工作流，梳理跨境传输，并为监管沟通做准备。",
        deliverables: [
          "隐私足迹与数据清单",
          "合法依据登记册与同意设计",
          "个体权利工作流（访问、删除、可携带）",
          "跨境传输评估",
          "面向监管的就绪计划"
        ]
      },
      ar: {
        category: "تنظيمات الخصوصية العالمية",
        subtitle: "أنظمة الخصوصية الإقليمية والعالمية التي تحكم البيانات الشخصية في أحمال الذكاء الاصطناعي.",
        what: "UAE PDPL وKSA PDPL هما قانونا حماية البيانات الشخصية لدولة الإمارات العربية المتحدة والمملكة العربية السعودية. GDPR هو التنظيم العام لحماية البيانات في الاتحاد الأوروبي. يُغطّيان معاً أنظمة الخصوصية الأكثر صلة بأحمال الذكاء الاصطناعي في أوروبا ودول الخليج وأي مؤسسة تخدم مواطني تلك المناطق.",
        why: [
          "مطلوب لأي حِمل ذكاء اصطناعي يمسّ بيانات شخصية لهذه المناطق",
          "تُحدّد الأساس القانوني والحقوق وقواعد النقل عبر الحدود",
          "عقوبات كبيرة على عدم الامتثال",
          "GDPR هو المعيار العالمي الفعلي للخصوصية",
          "UAE PDPL وKSA PDPL هما المُكافِئان الخليجيان، متوائمان عموماً"
        ],
        how: "أُساعد المؤسسات على تقييم بصمة الخصوصية لديها عبر هذه الأنظمة، وتصميم جرد البيانات وسجلّ الأساس القانوني، وتنفيذ سير عمل الحقوق، وربط عمليات النقل عبر الحدود، والاستعداد للتواصل مع الجهات التنظيمية.",
        deliverables: [
          "بصمة الخصوصية وجرد البيانات",
          "سجلّ الأساس القانوني وتصميم الموافقة",
          "سير عمل الحقوق (الوصول، الحذف، النقل)",
          "تقييم النقل عبر الحدود",
          "خطة الجاهزية للجهة التنظيمية"
        ]
      }
    }
  }

];

if (typeof module !== 'undefined') module.exports = TECH;
if (typeof window !== 'undefined') window.TECH = TECH;
