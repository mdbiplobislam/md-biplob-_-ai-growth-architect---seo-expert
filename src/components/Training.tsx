import { useState } from "react";
import { Star, GraduationCap, ChevronRight, ClipboardList, Award, BookOpen, User, CheckCircle2 } from "lucide-react";
import { trainingCourses } from "../data";

interface TrainingProps {
  onCtaclick: (sec: string) => void;
}

export default function Training({ onCtaclick }: TrainingProps) {
  const [selectedCourse, setSelectedCourse] = useState<string>("seo-mastery");
  const [expandedCurriculum, setExpandedCurriculum] = useState(true);

  const activeCourseData = trainingCourses.find((c) => c.id === selectedCourse);

  return (
    <section id="training" className="py-24 bg-[#0A0A0A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-4 border border-blue-500/30 bg-blue-500/5 rounded-md">
            <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em]">Academy & Career Mentorship</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tighter uppercase mt-2">
            Academies & Mentorship
          </h2>
          <p className="text-white/60 text-sm mt-3 leading-relaxed">
            Gain elite search engine optimization and AI-driven growth execution skills through physical and digital academies.
          </p>
        </div>

        {/* Dynamic Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Courses Menu Left */}
          <div className="lg:col-span-4 space-y-3">
            <span className="block text-[10px] font-mono text-white/40 uppercase tracking-widest font-bold mb-1">
              Available Certifications
            </span>
            {trainingCourses.map((course) => (
              <div
                key={course.id}
                onClick={() => setSelectedCourse(course.id)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden ${
                  selectedCourse === course.id
                    ? "border-blue-500 bg-blue-500/10 shadow-[0_0_15px_rgba(37,99,235,0.2)]"
                    : "border-white/10 bg-[#050505] hover:bg-white/5"
                }`}
              >
                {course.badge && (
                  <span className="absolute top-3 right-3 bg-blue-600 text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase shadow-[0_0_8px_rgba(37,99,235,0.4)]">
                    {course.badge}
                  </span>
                )}
                <div>
                  <span className="text-[9px] font-mono font-bold text-blue-400 uppercase tracking-wider">
                    {course.category} • {course.duration}
                  </span>
                  <h3 className="text-sm font-black text-white mt-1 uppercase leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-white/60 text-[11px] leading-relaxed mt-2 line-clamp-2">
                    {course.subtitle}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/5 text-[10px] text-white/40 font-mono">
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span className="text-white font-bold">{course.rating}</span>
                    <span>({course.studentsCount} Students)</span>
                  </div>
                  <span className="text-blue-400 font-bold">{course.price}</span>
                </div>
              </div>
            ))}

            {/* Simulated 1-on-1 Mentorship Pitch */}
            <div className="p-5 rounded-2xl bg-[#050505] border border-white/10 text-center space-y-3">
              <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-wider font-bold">
                High-End Professional Track
              </span>
              <h4 className="text-xs font-black text-white uppercase mt-1">One-to-One Growth Mentorship</h4>
              <p className="text-white/60 text-[11px] leading-relaxed">
                Work directly with Md Biplob on live technical projects, campaign strategies, and global client acquisition models. Limited to 5 positions.
              </p>
              <button
                onClick={() => onCtaclick("contact")}
                className="w-full bg-[#0A0A0A] hover:bg-white/5 text-blue-400 text-[10px] font-bold font-mono py-2.5 rounded-xl border border-white/10 transition-colors uppercase tracking-wider cursor-pointer"
              >
                Request Mentorship Session
              </button>
            </div>
          </div>

          {/* Core Selected course detail */}
          {activeCourseData && (
            <div className="lg:col-span-8 bg-[#050505] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/5 pb-5 gap-4">
                <div>
                  <span className="inline-flex items-center gap-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-[10px] px-2.5 py-0.5 rounded font-bold uppercase tracking-wider">
                    {activeCourseData.category} Track
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-white uppercase mt-2">
                    {activeCourseData.title}
                  </h3>
                  <p className="text-white/60 text-xs mt-1 leading-relaxed">
                    {activeCourseData.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => onCtaclick("contact")}
                  className="shrink-0 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-[11px] uppercase tracking-widest rounded-full transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] cursor-pointer"
                >
                  Secure Seat Now
                </button>
              </div>

              {/* Outcomes */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase font-mono text-blue-400 tracking-wider font-bold">Learning Outcomes</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeCourseData.learningOutcomes.map((out, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-white/80 p-3.5 bg-[#0A0A0A] border border-white/5 rounded-xl"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expandable Module Curriculum */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs uppercase font-mono text-blue-400 tracking-wider flex items-center gap-1.5 font-bold">
                    <ClipboardList className="w-4 h-4 text-blue-400" />
                    <span>Course Curriculum ({activeCourseData.totalModules} Chapters Included)</span>
                  </h4>
                  <button
                    onClick={() => setExpandedCurriculum(!expandedCurriculum)}
                    className="text-[10px] font-mono text-white/40 hover:text-white uppercase underline cursor-pointer"
                  >
                    {expandedCurriculum ? "Collapse Curriculum" : "Show Curriculum"}
                  </button>
                </div>

                {expandedCurriculum && (
                  <div className="divide-y divide-white/5 bg-[#0A0A0A]/55 border border-white/10 rounded-xl overflow-hidden text-xs">
                    {activeCourseData.curriculum.map((mod, index) => (
                      <div
                        key={index}
                        className="p-3.5 flex items-start gap-3 hover:bg-[#0A0A0A] transition-colors"
                      >
                        <span className="w-6 h-6 rounded bg-[#050505] border border-white/10 flex items-center justify-center font-mono font-bold text-blue-400 shrink-0 select-none">
                          {index + 1}
                        </span>
                        <div className="text-white/85 leading-relaxed pt-0.5">{mod}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Certificate Verification Badge block */}
              <div className="p-4 rounded-xl bg-blue-650/5 border border-blue-550/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-blue-500/5">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-blue-400 shrink-0" />
                  <div>
                    <h5 className="text-xs font-bold text-white uppercase tracking-tight">Certification Included</h5>
                    <p className="text-white/60 text-[11px] leading-relaxed mt-0.5">
                      Includes authenticated Md Biplob Growth Certification and Semrush certification assistance loops.
                    </p>
                  </div>
                </div>
                <div className="text-xs text-white/50 font-mono">
                  Total Investment: <span className="text-white font-extrabold">{activeCourseData.price}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
