import { actionCreator } from "../utils";

export enum ACTIONS {
  AUTH_CALL = "@@capvel/AUTH_CALL",
  AUTH_FAILURE = "@@capvel/AUTH_FAILURE",
  AUTH_SUCCESS = "@@capvel/AUTH_SUCCESS",
  AUTH_LOGOUT = "@@capvel/AUTH_LOGOUT",
}

export const authActionCall = actionCreator(ACTIONS.AUTH_CALL);
export const authFailureActionCall = actionCreator(ACTIONS.AUTH_FAILURE);
export const authSuccessActionCall = actionCreator(ACTIONS.AUTH_SUCCESS);
export const authLogoutActionCall = actionCreator(ACTIONS.AUTH_LOGOUT);
