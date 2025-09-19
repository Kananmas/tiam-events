import { randomString } from "@/utils/random-string.utils";

type timeToProps = {
    days: number | string,
    hours: number | string,
    minutes: number | string,
    seconds: number | string,
}

export function TimeTo(props: timeToProps) {
    const entries = Object.entries(props);

    return <div className="flex items-center justify-evenly 
    rounded-[14px]
    py-3 border-1 border-neutral-700">
        {
            entries.map(([key, value], index) => {
                const alrterdKey = key[0].toUpperCase() + key.slice(1)
                const border = index !== entries.length - 1 ? " border-dashed border-r-1 border-neutral-700" : "";
                return <div
                    className={`text-center mx-auto w-[100px] ${border}`}
                    key={randomString()}>
                    <div className="text-white font-bold">{value}</div>
                    <div className="font-bold mt-2 text-[12px]">{alrterdKey}</div>
                </div>
            })
        }
    </div>
}