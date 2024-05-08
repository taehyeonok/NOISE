import ContainerBoxRow from "@/app/[lang]/components/containerBoxRow/containerBoxRow";
import Image from "next/image";
import IC_TOOLTIP from "@/app/assets/icons/ic_tooltip.svg";
import CCustomInput from "@/app/[lang]/components/_atoms/cCustomInput";
import CTooltip from "@/app/[lang]/components/_atoms/cTooltip";
import React from "react";

export default function EnclosedSpaceContent({ t }: any) {
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
        "Direct distance",
        "direct distance from center of source to receiver",
        <CCustomInput
          name="direct_distance"
          type={"number"}
          placeholder={"0"}
          value={7}
          classList={"w-[18.438rem] mobile:w-[7.5rem]"}
          unit={"m"}
        />
      )}
      {renderContainerBoxRowItem(
        "Room volume",
        "Room volume of the enclosed space",
        <CCustomInput
          name="room_volume"
          type={"number"}
          placeholder={"0"}
          value={8}
          classList={"w-[18.438rem] mobile:w-[7.5rem]"}
          unit={"m"}
        />
      )}
    </ContainerBoxRow>
  );
}
