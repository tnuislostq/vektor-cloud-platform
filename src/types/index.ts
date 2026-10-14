export interface ClusterNode {
  id: string;
  name: string;
  region: string;
  status: 'healthy' | 'warning' | 'critical';
  cpu: number;
  memory: number;
  latencyMs: number;
  requestsPerSec: number;
}

export interface SecurityEvent {
  id: string;
  timestamp: string;
  ip: string;
  type: string;
  action: 'Blocked' | 'Quarantined' | 'Mitigated';
  severity: 'low' | 'medium' | 'high';
}