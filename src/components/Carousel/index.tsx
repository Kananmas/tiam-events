import { Button } from "@nextui-org/react"

export const Carousel = ({children}:{children:React.ReactNode}) => {
    return <div className="bg-black py-10 text-center">
        <h1 className="text-[50px] font-bold">Popular Now</h1>
        <div className="flex items-center justify-evenly">
            <Button className="h-[50px] w-[50px] bg-neutral-800/80 rounded-[12px]">{"<"}</Button>
            <div className="min-h-[800px] min-w-[1000px] flex items-center">
                {children}
            </div>
            <Button className="h-[50px] w-[50px] bg-neutral-800/80 rounded-[12px]">{">"}</Button>
        </div>
    </div>
}