import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

export function Accordion({ title, content, className }: { title: string, content?: string, className?: string }) {
    const [open, setOpen] = useState(false)

    return <div className={className ?? "w-full bg-neutral-900 rounded-[24px] p-3 my-4"}
        onClick={() => setOpen(!open)}>
        {title && <div className="w-full flex justify-between items-center my-2">
            <div className="font-semibold text-white">{title}</div>
            {!open ? <ChevronDown /> : <ChevronUp />}
        </div>}
        <div
            className={`transition-all duration-500 ${(open && content) ? "block" : "hidden"}`}
        >
            {content}
        </div>
    </div>
}