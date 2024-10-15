"use client";
import ContainerBox from "@/app/[lang]/components/containerBox/containerBox";
import ContainerBoxTitle from "@/app/[lang]/components/containerBoxTitle/containerBoxTitle";
import ContainerBoxRow from "@/app/[lang]/components/containerBoxRow/containerBoxRow";
import SimulationResultTable from "@/app/[lang]/components/table/simulationResultTable";
import CAccordionBox from "@/app/[lang]/components/_atoms/cAccordionBox";
import {
  accordionDummyData,
  detailInformationDummyData,
  soundPressureReceiverDummyData,
} from "@/app/[lang]/constants/const";
import { useContext, useEffect, useRef, useState } from "react";
import IC_BUTTON_LEFT_ARROW from "@/app/assets/icons/ic_button_left_arrow.png";
import CButton from "@/app/[lang]/components/_atoms/cButton";
import CImageButton from "@/app/[lang]/components/_atoms/cImageButton";
import Link from "next/link";
import { cloneObject } from "@/app/utils/utils";
import dynamic from "next/dynamic";
import LoadingChart from "../../components/loadingSkeleton/loadingChart";
import { useTranslation } from "react-i18next";
import RenderReportPdfImage from "../../components/baseResultPage/renderReportPdf_img";
import EditUnit from "@/lib/editUnit";
import { ProjectInfoContext } from "@/app/context/projectInfoContext";
import LoadingPage from "../../components/loadingSkeleton/loadingPage";

export default function Result({ params: { lang } }: any) {
  const { t } = useTranslation(lang);
  const editUnit = new EditUnit();
  const chartDivRef = useRef<HTMLDivElement>(null);
  const [isAccordionOpen1, setIsAccordionOpen1] = useState<boolean>(true);
  const [isAccordionOpen2, setIsAccordionOpen2] = useState<boolean>(true);
  const [isActiveReportPopup, setIsActiveReportPopup] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [reportPdfOpen, setReportPdfOpen] = useState(false);
  const [emailOpen, setEmailOpen] = useState(false);
  const [simulateData, setSimulateData] = useState(soundPressureReceiverDummyData);
  const reportPopupRef = useRef<HTMLDivElement>(null);
  const [detailData, setDetailData] = useState(detailInformationDummyData);
  const [octaveBand, setOctaveBand] = useState([]);
  const ResultChart = dynamic(() => import("@/app/[lang]/components/chart/resultChart"), {
    ssr: false,
    loading: () => <LoadingChart classList={"flex items-center justify-center h-72"} />,
  });
  const { projectInfoData, setProjectInfoData } = useContext(ProjectInfoContext);
  const [resultData, setResultData] = useState();
  const handleReportPdfOpen = () => {
    setReportPdfOpen(true);
  };
  const handleReportPdfClose = () => {
    setReportPdfOpen(false);
  };
  const handleSendEmailOpen = () => {
    setEmailOpen(true);
  };
  const handleSendEmailClose = () => {
    setEmailOpen(false);
  };
  {
    /* 반응형 */
  }
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("simulate")!);
    const data2 = JSON.parse(localStorage.getItem("simulate2")!);
    setResultData(data);
    setOctaveBand(data2);
    setProjectInfoData(data.projectInfoData);
    const copySimulateData = cloneObject(simulateData);
    for (let i = 0; i < simulateData.data.length; i++) {
      copySimulateData.data[i].content = data.data[i];
    }
    setSimulateData(copySimulateData);

    const fieldType = JSON.parse(localStorage.getItem("fieldType")!);
    const copyDetailData = cloneObject(detailData);
    const detailLength = detailData.data[0]?.content.length!;
    if (fieldType.value === "2") {
      for (let i = 0; i < detailLength; i++) {
        copyDetailData.data[0].content[i].content = "-";
        copyDetailData.data[1].content[i].content = Number(data.attenuation[i]).toFixed(1);
        copyDetailData.data[2].content[i].content = "-";
      }
    } else {
      for (let i = 0; i < detailLength; i++) {
        copyDetailData.data[0].content[i].content = data.DI.toFixed(1);
        copyDetailData.data[1].content[i].content = data.distance.toFixed(1);
        copyDetailData.data[2].content[i].content = Math.max(
          Number(
            Number(
              data.estimatedSoundData[i].content2 + data.DI - data.distance - data.data[i]
            ).toFixed(1)
          ),
          0
        );
      }
    }
    setDetailData(copyDetailData);
  }, [lang]);

  return (
    <main className={"container"}>
      {isLoading && <LoadingPage />}
      {/* 반응형 */}
      <ContainerBox classList={"mt-6 mb-[3.125rem] mobile:mt-[0.625rem] mobile:mb-[2.5rem]"}>
        <ContainerBoxTitle title={t("NOISE_0010")} />
        {/* 반응형 */}
        <ContainerBoxRow
          justifyContent={"start"}
          alignItems={"start"}
          classList={`mt-10 mb-[2.5rem] gap-5
                mobile:mt-[0.688rem] mobile:flex-col mobile:gap-[2.5rem]`}
        >
          <section>
            {/* 반응형 */}
            <div
              className={`font-LGSMHATB leading-[1.115rem] text-gray_700 mb-[0.625rem] text-left
                            mobile:mb-[1.25rem]`}
            >
              {t("NOISE_0011")}
            </div>
            <SimulationResultTable simulateData={simulateData} detailData={detailData} t={t} />
          </section>
          {/* 반응형 */}
          <section className="mobile:w-full mobile:max-w-[29rem]">
            <div
              className={
                "font-LGSMHATB leading-[1.115rem] text-gray_700 mb-5 text-left mobile:text-[0.875rem] mobile:leading-[0.976rem]"
              }
            >
              {t("NOISE_0012")}
            </div>
            <ResultChart simulateData={octaveBand} t={t} chartDivRef={chartDivRef} />
          </section>
        </ContainerBoxRow>
        <CAccordionBox
          title={accordionDummyData[0]!.title}
          content={accordionDummyData[0]!.content}
          isOpen={isAccordionOpen1}
          setIsOpen={setIsAccordionOpen1}
          classList={"mb-5"}
          t={t}
        />
        <CAccordionBox
          title={accordionDummyData[1]!.title}
          content={accordionDummyData[1]!.content}
          isOpen={isAccordionOpen2}
          setIsOpen={setIsAccordionOpen2}
          image={accordionDummyData[1]!.image}
          t={t}
        />
        {/* 반응형 */}
        <ContainerBoxRow
          justifyContent={"between"}
          alignItems={"center"}
          classList={"pt-[2.5rem] mobile:gap-[0.75rem]"}
        >
          <Link
            href={"/container/input"}
            className={"mobile:w-[calc(100%/2)]"}
            onClick={() => {
              localStorage.setItem("isBack", "true");
            }}
          >
            <CImageButton
              image={IC_BUTTON_LEFT_ARROW}
              title={"Previous"}
              classList={"primaryButton w-[9.938rem] mobile:w-full"}
            />
          </Link>
          <CButton
            title={"Report"}
            type={"submit"}
            className={"primaryButton w-[7.5rem] mobile:w-[calc(100%/2)]"}
            onClick={() => {
              // setIsActiveReportPopup(true);
              handleReportPdfOpen();
            }}
          />
        </ContainerBoxRow>
      </ContainerBox>
      {reportPdfOpen && (
        <RenderReportPdfImage
          setIsLoading={setIsLoading}
          handleReportPdfClose={handleReportPdfClose}
          handleSendEmailOpen={handleSendEmailOpen}
          inputData={resultData}
          octaveBand={octaveBand}
        />
      )}
    </main>
  );
}
