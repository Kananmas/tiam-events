export function GradientHeader({ children, additionalStyles = "" }: { children: React.ReactNode, additionalStyles?: string | undefined }) {
    return <h2
        className={`text-[40px] font-bold bg-gradient-to-r text-center
             from-white to-neutral-200
              text-transparent bg-clip-text 
              ${additionalStyles}`}
    >
        {children}
    </h2>
}