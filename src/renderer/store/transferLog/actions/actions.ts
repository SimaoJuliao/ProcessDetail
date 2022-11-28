import { TransferLogInterface } from '../interfaces/transferLogInterface';
import { action, PayloadAction } from 'typesafe-actions';

export enum Actions {
  UPDATE_TRANSFER_LOG_DATA = 'UPDATE_TRANSFER_LOG_DATA',
}

export const updateTransferLog = (
  transferLog: TransferLogInterface[]
): PayloadAction<Actions, TransferLogInterface[]> =>
  action(Actions.UPDATE_TRANSFER_LOG_DATA, transferLog);
