import { Actions } from './actions/actions';
import { LogInterface } from './interfaces/logInterface';
import { AnyAction } from 'redux';

export const logsReducer = (
  state: LogInterface[] = [],
  action: AnyAction
): LogInterface[] => {
  switch (action.type) {
    case Actions.UPDATE_LOGS_DATA: {
      return action.payload;
    }
    default:
      return state;
  }
};
