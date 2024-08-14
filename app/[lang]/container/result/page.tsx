"use client";
import ContainerBox from "@/app/[lang]/components/containerBox/containerBox";
import ContainerBoxTitle from "@/app/[lang]/components/containerBoxTitle/containerBoxTitle";
import ContainerBoxRow from "@/app/[lang]/components/containerBoxRow/containerBoxRow";
import SimulationResultTable from "@/app/[lang]/components/table/simulationResultTable";
import IG_OCTAVE_BAND from "@/app/assets/images/ig_octave_band_graph.svg";
import Image from "next/image";
import CAccordionBox from "@/app/[lang]/components/_atoms/cAccordionBox";
import {
  accordionDummyData,
  detailInformationDummyData,
  pageIndex,
  soundPressureReceiverDummyData,
} from "@/app/[lang]/constants/const";
import { useEffect, useRef, useState } from "react";
import IG_REPORT from "@/app/assets/images/ig_report.svg";
import IC_BUTTON_LEFT_ARROW from "@/app/assets/icons/ic_button_left_arrow.png";
import CButton from "@/app/[lang]/components/_atoms/cButton";
import CImageButton from "@/app/[lang]/components/_atoms/cImageButton";
import Link from "next/link";
import CPopHeader from "@/app/[lang]/components/_atoms/cPopHeader";
import CPopUp from "@/app/[lang]/components/_atoms/cPopup";
import { cloneObject } from "@/app/utils/utils";

export default function Result({ params: { lang } }: any) {
  const [isAccordionOpen1, setIsAccordionOpen1] = useState<boolean>(true);
  const [isAccordionOpen2, setIsAccordionOpen2] = useState<boolean>(true);
  const [isActiveReportPopup, setIsActiveReportPopup] = useState<boolean>(false);
  const [simulateData, setSimulateData] = useState(soundPressureReceiverDummyData);
  const reportPopupRef = useRef<HTMLDivElement>(null);
  const [detailData, setDetailData] = useState(detailInformationDummyData);
  {
    /* 반응형 */
  }
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("simulate")!);
    const copySimulateData = cloneObject(simulateData);
    for (let i = 0; i < simulateData.data.length; i++) {
      copySimulateData.data[i].content = data.data[i];
    }
    setSimulateData(copySimulateData);

    const outdoor_space = JSON.parse(localStorage.getItem("outdoor_space")!);
    const copyDetailData = cloneObject(detailData);
    const detailLength = detailData.data[0]?.content.length!;
    if (outdoor_space.title === "Enclosed Space (Machine Room)") {
      for (let i = 0; i < detailLength; i++) {
        copyDetailData.data[0].content[i].content = "-";
        copyDetailData.data[1].content[i].content = Number(data.attenuation[i]).toFixed(1);
        copyDetailData.data[2].content[i].content = "-";
      }
    } else {
      for (let i = 0; i < detailLength; i++) {
        copyDetailData.data[0].content[i].content = data.DI;
        copyDetailData.data[1].content[i].content = data.distance;
        copyDetailData.data[2].content[i].content = Number(
          data.estimatedSoundData[i].content2 + data.DI - data.distance - data.data[i]
        ).toFixed(1);
      }
    }
    setDetailData(copyDetailData);
  }, [lang]);

  const renderReportPopup = () => {
    return (
      <CPopUp ref={reportPopupRef} isActive={isActiveReportPopup}>
        <CPopHeader label={"Report"} onClick={() => setIsActiveReportPopup(false)} />
        {/* 반응형 */}
        <div className={"p-[2.5rem] mobile:p-[1.25rem_1rem_2.5rem_1rem]"}>
          <div className={"max-h-[32.5rem] overflow-y-auto mb-[1.875rem] mobile:max-h-none"}>
            <Image src={IG_REPORT} alt={"report"} className={"mobile:mx-auto"} />
          </div>
          {/* 반응형 */}
          <div
            className={"flex justify-center items-center w-full gap-[1.25rem] mobile:gap-[0.75rem]"}
          >
            <button
              className={"blackLineButton w-[8.75rem] mobile:w-[calc(100%/2)] mobile:h-[2.25rem]"}
              onClick={() => {
                setIsActiveReportPopup(false);
              }}
            >
              Cancel
            </button>
            <button
              className={"primaryButton  w-[8.75rem] mobile:w-[calc(100%/2)] mobile:h-[2.25rem]"}
            >
              Download
            </button>
          </div>
        </div>
      </CPopUp>
    );
  };
  return (
    <main className={"container"}>
      {/* 반응형 */}
      <ContainerBox classList={"mt-6 mb-[3.125rem] mobile:mt-[0.625rem] mobile:mb-[2.5rem]"}>
        <ContainerBoxTitle title={"Results"} />
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
              Simulation Result
            </div>
            <SimulationResultTable simulateData={simulateData} detailData={detailData} />
          </section>
          {/* 반응형 */}
          <section>
            <div
              className={
                "font-LGSMHATB leading-[1.115rem] text-gray_700 mb-5 text-left mobile:text-[0.875rem] mobile:leading-[0.976rem]"
              }
            >
              Octave Band
            </div>
            <Image
              src={IG_OCTAVE_BAND}
              alt={"octave band"}
              className={"mt-[3.25rem] mobile:mt-[1.25rem]"}
            />
          </section>
        </ContainerBoxRow>
        <CAccordionBox
          title={accordionDummyData[0]!.title}
          content={accordionDummyData[0]!.content}
          isOpen={isAccordionOpen1}
          setIsOpen={setIsAccordionOpen1}
          classList={"mb-5"}
        />
        <CAccordionBox
          title={accordionDummyData[1]!.title}
          content={accordionDummyData[1]!.content}
          isOpen={isAccordionOpen2}
          setIsOpen={setIsAccordionOpen2}
          image={accordionDummyData[1]!.image}
        />
        {/* 반응형 */}
        <ContainerBoxRow
          justifyContent={"between"}
          alignItems={"center"}
          classList={"pt-[2.5rem] mobile:gap-[0.75rem]"}
        >
          <Link href={"/container/input"} className={"mobile:w-[calc(100%/2)]"}>
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
              setIsActiveReportPopup(true);
            }}
          />
        </ContainerBoxRow>
      </ContainerBox>
      {renderReportPopup()}
    </main>
  );
}
