import { ControlsInterface } from './controls/interfaces/controlsInterface';
import { LogInterface } from './log/interfaces/logInterface';
import { ProcessInterface } from './process/interfaces/processInterface';
import { TransferLogInterface } from './transferLog/interfaces/transferLogInterface';

export interface StoreInterface {
  controls: ControlsInterface;
  process: ProcessInterface;
  transferLogs: TransferLogInterface[];
  logs: LogInterface[];
}

export interface ActionInterface {
  type: string;
  data: any;
}
