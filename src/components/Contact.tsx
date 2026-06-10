import { useState, FormEvent } from "react";
import { MessageSquare, Mail, Calendar, ArrowRight, CheckCircle2, ShieldCheck, Linkedin, Facebook, Github } from "lucide-react";

export default function Contact() {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formSite, setFormSite] = useState("");
  const [formRole, setFormRole] = useState("CEO / Founder");
  const [formBudget, setFormBudget] = useState("$2,000 - $5,000");
  const [formMsg, setFormMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Calendar booking state
  const [callType, setCallType] = useState<"15min" | "45min">("15min");
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [selectedTime, setSelectedTime] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const daysList = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const slots15 = ["10:30 AM", "11:00 AM", "02:00 PM", "04:30 PM", "05:30 PM"];
  const slots45 = ["09:00 AM", "12:00 PM", "03:00 PM", "06:00 PM"];

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail) return;

    // Simulate saving lead detail in localStorage
    const newLead = {
      name: formName,
      email: formEmail,
      website: formSite,
      role: formRole,
      budget: formBudget,
      message: formMsg,
      timestamp: new Date().toISOString()
    };
    const savedLeads = JSON.parse(localStorage.getItem("biplob_leads") || "[]");
    savedLeads.push(newLead);
    localStorage.setItem("biplob_leads", JSON.stringify(savedLeads));

    setSubmitted(true);
    setFormName("");
    setFormEmail("");
    setFormSite("");
    setFormMsg("");
  };

  const handleBooking = () => {
    if (!selectedTime) return;
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setSelectedTime("");
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-[#0A0A0A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-black text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20">
            Claim Your Market Share
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tighter uppercase mt-3">
            Initiate Consultation
          </h2>
          <p className="text-white/60 text-sm mt-3 leading-relaxed">
            Let's evaluate your technical search indices, build automated topical authority maps, or arrange corporate team trainings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form left */}
          <div className="lg:col-span-4 bg-[#050505] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-md font-black text-white uppercase tracking-tight flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.6)] animate-pulse" />
              <span>Project Intake Index</span>
            </h3>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 space-y-3.5 text-center flex flex-col items-center">
                <ShieldCheck className="w-10 h-10 text-emerald-500" />
                <div>
                  <h4 className="text-sm font-bold uppercase text-white">Intake logged successfully</h4>
                  <p className="text-white/55 text-[11px] leading-relaxed mt-1">
                    Md Biplob's growth assistants will review your request and contact you via WhatsApp / Email within 12 hours.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="bg-[#0A0A0A] border border-white/10 text-blue-400 font-mono text-[10px] py-1.5 px-3 rounded-lg hover:bg-white/5 transition-colors"
                >
                  Log another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-mono text-white/50 uppercase mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-blue-500 font-mono"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-white/50 uppercase mb-1">Corporate Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-blue-500 font-mono"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-white/50 uppercase mb-1">Website URL (Optional)</label>
                  <input
                    type="url"
                    placeholder="https://example.com"
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-blue-500 font-mono text-white/80"
                    value={formSite}
                    onChange={(e) => setFormSite(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] font-mono text-white/50 uppercase mb-1">Your Title Role</label>
                    <select
                      className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-blue-500 font-mono cursor-pointer"
                      value={formRole}
                      onChange={(e) => setFormRole(e.target.value)}
                    >
                      <option>CEO / Founder</option>
                      <option>SME Business Owner</option>
                      <option>Digital Marketer</option>
                      <option>Freelancer / Solo</option>
                      <option>Student / Corporate</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-white/50 uppercase mb-1">Target Budget</label>
                    <select
                      className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-blue-500 font-mono cursor-pointer"
                      value={formBudget}
                      onChange={(e) => setFormBudget(e.target.value)}
                    >
                      <option>$1,000 - $2,000</option>
                      <option>$2,000 - $5,000</option>
                      <option>$500 - $1,000</option>
                      <option>SEO Custom audit</option>
                      <option>Mentorship enrollment</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-white/50 uppercase mb-1">Project details *</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Tell us about your organic goals..."
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-blue-500 font-mono"
                    value={formMsg}
                    onChange={(e) => setFormMsg(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-black py-3.5 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(37,99,235,0.4)] cursor-pointer"
                >
                  <span>Dispatch Intake Lead</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

          {/* Interactive Booking Calendar central column */}
          <div className="lg:col-span-5 bg-[#050505] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-md font-black text-white uppercase tracking-tight flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-400" />
              <span>Real-Time Calendar Block</span>
            </h3>

            {/* Selector call category */}
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => { setCallType("15min"); setSelectedTime(""); }}
                className={`py-2 px-3 rounded-xl border text-xs font-bold font-mono tracking-wide uppercase transition-all cursor-pointer ${
                  callType === "15min"
                    ? "border-blue-500 bg-blue-500/10 text-white shadow-[0_0_10px_rgba(37,99,235,0.2)]"
                    : "border-white/10 bg-[#0A0A0A] text-white/60 hover:text-white cursor-pointer hover:bg-white/5"
                }`}
              >
                15-Min Quick Discovery
              </button>
              <button
                type="button"
                onClick={() => { setCallType("45min"); setSelectedTime(""); }}
                className={`py-2 px-3 rounded-xl border text-xs font-bold font-mono tracking-wide uppercase transition-all cursor-pointer ${
                  callType === "45min"
                    ? "border-blue-500 bg-blue-500/10 text-white shadow-[0_0_10px_rgba(37,99,235,0.2)]"
                    : "border-white/10 bg-[#0A0A0A] text-white/60 hover:text-white cursor-pointer hover:bg-white/5"
                }`}
              >
                45-Min Technical Audit
              </button>
            </div>

            {/* Days line */}
            <div className="space-y-1.5">
              <span className="block text-[10px] font-mono text-white/40 uppercase tracking-widest">
                Select Consultation Date
              </span>
              <div className="grid grid-cols-3 gap-1 px-1 py-1 bg-[#0A0A0A] border border-white/10 rounded-xl">
                {daysList.map((day) => (
                  <button
                    type="button"
                    key={day}
                    onClick={() => { setSelectedDay(day); setSelectedTime(""); }}
                    className={`py-1.5 rounded-lg text-[10px] font-bold uppercase font-mono tracking-tight transition-all cursor-pointer ${
                      selectedDay === day
                        ? "bg-[#050505] text-blue-400 border border-white/10 shadow-[0_0_10px_rgba(37,99,235,0.15)]"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {day.slice(0, 3)}
                  </button>
                ))}
              </div>
            </div>

            {/* Slots available */}
            <div className="space-y-1.5">
              <span className="block text-[10px] font-mono text-white/40 uppercase tracking-widest">
                Select Available Time Slots
              </span>
              <div className="grid grid-cols-3 gap-2">
                {(callType === "15min" ? slots15 : slots45).map((slot) => (
                  <button
                    type="button"
                    key={slot}
                    onClick={() => setSelectedTime(slot)}
                    className={`py-2 rounded-xl text-xs font-bold font-mono transition-all border cursor-pointer ${
                      selectedTime === slot
                        ? "border-emerald-500 bg-emerald-500/10 text-emerald-400 font-black shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                        : "border-white/10 bg-[#0A0A0A] text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Block */}
            {bookingSuccess ? (
              <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/20 text-emerald-400 text-xs font-mono text-center flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Slot Booked! Outlook invite dispatched.</span>
              </div>
            ) : (
              <button
                type="button"
                disabled={!selectedTime}
                onClick={handleBooking}
                className={`w-full py-3.5 rounded-xl text-xs font-extrabold uppercase font-mono tracking-widest transition-all ${
                  selectedTime
                    ? "bg-blue-600 hover:bg-blue-500 text-white font-black cursor-pointer shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                    : "bg-white/5 text-white/35 cursor-not-allowed border border-white/10"
                }`}
              >
                Confirm Spot on {selectedDay} ({selectedTime || "Select Hour"})
              </button>
            )}
          </div>

          {/* Core corporate lines on Right */}
          <div className="lg:col-span-3 space-y-6">
            {/* Direct Whatsapp box */}
            <div className="bg-[#050505] border border-white/10 p-6 rounded-2xl space-y-4">
              <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full font-black uppercase tracking-wider">
                Instant Chat Channels
              </span>
              <h4 className="text-xs font-black text-white uppercase">Direct WhatsApp Line</h4>
              <p className="text-white/60 text-[11px] leading-relaxed">
                Connect directly with Md Biplob on WhatsApp to skip email wait-times. Best for fast agency or speaking invites.
              </p>
              <a
                href="https://wa.me/8801700000000?text=Hi%20Md%20Biplob,%20I'd%20love%20to%20receive%20help%20on%20SEO!"
                target="_blank"
                rel="noreferrer"
                className="block text-center bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-3 rounded-xl font-mono transition-all shadow-[0_0_15px_rgba(16,185,129,0.4)]"
              >
                Launch WhatsApp Chat
              </a>
            </div>

            {/* Direct Email box */}
            <div className="bg-[#050505] border border-white/10 p-6 rounded-2xl space-y-4 font-mono text-xs">
              <span className="text-[10px] text-blue-400 uppercase tracking-wider font-black">Inquiries & Mailbox</span>
              <div className="space-y-1">
                <span className="block text-white/30 uppercase text-[9px] tracking-widest">Primary Email</span>
                <a href="mailto:biplobislam38@gmail.com" className="text-blue-400 font-extrabold text-[11px] hover:underline hover:text-blue-300">
                  biplobislam38@gmail.com
                </a>
              </div>
              <div className="space-y-1">
                <span className="block text-white/30 uppercase text-[9px] tracking-widest">Global channels</span>
                <div className="flex gap-2.5 pt-1">
                  <a
                    href="https://linkedin.com/in/mdbiplob"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-lg bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-blue-500 hover:shadow-[0_0_8px_rgba(37,99,235,0.3)] transition-all cursor-pointer"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://facebook.com/biplob.seo"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-lg bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-blue-500 hover:shadow-[0_0_8px_rgba(37,99,235,0.3)] transition-all cursor-pointer"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com/mdbiplob"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-lg bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-blue-500 hover:shadow-[0_0_8px_rgba(37,99,235,0.3)] transition-all cursor-pointer"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
