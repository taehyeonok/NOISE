"use client";
import { buttonProps } from "@/@types/components";

export default function CButton({ title, onClick, className, type }: buttonProps) {
  return (
    <button
      type={type}
      onClick={() => {
        onClick();
      }}
      className={className}
    >
      {title}
    </button>
  );
}
