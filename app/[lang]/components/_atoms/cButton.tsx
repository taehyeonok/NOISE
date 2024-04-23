"use client";
import { buttonProps } from "@/@types/components";

export default function CButton({ title, onClick, className, type }: buttonProps) {
  return (
    <button
      onClick={() => {
        onClick();
      }}
      className={className}
      type={type ? type : "button"}
    >
      {title}
    </button>
  );
}
