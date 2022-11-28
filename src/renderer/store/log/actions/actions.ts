import { LogInterface } from '../interfaces/logInterface';
import { action, PayloadAction } from 'typesafe-actions';

export enum Actions {
  UPDATE_LOGS_DATA = 'UPDATE_LOGS_DATA',
}

export const updateLogs = (
  logs: LogInterface[]
): PayloadAction<Actions, LogInterface[]> =>
  action(Actions.UPDATE_LOGS_DATA, logs);
