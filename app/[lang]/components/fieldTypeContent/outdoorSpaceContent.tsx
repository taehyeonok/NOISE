"use client";
import ContainerBoxRow from "@/app/[lang]/components/containerBoxRow/containerBoxRow";
import IC_TOOLTIP from "@/app/assets/icons/ic_tooltip.svg";
import IG_REFERENCE_COMMON_TABLE from "@/app/assets/images/ig_reference_common_table.svg";
import Image from "next/image";
import CCustomInput from "@/app/[lang]/components/_atoms/cCustomInput";
import React, { Dispatch, SetStateAction, useState } from "react";
import CSelect from "@/app/[lang]/components/_atoms/cSelect";
import BarrierInformationTable from "@/app/[lang]/components/table/barrierInformationTable";
import CTooltip from "@/app/[lang]/components/_atoms/cTooltip";
import { selectMaterialDummyData } from "../../constants/const";
import { cloneObject } from "@/app/utils/utils";
import CCheckBox from "../_atoms/cCheckBox";

interface OutdoorSpaceItem {
  barrierInfoTableData: any;
  setBarrierInfoTableData: Function;
  t: any;
  unitData: any;
  outdoorUnit: number;
  setOutdoorUnit: Function;
  setSourceHeight: Function;
  receiver: number;
  setReceiver: Function;
  setReceiverHeight: Function;
  odus: number;
  setOdus: Function;
  barrierHeight: number;
  setBarrierH: Function;
  setBarrierHeight: Function;
  setBarrierFromSource: Function;
  horizontal: number;
  setHorizontalDistance: Function;
  setHorizontal: Function;
  selected: { title: string; value: string };
  setSelected: Dispatch<SetStateAction<{ title: string; value: string }>>;
  setBarrierEnable: Function;
  barrierThickness: any;
  setBarrierThickness: Function;
  backgroundNoise: number;
  setBackgroundNoise: Function;
  barrierChecked: boolean;
  setBarrierChecked: Function;
}
export default function OutdoorSpaceContent({
  barrierInfoTableData,
  setBarrierInfoTableData,
  t,
  unitData,
  setSourceHeight,
  outdoorUnit,
  setOutdoorUnit,
  receiver,
  setReceiver,
  setReceiverHeight,
  barrierHeight,
  odus,
  setOdus,
  setBarrierH,
  setBarrierHeight,
  setBarrierFromSource,
  horizontal,
  setHorizontalDistance,
  setHorizontal,
  selected,
  setSelected,
  setBarrierEnable,
  barrierThickness,
  setBarrierThickness,
  backgroundNoise,
  setBackgroundNoise,
  barrierChecked,
  setBarrierChecked,
}: OutdoorSpaceItem) {
  const [isShowSelectBox, setIsShowSelectBox] = useState<string>("");
  const barrierInThePath = [
    { title: "O", value: "0" },
    { title: "X", value: "1" },
  ];

  const handleTableChange = (isChecked: boolean) => {
    setBarrierChecked(isChecked);
    setBarrierEnable(isChecked);
    setSelected(isChecked ? { title: "O", value: "0" } : { title: "X", value: "1" });
  };

  const inputSelectStyle = `w-[18.438rem] mobile:w-[7.5rem]`;

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
  const renderContainerBoxRowBarrier = (
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
          <div
            className={"!font-LGSMHATSB !text-[0.875rem] !text-gray_400 mr-2 !leading-[0.976rem]"}
          >
            {children}
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
          t("NOISE_0051"),
          <CCustomInput
            name="elevation_of_outdoor_unit"
            type={"number"}
            classList={`${inputSelectStyle}`}
            placeholder={"0"}
            value={outdoorUnit || ""}
            unit={unitData?.length}
            required={true}
            onChange={(changeValue: SetStateAction<number>) => {
              setOutdoorUnit(changeValue);
              setSourceHeight(Number(changeValue) + 1);
            }}
            validMessage={{ message: t("RC_0061"), format: [t("NOISE_0051")] }}
          />,
          t("NOISE_0072")
        )}
        {renderContainerBoxRowItem(
          t("NOISE_0052"),
          <CCustomInput
            type={"number"}
            placeholder={"0"}
            value={outdoorUnit + 1}
            classList={`${inputSelectStyle}`}
            disabled={true}
          />,
          t("NOISE_0073")
        )}
      </ContainerBoxRow>
      {/* 반응형 */}
      <ContainerBoxRow
        justifyContent={"between"}
        alignItems={"center"}
        classList={"mobile:flex-col mobile:gap-[1rem]"}
      >
        {renderContainerBoxRowItem(
          t("NOISE_0053"),
          <CCustomInput
            name="elevation_of_receiver"
            type={"number"}
            placeholder={"0"}
            value={receiver || ""}
            classList={`${inputSelectStyle}`}
            unit={unitData?.length}
            onChange={(changeValue: SetStateAction<number>) => {
              setReceiverHeight(changeValue);
              setReceiver(changeValue);
            }}
            required
            validMessage={{ message: t("RC_0061"), format: [t("NOISE_0053")] }}
          />,
          t("NOISE_0074")
        )}
        {renderContainerBoxRowItem(
          t("NOISE_0054"),
          <CCustomInput
            name="horizontal_distance"
            type={"number"}
            placeholder={"0"}
            value={horizontal || ""}
            classList={`${inputSelectStyle}`}
            unit={unitData?.length}
            onChange={(changeValue: SetStateAction<number>) => {
              setHorizontalDistance(changeValue);
              setHorizontal(changeValue);
            }}
            required
            validMessage={{ message: t("RC_0061"), format: [t("NOISE_0054")] }}
          />,
          t("NOISE_0075")
        )}
      </ContainerBoxRow>
      {/* 반응형 */}
      <ContainerBoxRow justifyContent={"start"} alignItems={"center"}>
        {renderContainerBoxRowItem(
          t("NOISE_0055"),
          <CCustomInput
            name="background_noise"
            type={"number"}
            placeholder={"0"}
            value={backgroundNoise || ""}
            classList={`${inputSelectStyle}`}
            unit={"db(A)"}
            onChange={(changeValue: number) => {
              setBackgroundNoise(changeValue);
            }}
            required
            validMessage={{ message: t("NOISE_0006"), format: [t("NOISE_0055")] }}
          />,
          undefined,
          false,
          `${selected.value === "1" ? "bottom-[1.688rem] !top-auto mobile:bottom-[2.25rem]" : ""}`
        )}
      </ContainerBoxRow>
      {/* 반응형 */}
      <ContainerBoxRow justifyContent={"start"} alignItems={"center"}>
        {renderContainerBoxRowBarrier(
          <CCheckBox
            name={"barrier_in_the_path"}
            id={"barrier_in_the_path"}
            label={t("NOISE_0059")}
            onChange={handleTableChange}
            checked={barrierChecked}
          />,
          t("NOISE_0076"),
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
            {t("NOISE_0058")}
          </div>
          {/* 반응형 */}
          <ContainerBoxRow
            justifyContent={"between"}
            alignItems={"center"}
            classList={"mobile:flex-col mobile:gap-[1rem]"}
          >
            {renderContainerBoxRowItem(
              t("NOISE_0060"),
              <CCustomInput
                name="distance_from_ODUs"
                type={"number"}
                placeholder={"0"}
                value={odus || ""}
                classList={`${inputSelectStyle}`}
                unit={unitData?.length}
                onChange={(changeValue: SetStateAction<number>) => {
                  setOdus(changeValue);
                  setBarrierFromSource(changeValue);
                }}
                required
                validMessage={{ message: t("RC_0061"), format: [t("NOISE_0060")] }}
              />,
              t("NOISE_0077")
            )}
            {renderContainerBoxRowItem(
              t("NOISE_0061"),
              <CCustomInput
                name="barrier_height"
                type={"number"}
                placeholder={"0"}
                value={barrierHeight || ""}
                classList={`${inputSelectStyle}`}
                unit={unitData?.length}
                onChange={(changeValue: SetStateAction<number>) => {
                  setBarrierHeight(changeValue);
                  setBarrierH(changeValue);
                }}
                required
                validMessage={{ message: t("RC_0061"), format: [t("NOISE_0061")] }}
              />,
              t("NOISE_0078")
            )}
          </ContainerBoxRow>
          {/* 반응형 */}
          <ContainerBoxRow
            justifyContent={"between"}
            alignItems={"center"}
            classList={"mobile:flex-col mobile:gap-[1rem]"}
          >
            {renderContainerBoxRowItem(
              t("NOISE_0070"),
              <CSelect
                name="material_thickness"
                title={"Concrete(Default) / 120mm"}
                value={barrierThickness.title}
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
              t("NOISE_0062"),
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
            <div>
              <p className="text-left mb-2 !font-LGSMHATSB !text-[0.875rem] !text-gray_400 !leading-[0.976rem]">
                {t("NOISE_0088")}
              </p>
              <BarrierInformationTable
                barrierInfoTableData={barrierInfoTableData}
                setBarrierInfoTableData={setBarrierInfoTableData}
              />
            </div>
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
