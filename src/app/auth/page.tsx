'use client'

import { useAuth } from "@/hooks/auth.hook"
import { useEffect } from "react"

export default function page() {
    const {openForm , closeForm} = useAuth()
    useEffect(() => {
        openForm?.()

        return () => {
            closeForm?.()
        }
    } , [])
    return <div className="bg-gradient-to-tr from-black to-red-400/25  
    flex flex-col h-screen w-screen justify-center items-center">
    </div>
}