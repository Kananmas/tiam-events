import { EventCard } from "@/components/EventCard";
import { randomString } from "@/utils/random-string.utils";
import { Button, Pagination } from "@nextui-org/react";
import { JSX, useState } from "react";

import TomOdell from "@/../public/images/tom-odell.png"
import { EventIconSwitcher } from "../../../../components/IconSwitcher/Index";
import { CustomPagination } from "@/components/CustomPagination";
import { Carousel } from "@/components/Carousel";
import { GradientHeader } from "@/components/GradientHeader";

export function EventScheduler() {
    const eventTypes = ["All Events", "Concert", "Stand-up", "Festival", "Workshop"]
    const [currentEvent, setCurrentEvent] = useState<string>(eventTypes[0]);
    const [page, setPage] = useState(1);

    const timeFrames = [
        { start: "01 January", end: "28 February" },
        { start: "28 February", end: "31 March" },
        { start: "31 March", end: "30 April" },
        { start: "30 April", end: "31 May" },
        { start: "31 May", end: "30 June" },
        { start: "30 June", end: "31 July" },
        { start: "31 July", end: "31 August" },
        { start: "31 August", end: "30 September" },
        { start: "30 September", end: "31 October" },
        { start: "31 October", end: "30 November" },
        { start: "30 November", end: "31 December" },
        { start: "31 December", end: "31 January" }
    ]


    function handleClickEventButton(eventName: string) {
        setCurrentEvent(eventName);
    }


    return <div className="px-24 pt-[82px] pb-[86px] flex flex-col">
        <div className="flex justify-between items-center">
            <div>
                <GradientHeader>Event Schedule</GradientHeader>
                <p>the closest concert schedule around you.</p>
            </div>
            <div className="text-white font-semibold bg-neutral-900 text-[14px] rounded-[8px] p-2">
                <select className="appearance-auto text-white font-semibold bg-neutral-900 ">
                    {
                        timeFrames.map((item) => <option
                            key={randomString()}>
                            {item.start} - {item.end}
                        </option>)
                    }
                </select>
            </div>
        </div>
        <div className="flex space-x-[16px] my-8">
            {
                eventTypes.map((type: string) => {

                    return <Button
                        key={randomString()}
                        onPress={() => handleClickEventButton(type)}
                        startContent={<div className="flex items-center space-x-[3.88px] justify-around">
                            <EventIconSwitcher name={type} />
                            {type}
                        </div>}
                        className={`${type === currentEvent ? 'bg-rose-500' : "bg-neutral-900"} font-semibold
                         min-w-[90px] rounded-[12px] px-2 text-white text-[14px] h-[32px]`}
                    />
                })
            }
        </div>
        <div className="grid grid-cols-3 gap-[24px]">
            <EventCard
                isPopular={true}
                bgImage={TomOdell}
                artist="Tom Odell"
                date="3 December 2025"
                location="Madrid, Spain"
                description={`With his heartfelt melodies and powerful lyrics, 
                    Tom Odell is sincerely ready for concerts with
                     beautiful songs full of meaning and emotion.`}
                eventType="Concert"
            />
            <EventCard
                isPopular={true}
                bgImage={TomOdell}
                artist="Tom Odell"
                date="3 December 2025"
                location="Madrid, Spain"
                description={`With his heartfelt melodies and powerful lyrics, 
                    Tom Odell is sincerely ready for concerts with
                     beautiful songs full of meaning and emotion.`}

                eventType="Concert"
            />
            <EventCard
                isPopular={true}
                bgImage={TomOdell}
                artist="Tom Odell"
                date="3 December 2025"
                location="Madrid, Spain"
                description={`With his heartfelt melodies and powerful lyrics, 
                    Tom Odell is sincerely ready for concerts with
                     beautiful songs full of meaning and emotion.`}

                eventType="Stand-up"
            />
            <EventCard
                isPopular={true}
                bgImage={TomOdell}
                artist="Tom Odell"
                date="3 December 2025"
                location="Madrid, Spain"
                description={`With his heartfelt melodies and powerful lyrics, 
                    Tom Odell is sincerely ready for concerts with
                     beautiful songs full of meaning and emotion.`}

                eventType="Concert"
            />
            <EventCard
                isPopular={true}
                bgImage={TomOdell}
                artist="Tom Odell"
                date="3 December 2025"
                location="Madrid, Spain"
                description={`With his heartfelt melodies and powerful lyrics, 
                    Tom Odell is sincerely ready for concerts with
                     beautiful songs full of meaning and emotion.`}

                eventType="Concert"
            />
            <EventCard
                isPopular={true}
                bgImage={TomOdell}
                artist="Tom Odell"
                date="3 December 2025"
                location="Madrid, Spain"
                description={`With his heartfelt melodies and powerful lyrics, 
                    Tom Odell is sincerely ready for concerts with
                     beautiful songs full of meaning and emotion.`}

                eventType="Concert"
            />
        </div>
        <div className="w-full mt-[44px] flex justify-center items-center">
            <CustomPagination
                useButtons
                useNumbers
                page={page}
                setPage={setPage}
                pageCount={12}
                selectedBgColor="rgb(255 , 32 , 86)"
                normalBgColor="black"
                cellClassName="h-[32px] w-[32px] text-white rounded-[12px]
                 flex items-center justify-center" />
        </div>
    </div>
}