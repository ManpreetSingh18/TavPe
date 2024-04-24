import {createContext,useState} from "react";
import { useContext } from 'react';

export const AuthContext=createContext();


export const AuthProvider=({children})=>{
    const [token,setToken]=useState(localStorage.getItem('token'));

    //storing the token in localStorage
    const storetokenInLs=(serverToken)=>{
        return localStorage.setItem('token',serverToken);
    };

    let isLoggedIn= !!token;
    console.log("isLoggedIn:",isLoggedIn)
    // tackling the logout functionality
    const LogoutUser=()=>{
        setToken("");
        return localStorage.removeItem('token');
    }

    return (
    <AuthContext.Provider value={{isLoggedIn,storetokenInLs,LogoutUser}}>
        {children}
    </AuthContext.Provider>
    );
};

export const useAuth=()=>{
    return useContext(AuthContext);
}
