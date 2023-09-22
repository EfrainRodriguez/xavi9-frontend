import { createContext, useReducer, useContext } from "react";

import chatReducer, { initialState } from "./chat.reducer";
import { State, Dispatch } from "./chat.types";

const ApiContext = createContext<{ state: State; dispatch: Dispatch }>({
    state: initialState,
    dispatch: () => {}
});

const ApiProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(chatReducer, initialState);

    return <ApiContext.Provider value={{ state, dispatch }}>{children}</ApiContext.Provider>;
};

const useChatContext = () => {
    const context = useContext(ApiContext);

    if (context === undefined) {
        throw new Error("useChatContext must be used within a ChatProvider");
    }

    return context;
};

export { useChatContext, ApiProvider as ChatProvider };
