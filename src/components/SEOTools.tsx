import { useState } from "react";
import { Copy, Check, Sparkles, Terminal, Code, CheckSquare, RefreshCw, AlertTriangle, Eye, Download, Layers, Layout, HelpCircle, FileText } from "lucide-react";

export default function SEOTools() {
  const [activeTab, setActiveTab] = useState<"schema" | "audit" | "cluster" | "elementor">("schema");

  // Elementor Exporter States
  const [selectedTemplate, setSelectedTemplate] = useState("home");
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);
  const [viewJsonMode, setViewJsonMode] = useState(false);
  const [templateCopied, setTemplateCopied] = useState(false);

  // Schema Generator State
  const [schemaType, setSchemaType] = useState<"Person" | "LocalBusiness">("Person");
  const [personName, setPersonName] = useState("Md Biplob");
  const [personJob, setPersonJob] = useState("AI-Driven Growth Architect & SEO Expert");
  const [personUrl, setPersonUrl] = useState("https://mdbiplob.com");
  const [personSocial, setPersonSocial] = useState("https://linkedin.com/in/mdbiplob");
  const [bizName, setBizName] = useState("Biplob SEO Agency");
  const [bizLoc, setBizLoc] = useState("Dhaka, Bangladesh");
  const [bizPhone, setBizPhone] = useState("+880 1700 000000");
  const [copied, setCopied] = useState(false);

  // Audit Checklist State
  const [checklist, setChecklist] = useState([
    { id: 1, text: "Robots.txt contains sitemap path & correct crawl directives", checked: true, category: "Indexing" },
    { id: 2, text: "Canonical tags are self-referential & correct cross-domain URL checks is clean", checked: true, category: "Indexing" },
    { id: 3, text: "Core Web Vitals LCP load under 2.5 seconds on real mobile devices", checked: false, category: "Performance" },
    { id: 4, text: "Structured Schema (Person/LocalBusiness) correctly verified via Rich Results Tool", checked: false, category: "Metadata" },
    { id: 5, text: "Zero broken status links (4xx errors) blocking crawler budgets", checked: true, category: "Crawling" },
    { id: 6, text: "Internal anchor texts use varied semantic variations instead of generic 'click here'", checked: false, category: "Architecture" },
    { id: 7, text: "XML Sitemap holds under 50,000 URLs and matches actual crawl lists", checked: true, category: "Indexing" },
    { id: 8, text: "Alternate hreflang attributes conform with geolocation requirements", checked: false, category: "Global" },
    { id: 9, text: "Faceted category navigation restricts crawlers to bypass blank filters", checked: true, category: "Crawling" },
    { id: 10, text: "Images possess unique descriptive Alt metrics without stuffing targets", checked: false, category: "On-Page" }
  ]);

  // Cluster State
  const [selectedCluster, setSelectedCluster] = useState<"SEO" | "AI" | "Freelance">("SEO");

  const generateSchemaString = () => {
    if (schemaType === "Person") {
      return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": personName,
        "jobTitle": personJob,
        "url": personUrl,
        "sameAs": [personSocial],
        "knowsAbout": [
          "Search Engine Optimization",
          "AI Marketing Systems",
          "Digital Growth Architecture",
          "Technical Site Audit"
        ]
      }, null, 2);
    } else {
      return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": bizName,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": bizLoc.split(",")[0]?.trim() || "Dhaka",
          "addressCountry": "BD"
        },
        "telephone": bizPhone,
        "priceRange": "$$",
        "url": personUrl,
        "image": "https://mdbiplob.com/logo.png"
      }, null, 2);
    }
  };

  const handleCopySchema = () => {
    navigator.clipboard.writeText(generateSchemaString());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleCheck = (id: number) => {
    setChecklist(
      checklist.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  const checkedCount = checklist.filter((item) => item.checked).length;
  const scorePercent = Math.round((checkedCount / checklist.length) * 100);

  const getAuditStatus = () => {
    if (scorePercent < 40) return { label: "High Technical Overhaul Required", color: "text-red-500 bg-red-500/10 border-red-500/20" };
    if (scorePercent < 80) return { label: "Moderate Search Leakage Identified", color: "text-amber-500 bg-amber-500/10 border-amber-500/20" };
    return { label: "Optimized Search Architecture (EEAT Compliant)", color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" };
  };

  const statusObj = getAuditStatus();

  return (
    <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
      {/* Tool Header */}
      <div className="bg-[#050505] border-b border-white/10 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1 px-2.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
              Free Live Suite & Playground
            </span>
          </div>
          <h3 className="text-xl font-black text-white mt-1 uppercase tracking-tight">Md Biplob's SEO & Schema Laboratory</h3>
          <p className="text-white/60 text-sm mt-0.5">Test, build, and deploy index-ready assets instantly.</p>
        </div>

        {/* Tab Switchers */}
        <div className="flex bg-white/5 p-1 rounded-full border border-white/10 self-start md:self-auto font-mono text-xs flex-wrap gap-1">
          <button
            onClick={() => setActiveTab("schema")}
            className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "schema"
                ? "bg-blue-600 text-white shadow-[0_0_12px_rgba(37,99,235,0.4)]"
                : "text-white/60 hover:text-white"
            }`}
          >
            Schema Generator
          </button>
          <button
            onClick={() => setActiveTab("audit")}
            className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "audit"
                ? "bg-blue-600 text-white shadow-[0_0_12px_rgba(37,99,235,0.4)]"
                : "text-white/60 hover:text-white"
            }`}
          >
            Audit Tracker
          </button>
          <button
            onClick={() => setActiveTab("cluster")}
            className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "cluster"
                ? "bg-blue-600 text-white shadow-[0_0_12px_rgba(37,99,235,0.4)]"
                : "text-white/60 hover:text-white"
            }`}
          >
            Authority map
          </button>
          <button
            onClick={() => setActiveTab("elementor")}
            className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "elementor"
                ? "bg-blue-600 text-white shadow-[0_0_12px_rgba(37,99,235,0.4)]"
                : "text-white/60 hover:text-white"
            }`}
          >
            Elementor Exporter
          </button>
        </div>
      </div>

      <div className="p-6">
        {/* TAB 1: SCHEMA MARKUP GENERATOR */}
        {activeTab === "schema" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Input Config */}
            <div className="lg:col-span-5 space-y-4">
              <label className="block text-xs font-mono text-blue-400 font-bold uppercase tracking-wider">
                Select Schema Variant
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSchemaType("Person")}
                  className={`py-2 px-3 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    schemaType === "Person"
                      ? "border-blue-500 bg-blue-500/10 text-white shadow-[0_0_10px_rgba(37,99,235,0.2)]"
                      : "border-white/10 bg-[#050505] text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  Person (EEAT)
                </button>
                <button
                  type="button"
                  onClick={() => setSchemaType("LocalBusiness")}
                  className={`py-2 px-3 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    schemaType === "LocalBusiness"
                      ? "border-blue-500 bg-blue-500/10 text-white shadow-[0_0_10px_rgba(37,99,235,0.2)]"
                      : "border-white/10 bg-[#050505] text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  Business (Maps)
                </button>
              </div>

              {schemaType === "Person" ? (
                <div className="space-y-3.5 pt-2">
                  <div>
                    <label className="block text-xs text-white/50 mb-1">Expert Name</label>
                    <input
                      type="text"
                      className="w-full bg-[#050505] border border-white/10 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                      value={personName}
                      onChange={(e) => setPersonName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/50 mb-1">Professional Title</label>
                    <input
                      type="text"
                      className="w-full bg-[#050505] border border-white/10 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                      value={personJob}
                      onChange={(e) => setPersonJob(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/50 mb-1">Canonical Website URL</label>
                    <input
                      type="text"
                      className="w-full bg-[#050505] border border-white/10 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                      value={personUrl}
                      onChange={(e) => setPersonUrl(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/50 mb-1">LinkedIn Profile</label>
                    <input
                      type="text"
                      className="w-full bg-[#050505] border border-white/10 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                      value={personSocial}
                      onChange={(e) => setPersonSocial(e.target.value)}
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-3.5 pt-2">
                  <div>
                    <label className="block text-xs text-white/50 mb-1">Business Name</label>
                    <input
                      type="text"
                      className="w-full bg-[#050505] border border-white/10 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                      value={bizName}
                      onChange={(e) => setBizName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/50 mb-1">Physical Address / City</label>
                    <input
                      type="text"
                      className="w-full bg-[#050505] border border-white/10 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                      value={bizLoc}
                      onChange={(e) => setBizLoc(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/50 mb-1">Telephone Contact</label>
                    <input
                      type="text"
                      className="w-full bg-[#050505] border border-white/10 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                      value={bizPhone}
                      onChange={(e) => setBizPhone(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/50 mb-1">Canonical Website URL</label>
                    <input
                      type="text"
                      className="w-full bg-[#050505] border border-white/10 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                      value={personUrl}
                      onChange={(e) => setPersonUrl(e.target.value)}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Live Schema Output Preview */}
            <div className="lg:col-span-7 flex flex-col h-[350px]">
              <div className="flex items-center justify-between bg-[#050505] px-4 py-2 border border-white/10 border-b-0 rounded-t-xl">
                <div className="flex items-center gap-2">
                  <Terminal className="text-blue-400 w-4 h-4" />
                  <span className="text-xs font-mono font-bold text-white/80">Generated Schema (application/ld+json)</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopySchema}
                  className="flex items-center gap-1.5 py-1.5 px-3 rounded-full hover:bg-white/10 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-white font-mono transition-all cursor-pointer"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-blue-400" />}
                  {copied ? "Copied" : "Copy Code"}
                </button>
              </div>
              <div className="flex-1 bg-[#050505] p-4 border border-white/10 rounded-b-xl font-mono text-xs overflow-auto text-blue-400 select-all leading-relaxed">
                <pre>{generateSchemaString()}</pre>
              </div>
              <div className="mt-3 flex items-start gap-2 text-xs text-white/50">
                <Code className="text-white/30 w-4 h-4 shrink-0 mt-0.5" />
                <p>This code block can be copied directly and embedded in the <code className="text-blue-400 font-mono font-bold">&lt;head&gt;</code> of your website to help Google understand your brand authorship instantly.</p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: TECHNICAL SEO AUDIT CHECKS */}
        {activeTab === "audit" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Indexing Checklists */}
            <div className="lg:col-span-7 space-y-2.5">
              <h4 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest mb-3">
                Toggle Audit Status Points
              </h4>
              <div className="max-h-[300px] overflow-y-auto space-y-2 rounded-lg pr-2">
                {checklist.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => toggleCheck(item.id)}
                    className="flex items-center justify-between p-3 rounded-xl border border-white/10 bg-[#050505]/70 hover:bg-[#050505] transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded flex items-center justify-center transition-all ${
                        item.checked
                          ? "bg-blue-600 text-white"
                          : "border-2 border-white/25 bg-[#0A0A0A] group-hover:border-blue-500"
                      }`}>
                        {item.checked && <Check className="w-3 h-3" />}
                      </div>
                      <span className={`text-xs ${item.checked ? "text-white/40 line-through decoration-white/20" : "text-white/90"}`}>
                        {item.text}
                      </span>
                    </div>
                    <span className="text-[10px] h-fit shrink-0 font-mono text-white/40 bg-[#0A0A0A] border border-white/10 px-1.5 py-0.5 rounded uppercase">
                      {item.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Gauges */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
              <div className="bg-[#050505] p-5 rounded-xl border border-white/10 flex flex-col items-center justify-center text-center">
                <span className="text-xs font-mono text-white/50 uppercase tracking-wide">Technical Search Readiness</span>

                {/* Circular Score Visual */}
                <div className="relative flex items-center justify-center my-6">
                  <svg className="w-28 h-28 transform -rotate-90">
                    <circle
                      cx="56"
                      cy="56"
                      r="48"
                      className="stroke-white/5"
                      strokeWidth="8"
                      fill="transparent"
                    />
                    <circle
                      cx="56"
                      cy="56"
                      r="48"
                      className="stroke-blue-500 transition-all duration-500 ease-out"
                      strokeWidth="8"
                      strokeDasharray={2 * Math.PI * 48}
                      strokeDashoffset={2 * Math.PI * 48 * (1 - scorePercent / 100)}
                      fill="transparent"
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="text-3xl font-black text-white font-mono">{scorePercent}%</span>
                    <span className="text-[10px] text-white/40 font-mono tracking-tighter uppercase font-bold">Rating Score</span>
                  </div>
                </div>

                <div className={`w-full py-2 px-3 border rounded-lg text-xs font-semibold ${statusObj.color}`}>
                  {statusObj.label}
                </div>
              </div>

              <div className="bg-[#050505] border border-white/10 p-4 rounded-xl text-xs space-y-2">
                <div className="flex items-center gap-1.5 text-blue-400 font-mono font-bold">
                  <AlertTriangle className="w-3.5 h-3.5 text-blue-400" />
                  <span>Md Biplob's Crawling Pro-Tip</span>
                </div>
                <p className="text-white/60 leading-relaxed">
                  "If your Mobile Score is below 80%, Google crawlers limit your budget allocation. We routinely identify and patch rendering logs to recover up to 40% crawl velocity."
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: TOPICAL MIND MAP VISUALIZER */}
        {activeTab === "cluster" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Clusters Nav */}
            <div className="lg:col-span-4 space-y-3">
              <span className="block text-xs font-mono text-blue-400 uppercase tracking-widest font-bold">
                Select Topical Core Focus
              </span>
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => setSelectedCluster("SEO")}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex flex-col cursor-pointer ${
                    selectedCluster === "SEO"
                      ? "border-blue-500 bg-blue-500/10 text-white shadow-[0_0_12px_rgba(37,99,235,0.2)]"
                      : "border-white/10 bg-[#050505] text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="text-xs font-black font-mono uppercase">Pillar Topic: Technical SEO</span>
                  <span className="text-xs mt-1 text-white/50">7 Connected long-tail transactional pages mapping crawl metrics.</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCluster("AI")}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex flex-col cursor-pointer ${
                    selectedCluster === "AI"
                      ? "border-blue-500 bg-blue-500/10 text-white shadow-[0_0_12px_rgba(37,99,235,0.2)]"
                      : "border-white/10 bg-[#050505] text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="text-xs font-black font-mono uppercase">Pillar Topic: AI Marketing Automation</span>
                  <span className="text-xs mt-1 text-white/50">Multi-agent drafting workflows linking directly to content checks.</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCluster("Freelance")}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex flex-col cursor-pointer ${
                    selectedCluster === "Freelance"
                      ? "border-blue-500 bg-blue-500/10 text-white shadow-[0_0_12px_rgba(37,99,235,0.2)]"
                      : "border-white/10 bg-[#050505] text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="text-xs font-black font-mono uppercase">Pillar Topic: Freelancing Agency Launch</span>
                  <span className="text-xs mt-1 text-white/50">Proposal optimization maps pushing organic leads loops.</span>
                </button>
              </div>
            </div>

            {/* Interactive Graph Canvas */}
            <div className="lg:col-span-8 bg-[#050505] border border-white/10 rounded-xl p-6 min-h-[300px] flex items-center justify-center relative overflow-hidden">
              {/* Radial Connective Lines (Subtle decorative lines radiating from center) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30 select-none pointer-events-none">
                <div className="w-[180px] h-[180px] rounded-full border border-dashed border-blue-500/50 absolute" />
                <div className="w-[280px] h-[280px] rounded-full border border-dashed border-sky-500/30 absolute" />
              </div>

              {/* Central Pillar node */}
              <div className="z-10 bg-blue-600 border border-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.4)] text-white px-5 py-3 rounded-xl text-center flex flex-col items-center">
                <Sparkles className="w-4 h-4 mb-1 text-blue-200 animate-pulse" />
                <span className="text-[10px] font-mono font-bold tracking-wider text-blue-100 uppercase">Pancake Core Pillar</span>
                <span className="text-xs font-black uppercase">
                  {selectedCluster === "SEO" && "Technical SEO Hub"}
                  {selectedCluster === "AI" && "AI-Driven Growths"}
                  {selectedCluster === "Freelance" && "High-Ticket Mentoring"}
                </span>
              </div>

              {/* Cluster satellite nodes radiating around center (6 nodes) */}
              <div className="absolute inset-x-0 inset-y-0 pointer-events-none flex items-center justify-center select-none">
                {selectedCluster === "SEO" && (
                  <>
                    <div className="absolute -translate-y-20 -translate-x-32 bg-[#050505] border border-white/10 text-white/95 font-mono text-[9px] py-1 px-2.5 rounded-lg">
                      🔗 Sitemap Indexing
                    </div>
                    <div className="absolute -translate-y-24 translate-x-12 bg-[#050505] border border-white/10 text-white/95 font-mono text-[9px] py-1 px-2.5 rounded-lg">
                      🔗 Robots.txt rules
                    </div>
                    <div className="absolute translate-y-24 -translate-x-16 bg-[#050505] border border-white/10 text-white/95 font-mono text-[9px] py-1 px-2.5 rounded-lg">
                      🔗 Canonical directives
                    </div>
                    <div className="absolute translate-y-16 translate-x-28 bg-[#050505] border border-white/10 text-white/95 font-mono text-[9px] py-1 px-2.5 rounded-lg">
                      🔗 Faceted nav crawling
                    </div>
                    <div className="absolute -translate-y-4 translate-x-36 bg-[#050505] border border-blue-500/30 text-blue-400 font-mono text-[9px] py-1 px-2.5 rounded-lg">
                      💰 Local maps Audit
                    </div>
                    <div className="absolute translate-y-12 -translate-x-36 bg-[#050505] border border-white/10 text-white/95 font-mono text-[9px] py-1 px-2.5 rounded-lg">
                      🔗 XML Schema marks
                    </div>
                  </>
                )}

                {selectedCluster === "AI" && (
                  <>
                    <div className="absolute -translate-y-24 -translate-x-16 bg-[#050505] border border-white/10 text-white/95 font-mono text-[9px] py-1 px-2.5 rounded-lg">
                      🔗 Gemini Outlining
                    </div>
                    <div className="absolute -translate-y-16 translate-x-32 bg-[#050505] border border-white/10 text-white/95 font-mono text-[9px] py-1 px-2.5 rounded-lg">
                      🔗 Custom tone GPTs
                    </div>
                    <div className="absolute translate-y-20 -translate-x-28 bg-[#050505] border border-blue-500/30 text-blue-400 font-mono text-[9px] py-1 px-2.5 rounded-lg font-bold">
                      💰 Programmatic SQL
                    </div>
                    <div className="absolute translate-y-24 translate-x-16 bg-[#050505] border border-white/10 text-white/95 font-mono text-[9px] py-1 px-2.5 rounded-lg">
                      🔗 n8n Automations
                    </div>
                    <div className="absolute -translate-y-4 -translate-x-36 bg-[#050505] border border-white/10 text-white/95 font-mono text-[9px] py-1 px-2.5 rounded-lg">
                      🔗 Fact auditor loops
                    </div>
                    <div className="absolute translate-y-4 translate-x-36 bg-[#050505] border border-white/10 text-white/95 font-mono text-[9px] py-1 px-2.5 rounded-lg">
                      🔗 Semantic clusters
                    </div>
                  </>
                )}

                {selectedCluster === "Freelance" && (
                  <>
                    <div className="absolute -translate-y-20 -translate-x-28 bg-[#050505] border border-white/10 text-white/95 font-mono text-[9px] py-1 px-2.5 rounded-lg">
                      🔗 Upwork Profile SEO
                    </div>
                    <div className="absolute -translate-y-24 translate-x-24 bg-[#050505] border border-blue-500/30 text-blue-400 font-mono text-[9px] py-1 px-2.5 rounded-lg font-bold">
                      💰 $5k Retainer design
                    </div>
                    <div className="absolute translate-y-20 -translate-x-16 bg-[#050505] border border-white/10 text-white/95 font-mono text-[9px] py-1 px-2.5 rounded-lg">
                      🔗 Cold outreach script
                    </div>
                    <div className="absolute translate-y-24 translate-x-20 bg-[#050505] border border-white/10 text-white/95 font-mono text-[9px] py-1 px-2.5 rounded-lg">
                      🔗 Agency outsourcing
                    </div>
                    <div className="absolute -translate-y-4 translate-x-32 bg-[#050505] border border-white/10 text-white/95 font-mono text-[9px] py-1 px-2.5 rounded-lg">
                      🔗 Client reporting SOP
                    </div>
                    <div className="absolute translate-y-12 -translate-x-36 bg-[#050505] border border-white/10 text-white/95 font-mono text-[9px] py-1 px-2.5 rounded-lg">
                      🔗 Fiverr gig triggers
                    </div>
                  </>
                )}
              </div>

              {/* Visual Explanation Key */}
              <div className="absolute bottom-3 left-3 bg-[#050505]/95 border border-white/10 rounded-lg p-2.5 flex gap-3 text-[10px] text-white/50 font-mono z-15 select-none hover:text-white">
                <div className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 bg-blue-600 rounded-full border border-blue-400 block" />
                  <span>Pillar Core Hub</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 bg-[#050505] rounded border border-blue-500/30 block" />
                  <span>Linked Cluster Page</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: WORDPRESS ELEMENTOR EXPORT SYSTEM */}
        {activeTab === "elementor" && (() => {
          const elementorTemplatesData = [
            {
              id: "header",
              name: "Header Template (Global Navigation)",
              type: "header",
              fileSize: "14.2 KB",
              description: "Sticky dark layout with premium responsive hamburger menu, custom branding container, and direct 'Intake Audit' CTA button.",
              sections: ["Global Header Bar", "Mobile Sidebar Trigger", "Brand Identification Wrapper", "Contact CTA Button"],
              elementsCount: 16,
              wpTarget: "Header (Theme Builder)"
            },
            {
              id: "footer",
              name: "Footer Template (Information & Sitemap)",
              type: "footer",
              fileSize: "18.5 KB",
              description: "High-contrast authoritative footer layout loaded with primary site maps, legal links, email indicators, and social links.",
              sections: ["Sitemap Index Link Columns", "Corporate Brand Vision Desk", "Social Channels Drawer", "Sub-footer CCPA Strip"],
              elementsCount: 22,
              wpTarget: "Footer (Theme Builder)"
            },
            {
              id: "home",
              name: "Home Page (Full Premium Theme)",
              type: "page",
              fileSize: "68.2 KB",
              description: "Complete homepage blueprint designed according to Md Biplob's exact layout: Hero, Biography, Services, Courses, Sandbox, Resources, and Intake Form.",
              sections: ["Hero Banner Section", "EEAT Bio & Profile Desk", "Audit pricing lists", "Course Academy desk", "SEO Sandbox Labs", "Authority resource items", "Blog Active list", "Contact Intake forms"],
              elementsCount: 85,
              wpTarget: "Elementor Canvas Template (Page)"
            },
            {
              id: "services",
              name: "Services & Audit Page",
              type: "page",
              fileSize: "32.0 KB",
              description: "Complete commercial services layout holding core audit pricing packages, technical optimization desks, and dynamic FAQ loops.",
              sections: ["Commercial Price Blocks", "Technical Audit Grid", "Programmatic Desk Hub", "Audit SOP lists", "SEO FAQ Collapsibles"],
              elementsCount: 44,
              wpTarget: "Elementor Page"
            },
            {
              id: "training",
              name: "Academy & Syllabus Page",
              type: "page",
              fileSize: "28.4 KB",
              description: "Full masterclass landing page structure featuring active curriculum accordions, rating highlights, and registration buttons.",
              sections: ["Curriculum Accordion Grid", "Dynamic Student Metrics Counters", "Course Details column", "Student reviews banner", "Fast Register forms"],
              elementsCount: 38,
              wpTarget: "Elementor Page"
            },
            {
              id: "portfolio",
              name: "Portfolio Cases Page",
              type: "page",
              fileSize: "40.5 KB",
              description: "In-depth case studies showcase mapping detailed before/after performance numbers, keyword growth meters, and project descriptions.",
              sections: ["Metric Slide Highlights", "Grid Cases Archive", "Rank Tracker Progress Bar Component", "Client CTA Block"],
              elementsCount: 52,
              wpTarget: "Elementor Canvas Page"
            },
            {
              id: "resources",
              name: "Resources & Download Center",
              type: "page",
              fileSize: "26.5 KB",
              description: "Content landing hub with instant download drawers for Screaming Frog presets, checklists, and dynamic email capture forms.",
              sections: ["Strategic Catalog Downloads Grid", "Newsletter Capture Module", "Speaking engagements list", "QA Accordion list"],
              elementsCount: 32,
              wpTarget: "Elementor Page"
            },
            {
              id: "contact",
              name: "Contact & Booking Page",
              type: "page",
              fileSize: "21.6 KB",
              description: "Dual-column conversion landing section pairing a secure project intake form with an interactive booking calendar widget.",
              sections: ["Intake Form column", "Interactive Schedule Calendar", "Direct WhatsApp Line Wrapper", "Social drawer component"],
              elementsCount: 26,
              wpTarget: "Elementor Canvas Page"
            }
          ];

          const activeTemp = elementorTemplatesData.find(t => t.id === selectedTemplate) || elementorTemplatesData[2];

          const generateElementorJson = (t: typeof activeTemp) => {
            const content = t.sections.map((secName, idx) => {
              const secId = `sec_${t.id}_${idx}`;
              return {
                id: secId,
                elType: "section",
                settings: {
                  layout: "boxed",
                  background_background: "classic",
                  background_color: idx % 2 === 0 ? "#050505" : "#0A0A0A",
                  padding: {
                    top: "80",
                    bottom: "80",
                    left: "20",
                    right: "20",
                    unit: "px",
                    isLinked: false
                  },
                  border_style: idx > 0 ? "solid" : "none",
                  border_width: {
                    top: "1",
                    right: "0",
                    bottom: "0",
                    left: "0",
                    unit: "px"
                  },
                  border_color: "rgba(255,255,255,0.08)"
                },
                elements: [
                  {
                    id: `col_${secId}_main`,
                    elType: "column",
                    settings: {
                      _column_size: 100,
                      padding: {
                        top: "10",
                        bottom: "10",
                        left: "10",
                        right: "10",
                        unit: "px"
                      }
                    },
                    elements: [
                      {
                        id: `wid_${secId}_sub`,
                        elType: "widget",
                        widgetType: "heading",
                        settings: {
                          title: secName.toUpperCase(),
                          header_size: "div",
                          title_color: "#2563EB",
                          typography_font_family: "JetBrains Mono",
                          typography_font_size: { size: "11", unit: "px" },
                          typography_font_weight: "bold",
                          align: "center"
                        }
                      },
                      {
                        id: `wid_${secId}_head`,
                        elType: "widget",
                        widgetType: "heading",
                        settings: {
                          title: `${idx === 0 ? "Md Biplob Theme -" : "Technical Section -"} ${secName}`,
                          header_size: "h2",
                          title_color: "#FFFFFF",
                          typography_font_family: "Space Grotesk",
                          typography_font_size: { size: "36", unit: "px" },
                          typography_font_weight: "900",
                          align: "center"
                        }
                      },
                      {
                        id: `wid_${secId}_txt`,
                        elType: "widget",
                        widgetType: "text-editor",
                        settings: {
                          editor: `<p style="text-align: center; color: rgba(255,255,255,0.6);">This element represents the container for ${secName} generated for high-converting SEO agency and freelancing layouts. Imported cleanly with Inter & Space Grotesk typography, margins, background variables (#050505), and branding color matches.</p>`
                        }
                      },
                      {
                        id: `wid_${secId}_btn`,
                        elType: "widget",
                        widgetType: "button",
                        settings: {
                          text: "Secure Strategy Link",
                          align: "center",
                          link: {
                            url: "https://mdbiplob.com/#contact",
                            is_external: true
                          },
                          button_text_color: "#FFFFFF",
                          background_color: "#2563EB",
                          size: "medium",
                          border_radius: {
                            top: "10",
                            right: "10",
                            bottom: "10",
                            left: "10",
                            unit: "px"
                          }
                        }
                      }
                    ]
                  }
                ]
              };
            });

            return JSON.stringify({
              version: "0.4",
              title: `Md Biplob Premium Theme - ${t.name}`,
              type: t.type === "page" ? "page" : "section",
              content: content,
              page_settings: {
                template: t.type === "page" ? "elementor_header_footer" : "default",
                background_background: "classic",
                background_color: "#050505",
                post_title: t.name
              }
            }, null, 2);
          };

          const handleDownload = (t: typeof activeTemp) => {
            const jsonStr = generateElementorJson(t);
            const blob = new Blob([jsonStr], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `elementor-${t.id}-template.json`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);

            setDownloadSuccess(t.name);
            setTimeout(() => setDownloadSuccess(null), 3000);
          };

          const handleCopyCode = (t: typeof activeTemp) => {
            const jsonStr = generateElementorJson(t);
            navigator.clipboard.writeText(jsonStr);
            setTemplateCopied(true);
            setTimeout(() => setTemplateCopied(false), 2000);
          };

          const handleDownloadAllSelected = () => {
            // Sequential download of all separated files
            elementorTemplatesData.forEach((t, i) => {
              setTimeout(() => {
                const jsonStr = generateElementorJson(t);
                const blob = new Blob([jsonStr], { type: "application/json" });
                const url = URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.href = url;
                link.download = `elementor-${t.id}-template.json`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
              }, i * 350); // slight stagger to ensure browsers handle multiple downloads
            });

            setDownloadSuccess("All Separated Page Templates");
            setTimeout(() => setDownloadSuccess(null), 4000);
          };

          return (
            <div className="space-y-8 animate-fadeIn">
              {/* Top Banner Alert on Download */}
              {downloadSuccess && (
                <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-xl flex items-center justify-between font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span>Success: <strong>{downloadSuccess}</strong> Elementor JSON template generated & downloaded successfully!</span>
                  </div>
                  <span className="text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded uppercase font-bold">Index Ready</span>
                </div>
              )}

              {/* Instructions and Headline Banner */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                <div className="lg:col-span-7 bg-[#050505] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-blue-400 font-bold uppercase bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full">
                        WordPress Elementor Integration (JSON Export Area)
                      </span>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-black text-white uppercase mt-1 leading-snug">
                      WordPress Elementor Template Export Zone
                    </h4>
                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                      এই মডিউলটি সম্পূর্ণ থিমটিকে পৃথক পৃথক Elementor JSON টেমপ্লেটে রুপান্তর করে। আপনি সহজেই প্রতিটি পেজ (যেমন Home, Services, Training, Portfolio) এবং গ্লোবাল উপাদান (যেমন Header, Footer) আলাদাভাবে ডাউনলোড বা কপি করে আপনার ওয়ার্ডপ্রেস এলিমেন্টর প্যানেলে সরাসরি ইম্পোর্ট করতে পারবেন।
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2.5 pt-4 border-t border-white/5">
                    <button
                      onClick={handleDownloadAllSelected}
                      className="bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-black px-5 py-3 rounded-xl transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] flex items-center gap-2 cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download All Separated JSONs (.json)</span>
                    </button>
                    <a
                      href="#contact"
                      className="bg-[#0A0A0A] border border-white/10 hover:border-white/20 text-white/80 hover:text-white font-mono text-xs font-bold px-4 py-3 rounded-xl transition-all flex items-center gap-1"
                    >
                      <span>Get Import Support</span>
                    </a>
                  </div>
                </div>

                {/* Step-by-Step Importing Guide */}
                <div className="lg:col-span-5 bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 space-y-4 font-mono">
                  <h5 className="text-xs text-blue-400 font-black uppercase tracking-wider flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4" />
                    <span>How to Import in WordPress (কীভাবে ইম্পোর্ট করবেন)</span>
                  </h5>
                  <ol className="space-y-3 text-[11px] text-white/60 list-decimal pl-4.5 leading-relaxed">
                    <li>
                      <span className="text-white/90 font-bold">টেমপ্লেট ডাউনলোড করুন:</span> নিচে তালিকাভুক্ত টেমপ্লেটসমূহ থেকে কাঙ্ক্ষিত আইটেমটি নির্বাচন করে <strong className="text-white">"Download Template"</strong> বাটনে ক্লিক করুন।
                    </li>
                    <li>
                      <span className="text-white/90 font-bold">WordPress-এ লগইন করুন:</span> আপনার WordPress ড্যাশবোর্ডে গিয়ে বাম দিকের মেনু থেকে <strong className="text-white">Templates &gt; Saved Templates</strong>-এ যান।
                    </li>
                    <li>
                      <span className="text-white/90 font-bold">ইম্পোর্ট টেমপ্লেট:</span> উপরে থাকা <strong className="text-white">"Import Templates"</strong>-এ ক্লিক করে ডাউনলোডকৃত <strong className="font-bold text-blue-400">.json</strong> ফাইলটি সিলেক্ট করে আপলোড দিন।
                    </li>
                    <li>
                      <span className="text-white/90 font-bold">এলিমেন্টর পেজে ব্যবহার:</span> যেকোনো নতুন পেজ তৈরি করে এলিমেন্টর এডিটর চালু করুন। ফোল্ডার আইকনে ক্লিক করে <strong className="text-white">"My Templates"</strong> ট্যাব থেকে ইম্পোর্টকৃত টেমপ্লেটটি <strong className="text-white">Insert</strong> করুন।
                    </li>
                  </ol>
                </div>
              </div>

              {/* Template Items Selection grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Catalog on Left */}
                <div className="lg:col-span-4 space-y-3">
                  <span className="block text-xs font-mono text-white/40 uppercase tracking-widest font-bold">
                    Separated JSON Catalog Files
                  </span>
                  <div className="space-y-2 max-h-[480px] overflow-y-auto pr-2 custom-scrollbar">
                    {elementorTemplatesData.map((t) => {
                      const isSelected = selectedTemplate === t.id;
                      return (
                        <div
                          key={t.id}
                          onClick={() => { setSelectedTemplate(t.id); setViewJsonMode(false); }}
                          className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex justify-between items-center ${
                            isSelected
                              ? "border-blue-500 bg-blue-500/10 shadow-[0_0_15px_rgba(37,99,235,0.08)]"
                              : "border-white/10 bg-[#050505] hover:bg-white/5"
                          }`}
                        >
                          <div className="space-y-1">
                            <span className="text-[9px] font-mono font-bold text-blue-400 bg-blue-500/5 px-2 py-0.5 rounded">
                              {t.type.toUpperCase()} SPEC
                            </span>
                            <h4 className="text-xs sm:text-xs font-black text-white mt-1 uppercase">
                              {t.name}
                            </h4>
                            <p className="text-[10px] text-white/50 font-mono">
                              Size: {t.fileSize} • Widgets: {t.elementsCount}
                            </p>
                          </div>
                          <span className={`text-[10px] font-mono px-2 py-1 rounded shrink-0 ${
                            isSelected ? "bg-blue-600 text-white" : "bg-white/5 text-white/40"
                          }`}>
                            SELECT
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Inspect Details Workspace on Right */}
                <div className="lg:col-span-8 bg-[#050505] border border-white/10 rounded-2xl overflow-hidden flex flex-col min-h-[480px]">
                  {/* Workspace Panel bar */}
                  <div className="bg-[#0A0A0A] border-b border-white/10 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-mono text-blue-400 block font-bold">
                        Template ID: {activeTemp.id} ({activeTemp.wpTarget})
                      </span>
                      <h4 className="text-md font-black text-white uppercase mt-0.5">
                        {activeTemp.name}
                      </h4>
                    </div>

                    {/* Mode Toggle Switcher */}
                    <div className="flex bg-white/5 p-1 rounded-lg border border-white/10 font-mono text-[9px] self-start sm:self-auto">
                      <button
                        onClick={() => setViewJsonMode(false)}
                        className={`px-3 py-1.5 rounded-md font-bold uppercase transition-all cursor-pointer ${
                          !viewJsonMode ? "bg-blue-600 text-white shadow-[0_0_8px_rgba(37,99,235,0.3)]" : "text-white/50 hover:text-white"
                        }`}
                      >
                        Visual Map
                      </button>
                      <button
                        onClick={() => setViewJsonMode(true)}
                        className={`px-3 py-1.5 rounded-md font-bold uppercase transition-all cursor-pointer ${
                          viewJsonMode ? "bg-blue-600 text-white shadow-[0_0_8px_rgba(37,99,235,0.3)]" : "text-white/50 hover:text-white"
                        }`}
                      >
                        Raw JSON Code
                      </button>
                    </div>
                  </div>

                  {/* Panel view body */}
                  <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <p className="text-white/70 text-xs sm:text-sm leading-relaxed italic border-l-2 border-blue-500 pl-3">
                        "{activeTemp.description}"
                      </p>

                      {!viewJsonMode ? (
                        <div className="space-y-3">
                          <span className="block text-[10px] font-mono text-white/40 uppercase tracking-widest font-bold">
                            Internal Container Structure Map
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-[10px]">
                            {activeTemp.sections.map((secName, index) => (
                              <div
                                key={index}
                                className="bg-[#0A0A0A] border border-white/5 rounded-xl p-3 flex items-start gap-2.5 hover:border-blue-500/20 transition-all"
                              >
                                <span className="w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold shrink-0 mt-0.5">
                                  {index + 1}
                                </span>
                                <div className="space-y-0.5">
                                  <h5 className="font-bold text-white uppercase">{secName}</h5>
                                  <p className="text-[8px] text-white/30 uppercase tracking-tight">Classic Row Layout • Full Width padding</p>
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="bg-blue-500/5 border border-blue-500/10 rounded-xl p-3 text-[11px] text-blue-300 font-mono flex items-start gap-2.5">
                            <span className="text-blue-400">⚡</span>
                            <span>This template holds the raw JSON data to reconstruct the <strong>{activeTemp.wpTarget}</strong> element. On import, Elementor maps this automatically!</span>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-2 text-left">
                          <div className="flex justify-between items-center text-[10px] font-mono text-white/40">
                            <span>JSON SCHEMA REPRESENTATION (VALID ENCODED UTF-8)</span>
                            <button
                              onClick={() => handleCopyCode(activeTemp)}
                              className="text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors cursor-pointer"
                            >
                              {templateCopied ? (
                                <>
                                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                                  <span className="text-emerald-400 font-black">COPIED</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3.5 h-3.5" />
                                  <span>COPY CODE</span>
                                </>
                              )}
                            </button>
                          </div>
                          <div className="relative bg-[#0A0A0A] border border-white/10 rounded-xl max-h-[220px] overflow-y-auto p-4">
                            <pre className="text-[10px] text-white/80 font-mono whitespace-pre-wrap leading-relaxed overflow-x-hidden">
                              {generateElementorJson(activeTemp)}
                            </pre>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Footer Buttons download and copy */}
                    <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
                      <button
                        onClick={() => handleDownload(activeTemp)}
                        className="bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-black px-5 py-3 rounded-xl transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] flex items-center gap-2 cursor-pointer"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download {activeTemp.name} JSON</span>
                      </button>

                      <button
                        onClick={() => handleCopyCode(activeTemp)}
                        className="bg-[#0A0A0A] border border-white/10 hover:border-white/20 text-white/80 hover:text-white font-mono text-xs font-bold px-4 py-3 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
                      >
                        {templateCopied ? (
                          <>
                            <Check className="w-4 h-4 text-emerald-400" />
                            <span className="text-emerald-400">Copied Template</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 text-blue-400" />
                            <span>Copy Raw JSON</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
}
