import { EventCard } from "@/components/EventCard";
import { randomString } from "@/utils/random-string.utils";
import { Button } from "@nextui-org/react";
import { useState } from "react";

import TomOdell from "@/../public/images/tom-odell.png"

export function EventScheduler() {
    const eventTypes = ["All Events", "Concert", "Stand-up", "Festival", "Workshop"]
    const [currentEvent, setCurrentEvent] = useState<string>(eventTypes[0]);

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


    return <div className="bg-black px-24 py-12">
        <div className="flex justify-between items-center">
            <div>
                <h2
                    className="text-[40px] font-bold bg-gradient-to-r text-center from-white to-neutral-600 text-transparent bg-clip-text"
                >
                    Event Schedule
                </h2>
                <p>the closest concert schedule around you.</p>
            </div>
            <div>
                <select className="appearance-auto text-white bg-neutral-900 text-[13px] focus:ring-blue-700 p-2 rounded-[8px]">
                    {
                        timeFrames.map((item) => <option
                            key={randomString()}>
                            {item.start} - {item.end}
                        </option>)
                    }
                </select>
            </div>
        </div>
        <div className="flex space-x-1.5 my-8">
            {
                eventTypes.map((type) => <Button
                    key={randomString()}
                    onPress={() => handleClickEventButton(type)}
                    className={`${type === currentEvent ? 'bg-red-500' : "bg-neutral-900"} rounded-[6px] text-white text-[12px]`}
                >
                    {type}
                </Button>)
            }
        </div>
        <div>
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
    </div>
}