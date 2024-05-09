"use client";

import ContainerBox from "@/app/[lang]/components/containerBox/containerBox";
import ContainerBoxTitle from "@/app/[lang]/components/containerBoxTitle/containerBoxTitle";
import ContainerBoxRow from "@/app/[lang]/components/containerBoxRow/containerBoxRow";
import { useContext, useEffect, useRef, useState } from "react";
import CCalendar from "@/app/[lang]/components/_atoms/cCalendar";
import IC_ROUND_PLUS from "@/app/assets/icons/ic_round_plus.svg";
import IG_OUTDOOR_SPACE from "@/app/assets/images/ig_outdoor_space.svg";
import IC_TOOLTIP from "@/app/assets/icons/ic_tooltip.svg";
import Image from "next/image";
import ProductInformationTable from "@/app/[lang]/components/table/productInformationTable";
import {
  barrierInfoTableDummyData,
  estimatedSoundDummyData,
  fieldTypeSelectBoxData,
  productInformationTableDummyData,
  soundPowerLevelDummyData,
  soundPressureLevelDummy,
  soundPressureLevelDummyData,
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
import { ProductItem } from "@/@types/components";
import { cloneObject } from "@/app/utils/utils";

export default function Input() {
  const param = useParams<{ lang: string }>();
  const { t } = useTranslation(param.lang);
  const editUnit = new EditUnit();
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const [isShowSelectBox, setIsShowSelectBox] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [productTableData, setProductTableData] = useState<ProductItem[]>(
    productInformationTableDummyData
  );
  const [selectFieldType, setSelectFieldType] = useState<{ title: string; value: string }>({
    title: "Outdoor Space",
    value: "1",
  });
  const [projectName, setProjectName] = useState("");
  const [soundPressureLevel, setSoundPressureLevel] = useState(soundPressureLevelDummyData);
  const [soundPowerLevel, setSoundPowerLevel] = useState(soundPowerLevelDummyData);
  const MIN_ROWS = 1;
  const [estimatedSoundData, setEstimatedSoundData] = useState(estimatedSoundDummyData);
  const [totalCapacityTableData, setTotalCapacityTableData] = useState(totalCapacityTableDummyData);
  const [barrierInfoTableData, setBarrierInfoTableData] = useState(barrierInfoTableDummyData);
  const [soundPresureLevelData, setSoundPresureLevelData] = useState(soundPressureLevelDummy);
  const addTableRow = () => {
    const existingIds = productTableData.map((row) => row.id);
    let newId = 1;
    while (existingIds.includes(newId)) {
      newId++;
    }
    const newRow: ProductItem = {
      id: newId,
      productType: "MultiV i",
      modelName: "ARUM220LTE6",
      qty: "1",
      function: "N/A",
      step: "",
      capacity: "100%",
      del: "",
    };
    setProductTableData([...productTableData, newRow]);
  };
  const removeTableRow = (rowId: number) => {
    if (productTableData.length > MIN_ROWS) {
      const updatedTableRows = productTableData.filter((row) => row.id !== rowId);
      setProductTableData(updatedTableRows);
    }
  };
  useEffect(() => {
    //모델 선택에 따른 DB에서 불러온값
    const a = 0;
    //a값을 모델 개수에 따라 곱해준 값.
    /**ⓐ : 모델 선택에 따른 DB에서 불러온 값.
      ⓑ : ⓐ 값을 모델 개수에 따라 곱해준 값. (4번째 ⓐ kW값 : 7, 좌측 4번째 AWHP 모델 수 2, 따라서 ⓑ kW 값 14) 
      ⓒ : Reduced의 ⓑ kW 값 / Rated의 ⓑ kW 값
      ⓓ : Rated ⓑ의 총 합산 값
      ⓔ : Reduced ⓑ의 총 합산 값
      ⓕ : ⓔ에서의 kW 값 / ⓓ에서의 kW 값 */
    let copy = cloneObject(totalCapacityTableData);
    copy[0].first;
    copy[1].first;
    copy[1].second;
    setTotalCapacityTableData(copy);
  }, [productTableData]);

  useEffect(() => {
    let copy = cloneObject(estimatedSoundData);
    for (let i = 0; i < estimatedSoundData.length; i++) {
      copy[i].content2 = 55 - i;
      setEstimatedSoundData(copy);
    }
  }, [soundPressureLevel]);
  /**
   * Noise 계산 로직 실행 후 결과창 이동
   * @param formData
   */
  async function actionSimulate(formData: FormData) {
    if (!validateFormData(formRef, productTableData, t)) return;
    setIsLoading(true);
    const unitData = editUnit.getUnitSetting();
    const result = await noiseSimulator(
      formData,
      estimatedSoundData,
      productTableData,
      barrierInfoTableData,
      unitData
    );
    localStorage.setItem("simulate", JSON.stringify(result));
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
                onChange={(changeValue: any) => {
                  setProjectName(changeValue);
                }}
                value={projectName}
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
          <ProductInformationTable
            data={productTableData}
            setData={setProductTableData}
            removeTableRow={removeTableRow}
            t={t}
          />
          {/* 반응형 */}
          <ContainerBoxRow
            justifyContent={"end"}
            alignItems={"center"}
            classList={"mt-5 w-full justify-end mobile:mt-[2.5rem]"}
          >
            <TotalCapacityTable
              totalCapacityTableData={totalCapacityTableData}
              setTotalCapacityTableData={setTotalCapacityTableData}
            />
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
          <SoundSpecDataTable
            soundPressureLevel={soundPressureLevel}
            setSoundPressureLevel={setSoundPressureLevel}
            soundPowerLevel={soundPowerLevel}
            setSoundPowerLevel={setSoundPowerLevel}
            soundPresureLevelData={soundPresureLevelData}
          />
          {/* 반응형 */}
          <div
            className={`w-full bg-[#666768] h-[2.25rem] text-white font-LGSMHATSB mb-2.5 text-[0.875rem] flex items-center justify-center mt-10
                          mobile:h-[2.5rem] mobile:mt-[1.875rem] mobile:mb-[1.25rem] mobile:w-[calc(100%+2rem)] mobile:mx-[-1rem]`}
          >
            Estimated Sound Power Data
          </div>
          <EstimatedSoundPowerDataTable estimatedSoundData={estimatedSoundData} />
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
            <OutdoorSpaceContent
              barrierInfoTableData={barrierInfoTableData}
              setBarrierInfoTableData={setBarrierInfoTableData}
              t={t}
            />
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
