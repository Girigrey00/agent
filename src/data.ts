export interface Agent {
  id: number;
  category: string;
  name: string;
  description: string;
  appNames: string;
  status: string;
  numApps: number;
  popularity: number;
  tokens: number;
}

export const agentsData: Agent[] = [
  {
  "id": 1,
  "category": "Orchestration & Delivery",
  "name": "Document Processing Agent",
  "description": "Converts PDFs, Docs, PPTs, and images into formats consumable by agents.",
  "appNames": "AML Alerts Investigation for suspicious transactions, Trade AI Analyst, GT Insights, Data Management & Enablement, Playground App, Peer Review, CBG Knowledge Hub, COPA (Court Order Agent)",
  "status": "Live",
  "numApps": 8,
  "popularity": 81,
  "tokens": 1929241
},
  {
  "id": 2,
  "category": "Orchestration & Delivery",
  "name": "Formatter Agent",
  "description": "Converts generated responses or data into standard document formats (.docx, .xlsx, .pdf) for easy sharing.",
  "appNames": "AML Alerts Investigation for suspicious transactions, Financial Highlights, Market Observability, Trade Finance AI transformation",
  "status": "Live",
  "numApps": 4,
  "popularity": 99,
  "tokens": 1196888
},
  {
  "id": 3,
  "category": "Generation & Communication",
  "name": "Intent and Entity Extractor Agent",
  "description": "Identifies user intent and extracts key entities for accurate request understanding.",
  "appNames": "AML Alerts Investigation for suspicious transactions, COPA (Court Order Agent), Peer Review, TradeLens, OneMI GPT, GCEX Data Analyst, Risk Data Analyst",
  "status": "Live",
  "numApps": 7,
  "popularity": 79,
  "tokens": 316872
},
  {
  "id": 4,
  "category": "Generation & Communication",
  "name": "Report Generation Agent",
  "description": "Generate report in the format of PDF/ Excel",
  "appNames": "AML Alerts Investigation for suspicious transactions, Negative News Screening & Adverse Media, Financial Insights, Trade Finance AI transformation, News letter",
  "status": "Live",
  "numApps": 5,
  "popularity": 87,
  "tokens": 693488
},
  {
  "id": 5,
  "category": "Generation & Communication",
  "name": "Web Agent",
  "description": "Extracts relevant data from external websites programmatically.",
  "appNames": "Negative News Screening & Adverse Media, FAB Newsletter, Market Observability, AML Alerts Investigation for suspicious transactions",
  "status": "Live",
  "numApps": 4,
  "popularity": 91,
  "tokens": 208840
},
  {
  "id": 6,
  "category": "AI Agents",
  "name": "NA",
  "description": "NA",
  "appNames": "AML Risk - Champion Model",
  "status": "Pilot",
  "numApps": 1,
  "popularity": 84,
  "tokens": 327717
},
  {
  "id": 7,
  "category": "Generation & Communication",
  "name": "Classification Agent",
  "description": "Performs classification based on given content and predefined classes.",
  "appNames": "Negative News Screening & Adverse Media, Fraud Risk Mailbox Automation, At Your Service, GTB Call Insights, Retail Contact Center Call Insights, Collections Call Insights, PIL, Complaints Fulfilment Team Identification",
  "status": "Live",
  "numApps": 8,
  "popularity": 79,
  "tokens": 1079511
},
  {
  "id": 8,
  "category": "Generation & Communication",
  "name": "Customer Identification/Info Check Agent",
  "description": "Extracts customer details from input and maps them to the corresponding identification number in the system.",
  "appNames": "At Your Service, COPA (Court Order Agent)",
  "status": "Live",
  "numApps": 2,
  "popularity": 86,
  "tokens": 412273
},
  {
  "id": 9,
  "category": "Generation & Communication",
  "name": "Email Categorization Agent",
  "description": "Classifies customer requests from emails into predefined CRM categories for accurate routing and fulfillment.",
  "appNames": "At Your Service",
  "status": "Pilot",
  "numApps": 1,
  "popularity": 87,
  "tokens": 1640000
},
  {
  "id": 10,
  "category": "Generation & Communication",
  "name": "Explainer Agent",
  "description": "Provides clear and concise explanations of complex topics, concepts, code, or system behaviors.",
  "appNames": "GT Insights, Data Management & Enablement, Playground App, Peer Review, At Your Service",
  "status": "Live",
  "numApps": 5,
  "popularity": 71,
  "tokens": 354951
},
  {
  "id": 11,
  "category": "Generation & Communication",
  "name": "Mail Chain Identification Agent",
  "description": "Connects to PostgreSQL, filters records using Message ID, retrieves Conversation ID, and queries recent messages.",
  "appNames": "At Your Service",
  "status": "Pilot",
  "numApps": 1,
  "popularity": 87,
  "tokens": 498491
},
  {
  "id": 12,
  "category": "Generation & Communication",
  "name": "Citation Agent",
  "description": "Provides sources and citations for included information to ensure credibility and allow verification.",
  "appNames": "GT Insights, Cyclo, Data Management & Enablement, Playground App, Peer Review, CBG Knowledge Hub",
  "status": "Live",
  "numApps": 6,
  "popularity": 84,
  "tokens": 1237683
},
  {
  "id": 13,
  "category": "Generation & Communication",
  "name": "Knowledge Agent",
  "description": "Retrieves and selects the most relevant information from the knowledge base in real time to enable accurate, context-aware responses.",
  "appNames": "GT Insights, Cyclo, GT PMO Knowledgebase, Data Management & Enablement, Playground App, Peer Review, CBG Knowledge Hub",
  "status": "Live",
  "numApps": 7,
  "popularity": 78,
  "tokens": 1044745
},
  {
  "id": 14,
  "category": "Generation & Communication",
  "name": "PDD Flow Creation Agent",
  "description": "Converts process definition documents into a visualizable format.",
  "appNames": "CBG Knowledge Hub",
  "status": "Pilot",
  "numApps": 1,
  "popularity": 80,
  "tokens": 1262369
},
  {
  "id": 15,
  "category": "Generation & Communication",
  "name": "Query Agent",
  "description": "Clarifies and improves user queries by rephrasing or breaking them down for better results.",
  "appNames": "GT Insights, Data Management & Enablement, Playground App, Peer Review, CBG Knowledge Hub, TradeLens, GCEX Data Analyst",
  "status": "Live",
  "numApps": 7,
  "popularity": 98,
  "tokens": 1983929
},
  {
  "id": 16,
  "category": "Generation & Communication",
  "name": "Speaker Diarization Agent",
  "description": "Splits speech between caller and receiver.",
  "appNames": "GTB Call Insights, Retail Contact Center Call Insights, Collections Call Insights",
  "status": "Live",
  "numApps": 3,
  "popularity": 94,
  "tokens": 713928
},
  {
  "id": 17,
  "category": "Generation & Communication",
  "name": "Summarizer Agent",
  "description": "Summarizes content based on given tone and context.",
  "appNames": "Negative News Screening & Adverse Media, News Flash, FAB Newsletter, GTB Call Insights, Retail Contact Center Call Insights, Collections Call Insights",
  "status": "Live",
  "numApps": 6,
  "popularity": 91,
  "tokens": 987652
},
  {
  "id": 18,
  "category": "Generation & Communication",
  "name": "Transcriber Agent",
  "description": "Converts audio into text.",
  "appNames": "GTB Call Insights, Retail Contact Center Call Insights, Collections Call Insights",
  "status": "Live",
  "numApps": 3,
  "popularity": 87,
  "tokens": 1629972
},
  {
  "id": 19,
  "category": "Generation & Communication",
  "name": "sql_agent",
  "description": "The sql agent can retrieve information from a PostgreSQL database. It provides tools to access table names, schemas, unique column values and execute queries against the database. The agent supports a human-in-the-loop approach to refine and clarify questions when needed. It also includes a set of mathematical tools to perform calculations before delivering the final response.",
  "appNames": "TBD",
  "status": "Pilot",
  "numApps": 1,
  "popularity": 91,
  "tokens": 1774778
},
  {
  "id": 20,
  "category": "Orchestration & Delivery",
  "name": "plotting_formatter node",
  "description": "The plotting_formatter node can generate a Vega-lite definition of a chart, which will be rendered in the frontend.",
  "appNames": "TBD",
  "status": "Pilot",
  "numApps": 1,
  "popularity": 85,
  "tokens": 1961757
},
  {
  "id": 21,
  "category": "Orchestration & Delivery",
  "name": "formatter node",
  "description": "The formatter node rewrites the final response before it is delivered to the user. It ensures proper number formatting, creates markdown tables, formats links and hides internal names.",
  "appNames": "TBD",
  "status": "Pilot",
  "numApps": 1,
  "popularity": 77,
  "tokens": 588250
},
  {
  "id": 22,
  "category": "Generation & Communication",
  "name": "vector_agent",
  "description": "The vector_db agent retrieves qualitative information from Azure AI Search over FAB internal SOPs, policies, guides, and process documents. It specializes in questions about onboarding, KYC/EDD, sanctions and screening, governance, and procedural how?to queries. The agent always starts by querying Azure AI Search and, when the retrieved context is weak or ambiguous, it asks the user for clarification (for example about customer type, product, jurisdiction, or stage) before refining the search and answering strictly based on the retrieved documents.",
  "appNames": "TBD",
  "status": "Pilot",
  "numApps": 1,
  "popularity": 80,
  "tokens": 1718177
},
  {
  "id": 23,
  "category": "Generation & Communication",
  "name": "definitions_agent",
  "description": "The definitions agent answers questions about chart, metric, and term definitions based on an embedded JSON glossary backing the CX Intelligence Hub, Interaction Volumes, and Competitive CX Insights dashboards. It explains what a metric means, where it appears (view and section), and how it is calculated when a formula is available. If a user query is ambiguous or matches multiple possible metrics, the agent asks for clarification by surfacing the closest options and letting the user choose, then provides a concise, markdown?formatted definition strictly derived from the glossary.",
  "appNames": "TBD",
  "status": "Pilot",
  "numApps": 1,
  "popularity": 82,
  "tokens": 1372557
},
  {
  "id": 24,
  "category": "Generation & Communication",
  "name": "Guardrail Agent",
  "description": "Ensures data privacy and safety by intercepting and neutralizing PII and harmful inputs before processing.",
  "appNames": "GT Insights, Cyclo, Data Management & Enablement, Playground App, Peer Review, Trade AI Analyst",
  "status": "Live",
  "numApps": 6,
  "popularity": 84,
  "tokens": 781535
},
  {
  "id": 25,
  "category": "Generation & Communication",
  "name": "Computation Agent",
  "description": "Performs mathematical operations and provides quantitative analysis for various tasks.",
  "appNames": "Peer Review, Financial Highlights, Tradelens",
  "status": "Live",
  "numApps": 3,
  "popularity": 91,
  "tokens": 1334345
},
  {
  "id": 26,
  "category": "Generation & Communication",
  "name": "Planner Agent",
  "description": "Develops task sequences and coordinates specialized agents to fulfill complex requests.",
  "appNames": "Playground, Peer Review, TradeLens, GCEX Data Analyst",
  "status": "Live",
  "numApps": 4,
  "popularity": 94,
  "tokens": 1156591
},
  {
  "id": 27,
  "category": "Generation & Communication",
  "name": "Text to SQL Agent",
  "description": "Converts natural language queries into SQL commands for seamless database interaction.",
  "appNames": "GCEX Data Analyst, TradeLens, Risk Data Analyst",
  "status": "Live",
  "numApps": 3,
  "popularity": 95,
  "tokens": 697759
},
  {
  "id": 28,
  "category": "Generation & Communication",
  "name": "Visualization Agent",
  "description": "Generates charts, graphs, and visual representations for analysis.",
  "appNames": "GCEX Data Analyst, Peer Review, Risk Data Analyst",
  "status": "Live",
  "numApps": 3,
  "popularity": 91,
  "tokens": 1888755
},
  {
  "id": 29,
  "category": "Generation & Communication",
  "name": "No Agent Mapping",
  "description": "TBD",
  "appNames": "LLM Playground",
  "status": "Pilot",
  "numApps": 1,
  "popularity": 84,
  "tokens": 538173
},
  {
  "id": 30,
  "category": "Generation & Communication",
  "name": "Refiner Agent",
  "description": "Performs final quality checks, refining tone, language, and formatting for export.",
  "appNames": "Market Observability",
  "status": "Pilot",
  "numApps": 1,
  "popularity": 76,
  "tokens": 1055733
},
  {
  "id": 31,
  "category": "Generation & Communication",
  "name": "Validation Agent",
  "description": "Ensures logical flow and eliminates redundancy in reports.",
  "appNames": "Market Observability, Trade AI Analyst, PIL",
  "status": "Live",
  "numApps": 3,
  "popularity": 79,
  "tokens": 1961057
},
  {
  "id": 32,
  "category": "Generation & Communication",
  "name": "Writer Agent",
  "description": "Synthesizes information from multiple sources to construct comprehensive answers.",
  "appNames": "Market Observability",
  "status": "Pilot",
  "numApps": 1,
  "popularity": 70,
  "tokens": 1257800
},
  {
  "id": 33,
  "category": "Generation & Communication",
  "name": "COA Glossary Agent",
  "description": "Applies CoA glossary, identifies appropriate values, and performs customer identification if required.",
  "appNames": "OneMI GPT",
  "status": "Live",
  "numApps": 1,
  "popularity": 77,
  "tokens": 325273
},
  {
  "id": 34,
  "category": "Generation & Communication",
  "name": "Clarification Agent with HITL",
  "description": "Seeks clarifications during processing and involves humans for review and decisions when needed.",
  "appNames": "OneMI GPT",
  "status": "Live",
  "numApps": 1,
  "popularity": 86,
  "tokens": 1729862
},
  {
  "id": 35,
  "category": "Generation & Communication",
  "name": "DAX Generator Agent",
  "description": "Generates main DAX executed on One MI Semantic Model.",
  "appNames": "OneMI GPT",
  "status": "Live",
  "numApps": 1,
  "popularity": 82,
  "tokens": 991254
},
  {
  "id": 36,
  "category": "Generation & Communication",
  "name": "Data Mapper Agent",
  "description": "Selects relevant data tables or models (e.g., P\\&L, Balance Sheet) to fulfill requests.",
  "appNames": "OneMI GPT",
  "status": "Live",
  "numApps": 1,
  "popularity": 80,
  "tokens": 1367293
},
  {
  "id": 37,
  "category": "Generation & Communication",
  "name": "Insight Engine Agent",
  "description": "Builds analytical formulas or DAX expressions for financial calculations.",
  "appNames": "OneMI GPT",
  "status": "Live",
  "numApps": 1,
  "popularity": 80,
  "tokens": 1172496
},
  {
  "id": 38,
  "category": "Generation & Communication",
  "name": "Priority Agent",
  "description": "Used for getting table priority among the available tables",
  "appNames": "OneMI GPT",
  "status": "Live",
  "numApps": 1,
  "popularity": 71,
  "tokens": 612800
},
  {
  "id": 39,
  "category": "Generation & Communication",
  "name": "Router Agent",
  "description": "Routes user requests and data to the most appropriate agents based on type and complexity.",
  "appNames": "OneMI GPT",
  "status": "Live",
  "numApps": 1,
  "popularity": 90,
  "tokens": 1588253
},
  {
  "id": 40,
  "category": "Generation & Communication",
  "name": "Table Selection Agent",
  "description": "Selects top tables and matched columns/measures for DAX generation.",
  "appNames": "OneMI GPT",
  "status": "Live",
  "numApps": 1,
  "popularity": 91,
  "tokens": 1895029
},
  {
  "id": 41,
  "category": "Generation & Communication",
  "name": "Code Generation Agent",
  "description": "Generates and executes Python code based on a given task.",
  "appNames": "Playground",
  "status": "Live",
  "numApps": 1,
  "popularity": 80,
  "tokens": 1479795
},
  {
  "id": 42,
  "category": "Generation & Communication",
  "name": "Calls Analyzer Agent",
  "description": "Retrieves relevant information from selected knowledge sources based on a refined query.",
  "appNames": "Retail Contact Center Call Insights, Agentic Flow",
  "status": "Live",
  "numApps": 2,
  "popularity": 85,
  "tokens": 293101
},
  {
  "id": 43,
  "category": "Generation & Communication",
  "name": "Calls Transcriber Agent",
  "description": "Processes calls from ACRA data loader, converts speech to text, and applies speaker segmentation.",
  "appNames": "Retail Contact Center Call Insights, Agentic Flow",
  "status": "Live",
  "numApps": 2,
  "popularity": 95,
  "tokens": 1232399
},
  {
  "id": 44,
  "category": "Generation & Communication",
  "name": "db_vector_agent",
  "description": "The db_vector agent can retrieve information from Azure Search. It contains data across three main topics: reports, vendors, and eagle-eye-news. The agent supports a human-in-the-loop approach to refine and clarify questions when needed. It also includes a set of mathematical tools to perform calculations before delivering the final response.",
  "appNames": "TBD",
  "status": "Pilot",
  "numApps": 1,
  "popularity": 97,
  "tokens": 1155690
},
  {
  "id": 45,
  "category": "Generation & Communication",
  "name": "Compliance Agent",
  "description": "Verifies documents against established banking practices and compliance standards.",
  "appNames": "Trade AI Analyst",
  "status": "Live",
  "numApps": 1,
  "popularity": 89,
  "tokens": 1527346
},
  {
  "id": 46,
  "category": "Generation & Communication",
  "name": "Trade Rule Agent",
  "description": "Retrieves trade finance rules (e.g., UCP 600, ISBP) to ensure compliance and mitigate risks.",
  "appNames": "Trade AI Analyst",
  "status": "Live",
  "numApps": 1,
  "popularity": 84,
  "tokens": 848317
}
];
