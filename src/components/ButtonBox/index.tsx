import { useMemo } from "react"

export function ButtonBox({ children }: { children: React.ReactNode }) {
    return <div className="flex justify-center">
        <span className="bg-neutral-800 rounded-[16px] my-4 flex justify-center items-center">
            {children}
        </span>
    </div>
}