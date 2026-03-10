export interface MasterAgent {
  id: number;
  name: string;
  description: string;
  status: string;
  subAgents: string[];
  popularity: number;
}

export const masterAgentsData: MasterAgent[] = [
  {
    id: 1,
    name: "AECB Data Submission - Complaints Management",
    description: "Define business requirements to automate and govern AECB data submission and correction, integrating dedicated mailboxes with Microsoft Dynamics CRM, eliminating manual trackers, assuring regulatory compliance, and enabling audit-ready MI.",
    status: "POC",
    subAgents: [],
    popularity: 70
  },
  {
    id: 2,
    name: "AML Alerts Investigation for suspicious transactions",
    description: "Develop an AI solution to generate the L1 investigation Report from key KYC documents (AOF, T24, KYC, trade license, etc.) and transactional activity for both individual and entity investigations.",
    status: "Beta Live",
    subAgents: ["Document Processing Agent", "Formatter Agent", "Intent and Entity Extractor Agent", "Report Generation Agent", "Web Agent"],
    popularity: 95
  },
  {
    id: 3,
    name: "AML Risk - Champion Model",
    description: "Compliance team monitors all the transactions from the bank for possible money laundering. This is currently manual and there are 200+ employees doing this task. AML Risk Score aims to  to build  AML risk score AI model which will identify transactions which are high alerts and action is required.",
    status: "Pilot",
    subAgents: ["NA"],
    popularity: 85
  },
  {
    id: 4,
    name: "At Your Service",
    description: "The AYS mailbox receives over 30,000 customer emails each month for PWBB business, requiring manual categorization, data extraction, and CRM case creation. This manual processing drives operational load and slows response times. Automating the end-to-end flow using GERNAS AI will significantly reduce effort, improve accuracy, and enhance customer experience.",
    status: "Development",
    subAgents: ["Classification Agent", "Customer Identification/Info Check Agent", "Email Categorization Agent", "Explainer Agent", "Mail Chain Identification Agent"],
    popularity: 90
  },
  {
    id: 5,
    name: "Automated recommendation feature for ETB customers - Credit Cards",
    description: "There are plans to analyze customer transactional behavior and recommend the best-fit card within FAB Mobile. The solution will expose GenAI-powered recommendations via APIs, integrate with AURA on the backend, and present tailored selling points (TSPs) in-app. This will drive higher conversion, improve customer relevance, and reduce cycle time for card acquisition—while operating under strict model governance and data privacy controls.",
    status: "Retired",
    subAgents: [],
    popularity: 60
  },
  {
    id: 6,
    name: "CBG Knowledge Hub",
    description: "Built to modernize how frontline and operations teams consume SOPs, the CBH Knowledge Hub delivers AI-powered, conversational access to policies and process guidance. The platform converts static SOPs into interactive process flows and provides an Agentic AI assistant that answers queries instantly with full citations. With a governed document library and automated flow generation, the hub enhances accuracy, speeds decision-making, and drives consistent process execution across the organization.",
    status: "Retired",
    subAgents: ["Citation Agent", "Document Processing Agent", "Knowledge Agent", "PDD Flow Creation Agent", "Query Agent"],
    popularity: 75
  },
  {
    id: 7,
    name: "CCS email box automation",
    description: "CCS team in GCOO currently receives 28000 emails per day which are manually addressed by a team. As part of this solution AI powered solution to be implemented to identify the intend in the emails and generates auto reply to the customers.",
    status: "Development",
    subAgents: [],
    popularity: 80
  },
  {
    id: 8,
    name: "Collections Call Insights",
    description: "Following the POC conducted using the AURA tool for the Collections call center, the business now aims to convert call recordings into text and automatically identify flawed or non-compliant calls. This will help pinpoint interactions that trigger customer complaints or quality-control discrepancies, enabling more consistent oversight and improved service quality.",
    status: "Development",
    subAgents: ["Classification Agent", "Speaker Diarization Agent", "Summarizer Agent", "Transcriber Agent"],
    popularity: 88
  },
  {
    id: 9,
    name: "Complaints Fulfilment Team Identification",
    description: "The Complaints Fulfilment Team Identification Agent automatically analyzes complaint descriptions and metadata to accurately identify the right fulfilment or resolution team at the time of intake. By replacing manual triage with AI-driven classification, it significantly reduces assignment delays and rework caused by incorrect routing.",
    status: "Yet to start",
    subAgents: ["Classification Agent"],
    popularity: 65
  },
  {
    id: 10,
    name: "COPA (Court Order Agent)",
    description: "Courts send around 16,000 cases per month to FAB via CCMS and email, all manually reviewed and processed—creating backlog and increasing SLA and regulatory risk. The proposed Agentic AI Court Order Disposition Automation will interpret instructions, identify customers, and execute freeze actions covering roughly 10% of cases in Phase 1. Phase 2 will introduce case retrieval via API, workflow management through Appian, and expand automation to target the remaining 90% of actions through STP.",
    status: "Live",
    subAgents: ["Customer Identification/Info Check Agent", "Document Processing Agent", "Intent and Entity Extractor Agent"],
    popularity: 92
  },
  {
    id: 11,
    name: "Credit - Stratus",
    description: "The Credit Intelligence Hub is FAB's AI-powered platform that unifies wholesale credit data, risk metrics, and portfolio insights into a single conversational interface. Built on Agentic AI and the Modern Data Platform, it transforms static credit reporting into real-time, governed intelligence. The solution enables users to identify risks, uncover growth opportunities, and benchmark portfolio performance through natural-language queries, ensuring enterprise-wide accessibility for leadership, frontline, and credit teams.",
    status: "Development",
    subAgents: ["sql_agent", "plotting_formatter node"],
    popularity: 86
  },
  {
    id: 12,
    name: "Credit",
    description: "The Credit Intelligence Hub is FAB's AI-powered platform that unifies wholesale credit data, risk metrics, and portfolio insights into a single conversational interface. Built on Agentic AI and the Modern Data Platform, it transforms static credit reporting into real-time, governed intelligence. The solution enables users to identify risks, uncover growth opportunities, and benchmark portfolio performance through natural-language queries, ensuring enterprise-wide accessibility for leadership, frontline, and credit teams.",
    status: "Development",
    subAgents: ["formatter node"],
    popularity: 84
  },
  {
    id: 13,
    name: "Credit Memo",
    description: "The credit memo is a critical document prepared for every new customer to assess creditworthiness before approval. Today, this process—owned by the PWBB business—is fully manual and relies heavily on human judgment, resulting in significant effort, variable quality, and longer turnaround times. As part of our transformation agenda, we leveraging the GERNAS Agentic Platform to develop an AI-driven, agent-powered credit memo generation capability, complemented by human validation. This will streamline memo preparation, enhance consistency, and materially reduce manual workload while preserving necessary risk controls.",
    status: "POC",
    subAgents: [],
    popularity: 78
  },
  {
    id: 14,
    name: "CX Hub - Stratus",
    description: "The CX Knowledge Hub is being built as FAB's single source of truth for customer-experience intelligence, unifying bank-wide CX metrics, AI-based interaction classification, and journey insights across channels and segments. The platform enables users to analyze volumes, KPIs (STP, RFT, SLA, NPS), and trends with intuitive filtering and AI-generated insights. Through an Agentic AI assistant, users can drill into journey-level details, model performance scenarios, and uncover sentiment patterns and competitive benchmarks—all through a conversational interface that accelerates decision-making and CX improvement.",
    status: "SIT",
    subAgents: ["vector_agent", "sql_agent", "definitions_agent", "plotting_formatter node"],
    popularity: 89
  },
  {
    id: 15,
    name: "CX Hub",
    description: "The CX Knowledge Hub is being built as FAB's single source of truth for customer-experience intelligence, unifying bank-wide CX metrics, AI-based interaction classification, and journey insights across channels and segments. The platform enables users to analyze volumes, KPIs (STP, RFT, SLA, NPS), and trends with intuitive filtering and AI-generated insights. Through an Agentic AI assistant, users can drill into journey-level details, model performance scenarios, and uncover sentiment patterns and competitive benchmarks—all through a conversational interface that accelerates decision-making and CX improvement.",
    status: "SIT",
    subAgents: ["formatter node"],
    popularity: 85
  },
  {
    id: 16,
    name: "Cyclo",
    description: "Cyclo is a Generative AI-powered tool that automates RFP and client questionnaire responses. It leverages a curated repository of 9,000+ past answers to produce fast, consistent outputs. It reduces turnaround time by ~30% and delivers significant efficiency and cost savings for Securities Services.",
    status: "Live",
    subAgents: ["Citation Agent", "Guardrail Agent", "Knowledge Agent"],
    popularity: 94
  },
  {
    id: 17,
    name: "Data Management & Enablement",
    description: "AI Chatbot for Data Governance team",
    status: "Retired",
    subAgents: ["Citation Agent", "Document Processing Agent", "Explainer Agent", "Guardrail Agent", "Knowledge Agent", "Query Agent"],
    popularity: 72
  },
  {
    id: 18,
    name: "FAB Newsletter",
    description: "FAB Newsletter automation",
    status: "Live",
    subAgents: ["Summarizer Agent", "Web Agent"],
    popularity: 82
  },
  {
    id: 19,
    name: "Financial Highlights",
    description: "Financial Highlight is a gateway to seamless financial insights, empowering users to explore and interact with key financial documents from FAB and its peers. Gain instant access to performance metrics, compare industry trends, and uncover critical financial data all in one intuitive platform.",
    status: "Live",
    subAgents: ["Computation Agent", "Formatter Agent"],
    popularity: 91
  },
  {
    id: 20,
    name: "Financial Insights",
    description: "Financial Highlight is a gateway to seamless financial insights, empowering users to explore and interact with key financial documents from FAB and its peers. Gain instant access to performance metrics, compare industry trends, and uncover critical financial data all in one intuitive platform.",
    status: "Live",
    subAgents: ["Report Generation Agent"],
    popularity: 87
  },
  {
    id: 21,
    name: "Fraud Risk Mailbox Automation",
    description: "Emailbox solution to used for classification and summarization of emails",
    status: "UAT",
    subAgents: ["Classification Agent"],
    popularity: 83
  },
  {
    id: 22,
    name: "GCEX Data Analyst",
    description: "GCEX Data Analyst is an Agentic AI-powered POC built on GERNAS to automate customer-experience analytics by answering natural-language business questions, generating SQL dynamically, and producing KPI insights, charts, and CSV outputs. It integrates digital and non-digital CASA onboarding datasets to deliver fast, accurate, and auditable metrics—reducing manual analysis effort and accelerating decision-making for CX teams. The POC demonstrated strong accuracy across 80-95% of UAT scenarios and enabled real-time, scalable insight generation previously limited by static dashboards and manual validation.",
    status: "Retired",
    subAgents: ["Intent and Entity Extractor Agent", "Planner Agent", "Query Agent", "Text to SQL Agent", "Visualization Agent"],
    popularity: 76
  },
  {
    id: 23,
    name: "Group Compliance - STR Automation",
    description: "STR Automation solution leveraged Machine Learning and AI models, alongside advanced technology and data science, to analyse and identify complex customer behaviours and trends mandatory for Compliance. This approach aimed to support AML (Anti-Money Laundering) and CTF (Counter-Terrorist Financing) teams, as well as sanctions investigators, in making more informed decisions from an AML/CTF and sanctions risk perspective.",
    status: "Retired",
    subAgents: [],
    popularity: 68
  },
  {
    id: 24,
    name: "GT Insights",
    description: "An AI-powered assistant that helps Group Technology staff access and navigate SOPs while enhancing process knowledge development. It provides real-time guidance, ensures compliance, and supports continuous learning through contextual insights and recommendations.",
    status: "Live",
    subAgents: ["Citation Agent", "Document Processing Agent", "Explainer Agent", "Guardrail Agent", "Knowledge Agent", "Query Agent"],
    popularity: 96
  },
  {
    id: 25,
    name: "GTB Call Insights",
    description: "The GTB Call Insights Agent analyzes all GTB customer calls using enterprise-grade transcription, sentiment detection, categorization, and root-cause analytics. It processes near real-time call data from the GTB pipeline and provides a complete breakdown of why clients are calling and what actions are required.",
    status: "Live",
    subAgents: ["Classification Agent", "Speaker Diarization Agent", "Summarizer Agent", "Transcriber Agent"],
    popularity: 93
  },
  {
    id: 26,
    name: "Inward Payments beneficiary name matching",
    description: "A high volume of inward payments continues to require manual repair due to beneficiary name mismatches, creating avoidable operational load for GCOO teams and impacting straight-through processing efficiency. Introducing an AI-driven beneficiary name-matching capability will enable accurate, automated validation across domestic and international payments before posting to core systems, materially reducing manual effort, operational risk, and turnaround time.",
    status: "Retired",
    subAgents: [],
    popularity: 62
  },
  {
    id: 27,
    name: "Legal AI",
    description: "FAB Legal has challenge in reviewing all the documents manually against local regulations. AI powered solution to allow Legal team to upload their documents and get Legal opinion on the document.",
    status: "Yet to start",
    subAgents: [],
    popularity: 64
  },
  {
    id: 28,
    name: "LLM Playground",
    description: "AI Chatbot app to view response quality, latency and overall experience from various LLMs",
    status: "Retired",
    subAgents: ["No Agent Mapping"],
    popularity: 71
  },
  {
    id: 29,
    name: "Manual upload of bulk transactions",
    description: "TBD",
    status: "PoC",
    subAgents: [],
    popularity: 55
  },
  {
    id: 30,
    name: "Market Observability",
    description: "Combines sub-sections into one coherent section and formats it.",
    status: "Retired",
    subAgents: ["Formatter Agent", "Refiner Agent", "Validation Agent", "Web Agent", "Writer Agent"],
    popularity: 74
  },
  {
    id: 31,
    name: "Negative News Screening & Adverse Media",
    description: "Compliance team currently screens individuals and entities information manually across the web. This is time consuming and lead to errors. With an automated AI solution, entities and individuals associated with adverse events or reputational risks are screened for negative news and performing sentiment analysis across external data sources. This will enable proactive risk detection, reduce manual monitoring workload, and strengthen FAB's compliance controls—processes that the Compliance team currently performs manually.",
    status: "Live",
    subAgents: ["Classification Agent", "Report Generation Agent", "Summarizer Agent", "Web Agent"],
    popularity: 97
  },
  {
    id: 32,
    name: "News Flash",
    description: "News Flash automation",
    status: "Live",
    subAgents: ["Summarizer Agent"],
    popularity: 81
  },
  {
    id: 33,
    name: "News letter",
    description: "News letter automation",
    status: "Live",
    subAgents: ["Report Generation Agent"],
    popularity: 79
  },
  {
    id: 34,
    name: "OneMI GPT",
    description: "OneMI GPT, an intelligent Agentic AI assistant, now empowers stakeholders to access Finance data instantly using natural language. This groundbreaking solution allows users to query costs, schedules, risks, and performance, delivering actionable insights in real-time. By translating simple English queries into business intelligence, OneMI GPT enables finance teams to make informed decisions without technical expertise. Automated workflows ensure accuracy and compliance, while insightful summaries distill raw data into key findings for strategic impact. OneMI GPT fosters collaboration and elevates organizational decision making, setting a new standard for business intelligence accessibility and effectiveness.",
    status: "Live",
    subAgents: ["COA Glossary Agent", "Clarification Agent with HITL", "DAX Generator Agent", "Data Mapper Agent", "Insight Engine Agent", "Intent and Entity Extractor Agent", "Priority Agent", "Router Agent", "Table Selection Agent"],
    popularity: 99
  },
  {
    id: 35,
    name: "Peer Review-Finance /  GCEO",
    description: "Peer Comparison is your gateway to seamless financial insights, empowering you to explore and interact with key financial documents from FAB and its peers. Gain instant access to performance metrics, compare industry trends, and uncover critical financial data all in one intuitive platform.",
    status: "Live",
    subAgents: ["Citation Agent", "Computation Agent", "Document Processing Agent", "Explainer Agent", "Guardrail Agent", "Intent and Entity Extractor Agent", "Knowledge Agent", "Planner Agent", "Query Agent", "Visualization Agent"],
    popularity: 98
  },
  {
    id: 36,
    name: "PIL",
    description: "GCOO team currently process Personal Loan application manually. AI powered solution to auto read the documents and does the verifications",
    status: "Beta LIve",
    subAgents: ["Classification Agent", "Validation Agent"],
    popularity: 86
  },
  {
    id: 37,
    name: "Playground",
    description: "Playground environment",
    status: "Live",
    subAgents: ["Code Generation Agent", "Planner Agent"],
    popularity: 88
  },
  {
    id: 38,
    name: "Portfolio Mgt AI",
    description: "Develop an Agentic chatbot solution which can provide advanced anlytical views about the Capex projects in the bank along with their prediction on future performance.",
    status: "Development",
    subAgents: [],
    popularity: 77
  },
  {
    id: 39,
    name: "Retail Contact Center Call Insights",
    description: "The Retail Contact Center Call Insights Agent ingests, processes, and analyzes all retail customer calls across the UAE contact centers and provides real-time, high-resolution visibility into call drivers, RCA, agent performance, and operational blockers.",
    status: "Live",
    subAgents: ["Calls Analyzer Agent", "Calls Transcriber Agent", "Classification Agent", "Speaker Diarization Agent", "Summarizer Agent"],
    popularity: 95
  },
  {
    id: 40,
    name: "Risk Data Analyst",
    description: "The Risk Data Analyst automates risk analytics, model validation, and multi-domain risk assessment using an Agentic workflow. It unifies internal and external data sources to deliver credit risk, market risk, ESG, and scenario-analysis insights through natural-language queries. The system uses planner, code-generation, execution, and explainer agents to generate structured analysis, visualizations, and executive-ready narratives—significantly reducing manual effort, speeding up validation cycles, and enabling real-time, scalable risk intelligence for Group Risk.",
    status: "Retired",
    subAgents: ["Intent and Entity Extractor Agent", "Text to SQL Agent", "Visualization Agent"],
    popularity: 73
  },
  {
    id: 41,
    name: "Strategy Agent",
    description: "The Strategy Agent is an Agentic-AI-powered decision-support system designed to enhance executive and business planning by integrating market intelligence, internal performance data, and real-time signals into a single autonomous analysis engine. It orchestrates multiple agents—including Market Observability and Knowledge Retrieval—via A2A protocols to generate insights, scenarios, and strategic recommendations. Built for deployment on the GERNAS platform, the solution enables leadership to evaluate business trends faster, validate strategies, and make data-driven decisions with minimal manual intervention.",
    status: "POC",
    subAgents: [],
    popularity: 69
  },
  {
    id: 42,
    name: "Stratus - OneMI Integration",
    description: "Stratus is FAB's AI-powered enterprise intelligence hub, designed to unify financial, commercial, and market insights through a single conversational interface. By leveraging Agentic AI and the Modern Data Platform, it transforms 500+ static reports into real-time, contextual, and governed insights. Stratus empowers decision-makers to analyze financial performance, discover commercial opportunities, and benchmark market trends instantly using natural language queries.",
    status: "Development",
    subAgents: ["db_vector_agent", "sql_agent", "plotting_formatter node", "formatter node"],
    popularity: 85
  },
  {
    id: 43,
    name: "Trade AI Analyst",
    description: "Trade Finance operations remain highly manual due to the inherent complexity of product workflows, resulting in multiple intervention points across the lifecycle and extended turnaround times for GCOO processing teams. As part of the modernization program, we are introducing AI-driven workability checks to automate validation for LC and OAF products. This capability will significantly reduce manual touchpoints, improve processing speed, and enhance overall operational efficiency and control.",
    status: "Live",
    subAgents: ["Compliance Agent", "Document Processing Agent", "Guardrail Agent", "Trade Rule Agent", "Validation Agent"],
    popularity: 92
  },
  {
    id: 44,
    name: "TradeLens",
    description: "An AI powered assistant transforming trade data queries into clear, actionable insights by enabling users to efficiently access and analyze detailed customer trade information—including investor profiles, transaction details, and ownership data. This enhances decision-making, and ensures secure, timely access to critical trade intelligence.",
    status: "Live",
    subAgents: ["Intent and Entity Extractor Agent", "Planner Agent", "Query Agent", "Text to SQL Agent"],
    popularity: 90
  }
];
