//autenticação de login
import React, { createContext, ReactNode, useState } from "react";

interface AuthContextType {
    userName: string | null;
    userPassword: string | null;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);


export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [userName, setUserName] = useState<string>('Walison');
    const [userPassword, setUserPassword] = useState<string>('1234');


    return (
        <AuthContext.Provider value={{ userName, userPassword }}>
            { children }
        </AuthContext.Provider>
    )
}