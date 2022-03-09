import {createContext, useContext, useEffect, useState} from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/init-firebase'


const AuthContext=createContext({
    currentUser: null,

})

export const useAuth = ()=>useContext(AuthContext)
export default function AuthContextProvider({children}){
    const [currentUser, setCurrentUser]=useState(null) 
    
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, user=>{
            setCurrentUser(user)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    const value={
        currentUser,

    }
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}