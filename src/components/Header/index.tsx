'use client'


import { Button } from "@nextui-org/react"
import { TiamIcon } from "../TiamIcon"
import { useLanguage } from "@/hooks/lang.hook";
import { useRouter } from "next/navigation";


const btnStyles = `border-[1px] shadow-[0_2px_4px] font-semibold 
min-w-[80px] mx-1 py-1 px-1 rounded-full`;

export function Header() {
    const { langData } = useLanguage();
    const router = useRouter();

    const handleClickButton = () => {
        router.push("/auth");
    }
 
    return <div className="flex static top-0 px-20 bg-transparent justify-between items-center w-full h-[60px] border-b-[1px] border-b-[#FFFFFF14]">
        <TiamIcon />
        <div className="flexjustify-between  text-white items-center font-[22px]">
            <Button onPress={handleClickButton} className={"text-rose-400 bg-transparent border-rose-400 shadow-[#0A99FF52] " + btnStyles}>
                {
                    langData.code == "en" ? "Sign In" : "ورود به حساب"
                }
            </Button>
            <Button onPress={handleClickButton}  className={"bg-rose-500 border-rose-500  shadow-[#FF205652] " + btnStyles}>
                {
                    langData.code == "en" ? "Sign Up" : "ساخت حساب"
                }
            </Button>   
        </div>
    </div>
}