import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext()
export const useGlobalContext = () => useContext(GlobalContext);

const GlobhalProvider = ({ children }) => {
    return (
        <GlobalContext.Provider
            value={{

            }}
        >
            {
                children
            }
        </GlobalContext.Provider>
    )
}