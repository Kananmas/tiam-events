import { Hero } from "@/components/Hero"
import { StaticImageData } from "next/image"

type EventHero = {
    bgImage: StaticImageData | string | undefined,
    countDown: string,
    eventType: string,
    artist: string,
    date: Date | string,
    description: string,
    ticketInfo:{
        price:number,
        left:number,
        location:string,
        sponsor:string,
    },
    pagination?:React.ReactNode
}

export const EventHero = ({ bgImage, countDown, eventType, artist, date, description , ticketInfo  , pagination }: EventHero) => {
    return <Hero
        bgImage={bgImage}
        className="w-[1000px] h-[400px] rounded-[23px] overflow-hidden flex flex-col justify-between">
        <div className="h-[270px] flex flex-col">
            <div className="flex justify-start w-full p-4 space-x-1">
                <div className="bg-red-500 rounded-[9px] min-w-[80px] text-white text-[14px]">
                    {countDown}
                </div>
                <div className="bg-neutral-900/80 rounded-[9px] min-w-[80px] text-white text-[14px]">
                    {eventType}
                </div>
            </div>
        </div>
        <div className="flex flex-col bg-neutral-900/80 backdrop-blur-md p-2 h-[130px]">
            <div className="felx flex-row items-center text-start">
                <div className="w-[50%] text-[22px] text-white  inline-block text-start font-bold">
                    {artist}
                </div>
                <div className=" w-[50%] text-[14px] text-end inline-block">
                    {date instanceof Date ? date.toDateString() : date}
                </div>
            </div>
            <div>
                <p className="text-[14px] text-start py-2">
                    {description}
                </p>
            </div>
            <div className="flex justify-start items-center space-x-6">
                <p>Ticket Price</p>
                <span className="text-white">${ticketInfo?.price}</span>
                <div className="w-[9px]  h-[9px] rounded-full bg-neutral-500"></div>
                <p>Ticket Left</p>
                <span className="text-white">{ticketInfo?.left}</span>
                <div className="w-[9px]  h-[9px] rounded-full bg-neutral-500"></div>
                <p>Location</p>
                <span className="text-white">{ticketInfo?.location}</span>
                <div className="w-[9px]  h-[9px] rounded-full bg-neutral-500"></div>
                <p>Sponsor</p>
                <span className="text-white">{ticketInfo?.sponsor}</span>
            </div>
            {pagination && pagination}
        </div>
    </Hero>
}