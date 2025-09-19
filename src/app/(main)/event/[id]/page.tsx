import Image from "next/image";
import WeekEnd from "@/../public/images/weekend-concert.png"

export default function page()  {
    return <div className="flex justify-center space-x-4 items-center">
        <div className="flex bg-neutral-800 w-[60%]">
            <Image alt="" src={WeekEnd} />
        </div>
    </div>
}