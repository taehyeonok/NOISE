import { headerLanguage } from "@/app/[lang]/constants/const";
import Image from "next/image";
import React from "react";

interface languageBoxProps {
  selectedLanguage: string;
  setSelectedLanguage: React.Dispatch<React.SetStateAction<string>>;
}

export default function CLanguageBox({ selectedLanguage, setSelectedLanguage }: languageBoxProps) {
  const handleSelectedLanguage = (
    e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>,
    title: string
  ) => {
    if (
      e.type === "click" ||
      (e.type === "keydown" && (e as React.KeyboardEvent<HTMLDivElement>).key === "Enter")
    ) {
      setSelectedLanguage(title);
    }
  };
  return (
    // 반응형
    <div className={"languageBox mobile:mobileLanguageBox"}>
      {headerLanguage.map((l, index) => {
        return (
          <div
            key={index}
            className={selectedLanguage === l.title ? "active" : ""}
            tabIndex={0}
            onClick={(e) => handleSelectedLanguage(e, l.title)}
            onKeyDown={(e) => handleSelectedLanguage(e, l.title)}
          >
            <Image src={l.icon} alt={l.title} />
            <div>{l.title}</div>
          </div>
        );
      })}
    </div>
  );
}
