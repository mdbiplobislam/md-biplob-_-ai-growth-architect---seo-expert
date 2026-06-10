import { useState, FormEvent } from "react";
import { Download, FileDown, CheckCircle, RefreshCw, Star, ArrowRight, ShieldCheck } from "lucide-react";
import { freeResources } from "../data";

export default function Resources() {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadedList, setDownloadedList] = useState<string[]>([]);
  const [leadMail, setLeadMail] = useState("");
  const [leadSuccess, setLeadSuccess] = useState(false);

  const startDownload = (id: string, fileName: string) => {
    // If they downloaded already or is currently downloading, prevent duplication
    if (downloadingId) return;

    setDownloadingId(id);
    setDownloadProgress(0);

    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDownloadingId(null);
            setDownloadedList((old) => [...old, id]);
            // Alert user of simulated asset download completion
          }, 400);
          return 100;
        }
        return prev + 15;
      });
    }, 100);
  };

  const handleLeadSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!leadMail) return;
    setLeadSuccess(true);
    setTimeout(() => {
      setLeadMail("");
    }, 3000);
  };

  return (
    <section id="resources" className="py-20 bg-[#0A0A0A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-black text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20">
            Elite Strategy Library
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tighter uppercase mt-3">
            Free Technical Resources
          </h2>
          <p className="text-white/60 text-sm mt-3 leading-relaxed">
            Obtain identical technical guidelines, Screaming Frog templates, prompt maps, and execution SOP checklists compiled by Md Biplob.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Magnet Items Grid on Left */}
          <div className="lg:col-span-8 space-y-4">
            <span className="block text-xs font-mono text-white/40 uppercase tracking-widest mb-3">
              Catalog Items
            </span>
            {freeResources.map((res) => {
              const isDownloading = downloadingId === res.id;
              const hasDownloaded = downloadedList.includes(res.id);

              return (
                <div
                  key={res.id}
                  className="bg-[#050505] border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-blue-500/40 hover:shadow-[0_0_15px_rgba(37,99,235,0.08)] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-6"
                >
                  <div className="space-y-2 max-w-xl">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[9px] font-mono font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full uppercase">
                        {res.type} Format
                      </span>
                      <span className="text-[10px] text-white/40 font-mono">• {res.fileSize} Weight</span>
                    </div>

                    <h3 className="text-sm sm:text-lg font-black text-white uppercase mt-1">
                      {res.title}
                    </h3>

                    <p className="text-white/60 text-xs leading-relaxed">
                      {res.description}
                    </p>

                    {/* Deliverables tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1.5">
                      {res.deliverables.slice(0, 3).map((del, i) => (
                        <span key={i} className="text-[9px] font-mono text-white/40 bg-[#0A0A0A] border border-white/10 px-2.5 py-1 rounded">
                          {del}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Trigger column */}
                  <div className="shrink-0 flex flex-col items-start sm:items-end gap-2.5">
                    <span className="text-[10px] font-mono text-white/40 bg-[#0A0A0A] px-2.5 py-1 border border-white/10 rounded-full">
                      {res.downloadCount + (hasDownloaded ? 1 : 0)} DLs Claimed
                    </span>

                    {/* Progress details */}
                    {isDownloading ? (
                      <div className="w-[150px] space-y-1.5 bg-[#0A0A0A] p-2.5 rounded-xl border border-white/10 text-center">
                        <div className="flex justify-between items-center text-[9px] font-mono text-blue-400">
                          <span className="animate-spin text-blue-400 font-bold shrink-0">⟳</span>
                          <span>Downloading... {downloadProgress}%</span>
                        </div>
                        <div className="w-full bg-[#050505] rounded-full h-1.5 overflow-hidden">
                          <div
                            className="bg-blue-600 h-1.5 transition-all duration-100"
                            style={{ width: `${downloadProgress}%` }}
                          />
                        </div>
                      </div>
                    ) : hasDownloaded ? (
                      <div className="w-[150px] py-2 px-3 border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 rounded-xl text-center text-xs font-bold font-mono flex items-center justify-center gap-1.5">
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                        <span>Download Done</span>
                      </div>
                    ) : (
                      <button
                        onClick={() => startDownload(res.id, res.title)}
                        className="w-[150px] bg-[#0A0A0A] hover:bg-white/5 hover:border-blue-500/40 border border-white/10 py-2.5 px-4 text-xs font-bold font-mono text-white rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-[0_0_10px_rgba(37,99,235,0.05)] cursor-pointer"
                      >
                        <FileDown className="w-4 h-4 text-blue-400" />
                        <span>Grab Resource</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Newsletter Box right */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#050505] border border-white/10 p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-mono text-blue-400 font-bold uppercase tracking-widest bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full">
                  Weekly Growths Blueprint
                </span>
                <h4 className="text-md font-black text-white uppercase mt-3">Join 5,400+ Growth Marketers</h4>
                <p className="text-white/60 text-xs leading-relaxed mt-2">
                  Get Md Biplob's private newsletter dissecting SEO hacks, algorithm shifts, AI pipelines, and freelancing templates directly to your inbox. No spam. Unsubscribe anytime.
                </p>
              </div>

              {leadSuccess ? (
                <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono text-center flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Success! Access Link dispatched.</span>
                </div>
              ) : (
                <form onSubmit={handleLeadSubmit} className="mt-6 space-y-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter corporate email..."
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-blue-500 font-mono"
                    value={leadMail}
                    onChange={(e) => setLeadMail(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-black py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(37,99,235,0.4)] cursor-pointer"
                  >
                    <span>Secure Free Strategy Link</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

            {/* Speaking Gigs sidebar */}
            <div className="bg-[#050505] border border-white/10 p-6 rounded-2xl space-y-4">
              <h4 className="text-xs uppercase font-mono text-blue-400 font-bold tracking-wider">Expert Speaking Slots</h4>
              <div className="space-y-3.5 divide-y divide-white/5 font-mono">
                <div className="pt-0 flex flex-col text-xs space-y-1">
                  <span className="text-[10px] text-blue-400 font-black uppercase">Jan 2026 — Dhaka</span>
                  <span className="text-white font-bold text-xs uppercase leading-snug">National Digital Summit</span>
                  <span className="text-white/50 text-[11px] leading-relaxed">"Blending Core SEO architectures with Generative prompt maps safely."</span>
                </div>
                <div className="pt-3.5 flex flex-col text-xs space-y-1">
                  <span className="text-[10px] text-blue-400 font-black uppercase">Mar 2026 — Chittagong</span>
                  <span className="text-white font-bold text-xs uppercase leading-snug">Freelancer Summit forum</span>
                  <span className="text-white/50 text-[11px] leading-relaxed">"Sourcing corporate $5k/Mo SEO retainer retainers on global channels."</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
