/* ============================================================
   One-off: extend tech-data.js with 25 additional EN entries
   to cover every chip in the consulting matrix (37 total).
   Preserves existing FR/ZH/AR translations on the original 12.
   ============================================================ */

const fs = require('fs');
const path = require('path');
const TECH = require('./tech-data.js');

const NEW = [

  /* ===== 01 Agentic platforms ===== */
  {
    slug: 'openai-assistants', title: 'OpenAI Assistants & Realtime',
    vendor: 'generic-green', vendorName: 'OpenAI', group: 'agentic-platform',
    content: { en: {
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
    } }
  },
  {
    slug: 'aws-bedrock-agents', title: 'AWS Bedrock Agents',
    vendor: 'aws', vendorName: 'Amazon Web Services', group: 'agentic-platform',
    content: { en: {
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
    } }
  },
  {
    slug: 'vertex-ai-agents', title: 'Google Vertex AI Agents',
    vendor: 'google', vendorName: 'Google Cloud', group: 'agentic-platform',
    content: { en: {
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
    } }
  },
  {
    slug: 'n8n-cursor-mcp-clients', title: 'n8n, Cursor & MCP-native clients',
    vendor: 'generic-violet', vendorName: 'Open ecosystem', group: 'agentic-platform',
    content: { en: {
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
    } }
  },

  /* ===== 02 Model serving & inference ===== */
  {
    slug: 'azure-machine-learning', title: 'Azure Machine Learning',
    vendor: 'microsoft', vendorName: 'Microsoft', group: 'inference',
    content: { en: {
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
    } }
  },
  {
    slug: 'vertex-ai-model-garden', title: 'Vertex AI Model Garden',
    vendor: 'google', vendorName: 'Google Cloud', group: 'inference',
    content: { en: {
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
    } }
  },
  {
    slug: 'huggingface-tgi', title: 'Hugging Face TGI',
    vendor: 'generic-amber', vendorName: 'Hugging Face', group: 'inference',
    content: { en: {
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
    } }
  },
  {
    slug: 'vllm-ray-serve', title: 'vLLM & Ray Serve',
    vendor: 'generic-violet', vendorName: 'Open ecosystem', group: 'inference',
    content: { en: {
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
    } }
  },

  /* ===== 03 Cloud security & CSPM ===== */
  {
    slug: 'aws-security-hub', title: 'AWS Security Hub, GuardDuty & Inspector',
    vendor: 'aws', vendorName: 'Amazon Web Services', group: 'cloud-security',
    content: { en: {
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
    } }
  },
  {
    slug: 'microsoft-defender-cloud', title: 'Microsoft Defender for Cloud & Sentinel',
    vendor: 'microsoft', vendorName: 'Microsoft', group: 'cloud-security',
    content: { en: {
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
    } }
  },
  {
    slug: 'google-security-command-center', title: 'Google Security Command Center',
    vendor: 'google', vendorName: 'Google Cloud', group: 'cloud-security',
    content: { en: {
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
    } }
  },
  {
    slug: 'cloudflare-zero-trust', title: 'Cloudflare Zero Trust & WAF',
    vendor: 'generic-amber', vendorName: 'Cloudflare', group: 'cloud-security',
    content: { en: {
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
    } }
  },
  {
    slug: 'wiz-lacework-orca', title: 'Wiz, Lacework & Orca',
    vendor: 'generic-cyan', vendorName: 'Independent CNAPP vendors', group: 'cloud-security',
    content: { en: {
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
    } }
  },
  {
    slug: 'hashicorp-vault-terraform', title: 'HashiCorp Vault & Terraform',
    vendor: 'generic-violet', vendorName: 'HashiCorp', group: 'cloud-security',
    content: { en: {
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
    } }
  },

  /* ===== 04 Observability, evals & guardrails ===== */
  {
    slug: 'weights-and-biases', title: 'Weights & Biases',
    vendor: 'generic-amber', vendorName: 'Weights & Biases', group: 'observability',
    content: { en: {
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
    } }
  },
  {
    slug: 'arize-phoenix', title: 'Arize Phoenix & TruLens',
    vendor: 'generic-violet', vendorName: 'Arize / TruLens', group: 'observability',
    content: { en: {
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
    } }
  },
  {
    slug: 'promptfoo-deepeval', title: 'Promptfoo & DeepEval',
    vendor: 'generic-cyan', vendorName: 'Open ecosystem', group: 'observability',
    content: { en: {
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
    } }
  },
  {
    slug: 'guardrails-ai', title: 'Guardrails AI & NeMo Guardrails',
    vendor: 'generic-cyan', vendorName: 'Open ecosystem', group: 'observability',
    content: { en: {
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
    } }
  },
  {
    slug: 'datadog-llm-observability', title: 'Datadog LLM Observability',
    vendor: 'generic-violet', vendorName: 'Datadog', group: 'observability',
    content: { en: {
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
    } }
  },
  {
    slug: 'opentelemetry-splunk', title: 'OpenTelemetry & Splunk',
    vendor: 'generic-amber', vendorName: 'Open ecosystem + Splunk', group: 'observability',
    content: { en: {
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
    } }
  },

  /* ===== 05 Governance, risk & compliance ===== */
  {
    slug: 'iso-27001', title: 'ISO/IEC 27001 & 27701',
    vendor: 'generic-cyan', vendorName: 'ISO/IEC', group: 'grc',
    content: { en: {
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
    } }
  },
  {
    slug: 'soc-2', title: 'SOC 2 Type II',
    vendor: 'generic-green', vendorName: 'AICPA', group: 'grc',
    content: { en: {
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
    } }
  },
  {
    slug: 'hipaa-pci-dss', title: 'HIPAA & PCI-DSS',
    vendor: 'generic-amber', vendorName: 'Sector regulations', group: 'grc',
    content: { en: {
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
    } }
  },
  {
    slug: 'dora-nis2', title: 'DORA & NIS2',
    vendor: 'generic-violet', vendorName: 'European Union', group: 'grc',
    content: { en: {
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
    } }
  },
  {
    slug: 'pdpl-gdpr', title: 'UAE PDPL, KSA PDPL & GDPR',
    vendor: 'generic-cyan', vendorName: 'Regional privacy regulators', group: 'grc',
    content: { en: {
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
    } }
  }
];

const all = [...TECH, ...NEW];
console.log(`Tech entries: ${TECH.length} existing + ${NEW.length} new = ${all.length} total`);

/* Reuse the same serializer as merge-tech-trans.js for consistency. */
function jsString(s) { return JSON.stringify(s); }
function serializeContent(block) {
  return `{
        category: ${jsString(block.category)},
        subtitle: ${jsString(block.subtitle)},
        what: ${jsString(block.what)},
        why: [
${block.why.map(b => '          ' + jsString(b)).join(',\n')}
        ],
        how: ${jsString(block.how)},
        deliverables: [
${block.deliverables.map(b => '          ' + jsString(b)).join(',\n')}
        ]
      }`;
}
const body = all.map(tech => {
  const langs = Object.keys(tech.content);
  const langBlocks = langs.map(l => `      ${l}: ${serializeContent(tech.content[l])}`).join(',\n');
  return `  {
    slug: ${jsString(tech.slug)},
    title: ${jsString(tech.title)},
    vendor: ${jsString(tech.vendor)},
    vendorName: ${jsString(tech.vendorName)},
    group: ${jsString(tech.group)},
    content: {
${langBlocks}
    }
  }`;
}).join(',\n\n');

const out = `/* ============================================================
   Tech landing-page data, ${all.length} technologies x up to 4 languages.
   Auto-generated by extend-techs.js then merge-tech-trans.js.

   Per-language schema:
     category, subtitle, what (paragraph),
     why (bullets[]), how (paragraph), deliverables (bullets[])
   ============================================================ */

const TECH = [

${body}

];

if (typeof module !== 'undefined') module.exports = TECH;
if (typeof window !== 'undefined') window.TECH = TECH;
`;

fs.writeFileSync(path.join(__dirname, 'tech-data.js'), out);
console.log(`Wrote tech-data.js (${out.length} bytes).`);
