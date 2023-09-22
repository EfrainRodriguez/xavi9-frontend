export enum ActionTypes {
    SET_MESSAGES,
    SET_IS_LOADING
}

export interface ChatMessage {
    text: string;
    isBot: boolean;
}

export interface SetMessages {
    type: typeof ActionTypes.SET_MESSAGES;
    payload: ChatMessage[];
}

export interface SetIsLoading {
    type: typeof ActionTypes.SET_IS_LOADING;
    payload: boolean;
}

export interface State {
    messages: ChatMessage[];
    isLoading: boolean;
}

export type Action = SetMessages | SetIsLoading;

export type Dispatch = (action: Action) => void;
