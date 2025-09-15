import { LanguageContext } from "@/context/language/context"
import { useContext } from "react"

export function useLanguage() {
    return useContext(LanguageContext)
}