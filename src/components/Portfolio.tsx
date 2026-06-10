import { useState } from "react";
import { FolderGit2, BarChart2, CheckSquare, TrendingUp, ChevronDown, ChevronUp } from "lucide-react";
import { caseStudies } from "../data";

interface CaseStudyChartProps {
  data: { name: string; Traffic: number; Leads: number }[];
}

function CaseStudyResponsiveChart({ data }: CaseStudyChartProps) {
  // We draw a gorgeous, responsive, standalone SVG Area Chart
  const svgWidth = 500;
  const svgHeight = 200;
  const paddingX = 40;
  const paddingY = 25;

  const maxVal = Math.max(...data.map((d) => d.Traffic)) || 100;
  const minVal = 0;

  // Compute coordinate points
  const points = data.map((d, index) => {
    const x = paddingX + (index / (data.length - 1)) * (svgWidth - paddingX * 2);
    const y = svgHeight - paddingY - ((d.Traffic - minVal) / (maxVal - minVal)) * (svgHeight - paddingY * 2);
    return { x, y, name: d.name, val: d.Traffic };
  });

  const pathD = points.reduce((acc, p, i) => {
    return i === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`;
  }, "");

  const areaD = `${pathD} L ${points[points.length - 1]?.x || 0} ${svgHeight - paddingY} L ${points[0]?.x || 0} ${svgHeight - paddingY} Z`;

  return (
    <div className="bg-[#050505] p-var-p border border-white/10 rounded-xl space-y-2">
      <div className="flex items-center justify-between text-[11px] font-mono text-white/50">
        <span className="flex items-center gap-1">
          <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
          <span>SEO Traffic Compound Curve (k/Mo)</span>
        </span>
        <span className="text-white font-bold">{maxVal}k Max Peak</span>
      </div>

      <div className="relative w-full overflow-x-auto">
        <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-auto min-w-[340px]">
          {/* Custom Gradients */}
          <defs>
            <linearGradient id="areaGradient" x1="0" y1="y" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Grid Lines */}
          <line x1={paddingX} y1={paddingY} x2={svgWidth - paddingX} y2={paddingY} stroke="rgba(255,255,255,0.05)" strokeDasharray="3" />
          <line x1={paddingX} y1={(svgHeight - paddingY) / 2 + 5} x2={svgWidth - paddingX} y2={(svgHeight - paddingY) / 2 + 5} stroke="rgba(255,255,255,0.05)" strokeDasharray="3" />
          <line x1={paddingX} y1={svgHeight - paddingY} x2={svgWidth - paddingX} y2={svgHeight - paddingY} stroke="rgba(255,255,255,0.15)" />

          {/* Fill Area */}
          {points.length > 0 && <path d={areaD} fill="url(#areaGradient)" />}

          {/* Line Path */}
          {points.length > 0 && <path d={pathD} fill="none" stroke="#3b82f6" strokeWidth="2.5" />}

          {/* Data Nodes */}
          {points.map((p, i) => (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r="4.5"
              fill="#3b82f6"
              stroke="#050505"
              strokeWidth="2"
              className="cursor-pointer hover:r-6"
            />
          ))}

          {/* Horizontal X Axes */}
          {points.map((p, i) => (
            <text
              key={i}
              x={p.x}
              y={svgHeight - 10}
              fontSize="9"
              fontFamily="monospace"
              fill="rgba(255,255,255,0.4)"
              textAnchor="middle"
            >
              M{i + 1}
            </text>
          ))}
        </svg>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [selectedCat, setSelectedCat] = useState<string>("ALL");
  const [expandedId, setExpandedId] = useState<string | null>("cs-medcare");

  const categories = [
    { label: "ALL METRICS", id: "ALL" },
    { label: "SEO OUTCOMES", id: "SEO" },
    { label: "LOCAL TRAFFIC", id: "Local SEO" },
    { label: "PERSONAL BRAND", id: "Personal Branding" },
    { label: "CAMPAIGNS", id: "Digital Marketing" },
    { label: "PLATFORMS SCALE", id: "Website Growth" }
  ];

  const filteredStudies = selectedCat === "ALL"
    ? caseStudies
    : caseStudies.filter((cs) => cs.category === selectedCat);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="portfolio" className="py-20 bg-[#050505] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono font-black text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20">
            Audited Results & Case Studies
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tighter uppercase mt-3">
            Search Domination Portfolio
          </h2>
          <p className="text-white/60 text-sm mt-3 leading-relaxed">
            Real, certified statistics documenting organic search loops, programmatic traffic gains, and qualified pipeline scale.
          </p>
        </div>

        {/* Filter Navigation Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-12 bg-[#0A0A0A] border border-white/10 p-1 rounded-full max-w-2xl mx-auto">
          {categories.map((cat) => (
            <button
              type="button"
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              className={`px-4 py-2.5 rounded-full text-xs font-bold font-mono tracking-wide uppercase transition-all cursor-pointer ${
                selectedCat === cat.id
                  ? "bg-blue-600 text-white shadow-[0_0_12px_rgba(37,99,235,0.4)]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Active Studies dynamic stacking */}
        {filteredStudies.length === 0 ? (
          <div className="text-center py-12 bg-[#0A0A0A] rounded-2xl border border-white/10">
            <FolderGit2 className="w-8 h-8 text-white/30 mx-auto" />
            <h4 className="text-xs font-mono text-white/50 mt-2 font-bold uppercase tracking-wider">
              No matching case studies
            </h4>
            <p className="text-white/30 text-xs mt-1">We are actively preparing case templates for this classification.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredStudies.map((cs) => {
              const isExpanded = expandedId === cs.id;
              return (
                <div
                  key={cs.id}
                  className="bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/40 hover:shadow-[0_0_20px_rgba(37,99,235,0.1)] transition-all"
                >
                  {/* Summary row trigger */}
                  <div
                    onClick={() => toggleExpand(cs.id)}
                    className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer select-none hover:bg-white/5"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20">
                          {cs.category} Solution
                        </span>
                        <span className="text-xs text-white/40">• {cs.clientType}</span>
                      </div>
                      <h3 className="text-md sm:text-xl font-black text-white mt-1.5 uppercase">
                        {cs.title}
                      </h3>
                      <p className="text-white/60 text-xs mt-1">Brand partner: {cs.client}</p>
                    </div>

                    {/* Stat indices */}
                    <div className="flex flex-wrap items-center gap-6">
                      {cs.growthMetrics.slice(0, 2).map((m, idx) => (
                        <div key={idx} className="bg-[#050505] p-2.5 px-4 border border-white/10 rounded-xl text-right">
                          <span className="text-xs font-mono text-blue-400 font-extrabold">{m.value}</span>
                          <span className="block text-[9px] font-mono text-white/40 uppercase tracking-tighter mt-0.5">{m.label}</span>
                        </div>
                      ))}
                      <div>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-white/50 block" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-white/50 block" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Fully expanded inner metrics details */}
                  {isExpanded && (
                    <div className="border-t border-white/10 p-6 sm:p-8 bg-[#050505] space-y-8 animate-fadeIn md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                      {/* Left: textual story */}
                      <div className="md:col-span-7 space-y-6">
                        <div>
                          <h4 className="text-xs uppercase font-mono text-blue-400 tracking-wider">The Problem Analysis</h4>
                          <p className="text-white/80 text-xs leading-relaxed mt-1.5">{cs.problem}</p>
                        </div>

                        {/* Strategy map */}
                        <div>
                          <h4 className="text-xs uppercase font-mono text-blue-400 tracking-wider">High Level Strategy</h4>
                          <div className="space-y-2 mt-2">
                            {cs.strategy.map((str, idx) => (
                              <div key={idx} className="flex gap-2 text-xs text-white/80 leading-relaxed">
                                <span className="w-5 h-5 rounded-md bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 font-bold font-mono">
                                  {idx + 1}
                                </span>
                                <span>{str}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Results */}
                        <div>
                          <h4 className="text-xs uppercase font-mono text-emerald-400 tracking-wider">Tangible Business Gains</h4>
                          <ul className="space-y-1.5 mt-2 list-disc pl-4 text-xs text-white/70 leading-relaxed">
                            {cs.results.map((res, idx) => (
                              <li key={idx}>{res}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right: graphs & KPI metrics detail */}
                      <div className="md:col-span-5 space-y-5">
                        {/* Chart component */}
                        <CaseStudyResponsiveChart data={cs.chartData} />

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-1 gap-2.5">
                          {cs.growthMetrics.map((m, idx) => (
                            <div
                              key={idx}
                              className="p-3 bg-[#0A0A0A] border border-white/10 rounded-xl flex items-center justify-between"
                            >
                              <div className="space-y-0.5">
                                <span className="text-[10px] font-mono text-white/40 uppercase tracking-wide">{m.label}</span>
                                <span className="block text-xs font-mono text-white/50 italic">Delta shift: {m.trend}</span>
                              </div>
                              <span className="text-sm font-black text-blue-400 font-mono bg-blue-500/10 px-3 py-1 border border-blue-500/20 rounded-full">
                                {m.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
