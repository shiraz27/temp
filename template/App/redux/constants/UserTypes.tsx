import { UserActionType } from './ActionTypes';

export type SetUserActionType = {
  payload: boolean,
  type: typeof UserActionType.SET_USER,
};
