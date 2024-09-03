"use client";
import React from "react";

interface RenderInputItemProps {
  label: string;
  unit?: React.ReactNode;
  children?: React.ReactNode;
  classList?: string;
}

const RenderInputItem: React.FC<RenderInputItemProps> = ({ label, unit, children, classList }) => {
  return (
    <div className={"flex gap-2.5 items-center justify-between"}>
      <p
        className={`text-[0.875rem] text-gray_400 font-LGSMHATSB mobile:w-[14.438rem] ${classList}`}
      >
        {label}
        {unit && unit}
      </p>
      {children}
    </div>
  );
};

export default RenderInputItem;
