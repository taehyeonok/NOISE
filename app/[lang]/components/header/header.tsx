"use client";

import Image from "next/image";
import { browserType, howToUseDummyData } from "@/app/[lang]/constants/const";

import IC_LG_LOGO from "@/app/assets/icons/ic_logo.svg";
import IC_COUNTRY from "@/app/assets/icons/ic_country.svg";
import IC_LANGUAGE from "@/app/assets/icons/ic_language.svg";
import IC_USER from "@/app/assets/icons/ic_user.svg";
import IC_LOGIN_USER from "@/app/assets/icons/ic_login_user.svg";
import IC_INFORMATION from "@/app/assets/icons/ic_information.svg";
import IC_SETTING from "@/app/assets/icons/ic_setting.svg";
import IC_LOGOUT from "@/app/assets/icons/ic_logout.svg";
import React, { useEffect, useRef, useState } from "react";
import IC_TUTORIAL_CLOSE from "@/app/assets/icons/ic_tutorial_close.svg";
import IC_M_TUTORIAL_CLOSE from "@/app/assets/icons/ic_m_tutorial_close.svg";
import IC_TUTORIAL_PLAY from "@/app/assets/icons/ic_tutorial.svg";
import IG_GUIDE_IMAGE_FOR_CENTER_POINT from "@/app/assets/images/ig_guide_image_for_center_point.svg";
import IG_REFLECTIVE_WALL_AND_GROUND from "@/app/assets/images/ig_reflective_wall_and_ground.svg";
import CLanguageBox from "@/app/[lang]/components/_atoms/cLanguageBox";
import { isNull } from "@/app/utils/utils";
import CButton from "@/app/[lang]/components/_atoms/cButton";
import CHelpBox from "@/app/[lang]/components/_atoms/cHelpBox";
import CPopUp from "@/app/[lang]/components/_atoms/cPopup";
import CPopHeader from "@/app/[lang]/components/_atoms/cPopHeader";
import ReferenceCommonTable from "@/app/[lang]/components/table/referenceCommonTable";
import IC_HAMBURGER from "@/app/assets/icons/ic_hamburger.svg";
import IC_SIDE_MENU_CLOSE from "@/app/assets/icons/ic_side_menu_close.svg";
import IC_SIDE_MENU_PLUS from "@/app/assets/icons/ic_side_menu_plus.svg";
import IC_SIDE_MENU_MINUS from "@/app/assets/icons/ic_side_menu_minus.svg";

export default function Header() {
  const [isShowLanguage, setIsShowLanguage] = useState<string>("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("Korea");
  const [loginUserName, setLoginUserName] = useState<string>("account");
  useState<boolean>(false);
  const [isShowHelpMenu, setIsShowHelpMenu] = useState<string>("");
  const [selectedHelpMenu, setSelectedHelpMenu] = useState<string>("");
  const languageBoxPcRef = useRef<HTMLDivElement>(null);
  const languageBoxTabletRef = useRef<HTMLDivElement>(null);
  const helpBoxPcRef = useRef<HTMLDivElement>(null);
  const helpBoxTabletRef = useRef<HTMLImageElement>(null);
  const manualPopRef = useRef<HTMLDivElement>(null);
  const tutorialPopRef = useRef<HTMLDivElement>(null);
  {
    /* 반응형 */
  }
  const [isShowMobileSideMenu, setIsShowMobileSideMenu] = useState<boolean>(false);
  const handleLanguageClick = (
    e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>,
    type: string
  ) => {
    if (
      e.type === "click" ||
      (e.type === "keydown" && (e as React.KeyboardEvent<HTMLDivElement>).key === "Enter")
    ) {
      setIsShowLanguage((prevState) => (prevState === type ? "" : type));
      setIsShowHelpMenu("");
    }
  };

  const handleHelpClick = (
    e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>,
    type: string
  ) => {
    if (
      e.type === "click" ||
      (e.type === "keydown" && (e as React.KeyboardEvent<HTMLDivElement>).key === "Enter")
    ) {
      setIsShowHelpMenu((prevState) => (prevState === type ? "" : type));
      setIsShowLanguage("");
    }
  };
  {
    /* 반응형 */
  }
  useEffect(() => {
    if (isShowMobileSideMenu) {
      document.querySelector("body")?.style.setProperty("overflow-y", "hidden", "important");
    } else {
      document.querySelector("body")?.style.setProperty("overflow-y", "auto", "important");
    }
  }, [isShowMobileSideMenu]);
  useEffect(() => {
    const clickOutside = (e: MouseEvent | KeyboardEvent) => {
      let shouldCloseLanguage = false;
      let shouldCloseHelp = false;

      if (isShowLanguage === browserType.PC) {
        shouldCloseLanguage = !languageBoxPcRef.current?.contains(e.target as Node);
      } else if (isShowLanguage === browserType.TABLET) {
        shouldCloseLanguage = !languageBoxTabletRef.current?.contains(e.target as Node);
      }

      if (isShowHelpMenu === browserType.PC) {
        shouldCloseHelp = !helpBoxPcRef.current?.contains(e.target as Node);
      } else if (isShowHelpMenu === browserType.TABLET) {
        shouldCloseHelp = !helpBoxTabletRef.current?.contains(e.target as Node);
      }
      if (shouldCloseLanguage) {
        setIsShowLanguage("");
      }
      if (shouldCloseHelp) {
        setIsShowHelpMenu("");
      }
    };
    if (
      (!isNull(isShowLanguage) && isShowLanguage) ||
      (!isNull(isShowHelpMenu) && isShowHelpMenu)
    ) {
      document.addEventListener("mousedown", clickOutside);
      document.addEventListener("keydown", clickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", clickOutside);
      document.removeEventListener("keydown", clickOutside);
    };
  }, [isShowLanguage, isShowHelpMenu]);
  const renderHeaderManualPop = () => {
    const headerManualItemBox = `flex flex-col gap-[1.25rem]`;
    const headerManualItemTitle = `text-gray_700 font-LGSMHATB`;
    return (
      //반응형
      <CPopUp
        ref={manualPopRef}
        isActive={selectedHelpMenu === "Manual"}
        className={"w-[37.5rem] mobile:w-full"}
        notOverflow={isShowHelpMenu === browserType.MOBILE}
      >
        <CPopHeader label={"Read the guide"} onClick={() => setSelectedHelpMenu("")} />
        {/* 반응형 */}
        <div
          className={`p-[2.5rem] flex flex-col gap-[1.875rem] items-center overflow-y-auto h-[37.5rem]
                    mobile:p-[1.25rem_1rem_2.5rem] mobile:h-full`}
        >
          {/* 반응형 */}
          <div className={"flex flex-col gap-[2.5rem] mobile:gap-[1.875rem]"}>
            {/* 반응형 */}
            <p
              className={`leading-[1.4rem] text-gray_700
                        mobile:text-[0.875rem] mobile:leading-[1.225rem]  mobile:mb-[-0.625rem]`}
            >
              This sound simulator is suitable for outdoor noise level evaluation because it
              consider propagation over a distance and insertion loss of a barrier between the noise
              source and the receiver in the outdoor environment.
            </p>
            <div className={headerManualItemBox}>
              <p className={headerManualItemTitle}>How to use</p>
              <div className={"flex flex-col gap-[0.75rem]"}>
                {howToUseDummyData.map((item, index) => (
                  // 반응형
                  <div
                    key={"howToUseDummyData" + index}
                    className={`text-[0.875rem] text-gray_700 leading-[1.225rem] indent-[-1.938rem] pl-[1.938rem]
                                         mobile:text-[0.75rem] mobile:leading-[1.05rem]`}
                  >
                    {/* 반응형 */}
                    <span
                      className={`mr-[1.188rem] text-[0.875rem] text-gray_700 leading-[1.225rem]
                                            mobile:text-[0.75rem] mobile:leading-[1.05rem]`}
                    >
                      {index + 1})
                    </span>
                    {item.highLight ? (
                      <>
                        {item.content1.replace(item.highLight, "")}
                        <br />
                        {/* 반응형 */}
                        <span
                          className={`text-primary text-[0.875rem] leading-[1.225rem] font-LGSMHATSB
                                                    mobile:text-[0.75rem] mobile:leading-[1.05rem]`}
                        >
                          {item.highLight}
                        </span>
                        {item.content2}
                      </>
                    ) : (
                      item.content1
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className={headerManualItemBox}>
              <p className={headerManualItemTitle}>Guide image for center point</p>
              <Image src={IG_GUIDE_IMAGE_FOR_CENTER_POINT} alt={"Guide image for center point"} />
            </div>
            <div className={headerManualItemBox}>
              <p className={headerManualItemTitle}>Guide image for reflective wall and ground</p>
              <Image
                src={IG_REFLECTIVE_WALL_AND_GROUND}
                alt={"Guide image for reflective wall and ground"}
              />
            </div>
            <div className={headerManualItemBox}>
              <p className={headerManualItemTitle}>Reference_Common background noises</p>
              <ReferenceCommonTable />
            </div>
          </div>
          {/* 반응형 */}
          <CButton
            title={"OK"}
            className={"primaryButton w-[8.75rem] flex-none mobile:w-full mobile:h-[2.25rem]"}
            onClick={() => {
              setSelectedHelpMenu("");
            }}
          />
        </div>
      </CPopUp>
    );
  };
  const renderHeaderTutorialPop = () => {
    return (
      //반응형
      <CPopUp
        ref={tutorialPopRef}
        isActive={selectedHelpMenu === "Tutorial"}
        className={"mobile:w-[calc(100%-1rem-1rem)] mobile:h-auto"}
        classList={"mobile:bg-popup_bg"}
        notOverflow={isShowHelpMenu === browserType.MOBILE}
      >
        <div className={"!w-[50rem] !h-[28.125rem] !bg-transparent mobile:!w-full"}>
          <div
            className={
              "relative bg-gray_500 w-[50rem] h-[28.125rem] flex justify-center items-center mobile:w-full"
            }
          >
            <button
              onClick={() => {
                setSelectedHelpMenu("");
              }}
              className={
                "w-[2.875rem] h-[2.875rem] rounded-full bg-gray_600 absolute top-[-4.125rem] right-0 cursor-pointer mobile:w-[1.875rem] mobile:h-[1.875rem] mobile:flex mobile:items-center mobile:justify-center mobile:top-[-2.6rem]"
              }
              tabIndex={0}
            >
              <Image src={IC_TUTORIAL_CLOSE} alt={"close"} className={"mobile:hidden"} />
              <Image
                src={IC_M_TUTORIAL_CLOSE}
                alt={"close"}
                className={"hidden mobile:block w-4 h-4"}
              />
            </button>
            <Image src={IC_TUTORIAL_PLAY} alt={"play"} className={"text-center"} />
          </div>
        </div>
      </CPopUp>
    );
  };
  return (
    <>
      {/* 반응형 */}
      <div className="header pc:flex tablet:hidden mobile:hidden">
        <div className="flex items-center gap-[2.25rem]">
          <Image src={IC_LG_LOGO} alt={"lg"} tabIndex={0} />
          <div className="flex items-center gap-[6.25rem]" tabIndex={0}>
            <div className="font-LGSMHATB text-2xl text-primary flex-none">LATS Noise</div>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex justify-start items-center gap-1.5 cursor-pointer" tabIndex={0}>
            <Image src={!isNull(loginUserName) ? IC_LOGIN_USER : IC_USER} alt={"user"} />
            {!isNull(loginUserName) ? (
              <div className={"font-LGSMHATR text-gray_900"}>{loginUserName}</div>
            ) : (
              <div className="font-LGSMHATSB text-gray_500">Login</div>
            )}
          </div>
          <div className="w-px bg-[rgba(0,0,0,0.2)] h-4 cursor-pointer" />
          {!isNull(loginUserName) && (
            <Image src={IC_LOGOUT} alt={"logout"} className={"cursor-pointer"} tabIndex={0} />
          )}
          <div
            className="flex justify-start items-center gap-1.5 relative cursor-pointer"
            onClick={(e) => handleLanguageClick(e, browserType.PC)}
            onKeyDown={(e) => handleLanguageClick(e, browserType.PC)}
            ref={languageBoxPcRef}
            tabIndex={0}
          >
            <Image src={IC_COUNTRY} alt={"country"} />
            {isShowLanguage === browserType.PC && (
              <CLanguageBox
                selectedLanguage={selectedLanguage}
                setSelectedLanguage={setSelectedLanguage}
              />
            )}
          </div>
          <div
            className="relative"
            ref={helpBoxPcRef}
            onClick={(e) => handleHelpClick(e, browserType.PC)}
            onKeyDown={(e) => handleHelpClick(e, browserType.PC)}
          >
            <Image className={"cursor-pointer"} src={IC_INFORMATION} alt={"help"} tabIndex={0} />
            {isShowHelpMenu === browserType.PC && (
              <CHelpBox setSelectedHelpMenu={setSelectedHelpMenu} />
            )}
          </div>
          <Image className={"cursor-pointer"} src={IC_SETTING} alt={"setting"} tabIndex={0} />
        </div>
      </div>
      {/* 반응형 */}
      <div className="tabletHeader pc:hidden tablet:flex mobile:hidden">
        <Image src={IC_LG_LOGO} alt={"lg"} tabIndex={0} />
        <div className={"w-full"}>
          <div
            className={"flex justify-between items-center border-b border-[#EEEEEE] pb-2 relative"}
          >
            <div className={"font-LGSMHATB text-primary text-xl leading-5"} tabIndex={0}>
              LATS Noise
            </div>
            <div className={"flex justify-start items-center"}>
              <div className="flex items-center gap-5">
                {!isNull(loginUserName) && (
                  <Image src={IC_LOGOUT} alt={"logout"} tabIndex={0} className={"cursor-pointer"} />
                )}
                <div
                  ref={languageBoxTabletRef}
                  tabIndex={0}
                  className={"flex justify-start items-center gap-[6px] relative cursor-pointer"}
                  onClick={(e) => handleLanguageClick(e, browserType.TABLET)}
                  onKeyDown={(e) => handleLanguageClick(e, browserType.TABLET)}
                >
                  <Image src={IC_COUNTRY} alt={"country"} />
                  {isShowLanguage === browserType.TABLET && (
                    <CLanguageBox
                      selectedLanguage={selectedLanguage}
                      setSelectedLanguage={setSelectedLanguage}
                    />
                  )}
                </div>
                <div
                  ref={helpBoxTabletRef}
                  onClick={(e) => handleHelpClick(e, browserType.TABLET)}
                  onKeyDown={(e) => handleHelpClick(e, browserType.TABLET)}
                  tabIndex={0}
                >
                  <Image src={IC_INFORMATION} alt={"information"} className={"cursor-pointer"} />
                  {isShowHelpMenu === browserType.TABLET && (
                    <CHelpBox setSelectedHelpMenu={setSelectedHelpMenu} />
                  )}
                </div>
                <Image className={"cursor-pointer"} src={IC_SETTING} alt={"setting"} tabIndex={0} />
              </div>
            </div>
          </div>

          <div className={"flex items-center pt-2 justify-end"}>
            <div className={"flex justify-start items-center gap-1.5 cursor-pointer"} tabIndex={0}>
              <Image src={!isNull(loginUserName) ? IC_LOGIN_USER : IC_USER} alt={"user"} />
              {!isNull(loginUserName) ? (
                <div className={"font-LGSMHATR text-gray_900"}>{loginUserName}</div>
              ) : (
                <div className={"font-LGSMHATSB text-gray_500"}>Login</div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* 반응형 */}
      <div className={"mobileHeader hidden mobile:flex"}>
        <Image src={IC_LG_LOGO} alt={"lg"} className="w-[3.75rem]" />
        <div className={"flex justify-start items-center gap-5"}>
          <div className={"font-LGSMHATB text-primary mobile:text-[0.875rem]"}>LATS Noise</div>
          <Image
            src={IC_HAMBURGER}
            alt={"menu"}
            className={"cursor-pointer"}
            onClick={() => setIsShowMobileSideMenu(!isShowMobileSideMenu)}
          />
        </div>
        <div
          className={
            "hidden_scrollbar z-[21] w-full h-full min-h-full bg-[rgba(0,0,0,0.1)] flex justify-end fixed top-0 duration-200 mobile:z-50 overflow-y-scroll " +
            (isShowMobileSideMenu ? "right-0" : "right-[-9999px]")
          }
        >
          <div className={" bg-white w-[95%] h-full"}>
            <div className={"flex justify-end py-3 px-4 "}>
              {/* 반응형 */}
              <Image
                src={IC_SIDE_MENU_CLOSE}
                alt={"close"}
                className={"cursor-pointer"}
                onClick={() => setIsShowMobileSideMenu(false)}
              />
            </div>
            <div className={"flex justify-start items-center gap-2.5 py-3 px-4 cursor-pointer"}>
              <Image src={!isNull(loginUserName) ? IC_LOGIN_USER : IC_USER} alt={"user"} />
              {!isNull(loginUserName) ? (
                <>
                  <div className={"font-LGSMHATR text-gray_900"}>{loginUserName}</div>
                  <div className="w-px bg-[rgba(0,0,0,0.2)] h-4 mx-2.5" />
                  <Image src={IC_LOGOUT} alt={"logout"} />
                </>
              ) : (
                <div className={"font-LGSMHATSB text-gray_500"}>Login</div>
              )}
            </div>
            <div className={"h-2.5 bg-[#f5f5f5]"} />
            <div
              className={"flex justify-between items-center py-3 px-4 bg-white cursor-pointer"}
              onClick={() => {
                setIsShowLanguage(isNull(isShowLanguage) ? browserType.MOBILE : "");
              }}
            >
              <div className={"flex justify-start items-center gap-2.5"}>
                <Image src={IC_COUNTRY} alt={"country"} />
                <div className={"font-LGSMHATSB text-black"}>{selectedLanguage}</div>
              </div>
              <Image
                src={isShowLanguage ? IC_SIDE_MENU_MINUS : IC_SIDE_MENU_PLUS}
                alt={isShowLanguage ? "hide" : "show"}
              />
            </div>
            {/* 반응형 */}
            {isShowLanguage === browserType.MOBILE ? (
              <CLanguageBox
                selectedLanguage={selectedLanguage}
                setSelectedLanguage={setSelectedLanguage}
              />
            ) : (
              <div className={"h-2.5 bg-[#f5f5f5]"} />
            )}
            {/* 반응형 */}
            <div
              className={"flex justify-between items-center py-3 px-4 cursor-pointer"}
              onClick={() => {
                setIsShowHelpMenu(isNull(isShowHelpMenu) ? browserType.MOBILE : "");
              }}
            >
              <div className={"flex justify-start items-center gap-2.5 bg-white "}>
                <Image src={IC_INFORMATION} alt={"help"} />
                <div className={"font-LGSMHATSB text-black"}>Help</div>
              </div>
              <Image
                src={isShowHelpMenu ? IC_SIDE_MENU_MINUS : IC_SIDE_MENU_PLUS}
                alt={isShowHelpMenu ? "hide" : "show"}
              />
            </div>
            {/* 반응형 */}
            {isShowHelpMenu === browserType.MOBILE ? (
              <CHelpBox setSelectedHelpMenu={setSelectedHelpMenu} />
            ) : (
              <div className={"h-2.5 bg-[#f5f5f5]"} />
            )}
            <div
              className={
                "flex justify-start items-center pt-3 px-4 pb-9 gap-2.5 bg-white my-[-1px]"
              }
            >
              <Image src={IC_SETTING} alt={"setting"} />
              <div className={"font-LGSMHATSB text-black"}>Setting</div>
            </div>
          </div>
        </div>
      </div>
      {renderHeaderManualPop()}
      {renderHeaderTutorialPop()}
    </>
  );
}
