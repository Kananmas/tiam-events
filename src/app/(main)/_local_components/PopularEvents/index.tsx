import { Carousel } from "@/components/Carousel";
import { EventHero } from "../EventHero";


import WeekEndConcert from "@/../public/images/weekend-concert.png"
import WeeKEndConcert2 from "@/../public/images/weekend-concert-2.png"
import { useMemo, useState } from "react";
import { CustomPagination } from "@/components/CustomPagination";
import { randomString } from "@/utils/random-string.utils";

export function PopularEvents() {
    const [page, setPage] = useState(0)

    // current events info is static if api is created make it a state
    const eventsInfo = [
        {
            eventType: "Concert",
            countDown: "12:08:16",
            artist: "The Weeknd",
            bgImage: WeekEndConcert,
            date: "3 December 2025",
            description: "With his cinematic sound and haunting voice, The Weeknd is sincerely ready for concerts full of energy, darkness, and unforgettable moments.",
            ticketInfo: {
                left: 12,
                price: 1000,
                location: 'Madrid, Spain',
                sponsor: "Hublot"
            }
        },
        {
            eventType: "Concert",
            countDown: "12:08:16",
            artist: "The Weeknd",
            bgImage: WeeKEndConcert2,
            date: "3 December 2025",
            description: "With his cinematic sound and haunting voice, The Weeknd is sincerely ready for concerts full of energy, darkness, and unforgettable moments.",
            ticketInfo: {
                left: 12,
                price: 1000,
                location: 'Madrid, Spain',
                sponsor: "Hublot"
            }
        }
    ] 

    return <Carousel title="Popular Now" page={page} setPage={setPage}>
        {
            eventsInfo.map((item , index) => {
                return <EventHero
                    key={randomString()}
                    {...item}
                    pagination={<CustomPagination page={page} pageCount={eventsInfo.length} />}
                />
            })
        }
    </Carousel>
}