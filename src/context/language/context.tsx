import { LanguageContextValue } from "@/types/lang-context-value.type";
import { createContext } from "react";

const defaultLangContext:LanguageContextValue = {
    langData : {
        code:'en',
        dir:'ltr',
        name:'english'
    },
    setLangData : () => {}
}




export const LanguageContext = createContext(defaultLangContext)