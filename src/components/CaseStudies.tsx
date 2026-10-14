import React from 'react';
import { Building2 } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  const cases = [
    {
      company: 'Finova Global Financial',
      domain: 'Fintech & High-Frequency Trading',
      metric: '68% Latency Reduction',
      timeframe: 'In 3 Months Across 14 Stock Exchanges',
      quote: 'Vektor replaced five fragmented observability stacks with a single microsecond eBPF control plane. Our mean time to detect edge anomalies dropped from 22 minutes to 4.2 seconds.',
      author: 'Marcus Vance',
      role: 'Head of Global Core Infrastructure',
      badgeColor: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10'
    },
    {
      company: 'Aetherion Medical Systems',
      domain: 'Digital Health & FHIR Telemetry',
      metric: '100% HIPAA Compliance',
      timeframe: 'Zero Breaches Across 4.2M Patient Records',
      quote: 'The post-quantum TLS handshake and automated mTLS rotation allowed our hospital network to pass FedRAMP and HIPAA audits in record time without degrading patient vital telemetry.',
      author: 'Dr. Elena Rostova',
      role: 'Chief Information Security Officer',
      badgeColor: 'border-violet-500/30 text-violet-400 bg-violet-500/10'
    },
    {
      company: 'Veloce HyperCloud Gaming',
      domain: 'Real-Time Edge Multiplayer Mesh',
      metric: '$3.4M Annual Egress Saved',
      timeframe: 'Over 12 Months of Spot Node Arbitrage',
      quote: 'By dynamically routing live multiplayer UDP packets to the cheapest available multi-cloud spot instances, Vektor reduced our raw compute spend by 54% while maintaining sub-15ms game ping.',
      author: 'Soren Lindqvist',
      role: 'VP of Platform Engineering',
      badgeColor: 'border-indigo-500/30 text-indigo-400 bg-indigo-500/10'
    }
  ];

  return (
    <section id="benefits" className="py-20 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            Enterprise Benefits & ROI
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trusted by Mission-Critical Engineering Teams
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            From high-frequency financial ledgers to real-time multiplayer networks, Vektor powers resilient cloud infrastructure worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.company}</span>
                  </span>
                  <span className={`text-[11px] font-mono px-2 py-0.5 rounded border ${item.badgeColor}`}>
                    Verified
                  </span>
                </div>

                <div className="mb-4">
                  <div className="text-2xl lg:text-3xl font-extrabold text-white font-mono tracking-tight tabular-nums">
                    {item.metric}
                  </div>
                  <div className="text-xs text-cyan-300 font-medium mt-0.5">
                    {item.timeframe}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-violet-600 to-cyan-500 p-[1px] shrink-0">
                  <div className="w-full h-full bg-[#0A1026] rounded-full flex items-center justify-center text-xs font-bold font-mono text-cyan-300">
                    {item.author.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="text-xs">
                  <div className="font-bold text-white">{item.author}</div>
                  <div className="text-slate-300 text-[11px]">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};