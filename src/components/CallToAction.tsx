import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Terminal } from 'lucide-react';

interface CallToActionProps {
  onOpenDemo: () => void;
  onExploreDashboard: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onOpenDemo, onExploreDashboard }) => {
  return (
    <section id="cta" className="py-20 md:py-28 relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-violet-600/20 via-indigo-600/15 to-cyan-400/20 rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel-elevated rounded-3xl p-8 sm:p-12 md:p-16 border border-cyan-400/30 text-center relative overflow-hidden shadow-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>Deploy in Under 5 Minutes</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-2xl mx-auto leading-tight">
            Ready to Automate Your Cloud Infrastructure?
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Join engineering teams running mission-critical workloads on Vektor. Start with a 14-day free trial on up to 50 nodes or schedule an architecture review.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 rounded-xl hover:from-violet-500 hover:to-cyan-400 transition-all duration-200 shadow-lg shadow-violet-600/30 hover:shadow-cyan-400/30 group cursor-pointer"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExploreDashboard}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/70 hover:border-cyan-400/40 rounded-xl transition-all duration-200 cursor-pointer"
            >
              <span>Explore Live Telemetry</span>
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
            <div className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>Zero-downtime eBPF agent install</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-violet-400" />
              <span>No credit card required for sandbox</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};