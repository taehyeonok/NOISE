"use client";
import ContainerBoxRow from "@/app/[lang]/components/containerBoxRow/containerBoxRow";
import IC_TOOLTIP from "@/app/assets/icons/ic_tooltip.svg";
import IG_REFERENCE_COMMON_TABLE from "@/app/assets/images/ig_reference_common_table.svg";
import Image from "next/image";
import CCustomInput from "@/app/[lang]/components/_atoms/cCustomInput";
import React, { SetStateAction, useState } from "react";
import CSelect from "@/app/[lang]/components/_atoms/cSelect";
import BarrierInformationTable from "@/app/[lang]/components/table/barrierInformationTable";
import CTooltip from "@/app/[lang]/components/_atoms/cTooltip";
import { cTooltipProps } from "@/@types/components";
import { selectMaterialDummyData } from "../../constants/const";
import { cloneObject } from "@/app/utils/utils";

export default function OutdoorSpaceContent({
  barrierInfoTableData,
  setBarrierInfoTableData,
  t,
  unitData,
}: any) {
  const [isShowSelectBox, setIsShowSelectBox] = useState<string>("");
  const barrierInThePath = [
    { title: "O", value: "0" },
    { title: "X", value: "1" },
  ];
  const [selected, setSelected] = useState<{ title: string; value: string }>({
    title: "O",
    value: "0",
  });
  const [elevation, setElevation] = useState(0);
  const inputSelectStyle = `w-[18.438rem] mobile:w-[7.5rem]`;
  const [barrierThickness, setBarrierThickness] = useState<{ title: string; value: string }>({
    title: "Concrete(Default) / 120mm",
    value: "120",
  });
  const transmissionLoss = [
    [32, 32, 40, 46, 53, 59, 64, 64],
    [24, 24, 27, 26, 27, 24, 33, 33],
    [18, 18, 20, 24, 24, 25, 30, 30],
    [15, 15, 18, 22, 28, 32, 24, 24],
  ];
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
            name="elevation_of_outdoor_unit"
            type={"number"}
            classList={`${inputSelectStyle}`}
            value={elevation}
            unit={unitData?.length}
            required={true}
            onChange={(changeValue: SetStateAction<number>) => {
              setElevation(changeValue);
            }}
            validMessage={{ message: t("RC_0061"), format: [t("RC_0022")] }}
          />,
          "Elevation from the ground to bottom of outdoor unit"
        )}
        {renderContainerBoxRowItem(
          "Height of sound source",
          <CCustomInput
            type={"number"}
            placeholder={"0"}
            value={elevation + 1}
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
            name="elevation_of_receiver"
            type={"number"}
            placeholder={"0"}
            value={1.5}
            classList={`${inputSelectStyle}`}
            unit={unitData?.length}
          />,
          "Elevation from the ground to receiver"
        )}
        {renderContainerBoxRowItem(
          "Horizontal distance",
          <CCustomInput
            name="horizontal_distance"
            type={"number"}
            placeholder={"0"}
            value={8}
            classList={`${inputSelectStyle}`}
            unit={unitData?.length}
          />,
          "Horizontal distance from center of source to receiver"
        )}
      </ContainerBoxRow>
      {/* 반응형 */}
      <ContainerBoxRow justifyContent={"start"} alignItems={"center"}>
        {renderContainerBoxRowItem(
          "Background Noise",
          <CCustomInput
            name="background_noise"
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
            title={"O"}
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
                name="distance_from_ODUs"
                type={"number"}
                placeholder={"0"}
                value={4}
                classList={`${inputSelectStyle}`}
                unit={unitData?.length}
              />,
              "Short distance may result in extra reflections"
            )}
            {renderContainerBoxRowItem(
              "Barrier height",
              <CCustomInput
                name="barrier_height"
                type={"number"}
                placeholder={"0"}
                value={3}
                classList={`${inputSelectStyle}`}
                unit={unitData?.length}
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
                name="material_thickness"
                title={"Concrete(Default) / 120mm"}
                className={`${inputSelectStyle} h-[2.25rem]`}
                selectList={selectMaterialDummyData}
                onChange={(changeValue: { title: string; value: string }) => {
                  setBarrierThickness(changeValue);
                  const copyBarierInfo = cloneObject(barrierInfoTableData);
                  for (let i = 0; i < transmissionLoss[0]!.length; i++) {
                    if (changeValue.value == "120") {
                      copyBarierInfo[i].content2 = transmissionLoss[0]![i];
                    } else if (changeValue.value == "20") {
                      copyBarierInfo[i].content2 = transmissionLoss[1]![i];
                    } else if (changeValue.value == "12") {
                      copyBarierInfo[i].content2 = transmissionLoss[2]![i];
                    } else if (changeValue.value == "3") {
                      copyBarierInfo[i].content2 = transmissionLoss[3]![i];
                    }
                  }
                  setBarrierInfoTableData(copyBarierInfo);
                }}
              />,
              undefined,
              true
            )}
            {renderContainerBoxRowItem(
              "Barrier Thickness",
              <CCustomInput
                name="barrier_thickness"
                type={"number"}
                placeholder={"0"}
                value={barrierThickness.value}
                classList={`${inputSelectStyle} md:text-gray_400 bg-gray_100`}
                readOnly={true}
              />,
              undefined,
              true
            )}
          </ContainerBoxRow>
          <ContainerBoxRow justifyContent={"center"} alignItems={"center"}>
            <BarrierInformationTable
              barrierInfoTableData={barrierInfoTableData}
              setBarrierInfoTableData={setBarrierInfoTableData}
            />
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
