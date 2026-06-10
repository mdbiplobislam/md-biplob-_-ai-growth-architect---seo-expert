import { useState } from "react";
import { Terminal, FolderOpen, ChevronRight, FileText, CheckCircle } from "lucide-react";

export default function SitemapXml() {
  const [xmlType, setXmlType] = useState<"visual" | "xml">("visual");

  const sitemapUrls = [
    { loc: "https://mdbiplob.com/", priority: "1.0", changefreq: "daily", category: "Core" },
    { loc: "https://mdbiplob.com/#about", priority: "0.8", changefreq: "weekly", category: "Core" },
    { loc: "https://mdbiplob.com/#services", priority: "0.9", changefreq: "weekly", category: "Services" },
    { loc: "https://mdbiplob.com/#services/technical-seo", priority: "0.9", changefreq: "weekly", category: "Services" },
    { loc: "https://mdbiplob.com/#services/ecommerce-seo", priority: "0.8", changefreq: "weekly", category: "Services" },
    { loc: "https://mdbiplob.com/#services/ai-seo-workflows", priority: "0.9", changefreq: "weekly", category: "Services" },
    { loc: "https://mdbiplob.com/#training", priority: "0.9", changefreq: "weekly", category: "Academic" },
    { loc: "https://mdbiplob.com/#training/seo-blueprint", priority: "0.9", changefreq: "weekly", category: "Academic" },
    { loc: "https://mdbiplob.com/#case-studies", priority: "0.8", changefreq: "weekly", category: "Trust" },
    { loc: "https://mdbiplob.com/#resources", priority: "0.8", changefreq: "daily", category: "LeadMagnet" },
    { loc: "https://mdbiplob.com/#blog", priority: "0.8", changefreq: "daily", category: "Publications" }
  ];

  const generateXmlString = () => {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
    sitemapUrls.forEach((url) => {
      xml += `  <url>\n    <loc>${url.loc}</loc>\n    <changefreq>${url.changefreq}</changefreq>\n    <priority>${url.priority}</priority>\n  </url>\n`;
    });
    xml += `</urlset>`;
    return xml;
  };

  return (
    <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden shadow-xl mt-8">
      {/* Header */}
      <div className="bg-[#050505] p-6 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
            <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest">
              Live crawler map
            </span>
          </div>
          <h4 className="text-lg font-black text-white mt-1 uppercase tracking-tight">MD Biplob's SEO XML Sitemap Analyzer</h4>
          <p className="text-white/60 text-xs mt-0.5">Automated visual hierarchy mapping and crawl signals.</p>
        </div>

        {/* Selector Buttons */}
        <div className="flex bg-white/5 p-1 rounded-full border border-white/10 self-start sm:self-auto">
          <button
            onClick={() => setXmlType("visual")}
            className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              xmlType === "visual"
                ? "bg-blue-600 text-white shadow-[0_0_12px_rgba(37,99,235,0.4)]"
                : "text-white/60 hover:text-white"
            }`}
          >
            Visual Taxonomy
          </button>
          <button
            onClick={() => setXmlType("xml")}
            className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
              xmlType === "xml"
                ? "bg-blue-600 text-white shadow-[0_0_12px_rgba(37,99,235,0.4)]"
                : "text-white/60 hover:text-white"
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            view XML Output
          </button>
        </div>
      </div>

      <div className="p-6">
        {xmlType === "visual" ? (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Folder taxonomy map on left */}
            <div className="md:col-span-5 bg-[#050505] border border-white/10 rounded-xl p-4 font-mono text-xs text-white/80 space-y-3.5">
              <div className="flex items-center gap-2 text-blue-400 border-b border-white/5 pb-2">
                <FolderOpen className="w-4 h-4 text-blue-400" />
                <span className="font-bold">mdbiplob.com/ (ROOT)</span>
              </div>
              <div className="pl-3 space-y-2.5">
                <div className="flex items-center gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-white/20" />
                  <FileText className="w-3.5 h-3.5 text-white/40" />
                  <span>index.html / (Core Landing)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-white/20" />
                  <FolderOpen className="w-3.5 h-3.5 text-blue-500" />
                  <span className="text-blue-400">services/ (Solutions)</span>
                </div>
                <div className="pl-6 space-y-2 text-white/50">
                  <div>├─ technical-seo</div>
                  <div>├─ ecommerce-seo</div>
                  <div>├─ local-seo</div>
                  <div>└─ ai-marketing-workflows</div>
                </div>
                <div className="flex items-center gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-white/20" />
                  <FolderOpen className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-400">training/ (Academy)</span>
                </div>
                <div className="pl-6 space-y-1 text-white/50">
                  <div>├─ technical-seo-mastery</div>
                  <div>├─ ai-specialist-certification</div>
                  <div>└─ high-ticket-academy</div>
                </div>
                <div className="flex items-center gap-2 text-white/40">
                  <ChevronRight className="w-3.5 h-3.5 text-white/20" />
                  <FileText className="w-3.5 h-3.5 text-white/30" />
                  <span>sitemap.xml (Current Map)</span>
                </div>
              </div>
            </div>

            {/* URL Status indicators on right */}
            <div className="md:col-span-7">
              <div className="border border-white/10 rounded-xl overflow-hidden bg-[#050505]">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#050505] border-b border-white/10 text-[10px] font-mono text-white/40 uppercase tracking-wider">
                      <th className="p-3">Index Path URL</th>
                      <th className="p-3">Priority</th>
                      <th className="p-3">Frequency</th>
                      <th className="p-3 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-[11px] font-mono text-white/80">
                    {sitemapUrls.map((url, index) => (
                      <tr key={index} className="hover:bg-white/5 transition-colors">
                        <td className="p-3 select-all truncate max-w-[200px]" title={url.loc}>
                          {url.loc.replace("https://mdbiplob.com", "") || "/ (Home)"}
                        </td>
                        <td className="p-3 text-white/40">{url.priority}</td>
                        <td className="p-3 text-white/40">{url.changefreq}</td>
                        <td className="p-3 text-right text-emerald-400 font-bold">
                          <span className="inline-flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded">
                            <CheckCircle className="w-2.5 h-2.5" />
                            200 OK
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative">
            <div className="absolute top-3 right-3 bg-[#050505] px-2 py-1 rounded border border-white/10 text-[10px] font-mono text-white/40">
              Content-Type: application/xml
            </div>
            <pre className="bg-[#050505] p-4 border border-white/10 rounded-xl font-mono text-xs overflow-auto text-blue-400 leading-relaxed max-h-[320px]">
              {generateXmlString()}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
