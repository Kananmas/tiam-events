import Image, { StaticImageData } from "next/image";

type HeroProps = { children: React.ReactNode, className: string, bgImage?: StaticImageData | string | undefined }

export function Hero({ bgImage, className, children }: HeroProps) {
    return <div
        style={{backgroundImage:`url(${bgImage})`}}
        className={`${className}`}>
        {children}
    </div>
}