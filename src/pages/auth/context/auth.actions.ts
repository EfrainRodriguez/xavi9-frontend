import { ActionTypes, Action } from "./auth.types";

export const setIsAuthenticated = (payload: boolean): Action => ({
  type: ActionTypes.SET_IS_AUTHENTICATED,
  payload,
});
