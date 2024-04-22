import React from "react";
import CImageButton from "@/app/[lang]/components/_atoms/cImageButton";
import PopupClose from "@/app/assets/icons/ic_popup_close.svg";
import { cPopHeaderProps } from "@/@types/components";

export default function CPopHeader({ label, className = "", onClick }: cPopHeaderProps) {
  return (
    <div className={`cPopHeader ${className}`}>
      <p className="cPopHeaderTitle">{label}</p>
      {/* 반응형 */}
      <CImageButton
        image={PopupClose}
        title={"close"}
        titleHidden
        onClick={onClick}
        classList={"self-end mobile:self-auto"}
      />
    </div>
  );
}
