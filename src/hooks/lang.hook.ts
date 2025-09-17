'use client'

import { LanguageContext } from "@/context/language/provider";
import { useContext } from "react";

export function useLanguage() {
    return useContext(LanguageContext)
}