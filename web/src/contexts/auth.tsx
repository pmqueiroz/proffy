import React, { createContext, useState, useContext, useEffect } from 'react';
import * as auth from '../services/auth';

interface User {
    name: string;
    email: string;
}

interface AuthContextData {
    signed: boolean;
    user: User | null;
    signIn(): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FunctionComponent = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        async function  loadStoragedData (){
            const storagedUser = await localStorage.getItem('@proffy:user');
            const storagedToken = await localStorage.getItem('@proffy:token');

            if (storagedUser && storagedToken){
                setUser(JSON.parse(storagedUser));
            }
        }

        loadStoragedData();
    }, []);

    async function signIn() {
        const response = await auth.signIn();

        setUser(response.user);


        localStorage.setItem('@proffy:user', JSON.stringify(response.user));
        localStorage.setItem('@proffy:token', response.token);
    }

    function signOut() {
        localStorage.clear();
        setUser(null);
    }


    return(

        <AuthContext.Provider value={{signed: !!user, user, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}