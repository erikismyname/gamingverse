import { createContext } from 'react';

import useSessionStorage from '../hooks/useSessionStorage.js';

const UserContext = createContext();

const UserProvider = ({ children }) => {

    const [user, setUser] = useSessionStorage();

    const addUser = (user) => setUser(user);

    const removeUser = () => setUser();

    const validateUser = () => user.username;

    return (
        <UserContext.Provider value={{ addUser, removeUser, validateUser }}>
            {children}
        </UserContext.Provider>
    );

};

export { UserContext, UserProvider };