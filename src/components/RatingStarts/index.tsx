import { randomString } from "@/utils/random-string.utils"
import { Star } from "lucide-react"
import { useEffect, useState } from "react"

export function RatingStars({currentRating = -1 , onRatingChange}:{
    currentRating?:number,
    onRatingChange?:Function
}) {
    const array = Array.from({ length: 5 })
    const [rate, setRate] = useState(currentRating)

    useEffect(() => {
        if(onRatingChange) {
            onRatingChange();
        }
    } , [rate])

    return <div className="flex space-x-0.5">
        {array.map((_, index) => {
            const bgColor = index <= rate ? "orange":"gray"


            return <Star
                key={randomString()}
                onClick={() => setRate(index)}
                strokeWidth={0}
                fill={bgColor}
            />
        }
        )}
    </div>
}