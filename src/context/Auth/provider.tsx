'use client'

import { AuthModalForm } from "@/components/AuthModalForm"
import { usePathname } from "next/navigation"
import { createContext, useContext, useState } from "react"

type authContextValue = {
    user: {
        username?: string,
        id?: string,
        role?: string,
        email?: string
        firstName?: string,
        lastName?: string
    } | null | undefined,
    setUser?: Function,
    openForm?: Function,
}

const defaultValue:authContextValue = {
    user:{},
    setUser:()=>{},
    openForm:()=>{}
}


export const AuthContext = createContext(defaultValue)

export function AuthProvider({children}:{children:React.ReactNode}) {
    const [userData, setUserData] = useState(null)
    const [openForm , setOpenForm] = useState(false)
    const pathname = usePathname();

    const formOpen = () =>setOpenForm(true)

    return <AuthContext.Provider value={{user:userData , openForm:formOpen , setUser:setUserData}}>
        {
            (openForm && !userData) && <AuthModalForm open={openForm} setOpen={setOpenForm} canClose={!pathname.endsWith("auth")}/>
        }

        {children}
    </AuthContext.Provider>

}