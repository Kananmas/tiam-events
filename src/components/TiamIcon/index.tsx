'use client'


import Image from "next/image";
import { LogoTextEn } from "./_components/LogoEn";
import { LogoTextFa } from "./_components/LogoFa";
import CompanyLogo from "../../../public/images/logo.svg"
import { useLanguage } from "@/hooks/lang.hook";


export function TiamIcon() {
    const {langData} = useLanguage();
    return <div className="flex items-start">
        <Image width={35} height={35} src={CompanyLogo} alt="" className="mx-1" />
        {
            langData.code == "en" ? <LogoTextEn width={35} height={35} /> :
                <LogoTextFa width={35} height={35} />
        }
    </div>
}