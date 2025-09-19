'use client'

import { Button } from "@nextui-org/react";
import { useState } from "react";
import { TiamIcon } from "../TiamIcon";
import { PhoneNumberInput } from "../PhoneNumberInput";
import { ArrowLeft, Mail, UserIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { ButtonBox } from "../ButtonBox";

const inputWraper = "relative bg-neutral-900 flex items-center justify-around rounded-[15px] border-1 border-neutral-700 min-h-[50px]"
const buttonStyles = "bg-transparent w-[150px] h-[40] rounded-[15px] enabled:bg-neutral-700 m-1 enabled:text-white"

export function AuthModalForm({ open, setOpen, canClose }: { open: boolean, canClose: boolean, setOpen: (val: boolean) => void }) {
    const [mode, setMode] = useState("signin");
    const router = useRouter();
    const pathName = usePathname();

    function changeMode(mode: string) {
        setMode(mode)
    }

    function handleClickBg() {
        if (canClose) {
            setOpen(false)
        }
    }

    return (
        <div onClick={handleClickBg}
            className="bg-transparent w-full h-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                {pathName.endsWith("auth") && <Button
                    className="bg-neutral-900 text-white p-2 my-2 min-w-[80px] flex justify-between rounded-[15px]"
                    onPress={() => router.back()}
                    startContent={<ArrowLeft />}>
                    Back
                </Button>}
                <div className="
                w-[400px] bg-neutral-900 flex flex-col items-center 
                rounded-[32px] p-[12px]">
                    <TiamIcon />
                    <div className="w-full  flex justify-center">
                        <ButtonBox>
                            <Button
                                disabled={mode === "signin"}
                                className={buttonStyles}
                                onPress={() => changeMode("signup")} >
                                Sign Up
                            </Button>
                            <Button
                                disabled={mode === "signup"}
                                className={buttonStyles}
                                onPress={() => changeMode("signin")}>
                                Sign In
                            </Button>
                        </ButtonBox>
                    </div>
                    <div className="h-[60%] my-3">
                        {mode === "signup" && <>
                            <label>Name</label>
                            <div className={inputWraper}>
                                <UserIcon />
                                <input
                                    placeholder="e.g Amir Mohammadi"
                                />
                            </div>
                        </>}
                        <div className="flex flex-col space-y-2 my-2">
                            <label>Phone Number:</label>
                            <PhoneNumberInput />
                        </div>
                        {mode === "signup" && <>
                            <label>Name</label>
                            <div className={inputWraper}>
                                <Mail />
                                <input
                                    placeholder="e.g tiam2024@gmail.com"
                                />
                            </div>
                        </>}
                    </div>
                    <Button className="bg-red-400 self-end text-white w-full h-[40px] rounded-[12px] font-semibold mt-2">
                        {mode == "signin" ? "Sign In" : "Sign Up"}
                    </Button>
                </div>
            </div>
        </div>
    );
}
