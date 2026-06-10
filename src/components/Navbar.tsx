import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, MessageSquare, Terminal } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (sec: string) => void;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ activeSection, setActiveSection, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Training", id: "training" },
    { label: "Case Studies", id: "portfolio" },
    { label: "SEO lab", id: "seo-tools" },
    { label: "Resources", id: "resources" },
    { label: "Blog", id: "blog" },
    { label: "Contact", id: "contact" }
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-350 border-b ${
        scrolled
          ? "bg-[#050505]/95 backdrop-blur-md border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Brand Logo & Positioning */}
          <div
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-black text-white text-lg font-mono tracking-tight shadow-[0_0_20px_rgba(37,99,235,0.4)] group-hover:bg-blue-500 transition-colors">
              B
            </div>
            <div>
              <div className="text-sm font-black tracking-tighter text-white leading-tight uppercase flex items-center">
                MD BIPLOB <span className="text-blue-500 ml-0.5">.</span>
              </div>
              <div className="text-[9px] font-mono font-bold tracking-[0.15em] text-blue-400 uppercase leading-none">
                AI Growth Architect
              </div>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 p-1 rounded-full">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest transition-all uppercase font-mono ${
                  activeSection === item.id
                    ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.45)]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Consultation Button */}
          <div className="hidden lg:flex items-center gap-3">
            {/* WhatsApp Fast CTA */}
            <a
              href="https://wa.me/8801700000000?text=Hi%20Md%20Biplob,%20I'd%20love%20to%20consult%20on%20SEO%20and%20Growth%20options."
              target="_blank"
              rel="noreferrer"
              className="text-[10px] text-white/80 hover:text-white flex items-center gap-1.5 font-mono font-bold uppercase tracking-wider transition-all bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:bg-white/10"
            >
              <MessageSquare className="w-4 h-4 text-blue-400" />
              <span>WhatsApp Chat</span>
            </a>

            <button
              onClick={() => handleNavClick("contact")}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-bold uppercase tracking-widest rounded-full transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            >
              <span>Book Call</span>
            </button>
          </div>

          {/* Mobile Menu Action */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/5 border border-white/10 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#050505] mt-2 p-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left p-3.5 rounded-xl text-[10px] font-bold uppercase font-mono tracking-widest transition-all border ${
                activeSection === item.id
                  ? "border-blue-500 bg-blue-500/10 text-white"
                  : "border-white/5 bg-transparent text-white/60 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/10">
            <a
              href="https://wa.me/8801700000000?text=Hi%20Biplob,%25I'd%25like%25to%25consult!"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center gap-2 text-[10px] font-mono font-bold text-white/80 uppercase"
            >
              <MessageSquare className="w-4 h-4 text-blue-400" />
              <span>WhatsApp</span>
            </a>
            <button
              onClick={() => handleNavClick("contact")}
              className="p-3 bg-blue-600 hover:bg-blue-500 rounded-xl flex items-center justify-center gap-2 text-[10px] font-mono font-black text-white uppercase tracking-wider shadow-[0_0_15px_rgba(37,99,235,0.4)]"
            >
              <span>Book Call</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
