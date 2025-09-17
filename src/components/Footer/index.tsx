import { randomString } from "@/utils/random-string.utils";
import { TiamIcon } from "../TiamIcon";
import Link from "next/link";
import { DiscordLogoIcon, InstagramLogoIcon, TwitterLogoIcon, } from "@radix-ui/react-icons";
import { LucideYoutube } from "lucide-react";

export function Footer() {

    const pages = [
        { name: "Home", path: "/home" },
        { name: "Login", path: "/login" },
        { name: "Register", path: "/register" },
        { name: "Search", path: "/search" },
    ];

    const supportItems = [
        "Support center",
        "FAQ",
        "Privacy policy",
        "Contact us",
    ]


    return <><div className="bg-transparent w-full p-25 flex justify-center items-center border-t-1 border-gray-400">
        <div className="flex flex-col items-center justify-center">
            <div className="text-start w-[50%]"><TiamIcon /></div>
            <p className="w-[50%]" >
                Tiam is a talented Iranian singer known for his soulful
                voice and meaningful lyrics that deeply connect with listeners.
            </p>
            <div className="flex space-x-3 w-[50%] justify-start my-3">
                <TwitterLogoIcon width={25} height={25} />
                <InstagramLogoIcon width={25} height={25} />
                <LucideYoutube width={25} height={25} />
                <DiscordLogoIcon width={25} height={25} />
            </div>
        </div>
        <div className="w-[25%]">
            <h6 className="text-white font-semibold mb-2">Quick Access</h6>
            {
                pages.map((page) => {
                    return <Link className="block py-1" href={page.path} key={randomString()}>
                        {page.name}
                    </Link>
                })
            }
        </div>
        <div className="w-[25%]">
            <h6 className="text-white font-semibold mb-2">Support</h6>
            {
                supportItems.map((item) => {
                    return <div className="py-1" key={randomString()}>{item}</div>
                })
            }
        </div>
    </div>
        <div className="text-center text-[14px] font-semibold p-2 bg-neutral-900 text-white">
            Copyright 2025 Tiam All Reserved
        </div></>
}