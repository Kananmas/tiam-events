'use client'

import WeekendPoster from "@/../public/images/weekend-profile-poster.png"
import WeekendEvent1 from "@/../public/images/weekend-event-picture-1.png"
import WeekendEvent2 from "@/../public/images/weekend-event-picture-2.png"
import WeekendEvent3 from "@/../public/images/weekend-event-picture-3.png"
import WeekendProfile from "@/../public/images/weekend-profile-photo.png"


import TomOdell from "@/../public/images/tom-odell.png"

import { EventCard } from "@/components/EventCard";
import { Hero } from "@/components/Hero";
import { Button } from "@nextui-org/react";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { Share2, UserCircle, YoutubeIcon } from "lucide-react";
import { GradientHeader } from "@/components/GradientHeader";
import { randomString } from "@/utils/random-string.utils";
import { ButtonBox } from "@/components/ButtonBox";
import { useState } from "react";
import { RatingStars } from "@/components/RatingStarts"

const buttonStyles = "bg-transparent w-[150px] h-[40] text-[14px] rounded-[15px] enabled:bg-neutral-700 m-1 enabled:text-white"


export default function Page() {
    const [eventType, setEventTypes] = useState("upcoming")
    const eventPictures = [{
        picture: WeekendEvent1,
        title: "Dubai Concert 14 December 2025"
    },
    {
        picture: WeekendEvent2,
        title: "New York Concert 12 August 2024"
    },
    {
        picture: WeekendEvent3,
        title: "London Concert 8 January 2024"
    }, {
        picture: WeekendEvent1,
        title: "Dubai Concert 14 December 2025"
    },
    {
        picture: WeekendEvent2,
        title: "New York Concert 12 August 2024"
    },
    {
        picture: WeekendEvent3,
        title: "London Concert 8 January 2024"
    }]
    const comments = [
        {
            rating: 5,
            user: 'Isabella',
            day: "8 December 2025",
            comment: 'Loved the vibe and the setlist, can’t wait for the next show.',
        },
        {
            rating: 4,
            user: 'Muhammad',
            day: "8 December 2025",
            comment: 'The sound quality was amazing, felt like a real live experience.',
        },
        {
            rating: 4,
            user: 'Muhammad',
            day: "8 December 2025",
            comment: 'The sound quality was amazing, felt like a real live experience.',
        }
    ]

    return <div className="h-full overflow-hidden">
        <div className=" relative w-[70%] mx-auto">
            <Hero
                bgImage={WeekendPoster}
                className="h-[200px] flex items-end bg-cover mx-auto rounded-[25px] my-6"
            >
                <Hero
                bgImage={WeekendProfile}
                className="absoulte bg-cover 
                bg-center ml-[32px] mb-[-15px] w-[90px] h-[90px]
                 rounded-full"
                />
            </Hero>

            <div className="flex justify-between items-center">
                <div className="flex space-x-2 items-center">
                    <small>Aritst</small>
                    <div className="font-semibold text-[20px] text-white">The Weekend</div>
                </div>
                <Button
                    className="border-1
             w-[100px]
             flex justify-around
             text-red-400
             items-center
             p-1
             rounded-full border-red-400"
                    startContent={<Share2 />}>
                    <span className="font-bold text-[16px]">Share</span>
                </Button>
            </div>
            <div className="text-[14px] my-2">
                The Weeknd is a Canadian singer, songwriter,
                and producer known for his unique blend of R&B and pop.
                He has won multiple Grammy Awards, with chart-topping albums and sold-out world tours.
            </div>
            <div className="flex space-x-2">
                <YoutubeIcon />
                <DiscordLogoIcon width={23} height={23} />
            </div>

            <div className="my-8">
                <div className="flex items-center h-[87px] justify-between my-5">
                    <GradientHeader additionalStyles="text-start">Events</GradientHeader>
                    <ButtonBox>
                        <Button
                            disabled={eventType !== "upcoming"}
                            onPress={() => setEventTypes("upcoming")}
                            className={buttonStyles}>
                            Upcoming Events
                        </Button>
                        <Button
                            disabled={eventType !== "previous"}
                            onPress={() => setEventTypes("previous")}
                            className={buttonStyles}>
                            Previous Events
                        </Button>
                    </ButtonBox>
                </div>
                <div className="grid grid-cols-3 grid-rows-1 space-x-3 space-y-3">
                    {
                        Array.from({ length: 3 }).map((item) => <EventCard
                            key={randomString()}
                            isPopular={true}
                            bgImage={TomOdell}
                            artist="Tom Odell"
                            date="3 December 2025"
                            location="Madrid, Spain"
                            description={`With his heartfelt melodies and powerful lyrics, 
                        Tom Odell is sincerely ready for concerts with
                        beautiful songs full of meaning and emotion.`}
                            eventType="Concert"
                        />)
                    }
                </div>
            </div>
        </div>

        <div className="w-[70%] mx-auto my-12">
            <GradientHeader additionalStyles="text-start my-8">Media Gallery</GradientHeader>
            <div className="flex flex-row w-auto overflow-x-visible space-x-4">
                {
                    eventPictures.map(({ picture, title }) => <div key={randomString()}>
                        <Hero bgImage={picture}
                            className="h-[300px] rounded-[25px] w-[300px] 
                            bg-center bg-cover" />
                        <div className="text-[12px] w-full text-center py-2">{title}</div>
                    </div>)
                }
            </div>
        </div>

        <div className="w-[70%] mx-auto my-12">
            <GradientHeader additionalStyles="text-start my-8">Community</GradientHeader>
            <div className="flex flex-row w-auto overflow-x-visible space-x-4">
                {
                    comments.map(({ user, rating, comment, day }) => <div
                        className="bg-neutral-800 flex text-white flex-col rounded-[24px] items-start p-4"
                        key={randomString()}>
                        <RatingStars currentRating={rating - 1} />
                        <div className="my-2">
                            {comment}
                        </div>
                        <div className="mt-8 flex justify-between w-full">
                            <div className="flex space-x-2">
                                <UserCircle />
                                <div>{user}</div>
                            </div>
                            <div className="text-neutral-600">
                                {day}
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    </div>
}