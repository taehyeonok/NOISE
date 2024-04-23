"use client";
import ContainerBoxRow from "@/app/[lang]/components/containerBoxRow/containerBoxRow";
import IC_TOOLTIP from "@/app/assets/icons/ic_tooltip.svg";
import IG_REFERENCE_COMMON_TABLE from "@/app/assets/images/ig_reference_common_table.svg";
import Image from "next/image";
import CCustomInput from "@/app/[lang]/components/_atoms/cCustomInput";
import React, { useState } from "react";
import CSelect from "@/app/[lang]/components/_atoms/cSelect";
import BarrierInformationTable from "@/app/[lang]/components/table/barrierInformationTable";
import CTooltip from "@/app/[lang]/components/_atoms/cTooltip";
import { cTooltipProps } from "@/@types/components";

export default function OutdoorSpaceContent({ t }: any) {
  const [isShowSelectBox, setIsShowSelectBox] = useState<string>("");
  const barrierInThePath = [
    { title: "O", value: "0" },
    { title: "X", value: "1" },
  ];
  const [selected, setSelected] = useState<{ title: string; value: string }>({
    title: "O",
    value: "0",
  });

  const inputSelectStyle = `w-[18.438rem] mobile:w-[7.5rem]`;

  const renderContainerBoxRowItem = (
    title: string,
    children: React.ReactNode,
    toolTipTitle?: string,
    noToolTip?: boolean,
    toolTipClassName?: string
  ) => {
    return (
      <div className={"flex items-center mobile:justify-between mobile:relative mobile:w-full"}>
        {/* 반응형 */}
        <ContainerBoxRow
          justifyContent={"start"}
          alignItems={"center"}
          classList={"!w-[14.063rem] mobile:!w-max"}
        >
          <div className={"font-LGSMHATSB text-[0.875rem] text-gray_400 mr-2 leading-[0.976rem]"}>
            {title}
          </div>
          {!noToolTip && (
            <CTooltip className={toolTipClassName ? toolTipClassName : ""}>
              {toolTipTitle ? (
                <p className={"cToolTipTitle"}>{toolTipTitle}</p>
              ) : (
                <Image src={IG_REFERENCE_COMMON_TABLE} alt={"Reference Common Table"} />
              )}
            </CTooltip>
          )}
        </ContainerBoxRow>
        {children}
      </div>
    );
  };
  return (
    // 반응형
    <div className={"flex flex-col gap-[1.25rem] mobile:gap-[1rem]"}>
      <ContainerBoxRow
        justifyContent={"between"}
        alignItems={"center"}
        classList={"mobile:flex-col mobile:gap-[1rem]"}
      >
        {renderContainerBoxRowItem(
          "Elevation of outdoor unit",
          <CCustomInput
            type={"number"}
            classList={`${inputSelectStyle}`}
            unit={"m"}
            required={true}
            validMessage={{ message: t("RC_0061"), format: [t("RC_0022")] }}
          />,
          "Elevation from the ground to bottom of outdoor unit"
        )}
        {renderContainerBoxRowItem(
          "Height of sound source",
          <CCustomInput
            type={"number"}
            placeholder={"0"}
            value={8}
            classList={`${inputSelectStyle}`}
            disabled={true}
          />,
          "Rated height : 1m (from the bottom of outdoor unit)"
        )}
      </ContainerBoxRow>
      {/* 반응형 */}
      <ContainerBoxRow
        justifyContent={"between"}
        alignItems={"center"}
        classList={"mobile:flex-col mobile:gap-[1rem]"}
      >
        {renderContainerBoxRowItem(
          "Elevation of receiver",
          <CCustomInput
            type={"number"}
            placeholder={"0"}
            value={1.5}
            classList={`${inputSelectStyle}`}
            unit={"m"}
          />,
          "Elevation from the ground to receiver"
        )}
        {renderContainerBoxRowItem(
          "Horizontal distance",
          <CCustomInput
            type={"number"}
            placeholder={"0"}
            value={8}
            classList={`${inputSelectStyle}`}
            unit={"m"}
          />,
          "Horizontal distance from center of source to receiver"
        )}
      </ContainerBoxRow>
      {/* 반응형 */}
      <ContainerBoxRow justifyContent={"start"} alignItems={"center"}>
        {renderContainerBoxRowItem(
          "Background Noise",
          <CCustomInput
            type={"number"}
            placeholder={"0"}
            value={30}
            classList={`${inputSelectStyle}`}
            unit={"db(A)"}
          />,
          undefined,
          false,
          `${selected.value === "1" ? "bottom-[1.688rem] !top-auto mobile:bottom-[2.25rem]" : ""}`
        )}
      </ContainerBoxRow>
      {/* 반응형 */}
      <ContainerBoxRow justifyContent={"start"} alignItems={"center"}>
        {renderContainerBoxRowItem(
          "Barrier in the path",
          <CSelect
            name={"barrier_in_the_path"}
            title={"Barrier in the path"}
            select={selected}
            setSelect={setSelected}
            className={`${inputSelectStyle} h-[2.25rem]`}
            selectList={barrierInThePath}
          />,
          "Presence of a wall between the source and the receiver",
          false,
          `${selected.value === "1" ? "mobile:bottom-[2.25rem] mobile:!top-auto" : ""}`
        )}
      </ContainerBoxRow>
      {selected.value === "0" && (
        // 반응형
        <div
          className={`border border-gray_200 relative w-full px-5 py-10 flex flex-col gap-[1.25rem] mt-[0.625rem]
                    mobile:mt-[0.5rem] mobile:px-0 mobile:border-x-0 mobile:py-[1.25rem] mobile:gap-[1rem]`}
        >
          {/* 반응형 */}
          <div
            className={`font-LGSMHATSB text-[0.875rem] text-gray_400 bg-white absolute top-[-0.688rem] px-2 left-3
                        mobile:static mobile:mb-[-0.375rem] mobile:text-left mobile:px-0`}
          >
            Barrier Information
          </div>
          {/* 반응형 */}
          <ContainerBoxRow
            justifyContent={"between"}
            alignItems={"center"}
            classList={"mobile:flex-col mobile:gap-[1rem]"}
          >
            {renderContainerBoxRowItem(
              "Distance form ODUs",
              <CCustomInput
                type={"number"}
                placeholder={"0"}
                value={4}
                classList={`${inputSelectStyle}`}
                unit={"m"}
              />,
              "Short distance may result in extra reflections"
            )}
            {renderContainerBoxRowItem(
              "Barrier height",
              <CCustomInput
                type={"number"}
                placeholder={"0"}
                value={3}
                classList={`${inputSelectStyle}`}
                unit={"m"}
              />,
              "The barrier effect is incomplete due to the low height"
            )}
          </ContainerBoxRow>
          {/* 반응형 */}
          <ContainerBoxRow
            justifyContent={"between"}
            alignItems={"center"}
            classList={"mobile:flex-col mobile:gap-[1rem]"}
          >
            {renderContainerBoxRowItem(
              "Material / Thickness",
              <CSelect
                name={"material_thickness"}
                title={"Concrete(Dafault) / 120mm"}
                className={`${inputSelectStyle} h-[2.25rem]`}
              />,
              undefined,
              true
            )}
            {renderContainerBoxRowItem(
              "Barrier Thickness",
              <CCustomInput
                type={"number"}
                placeholder={"0"}
                value={120}
                classList={`${inputSelectStyle}`}
                disabled={true}
              />,
              undefined,
              true
            )}
          </ContainerBoxRow>
          <ContainerBoxRow justifyContent={"center"} alignItems={"center"}>
            <BarrierInformationTable />
            {/* 반응형 */}
            <div
              className={"self-end font-LGSMHATR text-[0.625rem] text-gray_700 ml-1 mobile:hidden"}
            >
              Unit : dB
            </div>
          </ContainerBoxRow>
        </div>
      )}
    </div>
  );
}
