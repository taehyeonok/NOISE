import React from "react";

interface containerBoxProps {
    children:React.ReactNode,
    classList?:string
}
export default function ContainerBox({children,classList=''}:containerBoxProps) {
    return (
        // 반응형
        <section className={`${classList} bg-white w-100% shadow-[inset_0_-1px_3px_rgba(0,0,0,0.1)] p-[1.875rem_2.5rem_2.5rem] relative
        mobile:p-[1.875rem_1rem_2.5rem]`}>
            {children}
        </section>
    )
}