import React, {useState} from "react"

export function useAuthentication() {
    const [user, setUser] = useState();

    

    return {
        user
    }
}