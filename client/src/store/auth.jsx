import {createContext,useState,useEffect} from "react";
import { useContext } from 'react';

export const AuthContext=createContext();


export const AuthProvider=({children})=>{
    const [token,setToken]=useState(localStorage.getItem('token'));
    const [user,setUser]=useState("");
    //storing the token in localStorage
    const storetokenInLs=(serverToken)=>{
        return localStorage.setItem('token',serverToken);
    };

    let isLoggedIn= !!token;
    //console.log("isLoggedIn:",isLoggedIn)

    // tackling the logout functionality
    const LogoutUser=()=>{
        setToken("");
        return localStorage.removeItem('token');
    };



    //JWT Authentication-to get the currently loggedIN user data

    const userAuthentication=async ()=>{
        try{
            const response=await fetch("http://localhost:3000/api/auth/user",
        {
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                Authorization:`bearer ${token}`
            }
        });

        if(response.ok){
            const data=await response.json();
            console.log("User Data:",data.userData);
            setUser(data.userData);
        }

        }catch(error){
            console.error("Error Fetching user data");
        }
    }

    useEffect(()=>{
        userAuthentication();
    },[]);


    return (
    <AuthContext.Provider value={{isLoggedIn,storetokenInLs,LogoutUser,user}}>
        {children}
    </AuthContext.Provider>
    );
};

export const useAuth=()=>{
    return useContext(AuthContext);
}
