/* eslint-disable indent */
/* eslint-disable default-param-last */
import {UserActionType} from '../constants/ActionTypes';

const initialState = {user: null};

export default function (state = initialState, action) {
  switch (action.type) {
    case UserActionType.SET_USER:
      return {...state, user: action.payload};
    case UserActionType.SET_FCM:
      return {...state, token: action.payload};
    default:
      return state;
  }
}
