import Image, { StaticImageData } from "next/image";

type HeroProps = { children: React.ReactNode, className: string, bgImage?: StaticImageData | string | undefined }

export function Hero({ bgImage, className, children }: HeroProps) {
    const imageSrc = !!bgImage && typeof bgImage != 'string' ? bgImage.src : bgImage;
    return <div
        style={imageSrc ? { backgroundImage: `url(${imageSrc})` } : undefined}
        className={`bg-cover bg-center bg-no-repeat ${className}`}
    >
        {children}
    </div>
}