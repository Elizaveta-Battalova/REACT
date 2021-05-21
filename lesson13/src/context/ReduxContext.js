import React, { createContext } from "react";

export const ReduxContext = createContext();

export const Provider = ({store, children}) => (
    <ReduxContext.Provider value={store}>{children}</ReduxContext.Provider>
)