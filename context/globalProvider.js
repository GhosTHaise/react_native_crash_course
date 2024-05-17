import { createContext, useContext, useState, useEffect } from "react";
import { getCurrentUser } from "../lib/appwrite";

const GlobalContext = createContext()
export const useGlobalContext = () => useContext(GlobalContext);

const GlobhalProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getCurrentUser().then((response) => {
            if (res) {
                setIsLoggedIn(true)
                setUser(res)
            } else {
                setIsLoggedIn(false)
                setUser(null)
            }
        }).catch((error) => console.log(error));
    }, []);

    return (
        <GlobalContext.Provider
            value={{
                isLoading,
                setIsLoading,
                user,
                setUser,
                isLoggedIn
            }}
        >
            {
                children
            }
        </GlobalContext.Provider>
    )
}