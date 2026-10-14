import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Server, Terminal } from 'lucide-react';

interface HeroProps {
  onExploreDashboard: () => void;
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreDashboard, onOpenDemo }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-violet-600/15 via-indigo-600/10 to-cyan-400/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400">
            <span>Enterprise Cloud Intelligence</span>
            <span aria-hidden="true" className="text-slate-600">•</span>
            <span className="text-violet-400">Vektor Platform</span>
          </div>

          <h1
            style={{ textWrap: 'balance' }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12]"
          >
            Autonomous Cloud Infrastructure &{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
              Neural IT Operations
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Vektor unifies distributed multi-cloud telemetry, automated threat mitigation, and microsecond API routing into an intelligent command surface designed for high-throughput enterprise systems.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onExploreDashboard}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 rounded-xl hover:from-violet-500 hover:to-cyan-400 transition-all duration-200 shadow-lg shadow-violet-600/30 hover:shadow-cyan-400/30 group whitespace-nowrap cursor-pointer"
            >
              <span>Explore Interactive Dashboard</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/70 hover:border-violet-500/50 rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer backdrop-blur-md"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Schedule Live Demo</span>
            </button>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>SOC2 Type II & FedRAMP Ready</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-violet-400" />
              <span>Sub-millisecond Global Ingress</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5 text-indigo-400" />
              <span>Multi-Cloud Mesh Orchestration</span>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all">
            <div className="flex items-baseline justify-between mb-1">
              <span className="text-3xl lg:text-4xl font-extrabold text-white font-mono tracking-tight tabular-nums">
                99.999%
              </span>
              <span className="text-xs font-semibold text-cyan-400">Tier-4</span>
            </div>
            <p className="text-xs text-slate-300 font-medium">Enterprise SLA Availability</p>
            <p className="text-[11px] text-slate-400 mt-1">Multi-region active failover across 85+ edge zones</p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-violet-500/30 transition-all">
            <div className="flex items-baseline justify-between mb-1">
              <span className="text-3xl lg:text-4xl font-extrabold text-white font-mono tracking-tight tabular-nums">
                0.84ms
              </span>
              <span className="text-xs font-semibold text-violet-400">p99</span>
            </div>
            <p className="text-xs text-slate-300 font-medium">Median Global Routing Latency</p>
            <p className="text-[11px] text-slate-400 mt-1">Direct peering with global Tier-1 internet backbones</p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all">
            <div className="flex items-baseline justify-between mb-1">
              <span className="text-3xl lg:text-4xl font-extrabold text-white font-mono tracking-tight tabular-nums">
                14.2M
              </span>
              <span className="text-xs font-semibold text-cyan-400">Daily</span>
            </div>
            <p className="text-xs text-slate-300 font-medium">Threat Vectors Mitigated</p>
            <p className="text-[11px] text-slate-400 mt-1">Autonomous zero-day anomaly detection & eBPF filtering</p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-violet-500/30 transition-all">
            <div className="flex items-baseline justify-between mb-1">
              <span className="text-3xl lg:text-4xl font-extrabold text-white font-mono tracking-tight tabular-nums">
                4.8x
              </span>
              <span className="text-xs font-semibold text-violet-400">Speedup</span>
            </div>
            <p className="text-xs text-slate-300 font-medium">Faster MTTR Incident Resolution</p>
            <p className="text-[11px] text-slate-400 mt-1">Root-cause AI causal graphs reduce war-room duration</p>
          </div>
        </div>
      </div>
    </section>
  );
};