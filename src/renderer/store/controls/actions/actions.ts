import { action, PayloadAction } from 'typesafe-actions';

export enum Actions {
  UPDATE_ENVIRONMENT = 'UPDATE_ENVIRONMENT',
}

export const updateEnvironment = (
  environment: string
): PayloadAction<Actions, string> =>
  action(Actions.UPDATE_ENVIRONMENT, environment);
