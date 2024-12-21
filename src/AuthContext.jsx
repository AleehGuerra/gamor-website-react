import React, { createContext, useContext, useState } from 'react';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser ] = useState(null);

    const users = [
        { username: 'admin', password: 'admin' },
        { username: 'IamAleehk', password: 'EddyAlex030914*' },
        { username: 'MiduPlay', password: 'Midu' },
    ];

    const login = (username, password) => {
        const foundUser  = users.find(user => user.username === username && user.password === password);
        if (foundUser ) {
            setUser (username);
            return true;
        } else {
            alert("Credenciales incorrectas");
            console.log('credenciales incorrectas');
            return false;
        }
    };

    const logout = () => {
        setUser (null); 
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};