"use client";

import ContainerBox from "@/app/[lang]/components/containerBox/containerBox";
import ContainerBoxTitle from "@/app/[lang]/components/containerBoxTitle/containerBoxTitle";
import ContainerBoxRow from "@/app/[lang]/components/containerBoxRow/containerBoxRow";
import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import CCalendar from "@/app/[lang]/components/_atoms/cCalendar";
import IC_ROUND_PLUS from "@/app/assets/icons/ic_round_plus.svg";
import Image from "next/image";
import ProductInformationTable from "@/app/[lang]/components/table/productInformationTable";
import {
  barrierInfoTableDummyData,
  estimatedSoundDummyData,
  fieldTypeSelectBoxData,
  productInformationTableDummyData,
  soundPowerLevelDummyData,
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
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useTranslation } from "@/app/i18n/client";
import LoadingPage from "@/app/[lang]/components/loadingSkeleton/loadingPage";
import { ProductItem } from "@/@types/components";
import { cloneObject } from "@/app/utils/utils";
import CCustomInput from "@/app/[lang]/components/_atoms/cCustomInput";
import Noisetools from "@/app/[lang]/components/noisetools/noisetools";
import { ProjectInfoContext } from "@/app/context/projectInfoContext";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Input() {
  const searchParams = useSearchParams();
  const param = useParams<{ lang: string }>();
  const { t } = useTranslation(param.lang);
  const editUnit = new EditUnit();
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
  const MIN_ROWS = 1;
  const [isLoading, setIsLoading] = useState(false);
  const [isManual, setIsManual] = useState(false);
  const [barrierChecked, setBarrierChecked] = useState(false);
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
  const [estimatedSoundData, setEstimatedSoundData] = useState(estimatedSoundDummyData);
  const [totalCapacityTableData, setTotalCapacityTableData] = useState(totalCapacityTableDummyData);
  const [barrierInfoTableData, setBarrierInfoTableData] = useState(barrierInfoTableDummyData);
  const [unitData, setUnitData] = useState<any>(null);
  const [productTypeData, setProductTypeData] = useState([]);
  const [functionNoiseData, setFunctionNoiseData] = useState<any>([]);
  const [stepData, setStepData] = useState([]);
  const [totalRatedData, setTotalRatedData] = useState(0);
  const [totalSimulatedData, setTotalSimulatedData] = useState(0);
  const [barrierSelected, setBarrierSelected] = useState<{ title: string; value: string }>({
    title: "O",
    value: "0",
  });
  const [directDistance, setDirectDistance] = useState(7);
  const [roomVolume, setRoomVolume] = useState(8);
  const [barrierThickness, setBarrierThickness] = useState<{ title: string; value: string }>({
    title: "Concrete(Default) / 120mm",
    value: "120",
  });
  const { projectInfoData, setProjectInfoData } = useContext(ProjectInfoContext);

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

  const removeTableRow = useCallback(
    (rowId: number) => {
      if (productTableData.length > MIN_ROWS) {
        const updatedTableRows = productTableData.filter((row) => row.id !== rowId);

        soundPressureLevel.map((item: any) => delete item[rowId]);

        soundPowerLevel.map((item: any) => delete item[rowId]);
        delete productTypeData[rowId];
        delete functionNoiseData[rowId];
        delete stepData[rowId];

        setProductTableData(updatedTableRows);
      }
    },
    [productTableData, soundPressureLevel, soundPowerLevel]
  );

  ////////////////////// Noisetools Component Test Code From //////////////////////
  //noisetools add
  const ntRef = useRef<NoisetoolsForwardRef>(null);
  interface NoisetoolsForwardRef {
    setAllValues(
      horizontalD: number,
      sourceH: number,
      receiverH: number,
      barrierD: number,
      barrierH: number,
      barrierEn: boolean,
      leftWallEn: boolean,
      topWallEn: boolean
    ): void;
    setHorizontalDistance(dist: number): void;
    setBarrierFromSource(dist: number): void;
    setBarrierHeight(hegiht: number): void;
    setSourceHeight(hegiht: number): void;
    setReceiverHeight(hegiht: number): void;
    setBarrierEnable(dist: boolean): void;
    setUnit(unit: string): void;
  }

  const setHorizontalDistance = (horizontalDist: number) => {
    ntRef.current?.setHorizontalDistance(horizontalDist);
  };

  const setBarrierFromSource = (barrierFromSource: number) => {
    ntRef.current?.setBarrierFromSource(barrierFromSource);
  };

  const setBarrierHeight = (barrierHeight: number) => {
    ntRef.current?.setBarrierHeight(barrierHeight);
  };

  const setSourceHeight = (sourceHeight: number) => {
    ntRef.current?.setSourceHeight(sourceHeight);
  };

  const setReceiverHeight = (receiverHeight: number) => {
    ntRef.current?.setReceiverHeight(receiverHeight);
  };
  const setBarrierEnable = (barrierEnable: boolean) => {
    ntRef.current?.setBarrierEnable(barrierEnable);
  };
  const setUnit = (unit: string) => {
    ntRef.current?.setUnit(unit);
  };

  const setNTAllValues = (
    horizontalD: number,
    sourceH: number,
    receiverH: number,
    barrierD: number,
    barrierH: number,
    barrierEn: boolean,
    leftWallEn: boolean,
    topWallEn: boolean
  ) => {
    ntRef.current?.setAllValues(
      horizontalD,
      sourceH,
      receiverH,
      barrierD,
      barrierH,
      barrierEn,
      leftWallEn,
      topWallEn
    );
  };

  const [outdoorUnit, setOutdoorUnit] = useState<number>(4);
  const [receiver, setReceiver] = useState<number>(2);
  const [horizontal, setHorizontal] = useState<number>(20);
  const [odus, setOdus] = useState<number>(10);
  const [barrierH, setBarrierH] = useState<number>(5);
  const [leftWall, setLeftWall] = useState(0);
  const [topWall, setTopWall] = useState(0);
  const [backgroundNoise, setBackgroundNoise] = useState(30);

  const notifyNtFactorChanged = (factorType: string, value1: number, value2?: number) => {
    switch (factorType) {
      case "SOURCE":
        setOutdoorUnit(Number(Number(value1 - 1).toFixed(1)));
        break;
      case "RECEIVER":
        setReceiver(value1);
        break;
      case "BARRIER1":
        setBarrierH(value1);
        setOdus(value2!);
        break;
      case "LEFT_WALL":
        setLeftWall(value1);
        break;
      case "TOP_WALL":
        setTopWall(value1);
        break;
      case "HORIZONTAL_DISTANCE":
        setHorizontal(value1);
        break;
    }
    // console.log(
    //   `factorType: ${factorType} value1:${value1} ${
    //     value2 !== undefined ? "value2: " + value2.toString() : ""
    //   }`
    // );
  };

  const [isBackData, setIsBackData] = useState(false);
  useEffect(() => {
    setSoundPowerLevel(projectInfoData.soundPowerLevel);
  }, [isBackData]);

  useEffect(() => {
    setUnit(unitData?.length);
  }, [unitData]);

  useEffect(() => {
    const lats_unit = editUnit.getUnitSetting();
    setUnitData(lats_unit[lats_unit.unitClss]);
    localStorage.removeItem("simulate");
    localStorage.removeItem("simulate2");

    //뒤로가기 시 이전 data 세팅
    const isBack = localStorage.getItem("isBack");
    if (isBack) {
      setIsBackData(true);
      setProjectName(projectInfoData?.projectName);
      setProductTableData(
        projectInfoData?.productTable
          ? projectInfoData?.productTable
          : productInformationTableDummyData
      );
      const productType = projectInfoData?.productTable
        ? projectInfoData.productTable.map((k: any) => k.productType)
        : [];
      productType.unshift("");
      setProductTypeData(productType);
      setFunctionNoiseData(projectInfoData.functionNoise ? projectInfoData.functionNoise : []);
      setStepData(projectInfoData?.step ? projectInfoData.step : []);
      setSelectFieldType(
        projectInfoData?.selectFieldType
          ? projectInfoData.selectFieldType
          : {
              title: "Outdoor Space",
              value: "1",
            }
      );
      setSoundPowerLevel(projectInfoData.soundPowerLevel);
      //Outdoor Space
      if (projectInfoData?.selectFieldType?.value == "1") {
        setBarrierSelected(projectInfoData?.inputData?.barrierSelected);
        setHorizontal(projectInfoData?.inputData?.horizontal);
        setOutdoorUnit(projectInfoData?.inputData?.outdoorUnit);
        setReceiver(projectInfoData?.inputData?.receiver);
        setBarrierThickness(projectInfoData?.inputData?.barrierThickness);
        setBackgroundNoise(projectInfoData?.inputData?.backgroundNoise);
        setLeftWall(projectInfoData?.inputData?.leftWall);
        setTopWall(projectInfoData?.inputData?.topWall);
        //noisetool
        setHorizontalDistance(projectInfoData?.inputData?.horizontal);
        setBarrierEnable(projectInfoData?.inputData?.barrierSelected?.value == "0" ? true : false);
        setBarrierChecked(projectInfoData?.inputData?.barrierChecked);
        //Barrier in the path == O 일 때
        if (projectInfoData?.inputData?.barrierSelected?.value == "0") {
          setOdus(projectInfoData?.inputData?.odus);
          setBarrierH(projectInfoData?.inputData?.barrierH);
          setBarrierInfoTableData(projectInfoData?.inputData?.barrierInfoTableData);
          //noisetool
          setBarrierFromSource(projectInfoData?.inputData?.odus);
          setBarrierHeight(projectInfoData?.inputData?.barrierH);
        }

        setNTAllValues(
          projectInfoData?.inputData?.horizontal,
          projectInfoData?.inputData?.outdoorUnit + 1,
          projectInfoData?.inputData?.receiver,
          projectInfoData?.inputData?.odus,
          projectInfoData?.inputData?.barrierH,
          projectInfoData?.inputData?.barrierSelected?.value == "0" ? true : false,
          projectInfoData?.inputData?.leftWall == 1 ? true : false,
          projectInfoData?.inputData?.topWall == 1 ? true : false
        );
      } else {
        setDirectDistance(
          projectInfoData?.inputData?.directDistance
            ? projectInfoData?.inputData?.directDistance
            : 10
        );
        setRoomVolume(
          projectInfoData?.inputData?.roomVolume ? projectInfoData?.inputData?.roomVolume : 5
        );
      }
    } else {
      const copyProduct = cloneObject(productTableData);
      copyProduct[0].productType = "";
      copyProduct[0].modelName = "";
      copyProduct[0].function = "";
      copyProduct[0].step = "";
      copyProduct[0].capacity = "%";
      setProductTableData(copyProduct);
    }

    const time = setTimeout(() => {
      localStorage.removeItem("isBack");
      setIsBackData(false);
    }, 1000);
    return () => {
      clearTimeout(time);
    };
  }, []);

  //Context Data 세팅
  useEffect(() => {
    const isBack = localStorage.getItem("isBack");
    const systemObject = cloneObject(projectInfoData);

    const inpuOutdoorObj = {
      outdoorUnit,
      receiver,
      horizontal,
      backgroundNoise,
      leftWall,
      topWall,
      barrierInfoTableData,
      barrierSelected,
      odus,
      barrierChecked,
      barrierH,
      barrierThickness,
    };
    const inputEnclosedObj = {
      directDistance,
      roomVolume,
    };

    systemObject.projectName = projectName;
    systemObject.productTable = productTableData;
    systemObject.inputData = selectFieldType.value == "1" ? inpuOutdoorObj : inputEnclosedObj;
    systemObject.selectFieldType = selectFieldType;

    if (!isBack) setProjectInfoData(systemObject);
  }, [
    projectName,
    outdoorUnit,
    receiver,
    horizontal,
    backgroundNoise,
    leftWall,
    topWall,
    barrierInfoTableData,
    barrierSelected,
    odus,
    barrierChecked,
    barrierH,
    barrierThickness,
    directDistance,
    roomVolume,
    productTableData,
    selectFieldType,
  ]);
  //Manual 수기 입력 데이터 유지
  useEffect(() => {
    const isBack = localStorage.getItem("isBack");
    if (!isBack) projectInfoData.soundPowerLevel = soundPowerLevel;
  }, [soundPowerLevel]);

  //Total Capacity Data & Sound Spec Data
  useEffect(() => {
    const hasManual = productTableData.some((data: any) => data.productType === "Manual");
    if (hasManual) {
      setIsManual(true);
    } else {
      setIsManual(false);
    }

    const copySoundPressure = cloneObject(soundPressureLevel);
    const copySoundPower = cloneObject(soundPowerLevel);

    let totalRated: number = 0;
    let totalSimulated: number = 0;

    const fetchData = async () => {
      await Promise.all(
        productTableData.map(async (data: any) => {
          if (data.productType === "Manual" && copySoundPower[0][data.id] == null) {
            copySoundPower[0][data.id] = "";
            copySoundPower[1][data.id] = "";
            copySoundPower[2][data.id] = "";
            copySoundPower[3][data.id] = "";
            copySoundPower[4][data.id] = "";
            copySoundPower[5][data.id] = "";
            copySoundPower[6][data.id] = "";
            copySoundPower[7][data.id] = "";
            copySoundPower[8][data.id] = "";
            copySoundPower[9][data.id] = "Manual";
          } else if (data.productType !== "" && data.productType !== "Manual") {
            //수기 입력 데이터 생성
            const res = await fetch(`${basePath}/api/common-select-modelspec`, {
              method: "post",
              body: JSON.stringify(data),
            });
            const result = await res.json();
            result.data.map((item: any) => {
              data.capacity = item.capacity + "%";
              if (item.dataType === "SPL") {
                copySoundPressure[0][item.id] = Math.max(
                  10 * Math.log10(10 ** (Number(item.noise63hz) / 10) * Number(data.qty)),
                  0
                );
                copySoundPressure[1][item.id] = Math.max(
                  10 * Math.log10(10 ** (Number(item.noise125hz) / 10) * Number(data.qty)),
                  0
                );
                copySoundPressure[2][item.id] = Math.max(
                  10 * Math.log10(10 ** (Number(item.noise250hz) / 10) * Number(data.qty)),
                  0
                );
                copySoundPressure[3][item.id] = Math.max(
                  10 * Math.log10(10 ** (Number(item.noise500hz) / 10) * Number(data.qty)),
                  0
                );
                copySoundPressure[4][item.id] = Math.max(
                  10 * Math.log10(10 ** (Number(item.noise1khz) / 10) * Number(data.qty)),
                  0
                );
                copySoundPressure[5][item.id] = Math.max(
                  10 * Math.log10(10 ** (Number(item.noise2khz) / 10) * Number(data.qty)),
                  0
                );
                copySoundPressure[6][item.id] = Math.max(
                  10 * Math.log10(10 ** (Number(item.noise4khz) / 10) * Number(data.qty)),
                  0
                );
                copySoundPressure[7][item.id] = Math.max(
                  10 * Math.log10(10 ** (Number(item.noise8khz) / 10) * Number(data.qty)),
                  0
                );
                copySoundPressure[8][item.id] = Math.max(
                  10 * Math.log10(10 ** (Number(item.overall) / 10) * Number(data.qty)),
                  0
                );
              } else {
                copySoundPower[0][item.id] = Math.max(
                  10 * Math.log10(10 ** (Number(item.noise63hz) / 10) * Number(data.qty)),
                  0
                );
                copySoundPower[1][item.id] = Math.max(
                  10 * Math.log10(10 ** (Number(item.noise125hz) / 10) * Number(data.qty)),
                  0
                );
                copySoundPower[2][item.id] = Math.max(
                  10 * Math.log10(10 ** (Number(item.noise250hz) / 10) * Number(data.qty)),
                  0
                );
                copySoundPower[3][item.id] = Math.max(
                  10 * Math.log10(10 ** (Number(item.noise500hz) / 10) * Number(data.qty)),
                  0
                );
                copySoundPower[4][item.id] = Math.max(
                  10 * Math.log10(10 ** (Number(item.noise1khz) / 10) * Number(data.qty)),
                  0
                );
                copySoundPower[5][item.id] = Math.max(
                  10 * Math.log10(10 ** (Number(item.noise2khz) / 10) * Number(data.qty)),
                  0
                );
                copySoundPower[6][item.id] = Math.max(
                  10 * Math.log10(10 ** (Number(item.noise4khz) / 10) * Number(data.qty)),
                  0
                );
                copySoundPower[7][item.id] = Math.max(
                  10 * Math.log10(10 ** (Number(item.noise8khz) / 10) * Number(data.qty)),
                  0
                );
                copySoundPower[8][item.id] = Math.max(
                  10 * Math.log10(10 ** (Number(item.overall) / 10) * Number(data.qty)),
                  0
                );
              }
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
            totalRated += coolData * Number(data.qty);
            totalSimulated += coolData * 0.001 * capacity * Number(data.qty);
          }
          setSoundPressureLevel(copySoundPressure);
          setSoundPowerLevel(copySoundPower);
        })
      );
      setTotalRatedData(totalRated);
      setTotalSimulatedData(totalSimulated);
    };
    fetchData();
  }, [productTableData, productTypeData]);
  //Total Capacity
  useEffect(() => {
    const copyTotal = cloneObject(totalCapacityTableData);

    copyTotal[0].first = Number(totalRatedData * 0.001).toFixed(1) + "kW";
    copyTotal[1].first = Number(totalSimulatedData * 0.01).toFixed(1) + "kW";
    copyTotal[1].second =
      totalSimulatedData == 0
        ? "0%"
        : Number(((totalSimulatedData * 0.01) / (totalRatedData * 0.001)) * 100).toFixed(0) + "%";
    setTotalCapacityTableData(copyTotal);
  }, [totalRatedData, totalSimulatedData]);

  //SPL to PWL Processing => Total Summation Result (Estimated Sound Power Data)
  useEffect(() => {
    const copyEstimated = cloneObject(estimatedSoundData);

    const distance_attenuation = 11.0; //거리감쇠
    let process: number = 0;
    let adjustment: number = 0;
    productTableData
      .filter(
        (arr, index, callback) =>
          index ===
          callback.findIndex((loc) => {
            return loc.productType === arr.productType && loc.productType != "Manual";
          })
      )
      .map((item) => {
        if (item.productType == "AWHP" || item.productType == "ISC") {
          adjustment += Number(item.qty) * 0;
          process += Number(item.qty);
        } else if (item.productType == "Multi V i") {
          adjustment += Number(item.qty) * 3.7;
          process += Number(item.qty);
        } else if (item.productType == "Multi V 5") {
          adjustment += Number(item.qty) * 2.5;
          process += Number(item.qty);
        } else if (item.productType == "Multi V S") {
          adjustment += Number(item.qty) * 8.4;
          process += Number(item.qty);
        } else if (item.productType == "SCAC") {
          adjustment += Number(item.qty) * 4.2;
          process += Number(item.qty);
        } else if (item.productType == "Multi") {
          adjustment += Number(item.qty) * 2.1;
          process += Number(item.qty);
        } else if (item.productType == "RAC") {
          adjustment += Number(item.qty) * 2;
          process += Number(item.qty);
        }
      });
    const adjustmentData = adjustment / process; //제품특성별 측정환경 보정
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
    soundPressureLevel.slice(0, 8).forEach((data: any, i: number) => {
      let newItem: any = {};

      Object.values(data).map((item: any, index: number) => {
        if (index < Object.keys(data).length - 1) {
          newItem[Object.keys(data)[index]] = Number(item + distance_attenuation + correction[i]);
        }
      });
      soundSpecData.push(newItem);
    });

    soundPowerLevel.slice(0, 8).forEach((data: any, i: number) => {
      const newSoundPowerLevel = Object.keys(soundPowerLevel[0])
        .filter((key) => key != "dataType")
        .reduce((newObj: any, key: string) => {
          newObj[key] = data[key];
          return newObj;
        }, {});
      soundSpecData[i] = { ...soundSpecData[i], ...newSoundPowerLevel };
    });
    const columnSum: any[] = [];
    let num = 0;
    soundSpecData.forEach((data: any) => {
      Object.entries(data).forEach((key: any) => {
        if (columnSum[num] === undefined) {
          columnSum[num] = Number(key[1]);
        } else {
          columnSum[num] = Number(
            10 * Math.log10(10 ** Number(columnSum[num] / 10) + 10 ** Number(key[1] / 10))
          );
        }
      });
      num++;
    });
    if (columnSum.length == 0 || Number.isNaN(columnSum[0]))
      copyEstimated.map((item: any) => (item.content2 = 0));
    else columnSum.map((item, index) => (copyEstimated[index].content2 = Number(Number(item))));

    setEstimatedSoundData(copyEstimated);
  }, [soundPressureLevel, soundPowerLevel, totalCapacityTableData]);

  useEffect(() => {
    localStorage.setItem("fieldType", JSON.stringify(selectFieldType));
  }, [selectFieldType]);

  /**
   * Noise 계산 로직 실행 후 결과창 이동
   * @param formData
   */
  async function actionSimulate(formData: FormData) {
    if (!validateFormData(formRef, productTableData, t)) return;
    setIsLoading(true);
    const wallCount = 1 + leftWall + topWall;
    const unitData = editUnit.getUnitSetting();
    const result = await noiseSimulator(
      formData,
      estimatedSoundData,
      productTableData,
      barrierInfoTableData,
      unitData,
      wallCount
    );
    const soundData = {
      soundPressureLevel,
      soundPowerLevel,
      estimatedSoundData,
      totalCapacityTableData,
    };
    result.projectInfoData = projectInfoData;
    result.soundData = soundData;
    localStorage.setItem("simulate", JSON.stringify(result));
    result.data.unshift(null);
    localStorage.setItem("simulate2", JSON.stringify(result.data));
    setIsLoading(false);
    router.push("/container/result");
  }

  const memoProductInformationTable = useMemo(() => {
    return (
      <ProductInformationTable
        data={productTableData}
        setData={setProductTableData}
        removeTableRow={removeTableRow}
        t={t}
        productTypeData={productTypeData}
        setProductTypeData={setProductTypeData}
        functionNoiseData={functionNoiseData}
        setFunctionNoiseData={setFunctionNoiseData}
        stepData={stepData}
        setStepData={setStepData}
        soundPressureLevel={soundPressureLevel}
        soundPowerLevel={soundPowerLevel}
        projectInfoData={projectInfoData}
      />
    );
  }, [
    productTableData,
    productTypeData,
    functionNoiseData,
    stepData,
    soundPowerLevel,
    soundPressureLevel,
    totalCapacityTableData,
  ]);

  return (
    <form ref={formRef} action={actionSimulate} className={"w-full h-full"}>
      {isLoading && <LoadingPage />}
      <div className={"flex flex-col gap-[2.5rem] mb-[2.5rem]"}>
        <ContainerBox>
          <ContainerBoxTitle title={t("NOISE_0039")} />
          {/* 반응형 */}
          <div
            className={`font-LGSMHATB text-gray_700 mb-5 mt-10 text-left leading-[1.115rem]
                mobile:mt-[1.25rem] mobile:mb-[1.875rem]`}
          >
            {t("NOISE_0063")}
          </div>
          {/* 반응형 */}
          <ContainerBoxRow
            justifyContent={"between"}
            classList={"mb-10 mobile:flex-col mobile:gap-[0.625rem] mobile:mb-[1.875rem]"}
          >
            {/* 반응형 */}
            <div className={"flex items-center w-[32.5rem] justify-between mobile:w-full"}>
              <div className={"font-LGSMHATSB text-[0.875rem] text-gray_400"}>
                {t("project_name")}
              </div>
              <CCustomInput
                name={`projectName`}
                type={"text"}
                placeholder={t("project_name")}
                value={projectName}
                classList={"w-[18.438rem] mobile:w-[12.5rem]"}
                onChange={(changeValue: string) => {
                  setProjectName(changeValue);
                }}
                validMessage={{ message: t("NOISE_0006"), format: [t("project_name")] }}
                required
              />
            </div>
            {/* 반응형 */}
            <div className={"flex items-center w-[32.5rem] justify-between mobile:w-full"}>
              <div className={"font-LGSMHATSB text-[0.875rem] text-gray_400"}>
                {t("NOISE_0064")}
              </div>
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
              {t("NOISE_0040")}
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
                {t("NOISE_0065")}
              </span>
            </button>
          </ContainerBoxRow>
          {memoProductInformationTable}
          {/* <ProductInformationTable
            data={productTableData}
            setData={setProductTableData}
            removeTableRow={removeTableRow}
            t={t}
            productTypeData={productTypeData}
            setProductTypeData={setProductTypeData}
            functionNoiseData={functionNoiseData}
            setFunctionNoiseData={setFunctionNoiseData}
            stepData={stepData}
            setStepData={setStepData}
            soundPressureLevel={soundPressureLevel}
            soundPowerLevel={soundPowerLevel}
            projectInfoData={projectInfoData}
          /> */}
          {/* 반응형 */}
          <ContainerBoxRow
            justifyContent={"end"}
            alignItems={"center"}
            classList={"mt-5 w-full justify-end mobile:mt-[2.5rem]"}
          >
            <TotalCapacityTable
              totalCapacityTableData={totalCapacityTableData}
              isManual={isManual}
              t={t}
            />
          </ContainerBoxRow>
          {/* 반응형 */}
          <div
            className={`font-LGSMHATB text-gray_700 mb-5 mt-10 text-left leading-[1.115rem]
                mobile:mt-[2.5rem] mobile:mb-[0.688rem]`}
          >
            {t("NOISE_0067")}
          </div>
          {/* 반응형 */}
          <div
            className={`w-full bg-[#666768] h-[2.25rem] text-white font-LGSMHATSB mb-2.5 text-[0.875rem] flex items-center justify-center
                    mobile:h-[2.5rem] mobile:mb-[1.25rem] mobile:w-[calc(100%+2rem)] mobile:mx-[-1rem]`}
          >
            {t("NOISE_0044")}
          </div>
          <div
            className={"!text-right !mb-2 !font-LGSMHATR !text-[0.625rem] !leading-3 mobile:hidden"}
          >
            Unit : dB
          </div>
          <SoundSpecDataTable
            soundPressureLevel={soundPressureLevel}
            soundPowerLevel={soundPowerLevel}
            setSoundPowerLevel={setSoundPowerLevel}
            projectInfoData={projectInfoData}
            isBackData={isBackData}
            t={t}
          />
          {/* 반응형 */}
          <div
            className={`w-full bg-[#666768] h-[2.25rem] text-white font-LGSMHATSB mb-2.5 text-[0.875rem] flex items-center justify-center mt-10
                          mobile:h-[2.5rem] mobile:mt-[1.875rem] mobile:mb-[1.25rem] mobile:w-[calc(100%+2rem)] mobile:mx-[-1rem]`}
          >
            {t("NOISE_0048")}
          </div>
          <EstimatedSoundPowerDataTable estimatedSoundData={estimatedSoundData} t={t} />
          {/* 반응형 */}
          <div className={"font-LGSMHATB text-gray_700 mb-5 mt-10 text-left leading-[1.115rem]"}>
            {t("NOISE_0049")}
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
              {t("NOISE_0050")}
            </div>
            <CSelect
              name={"field_type"}
              title={"Outdoor Space"}
              value={
                selectFieldType.value == "1" ? "Outdoor Space" : "Enclosed Space (Machine Room)"
              }
              selected
              className={"w-[18.438rem] mobile:w-[12.5rem]"}
              selectList={fieldTypeSelectBoxData}
              select={selectFieldType}
              setSelect={setSelectFieldType}
              onChange={(changeValue: { title: string; value: string }) => {
                setSelectFieldType(changeValue);
              }}
            />
            {selectFieldType.value === "2" && (
              <p className="mobile:hidden ml-3 pt-1 text-[0.875rem] text-[#ff0000]">
                {t("NOISE_0001")}
              </p>
            )}
          </ContainerBoxRow>
          {selectFieldType.value === "2" && (
            <ContainerBoxRow
              justifyContent={"start"}
              alignItems={"center"}
              classList={"mobile:justify-between"}
            >
              <p className="pc:hidden pt-1 text-[0.875rem] text-[#ff0000]">{t("NOISE_0001")}</p>
            </ContainerBoxRow>
          )}
          {/* 반응형 */}
          <div className={"mt-5 mb-10 mobile:my-[1.5rem]"}>
            {/* <Image src={IG_OUTDOOR_SPACE} alt={"outdoor space"} className={"mx-auto"} /> */}
            {selectFieldType.value === "1" && (
              <Noisetools
                ref={ntRef}
                factorChangedCallback={notifyNtFactorChanged}
                horizontalDistance={horizontal}
                sourceHeight={outdoorUnit + 1}
                receiverHeight={receiver}
                barrierFromSource={odus}
                barrierHeight={barrierH}
                distanceUnit={unitData?.length}
                leftWall={leftWall}
                topWall={topWall}
              />
            )}
          </div>
          {selectFieldType?.value === "1" ? (
            <OutdoorSpaceContent
              barrierInfoTableData={barrierInfoTableData}
              setBarrierInfoTableData={setBarrierInfoTableData}
              t={t}
              unitData={unitData}
              outdoorUnit={outdoorUnit}
              setOutdoorUnit={setOutdoorUnit}
              setSourceHeight={setSourceHeight}
              receiver={receiver}
              setReceiver={setReceiver}
              setReceiverHeight={setReceiverHeight}
              odus={odus}
              setOdus={setOdus}
              barrierHeight={barrierH}
              setBarrierH={setBarrierH}
              setBarrierHeight={setBarrierHeight}
              setBarrierFromSource={setBarrierFromSource}
              horizontal={horizontal}
              setHorizontalDistance={setHorizontalDistance}
              setHorizontal={setHorizontal}
              selected={barrierSelected}
              setSelected={setBarrierSelected}
              setBarrierEnable={setBarrierEnable}
              barrierThickness={barrierThickness}
              setBarrierThickness={setBarrierThickness}
              backgroundNoise={backgroundNoise}
              setBackgroundNoise={setBackgroundNoise}
              barrierChecked={barrierChecked}
              setBarrierChecked={setBarrierChecked}
            />
          ) : (
            <EnclosedSpaceContent
              t={t}
              unitData={unitData}
              directDistance={directDistance}
              setDirectDistance={setDirectDistance}
              roomVolume={roomVolume}
              setRoomVolume={setRoomVolume}
            />
          )}
          {/* 반응형 */}
          <ContainerBoxRow
            justifyContent={"end"}
            alignItems={"center"}
            classList={"mt-[2.5rem] mobile:mt-[1.875rem]"}
          >
            {/* <Link href={"/container/result"} className={"mobile:w-full"}> */}
            <button type={"submit"} className={"primaryButton w-[8.75rem] mobile:w-full"}>
              {t("NOISE_0071")}
            </button>
            {/* </Link> */}
          </ContainerBoxRow>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            transition={Bounce}
            theme="light"
          />
        </ContainerBox>
      </div>
    </form>
  );
}
