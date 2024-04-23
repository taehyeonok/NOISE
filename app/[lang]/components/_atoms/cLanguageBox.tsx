import { headerLanguage } from "@/app/[lang]/constants/const";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

interface languageBoxProps {
  selectedLanguage: string;
  // setSelectedLanguage: React.Dispatch<React.SetStateAction<string>>;
}

export default function CLanguageBox({ selectedLanguage }: languageBoxProps) {
  const pathNameList = usePathname().split("/");
  const rootPathName = pathNameList.slice(2).join("/");
  const searchParams = useSearchParams();
  // const handleSelectedLanguage = (
  //   e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>,
  //   title: string
  // ) => {
  //   if (
  //     e.type === "click" ||
  //     (e.type === "keydown" && (e as React.KeyboardEvent<HTMLDivElement>).key === "Enter")
  //   ) {
  //     setSelectedLanguage(title);
  //   }
  // };
  return (
    // 반응형
    <div className={"languageBox mobile:mobileLanguageBox"}>
      {headerLanguage.map((l, index) => {
        return (
          <div
            key={index}
            className={selectedLanguage === l.title ? "active" : ""}
            tabIndex={0}
            // onClick={(e) => handleSelectedLanguage(e, l.title)}
            // onKeyDown={(e) => handleSelectedLanguage(e, l.title)}
          >
            <div>
              <Link key={index} href={`/${l.locale}/${rootPathName}?${searchParams.toString()}`}>
                {l.title}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
