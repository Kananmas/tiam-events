'use client'


import { Button } from "@nextui-org/react"
import { TiamIcon } from "../TiamIcon"
import { useLanguage } from "@/hooks/lang.hook";


export function Header() {
    const { langData } = useLanguage();

    return <div className="flex static top-0 px-20 bg-transparent justify-between items-center w-full h-[60px] border-b-1 border-b-gray-400">
        <TiamIcon />
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