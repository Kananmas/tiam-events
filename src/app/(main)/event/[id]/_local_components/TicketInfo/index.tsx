import { randomString } from "@/utils/random-string.utils";
import { Button } from "@nextui-org/react";
import { Clock, TicketIcon, Users } from "lucide-react";
import { TicketCart } from "./_local_components/TicketCart";



export function TicketInfo() {
    const ticketInfo = [
        {
            day: "Friday",
            date: "January 14",
            duration: '18 - 21',
            isAvailable: true,
            ticketsLeft: 12
        },
        {
            day: "Sunday",
            date: "January 16",
            duration: '18 - 21',
            isAvailable: true,
            ticketsLeft: 128
        },
        {
            day: "Monday",
            date: "January 17",
            duration: '18 - 21',
            isAvailable: true,
            ticketsLeft: 345
        },
    ]


    return <div className="mt-8">
        <div className="flex justify-start w-[70%] text-white items-center space-x-2">
            <TicketIcon size={8} className="bg-neutral-800 w-[34px] h-[34px] p-1 rounded-[8px]" />
            <div className="font-bold text-[16px]">
                Sans
                <span className="text-[16px] mx-2 text-neutral-400 font-medium">
                    {`(3 Available)`}
                </span>
            </div>
        </div>
        <div className="flex flex-col items-center space-y-4 mt-4">
            {
                ticketInfo.map((ticket) => <TicketCart key={randomString()} {...ticket} />)
            }
        </div>
        <div className="relative border-t-1 border-t-[#2A2A2A] 
        border-dashed mt-[40px] h-[32px]">
            <div className="absolute top-0 -left-8 w-8 h-8 -translate-y-1/2 bg-black rounded-full"></div>
            <div className="absolute top-0 left-full w-8 h-8 -translate-y-1/2 bg-black rounded-full"></div>
        </div>
        <Button className="w-full h-[40px] mt-[20px]
            rounded-full text-white bg-rose-500 font-semibold">
            Next Step
        </Button>
    </div>
}