import { Award, Briefcase, GraduationCap, ChevronRight, CheckCircle2, ShieldCheck, Heart } from "lucide-react";
import { brandBio } from "../data";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0A0A0A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-4 border border-blue-500/30 bg-blue-500/5 rounded-md">
            <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em]">Behind The Code</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tighter uppercase mt-2">
            About Md Biplob
          </h2>
          <p className="text-white/60 text-sm mt-3 leading-relaxed">
            The mission-driven architect blending technical search systems and generative process modeling.
          </p>
        </div>

        {/* Content Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Personal Bio Narrative & Core Directives */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-sm font-black text-white uppercase tracking-wider">Biography Narrative</h3>
            <p className="text-white/70 text-sm leading-relaxed">{brandBio.aboutText}</p>

            {/* Mission & Vision Bento Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-[#050505] border border-white/10">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Our Mission</h4>
                <p className="text-white/60 text-xs leading-relaxed mt-2">{brandBio.mission}</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#050505] border border-white/10">
                <div className="w-9 h-9 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center mb-3">
                  <Heart className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Our Vision</h4>
                <p className="text-white/60 text-xs leading-relaxed mt-2">{brandBio.vision}</p>
              </div>
            </div>

            {/* Highlighted Core Skills Grid */}
            <div className="pt-4 space-y-4">
              <h4 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">Expertise Distribution</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-white uppercase">Technical Search Masters</span>
                  <div className="space-y-1.5">
                    {brandBio.skills.seo.slice(0, 3).map((skill, index) => (
                      <div key={index} className="flex items-center gap-1.5 text-xs text-white/70">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-white uppercase">AI Automation Systems</span>
                  <div className="space-y-1.5">
                    {brandBio.skills.aiMarketing.slice(0, 3).map((skill, index) => (
                      <div key={index} className="flex items-center gap-1.5 text-xs text-white/70">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-white uppercase">Scale & Branding Funnels</span>
                  <div className="space-y-1.5">
                    {brandBio.skills.digitalStrategy.slice(0, 3).map((skill, index) => (
                      <div key={index} className="flex items-center gap-1.5 text-xs text-white/70">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline & Professional Certs on Right */}
          <div className="lg:col-span-5 space-y-8">
            {/* Certifications Card */}
            <div className="bg-[#050505] border border-white/10 p-6 rounded-2xl">
              <h3 className="text-sm font-black text-white uppercase tracking-tight mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-400" />
                <span>Verified Authority</span>
              </h3>
              <div className="space-y-3">
                {brandBio.certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="p-3 bg-[#0A0A0A] border border-white/5 rounded-xl flex items-center gap-2.5 hover:border-blue-500/20 transition-all font-mono text-[11px] text-white/80"
                  >
                    <span className="w-5 h-5 rounded-md bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-blue-400 shrink-0 text-xs font-bold">
                      ✔
                    </span>
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Travel Journey timeline */}
            <div className="bg-[#050505] border border-white/10 p-6 rounded-2xl">
              <h3 className="text-sm font-black text-white uppercase tracking-tight mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-blue-400" />
                <span>Career Timeline</span>
              </h3>
              <div className="relative border-l border-white/10 pl-4 space-y-5">
                {brandBio.timeline.map((item, index) => (
                  <div key={index} className="relative group">
                    {/* Circle Node */}
                    <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 bg-blue-500 border-2 border-[#050505] rounded-full group-hover:bg-blue-400 transition-colors" />
                    <div>
                      <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest">
                        {item.year} — {item.place}
                      </span>
                      <h4 className="text-xs font-bold text-white mt-0.5 uppercase">{item.title}</h4>
                      <p className="text-white/60 text-[11px] leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
