import initialState from './initialState';
import { AnyAction } from 'redux';
import { ProcessInterface } from './interfaces/processInterface';
import { Actions } from './actions/actions';

export const processReducer = (
  state: ProcessInterface = initialState,
  action: AnyAction
): ProcessInterface => {
  switch (action.type) {
    case Actions.UPDATE_PROCESS_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};
