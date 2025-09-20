'use client'

import { randomString } from "@/utils/random-string.utils";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react"
import { Search } from "lucide-react";
import { IconSwitcherSf } from "./_local_components/IconSwithcerSF";

export function EventSearchFilter() {
    const [state, setState] = useState({
        artist: '',
        event: '',
        location: '',
        date: ''
    });

    const entries = Object.entries(state)


    return <div className="flex lg:max-w-[82%] md:max-w-[70%] h-[122px] 
    mx-auto backdrop:blur-[20] px-[24px] bg-neutral-700/80 
    space-x-[24px] justify-evenly items-center rounded-[16px]"
    >
        {
            entries.map(([key, value]) => {
                const camelCaseKey = key[0].toUpperCase() + key.slice(1);

                return <div className="flex flex-col h-[76px] " key={randomString()}>
                    <label className="h-[24px] font-semibold text-gray-400 mb-[8px]">{camelCaseKey}</label>
                    <Input
                        startContent={<span className="flex text-black items-center space-x-[16px]">
                            <IconSwitcherSf name={key} />
                            {`All ${camelCaseKey}s...`}
                        </span>}
                        className="bg-white w-full h-[40px] rounded-[12px] px-2 py-2" />
                </div>
            })
        }
        <div>
            <div className="h-[32px]"></div>
            <Button
                startContent={<Search fill="white" color="white" />}
                className="w-[44px] h-[44px] p-2 flex justify-center bg-red-500 rounded-full" />
        </div>
    </div>
}   