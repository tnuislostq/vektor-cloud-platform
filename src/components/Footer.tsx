import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenDemo: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDemo }) => {
  return (
    <footer className="border-t border-white/10 bg-[#040711]/90 backdrop-blur-md text-slate-400 py-12 md:py-16 text-xs relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-violet-600 to-cyan-400 p-[1px] flex items-center justify-center">
                <span className="w-full h-full bg-[#070C1E] rounded-[7px] flex items-center justify-center font-mono text-[10px] font-black text-cyan-300">
                  VK
                </span>
              </span>
              <span className="text-base font-extrabold text-white tracking-tight">
                Vektor
              </span>
            </div>
            <p className="text-xs text-slate-300 max-w-sm leading-relaxed">
              Autonomous multi-cloud infrastructure and neural telemetry. Engineered for microsecond API routing, post-quantum zero-trust cryptographic defense, and self-healing operations.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>SOC2 Type II • ISO 27001 • HIPAA • FedRAMP Ready</span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px] font-mono">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#dashboard" className="hover:text-cyan-400 transition-colors">Telemetry Console</a></li>
              <li><a href="#architecture" className="hover:text-cyan-400 transition-colors">Autonomous Scaling</a></li>
              <li><a href="#architecture" className="hover:text-cyan-400 transition-colors">Post-Quantum TLS</a></li>
              <li><a href="#solutions" className="hover:text-cyan-400 transition-colors">eBPF Kernel Probes</a></li>
              <li><a href="#solutions" className="hover:text-cyan-400 transition-colors">Terraform Generator</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px] font-mono">Solutions</h4>
            <ul className="space-y-2">
              <li><a href="#calculator" className="hover:text-cyan-400 transition-colors">Spot Arbitrage</a></li>
              <li><a href="#calculator" className="hover:text-cyan-400 transition-colors">Enterprise Mesh</a></li>
              <li><a href="#calculator" className="hover:text-cyan-400 transition-colors">Sovereign Cloud</a></li>
              <li><a href="#benefits" className="hover:text-cyan-400 transition-colors">Customer Case Studies</a></li>
              <li><a href="#dashboard" className="hover:text-cyan-400 transition-colors">Cluster Health</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px] font-mono">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#solutions" className="hover:text-cyan-400 transition-colors">IaC Documentation</a></li>
              <li><a href="#architecture" className="hover:text-cyan-400 transition-colors">Security Whitepaper</a></li>
              <li><a href="#dashboard" className="hover:text-cyan-400 transition-colors">API Telemetry Specs</a></li>
              <li>
                <button onClick={onOpenDemo} className="text-cyan-300 hover:text-cyan-200 transition-colors text-left font-medium cursor-pointer">
                  Schedule Architecture Demo
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-300">
          <div>
            &copy; 2026 Vektor Technologies Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#architecture" className="hover:text-slate-200 transition-colors">Privacy Policy</a>
            <a href="#architecture" className="hover:text-slate-200 transition-colors">Terms of Service</a>
            <a href="#dashboard" className="hover:text-slate-200 transition-colors">System Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
};