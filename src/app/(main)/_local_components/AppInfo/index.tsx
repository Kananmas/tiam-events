import { GradientHeader } from "@/components/GradientHeader"
import { randomString } from "@/utils/random-string.utils"

export function AppInfo() {
    const info = [
        { title: 250, text: "cities used to host concerts" },
        { title: 70, text: "more than 70 artists joined" },
        { title: 320, text: "registered to be in a concert venue" },
    ]
    return <div className="flex items-center justify-evenly min-h-[200px] text-neutral-400 bg-black">
        {
            info.map(({title , text }) => {

                return <div key={randomString()} 
                className="flex w-[380px] h-[50px] justify-center 
                items-center space-x-3">
                    <GradientHeader additionalStyles="w-[110px] text-[48px] font-semibold">+{title}</GradientHeader>
                    <p className="min-w-[95px] max-w-[130px] text-start text-[16px] text-[#AFAFAF]">{text}</p>
                </div>
            })
        }
    </div>
}