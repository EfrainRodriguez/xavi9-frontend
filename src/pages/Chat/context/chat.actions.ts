import { chatApi } from "../../../api/chat";
import { ActionTypes, Action, Dispatch, ChatMessage } from "./chat.types";

export const setMessages = (messages: ChatMessage[]): Action => ({
    type: ActionTypes.SET_MESSAGES,
    payload: messages
});

export const setIsLoading = (isLoading: boolean): Action => ({
    type: ActionTypes.SET_IS_LOADING,
    payload: isLoading
});

export const sendChatQuestion = async (dispatch: Dispatch, question: string) => {
    dispatch(setIsLoading(true));
    try {
        const response = await chatApi(question);
        dispatch(setIsLoading(false));
        return response;
    } catch (error) {
        dispatch(setIsLoading(false));
        throw error;
    }
};
