import { State, ActionTypes, Action } from "./chat.types";

const botName = "Xavi9-Bot";

export const initialState: State = {
  messages: [
    {
      text: `Hola, soy ${botName}, cómo puedo ayudarte?`,
      isBot: true,
    },
  ],
  isLoading: false,
};

const chatReducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SET_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      };
    case ActionTypes.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default chatReducer;
