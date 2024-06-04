"use client";
import { isNull } from "@/app/utils/utils";
import { ChangeEvent, FocusEvent, useEffect, useRef, useState } from "react";
import { customInputProps } from "@/@types/components";
import { validateMsg } from "@/lib/validation";

export default function CCustomInput({
  name,
  type,
  placeholder,
  label,
  value,
  unit,
  classList = "",
  disabled,
  required = false,
  isfocus = false,
  isPositive = false,
  onChange,
  validMessage,
}: customInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const unitRef = useRef<HTMLSpanElement | null>(null);
  const [input, setInput] = useState<any>("");
  const [unitPadding, setUnitPadding] = useState<number>();
  const [isMobile, setIsMobile] = useState(false);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    if (name === "Project Name") {
      setInput(inputValue);
      if (onChange) onChange(inputValue);
    } else {
      if (isPositive) {
        // 입력된 문자가 정규 표현식과 일치하는 경우, 입력을 방지합니다.
        inputValue = inputValue.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");

        if (Number(inputValue) < 0) {
          inputValue = "0";
        }
      }
      if (inputValue) {
        inputRef.current?.setCustomValidity("");
        inputRef.current?.reportValidity();
      }
      setInput(inputValue);
      if (onChange) onChange(Number(inputValue));
    }
  };

  const onBlurInput = (e: FocusEvent<HTMLInputElement, Element>) => {
    let inputValue = e.target.value;
    if (inputValue && isPositive) {
      inputValue = Number(inputValue) + "";
      setInput(inputValue);
      if (onChange) onChange(inputValue);
    }
  };

  useEffect(() => {
    if (inputRef.current && isfocus) inputRef.current.focus();

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1080);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (value) {
      setInput(value);
    } else {
      const input = document.querySelectorAll(`input[name='${name}']`);
      let toggleInputValue = "";
      input.forEach((item) => {
        const input = item as HTMLInputElement;
        if (!input.offsetWidth && input.value) {
          toggleInputValue = input.value;
        }
      });
      if (inputRef.current?.offsetWidth && toggleInputValue) {
        setInput(toggleInputValue);
      }
    }
  }, [isMobile]);

  useEffect(() => {
    if (!isNull(value)) {
      setInput(value);
    }
  }, [value]);

  useEffect(() => {
    if (unitRef.current) {
      setUnitPadding(unitRef.current.offsetWidth);
    }
  }, [unit]);

  return unit ? (
    <div className={"relative w-[max-content]"}>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={input}
        id={label}
        onChange={onChangeInput}
        onBlur={onBlurInput}
        ref={inputRef}
        style={{ paddingRight: unitPadding && `${unitPadding}px` }}
        className={`${classList} ${disabled ? "!bg-EEF0F2 !text-gray_400 " : ""} customInput pl-3`}
        disabled={disabled}
        required={required}
        onInvalid={(e: React.InvalidEvent<HTMLInputElement>) =>
          validateMsg({ event: e, validMessage: validMessage })
        }
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
        name={name}
        type={type}
        placeholder={placeholder}
        value={input}
        id={label}
        onChange={onChangeInput}
        onBlur={onBlurInput}
        ref={inputRef}
        className={`${classList} ${
          disabled ? "!bg-gray_100 !text-gray_400 " : ""
        } customInput px-3`}
        disabled={disabled}
        required={required}
        onInvalid={(e: React.InvalidEvent<HTMLInputElement>) =>
          validateMsg({ event: e, validMessage: validMessage })
        }
      />
      <label htmlFor={label} className={"sr_only"}>
        {label ? label : ""}
      </label>
    </>
  );
}
