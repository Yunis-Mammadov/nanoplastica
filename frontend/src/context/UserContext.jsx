import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setIsLoggedIn(true)
        }
    }, []);

    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);
        localStorage.removeItem('user');
    };

    return (
        <UserContext.Provider value={[user, setUser, isLoggedIn, setIsLoggedIn, logout]}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => useContext(UserContext);