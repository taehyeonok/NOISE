"use client";

import Image from "next/image";
import {
  browserType,
  headerManualDummyData,
  howToUseDummyData,
  unitSettingDefaultData,
  UnitStorageName,
} from "@/app/[lang]/constants/const";

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
import { useTranslation } from "@/app/i18n/client";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import Link from "next/link";

export default function Header({ lang, selectedLanguage }: any) {
  const { t } = useTranslation(lang);
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies([
    "latsNoiseLogin",
    "latsNoiseLoginInfo",
    "latsNoiseLogout",
    "ssolgenet",
    "login_success",
  ]);
  const [loginStatus, setLoginStatus] = useState<string | null>("nologin");
  const [isShowLanguage, setIsShowLanguage] = useState<string>("");
  // const [selectedLanguage, setSelectedLanguage] = useState<string>("Korea");
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

  useEffect(() => {
    // if (localStorage.getItem(UnitStorageName_old) != null)
    //   localStorage.removeItem(UnitStorageName_old);
    if (localStorage.getItem(UnitStorageName) == null) {
      const unitData = JSON.stringify({
        unitClss: "SI",
        ...unitSettingDefaultData,
      });
      localStorage.setItem(UnitStorageName, unitData);
    }
    if (localStorage.getItem(UnitStorageName)) {
      if (
        Object.entries(JSON.parse(localStorage.getItem(UnitStorageName)!).SI).toString() !==
        Object.entries(unitSettingDefaultData.SI).toString()
      ) {
        const unitData = JSON.stringify({
          unitClss: "SI",
          ...unitSettingDefaultData,
        });
        localStorage.setItem(UnitStorageName, unitData);
      }
    }
    // setLoginUserRegion(
    //   `${localStorage.getItem("user_region")} / ${localStorage.getItem("user_country")}`
    // );
  }, []);

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
  useEffect(() => {
    setLoginStatus(cookies.latsNoiseLogin);
    setLoginUserName(cookies.latsNoiseLoginInfo);
  }, [cookies]);
  const renderHeaderManualPop = () => {
    return (
      //반응형
      <CPopUp
        ref={manualPopRef}
        isActive={selectedHelpMenu === "Manual"}
        className={"p-[2.5rem_3.125rem] mobile:w-[90%] mobile:p-0"}
        classList={"mobile:bg-popup_bg"}
        notOverflow={isShowHelpMenu === browserType.MOBILE}
      >
        {/* 반응형 */}
        <div className={"flex flex-col gap-10 mobile:gap-[1.875rem]"}>
          {/* 반응형 */}
          <div
            className={
              "flex flex-col gap-5 items-center mobile:p-[1.875rem_1rem_0_1rem] mobile:gap-2.5"
            }
          >
            <p className={"text-gray_900 text-[1.625rem] font-LGSMHATSB mobile:text-[1.25rem]"}>
              Manual
            </p>
            <p className={"text-757575 mobile:text-center"}>
              Looking for a manual? Download user manual here.
            </p>
          </div>
          {/* 반응형 */}
          <div className={"flex flex-col gap-10 mobile:gap-[1.875rem]"}>
            {/* 반응형 */}
            <div className={"flex flex-col gap-2.5 mobile:p-[0_1rem]"}>
              {headerManualDummyData.map((item, index) => {
                return (
                  <div
                    key={"headerManualDummyData" + index}
                    className={
                      "w-[31.25rem] h-[3.125rem] rounded-[3px] border border-solid border-gray_300 px-5 flex items-center justify-between cursor-pointer " +
                      "hover:border-primary " +
                      "mobile:flex-col mobile:px-[1.063rem] mobile:items-start mobile:w-full mobile:h-[4rem] mobile:justify-center mobile:gap-[0.75rem]"
                    }
                    onClick={() => {
                      downloadManual(item.title);
                    }}
                  >
                    {/* 반응형 */}
                    <p className={"text-gray_900 mobile:text-[0.875rem]"}>{item.title}</p>
                    <p className={"text-[0.75rem] text-gray_500"}>{item.date}</p>
                  </div>
                );
              })}
            </div>
            {/* 반응형 */}
            <div className={"flex gap-2.5 justify-center mobile:gap-0"}>
              <CButton
                title={"Cancel"}
                className={
                  "blackLineButton w-[10rem] h-[3.125rem] !text-[1.125rem] mobile:w-[50%] mobile:rounded-none mobile:border-l-0 mobile:border-r-0 mobile:border-b-0"
                }
                onClick={() => {
                  setSelectedHelpMenu("");
                }}
              />
              {/* <CButton
                  title={"Download"}
                  className={
                    "primaryButton w-[10rem] h-[3.125rem] !text-[1.125rem] mobile:w-[50%] mobile:rounded-none"
                  }
                /> */}
            </div>
          </div>
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

  const fnLatsMain = () => {
    localStorage.removeItem("simulate");
    localStorage.removeItem("simulate2");
    localStorage.removeItem("fieldType");
    localStorage.removeItem("isBack");
    removeCookie("latsNoiseLogin");
    removeCookie("latsNoiseLoginInfo");
    router.push(window.location.protocol + "//" + window.location.host + "/");
  };

  const fnLogout = () => {
    localStorage.removeItem("simulate");
    localStorage.removeItem("simulate2");
    localStorage.removeItem("fieldType");
    localStorage.removeItem("isBack");
    removeCookie("latsNoiseLogin");
    removeCookie("latsNoiseLoginInfo");
    router.push(window.location.protocol + "//" + window.location.host + "/login/logout.lge");
  };

  const downloadManual = async (fileName: string) => {
    // let fileURL = "";
    let fileURL =
      "http://latscw.lge.com/global/latsWeb/common/fileDownUtil.ajax?path=Noise/Manual&fileName=";
    fileURL += fileName;

    // 파일 다운로드 진행
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
    let res: Response = new Response();
    res = await fetch(`${basePath}/api/download-manual`, {
      method: "post",
      body: JSON.stringify({
        fileURL: fileURL,
      }),
    });

    const file = await res.blob();
    const downloadUrl = window.URL.createObjectURL(file);

    const anchorElement = document.createElement("a");
    document.body.appendChild(anchorElement);
    anchorElement.download = "LATS Noise User Manual.pdf";
    anchorElement.href = downloadUrl;

    anchorElement.click();

    document.body.removeChild(anchorElement);
    window.URL.revokeObjectURL(downloadUrl);
  };
  return (
    <>
      {/* 반응형 */}
      <div className="header pc:flex tablet:hidden mobile:hidden">
        <div className="flex items-center gap-[2.25rem] cursor-pointer">
          <Image src={IC_LG_LOGO} alt={"lg"} tabIndex={0} onClick={fnLatsMain} />
          <div className="flex items-center gap-[6.25rem]" tabIndex={0}>
            <Link href={"input"}>
              <div className="font-LGSMHATB text-2xl text-primary flex-none">LATS Noise</div>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex justify-start items-center gap-1.5 cursor-pointer" tabIndex={0}>
            <Image
              src={!isNull(loginUserName) ? IC_LOGIN_USER : IC_USER}
              alt={"user"}
              onClick={() => {
                if (isNull(loginUserName)) fnLogout();
              }}
            />
            {!isNull(loginUserName) ? (
              <div className={"font-LGSMHATR text-gray_900"}>{loginUserName}</div>
            ) : (
              <div className="font-LGSMHATSB text-gray_500" onClick={fnLogout}>
                {t("THERMAV_5")}
              </div>
            )}
          </div>
          <div className="w-px bg-[rgba(0,0,0,0.2)] h-4" />
          {!isNull(loginUserName) &&
            (cookies.ssolgenet == null ||
              cookies.login_success == null ||
              cookies.login_success !== "T") && (
              <Image
                src={IC_LOGOUT}
                alt={"logout"}
                className={"cursor-pointer"}
                tabIndex={0}
                onClick={fnLogout}
              />
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
                // setSelectedLanguage={setSelectedLanguage}
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
          <Link href={"setting"}>
            <Image
              className={"cursor-pointer"}
              src={IC_SETTING}
              alt={"setting"}
              tabIndex={0}
              onClick={() => {
                localStorage.setItem("isBack", "true");
              }}
            />
          </Link>
        </div>
      </div>
      {/* 반응형 */}
      <div className="tabletHeader pc:hidden tablet:flex mobile:hidden">
        <Image src={IC_LG_LOGO} alt={"lg"} tabIndex={0} onClick={fnLatsMain} />
        <div className={"w-full"}>
          <div
            className={"flex justify-between items-center border-b border-[#EEEEEE] pb-2 relative"}
          >
            <Link href={"input"}>
              <div className={"font-LGSMHATB text-primary text-xl leading-5"} tabIndex={0}>
                LATS Noise
              </div>
            </Link>
            <div className={"flex justify-start items-center"}>
              <div className="flex items-center gap-5">
                {!isNull(loginUserName) &&
                  (cookies.ssolgenet == null ||
                    cookies.login_success == null ||
                    cookies.login_success !== "T") && (
                    <Image
                      src={IC_LOGOUT}
                      alt={"logout"}
                      className={"cursor-pointer"}
                      tabIndex={0}
                      onClick={fnLogout}
                    />
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
                      // setSelectedLanguage={setSelectedLanguage}
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
                <Link href={"setting"}>
                  <Image
                    className={"cursor-pointer"}
                    src={IC_SETTING}
                    alt={"setting"}
                    tabIndex={0}
                    onClick={() => {
                      localStorage.setItem("isBack", "true");
                    }}
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className={"flex items-center pt-2 justify-end"}>
            <div className={"flex justify-start items-center gap-1.5 cursor-pointer"} tabIndex={0}>
              <Image
                src={!isNull(loginUserName) ? IC_LOGIN_USER : IC_USER}
                alt={"user"}
                onClick={() => {
                  if (isNull(loginUserName)) fnLogout();
                }}
              />
              {!isNull(loginUserName) ? (
                <div className={"font-LGSMHATR text-gray_900"}>{loginUserName}</div>
              ) : (
                <div className={"font-LGSMHATSB text-gray_500"} onClick={fnLogout}>
                  {t("THERMAV_5")}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* 반응형 */}
      <div className={"mobileHeader hidden mobile:flex"}>
        <Image src={IC_LG_LOGO} alt={"lg"} className="w-[3.75rem]" onClick={fnLatsMain} />
        <div className={"flex justify-start items-center gap-5"}>
          <Link href={"input"}>
            <div className={"font-LGSMHATB text-primary mobile:text-[0.875rem]"}>LATS Noise</div>
          </Link>
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
              <Image
                src={!isNull(loginUserName) ? IC_LOGIN_USER : IC_USER}
                alt={"user"}
                onClick={() => {
                  if (isNull(loginUserName)) fnLogout();
                }}
              />
              {!isNull(loginUserName) ? (
                <>
                  <div className={"font-LGSMHATR text-gray_900"}>{loginUserName}</div>
                  <div className="w-px bg-[rgba(0,0,0,0.2)] h-4 mx-2.5" />
                  {(cookies.ssolgenet == null ||
                    cookies.login_success == null ||
                    cookies.login_success !== "T") && (
                    <Image
                      src={IC_LOGOUT}
                      alt={"logout"}
                      className={"cursor-pointer"}
                      onClick={fnLogout}
                    />
                  )}
                </>
              ) : (
                <div className={"font-LGSMHATSB text-gray_500 cursor-pointer"} onClick={fnLogout}>
                  {t("THERMAV_5")}
                </div>
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
                // setSelectedLanguage={setSelectedLanguage}
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
              <Link href={"setting"}>
                <Image
                  src={IC_SETTING}
                  alt={"setting"}
                  onClick={() => {
                    localStorage.setItem("isBack", "true");
                  }}
                />
                <div className={"font-LGSMHATSB text-black"}>Setting</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {renderHeaderManualPop()}
      {renderHeaderTutorialPop()}
    </>
  );
}
