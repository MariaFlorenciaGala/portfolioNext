"use client";

interface ContainerProps {
    children: React.ReactNode
    className?: string
    mt?: string
}

const ContainerPage = ({ children, className = "", mt = "mt-28 md:mt-40" }: ContainerProps) => {
    return(
        <div className={`w-full max-w-6xl px-4 pb-40 mx-auto md:pb-28 md:px-6 ${mt} ${className}`}>
            {children}
        </div>
    )
}

export default ContainerPage
