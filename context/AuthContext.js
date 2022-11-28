import React, {createContext, useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [accessToken, setAccessToken] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState(null)

    const login = (data) => {
        setAccessToken(data.access_token)
        if(accessToken){
           AsyncStorage.setItem('accessToken', accessToken)
        }
        setUser(data)
        setIsLoading(false)
    }

    const logout = () => {
        setIsLoading(true)
        setAccessToken(null)
        AsyncStorage.removeItem('accessToken')
        setIsLoading(false)
    }

    const isLoggedIn = async() => {
        try {
            const value = await AsyncStorage.getItem('accessToken')
            setAccessToken(value)
        }catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        isLoggedIn()
    }, [])

    return(
        <AuthContext.Provider value={{user, accessToken, isLoading, setIsLoading, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}