import { randomString } from "@/utils/random-string.utils";
import { Button } from "@nextui-org/react";
import { Clock, TicketIcon, Users } from "lucide-react";



export function TicketInfo() {
    const ticketInfo = [
        {
            day: "Friday",
            date: "January 14",
            duration: '18-21',
            isAvailable: true,
            ticketsLeft: 12
        },
        {
            day: "Sunday",
            date: "January 16",
            duration: '18-21',
            isAvailable: true,
            ticketsLeft: 128
        },
        {
            day: "Monday",
            date: "January 17",
            duration: '18-21',
            isAvailable: true,
            ticketsLeft: 345
        },
    ]


    return <div className="mt-12">
        <div className="flex text-white items-center space-x-2">
            <TicketIcon className="bg-neutral-700 w-[30px] h-[30px] p-1 rounded-[8px]" />
            <div className="font-bold text-[20px]">
                Sans
                <span className="text-[16px] mx-2 text-neutral-400 font-medium">
                    {`(3 Available)`}
                </span>
            </div>
        </div>
        <div className="flex flex-col items-center space-y-4 mt-4">
            {
                ticketInfo.map(({ day, date, isAvailable, ticketsLeft, duration }) => <div
                    className="flex p-2 min-h-[130px] w-[98%] rounded-[20px] bg-neutral-800"
                >
                    <div className="border-r-1 w-[30%] flex flex-col items-center justify-center
                     border-dashed border-neutral-700" key={randomString()}>
                        <div className="text-white font-semibold text-[18px]">{day}</div>
                        <div>{date}</div>
                    </div>
                    <div className="flex w-[70%] px-6 mx-auto flex-col items-start justify-center space-y-1">
                        <div className="flex">
                            <Clock />
                            <span className="ml-2 text-white">{duration}</span>
                        </div>
                        <div className="flex">
                            <TicketIcon />
                            <span className="ml-2">Status:</span>
                            <span className="ml-2">{isAvailable ? "yes" : "no"}</span>
                        </div>
                        <div className="flex">
                            <Users />
                            <span className="ml-2">Ticket Left:</span>
                            <span className="ml-2 text-white">{ticketsLeft} Tickets</span>
                        </div>
                    </div>
                </div>)
            }
        </div>
        <div className="pt-16">
            <Button className="w-full h-[40px] rounded-full text-white bg-red-500/75 font-semibold">
                Next Step
            </Button>
        </div>
    </div>
}