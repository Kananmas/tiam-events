'use client'

import { EventSearchFilter } from "@/components/EventSearchFilter";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className="font-sans bg-linear-to-r from-black via-red-400 to-black h-full">
      <Header />


      <div className="bg-gradient-to-r text-center from-gray-50 via-violet-50  to-red-950 text-transparent bg-clip-text">
        <h1 className="font-bold text-[28px] my-4">
          Feel The Happiness, Live the Moment
        </h1>
        <div className="w-[60%] mx-auto text-[18px] ">
          This isn’t just a concert . it’s a story told through sound.
          Every beat and melody pulls you deeper into a world of raw emotion.
          A night where music speaks louder than words.
        </div>
      </div>


      <EventSearchFilter />

    </div>
  );
}
