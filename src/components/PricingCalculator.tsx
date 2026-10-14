import React, { useState } from 'react';
import { Check, Zap, Calculator } from 'lucide-react';

interface PricingCalculatorProps {
  onSelectTier: (tierName: string) => void;
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({ onSelectTier }) => {
  const [nodeCount, setNodeCount] = useState<number>(45);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const calculateTierPrice = (basePerNode: number) => {
    const total = nodeCount * basePerNode;
    return billingCycle === 'annual' ? Math.round(total * 0.8) : total;
  };

  const estimatedMonthlySavings = Math.round(nodeCount * 142 * (billingCycle === 'annual' ? 1.2 : 1.0));

  return (
    <section id="calculator" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            Predictable Scalability
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Transparent Pricing & Infrastructure ROI
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Scale your clusters dynamically. Zero hidden egress surcharges or opaque tier penalties.
          </p>

          <div className="mt-6 inline-flex items-center p-1 bg-white/5 rounded-xl border border-white/10">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                billingCycle === 'annual'
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] text-cyan-300 font-bold bg-cyan-500/20 px-1.5 py-0.5 rounded">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-14 glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-bold text-white">Active Worker Nodes / Container Instances</span>
              </div>
              <p className="text-xs text-slate-300">Drag to forecast workload capacity and arbitrage savings</p>
            </div>
            <div className="text-right">
              <span className="text-3xl font-extrabold text-cyan-300 font-mono tabular-nums">
                {nodeCount}
              </span>
              <span className="text-xs text-slate-300 ml-1">Nodes</span>
            </div>
          </div>

          <input
            type="range"
            min="5"
            max="250"
            step="5"
            value={nodeCount}
            onChange={(e) => setNodeCount(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
          />

          <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <Zap className="w-4 h-4 text-violet-400" />
              <span>Projected Egress & Spot Arbitrage Savings:</span>
            </div>
            <span className="text-emerald-400 font-bold font-mono text-sm tabular-nums">
              ~${estimatedMonthlySavings.toLocaleString()} / month saved
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <h3 className="text-lg font-bold text-white">Core Mesh</h3>
                <p className="text-xs text-slate-300 mt-1">For growing engineering teams requiring low latency</p>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-white font-mono tabular-nums">
                    ${calculateTierPrice(14).toLocaleString()}
                  </span>
                  <span className="text-xs text-slate-300">/ month</span>
                </div>
                <div className="text-[11px] text-slate-300 font-mono mt-0.5">$14 per node/mo billed {billingCycle}</div>
              </div>

              <div className="space-y-3 text-xs text-slate-300 border-t border-white/10 pt-4">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Sub-2ms edge Anycast routing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Autonomous eBPF packet inspection</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>30-day telemetry retention</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Standard 99.95% SLA</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <button
                onClick={() => onSelectTier('Core Mesh')}
                className="w-full py-2.5 px-4 text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all cursor-pointer"
              >
                Deploy Core Mesh
              </button>
            </div>
          </div>

          <div className="glass-panel-elevated p-6 sm:p-8 rounded-2xl border border-cyan-400/40 relative flex flex-col justify-between shadow-xl shadow-cyan-950/40">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
              Most Popular
            </div>
            <div>
              <div className="mb-4">
                <h3 className="text-lg font-bold text-white">Enterprise Mesh</h3>
                <p className="text-xs text-slate-300 mt-1">For mission-critical distributed production workloads</p>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-cyan-300 font-mono tabular-nums">
                    ${calculateTierPrice(28).toLocaleString()}
                  </span>
                  <span className="text-xs text-slate-300">/ month</span>
                </div>
                <div className="text-[11px] text-slate-300 font-mono mt-0.5">$28 per node/mo billed {billingCycle}</div>
              </div>

              <div className="space-y-3 text-xs text-slate-200 border-t border-white/10 pt-4">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Sub-0.8ms median global latency</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Post-quantum ML-KEM TLS encryption</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Autonomous cross-cloud spot arbitrage</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>99.999% SLA with financial guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Dedicated Slack & 15m on-call paging</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <button
                onClick={() => onSelectTier('Enterprise Mesh')}
                className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 rounded-lg transition-all shadow-md shadow-violet-600/30 cursor-pointer"
              >
                Deploy Enterprise Mesh
              </button>
            </div>
          </div>

          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <h3 className="text-lg font-bold text-white">Sovereign Cloud</h3>
                <p className="text-xs text-slate-300 mt-1">For regulated defense, banking, & healthcare systems</p>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-white font-mono">
                    Custom
                  </span>
                </div>
                <div className="text-[11px] text-slate-300 font-mono mt-0.5">Air-gapped & dedicated Bare-Metal instances</div>
              </div>

              <div className="space-y-3 text-xs text-slate-300 border-t border-white/10 pt-4">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Air-gapped on-premise installation option</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>FedRAMP High & FIPS 140-3 validation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Custom hardware security module (HSM) keys</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>24/7 designated Principal Architect</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <button
                onClick={() => onSelectTier('Sovereign Cloud')}
                className="w-full py-2.5 px-4 text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all cursor-pointer"
              >
                Contact Enterprise Architect
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};