'use client'

import CompanyLogo from "../../../public/images/logo.svg"
import Image from "next/image"
import { useLanguage } from "@/hooks/lang.hook"
import { randomString } from "@/utils/random-string.utils"
import { Button } from "@nextui-org/react"

export function Header() {
    const { langData } = useLanguage();

    const buttons = [
        {
            name: "Sign In",
            text: {
                en: 'Sign In',
                fa: "ورود به حساب"
            },
            onclick: () => {
                console.log("clicked sign in")
            }
        },
        {
            name: "Sign In",
            text: {
                en: 'Sign In',
                fa: "ورود به حساب"
            },
            onclick: () => {
                console.log("clicked sign in")
            }
        }
    ]


    return <div className="flex px-20 justify-between items-center w-full h-[60px] border-b-1 border-b-gray-400">
        <div className="flex items-start">
            <Image width={35} height={35} src={CompanyLogo} alt="" />
            
        </div>

        <div className="flex w-[120px] justify-between items-center">
            {buttons.map((btn) => {
                return <Button className="broder-1 broder-white" key={randomString()} onPress={btn.onclick}>
                    {
                        langData.code == "en" ? btn.text.en : btn.text.fa
                    }
                </Button>
            })}
        </div>
    </div>
}