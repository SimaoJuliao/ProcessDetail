import { Actions } from './actions/actions';
import { AnyAction } from 'redux';
import { TransferLogInterface } from './interfaces/transferLogInterface';

export const transferLogReducer = (
  state: TransferLogInterface[] = [],
  action: AnyAction
): TransferLogInterface[] => {
  switch (action.type) {
    case Actions.UPDATE_TRANSFER_LOG_DATA: {
      return action.payload;
    }
    default:
      return state;
  }
};
