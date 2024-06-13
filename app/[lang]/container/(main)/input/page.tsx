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
  barrierInfoTableDummyData,
  estimatedSoundDummyData,
  fieldTypeSelectBoxData,
  productInformationTableDummyData,
  soundPowerLevelDummy,
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
import EditUnit from "@/lib/editUnit";
import { noiseSimulator } from "@/lib/noiseSimulator";
import { validateFormData } from "@/lib/validation";
import { useParams, useRouter } from "next/navigation";
import { useTranslation } from "@/app/i18n/client";
import LoadingPage from "@/app/[lang]/components/loadingSkeleton/loadingPage";
import { ProductItem } from "@/@types/components";
import { cloneObject } from "@/app/utils/utils";
import CCustomInput from "@/app/[lang]/components/_atoms/cCustomInput";
import Noisetools from "@/app/[lang]/components/noisetools/noisetools";

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
  const [soundPressureLevelData, setSoundPressureLevelData] =
    useState<any>(soundPressureLevelDummy);
  const [soundPowerLevelData, setSoundPowerLevelData] = useState<any>(soundPowerLevelDummy);
  const [unitData, setUnitData] = useState<any>(null);
  const [productTypeData, setProductTypeData] = useState([]);
  const [functionNoiseData, setFunctionNoiseData] = useState<any>([]);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
  const [totalData, setTotalData] = useState(0);

  const addTableRow = () => {
    const existingIds = productTableData.map((row) => row.id);
    let newId = 1;
    while (existingIds.includes(newId)) {
      newId++;
    }
    const newRow: ProductItem = {
      id: newId,
      productType: "",
      modelName: "",
      qty: "1",
      function: "",
      step: "",
      capacity: "%",
      del: "",
    };
    setProductTableData([...productTableData, newRow]);
  };

  const removeTableRow = (rowId: number) => {
    if (productTableData.length > MIN_ROWS) {
      const updatedTableRows = productTableData.filter((row) => row.id !== rowId);

      const deleteSoundPressure = cloneObject(soundPressureLevelData);
      deleteSoundPressure.map((item: any) => delete item[rowId]);

      const deleteSoundPower = cloneObject(soundPowerLevelData);
      deleteSoundPower.map((item: any) => delete item[rowId]);

      setProductTableData(updatedTableRows);
      setSoundPressureLevelData(deleteSoundPressure);
      setSoundPowerLevelData(deleteSoundPower);
    }
  };

  ////////////////////// Noisetools Component Test Code From //////////////////////
  //noisetools add
  const ntRef = useRef<NoisetoolsForwardRef>(null);

  let horizontalDist = 15;
  let barrierFromSource = 10;
  let barrierHeight = 5;
  let sourceHeight = 5;
  let receiverHeight = 3;

  interface NoisetoolsForwardRef {
    setHorizontalDistance(dist: number): void;
    setBarrierFromSource(dist: number): void;
    setBarrierHeight(hegiht: number): void;
    setSourceHeight(hegiht: number): void;
    setReceiverHeight(hegiht: number): void;
  }

  const setHorizontalDistance = (dist: number) => {
    if (horizontalDist > 30) horizontalDist = 20;
    else horizontalDist += 5;
    ntRef.current?.setHorizontalDistance(horizontalDist);
  };

  const setBarrierFromSource = () => {
    if (barrierFromSource > horizontalDist) barrierFromSource = 3;
    else barrierFromSource += 2;
    ntRef.current?.setBarrierFromSource(barrierFromSource);
  };

  const setBarrierHeight = () => {
    if (barrierHeight > 10) barrierHeight = 2;
    else barrierHeight += 1;
    ntRef.current?.setBarrierHeight(barrierHeight);
  };

  const setSourceHeight = () => {
    if (sourceHeight > 10) sourceHeight = 2;
    else sourceHeight += 1;
    ntRef.current?.setSourceHeight(sourceHeight);
  };

  const setReceiverHeight = () => {
    if (receiverHeight > 10) receiverHeight = 2;
    else receiverHeight += 1;
    ntRef.current?.setReceiverHeight(receiverHeight);
  };

  const notifyNtFactorChanged = (factorType: string, value1: number, value2?: number) => {
    console.log(
      `factorType: ${factorType} value1:${value1} ${
        value2 !== undefined ? "value2: " + value2.toString() : ""
      }`
    );
  };

  useEffect(() => {
    const lats_unit = editUnit.getUnitSetting();
    setUnitData(lats_unit[lats_unit.unitClss]);
    const copyProduct = cloneObject(productTableData);
    copyProduct[0].productType = "";
    copyProduct[0].modelName = "";
    copyProduct[0].function = "";
    copyProduct[0].step = "";
    copyProduct[0].capacity = "%";
    setProductTableData(copyProduct);
  }, []);

  //Total Capacity Data & Sound Spec Data
  useEffect(() => {
    const copySoundPressure = cloneObject(soundPressureLevelData);
    const copySoundPower = cloneObject(soundPowerLevelData);
    const copyTotal = cloneObject(totalCapacityTableData);

    let totalCool: number = 0;
    let totalCapacity: number = 0;

    productTableData.map(async (data) => {
      if (data.productType !== "") {
        const res = await fetch(`${basePath}/api/common-select-modelspec`, {
          method: "post",
          body: JSON.stringify(data),
        });
        const result = await res.json();
        result.data.map((item: any) => {
          data.capacity = item.capacity + "%";
          if (item.dataType === "SPL") {
            copySoundPressure[0][item.id] =
              10 * Math.log10(10 ** (Number(item.noise63hz) / 10) * Number(data.qty));
            copySoundPressure[1][item.id] =
              10 * Math.log10(10 ** (Number(item.noise125hz) / 10) * Number(data.qty));
            copySoundPressure[2][item.id] =
              10 * Math.log10(10 ** (Number(item.noise250hz) / 10) * Number(data.qty));
            copySoundPressure[3][item.id] =
              10 * Math.log10(10 ** (Number(item.noise500hz) / 10) * Number(data.qty));
            copySoundPressure[4][item.id] =
              10 * Math.log10(10 ** (Number(item.noise1khz) / 10) * Number(data.qty));
            copySoundPressure[5][item.id] =
              10 * Math.log10(10 ** (Number(item.noise2khz) / 10) * Number(data.qty));
            copySoundPressure[6][item.id] =
              10 * Math.log10(10 ** (Number(item.noise4khz) / 10) * Number(data.qty));
            copySoundPressure[7][item.id] =
              10 * Math.log10(10 ** (Number(item.noise8khz) / 10) * Number(data.qty));
            copySoundPressure[8][item.id] =
              10 * Math.log10(10 ** (Number(item.overall) / 10) * Number(data.qty));
          } else {
            copySoundPower[0][item.id] =
              10 * Math.log10(10 ** (Number(item.noise63hz) / 10) * Number(data.qty));
            copySoundPower[1][item.id] =
              10 * Math.log10(10 ** (Number(item.noise125hz) / 10) * Number(data.qty));
            copySoundPower[2][item.id] =
              10 * Math.log10(10 ** (Number(item.noise250hz) / 10) * Number(data.qty));
            copySoundPower[3][item.id] =
              10 * Math.log10(10 ** (Number(item.noise500hz) / 10) * Number(data.qty));
            copySoundPower[4][item.id] =
              10 * Math.log10(10 ** (Number(item.noise1khz) / 10) * Number(data.qty));
            copySoundPower[5][item.id] =
              10 * Math.log10(10 ** (Number(item.noise2khz) / 10) * Number(data.qty));
            copySoundPower[6][item.id] =
              10 * Math.log10(10 ** (Number(item.noise4khz) / 10) * Number(data.qty));
            copySoundPower[7][item.id] =
              10 * Math.log10(10 ** (Number(item.noise8khz) / 10) * Number(data.qty));
            copySoundPower[8][item.id] =
              10 * Math.log10(10 ** (Number(item.overall) / 10) * Number(data.qty));
          }
          setSoundPressureLevelData(copySoundPressure);
          setSoundPowerLevelData(copySoundPower);
        });
        const capacity = Number(data.capacity.replace("%", ""));
        const response = await fetch(`${basePath}/api/common-select-modeltotal`, {
          method: "post",
          body: JSON.stringify(data),
        });
        const resultData = await response.json();
        const coolData = resultData.data.map((item: any) =>
          item.t_cool_w == null ? 0 : item.t_cool_w
        );
        setTotalData(coolData);
        totalCool += coolData * Number(data.qty);
        totalCapacity += coolData * 0.001 * capacity * Number(data.qty);
        copyTotal[0].first = Number(totalCool * 0.001).toFixed(1) + "kW";
        copyTotal[1].first = Number(totalCapacity * 0.01).toFixed(1) + "kW";
        copyTotal[1].second =
          totalCapacity == 0
            ? "0%"
            : Number(((totalCapacity * 0.01) / (totalCool * 0.001)) * 100).toFixed(0) + "%";
        setTotalCapacityTableData(copyTotal);
      }
    });
  }, [productTableData, productTypeData]);

  //SPL to PWL Processing => Total Summation Result (Estimated Sound Power Data)
  useEffect(() => {
    const copyEstimated = cloneObject(estimatedSoundData);

    const distance_attenuation = 11.0; //거리감쇠
    let totalQty: number = 0;
    let adjustment: number = 0;
    productTableData
      .filter(
        (arr, index, callback) =>
          index ===
          callback.findIndex((loc) => {
            return loc.productType === arr.productType;
          })
      )
      .map((item) => {
        if (item.productType == "AWHP") {
          adjustment += Number(item.qty) * 0;
          totalQty += Number(item.qty);
        } else {
          adjustment += Number(item.qty) * 2.5;
          totalQty += Number(item.qty);
        }
      });
    const adjustmentData = adjustment / totalQty; //제품특성별 측정환경 보정

    const correction = [
      adjustmentData - 0.5,
      adjustmentData - 0.5,
      adjustmentData - 0.5,
      adjustmentData - 0.5,
      adjustmentData - 0.5,
      adjustmentData + 0.5,
      adjustmentData + 0.5,
      adjustmentData + 0.5,
    ]; // 제품특성별 측정환경

    const soundSpecData: any[] = [];
    let number = 0;
    soundPressureLevelData.slice(0, 8).forEach((data: any, i: number) => {
      let newItem: any = {};

      Object.values(data).map((item: any) => {
        newItem[number] = Number(Number(item + distance_attenuation + correction[i]).toFixed(1));
        number++;
      });
      soundSpecData.push(newItem);
    });

    soundPowerLevelData.slice(0, 8).forEach((data: any, i: number) => {
      Object.values(data).map((item: any) => {
        soundSpecData[i] = { ...soundSpecData[i], item };
      });
    });

    const columnSum: any[] = [];
    let num = 0;
    soundSpecData.forEach((data: any) => {
      Object.entries(data).forEach((key: any) => {
        if (columnSum[num] === undefined) {
          columnSum[num] = Number(Number(key[1]).toFixed(1));
        } else {
          columnSum[num] = Number(
            Number(
              10 * Math.log10(10 ** Number(columnSum[num] / 10) + 10 ** Number(key[1] / 10))
            ).toFixed(1)
          );
        }
      });
      num++;
    });
    if (columnSum.length == 0) copyEstimated.map((item: any) => (item.content2 = 0));
    else columnSum.map((item, index) => (copyEstimated[index].content2 = item));

    setEstimatedSoundData(copyEstimated);
  }, [soundPressureLevelData, soundPowerLevelData]);
  /**
   * Noise 계산 로직 실행 후 결과창 이동
   * @param formData
   */
  useEffect(() => {
    localStorage.setItem("outdoor_space", JSON.stringify(selectFieldType));
  }, [selectFieldType]);
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
              <CCustomInput
                name={`Project Name`}
                type={"text"}
                placeholder={"Project Name"}
                value={projectName}
                classList={"w-[18.438rem] mobile:w-[12.5rem]"}
                onChange={(changeValue: string) => {
                  setProjectName(changeValue);
                }}
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
            productTypeData={productTypeData}
            setProductTypeData={setProductTypeData}
            functionNoiseData={functionNoiseData}
            setFunctionNoiseData={setFunctionNoiseData}
            setSoundPressureLevelData={setSoundPressureLevelData}
            setSoundPowerLevelData={setSoundPowerLevelData}
            soundPressureLevelData={soundPressureLevelData}
            soundPowerLevelData={soundPowerLevelData}
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
            soundPowerLevel={soundPowerLevel}
            soundPressureLevelData={soundPressureLevelData}
            soundPowerLevelData={soundPowerLevelData}
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
              onChange={(changeValue: { title: string; value: string }) => {
                setSelectFieldType(changeValue);
              }}
            />
          </ContainerBoxRow>
          {/* 반응형 */}
          <div className={"mt-5 mb-10 mobile:my-[1.5rem]"}>
            {/* <Image src={IG_OUTDOOR_SPACE} alt={"outdoor space"} className={"mx-auto"} /> */}
            <Noisetools ref={ntRef} factorChangedCallback={notifyNtFactorChanged} />
          </div>
          {selectFieldType?.value === "1" ? (
            <OutdoorSpaceContent
              barrierInfoTableData={barrierInfoTableData}
              setBarrierInfoTableData={setBarrierInfoTableData}
              t={t}
              unitData={unitData}
            />
          ) : (
            <EnclosedSpaceContent t={t} unitData={unitData} />
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
