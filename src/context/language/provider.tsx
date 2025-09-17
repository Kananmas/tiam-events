'use client'

import { useState , useContext , createContext } from "react";
import type { langData } from "@/types/lang-data.type";
import type { LanguageContextValue } from "@/types/lang-context-value.type";


const defaultLangContext:LanguageContextValue = {
    langData : {
        code:'en',
        dir:'ltr',
        name:'english'
    },
    setLangData : () => {}
}

export const LanguageContext = createContext(defaultLangContext)

export function LanguageProvider({children}:{children:React.ReactNode}) {
    const [langData , setLangData] = useState<langData>({
        code:"en",
        dir:"ltr",
        name:"english"
    })
    
    return <LanguageContext.Provider value={{langData , setLangData}}>
        {children}
    </LanguageContext.Provider>
}
