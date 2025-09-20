import { randomString } from "@/utils/random-string.utils";
import { Clock, TicketIcon, Users } from "lucide-react";

export function TicketCart({ date, day, duration, isAvailable, ticketsLeft }: { [key: string]: any }) {
    return <div
        className="overflow-hidden flex p-2 min-h-[130px] w-[100%] rounded-[20px] bg-[#1F1F1F]"
    >
        <div 
        style={{
            borderImage: "repeating-linear-gradient(to bottom, #2A2A2A 0 6px, transparent 6px 12px) 1"
          }}
        className="relative border-r-1 w-[30%] flex flex-col items-center justify-center
                     border-dashed" key={randomString()}>
            <div className="text-white font-semibold text-[16px]">{day}</div>
            <div className="font-medium text-[14px]">{date}</div>
            <div className="absolute -top-1 left-[87%] w-6 h-6 -translate-y-1/2 bg-neutral-900 rounded-full"></div>
            <div className="absolute top-full left-[87%] w-6 h-6 -translate-y-1/2 bg-neutral-900 rounded-full"></div>
        </div>
        <div className="flex w-[70%] px-6 mx-auto flex-col items-start justify-center space-y-1">
            <div className="flex items-center">
                <Clock size={18} className="text-[#878787]" />
                <span className="ml-2 text-white text-[14px] font-semibold">{duration}</span>
            </div>
            <div className="flex">
                <TicketIcon size={18} className="text-[#878787]" />
                <span className="ml-2 text-[14px]">Status:</span>
                <span className="ml-2 text-[14px] font-semibold">{isAvailable ? "yes" : "no"}</span>
            </div>
            <div className="flex">
                <Users size={18} className="text-[#878787]" />
                <span className="ml-2 text-[14px]">Ticket Left:</span>
                <span className="ml-2 text-white text-[14px] font-semibold">{ticketsLeft} Tickets</span>
            </div>
        </div>
    </div>
}