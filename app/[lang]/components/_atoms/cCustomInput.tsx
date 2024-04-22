"use client";
import { isNull } from "@/app/utils/utils";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { customInputProps } from "@/@types/components";

export default function CCustomInput({
  type,
  placeholder,
  label = "",
  value,
  unit,
  classList = "",
  disabled,
}: customInputProps) {
  const inputRef = useRef(null);
  const unitRef = useRef<HTMLSpanElement | null>(null);
  const [input, setInput] = useState<any>("");
  const [unitPadding, setUnitPadding] = useState<number>();

  useEffect(() => {
    if (!isNull(value)) {
      setInput(value);
    }
  }, [value]);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (unitRef.current) {
      setUnitPadding(unitRef.current.offsetWidth);
    }
  }, [unit]);

  return unit ? (
    <div className={"relative w-[max-content]"}>
      <input
        type={type}
        placeholder={placeholder}
        value={input}
        id={label}
        onChange={(e) => {
          onChangeInput(e);
        }}
        ref={inputRef}
        style={{ paddingRight: unitPadding && `${unitPadding}px` }}
        className={`${classList} ${disabled ? "!bg-EEF0F2 !text-gray_400 " : ""} customInput pl-3`}
        disabled={disabled}
      />
      <label htmlFor={label} className={"sr_only"}>
        {label ? label : ""}
      </label>
      <span
        className={
          "absolute top-[50%] translate-y-[-50%] right-0 pr-2.5 text-[0.875rem] text-gray_400"
        }
        ref={unitRef}
      >
        {unit}
      </span>
    </div>
  ) : (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={input}
        id={label}
        onChange={(e) => {
          onChangeInput(e);
        }}
        ref={inputRef}
        className={`${classList} ${
          disabled ? "!bg-gray_100 !text-gray_400 " : ""
        } customInput px-3`}
        disabled={disabled}
      />
      <label htmlFor={label} className={"sr_only"}>
        {label ? label : ""}
      </label>
    </>
  );
}
