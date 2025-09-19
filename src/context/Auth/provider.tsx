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
    closeForm?: Function
}

const defaultValue: authContextValue = {
    user: {},
    setUser: () => { },
    openForm: () => { },
    closeForm: () => { }
}


export const AuthContext = createContext(defaultValue)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [userData, setUserData] = useState(null)
    const [openForm, setOpenForm] = useState(false)
    const pathname = usePathname();

    const formOpen = () => setOpenForm(true)
    const closeForm = () => setOpenForm(false)

    return <AuthContext.Provider value={{
        user: userData,
        closeForm,
        openForm: formOpen,
        setUser: setUserData
    }}>
        {children}
        {
            (openForm && !userData) && <AuthModalForm
                open={openForm}
                setOpen={setOpenForm}
                canClose={!pathname.endsWith("auth")
                } />
        }
    </AuthContext.Provider>

}