import { ArrowRight, Sparkles, AlertCircle, Target, TrendingUp, Award } from "lucide-react";
import { brandBio } from "../data";

interface HeroProps {
  onCtaclick: (sec: string) => void;
}

export default function Hero({ onCtaclick }: HeroProps) {
  return (
    <section id="home" className="relative pt-36 pb-24 overflow-hidden bg-[#050505]">
      {/* Absolute Ambient Glow Elements */}
      <div className="absolute top-1/4 -left-36 w-96 h-96 bg-blue-500/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Copywriting Hook & Value State */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-block px-3 py-1 border border-blue-500/30 bg-blue-500/5 rounded-md">
              <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                Systematic Authority Engineering
              </span>
            </div>

            <h1 className="text-[54px] sm:text-[76px] lg:text-[96px] leading-[0.88] font-black tracking-tighter uppercase text-white drop-shadow-sm">
              AI-DRIVEN<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
                GROWTH
              </span>
              <br />
              ARCHITECT
            </h1>

            <p className="max-w-xl text-lg sm:text-xl text-white/70 leading-relaxed font-light">
              I engineer <span className="text-white font-semibold">intelligent digital authority systems</span> that transform professionals and businesses into scalable global brands through SEO, AI automation, and strategic marketing.
            </p>

            {/* Certifications Quick Bar */}
            <div className="flex flex-wrap gap-2 pt-2">
              {brandBio.certifications.slice(0, 3).map((cert, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] text-white/60 font-mono"
                >
                  <Award className="w-3.5 h-3.5 text-blue-400" />
                  {cert}
                </span>
              ))}
            </div>

            {/* Call To Action Controls */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onCtaclick("contact")}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-bold uppercase tracking-widest rounded-full transition-all shadow-[0_0_25px_rgba(37,99,235,0.45)] flex items-center gap-2"
              >
                <span>Initiate SEO Audits</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={() => onCtaclick("training")}
                className="px-6 py-4 bg-white/5 hover:bg-white/10 text-white text-[11px] font-bold uppercase tracking-widest rounded-full transition-all border border-white/10"
              >
                Explore Academies
              </button>
            </div>

            {/* Real Trust Badges */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <div className="text-3xl font-black text-blue-500">10M+</div>
                <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest mt-1 font-bold">Organic Clicks</div>
              </div>
              <div>
                <div className="text-3xl font-black text-blue-500">5K+</div>
                <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest mt-1 font-bold">Students Mentored</div>
              </div>
              <div>
                <div className="text-3xl font-black text-blue-500">120+</div>
                <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest mt-1 font-bold">Global Audits</div>
              </div>
            </div>
          </div>

          {/* Premium Executive Portrait Frame */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-sky-500/20 rounded-3xl blur-2xl transform rotate-6 opacity-40 animate-pulse" />
            <div className="relative border border-white/10 bg-[#0A0A0A] rounded-3xl p-3 overflow-hidden shadow-2xl">
              {/* Outer Neon corner bounds */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-blue-500/60" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-blue-500/60" />

              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?fit=crop&w=600&h=600&q=80"
                alt="Md Biplob Portrait"
                className="w-full h-auto aspect-square rounded-2xl object-cover object-top filter grayscale contrast-[1.1]"
                referrerPolicy="no-referrer"
              />

              {/* Float Badge overlay: live availability */}
              <div className="absolute bottom-6 left-6 bg-[#050505]/95 border border-white/10 backdrop-blur-md py-2.5 px-4 rounded-xl flex items-center gap-2 shadow-xl">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
                  Open for Speaking & Auditing
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
