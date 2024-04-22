import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        // 반응형
        <div
            className='w-full h-[3.75rem] flex justify-between items-center px-[3.75rem] bg-bg_gray bottom-0
            mobile:h-[5rem] mobile:px-4 mobile:flex-col mobile:items-start mobile:gap-2.5 mobile:justify-center mobile:static'>
            {/* 반응형 */}
            <Link href={'#'}
                  className={"text-[0.75rem] hidden text-[#666666] font-LGSMHATSB w-[6.938rem] justify-between items-center mobile:flex"}>
                PRIVACY<span className={"text-[0.75rem]"}>|</span>LEGAL</Link>
            {/* 반응형 */}
            <div className={'pc:hidden tablet:hidden text-[0.75rem] leading-[1.05rem] text-gray_400'}>
                Copyright© 2024 Noise Simulator<br/>
                All Rights Reserved
            </div>
            {/* 반응형 */}
            <div
                className='font-LGSMHATSB text-[0.75rem] text-gray_400 mobile:font-LGSMHATR leading-[140%] mobile:hidden'>
                COPYRIGHT© 2024 Noise Simulator. ALLRIGHT RESERVED.
            </div>
            {/* 반응형 */}
            <div className='flex gap-2 items-center font-LGSMHATSB text-gray_400 mobile:hidden'>
                <Link href={'#'} className={"text-[0.75rem]"}>TERMS & CONDITIONS</Link>
                <div className='w-px bg-[rgba(0,0,0,0.2)] h-4'/>
                <Link href={'#'} className={"text-[0.75rem]"}>PRIVACY POLICY</Link>
            </div>
        </div>
    )
}