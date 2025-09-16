import { randomString } from "@/utils/random-string.utils";
import { useMemo } from "react";

export function CustomPagination({pageCount , page }:{pageCount:number , page:number}) {
    const items = useMemo(() => {
        const result = [];
        for(let i =0 ; i < pageCount; i++) {
            result[i] = i + 1;
        }
        return result
    } , [])
    
    return <div className="flex absolute left-[50%] space-x-2.5 bottom-[8%]">
        {
            items.length && items.map((_, index) => <div
                key={randomString()}
                style={{ background: index === page ? "white" : "gray" }}
                className="w-[8px] h-[8px] rounded-full"></div>)
        }
    </div>
}