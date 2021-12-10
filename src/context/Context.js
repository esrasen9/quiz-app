import React, {createContext, useContext, useReducer} from "react";

export const Context = createContext(null);

export const Provider = ({children, reducer, initialState}) => {
    return (
        <Context.Provider value={useReducer(reducer, initialState)}>
            {children}
        </Context.Provider>
    )
}

export const useStateValue = () => useContext(Context);