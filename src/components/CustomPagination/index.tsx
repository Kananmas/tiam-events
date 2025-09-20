import { randomString } from "@/utils/random-string.utils";
import { Button } from "@nextui-org/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Dispatch, SetStateAction, useMemo } from "react";

type PaginationProps = {
    pageCount: number,
    page: number,
    useNumbers?: boolean,
    cellClassName?: string,
    selectedBgColor?: string,
    normalBgColor?: string
    useButtons?: boolean,
    setPage?: Dispatch<SetStateAction<number>> | (() => void)
}

const buttonStyles = "w-[40px] h-[40px] px-2 flex justify-center"

export function CustomPagination({ pageCount,
    page,
    useNumbers = false,
    cellClassName = "",
    useButtons = false,
    setPage = () => { },
    selectedBgColor = "white",
    normalBgColor = "gray" }
    : PaginationProps
) {
    const items = useMemo(() => {
        const pages = [];
        const startPage = Math.max(1, page - 2);
        const endPage = Math.min(pageCount, page + 2);

        if (startPage > 1) {
            pages.push(1);
            if (startPage > 2) pages.push('...'); // Left ellipsis
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        if (endPage < pageCount) {
            if (endPage < pageCount - 1) pages.push('...'); // Right ellipsis
            pages.push(pageCount);
        }

        return pages;
    }, [pageCount, page, useButtons]);


    function handleClickNext() {
        if (page >= pageCount - 1) return
        setPage(page + 1)
    }

    function handleClickBack() {
        if (page == 1) return
        setPage(page - 1)
    }

    return <div className="flex space-x-[40px] justify-center items-center">
        {useButtons && <Button className={buttonStyles} onPress={handleClickBack}><ArrowLeft /></Button>}
        <div className="flex space-x-2.5 justify-center">
            {
                items.length && items.map((text, index) => <div onClick={() => {
                    setPage(Number(text))
                }}
                    key={randomString()}
                    style={{ background: text === page ? selectedBgColor : normalBgColor }}
                    className={!!cellClassName ? cellClassName : "w-[8px] h-[8px] rounded-full"}>{useNumbers ? text : ''}</div>)
            }
        </div>
        {useButtons && <Button className={buttonStyles} onPress={handleClickNext}><ArrowRight /></Button>}
    </div>
}