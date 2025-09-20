'use client'

import { EventSearchFilter } from "./_local_components/EventSearchFilter";
import { PopularEvents } from "./_local_components/PopularEvents";
import { EventScheduler } from "./_local_components/EventScheduler";
import { FAQ } from "./_local_components/FAQ";
import { AppInfo } from "./_local_components/AppInfo";


export default function Home() {
  return (
    <div className="font-sans bg-linear-to-r from-black via-red-400/50 mt-[-60] to-black h-full">
      <div className="bg-gradient-to-r text-center from-gray-50 via-violet-50  to-red-950 text-transparent bg-clip-text py-20">
        <h1 className="font-bold text-[48px] py-4">
          Feel The Happiness, Live the Moment
        </h1>
        <div className="w-[60%] mx-auto text-[18px] text-[#AFAFAF]">
          This isn’t just a concert . it’s a story told through sound.
          Every beat and melody pulls you deeper into a world of raw emotion.
          A night where music speaks louder than words.
        </div>
      </div>
      <div className="relative w-full h-[400px]">
        {/* <Image
          src={bandImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-top"
        />
        <Image
          src={fanImage}
          alt="Overlay"
          className="absolute inset-1 w-full h-[50%] object-bottom mix-blend-multiply"
        /> */}
      </div>
      <EventSearchFilter />
      <AppInfo />
      <PopularEvents />
      <div className="bg-gradient-to-br from-black via-black to-rose-950/30 w-full bg-neutral-900 overflow-hidden">
        <EventScheduler />
        <FAQ />
      </div>
    </div>
  );
}
