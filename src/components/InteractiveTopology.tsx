import React, { useState } from 'react';
import {
  Globe, Shield, Server, Database,
  Terminal, Copy, Check, Sliders
} from 'lucide-react';

export const InteractiveTopology: React.FC = () => {
  const [enableWasmFilters, setEnableWasmFilters] = useState(true);
  const [enableQuantumCrypto, setEnableQuantumCrypto] = useState(true);
  const [enableNeuralCache, setEnableNeuralCache] = useState(true);
  const [copiedCode, setCopiedCode] = useState(false);
  const [selectedArchComponent, setSelectedArchComponent] = useState<string>('gateway');

  const getTerraformConfig = () => {
    return `resource "vektor_cluster_mesh" "production" {
  name        = "vektor-enterprise-global"
  environment = "production"
  region      = "global-anycast"

  edge_acceleration {
    wasm_filters_enabled = ${enableWasmFilters}
    neural_caching       = ${enableNeuralCache}
    cache_ttl_seconds    = 3600
  }

  security_posture {
    quantum_safe_tls = ${enableQuantumCrypto}
    cipher_suite     = "ML-KEM-1024-AES256-GCM"
    ebpf_firewall    = true
    ddos_protection  = "autonomous-l7"
  }

  observability {
    telemetry_rate_hz   = 1000
    retention_days      = 90
    anomaly_detection   = "neural-predictive"
  }
}`;
  };

  const copyConfig = () => {
    navigator.clipboard.writeText(getTerraformConfig());
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="solutions" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            Declarative Cloud Engine
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Interactive Architecture & IaC Generator
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Toggle enterprise capabilities below to observe the real-time topology flow and generate production-ready Terraform manifests.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 glass-panel-elevated p-6 sm:p-8 rounded-2xl flex flex-col justify-between border border-cyan-500/20">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-bold text-white font-mono">TOPOLOGY CONFIGURATOR</span>
                </div>
                <span className="text-xs text-slate-300 font-mono">Live Mesh Sync</span>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => setEnableWasmFilters(!enableWasmFilters)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    enableWasmFilters
                      ? 'bg-cyan-500/10 border-cyan-400/40 text-cyan-300'
                      : 'bg-white/[0.02] border-white/10 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-semibold mb-1">
                    <span>Wasm Filters</span>
                    <span className={`w-2 h-2 rounded-full ${enableWasmFilters ? 'bg-cyan-400' : 'bg-slate-600'}`} />
                  </div>
                  <div className="text-[11px] text-slate-300">Sub-0.2ms edge evaluation</div>
                </button>

                <button
                  onClick={() => setEnableQuantumCrypto(!enableQuantumCrypto)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    enableQuantumCrypto
                      ? 'bg-violet-500/10 border-violet-400/40 text-violet-300'
                      : 'bg-white/[0.02] border-white/10 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-semibold mb-1">
                    <span>Post-Quantum TLS</span>
                    <span className={`w-2 h-2 rounded-full ${enableQuantumCrypto ? 'bg-violet-400' : 'bg-slate-600'}`} />
                  </div>
                  <div className="text-[11px] text-slate-300">ML-KEM 1024 encryption</div>
                </button>

                <button
                  onClick={() => setEnableNeuralCache(!enableNeuralCache)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    enableNeuralCache
                      ? 'bg-indigo-500/10 border-indigo-400/40 text-indigo-300'
                      : 'bg-white/[0.02] border-white/10 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-semibold mb-1">
                    <span>Neural Caching</span>
                    <span className={`w-2 h-2 rounded-full ${enableNeuralCache ? 'bg-indigo-400' : 'bg-slate-600'}`} />
                  </div>
                  <div className="text-[11px] text-slate-300">Dynamic AI cache hit 98%</div>
                </button>
              </div>

              <div className="mt-8 p-6 bg-black/40 rounded-xl border border-white/10 relative overflow-hidden">
                <div className="flex items-center justify-between text-xs text-slate-300 mb-6 font-mono">
                  <span>PACKET ROUTING FLOW</span>
                  <span className="text-cyan-400">STATUS: NOMINAL</span>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
                  <div
                    onClick={() => setSelectedArchComponent('dns')}
                    className={`cursor-pointer p-4 rounded-xl border text-center transition-all w-full sm:w-28 ${
                      selectedArchComponent === 'dns' ? 'bg-cyan-950/40 border-cyan-400 shadow-md' : 'bg-white/5 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <Globe className="w-5 h-5 mx-auto mb-2 text-cyan-400" />
                    <span className="text-xs font-mono font-bold text-white block">Anycast DNS</span>
                    <span className="text-[10px] text-slate-300">0.2ms</span>
                  </div>

                  <div className="hidden sm:block text-slate-600">→</div>

                  <div
                    onClick={() => setSelectedArchComponent('gateway')}
                    className={`cursor-pointer p-4 rounded-xl border text-center transition-all w-full sm:w-28 ${
                      selectedArchComponent === 'gateway' ? 'bg-violet-950/40 border-violet-400 shadow-md' : 'bg-white/5 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <Shield className="w-5 h-5 mx-auto mb-2 text-violet-400" />
                    <span className="text-xs font-mono font-bold text-white block">Edge Shield</span>
                    <span className="text-[10px] text-slate-300">{enableQuantumCrypto ? 'Quantum TLS' : 'TLS 1.3'}</span>
                  </div>

                  <div className="hidden sm:block text-slate-600">→</div>

                  <div
                    onClick={() => setSelectedArchComponent('mesh')}
                    className={`cursor-pointer p-4 rounded-xl border text-center transition-all w-full sm:w-28 ${
                      selectedArchComponent === 'mesh' ? 'bg-indigo-950/40 border-indigo-400 shadow-md' : 'bg-white/5 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <Server className="w-5 h-5 mx-auto mb-2 text-indigo-400" />
                    <span className="text-xs font-mono font-bold text-white block">Service Mesh</span>
                    <span className="text-[10px] text-slate-300">eBPF routed</span>
                  </div>

                  <div className="hidden sm:block text-slate-600">→</div>

                  <div
                    onClick={() => setSelectedArchComponent('db')}
                    className={`cursor-pointer p-4 rounded-xl border text-center transition-all w-full sm:w-28 ${
                      selectedArchComponent === 'db' ? 'bg-cyan-950/40 border-cyan-400 shadow-md' : 'bg-white/5 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <Database className="w-5 h-5 mx-auto mb-2 text-cyan-400" />
                    <span className="text-xs font-mono font-bold text-white block">Vector DB</span>
                    <span className="text-[10px] text-slate-300">RAFT cluster</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-300 flex items-center justify-between">
                  <span>
                    {selectedArchComponent === 'dns' && 'Global BGP routing directs requests to the geographically closest edge POP.'}
                    {selectedArchComponent === 'gateway' && 'Post-quantum TLS and eBPF rate-limiting sanitize traffic before application boundaries.'}
                    {selectedArchComponent === 'mesh' && 'Microsecond service mesh distributes work across container replicas with zero proxy latency.'}
                    {selectedArchComponent === 'db' && 'State synchronization with distributed Raft consensus and automated hot snapshotting.'}
                  </span>
                  <span className="text-cyan-400 font-mono text-[11px]">Active</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-300 flex items-center justify-between">
              <span>Configuration automatically validated against Terraform Registry schemas</span>
              <span className="text-slate-200 font-mono">v1.8+</span>
            </div>
          </div>

          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-2xl flex flex-col justify-between border border-white/10">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-violet-400" />
                  <span className="text-sm font-bold text-white font-mono">TERRAFORM MANIFEST</span>
                </div>
                <button
                  onClick={copyConfig}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/10 hover:bg-white/15 text-xs text-slate-200 transition-colors font-mono cursor-pointer"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? 'Copied!' : 'Copy Code'}</span>
                </button>
              </div>

              <div className="mt-5 p-4 rounded-xl bg-black/60 border border-white/10 font-mono text-xs overflow-x-auto text-slate-300 max-h-96">
                <pre>
                  <code>{getTerraformConfig()}</code>
                </pre>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <button
                onClick={copyConfig}
                className="w-full py-2.5 px-4 text-xs font-semibold text-center text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 rounded-lg hover:from-violet-500 hover:to-cyan-400 transition-all shadow-md cursor-pointer"
              >
                {copiedCode ? 'Manifest Copied to Clipboard' : 'Copy Infrastructure Spec'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};