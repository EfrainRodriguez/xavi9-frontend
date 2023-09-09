import { State, ActionTypes, Action } from "./load-file.types";

export const initialState: State = {
    files: [],
    isLoading: false
};

const loadFileReducer = (state = initialState, action: Action): State => {
    switch (action.type) {
        case ActionTypes.SET_FILES:
            return {
                ...state,
                files: action.payload
            };
        case ActionTypes.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        default:
            return state;
    }
};

export default loadFileReducer;
