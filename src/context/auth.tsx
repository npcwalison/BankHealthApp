import React, { createContext, ReactNode, useState } from "react";


//tipando valores do AuthContext.
interface AuthContextType {
    userName: string;
    userPassword: string;
    handleSetName: (e: string) => void;
    handleSetPassword: (e: string) => void;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);


export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    //dados de login.
    const [userName, setUserName] = useState<string>('Walison');
    const [userPassword, setUserPassword] = useState<string>('1234');
    //manter login.
    const [isLogged, setIsLogged] = useState<boolean>(false)

    const handleSetName = (e: string) => {
        setUserName(e)
    }

    const handleSetPassword = (e: string) => {
        setUserPassword(e)
    }

    return (
        <AuthContext.Provider value={{
            userName,
            userPassword,
            handleSetName,
            handleSetPassword
        }}>
            { children }
        </AuthContext.Provider>
    )
}