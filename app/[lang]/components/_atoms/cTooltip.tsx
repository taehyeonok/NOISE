import Image from "next/image";
import React, { useState } from "react";
import IC_TOOLTIP from "@/app/assets/icons/ic_tooltip.svg";
import IC_TOOLTIP_CLOSE from "@/app/assets/icons/ic_tooltip_close.svg";
import { cTooltipProps } from "@/@types/components";
import CImageButton from "@/app/[lang]/components/_atoms/cImageButton";

export default function CTooltip({ children, className = "" }: cTooltipProps) {
  const [tooltipText, setTooltipText] = useState(false);
  const handleTooltipShow = () => {
    setTooltipText(true);
  };
  const handleTooltipHide = () => {
    setTooltipText(false);
  };
  return (
    <>
      {/* 반응형 */}
      <div
        className={`cToolTipStyle mobile:hidden`}
        onMouseOver={handleTooltipShow}
        onMouseOut={handleTooltipHide}
      >
        <CImageButton image={IC_TOOLTIP} title={"tooltip"} titleHidden />
        {tooltipText && <div className={`cToolTipContentBox ${className}`}>{children}</div>}
      </div>
      {/* 반응형 */}
      <div className={`cToolTipStyle pc:hidden tablet:hidden`}>
        <CImageButton
          image={IC_TOOLTIP}
          title={"tooltip"}
          titleHidden
          onClick={handleTooltipShow}
        />
        {tooltipText && (
          <div className={`cToolTipContentBox ${className}`}>
            <CImageButton
              image={IC_TOOLTIP_CLOSE}
              title={"tooltip"}
              titleHidden
              onClick={handleTooltipHide}
            />
            {children}
          </div>
        )}
      </div>
    </>
  );
}
