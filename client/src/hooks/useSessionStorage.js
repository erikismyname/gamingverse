import { useState } from 'react';

const initialUserState = { _id: '', username: '', token: '', };

const useSessionStorage = () => {

    const [user, setUser] = useState(() => {

        const user = JSON.parse(sessionStorage.getItem('user'));

        return user ? user : initialUserState;

    });

    const updateUserData = (userData) => {

        const newValue = userData ? userData : initialUserState;

        sessionStorage.setItem('user', JSON.stringify(newValue));

        setUser(newValue);

    };

    return [user, updateUserData];

};

export default useSessionStorage;