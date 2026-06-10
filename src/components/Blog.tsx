import { useState } from "react";
import { BookOpen, Calendar, Clock, ChevronRight, Share2, Sparkles, HelpCircle } from "lucide-react";
import { blogPosts, blogClusterMap } from "../data";

export default function Blog() {
  const [selectedCluster, setSelectedCluster] = useState<string>("SEO");
  const [readingPostId, setReadingPostId] = useState<string | null>("bp-topical-authority");

  const clustersList = ["SEO", "AI Marketing", "Freelancing", "Digital Marketing", "Personal Branding"];

  const filteredPosts = blogPosts.filter((bp) => {
    // Treat AI Marketing / AI and other matches cleanly
    if (selectedCluster === "AI Marketing") return bp.cluster === "AI Marketing";
    return bp.cluster === selectedCluster;
  });

  const activeReadingPost = blogPosts.find((bp) => bp.id === readingPostId);

  return (
    <section id="blog" className="py-20 bg-[#050505] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-black text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20">
            Knowledge Base & Cluster Maps
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tighter uppercase mt-3">
            Topical Authority Center
          </h2>
          <p className="text-white/60 text-sm mt-3 leading-relaxed">
            Explore highly structured content clusters mapping specific keyword hierarchies, design frameworks, and search engine directives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Cluster Maps Sidebar Left */}
          <div className="lg:col-span-4 space-y-4">
            <span className="block text-xs font-mono text-white/40 uppercase tracking-widest">
              Cluster Hierarchy Map
            </span>

            {/* In-view Cluster visual map stack */}
            <div className="bg-[#0A0A0A] border border-white/10 p-5 rounded-2xl space-y-4">
              {blogClusterMap.map((map, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedCluster(map.cluster === "AI" ? "AI Marketing" : map.cluster)}
                  className={`p-3 rounded-xl border transition-all cursor-pointer ${
                    (selectedCluster === "AI Marketing" && map.cluster === "AI") || selectedCluster === map.cluster
                      ? "border-blue-500 bg-blue-500/10 shadow-[0_0_10px_rgba(37,99,235,0.06)]"
                      : "border-white/10 bg-[#050505] hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500 block" />
                    <span className="text-xs font-bold text-white uppercase font-mono">{map.cluster} Cluster</span>
                  </div>
                  <div className="text-[10px] text-white/40 font-mono italic mt-1.5 line-clamp-1">
                    Pillar: {map.pillar}
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {map.subTopics.slice(0, 3).map((sub, j) => (
                      <span key={j} className="text-[9px] font-mono text-white/40 bg-[#0A0A0A] border border-white/10 px-1.5 py-0.5 rounded">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* List of articles under cluster */}
            <div className="space-y-2.5">
              <span className="block text-xs font-mono text-white/40 uppercase tracking-widest mt-6">
                Cluster Articles ({selectedCluster})
              </span>
              {filteredPosts.length === 0 ? (
                <div className="p-5 text-center text-xs text-white/40 bg-white/5 border border-white/10 rounded-xl">
                  Additional manuals are currently queuing for indexing.
                </div>
              ) : (
                filteredPosts.map((post) => (
                  <div
                    key={post.id}
                    onClick={() => setReadingPostId(post.id)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer text-left ${
                      readingPostId === post.id
                        ? "border-blue-500 bg-blue-500/10 text-white shadow-[0_0_12px_rgba(37,99,235,0.1)] font-bold"
                        : "border-white/10 bg-[#050505] text-white/60 hover:text-white cursor-pointer hover:border-white/20"
                    }`}
                  >
                    <span className="text-[9px] font-mono text-blue-400 font-bold uppercase tracking-wider">{post.subTopic}</span>
                    <h4 className="text-xs font-bold uppercase text-white mt-1 leading-snug line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-[11px] text-white/60 mt-2 line-clamp-2 leading-relaxed">
                      {post.summary}
                    </p>
                    <div className="flex items-center gap-3 pt-3 mt-3 border-t border-white/5 text-[10px] text-white/40 font-mono">
                      <span>{post.publishDate}</span>
                      <span>• {post.readTime}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Active Reading Guide on Right */}
          <div className="lg:col-span-8 bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 min-h-[500px]">
            {activeReadingPost ? (
              <div className="space-y-6">
                {/* Meta details */}
                <div className="border-b border-white/10 pb-5">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-blue-400 uppercase font-black">
                    <span>{activeReadingPost.cluster} cluster</span>
                    <span>•</span>
                    <span>Topic sub-cluster: {activeReadingPost.subTopic}</span>
                  </div>

                  <h3 className="text-xl sm:text-3xl font-black text-white uppercase mt-2.5 leading-tight tracking-tight">
                    {activeReadingPost.title}
                  </h3>

                  <div className="flex items-center gap-4 text-xs text-white/50 font-mono mt-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      <span>{activeReadingPost.publishDate}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue-400" />
                      <span>{activeReadingPost.readTime}</span>
                    </span>
                    <span className="text-[10px] font-bold text-emerald-400 uppercase bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full font-mono">
                      EEAT Verified Review
                    </span>
                  </div>
                </div>

                {/* Guide Body */}
                <div className="space-y-4 text-white/85 text-sm leading-relaxed font-sans">
                  {activeReadingPost.body.map((para, i) => (
                    <p key={i} className="text-white/85">
                      {para}
                    </p>
                  ))}
                </div>

                {/* FAQ block Accordion loops if present */}
                {activeReadingPost.faqs && activeReadingPost.faqs.length > 0 && (
                  <div className="pt-6 border-t border-white/10 space-y-4">
                    <h4 className="text-xs uppercase font-mono text-blue-400 font-bold tracking-wider">
                      Technical audit FAQs on this guide
                    </h4>
                    <div className="space-y-3">
                      {activeReadingPost.faqs.map((faq, i) => (
                        <div key={i} className="p-4 bg-[#050505] border border-white/10 rounded-xl space-y-1.5">
                          <h5 className="text-xs font-bold text-white flex items-center gap-1.5 uppercase">
                            <HelpCircle className="w-4 h-4 text-blue-400 shrink-0" />
                            <span>{faq.question}</span>
                          </h5>
                          <p className="text-white/70 text-xs leading-relaxed pl-5">
                            {faq.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Keywords cluster metrics footer inside reading post */}
                <div className="p-4 bg-[#050505] rounded-xl border border-white/10 space-y-2">
                  <span className="text-[10px] font-mono text-blue-400 font-black uppercase tracking-widest">
                    Semantic Keyword mapping Signals
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeReadingPost.keywords.map((kw, i) => (
                      <span key={i} className="text-[10px] font-mono text-white/60 bg-[#0A0A0A] border border-white/10 px-2.5 py-1 rounded-full">
                        #{kw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center p-12">
                <BookOpen className="w-8 h-8 text-white/30 mb-2 animate-bounce" />
                <h4 className="text-xs font-mono text-white/40 uppercase font-bold">Select an article is required</h4>
                <p className="text-white/30 text-xs mt-1">Please select an article from the left cluster sidebar directory to begin reading.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
