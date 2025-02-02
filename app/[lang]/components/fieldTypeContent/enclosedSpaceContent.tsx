import ContainerBoxRow from "@/app/[lang]/components/containerBoxRow/containerBoxRow";
import Image from "next/image";
import IC_TOOLTIP from "@/app/assets/icons/ic_tooltip.svg";
import CCustomInput from "@/app/[lang]/components/_atoms/cCustomInput";
import CTooltip from "@/app/[lang]/components/_atoms/cTooltip";
import React from "react";

export default function EnclosedSpaceContent({
  t,
  unitData,
  directDistance,
  setDirectDistance,
  roomVolume,
  setRoomVolume,
}: any) {
  {
    /* 반응형 */
  }
  const renderContainerBoxRowItem = (
    labelTitle: string,
    tooltipTitle: string,
    children: React.ReactNode
  ) => {
    return (
      <div className={"flex items-center mobile:justify-between mobile:relative mobile:w-full"}>
        <ContainerBoxRow
          justifyContent={"start"}
          alignItems={"center"}
          classList={"!w-[14.063rem] mobile:!w-max"}
        >
          <div className={"font-LGSMHATSB text-sm text-gray_400 mr-2 text-left"}>{labelTitle}</div>
          <CTooltip className={"mobile:bottom-[2.25rem] mobile:!top-auto"}>
            <p className={"cToolTipTitle"}>{tooltipTitle}</p>
          </CTooltip>
        </ContainerBoxRow>
        {children}
      </div>
    );
  };
  return (
    // 반응형
    <ContainerBoxRow
      justifyContent={"between"}
      alignItems={"center"}
      classList={"mobile:flex-col mobile:gap-[1.25rem]"}
    >
      {renderContainerBoxRowItem(
        t("NOISE_0056"),
        t("NOISE_0079"),
        <CCustomInput
          name="direct_distance"
          type={"number"}
          placeholder={"0"}
          value={directDistance || ""}
          classList={"w-[18.438rem] mobile:w-[7.5rem]"}
          unit={unitData?.length}
          onChange={(changeValue: number) => {
            setDirectDistance(changeValue);
          }}
          required
          validMessage={{ message: t("RC_0061"), format: [t("NOISE_0056")] }}
        />
      )}
      {renderContainerBoxRowItem(
        t("NOISE_0057"),
        t("NOISE_0080"),
        <CCustomInput
          name="room_volume"
          type={"number"}
          placeholder={"0"}
          value={roomVolume || ""}
          classList={"w-[18.438rem] mobile:w-[7.5rem]"}
          unit={
            <>
              {unitData?.length}
              <sup>3</sup>
            </>
          }
          onChange={(changeValue: number) => {
            setRoomVolume(changeValue);
          }}
          required
          validMessage={{ message: t("NOISE_0002"), format: [t("NOISE_0057")] }}
        />
      )}
    </ContainerBoxRow>
  );
}
