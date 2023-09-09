export enum ActionTypes {
  SET_IS_AUTHENTICATED,
}

export interface SetIsAuthenticated {
  type: typeof ActionTypes.SET_IS_AUTHENTICATED;
  payload: boolean;
}

export interface State {
  isAuthenticated: boolean;
}

export type Action = SetIsAuthenticated;

export type Dispatch = (action: Action) => void;
