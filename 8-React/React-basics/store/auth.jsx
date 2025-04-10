import { createContext, useContext, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children})=>{                 //After creation the provider acts as a component

    const [token, setToken] = useState(!!localStorage.getItem('token'))

    const storeJWT = (token)=>{
        setToken(!!token)
        return localStorage.setItem("token", token)
    }

    //handling logout
    const isLoggedin = token

    const logoutUser = () =>{
        setToken(0)
        localStorage.removeItem('token')
    }
    return <AuthContext value= {{ isLoggedin, storeJWT, logoutUser}}>
        {children}
    </AuthContext>
}

export const  AuthCreate = ()=>{
    return useContext(AuthContext)
}