import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#060A17]/80 border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 group"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 via-indigo-500 to-cyan-400 p-[1px] flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-400/30 transition-all">
              <span className="w-full h-full bg-[#070C1E] rounded-[7px] flex items-center justify-center font-mono text-xs font-black tracking-widest text-cyan-300">
                VK
              </span>
            </span>
            <span className="tracking-tight text-lg font-extrabold bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
              Vektor
            </span>
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <button
            onClick={() => scrollTo('dashboard')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-cyan-400 cursor-pointer ${
              activeSection === 'dashboard' ? 'text-cyan-400 font-semibold' : 'text-slate-300'
            }`}
          >
            Product
          </button>
          <button
            onClick={() => scrollTo('architecture')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-cyan-400 cursor-pointer ${
              activeSection === 'architecture' ? 'text-cyan-400 font-semibold' : 'text-slate-300'
            }`}
          >
            Features
          </button>
          <button
            onClick={() => scrollTo('solutions')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-cyan-400 cursor-pointer ${
              activeSection === 'solutions' ? 'text-cyan-400 font-semibold' : 'text-slate-300'
            }`}
          >
            Topology
          </button>
          <button
            onClick={() => scrollTo('benefits')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-cyan-400 cursor-pointer ${
              activeSection === 'benefits' ? 'text-cyan-400 font-semibold' : 'text-slate-300'
            }`}
          >
            Benefits
          </button>
          <button
            onClick={() => scrollTo('calculator')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-cyan-400 cursor-pointer ${
              activeSection === 'calculator' ? 'text-cyan-400 font-semibold' : 'text-slate-300'
            }`}
          >
            Pricing
          </button>
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenDemo}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 rounded-lg hover:from-violet-500 hover:to-cyan-400 transition-all duration-200 shadow-md shadow-violet-600/25 hover:shadow-cyan-500/25 whitespace-nowrap shrink-0 cursor-pointer"
          >
            Request Live Demo
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#070D22] px-4 pt-3 pb-5 space-y-2">
          <button
            onClick={() => scrollTo('dashboard')}
            className="block w-full text-left py-2 px-3 text-sm font-medium text-slate-200 hover:bg-white/5 rounded-md"
          >
            Product
          </button>
          <button
            onClick={() => scrollTo('architecture')}
            className="block w-full text-left py-2 px-3 text-sm font-medium text-slate-200 hover:bg-white/5 rounded-md"
          >
            Features
          </button>
          <button
            onClick={() => scrollTo('solutions')}
            className="block w-full text-left py-2 px-3 text-sm font-medium text-slate-200 hover:bg-white/5 rounded-md"
          >
            Topology
          </button>
          <button
            onClick={() => scrollTo('benefits')}
            className="block w-full text-left py-2 px-3 text-sm font-medium text-slate-200 hover:bg-white/5 rounded-md"
          >
            Benefits
          </button>
          <button
            onClick={() => scrollTo('calculator')}
            className="block w-full text-left py-2 px-3 text-sm font-medium text-slate-200 hover:bg-white/5 rounded-md"
          >
            Pricing
          </button>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-2.5 px-4 text-center text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-500 rounded-lg shadow-md"
            >
              Request Live Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};