'use client'

import Image from "next/image";
import WeekEnd from "@/../public/images/weekend-concert.png"
import { AlertCircle, Clock, ListIcon, LocateIcon, MapIcon, MapPin, User } from "lucide-react";
import { PageSection } from "./_local_components/PageSection";
import { TimeTo } from "./_local_components/TimeTo";
import { EventMap } from "./_local_components/EventMap";
import { TicketInfo } from "./_local_components/TicketInfo";

const hashTagStyle = `
    bg-neutral-700 p-2 border-1 border-neutral-600
    rounded-[15px]
`

export default function page() {
    return <div className="flex justify-center space-x-4 items-start my-16">
        <div className="flex h-full flex-col bg-neutral-900 w-[776px] rounded-[14px] p-4">
            <div>
                <Image
                    alt=""
                    src={WeekEnd}
                    className="h-[500px] rounded-[14px] mb-5"
                />
                <h1 className="text-[20px] text-white">
                    The Weeknd: A Night of Lights, Love & Madness
                </h1>
                <div className="flex flex-col h-[40%] w-[20%] space-y-4 my-4">
                    <div className="flex justify-between items-center">
                        <div>Artist</div>
                        <div className="text-white">The Weeknd</div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>Sponsor</div>
                        <div className="text-white">Hublot</div>
                    </div>
                </div>
                <div className="flex space-x-2 pl-2 mb-7">
                    <div className={hashTagStyle}>#Tour2025</div>
                    <div className={hashTagStyle}>#AfterHoursVibes</div>
                    <div className={hashTagStyle}>#TheWeeknd</div>
                    <div className={hashTagStyle}>#TheWeeknd</div>
                </div>
            </div>
            <PageSection
                icon={<ListIcon />}
                title="Description"
                details="
                     Prepare for an electrifying night as The Weeknd takes the stage
                    for a one-of-a-kind performance featuring chart-topping hits,
                    mesmerizing visuals, and an immersive atmosphere unlike any other.
                    "
            />
            <PageSection
                icon={<User />}
                details={`Abel Tesfaye, better known as The Weeknd, is a multi-platinum, 
                    Grammy-winning artist known for global hits such as 
                    "Blinding Lights," "Starboy," "Save Your Tears," and "The Hills."
                     With his signature blend of dark pop, R&B, and cinematic production, 
                     The Weeknd brings his fans into an unforgettable journey through sound and emotion.`}
                title="About The Artist"
            />
            <PageSection title="Important Info" icon={<AlertCircle />}>
                <ul className="list-disc px-8">
                    <li>Age restriction: 12+ (under 16 must be accompanied by an adult)</li>
                    <li>Late arrivals may not be admitted until a suitable break.</li>
                    <li>No re-entry allowed after leaving the venue.</li>
                    <li>No professional photography or videography allowed.</li>
                    <li>Bags may be subject to security checks.</li>
                </ul>
            </PageSection>
        </div>
        <div className=" h-full flex flex-col bg-neutral-900 w-[376px] px-[16px] py-[18.33px] rounded-[14px] ">
                 <TimeTo
                days={"05"}
                hours={"12"}
                minutes={"08"}
                seconds={"10"}
            />
            <div className="mb-8 mt-3 flex text-neutral-400 
            font-bold items-center justify-center space-x-2">
                <Clock size={16} />
                <div className="text-[14px]">Time Left To Start</div>
            </div>
            <PageSection
                icon={<MapPin
                    className="bg-neutral-800 p-1 rounded-[8px] w-[34px] h-[34px]"
                />}
                title="Locate Address"
            >
                <div className="flex flex-col">
                    <div>
                        Location
                    </div>
                    <div className="py-2 text-white">
                        Madrid, Spain
                    </div>
                </div>

                <div>
                    <div>
                        Address
                    </div>
                    <div className="py-2 text-white">
                        Hyde Park, Bayswater Rd, London W2 2UH, UK
                    </div>
                </div>
                <EventMap />
                <TicketInfo />
            </PageSection>           
        </div>
    </div>
}