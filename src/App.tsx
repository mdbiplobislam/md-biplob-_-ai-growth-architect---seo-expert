import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Training from "./components/Training";
import Portfolio from "./components/Portfolio";
import SEOTools from "./components/SEOTools";
import SitemapXml from "./components/SitemapXml";
import Resources from "./components/Resources";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import TechnicalSEO from "./components/TechnicalSEO";
import { Terminal, Shield, ExternalLink, RefreshCw, FileText, Globe } from "lucide-react";
import { brandBio } from "./data";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [showConsoleSchema, setShowConsoleSchema] = useState(false);

  // Scroll active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "training", "portfolio", "seo-tools", "resources", "blog", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* Background Grid Pattern Overlay */}
      <div className="absolute inset-x-0 top-0 h-[800px] bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 select-none pointer-events-none" />

      {/* Background Ambient Spotlights */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-[60%] right-[-10%] w-[60%] h-[60%] bg-sky-500/5 rounded-full blur-[140px]" />
      </div>

      {/* Background-loaded schema rules scripts */}
      <TechnicalSEO />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation bar */}
        <Navbar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          onNavigate={handleNavigate}
        />

        {/* Sections layout tree */}
        <main className="flex-grow">
          {/* Hero segment */}
          <Hero onCtaclick={handleNavigate} />

          {/* About Biography narrative */}
          <About />

          {/* Services Hub */}
          <Services onCtaclick={handleNavigate} />

          {/* Course Trainings */}
          <Training onCtaclick={handleNavigate} />

          {/* Case Studies Portfolio */}
          <Portfolio />

          {/* Interactive Lab Segment */}
          <section id="seo-tools" className="py-24 bg-[#0A0A0A] border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="inline-block px-3 py-1 mb-4 border border-blue-500/30 bg-blue-500/5 rounded-md">
                  <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em]">Interactive Dev Sandbox</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tighter uppercase mt-2">
                  Technical SEO Suite
                </h2>
                <p className="text-white/60 text-sm mt-3 leading-relaxed">
                  Validate markup outputs, complete diagnostic technical score checklists, and map out topical sitemaps inside our playground.
                </p>
              </div>

              {/* SEOTools Component */}
              <SEOTools />

              {/* SitemapXml component */}
              <SitemapXml />
            </div>
          </section>

          {/* Downloadable files */}
          <Resources />

          {/* Topic Cluster blog publications */}
          <Blog />

          {/* Scheduling system & Contact form */}
          <Contact />
        </main>

        {/* Global Footer */}
        <footer className="bg-[#050505] border-t border-white/10 py-12 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
            
            {/* Primary Grid footer */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-white/10 pb-12">
              
              {/* Brand Col */}
              <div className="md:col-span-5 space-y-4">
                <div onClick={() => handleNavigate("home")} className="flex items-center gap-2.5 cursor-pointer group">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-black text-white text-lg font-mono tracking-tight shadow-[0_0_20px_rgba(37,99,235,0.4)] group-hover:bg-blue-500 transition-colors">
                    B
                  </div>
                  <div>
                    <h4 className="text-sm font-black tracking-tighter text-white leading-tight uppercase">MD BIPLOB</h4>
                    <span className="text-[10px] font-mono font-bold tracking-[0.15em] text-blue-400 uppercase leading-none block">AI Growth Architect</span>
                  </div>
                </div>
                <p className="text-white/60 text-xs leading-relaxed max-w-md">
                  We engineer intelligent digital authority systems that transform ambitious businesses and professionals into secure, high-ranking global brands.
                </p>
                <div className="text-[10px] font-mono text-white/40 flex items-center gap-1.5 font-bold">
                  <Shield className="w-3.5 h-3.5 text-blue-400" />
                  <span>Licensed Enterprise SEO & Prompt Architecture BD</span>
                </div>
              </div>

              {/* Quick links */}
              <div className="md:col-span-4 space-y-3">
                <h5 className="text-xs font-mono text-white/40 font-bold uppercase tracking-widest">Navigation Sitemap</h5>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button onClick={() => handleNavigate("home")} className="text-left text-white/60 hover:text-white hover:underline transition-all cursor-pointer">Home Landing</button>
                  <button onClick={() => handleNavigate("about")} className="text-left text-white/60 hover:text-white hover:underline transition-all cursor-pointer">My Story</button>
                  <button onClick={() => handleNavigate("services")} className="text-left text-white/60 hover:text-white hover:underline transition-all cursor-pointer">Consulting</button>
                  <button onClick={() => handleNavigate("training")} className="text-left text-white/60 hover:text-white hover:underline transition-all cursor-pointer">Academies</button>
                  <button onClick={() => handleNavigate("portfolio")} className="text-left text-white/60 hover:text-white hover:underline transition-all cursor-pointer">Case Records</button>
                  <button onClick={() => handleNavigate("resources")} className="text-left text-white/60 hover:text-white hover:underline transition-all cursor-pointer">Free Downloads</button>
                  <button onClick={() => handleNavigate("blog")} className="text-left text-white/60 hover:text-white hover:underline transition-all cursor-pointer">Publications</button>
                  <button onClick={() => handleNavigate("contact")} className="text-left text-white/60 hover:text-white hover:underline transition-all cursor-pointer">Book Spot</button>
                </div>
              </div>

              {/* Developer credentials */}
              <div className="md:col-span-3 space-y-3">
                <h5 className="text-xs font-mono text-white/40 font-bold uppercase tracking-widest">Metadata inspector</h5>
                <p className="text-white/60 text-xs">Observe dynamic schema linkages set in the backend of this site.</p>
                <button
                  type="button"
                  onClick={() => setShowConsoleSchema(!showConsoleSchema)}
                  className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-[10px] uppercase tracking-wider rounded-full transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  <span>{showConsoleSchema ? "Hide Metadata" : "Inspect Schemas"}</span>
                </button>
              </div>
            </div>

            {/* Expansible Console Viewer inside Footer */}
            {showConsoleSchema && (
              <div className="border border-white/10 rounded-xl p-4 bg-[#0A0A0A] font-mono text-[10px] text-blue-400 space-y-4 max-h-[300px] overflow-auto">
                <div className="flex items-center justify-between border-b border-white/5 pb-2 text-white/40 font-bold">
                  <span>Inspection: Schema.org Validation</span>
                  <span className="text-blue-400 font-black">4 Elements Declared</span>
                </div>
                <div>
                  <h6 className="text-[11px] text-blue-300 font-bold">1. PERSON SCHEMA (MD BIPLOB)</h6>
                  <pre className="mt-1">
                    {`{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Md Biplob",
  "jobTitle": "AI-Driven Growth Architect & SEO Expert",
  "url": "https://mdbiplob.com",
  "sameAs": ["https://linkedin.com/in/mdbiplob", "https://github.com/mdbiplob"]
}`}
                  </pre>
                </div>
                <div>
                  <h6 className="text-[11px] text-teal-300 font-bold">2. ORGANIZATION SCHEMA (GROWTHENGINE GLOBAL)</h6>
                  <pre className="mt-1">
                    {`{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Md Biplob Growth Consultancy",
  "url": "https://mdbiplob.com",
  "logo": "https://mdbiplob.com/logo.png"
}`}
                  </pre>
                </div>
              </div>
            )}

            {/* Bottom Copyright Row */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-white/40 gap-4">
              <div>
                © {new Date().getFullYear()} Md Biplob. All Rights Reserved. Manufactured for high search rankings.
              </div>
              <div className="flex items-center gap-4 text-xs font-bold">
                <a href="#seo-tools" className="hover:text-white uppercase font-mono tracking-wider">XML sitemap</a>
                <span>•</span>
                <a href="#seo-tools" className="hover:text-white flex items-center gap-1.5 uppercase font-mono tracking-wider">
                  <Globe className="w-3.5 h-3.5 text-blue-400" />
                  <span>Schema Verified</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
