import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import IC_SELECTBOX_DISABLED_DOWN_ARROW from "@/app/assets/icons/ic_selectBoxDisabledDownArrow.svg";
import IC_SELECTBOX_ACTIVE_DOWN_ARROW from "@/app/assets/icons/ic_select_arrow_down.svg";
import IC_SELECTBOX_ACTIVE_UP_ARROW from "@/app/assets/icons/ic_select_arrow_up.svg";
import { selectProps } from "@/@types/components";
import { selectListDummyData } from "@/app/[lang]/constants/const";
import { getSelectItemData } from "@/lib/common";
import { validateMsg } from "@/lib/validation";

export default function CSelect({
  id,
  code,
  name,
  disabled,
  setSelect,
  title,
  className = "",
  selected,
  selectList,
  classList = "",
  params,
  initValue,
  value,
  required,
  onChange,
  validMessage,
  data,
}: selectProps) {
  const [active, setActive] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const inputTextRef = useRef<HTMLInputElement>(null);
  const [isSelect, setIsSelect] = useState<{ title: string; value: string } | null>(null);
  const [selectValue, setSelectValue] = useState<string | null>("");
  const [selectText, setSelectText] = useState<string | null>(title);
  const [selectBoxData, setSelectBoxData] = useState([{ title: "", value: "" }]);

  useEffect(() => {
    if (code === "productType") {
      getSelectItemData({ pCode: code, selectBoxParam: params, setSelectBoxData });
    } else if (code === "modelName") {
      const productType_val = document
        .querySelector("#productType")
        ?.getAttribute("data-sel-value");
      if (!productType_val) setSelectBoxData([{ title: "- Select Product Type -", value: "" }]);
      else {
        getSelectItemData({ pCode: code, selectBoxParam: params, setSelectBoxData });
      }
    } else if (code === "functionNoise") {
      const productType_val = document
        .querySelector("#productType")
        ?.getAttribute("data-sel-value");
      if (!productType_val) setSelectBoxData([{ title: "- Select Product Type -", value: "" }]);
      else {
        getSelectItemData({ pCode: code, selectBoxParam: params, setSelectBoxData });
      }
    } else if (code === "step") {
      const productType_val = document
        .querySelector("#functionNoise")
        ?.getAttribute("data-sel-value");
      if (!productType_val) setSelectBoxData([{ title: "- Select Function (Noise) -", value: "" }]);
      else {
        getSelectItemData({ pCode: code, selectBoxParam: params, setSelectBoxData });
      }
    } else {
      setSelectBoxData(selectListDummyData);
    }
  }, [code, params]);
  // Product Type 변경 시 selectBox 초기화
  useEffect(() => {
    if (data && code) {
      setSelectText(data);
    } else {
      if (code == "modelName") {
        setSelectText(data);
      }
      if (code == "functionNoise") {
        setSelectText(data);
      }
      if (code == "step") {
        setSelectText(data);
      }
    }
  }, [data]);

  const handleSelectClick = () => {
    setActive(!active);
  };
  const handleSelectDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      setActive(!active);
    }
  };
  const handleSelectItemClick = (valObj: { title: string; value: string }) => {
    setIsSelect(valObj);
    setSelect && setSelect(valObj);
    setSelectValue(valObj?.value);
    setSelectText(valObj?.title);
    inputTextRef.current?.setCustomValidity("");
    if (onChange) {
      if (
        title == "Outdoor Space" ||
        code === "productType" ||
        code === "functionNoise" ||
        name == "material_thickness"
      ) {
        onChange(valObj);
      } else {
        onChange(valObj.title);
      }
    }
    setActive(false);
  };
  const handleSelectItemDown = (
    valObj: { title: string; value: string },
    e: React.KeyboardEvent<HTMLDivElement>
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      setIsSelect(valObj);
      setSelect && setSelect(valObj);
      setSelectValue(valObj?.value);
      setSelectText(valObj?.title);
      inputTextRef.current?.setCustomValidity("");
      if (onChange) {
        if (
          title == "Outdoor Space" ||
          code === "productType" ||
          code === "functionNoise" ||
          name == "material_thickness"
        ) {
          onChange(valObj);
        } else {
          onChange(valObj.title);
        }
      }
      setActive(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setActive(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (initValue) {
      const initData = selectBoxData.find((item) => item.value == initValue);
      if (initData) {
        setSelectValue(initValue);
        setSelectText(initData?.title ? initData?.title : "");
        inputTextRef.current?.setCustomValidity("");
      }
    }
    if (value) {
      const initData = selectBoxData.find((item) => item.value == value);
      if (initData) {
        setSelectValue(value);
        setSelectText(initData?.title ? initData?.title : "");
        inputTextRef.current?.setCustomValidity("");
      }
    }
    setActive(false);
  }, [selectBoxData, initValue, value]);

  const arrowImage = disabled
    ? IC_SELECTBOX_DISABLED_DOWN_ARROW
    : active
    ? IC_SELECTBOX_ACTIVE_UP_ARROW
    : IC_SELECTBOX_ACTIVE_DOWN_ARROW;
  const arrowImageAlt = disabled ? "disabled" : active ? "close" : "open";
  const selectListArray = selectList ? selectList : selectBoxData;
  const commonStyle = classList
    ? classList
    : "p-[0_0.375rem_0_0.75rem] h-[2.25rem] text-[0.875rem]";
  return (
    <div
      tabIndex={0}
      className={`${
        isSelect || selected
          ? "selectBoxSelected"
          : disabled
          ? "selectBoxDisabled"
          : "selectDefaultBox"
      } 
                     ${className}
                      cursor-pointer relative`}
      onClick={handleSelectClick}
      onKeyDown={handleSelectDown}
      ref={selectRef}
    >
      <input ref={inputRef} type={"hidden"} name={name} value={selectValue ? selectValue : ""} />
      <div
        id={id}
        className={`selectTitleBox 
            ${
              active
                ? "border-t border-l border-r border-gray_700 rounded-[3px_3px_0_0]"
                : "border border-gray_200 rounded-[3px]"
            }
                ${title === "" && !isSelect ? "justify-end" : "justify-between"} ${commonStyle}`}
        data-sel-value={data}
      >
        {/* 반응형 */}
        {/* <p className={"text-[1em] overflow-hidden text-ellipsis whitespace-nowrap"}>
          {isSelect ? isSelect?.title : title}
        </p> */}
        <input
          ref={inputTextRef}
          type={"text"}
          required={required}
          value={selectText ? selectText : ""}
          onChange={(e) => {
            return false;
          }}
          name={name + "_text"}
          spellCheck={false}
          autoComplete={"off"}
          onInvalid={(e: React.InvalidEvent<HTMLInputElement>) =>
            validateMsg({
              event: e,
              validMessage: validMessage,
            })
          }
          className="bg-white cursor-pointer outline-none caret-transparent w-full"
        />
        <Image src={arrowImage} alt={arrowImageAlt} />
      </div>

      {active && (
        <div className={"selectBoxList"}>
          {selectListArray.map((item: { title: string; value: string }, index: number) => {
            return (
              // 반응형
              <div
                key={"selectBoxList-" + index}
                tabIndex={0}
                className={`selectBoxListItem  ${commonStyle}`}
                onClick={() => handleSelectItemClick(item)}
                onKeyDown={(e) => handleSelectItemDown(item, e)}
                data-sel-value={item.title}
              >
                <p className={"text-[1em] overflow-hidden text-ellipsis whitespace-nowrap"}>
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
