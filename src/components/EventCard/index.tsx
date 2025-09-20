import Image from "next/image"
import type { EventInfo } from "@/types/event.type"
import { Button } from "@nextui-org/react"
import { MusicIcon } from "../MusicIcon"
import { EventIconSwitcher } from "../IconSwitcher/Index"

export function EventCard({ bgImage, artist, date, eventType, location, description, isPopular }: EventInfo & { isPopular: boolean }) {

    return <div className="max-w-[640px] bg-neutral-800 p-3 rounded-[24px]">
        {bgImage && <div className="mb-4 relative">
            <Image
                className="rounded-[16px] w-[640px] h-[344px] object-cover"
                src={bgImage}
                alt="event card image"
            />
            {eventType && (
                <div className="absolute top-2 left-2 flex items-center justify-start space-x-[16px]">
                    {isPopular && <div className=" bg-black/30 text-white text-sm px-2 py-1 rounded-[12px]">🔥 Popular</div>}
                    <div className="flex space-x-0.5 bg-black/30 text-white text-sm px-2 py-1 rounded-[12px]">
                        <EventIconSwitcher name={eventType} />{" " + eventType}
                    </div>
                </div>
            )}
        </div>}
        <div className="text-[25px] font-semibold text-white">
            {artist}
        </div>
        <div className="flex justify-between text-white">
            <div>
                {date instanceof Date ? date.toLocaleDateString() : date}
            </div>
            <div>
                {location}
            </div>
        </div>
        <div className="mt-4 mb-10 text-gray-400">
            {description}
        </div>
        <Button className="text-center w-full min-h-[40px] font-semibold 
        text-white rounded-full border-1 border-white">
            Details
        </Button>
    </div>
}



