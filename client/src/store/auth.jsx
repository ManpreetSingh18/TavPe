import {createContext} from "react";
import { useContext } from 'react';

export const AuthContext=createContext();


export const AuthProvider=({children})=>{
    const storetokenInLs=(serverToken)=>{
        return localStorage.setItem('token',serverToken);
    };

    return (
    <AuthContext.Provider value={{storetokenInLs}}>
        {children}
    </AuthContext.Provider>
    );
};

export const useAuth=()=>{
    return useContext(AuthContext);
}
