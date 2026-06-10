import { ServiceCategory, Course, CaseStudy, BlogPost, FreeResource } from "./types";

export const brandBio = {
  name: "Md Biplob",
  title: "AI-Driven Growth Architect",
  subTitle: "SEO Expert | Digital Marketing Trainer | Freelancing Mentor | AI Marketing Consultant",
  tagline: "I engineer intelligent digital authority systems that transform professionals and businesses into scalable global brands.",
  aboutText: "Md Biplob is a pioneer of AI-integrated marketing systems, technical SEO architectures, and career mentorship. With over 8+ years of hands-on industry experience, Biplob has shaped the growth trajectories of 120+ international startups, corporate brands, and SME enterprises. As a highly sought-after mentor and trainer, he has educated more than 5,000+ students in search engine optimization, performance-based marketing, and digital entrepreneurship across Bangladesh and global freelancing stages. Biplob integrates cutting-edge generative AI models into core growth funnels, enabling rapid scalability and sustained organic compound loops.",
  mission: "To bridge the gap between complex digital architectures and execution, empowering 20,000+ ambitious marketers and businesses with automated, AI-driven scale machines.",
  vision: "To establish Bangladesh as a leading global hub for high-performing, AI-literate digital growth talent and technical search expert specialists.",
  stats: [
    { label: "Active Years Experience", value: "8+" },
    { label: "Successful Projects", value: "150+" },
    { label: "Students Trained & Mentored", value: "5,000+" },
    { label: "Organic Traffic Generated", value: "10M+" },
    { label: "AI Automated Campaigns", value: "100+" },
    { label: "Client Monthly Revenue Scaled", value: "$3.5M+" }
  ],
  certifications: [
    "Google Certified Advanced Analytics Specialist",
    "HubSpot Inbound Marketing Authority",
    "SEMrush Technical SEO & Audit Master Certified",
    "DeepLearning.AI Prompt Engineering Practitioner",
    "Meta Certified Digital Marketing Associate"
  ],
  skills: {
    seo: ["Technical SEO Architecture", "Semantic Keyword Modeling", "E-commerce SEO Scaling", "Programmatic SEO", "SaaS Growth Marketing"],
    aiMarketing: ["AI SEO Automated Pipelines", "Custom LLM Content Tuning", "RAG-driven Persona Modeling", "Workflow Automation (n8n/Make)"],
    digitalStrategy: ["Omnichannel Funnel Design", "High-ROI PPC Campaigns", "LinkedIn Authority Building", "Retention Growth Hacking"]
  },
  timeline: [
    { year: "2018", title: "Technical SEO Architect", place: "Top International Agencies", desc: "Crafted high-level technical crawling and indexing solutions for mid-market e-commerce models." },
    { year: "2020", title: "Founder & Lead growth Architect", place: "GrowthEngine BD", desc: "Launched a boutique growth consultancy scaling SaaS and Local SME companies internationally." },
    { year: "2022", title: "Digital Marketing & SEO Mentor", place: "Renowned Training Academies", desc: "Designed fully practical curricula from basic keyword structures up to complex automation." },
    { year: "2024", title: "AI Marketing Consultant & Specialist", place: "Enterprise Scale", desc: "Built end-to-end AI-powered topical mapping systems, content generation rigs, and crawl auditing automations." }
  ],
  speakingGigs: [
    { month: "Jan 2026", event: "National Digital Marketing Summit", topic: "Next-gen Content Engines: Blending Technical SEO and GenAI pipelines safely." },
    { month: "Mar 2026", event: "Bangladesh Freelancer Forum", topic: "Moving Up value Chains: Transitioning from $10/hr Gigs to $5,000/mo Consulting Retainers." }
  ]
};

export const serviceHub: ServiceCategory[] = [
  {
    id: "seo",
    title: "SEO Solutions (Enterprise & SME)",
    description: "Deep technical, keyword, and programmatic seo campaigns that claim real digital territory on Google.",
    icon: "Search",
    slug: "seo-expert-vietnam-bangladesh",
    services: [
      {
        id: "technical-seo",
        title: "Technical SEO Architecture",
        shortDesc: "Comprehensive crawl budget, rendering, and core web vitals optimization.",
        fullDesc: "We reconstruct search bots' pathways through your backend, implementing optimized log files analysis, edge indexing, JSON-LD configurations, server-side caching, and schema structures. Ideal for massive websites with indexing hurdles.",
        benefits: ["Indexation rate hikes of 80%+", "Clean index paths and strict canonical directives", "Core Web Vitals load speeds under 1.8 seconds"],
        deliverables: ["Full indexability spreadsheet audit", "JS rendering and SSR analysis report", "Custom redirects and robots.txt ruleset mapping"],
        kpis: ["Pages Indexed Increment", "Organic Crawl Frequency", "LCP Speed Score"],
        duration: "4-6 weeks"
      },
      {
        id: "ecommerce-seo",
        title: "E-commerce SEO Scaling",
        shortDesc: "Automated programmatic structures for tens of thousands of product SKUs.",
        fullDesc: "Specially designed for WooCommerce, Shopify, and Magento, this program targets faceted navigation, product variant index control, automated category semantic building, and deep buyer intent keyword indexing.",
        benefits: ["Sustained collection-level growth", "Zero duplicate-content cannibalization on tags", "Category schema loops boosting SERP click rates"],
        deliverables: ["Dynamic schema JSON structures", "Internal linking anchors matrix", "Product canonical overhaul"],
        kpis: ["Add-To-Cart From Organic Traffic", "Transactional Keyword Visual Rankings", "Sales Conversion Rate"],
        duration: "Recurring Retainer"
      },
      {
        id: "local-seo",
        title: "Local SEO Command Control",
        shortDesc: "Dominating local citation graphs, Google Maps profiles, and localized search results.",
        fullDesc: "We map out geocentric keywords, create schema locations for high contextual relevance, optimize Google Business Profile signals, and handle organic review generation protocols.",
        benefits: ["Top 3 Map Pack rankings for regional terms", "Spike in direct phone calls and location queries", "Strong NAP consistency across 60+ global citation hubs"],
        deliverables: ["Google Business Profile optimization suite", "Local geographic page layouts", "Geo-coordinates schema maps blueprint"],
        kpis: ["Map Pack Impression Metrics", "Local Lead Generation Count", "CTR from Mobile Navigation"],
        duration: "3-4 weeks"
      }
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & Performance Strategy",
    description: "Omnichannel growth funnels engineered with precise tracking, performance marketing, and copywriting.",
    icon: "TrendingUp",
    slug: "performance-digital-marketing-trainer",
    services: [
      {
        id: "growth-strategy",
        title: "Omnichannel Growth Funnel Blueprinting",
        shortDesc: "Drafting complete lead acquisition, qualification, and sales automation engines.",
        fullDesc: "We establish rigorous data tracking, attribution loops, and lead nurturing sequences to move users smoothly from social discovery to commercial checkouts.",
        benefits: ["Consistent high-volume pipeline", "Minimized cost per client acquisition (CAC)", "Clear multi-touch analytics attribution models"],
        deliverables: ["Data tracking blueprint layout", "Automated email sequences maps", "Copywriting templates for lead pages"],
        kpis: ["Marketing Qualified Leads (MQL)", "ROAS on Performance Ad Budgets", "Customer Lifetime Value"],
        duration: "6 weeks"
      }
    ]
  },
  {
    id: "ai-marketing",
    title: "AI Marketing & Automation Consulting",
    description: "Replacing legacy manual processes with robust AI-powered workflows, programmatic topical mapping, and data automation.",
    icon: "Cpu",
    slug: "ai-marketing-consultant",
    services: [
      {
        id: "ai-seo-workflows",
        title: "AI-Powered Programmatic SEO Pipelines",
        shortDesc: "Combining OpenAI and Gemini APIs to build automated high-quality topical pipelines.",
        fullDesc: "We build workflows that construct comprehensive semantic topical arrays, draft precise draft concepts, evaluate readability specs, run auto-linking routines, and queue them onto your CMS for editorial review.",
        benefits: ["Save 90% draft curation time", "Systematic coverage of 500+ long-tail subjects weekly", "Custom brand tone safety layers preventing low-quality penalties"],
        deliverables: ["N8N or Make workflow export patterns", "Prompt library matrices for precise tone", "Automated keyword mapping script setup"],
        kpis: ["Content Production Volume", "Topic Coverage Speed", "Keyword SERP Penetration"],
        duration: "4-8 weeks"
      }
    ]
  },
  {
    id: "personal-branding",
    title: "Executive Personal Branding",
    description: "Positioning startup founders, CEOs, and corporate executives as undisputed market authorities on LinkedIn.",
    icon: "Award",
    slug: "personal-branding-expert",
    services: [
      {
        id: "linkedin-authority",
        title: "LinkedIn Thought Leadership Blueprinting",
        shortDesc: "Complete optimization and systematic high-impact content blueprints.",
        fullDesc: "Get an executive profile revamp, a 60-day visual and textual content strategy, and organic growth loops that position you directly into industry conversations.",
        benefits: ["Spike in incoming business and speaking invitations", "2x-5x increase in profile visits from decision makers", "A distinct, authoritative voice in your field"],
        deliverables: ["Optimized LinkedIn profile framework", "60 days of curated, premium topics", "Authority engagement strategy documentation"],
        kpis: ["Impressions on Thought Leadership Posts", "Inbound High-Ticket Leads", "Profile Visual Appearances in Search"],
        duration: "4 weeks"
      }
    ]
  }
];

export const trainingCourses: Course[] = [
  {
    id: "seo-mastery",
    title: "Ultimate SEO Blueprint: From Crawl to Conversion",
    category: "SEO",
    subtitle: "The most practical SEO course in Bangladesh covering technical architectures, semantic models, and local maps dominance.",
    duration: "3 Months (24 Live Sessions)",
    totalModules: 12,
    learningOutcomes: [
      "Conduct professional industry-standard technical SEO audits charging $500+",
      "Build topical authority structures from scratch that outrank enterprise competitors",
      "Deploy localized geographical pipelines to rank regional businesses",
      "Confidently apply for specialized international SEO roles"
    ],
    curriculum: [
      "Module 1: Search engine inner mechanics, indexing triggers, crawl behavior.",
      "Module 2: Advanced Semantic Keyword Research and Search Intent mapping.",
      "Module 3: On-Page architecture, markup structures, core copy formatting.",
      "Module 4: Technical core crawling, Screaming Frog mastering, and log file tracking.",
      "Module 5: Schema Markup deep dive (JSON-LD), rich snippets, and microdata.",
      "Module 6: Google Business Profile SEO, citation networks, and map loops.",
      "Module 7: Off-Page anchor strategies, context audits, digital PR protocols.",
      "Module 8: SEO Freelancing: Winning clients on Upwork, Fiverr, and cold outreaches."
    ],
    price: "BDT 15,000",
    rating: 4.9,
    studentsCount: 1850,
    badge: "Most Popular"
  },
  {
    id: "ai-marketing-academy",
    title: "AI-Powered Marketing Specialist Certification",
    category: "AI Marketing",
    subtitle: "Integrate LLMs, API automations, and AI content loops into real lead engines.",
    duration: "8 Weeks (16 Interactive Sessions)",
    totalModules: 8,
    learningOutcomes: [
      "Design fully automated workflows using n8n and Make",
      "Build custom prompt architectures matching corporate voices perfectly",
      "Generate programmatic SEO datasets of thousands of search items safely",
      "Utilize AI vectors and semantic tools for market analysis"
    ],
    curriculum: [
      "Module 1: Generative LLM basics, prompt architectures, and system context.",
      "Module 2: Automated topical ideation and keyword clustering workflows.",
      "Module 3: Custom GPT creation, fine-tuning structures, and style controls.",
      "Module 4: Multi-agent pipelines: Draft generator, SEO reviewer, fact checker.",
      "Module 5: No-code automation (Make/n8n) connecting Sheets, APIs, and CMSs.",
      "Module 6: Content safety: Auditing AI text for technical quality and freshness."
    ],
    price: "BDT 12,000",
    rating: 4.8,
    studentsCount: 920,
    badge: "Trending"
  },
  {
    id: "freelancing-intensive",
    title: "High-Ticket Freelancing: Upwork & Fiverr Dominance",
    category: "Freelancing",
    subtitle: "Unlock $5k/mo agency contracts and client pipelines, escaping bottom tier competition.",
    duration: "6 Weeks (12 Masterclasses)",
    totalModules: 6,
    learningOutcomes: [
      "Design portfolio proposals that close corporate retainer agreements",
      "Position your profiles on Upwork and Fiverr for active inbound gigs",
      "Set premium rates and handle client objections with complete ease",
      "Scale from a solo specialist to an agency/team model"
    ],
    curriculum: [
      "Module 1: Profile optimization for high-ticket search queries.",
      "Module 2: Writing custom magnetic proposals that command instant replies.",
      "Module 3: Off-platform onboarding, contract structures, and invoicing.",
      "Module 4: Client relationship management, retainer design, upsell processes.",
      "Module 5: Team building: Sourcing designers, writers, and technical helpers safely."
    ],
    price: "BDT 8,000",
    rating: 4.9,
    studentsCount: 2200,
    badge: "Best Seller"
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-medcare",
    title: "450% Traffic Scale for Multi-Location Medical Clinic",
    client: "CareFirst Healthcare Inc.",
    clientType: "Healthcare Provider (Enterprise)",
    category: "SEO",
    growthMetrics: [
      { label: "Organic Monthly Visitors", value: "450%", trend: "+240,000/mo" },
      { label: "Patient Booking Leads", value: "310%", trend: "+3,200/mo" },
      { label: "Primary Ranked Keywords", value: "8,500+", trend: "+4,100 top 3" }
    ],
    problem: "CareFirst operated 14 health centers, but had zero localized presence. Overlapping tag categories caused severe crawl conflicts, and they had manual crawl errors on their appointment portals.",
    strategy: [
      "Unified global corporate parameters and setup 14 unique geographical location sub-pages.",
      "Cleaned internal tag and categories taxonomy, pointing canonical links to static geocentric items.",
      "Integrated full LocalBusiness JSON-LD structure on all sites including structured maps geo-points.",
      "Deployed localized community content topics mapping regional clinical priorities."
    ],
    execution: [
      "Corrected 1,400+ mobile indexability and crawl bugs across patient check portals.",
      "Compiled a comprehensive database of NAP across leading citations databases with strict name parity.",
      "Built semantic local resources clusters (e.g., 'Best pediatrics in Area X') to funnel organic buyers directly to appointment pages."
    ],
    results: [
      "Monthly search traffic grew from 52,000 to 292,000 visits in 7 months.",
      "Map Pack visibility rose into Top 3 positions on 11 locations.",
      "Client added 4 new sub-branches to cater for expanded organic lead flow."
    ],
    chartData: [
      { name: "Month 1", Traffic: 52, Leads: 8 },
      { name: "Month 2", Traffic: 71, Leads: 11 },
      { name: "Month 3", Traffic: 110, Leads: 15 },
      { name: "Month 4", Traffic: 155, Leads: 21 },
      { name: "Month 5", Traffic: 210, Leads: 25 },
      { name: "Month 6", Traffic: 255, Leads: 30 },
      { name: "Month 7", Traffic: 292, Leads: 33 }
    ]
  },
  {
    id: "cs-saasbox",
    title: "AI-Driven Programmmatic Content Scale For SaaS Platform",
    client: "AnalyticsFlow Ltd.",
    clientType: "B2B SaaS Business",
    category: "Website Growth",
    growthMetrics: [
      { label: "Organic Demo Bookings", value: "185%", trend: "110 to 310/mo" },
      { label: "Topical Keywords Ranked", value: "15,000+", trend: "Dominating industry" },
      { label: "Drafting Costs Reduced", value: "75%", trend: "-$12,000/mo spending" }
    ],
    problem: "The B2B metrics space was intensely competitive. Traditional agency blog creation was costing them $150 per article, with very slow publication timetables of just 4 items a week.",
    strategy: [
      "Mapped out 600 ultra-specific long-tail business analysis keyword terms.",
      "Built a secure multi-agent AI drafting pipeline combining Gemini AI for content synthesis and SurferSEO/SEMrush data constraints.",
      "Constructed custom programmatic templates inside their Webflow CMS.",
      "Automated automated schema generations for every post."
    ],
    execution: [
      "Connected AirTable, Make.com, and Google Cloud endpoints to automate raw data ingestion.",
      "Established strict human editors loops to inject real enterprise case references.",
      "Deployed automatic JSON integration scripts and schema loops."
    ],
    results: [
      "Published 420 optimized articles in 3 months with high technical criteria.",
      "Ranked #1 on Google for 410 highly profitable comparison and integration phrases.",
      "Attained sustained top 10 positions on B2B analytics terms."
    ],
    chartData: [
      { name: "Month 1", Traffic: 12, Leads: 5 },
      { name: "Month 2", Traffic: 28, Leads: 11 },
      { name: "Month 3", Traffic: 55, Leads: 18 },
      { name: "Month 4", Traffic: 91, Leads: 25 },
      { name: "Month 5", Traffic: 142, Leads: 31 },
      { name: "Month 6", Traffic: 210, Leads: 38 }
    ]
  }
];

export const blogClusterMap = [
  {
    cluster: "SEO",
    pillar: "Topical Authority Framework: Complete 2026 Strategy",
    subTopics: ["Keyword Research", "Technical SEO", "Local SEO", "On-Page SEO", "Off-Page SEO", "SEO Audit", "E-commerce SEO"]
  },
  {
    cluster: "Digital Marketing",
    pillar: "The Customer Value Optimization Journey",
    subTopics: ["Content Marketing", "Social Media", "PPC Campaigns", "Email Funnels", "Marketing Automation"]
  },
  {
    cluster: "AI Marketing",
    pillar: "Enterprise Automated AI Content & SEO Framework",
    subTopics: ["AI SEO Pipelines", "ChatGPT prompts for Growth", "AI Content Compliance", "Automation Workflows"]
  },
  {
    cluster: "Freelancing",
    pillar: "The High-Ticket Agency Launch Roadmap",
    subTopics: ["Upwork Profile Optimization", "Fiverr Pricing Strategies", "Cold Outreach Protocols", "Client Retention"]
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "bp-topical-authority",
    title: "How to Build a Topical Authority Map that Outranks Million-Dollar Domains",
    cluster: "SEO",
    subTopic: "Keyword Research",
    readTime: "8 min read",
    summary: "Stop chasing random, isolated search terms. Learn how Md Biplob builds programmatic, interconnected topic clusters that establish absolute topical dominance on Google.",
    publishDate: "June 01, 2026",
    keywords: ["SEO Expert in Bangladesh", "Technical SEO", "Topical Authority Map", "Search Intent Optimization"],
    body: [
      "In 2026, search engine optimization is entirely driven by deep-semantic understanding. Algorithms like Google's Search Generative Experience (SGE) do not index single pages; they evaluate whether your domain is a reliable topical source for the user's intent.",
      "Developing topical authority requires clustering. A topical cluster is built from a broad 'Pillar Page' (covering the main broad topic) and dozens of 'Cluster Pages' (answering highly specific long-tail queries) all linking back and forth to create an contextually secure mesh.",
      "Here is the step-by-step framework to map and claim search categories: 1) Identify your core, high-intent seed query. 2) Collect sub-questions using People Also Ask (PAA) and search Suggests. 3) Group keywords using semantic vector tools. 4) Use accurate internal anchor links to lock the authority chain together."
    ],
    faqs: [
      { question: "How long does it take for a topical map to rank?", answer: "Typically, highly localized or specific topical mesh mappings begin indexing and showing visibility boosts within 4 to 8 weeks, depending on the crawl rate." },
      { question: "Does AI content ruin topical authority?", answer: "Only if it is thin, unedited, or lacks unique expertise. When tuned with strict editor loops, AI helps cover topic maps at 10x speed with complete semantic density." }
    ]
  },
  {
    id: "bp-ai-seo-pipelines",
    title: "Building Safe AI-Powered SEO Pipelines without Google Penalty",
    cluster: "AI Marketing",
    subTopic: "AI SEO Pipelines",
    readTime: "12 min read",
    summary: "An in-depth workflow model using Node-RED, n8n, and Gemini to generate contextual, helpful content outlines with actual expert input checks.",
    publishDate: "May 25, 2026",
    keywords: ["AI Marketing Consultant", "AI SEO Workflows", "Automated Content Strategy", "n8n SEO"],
    body: [
      "Google has repeatedly clarified its criteria: content must be helpful, original, and demonstrate real EEAT (Experience, Expertise, Authoritativeness, Trustworthiness), regardless of how it is written.",
      "The massive mistake most marketers commit is simple 'prompt spitting' - generating unedited articles directly into WordPress. This results in repetitive, low-value paragraphs which Google easily de-indexes.",
      "Md Biplob's safe workflow separates content generation into separate modules: 1) Automated technical topical ingestion. 2) Structure definition. 3) Content generation enriched with actual company case data. 4) A strict human-in-the-loop audit check for truthfulness, styling consistency, and fresh facts."
    ]
  },
  {
    id: "bp-high-ticket-proposal",
    title: "Escaping the $5 Fiverr Loop: Framing Proposals for $5,000 Retainers",
    cluster: "Freelancing",
    subTopic: "Upwork Profile Optimization",
    readTime: "7 min read",
    summary: "The specific proposal templates and value-framing strategies that Md Biplob uses to scale freelance professionals into premium agency contracts.",
    publishDate: "April 18, 2026",
    keywords: ["Freelancing Mentor", "Fiverr Upwork Bangladesh", "Client Acquisition Strategy", "High-ticket Consulting"],
    body: [
      "If you promote your services as an 'hourly freelancer', you are commoditizing your value and ranking alongside global bidders undercutting your margins.",
      "To attract enterprise buyers, define your offering purely in terms of business revenue impact. Business leaders don't buy 'backlinks' or 'articles'; they buy a highly qualified pipeline of organic sales calls.",
      "Review this proposal baseline: 'I analyzed your technical indexing flow and noticed checkout logs fail on Safari browser, leaking 18% of organic sales. Here is specifically how we can patch this to reclaim $4,000/mo in lost bookings.'"
    ]
  }
];

export const freeResources: FreeResource[] = [
  {
    id: "res-schema-pkg",
    title: "The Ultimate JSON-LD Rich Schema Boilerplate Suite",
    type: "Template",
    description: "Copy-pasteable JSON-LD schemas for FAQ blocks, LocalBusiness maps, Person profile, and Organization authority networks.",
    downloadCount: 1420,
    fileSize: "450 KB",
    deliverables: ["Person Schema Code snippet", "FAQ Schema template generator", "Organization semantic linkage markup", "Direct instructional PDF"]
  },
  {
    id: "res-audit-framework",
    title: "75-Point Live Screaming Frog & Technical Audit Checklist",
    type: "Checklist",
    description: "The identical audit criteria used to identify crawl budget losses, render blocks, and duplicate tag structures.",
    downloadCount: 2150,
    fileSize: "1.2 MB",
    deliverables: ["Detailed Excel audit layout", "Custom Screaming Frog configuration templates", "Indexing decision trees PDF", "Canonical fix guide"]
  },
  {
    id: "res-prompt-matrix",
    title: "AI SEO Prompt engineering Matrix (Gemini & GPT-4)",
    type: "Framework",
    description: "A database of expert prompts to generate outlines, cluster keywords, construct FAQ structures, and audit draft readability safely.",
    downloadCount: 3410,
    fileSize: "850 KB",
    deliverables: ["60+ advanced prompt formulas", "n8n workflow blueprint", "Output criteria tuning instructions"]
  }
];

export const faqsList = [
  {
    q: "Who is Md Biplob?",
    a: "Md Biplob is an AI-Driven Growth Architect, Technical SEO Expert, and Digital Marketing Specialist based in Bangladesh. He helps global brands, enterprise startups, and corporate teams automate marketing funnels and claim authority in search rankings."
  },
  {
    q: "Do you offer customizable corporate training modules?",
    a: "Absolutely. I design custom, hands-on training frameworks for corporate departments, teaching local marketing teams how to combine SEO, automation tools, and generative AI models safely to accelerate workflows."
  },
  {
    q: "How does your 1-on-1 Mentorship program operate?",
    a: "The mentorship is a highly intensive, practical program. I work with select digital marketers and freelancers to optimize their client acquisition strategies, master technical SEO, and transition from basic freelancing to premium agency-scale architectures."
  },
  {
    q: "What is your approach to AI-generated content?",
    a: "We never advocate for raw, unedited AI output. I construct high-compliance, multi-agent AI processes that speed up topical mapping, research, and outline drafting, while always maintaining strict human editor checkpoints for quality, EEAT, and style compliance."
  }
];
