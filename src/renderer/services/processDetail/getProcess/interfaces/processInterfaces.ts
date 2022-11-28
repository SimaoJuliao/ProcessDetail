import { ProcessInterface } from 'renderer/store/process/interfaces/processInterface';

export interface ProcessPayload {
  processId?: string;
  proposalNumber?: string;
  policyNumber?: string;
}

export interface ProcessResponse {
  process: ProcessInterface;
}
