export enum ActionTypes {
    SET_FILES,
    SET_IS_LOADING
}

export interface SetFiles {
    type: typeof ActionTypes.SET_FILES;
    payload: File[];
}

export interface SetIsLoading {
    type: typeof ActionTypes.SET_IS_LOADING;
    payload: boolean;
}

export interface State {
    files: File[];
    isLoading: boolean;
}

export type Action = SetFiles | SetIsLoading;

export type Dispatch = (action: Action) => void;
