import { cTextAreaProps } from "@/@types/components";
import React from "react";

export default function CTextArea({
  label,
  disabled,
  value,
  placeholder,
  className,
}: cTextAreaProps) {
  return (
    <>
      <textarea
        value={value}
        className={`cTextArea ${className}`}
        id={label}
        placeholder={placeholder}
        disabled={disabled}
      />
      <label htmlFor={label} className={"sr_only"}>
        {label ? label : "label"}
      </label>
    </>
  );
}
