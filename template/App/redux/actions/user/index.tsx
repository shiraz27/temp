import {UserActionType} from '../../constants/ActionTypes';

import {SetUserActionType, } from '../../constants/UserTypes';

export const setUser = (user: any): SetUserActionType => {
  return {
    type: UserActionType.SET_USER,
    payload: user,
  };
};
