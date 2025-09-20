import { Hero } from "@/components/Hero"
import { MusicIcon } from "@/components/MusicIcon"
import type { EventInfo } from "@/types/event.type"
import { StopwatchIcon } from "@radix-ui/react-icons"

type EventHero = {
    ticketInfo:{
        price:number,
        left:number,
        location:string,
        sponsor:string,
    },
    pagination?:React.ReactNode
} & EventInfo

const badgeStyles =  `rounded-[12px] h-[32px] w-[92px] font-semibold
text-white text-[14px] flex space-x-3 items-center justify-evenly
`
export const EventHero = ({ bgImage, countDown, eventType, artist, date, description , ticketInfo  , pagination }: EventHero) => {
    return <Hero
        bgImage={bgImage}
        className="bg-cover bg-center bg-repeat-none
         bg-repeat-none max-w-[1176px] max-h-[520px] rounded-[24px]
          overflow-hidden flex flex-col justify-between">
        <div className="h-[270px] flex flex-col">
            <div className="flex justify-start w-full p-4 space-x-[16px]">
                <div className={`bg-red-500 ${badgeStyles}`}>
                   <StopwatchIcon /> {countDown}
                </div>
                <div className={ `bg-black/50 ${badgeStyles}`}>
                   <MusicIcon /> {eventType}
                </div>
            </div>
        </div>
        <div className="flex flex-col bg-black/59 backdrop-blur-md p-2 min-h-[130px]">
            <div className="felx flex-row items-center text-start">
                <div className="w-[50%] text-[24px] text-white  inline-block text-start font-semibold">
                    {artist}
                </div>
                <div className=" w-[50%] text-white text-[14px] text-end inline-block">
                    {date instanceof Date ? date.toDateString() : date}
                </div>
            </div>
            <div>
                <p className="text-[14px] text-start py-2">
                    {description}
                </p>
            </div>
            <div className="flex justify-start items-center space-x-6 mb-15">
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