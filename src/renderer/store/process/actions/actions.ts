import { ProcessInterface } from '../interfaces/processInterface';
import { action, PayloadAction } from 'typesafe-actions';

export enum Actions {
  UPDATE_PROCESS_DATA = 'UPDATE_PROCESS_DATA',
}

export const updateProcess = (
  process: ProcessInterface
): PayloadAction<Actions, ProcessInterface> =>
  action(Actions.UPDATE_PROCESS_DATA, process);
