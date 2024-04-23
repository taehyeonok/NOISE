"use client";
import CArrowHeader from "@/app/[lang]/components/_atoms/cArrowHeader";
import CPageContainer from "@/app/[lang]/components/_atoms/cPageContainer";
import CTitleBox from "@/app/[lang]/components/_atoms/cTitleBox";
import { unitSettingData } from "@/app/[lang]/constants/const";
import EditUnit from "@/lib/editUnit";
import { useEffect, useState } from "react";
interface DefaultSelectUnit {
  [key: string]: string;
}
export default function UnitSetting() {
  const [selectedUnitInformation, setSelectedUnitInformation] = useState<string>("SI");
  const [defaultSelectUnit, setDefaultSelectUnit] = useState<DefaultSelectUnit>({});
  useEffect(() => {
    const editUnit = new EditUnit();
    const lats_unit = editUnit.getUnitSetting();
    setSelectedUnitInformation(lats_unit?.unitClss);
  }, []);

  useEffect(() => {
    const editUnit = new EditUnit();
    const lats_unit = editUnit.getUnitSetting();
    setDefaultSelectUnit(lats_unit[selectedUnitInformation]);
  }, [selectedUnitInformation]);

  const selectUnitType = (select: { key: string; value: string }) => {
    const editUnit = new EditUnit();
    const lats_unit = editUnit.getUnitSetting();
    const object: Record<string, string> = { ...defaultSelectUnit };
    object[select.key] = select.value;
    lats_unit[selectedUnitInformation] = object;
    editUnit.setUnitSetting(lats_unit);
    setDefaultSelectUnit(object);
  };

  const selectUnitClss = (unitClss: string) => {
    const editUnit = new EditUnit();
    const lats_unit = editUnit.getUnitSetting();
    lats_unit.unitClss = unitClss;
    editUnit.setUnitSetting(lats_unit);
    setSelectedUnitInformation(unitClss);
  };

  // const selectUnitType = (select: { key: string; value: string }) => {
  //   const object: Record<string, string> = { ...defaultSelectUnit };
  //   object[select.key] = select.value;
  //   setDefaultSelectUnit(object);
  // };

  return (
    <CPageContainer className={"mobile:mt-[3.125rem] mobile:mb-0"}>
      <div className={"settingPageStyles"}>
        <CArrowHeader title={"Unit Setting"} classList="mobile:hidden" />
        {/* 반응형 */}
        <CArrowHeader title={"Setting"} classList="pc:hidden tablet:hidden mobile:mb-2.5" />
        <div className={"w-full bg-white p-10 mobile:p-[1.875rem_0_3.125rem_0]"}>
          <CTitleBox
            title={"Unit Setting"}
            classList={"pc:hidden tablet:hidden mobile:m-[0_1rem_30px_1rem]"}
          />
          <div
            className={
              "w-full bg-bg_gray py-2.5 flex justify-center items-center mobile:flex-col mobile:gap-2.5 mobile:pt-3 mobile:pb-3.5"
            }
          >
            <div
              className={
                "font-LGSMHATSB text-base text-gray_600 mr-7 mobile:mr-0 mobile:leading-none mobile:text-sm"
              }
            >
              Unit Information
            </div>
            <div className={"flex justify-center items-center gap-2.5"}>
              <div
                className={
                  "grayRoundFillButton " + (selectedUnitInformation === "SI" ? "active" : "")
                }
                onClick={() => selectUnitClss("SI")}
              >
                SI
              </div>
              <div
                className={
                  "grayRoundFillButton " + (selectedUnitInformation === "IP" ? "active" : "")
                }
                onClick={() => selectUnitClss("IP")}
              >
                IP
              </div>
            </div>
          </div>
          <div
            className={
              "mt-10 w-full flex justify-start items-start flex-wrap gap-x-10 gap-y-2.5 mobile:mt-[1.875rem] mobile:p-[0_1rem]"
            }
          >
            {unitSettingData.map((unit, index) => {
              return (
                <div
                  className={
                    "w-[36.25rem] rounded-xl border border-[#C9CDD2] py-5 px-[1.875rem] mobile:w-full mobile:p-5"
                  }
                  key={"unitSettingData" + index}
                >
                  <div className={"font-LGSMHATSB text-sm text-gray_400 text-left mb-2.5"}>
                    {unit.title}
                  </div>
                  <div className={"flex justify-start items-center gap-2.5 mobile:flex-wrap"}>
                    {unit.value.map((u, index) => {
                      return (
                        <div
                          key={"unit_value" + index}
                          className={
                            "grayRoundLineButton " +
                            (defaultSelectUnit[unit.key] === u ? "active" : "")
                          }
                          onClick={() => {
                            selectUnitType({ key: unit.key, value: u });
                          }}
                        >
                          {u}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </CPageContainer>
  );
}
