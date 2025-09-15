'use client'

import CompanyLogo from "../../../public/images/logo.svg"
import Image from "next/image"
import { useLanguage } from "@/hooks/lang.hook"
import { Button } from "@nextui-org/react"
import { LogoTextEn } from "../LogoEn"
import { LogoTextFa } from "../LogoFa"

export function Header() {
    const { langData } = useLanguage();

    return <div className="flex px-20 justify-between items-center w-full h-[60px] border-b-1 border-b-gray-400">
        <div className="flex items-start">
            <Image width={35} height={35} src={CompanyLogo} alt="" className="mx-1"/>
            {
                langData.code == "en" ? <LogoTextEn width={35} height={35}/> : 
                <LogoTextFa width={35} height={35} />
            }
        </div>

        <div className="flexjustify-between   text-white items-center font-[22px]">
            <Button className="border-[1px] min-w-[80px] text-red-400 border-red-400 mx-1 py-1 px-1 rounded-full">
                {
                    langData.code == "en" ? "Sign In" : "ورود به حساب"
                }
            </Button>
            <Button className="border-[1px] min-w-[80px] bg-red-400 border-red-400 mx-1 py-1 px-1 rounded-full">
                {
                    langData.code == "en" ? "Sign In" : "ساخت حساب"
                }
            </Button>   
        </div>
    </div>
}