import { createContext, useReducer, useContext } from "react";

import loadPdfReducer, { initialState } from "./load-file.reducer";
import { State, Dispatch } from "./load-file.types";

const ApiContext = createContext<{ state: State; dispatch: Dispatch }>({
    state: initialState,
    dispatch: () => {}
});

const ApiProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(loadPdfReducer, initialState);

    return <ApiContext.Provider value={{ state, dispatch }}>{children}</ApiContext.Provider>;
};

const useLoadPdfContext = () => {
    const context = useContext(ApiContext);

    if (context === undefined) {
        throw new Error("useLoadPdfContext must be used within a LoadPdfProvider");
    }

    return context;
};

export { useLoadPdfContext, ApiProvider as LoadPdfProvider };
