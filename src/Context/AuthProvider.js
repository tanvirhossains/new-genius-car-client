import React, { createContext } from 'react';

const AuthProvider = ({ children }) => {
    const AuthContext = createContext()



    const user = { name: "tanir" }


    const item = { user };

    return (
        <AuthContext.Provider value={item}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;