import React, { useState } from 'react';
import {
  Server, Shield, Activity, Cpu, Wifi,
  RefreshCw, CheckCircle2, Globe, Zap, BarChart3, Lock
} from 'lucide-react';
import { ClusterNode, SecurityEvent } from '../types';

export const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'topology' | 'throughput' | 'security' | 'gateway'>('topology');
  const [selectedRegion, setSelectedRegion] = useState<'us-east' | 'eu-west' | 'ap-east'>('us-east');
  const [isSimulatingSpike, setIsSimulatingSpike] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [selectedNodeId, setSelectedNodeId] = useState<string>('node-1');

  const [throughput, setThroughput] = useState(48.2);
  const [reqRate, setReqRate] = useState(84200);
  const [cpuUsage, setCpuUsage] = useState(62);
  const [activeNodesCount, setActiveNodesCount] = useState(128);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [nodes, setNodes] = useState<ClusterNode[]>([
    { id: 'node-1', name: 'core-ingress-alpha', region: 'us-east-1a', status: 'healthy', cpu: 58, memory: 71, latencyMs: 0.9, requestsPerSec: 28400 },
    { id: 'node-2', name: 'neural-inference-01', region: 'us-east-1b', status: 'healthy', cpu: 76, memory: 84, latencyMs: 1.4, requestsPerSec: 19800 },
    { id: 'node-3', name: 'edge-caching-proxy', region: 'us-east-1c', status: 'healthy', cpu: 44, memory: 62, latencyMs: 0.4, requestsPerSec: 36200 },
    { id: 'node-4', name: 'db-read-replica-east', region: 'us-east-1d', status: 'healthy', cpu: 65, memory: 79, latencyMs: 1.8, requestsPerSec: 14500 },
    { id: 'node-5', name: 'vault-crypto-auth', region: 'us-east-1e', status: 'healthy', cpu: 32, memory: 48, latencyMs: 0.6, requestsPerSec: 11200 },
  ]);

  const securityEvents: SecurityEvent[] = [
    { id: 'sec-1', timestamp: '10:48:12.402', ip: '185.220.101.5', type: 'Layer 7 SYN Flood Attempt', action: 'Mitigated', severity: 'high' },
    { id: 'sec-2', timestamp: '10:47:55.118', ip: '194.26.29.112', type: 'SQL Ingress Probe (CVE-2025)', action: 'Blocked', severity: 'medium' },
    { id: 'sec-3', timestamp: '10:46:30.884', ip: '45.154.255.89', type: 'Suspicious JWT Signature Replay', action: 'Quarantined', severity: 'low' },
    { id: 'sec-4', timestamp: '10:45:04.220', ip: '91.240.118.23', type: 'Malformed GraphQL AST Query', action: 'Blocked', severity: 'medium' },
    { id: 'sec-5', timestamp: '10:43:18.910', ip: '185.196.8.44', type: 'Excessive API Rate Burst', action: 'Mitigated', severity: 'low' },
  ];

  const activeNode = nodes.find(n => n.id === selectedNodeId) || nodes[0];

  const handleSimulateSpike = () => {
    if (isSimulatingSpike) return;
    setIsSimulatingSpike(true);
    setToastMessage('Traffic Surge Triggered: +320% global ingress injected. Auto-scaling worker pools...');

    setThroughput(142.6);
    setReqRate(289500);
    setCpuUsage(89);
    setActiveNodesCount(164);

    setNodes(prev => prev.map(n => ({
      ...n,
      cpu: Math.min(94, n.cpu + 22),
      requestsPerSec: Math.round(n.requestsPerSec * 2.8),
      latencyMs: +(n.latencyMs + 0.3).toFixed(2)
    })));

    setTimeout(() => {
      setToastMessage('Auto-scaling stabilized: +36 pods provisioned in 280ms. Latency normalized.');
    }, 2500);

    setTimeout(() => {
      setIsSimulatingSpike(false);
      setThroughput(48.2);
      setReqRate(84200);
      setCpuUsage(62);
      setActiveNodesCount(128);
      setNodes([
        { id: 'node-1', name: 'core-ingress-alpha', region: 'us-east-1a', status: 'healthy', cpu: 58, memory: 71, latencyMs: 0.9, requestsPerSec: 28400 },
        { id: 'node-2', name: 'neural-inference-01', region: 'us-east-1b', status: 'healthy', cpu: 76, memory: 84, latencyMs: 1.4, requestsPerSec: 19800 },
        { id: 'node-3', name: 'edge-caching-proxy', region: 'us-east-1c', status: 'healthy', cpu: 44, memory: 62, latencyMs: 0.4, requestsPerSec: 36200 },
        { id: 'node-4', name: 'db-read-replica-east', region: 'us-east-1d', status: 'healthy', cpu: 65, memory: 79, latencyMs: 1.8, requestsPerSec: 14500 },
        { id: 'node-5', name: 'vault-crypto-auth', region: 'us-east-1e', status: 'healthy', cpu: 32, memory: 48, latencyMs: 0.6, requestsPerSec: 11200 },
      ]);
      setToastMessage(null);
    }, 6500);
  };

  const handleRunDiagnostic = () => {
    if (isScanning) return;
    setIsScanning(true);
    setScanStep(1);

    setTimeout(() => setScanStep(2), 700);
    setTimeout(() => setScanStep(3), 1400);
    setTimeout(() => setScanStep(4), 2100);
    setTimeout(() => {
      setIsScanning(false);
      setScanStep(0);
      setToastMessage('Full Diagnostic Complete: 1,420 microservices verified. Zero vulnerabilities identified.');
      setTimeout(() => setToastMessage(null), 3500);
    }, 2800);
  };

  return (
    <section id="dashboard" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-3">
            <span>Glassmorphic IT Ops Console</span>
            <span aria-hidden="true" className="text-slate-600">/</span>
            <span>Real-time Telemetry Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Next-Gen Multi-Cloud Control Surface
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Inspect live cluster health, stream real-time throughput metrics, and test our automated self-healing response in the interactive playground below.
          </p>
        </div>

        <div className="relative rounded-2xl glass-panel-elevated overflow-hidden border border-cyan-500/20 shadow-2xl shadow-indigo-950/50">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/15 via-violet-600/10 to-transparent blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-violet-600/15 via-indigo-600/10 to-transparent blur-3xl pointer-events-none" />

          {toastMessage && (
            <div className="absolute top-16 left-1/2 -translate-x-1/2 z-30 px-4 py-2.5 rounded-xl bg-[#0F172A]/95 border border-cyan-400/40 text-xs font-medium text-cyan-200 shadow-xl backdrop-blur-md flex items-center gap-2 animate-bounce">
              <Zap className="w-4 h-4 text-cyan-300 animate-spin" />
              <span>{toastMessage}</span>
            </div>
          )}

          <div className="p-4 sm:p-5 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 bg-gradient-to-r from-[#0A1026]/80 to-[#0C1433]/80">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400" />
                <span className="font-mono text-sm font-bold text-white tracking-tight">
                  VEKTOR::OPS-GRID
                </span>
              </div>

              <div className="hidden sm:flex items-center p-1 bg-white/5 rounded-lg border border-white/5 text-xs">
                <button
                  onClick={() => setSelectedRegion('us-east')}
                  className={`px-2.5 py-1 rounded-md transition-all font-medium cursor-pointer ${
                    selectedRegion === 'us-east'
                      ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  us-east (Prod)
                </button>
                <button
                  onClick={() => setSelectedRegion('eu-west')}
                  className={`px-2.5 py-1 rounded-md transition-all font-medium cursor-pointer ${
                    selectedRegion === 'eu-west'
                      ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  eu-central
                </button>
                <button
                  onClick={() => setSelectedRegion('ap-east')}
                  className={`px-2.5 py-1 rounded-md transition-all font-medium cursor-pointer ${
                    selectedRegion === 'ap-east'
                      ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  ap-tokyo
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={handleSimulateSpike}
                disabled={isSimulatingSpike}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shadow-sm cursor-pointer ${
                  isSimulatingSpike
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-400/30 animate-pulse'
                    : 'bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white shadow-violet-600/20'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>{isSimulatingSpike ? 'Traffic Spike Active' : 'Simulate Traffic Spike'}</span>
              </button>

              <button
                onClick={handleRunDiagnostic}
                disabled={isScanning}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin text-cyan-400' : ''}`} />
                <span>{isScanning ? `Testing Stage ${scanStep}/4...` : 'Run Probe'}</span>
              </button>
            </div>
          </div>

          {isScanning && (
            <div className="w-full bg-slate-900 h-1 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-violet-500 transition-all duration-500"
                style={{ width: `${(scanStep / 4) * 100}%` }}
              />
            </div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 sm:p-5 border-b border-white/10 bg-black/20">
            <div className="glass-panel p-3.5 rounded-xl border border-white/5">
              <div className="flex items-center justify-between text-xs text-slate-300 mb-1">
                <span>Network Throughput</span>
                <Wifi className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-bold font-mono text-white tabular-nums">
                  {throughput.toFixed(1)}
                </span>
                <span className="text-xs text-slate-300 font-mono">GB/s</span>
              </div>
              <div className="mt-2 w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-cyan-400 to-indigo-500 h-full rounded-full transition-all duration-700"
                  style={{ width: `${Math.min(100, (throughput / 150) * 100)}%` }}
                />
              </div>
            </div>

            <div className="glass-panel p-3.5 rounded-xl border border-white/5">
              <div className="flex items-center justify-between text-xs text-slate-300 mb-1">
                <span>Ingress Requests</span>
                <Activity className="w-3.5 h-3.5 text-violet-400" />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-bold font-mono text-white tabular-nums">
                  {reqRate.toLocaleString()}
                </span>
                <span className="text-xs text-slate-300 font-mono">rps</span>
              </div>
              <div className="mt-2 w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-violet-500 to-cyan-400 h-full rounded-full transition-all duration-700"
                  style={{ width: `${Math.min(100, (reqRate / 300000) * 100)}%` }}
                />
              </div>
            </div>

            <div className="glass-panel p-3.5 rounded-xl border border-white/5">
              <div className="flex items-center justify-between text-xs text-slate-300 mb-1">
                <span>Cluster Compute</span>
                <Cpu className="w-3.5 h-3.5 text-indigo-400" />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-bold font-mono text-white tabular-nums">
                  {cpuUsage}%
                </span>
                <span className="text-xs text-slate-300 font-mono">{activeNodesCount} pods</span>
              </div>
              <div className="mt-2 w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${
                    cpuUsage > 80
                      ? 'bg-gradient-to-r from-amber-400 to-rose-500'
                      : 'bg-gradient-to-r from-cyan-400 to-indigo-500'
                  }`}
                  style={{ width: `${cpuUsage}%` }}
                />
              </div>
            </div>

            <div className="glass-panel p-3.5 rounded-xl border border-white/5">
              <div className="flex items-center justify-between text-xs text-slate-300 mb-1">
                <span>Zero-Trust Shield</span>
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-bold font-mono text-emerald-400">
                  Secured
                </span>
                <span className="text-xs text-slate-300 font-mono">0 Breaches</span>
              </div>
              <div className="mt-2 flex items-center gap-1.5 text-[11px] text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>eBPF filtering 100% active</span>
              </div>
            </div>
          </div>

          <div className="px-4 sm:px-6 pt-3 border-b border-white/10 bg-[#090F24]/90 flex items-center gap-2 overflow-x-auto scrollbar-none">
            <button
              onClick={() => setActiveTab('topology')}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold border-b-2 whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'topology'
                  ? 'border-cyan-400 text-cyan-300 bg-cyan-400/5'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Server className="w-4 h-4" />
              <span>Cluster Topology ({nodes.length} Nodes)</span>
            </button>

            <button
              onClick={() => setActiveTab('throughput')}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold border-b-2 whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'throughput'
                  ? 'border-cyan-400 text-cyan-300 bg-cyan-400/5'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>Real-Time Bandwidth Stream</span>
            </button>

            <button
              onClick={() => setActiveTab('security')}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold border-b-2 whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'security'
                  ? 'border-cyan-400 text-cyan-300 bg-cyan-400/5'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Lock className="w-4 h-4" />
              <span>Neural Threat Mitigations</span>
            </button>

            <button
              onClick={() => setActiveTab('gateway')}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold border-b-2 whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'gateway'
                  ? 'border-cyan-400 text-cyan-300 bg-cyan-400/5'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>Edge API Gateway</span>
            </button>
          </div>

          <div className="p-4 sm:p-6 min-h-[380px]">
            {activeTab === 'topology' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-300 mb-2 font-mono">
                    <span>ACTIVE WORKLOAD CONTAINERS</span>
                    <span>CLICK NODE TO INSPECT</span>
                  </div>
                  {nodes.map(node => (
                    <div
                      key={node.id}
                      onClick={() => setSelectedNodeId(node.id)}
                      className={`p-3.5 rounded-xl cursor-pointer transition-all border ${
                        selectedNodeId === node.id
                          ? 'bg-gradient-to-r from-violet-950/60 to-cyan-950/40 border-cyan-400/50 shadow-md'
                          : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/5'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${node.status === 'healthy' ? 'bg-cyan-400' : 'bg-amber-400'}`} />
                          <div>
                            <span className="font-mono text-xs font-bold text-white tracking-wide">
                              {node.name}
                            </span>
                            <div className="text-[11px] text-slate-300">{node.region}</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 text-xs font-mono">
                          <div className="text-right">
                            <span className="text-slate-300 text-[10px] block">CPU</span>
                            <span className="text-white tabular-nums font-semibold">{node.cpu}%</span>
                          </div>
                          <div className="text-right">
                            <span className="text-slate-300 text-[10px] block">LATENCY</span>
                            <span className="text-cyan-300 tabular-nums font-semibold">{node.latencyMs}ms</span>
                          </div>
                          <div className="text-right hidden sm:block">
                            <span className="text-slate-300 text-[10px] block">LOAD</span>
                            <span className="text-slate-200 tabular-nums font-semibold">{node.requestsPerSec.toLocaleString()} rps</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="glass-panel p-5 rounded-xl border border-cyan-500/20 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div>
                        <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">Inspecting Node</span>
                        <h4 className="text-base font-bold text-white font-mono">{activeNode.name}</h4>
                      </div>
                      <span className="text-xs px-2 py-0.5 rounded bg-cyan-400/10 text-cyan-300 font-mono border border-cyan-400/20">
                        {activeNode.status}
                      </span>
                    </div>

                    <div className="mt-4 space-y-4 text-xs">
                      <div>
                        <div className="flex justify-between text-slate-300 mb-1">
                          <span>Compute Capacity</span>
                          <span className="font-mono text-white">{activeNode.cpu}% / 100%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-1.5">
                          <div
                            className="bg-gradient-to-r from-violet-500 to-cyan-400 h-full rounded-full transition-all"
                            style={{ width: `${activeNode.cpu}%` }}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-slate-300 mb-1">
                          <span>Memory Allocation</span>
                          <span className="font-mono text-white">{activeNode.memory}% / 64 GB</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-1.5">
                          <div
                            className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-full rounded-full transition-all"
                            style={{ width: `${activeNode.memory}%` }}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 pt-2">
                        <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                          <span className="text-[10px] text-slate-300 block">Ingress Protocol</span>
                          <span className="text-xs font-mono font-bold text-white">HTTP/3 (QUIC)</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                          <span className="text-[10px] text-slate-300 block">mTLS Handshake</span>
                          <span className="text-xs font-mono font-bold text-cyan-300">TLS 1.3 / AES-GCM</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-white/10">
                    <button
                      onClick={() => {
                        setNodes(prev => prev.map(n => n.id === activeNode.id ? { ...n, cpu: 42, latencyMs: 0.5 } : n));
                        setToastMessage(`Container ${activeNode.name} hot-rebalanced successfully.`);
                        setTimeout(() => setToastMessage(null), 2500);
                      }}
                      className="w-full py-2 px-3 text-xs font-semibold text-center text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 rounded-lg transition-all shadow-md cursor-pointer"
                    >
                      Rebalance Container Workload
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'throughput' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white">Aggregated Ingress & Egress Waveform</h3>
                    <p className="text-xs text-slate-300">Microsecond edge telemetry streamed via WebSockets</p>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-mono">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                      <span className="text-slate-300">Ingress (GB/s)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-violet-400" />
                      <span className="text-slate-300">Egress (GB/s)</span>
                    </div>
                  </div>
                </div>

                <div className="relative h-64 w-full bg-black/40 rounded-xl p-4 border border-white/10 overflow-hidden flex flex-col justify-between">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 800 200" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="cyanGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.0" />
                      </linearGradient>
                      <linearGradient id="violetGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    <line x1="0" y1="50" x2="800" y2="50" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                    <line x1="0" y1="100" x2="800" y2="100" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                    <line x1="0" y1="150" x2="800" y2="150" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />

                    <path
                      d={isSimulatingSpike
                        ? "M 0 160 Q 150 120 300 90 T 550 50 T 800 40 L 800 200 L 0 200 Z"
                        : "M 0 160 Q 150 130 300 120 T 550 110 T 800 115 L 800 200 L 0 200 Z"}
                      fill="url(#violetGradient)"
                      className="transition-all duration-700"
                    />
                    <path
                      d={isSimulatingSpike
                        ? "M 0 160 Q 150 120 300 90 T 550 50 T 800 40"
                        : "M 0 160 Q 150 130 300 120 T 550 110 T 800 115"}
                      fill="none"
                      stroke="#8B5CF6"
                      strokeWidth="2.5"
                      className="transition-all duration-700"
                    />

                    <path
                      d={isSimulatingSpike
                        ? "M 0 140 Q 120 70 280 40 T 500 25 T 800 20 L 800 200 L 0 200 Z"
                        : "M 0 140 Q 120 100 280 85 T 500 90 T 800 75 L 800 200 L 0 200 Z"}
                      fill="url(#cyanGradient)"
                      className="transition-all duration-700"
                    />
                    <path
                      d={isSimulatingSpike
                        ? "M 0 140 Q 120 70 280 40 T 500 25 T 800 20"
                        : "M 0 140 Q 120 100 280 85 T 500 90 T 800 75"}
                      fill="none"
                      stroke="#06B6D4"
                      strokeWidth="2.5"
                      className="transition-all duration-700"
                    />
                  </svg>

                  <div className="flex justify-between text-[11px] font-mono text-slate-300 pt-2 border-t border-white/5">
                    <span>-60 sec</span>
                    <span>-45 sec</span>
                    <span>-30 sec</span>
                    <span>-15 sec</span>
                    <span className="text-cyan-400 font-semibold">Live (0s)</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white">Live Threat Intelligence Feed</h3>
                    <p className="text-xs text-slate-300">Kernel eBPF packet filters running on host interfaces</p>
                  </div>
                  <div className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Real-Time Defense Active</span>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-white/10 text-slate-300 font-mono">
                        <th className="py-2.5 px-3">TIMESTAMP</th>
                        <th className="py-2.5 px-3">SOURCE IP</th>
                        <th className="py-2.5 px-3">ANOMALY VECTOR</th>
                        <th className="py-2.5 px-3">ENFORCEMENT</th>
                        <th className="py-2.5 px-3 text-right">SEVERITY</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {securityEvents.map(event => (
                        <tr key={event.id} className="hover:bg-white/[0.02] transition-colors">
                          <td className="py-2.5 px-3 font-mono text-slate-300 tabular-nums">{event.timestamp}</td>
                          <td className="py-2.5 px-3 font-mono text-cyan-300">{event.ip}</td>
                          <td className="py-2.5 px-3 text-slate-200 font-medium">{event.type}</td>
                          <td className="py-2.5 px-3">
                            <span className={`px-2 py-0.5 rounded text-[11px] font-mono font-medium ${
                              event.action === 'Blocked'
                                ? 'bg-rose-500/10 text-rose-300 border border-rose-500/20'
                                : event.action === 'Quarantined'
                                ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                                : 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20'
                            }`}>
                              {event.action}
                            </span>
                          </td>
                          <td className="py-2.5 px-3 text-right">
                            <span className="capitalize text-slate-300 font-medium">
                              {event.severity}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'gateway' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-white">Global Edge Cache Hit Ratio</h3>
                  <div className="glass-panel p-5 rounded-xl border border-white/10 space-y-4">
                    <div>
                      <div className="flex justify-between text-xs font-mono mb-1">
                        <span className="text-slate-300">Edge Cache Hit Rate</span>
                        <span className="text-cyan-400 font-bold">98.6%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-gradient-to-r from-cyan-400 to-indigo-500 h-full rounded-full" style={{ width: '98.6%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-mono mb-1">
                        <span className="text-slate-300">Wasm Filter Overhead</span>
                        <span className="text-violet-400 font-bold">0.12ms</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-gradient-to-r from-violet-500 to-indigo-500 h-full rounded-full" style={{ width: '12%' }} />
                      </div>
                    </div>

                    <div className="pt-2 text-xs text-slate-300 leading-relaxed">
                      Stateless routing rules are compiled into WebAssembly and distributed across 85 edge POPs via Anycast BGP in under 1.5 seconds.
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-white">Edge POP Latency Benchmark</h3>
                  <div className="space-y-2 text-xs font-mono">
                    {[
                      { city: 'Frankfurt (fra-01)', ping: '0.42ms', load: 'Nominal' },
                      { city: 'Ashburn (iad-04)', ping: '0.61ms', load: 'Nominal' },
                      { city: 'Tokyo (hnd-02)', ping: '0.88ms', load: 'Nominal' },
                      { city: 'Singapore (sin-03)', ping: '0.94ms', load: 'Nominal' },
                      { city: 'São Paulo (gru-01)', ping: '1.45ms', load: 'Nominal' },
                    ].map(pop => (
                      <div key={pop.city} className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                        <span className="text-slate-200">{pop.city}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-cyan-300 font-bold tabular-nums">{pop.ping}</span>
                          <span className="text-[10px] text-slate-300">{pop.load}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="px-5 py-3 border-t border-white/10 bg-[#070D22] flex flex-wrap items-center justify-between text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Telemetry Connected to Vektor Mesh Core</span>
            </div>
            <div className="flex items-center gap-4 font-mono">
              <span>Cluster Version: 3.4.1</span>
              <span>Sync: Every 500ms</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};