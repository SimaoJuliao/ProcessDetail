import initialState from './initialState';
import { Actions } from './actions/actions';
import { ControlsInterface } from './interfaces/controlsInterface';
import { AnyAction } from 'redux';

export const controlsReducer = (
  state: ControlsInterface = initialState,
  action: AnyAction
): ControlsInterface => {
  switch (action.type) {
    case Actions.UPDATE_ENVIRONMENT: {
      const newState = { ...state };
      newState.environment = action.payload;
      return newState;
    }
    default:
      return state;
  }
};
