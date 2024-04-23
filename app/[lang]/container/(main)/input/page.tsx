"use client";

import ContainerBox from "@/app/[lang]/components/containerBox/containerBox";
import ContainerBoxTitle from "@/app/[lang]/components/containerBoxTitle/containerBoxTitle";
import ContainerBoxRow from "@/app/[lang]/components/containerBoxRow/containerBoxRow";
import { useEffect, useRef, useState } from "react";
import CCalendar from "@/app/[lang]/components/_atoms/cCalendar";
import IC_ROUND_PLUS from "@/app/assets/icons/ic_round_plus.svg";
import IG_OUTDOOR_SPACE from "@/app/assets/images/ig_outdoor_space.svg";
import IC_TOOLTIP from "@/app/assets/icons/ic_tooltip.svg";
import Image from "next/image";
import ProductInformationTable from "@/app/[lang]/components/table/productInformationTable";
import {
  fieldTypeSelectBoxData,
  productInformationTableDummyData,
  totalCapacityTableDummyData,
} from "@/app/[lang]/constants/const";
import TotalCapacityTable from "@/app/[lang]/components/table/totalCapacityTable";
import SoundSpecDataTable from "@/app/[lang]/components/table/soundSpecDataTable";
import EstimatedSoundPowerDataTable from "@/app/[lang]/components/table/estimatedSoundPowerDataTable";
import OutdoorSpaceContent from "@/app/[lang]/components/fieldTypeContent/outdoorSpaceContent";
import EnclosedSpaceContent from "@/app/[lang]/components/fieldTypeContent/enclosedSpaceContent";
import CSelect from "@/app/[lang]/components/_atoms/cSelect";
import Link from "next/link";
import EditUnit from "@/lib/editUnit";
import { noiseSimulator } from "@/lib/noiseSimulator";
import { validateFormData } from "@/lib/validation";
import { useParams, useRouter } from "next/navigation";
import { useTranslation } from "@/app/i18n/client";
import LoadingPage from "@/app/[lang]/components/loadingSkeleton/loadingPage";

export default function Input() {
  const param = useParams<{ lang: string }>();
  const { t } = useTranslation(param.lang);
  const editUnit = new EditUnit();
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const [isShowSelectBox, setIsShowSelectBox] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [tableDummyData, setTableDummyData] = useState(productInformationTableDummyData);
  const [selectFieldType, setSelectFieldType] = useState<{ title: string; value: string }>({
    title: "Outdoor Space",
    value: "1",
  });

  const addTableRow = () => {
    const obj = tableDummyData[tableDummyData.length - 1];
    if (obj) setTableDummyData([...tableDummyData, obj]);
  };
  const removeTableRow = (index: number) => {
    setTableDummyData([]);
    const arr = [...tableDummyData];
    arr.splice(index, 1);
    setTableDummyData(arr);
  };

  /**
   * R-Checker 계산 로직 실행 후 결과창 이동
   * @param formData
   */
  async function actionSimulate(formData: FormData) {
    if (!validateFormData(formRef, t)) return;
    setIsLoading(true);
    const unitData = editUnit.getUnitSetting();
    const result = await noiseSimulator(formData, unitData);
    setIsLoading(false);
    router.push("/container/result");
  }

  return (
    <form ref={formRef} action={actionSimulate} className={"w-full h-full"}>
      {isLoading && <LoadingPage />}
      <div className={"flex flex-col gap-[2.5rem] mb-[2.5rem]"}>
        <ContainerBox>
          <ContainerBoxTitle title={"Inputs"} />
          {/* 반응형 */}
          <div
            className={`font-LGSMHATB text-gray_700 mb-5 mt-10 text-left leading-[1.115rem]
                mobile:mt-[1.25rem] mobile:mb-[1.875rem]`}
          >
            General Information
          </div>
          {/* 반응형 */}
          <ContainerBoxRow
            justifyContent={"between"}
            classList={"mb-10 mobile:flex-col mobile:gap-[0.625rem] mobile:mb-[1.875rem]"}
          >
            {/* 반응형 */}
            <div className={"flex items-center w-[32.5rem] justify-between mobile:w-full"}>
              <div className={"font-LGSMHATSB text-[0.875rem] text-gray_400"}>Project Name</div>
              <CSelect
                name={"project_name"}
                title={"Project Name"}
                className={"w-[18.438rem] mobile:w-[12.5rem]"}
                selected
              />
            </div>
            {/* 반응형 */}
            <div className={"flex items-center w-[32.5rem] justify-between mobile:w-full"}>
              <div className={"font-LGSMHATSB text-[0.875rem] text-gray_400"}>Date of issue</div>
              <CCalendar label="date_of_issue" />
            </div>
          </ContainerBoxRow>
          <ContainerBoxRow justifyContent={"between"}>
            {/* 반응형 */}
            <div
              className={
                "w-[13.438rem] font-LGSMHATSB text-[0.875rem] text-gray_400 mr-5 text-left align-top mb-5 mobile:mb-[0.563rem] mobile:mr-0"
              }
            >
              Product Information
            </div>
            <button
              type={"button"}
              className={"flex justify-start items-center align-bottom"}
              onClick={() => {
                addTableRow();
              }}
            >
              <Image src={IC_ROUND_PLUS} alt={"add Model"} className={"mr-1"} />
              {/* 반응형 */}
              <span
                className={`font-LGSMHATB text-[0.875rem] text-gray_400 leading-[1.125rem]
                            mobile:text-[0.75rem] mobile:leading-[0.836rem]`}
              >
                Add Model
              </span>
            </button>
          </ContainerBoxRow>
          <ProductInformationTable data={tableDummyData} removeTableRow={removeTableRow} />
          {/* 반응형 */}
          <ContainerBoxRow
            justifyContent={"end"}
            alignItems={"center"}
            classList={"mt-5 w-full justify-end mobile:mt-[2.5rem]"}
          >
            <TotalCapacityTable />
          </ContainerBoxRow>
          {/* 반응형 */}
          <div
            className={`font-LGSMHATB text-gray_700 mb-5 mt-10 text-left leading-[1.115rem]
                mobile:mt-[2.5rem] mobile:mb-[0.688rem]`}
          >
            Sound Source
          </div>
          {/* 반응형 */}
          <div
            className={`w-full bg-[#666768] h-[2.25rem] text-white font-LGSMHATSB mb-2.5 text-[0.875rem] flex items-center justify-center
                    mobile:h-[2.5rem] mobile:mb-[1.25rem] mobile:w-[calc(100%+2rem)] mobile:mx-[-1rem]`}
          >
            Sound Spec Data
          </div>
          <div
            className={"!text-right !mb-2 !font-LGSMHATR !text-[0.625rem] !leading-3 mobile:hidden"}
          >
            Unit : dB
          </div>
          <SoundSpecDataTable />
          {/* 반응형 */}
          <div
            className={`w-full bg-[#666768] h-[2.25rem] text-white font-LGSMHATSB mb-2.5 text-[0.875rem] flex items-center justify-center mt-10
                          mobile:h-[2.5rem] mobile:mt-[1.875rem] mobile:mb-[1.25rem] mobile:w-[calc(100%+2rem)] mobile:mx-[-1rem]`}
          >
            Estimated Sound Power Data
          </div>
          <EstimatedSoundPowerDataTable />
          {/* 반응형 */}
          <div className={"font-LGSMHATB text-gray_700 mb-5 mt-10 text-left leading-[1.115rem]"}>
            Environmental Information
          </div>
          {/* 반응형 */}
          <ContainerBoxRow
            justifyContent={"start"}
            alignItems={"center"}
            classList={"mobile:justify-between"}
          >
            <div
              className={
                "w-[13.438rem] font-LGSMHATSB text-[0.875rem] leading-[0.976rem] text-gray_400 mr-5 text-left mobile:w-max mobile:mr-0"
              }
            >
              Field type
            </div>
            <CSelect
              name={"outdoor_space"}
              title={"Outdoor Space"}
              selected
              className={"w-[18.438rem] mobile:w-[12.5rem]"}
              selectList={fieldTypeSelectBoxData}
              select={selectFieldType}
              setSelect={setSelectFieldType}
            />
          </ContainerBoxRow>
          {/* 반응형 */}
          <div className={"mt-5 mb-10 mobile:my-[1.5rem]"}>
            <Image src={IG_OUTDOOR_SPACE} alt={"outdoor space"} className={"mx-auto"} />
          </div>
          {selectFieldType?.value === "1" ? (
            <OutdoorSpaceContent t={t} />
          ) : (
            <EnclosedSpaceContent t={t} />
          )}
          {/* 반응형 */}
          <ContainerBoxRow
            justifyContent={"end"}
            alignItems={"center"}
            classList={"mt-[2.5rem] mobile:mt-[1.875rem]"}
          >
            {/* <Link href={"/container/result"} className={"mobile:w-full"}> */}
            <button type={"submit"} className={"primaryButton w-[8.75rem] mobile:w-full"}>
              Simulate
            </button>
            {/* </Link> */}
          </ContainerBoxRow>
        </ContainerBox>
      </div>
    </form>
  );
}
