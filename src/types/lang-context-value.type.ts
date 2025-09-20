import { Dispatch, SetStateAction } from "react";
import type { langData } from "./lang-data.type";

export type LanguageContextValue = {
    langData: langData,
    setLangData:Dispatch<SetStateAction<langData>>,
}