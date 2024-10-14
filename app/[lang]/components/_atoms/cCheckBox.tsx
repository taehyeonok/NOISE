import { checkBoxProps } from "@/@types/components";
import { KeyboardEvent, ChangeEvent, useState, useEffect, useRef } from "react";

export default function CCheckBox({
  name,
  id,
  label,
  checked,
  onChange,
  defaultChecked,
  disabled = false,
}: checkBoxProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange ? onChange(e.target.checked) : !checked;
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1080);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const input = document.querySelectorAll(`input[name='${name}']`);
    let toggleInputValue = false;
    input.forEach((item) => {
      const input = item as HTMLInputElement;
      if (!input.offsetWidth) {
        toggleInputValue = input.checked;
      }
    });
    if (inputRef.current?.offsetWidth) {
      onChange ? onChange(toggleInputValue) : !checked;
    }
  }, [isMobile]);

  return (
    <label
      className={
        "checkboxWrap flex justify-start items-center gap-1.5 checked:black w-fit cursor-pointer"
      }
    >
      <input
        ref={inputRef}
        name={name}
        type={"checkbox"}
        id={id}
        checked={checked}
        onChange={handleChange}
        defaultChecked={defaultChecked}
        className={"cursor-pointer"}
        disabled={disabled}
      />
      {label}
    </label>
  );
}
