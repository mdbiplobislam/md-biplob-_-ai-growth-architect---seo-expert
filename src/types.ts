export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  deliverables: string[];
  kpis: string[];
  duration: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
  services: ServiceItem[];
}

export interface Course {
  id: string;
  title: string;
  category: "SEO" | "Digital Marketing" | "Freelancing" | "AI Marketing" | "1-on-1 Mentorship";
  subtitle: string;
  duration: string;
  totalModules: number;
  learningOutcomes: string[];
  curriculum: string[];
  price: string;
  rating: number;
  studentsCount: number;
  badge?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  clientType: string;
  category: "SEO" | "Local SEO" | "Personal Branding" | "Digital Marketing" | "Website Growth";
  growthMetrics: { label: string; value: string; trend: string }[];
  problem: string;
  strategy: string[];
  execution: string[];
  results: string[];
  chartData: { name: string; Traffic: number; Leads: number }[];
}

export interface BlogPost {
  id: string;
  title: string;
  cluster: "SEO" | "Digital Marketing" | "Freelancing" | "AI Marketing" | "Personal Branding";
  subTopic: string;
  readTime: string;
  summary: string;
  body: string[];
  keywords: string[];
  faqs?: { question: string; answer: string }[];
  publishDate: string;
}

export interface FreeResource {
  id: string;
  title: string;
  type: "Template" | "Checklist" | "Framework" | "SOP" | "eBook" | "Tool";
  description: string;
  downloadCount: number;
  fileSize: string;
  deliverables: string[];
}
