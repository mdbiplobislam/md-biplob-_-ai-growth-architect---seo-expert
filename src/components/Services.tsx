import { useState } from "react";
import { Search, TrendingUp, Cpu, Award, CheckCircle, ArrowUpRight, BarChart2, ShieldAlert } from "lucide-react";
import { serviceHub } from "../data";

interface ServicesProps {
  onCtaclick: (sec: string) => void;
}

export default function Services({ onCtaclick }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState<string>("seo");

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Search":
        return <Search className="w-5 h-5 text-blue-400" />;
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5 text-blue-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-blue-400" />;
      case "Award":
        return <Award className="w-5 h-5 text-blue-400" />;
      default:
        return <Search className="w-5 h-5 text-blue-400" />;
    }
  };

  const selectedCategoryData = serviceHub.find((cat) => cat.id === activeCategory);

  return (
    <section id="services" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="inline-block px-3 py-1 mb-4 border border-blue-500/30 bg-blue-500/5 rounded-md">
              <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em]">Growth Delivery Engine</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tighter uppercase mt-2">
              Elite Services Hub
            </h2>
            <p className="text-white/60 text-sm mt-3 leading-relaxed">
              We replace legacy guesswork with rigid semantic algorithms and AI-powered scalability pipelines.
            </p>
          </div>

          {/* Quick Hub Trigger Tabs */}
          <div className="flex flex-wrap bg-white/5 border border-white/10 p-1 rounded-full self-start lg:self-auto max-w-full">
            {serviceHub.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[10px] font-bold uppercase font-mono tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.45)]"
                    : "text-white/65 hover:text-white"
                }`}
              >
                {getCategoryIcon(cat.icon)}
                <span>{cat.title.split(" ")[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Hub Render Area */}
        {selectedCategoryData && (
          <div className="space-y-12">
            {/* Category summary description */}
            <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-1 max-w-xl">
                <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-blue-400 font-bold">
                  Category Focus Core
                </span>
                <h3 className="text-xl font-black text-white uppercase mt-1">{selectedCategoryData.title}</h3>
                <p className="text-white/60 text-xs leading-relaxed mt-1">{selectedCategoryData.description}</p>
              </div>

              <button
                onClick={() => onCtaclick("contact")}
                className="shrink-0 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold font-mono text-[10px] uppercase tracking-wider rounded-full transition-all flex items-center gap-1.5 self-start md:self-auto"
              >
                <span>Request {selectedCategoryData.title.split(" ")[0]} Proposal</span>
                <ArrowUpRight className="w-4 h-4 text-blue-400" />
              </button>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedCategoryData.services.map((svc) => (
                <div
                  key={svc.id}
                  className="flex flex-col justify-between bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all group"
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div>
                      <span className="text-[9px] font-mono font-bold text-white/40 uppercase tracking-widest block mb-1">
                        Rundown Period: {svc.duration}
                      </span>
                      <h4 className="text-md font-black text-white group-hover:text-blue-400 transition-colors uppercase leading-snug">
                        {svc.title}
                      </h4>
                      <p className="text-white/60 text-[11px] leading-relaxed mt-2">{svc.shortDesc}</p>
                    </div>

                    {/* Deliverables List */}
                    <div className="space-y-2 pt-3 border-t border-white/5">
                      <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-blue-400 font-bold block">
                        Core Deliverables
                      </span>
                      <div className="space-y-1.5">
                        {svc.deliverables.map((del, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-xs text-white/75">
                            <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* KPIs Met */}
                    <div className="space-y-2 pb-2">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-white/50 font-bold flex items-center gap-1">
                        <BarChart2 className="w-3.5 h-3.5 text-blue-400" />
                        <span>KPI Metrics Tracked</span>
                      </span>
                      <p className="text-white/80 text-[11px] italic font-mono pl-4 leading-relaxed">
                        {svc.kpis.join(" • ")}
                      </p>
                    </div>
                  </div>

                  {/* Call Action Link */}
                  <div className="pt-4 border-t border-white/5 mt-6 flex items-center justify-between">
                    <span className="text-[11px] text-white/40 font-mono">Professional Consulting</span>
                    <button
                      onClick={() => onCtaclick("contact")}
                      className="text-xs font-bold text-white hover:text-blue-400 transition-colors flex items-center gap-1"
                    >
                      <span className="underline uppercase tracking-wider font-mono text-[10px]">Book Call</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" />
                    </button>
                  </div>
                </div>
              ))}

              {/* Injected placeholders to fulfill specific list request */}
              {activeCategory === "seo" && (
                <div className="bg-[#0A0A0A]/30 border border-dashed border-white/10 p-6 rounded-2xl flex flex-col justify-between">
                  <div className="space-y-3">
                    <ShieldAlert className="w-5 h-5 text-blue-400" />
                    <h5 className="text-xs font-bold text-white uppercase mt-2">Additional SEO modules</h5>
                    <p className="text-white/60 text-[11px] leading-relaxed">
                      We also administer Keyword Research, eCommerce index maps, technical audits (75 points), and ongoing consulting contracts.
                    </p>
                  </div>
                  <button
                    onClick={() => onCtaclick("contact")}
                    className="mt-6 text-xs font-bold text-blue-400 hover:underline text-left cursor-pointer uppercase tracking-wider font-mono text-[10px]"
                  >
                    Discuss Full SEO Package
                  </button>
                </div>
              )}

              {activeCategory === "digital-marketing" && (
                <div className="bg-[#0A0A0A]/30 border border-dashed border-white/10 p-6 rounded-2xl flex flex-col justify-between">
                  <div className="space-y-3">
                    <ShieldAlert className="w-5 h-5 text-blue-400" />
                    <h5 className="text-xs font-bold text-white uppercase mt-2">Extended Campaign Suite</h5>
                    <p className="text-white/60 text-[11px] leading-relaxed">
                      Includes Content Marketing, Social Media Marketing, PPC Performance Ads, and CRM Marketing Automation.
                    </p>
                  </div>
                  <button
                    onClick={() => onCtaclick("contact")}
                    className="mt-6 text-xs font-bold text-blue-400 hover:underline text-left cursor-pointer uppercase tracking-wider font-mono text-[10px]"
                  >
                    Discuss Performance Ads
                  </button>
                </div>
              )}

              {activeCategory === "ai-marketing" && (
                <div className="bg-[#0A0A0A]/30 border border-dashed border-white/10 p-6 rounded-2xl flex flex-col justify-between">
                  <div className="space-y-3">
                    <ShieldAlert className="w-5 h-5 text-blue-400" />
                    <h5 className="text-xs font-bold text-white uppercase mt-2">Workflow Auditing Services</h5>
                    <p className="text-white/60 text-[11px] leading-relaxed">
                      We design custom LLM-GPT templates, programmatic category lists, and automated sitemap publication scripts.
                    </p>
                  </div>
                  <button
                    onClick={() => onCtaclick("contact")}
                    className="mt-6 text-xs font-bold text-blue-400 hover:underline text-left cursor-pointer uppercase tracking-wider font-mono text-[10px]"
                  >
                    Discuss AI Automation
                  </button>
                </div>
              )}

              {activeCategory === "personal-branding" && (
                <div className="bg-[#0A0A0A]/30 border border-dashed border-white/10 p-6 rounded-2xl flex flex-col justify-between">
                  <div className="space-y-3">
                    <ShieldAlert className="w-5 h-5 text-blue-400" />
                    <h5 className="text-xs font-bold text-white uppercase mt-2">Executive Authority Engine</h5>
                    <p className="text-white/60 text-[11px] leading-relaxed">
                      Tailored support for LinkedIn Optimization, Personal Brand Strategy, and active Thought Leadership Development.
                    </p>
                  </div>
                  <button
                    onClick={() => onCtaclick("contact")}
                    className="mt-6 text-xs font-bold text-blue-400 hover:underline text-left cursor-pointer uppercase tracking-wider font-mono text-[10px]"
                  >
                    Discuss Personal Brand
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
