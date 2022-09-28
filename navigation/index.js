import React, { useContext } from 'react'
import { View } from "react-native";
import UserStack from './userStack'
import AuthStack from './authStack'
import { AuthContext } from '../context/AuthContext'
// import {useAuthentication} from '../utils/useAuthentication'

export default function RootNavigation() {
    const {accessToken} = useContext(AuthContext)
    // const {user} = useAuthentication();

    return accessToken ? <UserStack/> : <AuthStack />
}