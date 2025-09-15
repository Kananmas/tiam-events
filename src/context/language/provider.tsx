'use client'

import { useState } from "react";
import { LanguageContext } from "./context";
import type { langData } from "@/types/lang-data.type";

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