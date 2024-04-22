import { headerHelpMenu } from "@/app/[lang]/constants/const";
import React from "react";

interface helpBoxProps {
  setSelectedHelpMenu: React.Dispatch<React.SetStateAction<string>>;
}

export default function CHelpBox({ setSelectedHelpMenu }: helpBoxProps) {
  const handleSelectedHelpMenu = (
    e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>,
    menu: string
  ) => {
    if (
      e.type === "click" ||
      (e.type === "keydown" && (e as React.KeyboardEvent<HTMLDivElement>).key === "Enter")
    ) {
      setSelectedHelpMenu(menu);
    }
  };
  return (
    // 반응형
    <div className={"helpBox mobile:mobileHelpBox"}>
      {headerHelpMenu.map((m: string, index: number) => {
        return (
          <div
            key={"headerHelpMenu" + index}
            onClick={(e) => handleSelectedHelpMenu(e, m)}
            onKeyDown={(e) => handleSelectedHelpMenu(e, m)}
            className={"cursor-pointer"}
            tabIndex={0}
          >
            {m}
          </div>
        );
      })}
    </div>
  );
}
