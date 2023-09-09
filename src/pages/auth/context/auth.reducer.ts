import { State, ActionTypes, Action } from "./auth.types";

export const initialState: State = {
  isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")!),
};

const authReducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SET_IS_AUTHENTICATED:
      localStorage.setItem("isAuthenticated", JSON.stringify(action.payload));
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
