import { createContext, useContext, useEffect, useState } from "react";


export const AuthContext = createContext()

export const AuthProvider = ({children})=>{                 //After creation the provider acts as a component
    const [user, setUser] = useState("")
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [service, setService] = useState("")

    const API = import.meta.env.VITE_API_URL

    const storeJWT = (token)=>{
        setToken(token)
        return localStorage.setItem("token", token)
    }

    const authToken = `Bearer ${token}`

    //handling logout
    const isLoggedin = !!token

    const logoutUser = () =>{
        setToken(0)
        localStorage.removeItem('token')
    }

    const UserAuthentication = async ()=>{
        const response = await fetch(API+"api/auth/user",{
            method: "GET",
            headers:{
                "Authorization": `Bearer ${token}`
            }
        })
        if(response.ok){
            const data = await response.json()
            console.log(data);
            setUser(data)
        }
    }

    const getServices = async()=>{
        const response = await fetch(API+"api/doc/services",{
            method: "GET",
        })
        if(response.ok){
            const data = await response.json()
            setService(data)
            // console.log(data);     //Logs the services every time the page loads. as get Services is inside use Effect with []
        }
    }

    useEffect(()=>{
        getServices()
        if(isLoggedin){
            UserAuthentication()
        }
    }, [])
 

    return <AuthContext value= {{ isLoggedin, storeJWT, logoutUser, user, service , authToken, API }}>
        {children}
    </AuthContext>
}

export const  AuthCreate = ()=>{
    return useContext(AuthContext)
}