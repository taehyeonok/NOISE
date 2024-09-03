"use client";
import React from "react";

interface RenderRiskBoxProps {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const RenderRiskBox = ({ className, children, style }: RenderRiskBoxProps) => {
  return (
    <div
      className={`rounded-2xl h-[15.5rem] flex flex-col gap-[1.875rem] justify-center items-center
            mobile:gap-[0.625rem] mobile:py-0
            ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default RenderRiskBox;
