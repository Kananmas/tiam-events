'use client'

import { AuthModalForm } from "@/components/AuthModalForm"
import { usePathname } from "next/navigation"
import { createContext, useContext, useState , Dispatch, SetStateAction } from "react"

type user =  {
    username?: string,
    id?: string,
    role?: string,
    email?: string
    firstName?: string,
    lastName?: string
} | null | undefined;

type authContextValue = {
    user:user,
    setUser?: Dispatch<SetStateAction<user>>,
    openForm?: () => void,
    closeForm?: () => void
}

const defaultValue: authContextValue = {
    user: {},
    setUser: () => { },
    openForm: () => { },
    closeForm: () => { }
}


export const AuthContext = createContext(defaultValue)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [userData, setUserData] = useState<user>(null)
    const [openForm, setOpenForm] = useState(false)
    const pathname = usePathname();

    const formOpen = () => {setOpenForm(true)}
    const closeForm = () => {setOpenForm(false)}

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