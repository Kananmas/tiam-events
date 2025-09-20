import { CSSProperties } from "react";

export function GradientHeader({ style , children, additionalStyles = "" }: { style?:CSSProperties, children: React.ReactNode, additionalStyles?: string | undefined }) {
    return <h1
        style={style}
        className={`font-bold bg-gradient-to-r text-center
             from-white to-neutral-200
              text-transparent bg-clip-text 
            text-[48px] 
              ${additionalStyles}`}
    >
        {children}
    </h1>
}