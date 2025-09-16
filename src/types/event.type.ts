import { StaticImageData } from "next/image";

export type EventInfo = {
    bgImage: StaticImageData | string | undefined,
    countDown?: string,
    eventType: string,
    artist: string,
    date: Date | string,
    description: string,
    location?:string,
}