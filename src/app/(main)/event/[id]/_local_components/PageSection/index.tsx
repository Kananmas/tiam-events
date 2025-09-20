type pageSectionProps = {
    icon:React.ReactNode,
    children?:React.ReactNode,
    title:string,
    details?:string
    wrapperStyles?:string,
    titleStyles?:string,
    bodyStyles?:string
}


export function PageSection(props:pageSectionProps) {
    const {
        wrapperStyles,
        titleStyles,
        bodyStyles
    } = props

    return <div className={wrapperStyles ?? "flex flex-col my-3"}>
        <div className={titleStyles ?? "flex justify-start font-[600] items-center space-x-3  text-[16px] mb-1 text-white"}>
            {props.icon}
            <div>{props.title}</div>
        </div>
        <div className={bodyStyles ?? "p-2"}>
            {props.children ?? props.details}
        </div>
    </div>
}