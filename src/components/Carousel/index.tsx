'use client'

import { randomString } from "@/utils/random-string.utils"
import { Button } from "@nextui-org/react"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react"
import { GradientHeader } from "../GradientHeader"

const buttonsClassName = "h-[50px] flex justify-center items-center disabled:bg-gray-200 w-[50px] bg-neutral-800/80 rounded-[12px]"

type CarouselProps = { children: React.ReactNode, title: string  , setPage?:Dispatch<SetStateAction<number>> , page?:number}

export const Carousel = ({ children, title , setPage = () =>{} , page=0}:CarouselProps) => {
    const [currentPage, setCurrentPage] = useState(0)
    const len = Array.isArray(children) ? children.length : 0;

    const currentChild = useMemo(() => {
        if (!Array.isArray(children)) return children;
        return children[currentPage]
    }, [currentPage])

    function changePange(action: string) {
        const goBack = action == "back";
        if (goBack) {
            if (currentPage != 0) setCurrentPage(currentPage - 1)
            return;
        }
        if (currentPage == len - 1) return;
        setCurrentPage(currentPage + 1)
    }

    useEffect(() => {
        setPage(currentPage)
    }, [currentPage])


    function handleClickNext() {
        changePange('next');
    }

    function handleClickBack() {
        changePange('back')
    }


    return <div className="bg-black py-10 text-center relative">
        <GradientHeader style={{fontWeight:"700px"}} additionalStyles="text-[48px] py-8 mb-5 font-bold">{title}</GradientHeader>
        <div className="flex items-center justify-evenly">
            <Button
                disabled={currentPage == 0}
                onPress={handleClickBack}
                className={buttonsClassName}>
                <ArrowLeft />
            </Button>
            <div className="flex items-center">
                {currentChild}
            </div>
            <Button disabled={currentPage == len - 1}
                onPress={handleClickNext}
                className={buttonsClassName}>
                <ArrowRight />
            </Button>
        </div>
    </div>
}