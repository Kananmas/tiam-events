'use client'

import { randomString } from "@/utils/random-string.utils";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react"
import { SearchIcon } from "../SearchIcon";

export function EventSearchFilter() {
    const [state, setState] = useState({
        atrist: '',
        event: '',
        location: '',
        date: ''
    });

    const entries = Object.entries(state)


    return <div className="flex px-2 w-[90%] h-[130px] mx-auto bg-neutral-700/80 justify-evenly items-center rounded-[15px]"
    >
        {
            entries.map(([key, value]) => {
                const camelCaseKey = key[0].toUpperCase() + key.slice(1);

                return <div key={randomString()} className="mx-2">
                    <label className="h-[12px] text-gray-400">{camelCaseKey}:</label>
                    <Input startContent={<>All {camelCaseKey}s...</>} className="bg-white w-[250px] h-[40px] align-middle rounded-[12px] px-2 py-2 my-1" />
                </div>
            })
        }
        <Button className="w-[45px] h-[45px] flex justify-center bg-red-500 rounded-full" startContent={<SearchIcon width={30} height={30} />} />
    </div>
}   