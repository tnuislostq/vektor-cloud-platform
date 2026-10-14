import React, { useState } from 'react';
import { Lock, Workflow, Gauge, Layers } from 'lucide-react';

export const ArchitectureBento: React.FC = () => {
  const [activeEncryptionTab, setActiveEncryptionTab] = useState<'kyber' | 'dilithium'>('kyber');
  const [autoscalingTriggered, setAutoscalingTriggered] = useState(false);

  return (
    <section id="architecture" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            Key Platform Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineered for Microsecond Precision & Autonomous Defense
          </h2>
          <p className="mt-3 text-slate-300 text-base">
            Every layer of the Vektor architecture operates autonomously from kernel-level eBPF packet inspection to predictive cross-cloud capacity arbitration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider">
                  01. PREDICTIVE INFRASTRUCTURE
                </span>
                <span className="text-xs text-slate-300 font-mono">180s Lookahead</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Autonomous Self-Healing & Pod Autoscaling
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                Our machine-learning scheduler detects memory leaks and traffic spikes before packet degradation occurs, pre-warming serverless workers and rerouting active sessions in milliseconds.
              </p>

              <div className="mt-6 p-4 rounded-xl bg-black/40 border border-white/5 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-mono">HEURISTIC PREDICTIVE CURVE</span>
                  <button
                    onClick={() => {
                      setAutoscalingTriggered(true);
                      setTimeout(() => setAutoscalingTriggered(false), 2200);
                    }}
                    className="text-cyan-400 hover:text-cyan-300 font-mono text-[11px] font-semibold underline cursor-pointer"
                  >
                    {autoscalingTriggered ? 'Stabilized (12ms)' : 'Simulate Anomaly'}
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                    <span className="text-slate-300 block text-[10px]">Predicted Influx</span>
                    <span className="font-mono text-cyan-300 font-bold tabular-nums">
                      {autoscalingTriggered ? '+410% Surge' : '+12% Baseline'}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                    <span className="text-slate-300 block text-[10px]">Reaction Delta</span>
                    <span className="font-mono text-white font-bold tabular-nums">14ms MTTR</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                    <span className="text-slate-300 block text-[10px]">Worker Pods</span>
                    <span className="font-mono text-violet-300 font-bold tabular-nums">
                      {autoscalingTriggered ? '64 Replicas' : '18 Replicas'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
              <span>Zero manual on-call pages required for standard capacity bursts</span>
              <Workflow className="w-4 h-4 text-cyan-400" />
            </div>
          </div>

          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-violet-500/30 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-violet-400 font-semibold tracking-wider">
                  02. CRYPTOGRAPHIC MESH
                </span>
                <Lock className="w-4 h-4 text-violet-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Post-Quantum Zero-Trust
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                NIST-standardized ML-KEM (Kyber) and ML-DSA (Dilithium) cryptographic algorithms safeguarding every inter-cluster TLS tunnel.
              </p>

              <div className="mt-6 space-y-2">
                <div className="flex gap-2 p-1 bg-black/40 rounded-lg border border-white/5">
                  <button
                    onClick={() => setActiveEncryptionTab('kyber')}
                    className={`flex-1 py-1.5 px-2 text-xs font-mono font-medium rounded cursor-pointer ${
                      activeEncryptionTab === 'kyber'
                        ? 'bg-violet-600 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    ML-KEM-1024
                  </button>
                  <button
                    onClick={() => setActiveEncryptionTab('dilithium')}
                    className={`flex-1 py-1.5 px-2 text-xs font-mono font-medium rounded cursor-pointer ${
                      activeEncryptionTab === 'dilithium'
                        ? 'bg-violet-600 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    ML-DSA-87
                  </button>
                </div>
                <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg font-mono text-[11px] text-slate-300">
                  <div className="text-violet-300 font-semibold mb-1">
                    {activeEncryptionTab === 'kyber' ? 'Key Encapsulation Mechanism' : 'Digital Signature Algorithm'}
                  </div>
                  <div>Entropy: 256-bit Post-Quantum Secure</div>
                  <div className="text-cyan-400">Rotation cadence: Every 900 seconds</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-300">
              Automated mTLS cert provisioning via SPIFFE/SPIRE
            </div>
          </div>

          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider">
                  03. ARBITRAGE ROUTING
                </span>
                <Gauge className="w-4 h-4 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Neural Cost Optimization
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Dynamically migrates non-latency-critical compute across AWS, GCP, and Azure spot instances to save up to 64% on cloud bills.
              </p>

              <div className="mt-6 p-3 bg-black/40 rounded-xl border border-white/5 space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-300">AWS Spot Ingress</span>
                  <span className="text-emerald-400">-58% Cost</span>
                </div>
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-300">GCP TPU Pool</span>
                  <span className="text-emerald-400">-64% Cost</span>
                </div>
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-300">Azure Compute</span>
                  <span className="text-emerald-400">-52% Cost</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-300">
              Real-time spot market bidding with zero execution drop
            </div>
          </div>

          <div className="md:col-span-2 glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-violet-500/30 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-violet-400 font-semibold tracking-wider">
                  04. KERNEL OBSERVABILITY
                </span>
                <span className="text-xs text-slate-300 font-mono">Zero-Overhead Probes</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                eBPF Kernel-Level Deep Packet Telemetry
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                Bypasses traditional slow user-space monitoring agents. Inspect TCP state transitions, HTTP header anomalies, and DNS query latency directly inside Linux kernel ring buffers with &lt;0.5% CPU overhead.
              </p>

              <div className="mt-6 p-3.5 bg-black/60 rounded-xl border border-white/10 font-mono text-xs text-slate-300 space-y-1">
                <div className="text-cyan-400">$ vektor trace --attach-kprobe tcp_v4_connect --cluster us-east</div>
                <div className="text-slate-300">  [kprobe] attached to 1,842 kernel interfaces across 42 hosts</div>
                <div className="text-slate-300">  [status] stream initialized: 0 packet drops detected</div>
                <div className="text-violet-400">  [security] zero-copy BPF ring buffer throughput: 4.8 GB/s</div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
              <span>Full compliance with SOC2, ISO-27001, and HIPAA compliance logs</span>
              <Layers className="w-4 h-4 text-violet-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};