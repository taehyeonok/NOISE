"use client";
import IC_LG_LOGO from "@/app/assets/icons/ic_logo.svg";
import { useTranslation } from "@/app/i18n/client";
import CButton from "@/app/[lang]/components/_atoms/cButton";
import EditUnit from "@/lib/editUnit";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useCookies } from "react-cookie";
import dynamic from "next/dynamic";
import LoadingPage from "../loadingSkeleton/loadingPage";
import { toPng } from "html-to-image";
import { ProductItem } from "@/@types/components";
import { dBAF } from "../../constants/const";
import CReportPopUp from "../_atoms/cReportPopUp";
import Noisetools from "../noisetools/noisetools";

interface RenderReportPdfProps {
  setIsLoading: Function;
  handleReportPdfClose: Function;
  handleSendEmailOpen: Function;
  inputData: any;
  octaveBand: any;
}
const RenderReportPdfImage = ({
  setIsLoading,
  handleReportPdfClose,
  handleSendEmailOpen,
  inputData,
  octaveBand,
}: RenderReportPdfProps) => {
  const param = useParams<{ lang: string }>();
  const { t } = useTranslation(param.lang);
  const pdfCoverRef = useRef<HTMLDivElement>(null);
  const pdfContentInputRef = useRef<HTMLDivElement>(null);
  const pdfContentInput2Ref = useRef<HTMLDivElement>(null);
  const pdfContentResultRef = useRef<HTMLDivElement>(null);
  const pdfContentNoteRef = useRef<HTMLDivElement>(null);
  const reportPdfImgRef = useRef<HTMLDivElement>(null);
  const pdfContentHeaderRef = useRef<HTMLDivElement>(null);
  const [cookies, setCookie, removeCookie] = useCookies([
    "latsNoiseLogin",
    "latsNoiseLoginInfo",
    "ssolgenet",
    "login_success",
  ]);
  const [unitData, setUnitData] = useState<any>(null);
  const editUnit = new EditUnit();
  const pageWidth = 210;
  const pageHeight = 260;
  const ResultChart = dynamic(() => import("@/app/[lang]/components/chart/resultChart"), {
    ssr: false,
    // loading: () => <LoadingPage />,
  });
  const chartDivRef = useRef<HTMLDivElement>(null);

  const nowDate = Date.now();
  // Date 객체를 생성합니다.
  const date = new Date(nowDate);
  // Intl.DateTimeFormat을 사용하여 포맷을 지정합니다.
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);

  //뒷 화면 스크롤 방지
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const overalldBAF = (data: any[]) => {
    return (
      10 *
      Math.log10(
        10 ** ((data[0] - 26.2) / 10) +
          10 ** ((data[1] - 16.1) / 10) +
          10 ** ((data[2] - 8.6) / 10) +
          10 ** ((data[3] - 3.2) / 10) +
          10 ** (data[4] / 10) +
          10 ** ((data[5] + 1.2) / 10) +
          10 ** ((data[6] + 1) / 10) +
          10 ** ((data[7] - 1.1) / 10)
      )
    );
  };
  //Noise tools
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
  useEffect(() => {
    setNTAllValues(
      inputData?.projectInfoData?.inputData?.horizontal,
      inputData?.projectInfoData?.inputData?.outdoorUnit + 1,
      inputData?.projectInfoData?.inputData?.receiver,
      inputData?.projectInfoData?.inputData?.odus,
      inputData?.projectInfoData?.inputData?.barrierH,
      inputData?.projectInfoData?.inputData?.barrierSelected?.value == "0" ? true : false,
      inputData?.projectInfoData?.inputData?.leftWall == 1 ? true : false,
      inputData?.projectInfoData?.inputData?.topWall == 1 ? true : false
    );
  }, []);
  // Report PDF 다운로드
  const downloadPdfDocument = async () => {
    setIsLoading(true);
    const filename = "Noise_REPORT_" + formattedDate.replaceAll("/", "") + ".pdf";
    const doc = new jsPDF({
      orientation: "p",
      unit: "mm",
      format: "a4",
    });

    // Cover 이미지 생성
    if (pdfCoverRef.current) {
      pdfCoverRef.current.classList.remove("mobile:w-full");
      const cover_canvas = await html2canvas(pdfCoverRef.current, {
        logging: false,
        allowTaint: true,
        useCORS: true,
        scale: 2,
        // onclone: (cloneDoc) => {
        //   cloneDoc.querySelector("#pdfCover")?.classList.remove("hidden");
        // },
      });
      const cover_png = await toPng(pdfCoverRef.current, {
        includeQueryParams: true,
      });
      // const imgData = cover_canvas.toDataURL("image/png");
      const pageSize = getPageSize(cover_canvas);
      doc.addImage(
        cover_png,
        "PNG",
        pageSize.marginX,
        10,
        pageSize.canvasWidth,
        pageSize.canvasHeight
      );
      pdfCoverRef.current.classList.add("mobile:w-full");
    }

    // 입력값 Input 이미지 생성
    if (pdfContentInputRef.current) {
      pdfContentInputRef.current.classList.remove("mobile:w-full");
      const pdf_page: NodeListOf<HTMLDivElement> =
        pdfContentInputRef.current.querySelectorAll(".pdf-page");
      for (const page of pdf_page) {
        const content_canvas = await html2canvas(page, {
          logging: false,
          allowTaint: true,
          useCORS: true,
          scale: 2,
        });
        const content_png = await toPng(page, {
          includeQueryParams: true,
        });
        // const imgData = content_canvas.toDataURL("image/png");
        const pageSize = getPageSize(content_canvas);
        doc.addPage();
        doc.addImage(
          content_png,
          "PNG",
          pageSize.marginX,
          0,
          pageSize.canvasWidth,
          pageSize.canvasHeight
        );
      }
      pdfContentInputRef.current.classList.add("mobile:w-full");
    }

    // 입력값 Input2 이미지 생성
    if (pdfContentInput2Ref.current) {
      pdfContentInput2Ref.current.classList.remove("mobile:w-full");
      const canvas = await html2canvas(pdfContentInput2Ref.current, {
        logging: false,
        allowTaint: true,
        useCORS: true,
        scale: 2,
      });
      const result_png = await toPng(pdfContentInput2Ref.current, {
        includeQueryParams: true,
      });
      // const imgData = canvas.toDataURL("image/png");
      const pageSize = getPageSize(canvas);
      doc.addPage();
      doc.addImage(
        result_png,
        "PNG",
        pageSize.marginX,
        0,
        pageSize.canvasWidth,
        pageSize.canvasHeight
      );
      pdfContentInput2Ref.current.classList.add("mobile:w-full");
    }

    // 결과값 이미지 생성
    if (pdfContentResultRef.current) {
      pdfContentResultRef.current.classList.remove("mobile:w-full");
      const pdf_page: NodeListOf<HTMLDivElement> =
        pdfContentResultRef.current.querySelectorAll(".pdf-page");
      for (const page of pdf_page) {
        const content_canvas = await html2canvas(page, {
          logging: false,
          allowTaint: true,
          useCORS: true,
          scale: 2,
        });
        const content_png = await toPng(page, {
          includeQueryParams: true,
        });
        // const imgData = content_canvas.toDataURL("image/png");
        const pageSize = getPageSize(content_canvas);
        doc.addPage();
        doc.addImage(
          content_png,
          "PNG",
          pageSize.marginX,
          0,
          pageSize.canvasWidth,
          pageSize.canvasHeight
        );
      }
      pdfContentResultRef.current.classList.add("mobile:w-full");
    }

    // Note 이미지 생성
    if (pdfContentNoteRef.current) {
      pdfContentNoteRef.current.classList.remove("mobile:w-full");
      const pdf_page: NodeListOf<HTMLDivElement> =
        pdfContentNoteRef.current.querySelectorAll(".pdf-page");
      for (const page of pdf_page) {
        const content_canvas = await html2canvas(page, {
          logging: false,
          allowTaint: true,
          useCORS: true,
          scale: 2,
        });
        const valve_png = await toPng(page, {
          includeQueryParams: true,
        });
        // const imgData = content_canvas.toDataURL("image/png");
        const pageSize = getPageSize(content_canvas);
        doc.addPage();
        doc.addImage(
          valve_png,
          "PNG",
          pageSize.marginX,
          0,
          pageSize.canvasWidth,
          pageSize.canvasHeight
        );
      }
      pdfContentNoteRef.current.classList.add("mobile:w-full");
    }

    //PDF 다운로드
    doc.save(filename);
    setIsLoading(false);
  };

  const getPageSize = (canvas: HTMLCanvasElement) => {
    const canvasHeight = (canvas.height * pageWidth) / canvas.width;
    const canvasWidth = pageWidth;

    const marginX = (pageWidth - canvasWidth) / 2;
    const marginY = (pageHeight - canvasHeight) / 2;

    return { marginX, marginY, canvasWidth, canvasHeight };
  };

  const addPage = (pdfContent: HTMLDivElement, child: Element) => {
    // 새 페이지 시작
    const page = document.createElement("div");
    page.className = "pdf-page";
    pdfContent.insertBefore(page, child);

    const header = document.createElement("div");
    header.className = "pdf-content-header";
    if (pdfContentHeaderRef.current) {
      header.innerHTML = pdfContentHeaderRef.current.innerHTML;
      page.appendChild(header);
    }

    // 페이지에 컨텐츠 추가
    page.appendChild(child);
    return page;
  };

  useEffect(() => {
    // console.log("inputData", inputData);
    const lats_unit = editUnit.getUnitSetting();
    setUnitData(lats_unit[lats_unit.unitClss]);
  }, []);

  // 입력값 페이지 생성
  useEffect(() => {
    const pdfContent = pdfContentInputRef.current;
    if (pdfContent) {
      let accumulatedHeight = 0;
      let page: HTMLDivElement;
      Array.from(pdfContent.children).forEach((child, index) => {
        if (child.tagName !== "SCRIPT" && child.className !== "pdf-page") {
          // 스크립트 태그는 무시
          accumulatedHeight += child.scrollHeight * 0.2645833333;
          if (index === 0) {
            page = addPage(pdfContent, child);
            accumulatedHeight = 10 + child.scrollHeight * 0.2645833333; // 페이지 높이 리셋
          }

          if (accumulatedHeight >= pageHeight) {
            page = addPage(pdfContent, child);
            accumulatedHeight = 10 + child.scrollHeight * 0.2645833333; // 페이지 높이 리셋
          } else {
            if (page) page.appendChild(child);
          }
        }
      });
    }
  }, [pdfContentInputRef]);

  // 결과값 이미지 생성
  useEffect(() => {
    const pdfContent = pdfContentResultRef.current;
    if (pdfContent) {
      let accumulatedHeight = 0;
      let page: HTMLDivElement;
      Array.from(pdfContent.children).forEach((child, index) => {
        if (child.tagName !== "SCRIPT" && child.className !== "pdf-page") {
          // 스크립트 태그는 무시
          if (child.tagName === "OL") {
            child.className = "p-[7mm]";
          }
          accumulatedHeight += child.scrollHeight * 0.2645833333;
          if (index === 0) {
            page = addPage(pdfContent, child);
            accumulatedHeight = 10 + child.scrollHeight * 0.2645833333; // 페이지 높이 리셋
          }

          if (accumulatedHeight >= pageHeight) {
            page = addPage(pdfContent, child);
            accumulatedHeight = 10 + child.scrollHeight * 0.2645833333; // 페이지 높이 리셋
          } else {
            if (page) page.appendChild(child);
          }
        }
      });
    }
  }, [pdfContentResultRef]);

  // Note 이미지 생성
  useEffect(() => {
    const pdfContent = pdfContentNoteRef.current;
    if (pdfContent) {
      let accumulatedHeight = 0;
      let page: HTMLDivElement;
      Array.from(pdfContent.children).forEach((child, index) => {
        if (child.tagName !== "SCRIPT" && child.className !== "pdf-page") {
          // 스크립트 태그는 무시
          if (child.tagName === "OL") {
            child.className = "p-[7mm]";
          }
          accumulatedHeight += child.scrollHeight * 0.2645833333;
          if (index === 0) {
            page = addPage(pdfContent, child);
            accumulatedHeight = 10 + child.scrollHeight * 0.2645833333; // 페이지 높이 리셋
          }

          if (accumulatedHeight >= pageHeight) {
            page = addPage(pdfContent, child);
            accumulatedHeight = 10 + child.scrollHeight * 0.2645833333; // 페이지 높이 리셋
          } else {
            if (page) page.appendChild(child);
          }
        }
      });
    }
  }, [pdfContentNoteRef]);

  const app_version = "1.0.0.0";
  return (
    <CReportPopUp
      className={"p-5 flex flex-col gap-10 mobile:p-0 mobile:w-full mobile:h-full mobile:gap-0"}
    >
      <div id="pdfHeader" className="hidden" ref={pdfContentHeaderRef}>
        <div className="pdf-content-header-top">
          <div>
            <Image src={IC_LG_LOGO} alt={"lg"} />
          </div>
          <div>
            <span>LATS Noise Ver. </span>
            <span>{app_version}</span>
          </div>
        </div>
        <div className="pdf-content-header-line"></div>
        <div className="pdf-content-header-bottom">
          <div>
            <span>{t("project_name")} : </span>
            <span>{inputData?.projectInfoData?.projectName}</span>
          </div>
          <div>
            <span>{formattedDate}</span>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col gap-10 mobile:p-[1.25rem_1rem_2.5rem_1rem] mobile:gap-[1.875rem] `}
      >
        {/* 리포트 커버 페이지 */}
        <div ref={reportPdfImgRef}>
          <div id="pdfCover" className="w-[210mm] h-[297mm] m-auto mobile:w-full" ref={pdfCoverRef}>
            <div className="pdf-cover-logo w-full ml-2">
              <Image src={IC_LG_LOGO} alt={"lg"} />
            </div>
            <div className="pdf-cover-line">
              <div className="h-3 w-[70mm] bg-primary "></div>
              <div className="h-3 w-[140mm] float-right bg-[#2c364a]"></div>
            </div>
            <div className="pdf-cover-title">
              <p>LATS Noise</p>
              <p>{t("RC_0169")}</p>
            </div>
            <div className={"w-full bg-white py-10 px-10 mobile:px-5 text-left"}>
              <div className={"font-LGSMHATSB text-base mobile:text-[0.75rem] mobile:leading-none"}>
                {t("RC_0007")}
              </div>
              <div
                className={
                  "font-LGSMHATR text-base mt-2.5 mobile:text-[0.75rem] mobile:leading-[1.05rem] whitespace-pre-wrap"
                }
              >
                {t("NOISE_0020")}
              </div>
            </div>
            <div className="pdf-cover-info">
              <p className="title">{t("RC_0170")}</p>
              <div className="flex gap-2">
                <div>
                  <p>{t("project_name")}</p>
                  <p>{t("THERMAV_753")}</p>
                  <p>{t("RC_0173")}</p>
                </div>
                <div>
                  <p>{inputData?.projectInfoData?.projectName}</p>
                  <p>{formattedDate}</p>
                  <p>{app_version}</p>
                </div>
              </div>
            </div>
          </div>

          {/* System Information */}
          <div className="pdf-content mobile:w-full " ref={pdfContentInputRef}>
            <div className="pdf-content-title">{t("RC_0174")}</div>

            {/**productTableData */}
            <div className="pdf-content-table">
              <div className="pdf-content-table-th">{t("NOISE_0040")}</div>
            </div>
            <div className="pdf-content-table-row">
              <div className="td w-[15%]">{t("product_type")}</div>
              <div className="td w-[27%]">{t("COMMON_509")}</div>
              <div className="td w-[11%]">{t("COMMON_563")} (EA)</div>
              <div className="td w-[20%]">{t("NOISE_0041")}</div>
              <div className="td w-[15%]">{t("NOISE_0005")}</div>
              <div className="td w-[12%]">{t("COMMON_524")} (%)</div>
            </div>
            {inputData?.projectInfoData?.productTable.map((row: any, index: number) => (
              <div key={index} className="pdf-content-table-row">
                <div className="td w-[15%]">{row.productType}</div>
                <div className="td w-[27%]">{row.modelName}</div>
                <div className="td w-[11%]">{row.qty}</div>
                <div className="td w-[20%]">{row.function}</div>
                <div className="td w-[15%]">{row.step}</div>
                <div className="td w-[12%]">{row.capacity}</div>
              </div>
            ))}
            {/**totalData */}
            <div className="pdf-content-table-40 ml-auto">
              <div className="text-center text-base font-LGSMHATSB bg-[#d9d9d9] py-[0.5mm] border-y border-solid border-black">
                {t("Total Capacity")}
              </div>
              <div className="pdf-content-table-row">
                <div className="td w-[30%]">{t("NOISE_0042")}</div>
                <div className="td w-[30%]">
                  {inputData?.soundData?.totalCapacityTableData[0]["first"].split("k")[0]}
                </div>
                <div className="w-[10%]  text-left">kW</div>
                <div className="td w-[20%]"></div>
                <div className="td w-[10%]"></div>
              </div>
              <div className="pdf-content-table-row ">
                <div className="td w-[30%]">{t("NOISE_0043")}</div>
                <div className="td w-[30%]">
                  {inputData?.soundData?.totalCapacityTableData[1]["first"].split("k")[0]}
                </div>
                <div className="w-[10%] text-left">kW</div>
                <div className="td w-[15%]">
                  {inputData?.soundData?.totalCapacityTableData[1]["second"].split("%")[0]}
                </div>
                <div className="w-[15%] text-left">%</div>
              </div>
            </div>
            {/**Sound Spec Data */}
            <div className="pdf-content-table">
              <div className="pdf-content-table-th">{t("NOISE_0044")}</div>
              <div className="pdf-content-table-td justify-center">
                <div>{t("NOISE_0045")} (dB)</div>
              </div>
              <div className="pdf-content-table-row">
                <div className="td w-[21%]">{t("NOISE_0047")}</div>
                <div className="td w-[8%]">63 Hz</div>
                <div className="td w-[8%]">125 Hz</div>
                <div className="td w-[8%]">250 Hz</div>
                <div className="td w-[8%]">500 Hz</div>
                <div className="td w-[8%]">1k Hz</div>
                <div className="td w-[8%]">2k Hz</div>
                <div className="td w-[8%]">4k Hz</div>
                <div className="td w-[9%]">8k Hz</div>
                <div className="td w-[14%]">{t("NOISE_0018")} (dB(A))</div>
              </div>
              {Object.keys(inputData?.soundData?.soundPressureLevel[0]).map((key, index) => {
                if (index < Object.keys(inputData?.soundData?.soundPressureLevel[0]).length - 1) {
                  return (
                    <div key={index} className="pdf-content-table-row">
                      <div className="td w-[21%]">{`Product ${key} / Type : SPL`}</div>
                      <div className="td w-[8%]">
                        {Number(inputData?.soundData?.soundPressureLevel[0][key]).toFixed(1)}
                      </div>
                      <div className="td w-[8%]">
                        {Number(inputData?.soundData?.soundPressureLevel[1][key]).toFixed(1)}
                      </div>
                      <div className="td w-[8%]">
                        {Number(inputData?.soundData?.soundPressureLevel[2][key]).toFixed(1)}
                      </div>
                      <div className="td w-[8%]">
                        {Number(inputData?.soundData?.soundPressureLevel[3][key]).toFixed(1)}
                      </div>
                      <div className="td w-[8%]">
                        {Number(inputData?.soundData?.soundPressureLevel[4][key]).toFixed(1)}
                      </div>
                      <div className="td w-[8%]">
                        {Number(inputData?.soundData?.soundPressureLevel[5][key]).toFixed(1)}
                      </div>
                      <div className="td w-[8%]">
                        {Number(inputData?.soundData?.soundPressureLevel[6][key]).toFixed(1)}
                      </div>
                      <div className="td w-[9%]">
                        {Number(inputData?.soundData?.soundPressureLevel[7][key]).toFixed(1)}
                      </div>
                      <div className="td w-[14%]">
                        {Number(inputData?.soundData?.soundPressureLevel[8][key]).toFixed(1)}
                      </div>
                    </div>
                  );
                }
              })}
              {/**Sound Power Level (dB) */}
              <div className="pdf-content-table-td justify-center">
                <div>{t("NOISE_0046")} (dB)</div>
              </div>
              <div className="pdf-content-table-row">
                <div className="td w-[21%]">{t("NOISE_0047")}</div>
                <div className="td w-[8%]">63 Hz</div>
                <div className="td w-[8%]">125 Hz</div>
                <div className="td w-[8%]">250 Hz</div>
                <div className="td w-[8%]">500 Hz</div>
                <div className="td w-[8%]">1k Hz</div>
                <div className="td w-[8%]">2k Hz</div>
                <div className="td w-[8%]">4k Hz</div>
                <div className="td w-[9%]">8k Hz</div>
                <div className="td w-[14%]">{t("NOISE_0018")} (dB(A))</div>
              </div>
              {Object.keys(inputData?.soundData?.soundPowerLevel[0]).map((key, index) => {
                if (index < Object.keys(inputData?.soundData?.soundPowerLevel[0]).length - 1) {
                  return (
                    <div key={index} className="pdf-content-table-row">
                      <div className="td w-[21%]">{`Product ${key} / Type : SPL`}</div>
                      <div className="td w-[8%]">
                        {Number(inputData?.soundData?.soundPowerLevel[0][key]).toFixed(1)}
                      </div>
                      <div className="td w-[8%]">
                        {Number(inputData?.soundData?.soundPowerLevel[1][key]).toFixed(1)}
                      </div>
                      <div className="td w-[8%]">
                        {Number(inputData?.soundData?.soundPowerLevel[2][key]).toFixed(1)}
                      </div>
                      <div className="td w-[8%]">
                        {Number(inputData?.soundData?.soundPowerLevel[3][key]).toFixed(1)}
                      </div>
                      <div className="td w-[8%]">
                        {Number(inputData?.soundData?.soundPowerLevel[4][key]).toFixed(1)}
                      </div>
                      <div className="td w-[8%]">
                        {Number(inputData?.soundData?.soundPowerLevel[5][key]).toFixed(1)}
                      </div>
                      <div className="td w-[8%]">
                        {Number(inputData?.soundData?.soundPowerLevel[6][key]).toFixed(1)}
                      </div>
                      <div className="td w-[9%]">
                        {Number(inputData?.soundData?.soundPowerLevel[7][key]).toFixed(1)}
                      </div>
                      <div className="td w-[14%]">
                        {Number(inputData?.soundData?.soundPowerLevel[8][key]).toFixed(1)}
                      </div>
                    </div>
                  );
                }
              })}
              {/**Estimated Sound Power Data */}
              <div className="pdf-content-table-th mt-0.5">{t("NOISE_0048")}</div>
              <div className="pdf-content-table-td justify-center">
                <div>{t("NOISE_0046")}</div>
              </div>
              <div className="grid grid-rows-1 grid-flow-col">
                <div className="self-center td row-span-2">{t("NOISE_0012")} (dB)</div>
                <div className="my-2 col-span-4 border-b border-solid border-black flex flex-row items-center justify-center">
                  <div className="td w-[15%]">63 Hz</div>
                  <div className="td w-[15%]">125 Hz</div>
                  <div className="td w-[15%]">250 Hz</div>
                  <div className="td w-[15%]">500 Hz</div>
                  <div className="td w-[15%]">1k Hz</div>
                  <div className="td w-[15%]">2k Hz</div>
                  <div className="td w-[15%]">4k Hz</div>
                  <div className="td w-[15%]">8k Hz</div>
                </div>
                <div className="col-span-4 flex flex-row items-center justify-center">
                  <div className="td w-[15%]">
                    {Number(inputData?.soundData?.estimatedSoundData[0]["content2"]).toFixed(1)}
                  </div>
                  <div className="td w-[15%]">
                    {Number(inputData?.soundData?.estimatedSoundData[1]["content2"]).toFixed(1)}
                  </div>
                  <div className="td w-[15%]">
                    {Number(inputData?.soundData?.estimatedSoundData[2]["content2"]).toFixed(1)}
                  </div>
                  <div className="td w-[15%]">
                    {Number(inputData?.soundData?.estimatedSoundData[3]["content2"]).toFixed(1)}
                  </div>
                  <div className="td w-[15%]">
                    {Number(inputData?.soundData?.estimatedSoundData[4]["content2"]).toFixed(1)}
                  </div>
                  <div className="td w-[15%]">
                    {Number(inputData?.soundData?.estimatedSoundData[5]["content2"]).toFixed(1)}
                  </div>
                  <div className="td w-[15%]">
                    {Number(inputData?.soundData?.estimatedSoundData[6]["content2"]).toFixed(1)}
                  </div>
                  <div className="td w-[15%]">
                    {Number(inputData?.soundData?.estimatedSoundData[7]["content2"]).toFixed(1)}
                  </div>
                </div>
              </div>
              <div className="my-1 border-b border-solid border-black flex flex-row items-center justify-center" />
              <div className="w-[33.4%] my-2 border-b border-solid border-black flex items-center justify-center">
                <div className="td w-[70%]">{t("NOISE_0018")} (dB(A)) </div>
                <div className="td w-[30%]">
                  {Number(dBAF(inputData?.soundData?.estimatedSoundData, "content2")).toFixed(1)}
                </div>
              </div>
            </div>
          </div>
          {/**add Page */}
          <div className="pdf-content mobile:w-full" ref={pdfContentInput2Ref}>
            <div className="pdf-page">
              <div className="pdf-content-header" ref={pdfContentHeaderRef}>
                <div className="pdf-content-header-top">
                  <div>
                    <Image src={IC_LG_LOGO} alt={"lg"} />
                  </div>
                  <div>
                    <span>LATS Noise Ver. </span>
                    <span>{app_version}</span>
                  </div>
                </div>
                <div className="pdf-content-header-line"></div>
                <div className="pdf-content-header-bottom">
                  <div>
                    <span>{t("project_name")} : </span>
                    <span>{inputData?.projectInfoData?.projectName}</span>
                  </div>
                  <div>
                    <span>{formattedDate}</span>
                  </div>
                </div>
              </div>
              {/**Environmental Information */}
              <div className="pdf-content-table">
                <div className="pdf-content-table-th">{t("NOISE_0049")}</div>
              </div>
              <div>
                <div className="pdf-content-table-row">
                  <div className="td w-[30%]">{t("NOISE_0050")}</div>
                  <div className="td w-[20%]">{inputData?.inputData?.field_type.split("(")[0]}</div>

                  <div className="td w-[25%]"></div>
                  <div className="td w-[15%]"></div>
                  <div className="td w-[15%]"></div>
                </div>
                <div className="pdf-content-table-row">
                  <div className="td w-[30%]">
                    {inputData?.inputData?.field_type === "Outdoor Space"
                      ? t("NOISE_0051")
                      : t("NOISE_0056")}
                  </div>
                  <div className="td w-[10%]">
                    {inputData?.inputData?.field_type === "Outdoor Space"
                      ? inputData?.inputData?.outdoor_unit
                      : inputData?.inputData?.direct_distance}
                  </div>
                  <div className="td w-[10%]">{unitData?.length}</div>
                  <div className="td w-[25%]">
                    {inputData?.inputData?.field_type === "Outdoor Space"
                      ? t("NOISE_0052")
                      : t("NOISE_0057")}
                  </div>
                  <div className="td w-[15%]">
                    {inputData?.inputData?.field_type === "Outdoor Space"
                      ? Number(inputData?.inputData?.outdoor_unit) + 1
                      : inputData?.inputData?.room_volume}
                  </div>
                  <div className="td w-[15%]">
                    {inputData?.inputData?.field_type === "Outdoor Space" ? (
                      unitData?.length
                    ) : (
                      <span>
                        {unitData?.length}
                        <sup>3</sup>
                      </span>
                    )}
                  </div>
                </div>
                {inputData?.inputData?.field_type === "Outdoor Space" && (
                  <>
                    <div className="pdf-content-table-row">
                      <div className="td w-[30%]">{t("NOISE_0053")}</div>
                      <div className="td w-[10%]">{inputData?.inputData?.receiver}</div>
                      <div className="td w-[10%]">{unitData?.length}</div>
                      <div className="td w-[25%]">{t("NOISE_0054")}</div>
                      <div className="td w-[15%]">{inputData?.inputData?.horizontal_distance}</div>
                      <div className="td w-[15%]">{unitData?.length}</div>
                    </div>
                    <div className="pdf-content-table-row">
                      <div className="td w-[30%]">{t("NOISE_0055")}</div>
                      <div className="td w-[10%]">{inputData?.inputData?.background_noise}</div>
                      <div className="td w-[10%]">dB(A)</div>
                      <div className="td w-[25%]"></div>
                      <div className="td w-[15%]"></div>
                      <div className="td w-[15%]"></div>
                    </div>
                  </>
                )}
              </div>
              {/**Barrier Information */}
              {inputData?.inputData?.field_type === "Outdoor Space" && (
                <>
                  <div className="pdf-content-table">
                    <div className="pdf-content-table-th">{t("NOISE_0058")}</div>
                  </div>
                  <div>
                    <div className="pdf-content-table-row">
                      <div className="td w-[29%]">{t("NOISE_0059")}</div>
                      <div className="td w-[1%]">
                        {inputData?.inputData?.isBarrier ? t("NOISE_0082") : t("NOISE_0083")}
                      </div>
                      <div className="td w-[25%]"></div>
                      <div className="td w-[15%]"></div>
                      <div className="td w-[15%]"></div>
                    </div>
                    <div className="pdf-content-table-row">
                      <div className="td w-[30%]">{t("NOISE_0060")}</div>
                      <div className="td w-[10%]">
                        {inputData?.inputData?.isBarrier ? inputData?.inputData?.ODUs : "-"}
                      </div>
                      <div className="td w-[10%]">{unitData?.length}</div>
                      <div className="td w-[25%]">{t("NOISE_0061")}</div>
                      <div className="td w-[15%]">
                        {inputData?.inputData?.isBarrier
                          ? inputData?.inputData?.barrier_height
                          : "-"}
                      </div>
                      <div className="td w-[15%]">{unitData?.length}</div>
                    </div>
                    <div className="pdf-content-table-row">
                      <div className="td w-[30%]">{t("VENT_57")}</div>
                      <div className="td w-[10%]">
                        {inputData?.inputData?.isBarrier
                          ? inputData?.inputData?.material_thickness[0].split("(")[0]
                          : "-"}
                      </div>
                      <div className="td w-[10%]"></div>
                      <div className="td w-[25%]">{t("NOISE_0062")}</div>
                      <div className="td w-[15%]">
                        {inputData?.inputData?.isBarrier
                          ? inputData?.inputData?.barrier_thickness
                          : "-"}
                      </div>
                      <div className="td w-[15%]">
                        {inputData?.inputData?.isBarrier ? unitData?.length : unitData?.diameter}
                      </div>
                    </div>
                    <div className="grid grid-rows-1 grid-flow-col">
                      <div className="self-center td row-span-2">{t("NOISE_0012")} (dB)</div>
                      <div className="my-2 col-span-4 border-b border-solid border-black flex flex-row items-center justify-center">
                        <div className="td w-[15%]">63 Hz</div>
                        <div className="td w-[15%]">125 Hz</div>
                        <div className="td w-[15%]">250 Hz</div>
                        <div className="td w-[15%]">500 Hz</div>
                        <div className="td w-[15%]">1k Hz</div>
                        <div className="td w-[15%]">2k Hz</div>
                        <div className="td w-[15%]">4k Hz</div>
                        <div className="td w-[15%]">8k Hz</div>
                      </div>
                      <div className="col-span-4 flex flex-row items-center justify-center">
                        <div className="td w-[15%]">
                          {inputData?.inputData?.isBarrier
                            ? inputData?.inputData?.barrierInfoTableData[0]
                            : "-"}
                        </div>
                        <div className="td w-[15%]">
                          {inputData?.inputData?.isBarrier
                            ? inputData?.inputData?.barrierInfoTableData[1]
                            : "-"}
                        </div>
                        <div className="td w-[15%]">
                          {inputData?.inputData?.isBarrier
                            ? inputData?.inputData?.barrierInfoTableData[2]
                            : "-"}
                        </div>
                        <div className="td w-[15%]">
                          {inputData?.inputData?.isBarrier
                            ? inputData?.inputData?.barrierInfoTableData[3]
                            : "-"}
                        </div>
                        <div className="td w-[15%]">
                          {inputData?.inputData?.isBarrier
                            ? inputData?.inputData?.barrierInfoTableData[4]
                            : "-"}
                        </div>
                        <div className="td w-[15%]">
                          {inputData?.inputData?.isBarrier
                            ? inputData?.inputData?.barrierInfoTableData[5]
                            : "-"}
                        </div>
                        <div className="td w-[15%]">
                          {inputData?.inputData?.isBarrier
                            ? inputData?.inputData?.barrierInfoTableData[6]
                            : "-"}
                        </div>
                        <div className="td w-[15%]">
                          {inputData?.inputData?.isBarrier
                            ? inputData?.inputData?.barrierInfoTableData[7]
                            : "-"}
                        </div>
                      </div>
                    </div>
                    <div className="mt-1 border-b border-solid border-black flex flex-row items-center justify-center" />
                  </div>
                  <div className="mt-5 pointer-events-none">
                    <Noisetools
                      ref={ntRef}
                      factorChangedCallback={null}
                      horizontalDistance={Number(inputData?.inputData?.horizontal_distance)}
                      sourceHeight={Number(inputData?.inputData?.outdoor_unit) + 1}
                      receiverHeight={Number(inputData?.inputData?.receiver)}
                      barrierFromSource={
                        Number(inputData?.inputData?.ODUs)
                          ? Number(inputData?.inputData?.ODUs)
                          : Number(inputData?.inputData?.horizontal_distance) / 2
                      }
                      barrierHeight={
                        Number(inputData?.inputData?.barrier_height)
                          ? Number(inputData?.inputData?.barrier_height)
                          : 0
                      }
                      distanceUnit={unitData?.length}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
          {/**결과창 Simulation Result*/}
          <div className="pdf-content mobile:w-full" ref={pdfContentResultRef}>
            <div className="pdf-page">
              <div className="pdf-content-header" ref={pdfContentHeaderRef}>
                <div className="pdf-content-header-top">
                  <div>
                    <Image src={IC_LG_LOGO} alt={"lg"} />
                  </div>
                  <div>
                    <span>LATS Noise Ver. </span>
                    <span>{app_version}</span>
                  </div>
                </div>
                <div className="pdf-content-header-line"></div>
                <div className="pdf-content-header-bottom">
                  <div>
                    <span>{t("project_name")} : </span>
                    <span>{inputData?.projectInfoData?.projectName}</span>
                  </div>
                  <div>
                    <span>{formattedDate}</span>
                  </div>
                </div>
              </div>
              {/**Detail Information */}
              <div className="pdf-content-title">{t("RC_0185")}</div>
              <div className="pdf-content-table">
                <div className="pdf-content-table-th">{t("NOISE_0013")}</div>
              </div>
              <div>
                <div className="pdf-content-table-row">
                  <div className="td w-[20%]"></div>
                  <div className="td w-[8%]">63 Hz</div>
                  <div className="td w-[8%]">125 Hz</div>
                  <div className="td w-[8%]">250 Hz</div>
                  <div className="td w-[8%]">500 Hz</div>
                  <div className="td w-[8%]">1k Hz</div>
                  <div className="td w-[10%]">2k Hz</div>
                  <div className="td w-[10%]">4k Hz</div>
                  <div className="td w-[10%]">8k Hz</div>
                </div>
                <div className="pdf-content-table-row">
                  <div className="td w-[20%]">{t("NOISE_0014")}</div>
                  <div className="td w-[8%]">
                    {inputData?.inputData?.field_type === "Outdoor Space"
                      ? Number(inputData?.DI).toFixed(1)
                      : "-"}
                  </div>
                  <div className="td w-[8%]">
                    {inputData?.inputData?.field_type === "Outdoor Space"
                      ? Number(inputData?.DI).toFixed(1)
                      : "-"}
                  </div>
                  <div className="td w-[8%]">
                    {inputData?.inputData?.field_type === "Outdoor Space"
                      ? Number(inputData?.DI).toFixed(1)
                      : "-"}
                  </div>
                  <div className="td w-[8%]">
                    {inputData?.inputData?.field_type === "Outdoor Space"
                      ? Number(inputData?.DI).toFixed(1)
                      : "-"}
                  </div>
                  <div className="td w-[8%]">
                    {inputData?.inputData?.field_type === "Outdoor Space"
                      ? Number(inputData?.DI).toFixed(1)
                      : "-"}
                  </div>
                  <div className="td w-[10%]">
                    {inputData?.inputData?.field_type === "Outdoor Space"
                      ? Number(inputData?.DI).toFixed(1)
                      : "-"}
                  </div>
                  <div className="td w-[10%]">
                    {inputData?.inputData?.field_type === "Outdoor Space"
                      ? Number(inputData?.DI).toFixed(1)
                      : "-"}
                  </div>
                  <div className="td w-[10%]">
                    {inputData?.inputData?.field_type === "Outdoor Space"
                      ? Number(inputData?.DI).toFixed(1)
                      : "-"}
                  </div>
                </div>
                <div className="pdf-content-table-row">
                  <div className="td w-[20%]">{t("NOISE_0015")}</div>
                  <div className="td w-[8%]">
                    {inputData?.inputData?.field_type === "Outdoor Space"
                      ? Number(inputData?.distance).toFixed(1)
                      : Number(inputData?.attenuation[0]).toFixed(1)}
                  </div>
                  <div className="td w-[8%]">
                    {inputData?.inputData?.field_type === "Outdoor Space"
                      ? Number(inputData?.distance).toFixed(1)
                      : Number(inputData?.attenuation[1]).toFixed(1)}
                  </div>
                  <div className="td w-[8%]">
                    {inputData?.inputData?.field_type === "Outdoor Space"
                      ? Number(inputData?.distance).toFixed(1)
                      : Number(inputData?.attenuation[2]).toFixed(1)}
                  </div>
                  <div className="td w-[8%]">
                    {inputData?.inputData?.field_type === "Outdoor Space"
                      ? Number(inputData?.distance).toFixed(1)
                      : Number(inputData?.attenuation[3]).toFixed(1)}
                  </div>
                  <div className="td w-[8%]">
                    {inputData?.inputData?.field_type === "Outdoor Space"
                      ? Number(inputData?.distance).toFixed(1)
                      : Number(inputData?.attenuation[4]).toFixed(1)}
                  </div>
                  <div className="td w-[10%]">
                    {inputData?.inputData?.field_type === "Outdoor Space"
                      ? Number(inputData?.distance).toFixed(1)
                      : Number(inputData?.attenuation[5]).toFixed(1)}
                  </div>
                  <div className="td w-[10%]">
                    {inputData?.inputData?.field_type === "Outdoor Space"
                      ? Number(inputData?.distance).toFixed(1)
                      : Number(inputData?.attenuation[6]).toFixed(1)}
                  </div>
                  <div className="td w-[10%]">
                    {inputData?.inputData?.field_type === "Outdoor Space"
                      ? Number(inputData?.distance).toFixed(1)
                      : Number(inputData?.attenuation[7]).toFixed(1)}
                  </div>
                </div>
                <div className="pdf-content-table-row">
                  <div className="td w-[20%]">{t("NOISE_0016")}</div>
                  <div className="td w-[8%]">
                    {inputData?.inputData?.field_type === "Outdoor Space"
                      ? Math.max(
                          Number(
                            Number(
                              inputData.estimatedSoundData[0].content2 +
                                inputData.DI -
                                inputData.distance -
                                inputData.data[0]
                            ).toFixed(1)
                          ),
                          0
                        )
                      : "-"}
                  </div>
                  <div className="td w-[8%]">
                    {inputData?.inputData?.field_type === "Outdoor Space"
                      ? Math.max(
                          Number(
                            Number(
                              inputData.estimatedSoundData[1].content2 +
                                inputData.DI -
                                inputData.distance -
                                inputData.data[1]
                            ).toFixed(1)
                          ),
                          0
                        )
                      : "-"}
                  </div>
                  <div className="td w-[8%]">
                    {inputData?.inputData?.field_type === "Outdoor Space"
                      ? Math.max(
                          Number(
                            Number(
                              inputData.estimatedSoundData[2].content2 +
                                inputData.DI -
                                inputData.distance -
                                inputData.data[2]
                            ).toFixed(1)
                          ),
                          0
                        )
                      : "-"}
                  </div>
                  <div className="td w-[8%]">
                    {inputData?.inputData?.field_type === "Outdoor Space"
                      ? Math.max(
                          Number(
                            Number(
                              inputData.estimatedSoundData[3].content2 +
                                inputData.DI -
                                inputData.distance -
                                inputData.data[3]
                            ).toFixed(1)
                          ),
                          0
                        )
                      : "-"}
                  </div>
                  <div className="td w-[8%]">
                    {inputData?.inputData?.field_type === "Outdoor Space"
                      ? Math.max(
                          Number(
                            Number(
                              inputData.estimatedSoundData[4].content2 +
                                inputData.DI -
                                inputData.distance -
                                inputData.data[4]
                            ).toFixed(1)
                          ),
                          0
                        )
                      : "-"}
                  </div>
                  <div className="td w-[10%]">
                    {inputData?.inputData?.field_type === "Outdoor Space"
                      ? Math.max(
                          Number(
                            Number(
                              inputData.estimatedSoundData[5].content2 +
                                inputData.DI -
                                inputData.distance -
                                inputData.data[5]
                            ).toFixed(1)
                          ),
                          0
                        )
                      : "-"}
                  </div>
                  <div className="td w-[10%]">
                    {inputData?.inputData?.field_type === "Outdoor Space"
                      ? Math.max(
                          Number(
                            Number(
                              inputData.estimatedSoundData[6].content2 +
                                inputData.DI -
                                inputData.distance -
                                inputData.data[6]
                            ).toFixed(1)
                          ),
                          0
                        )
                      : "-"}
                  </div>
                  <div className="td w-[10%]">
                    {inputData?.inputData?.field_type === "Outdoor Space"
                      ? Math.max(
                          Number(
                            Number(
                              inputData.estimatedSoundData[7].content2 +
                                inputData.DI -
                                inputData.distance -
                                inputData.data[7]
                            ).toFixed(1)
                          ),
                          0
                        )
                      : "-"}
                  </div>
                </div>
              </div>
              <div className="pdf-content-table-th mt-5">{t("NOISE_0017")}</div>
              <div className="grid grid-rows-1 grid-flow-col">
                <div className="self-center td row-span-2">{t("NOISE_0012")} (dB)</div>
                <div className="my-2 col-span-4 border-b border-solid border-black flex flex-row items-center justify-center">
                  <div className="td w-[15%]">63 Hz</div>
                  <div className="td w-[15%]">125 Hz</div>
                  <div className="td w-[15%]">250 Hz</div>
                  <div className="td w-[15%]">500 Hz</div>
                  <div className="td w-[15%]">1k Hz</div>
                  <div className="td w-[15%]">2k Hz</div>
                  <div className="td w-[15%]">4k Hz</div>
                  <div className="td w-[15%]">8k Hz</div>
                </div>
                <div className="col-span-4 flex flex-row items-center justify-center">
                  <div className="td w-[15%]">{Number(inputData?.data[0]).toFixed(1)}</div>
                  <div className="td w-[15%]">{Number(inputData?.data[1]).toFixed(1)}</div>
                  <div className="td w-[15%]">{Number(inputData?.data[2]).toFixed(1)}</div>
                  <div className="td w-[15%]">{Number(inputData?.data[3]).toFixed(1)}</div>
                  <div className="td w-[15%]">{Number(inputData?.data[4]).toFixed(1)}</div>
                  <div className="td w-[15%]">{Number(inputData?.data[5]).toFixed(1)}</div>
                  <div className="td w-[15%]">{Number(inputData?.data[6]).toFixed(1)}</div>
                  <div className="td w-[15%]">{Number(inputData?.data[7]).toFixed(1)}</div>
                </div>
              </div>
              <div className="border-b border-solid border-black flex flex-row items-center justify-center" />
              <div className="w-[33.4%] my-2 border-b border-solid border-black flex items-center justify-center">
                <div className="td w-[70%]">{t("NOISE_0018")} (dB(A)) </div>
                <div className="td w-[30%]">{Number(overalldBAF(inputData?.data)).toFixed(1)}</div>
              </div>
              <div className="mt-5 pdf-content-table-th">{t("NOISE_0012")}</div>
              <div className="flex justify-center items-center pointer-events-none">
                <ResultChart
                  chartDivRef={chartDivRef}
                  // key={"reportImg"}
                  simulateData={octaveBand}
                  t={t}
                />
              </div>
            </div>
          </div>
        </div>
        {/**Note */}

        <div className="pdf-content mobile:w-full" ref={pdfContentNoteRef}>
          <div className="pdf-page">
            <div className="pdf-content-header" ref={pdfContentHeaderRef}>
              <div className="pdf-content-header-top">
                <div>
                  <Image src={IC_LG_LOGO} alt={"lg"} />
                </div>
                <div>
                  <span>LATS Noise Ver. </span>
                  <span>{app_version}</span>
                </div>
              </div>
              <div className="pdf-content-header-line"></div>
              <div className="pdf-content-header-bottom">
                <div>
                  <span>{t("project_name")} : </span>
                  <span>{inputData?.projectInfoData?.projectName}</span>
                </div>
                <div>
                  <span>{formattedDate}</span>
                </div>
              </div>
            </div>
            <div className="pdf-content-title">{t("NOISE_0021")}</div>
            <div className="h-[0.1mm] bg-gray-950 mt-[3.5mm] mb-[8.5mm] mx-[1mm]"></div>
            <div className="whitespace-pre-wrap">
              <div className="numbering-list depth-1">
                <div>01{")"}</div>
                <div>{t("NOISE_0022")}</div>
              </div>
              <div className="numbering-list depth-1">
                <div>02{")"}</div>
                <div>{t("NOISE_0023")}</div>
              </div>
              <div className="numbering-list depth-1">
                <div>03{")"}</div>
                <div>{t("NOISE_0024")}</div>
              </div>
              <div className="numbering-list depth-1">
                <div>04{")"}</div>
                <div>{t("NOISE_0025")}</div>
              </div>
              <div className="numbering-list depth-1">
                <div>05{")"}</div>
                <div className="">{t("NOISE_0026")}</div>
              </div>
              <div className="numbering-list depth-1">
                <div>06{")"}</div>
                <div>{t("NOISE_0027")}</div>
              </div>
              <div className="numbering-list depth-1">
                <div>07{")"}</div>
                <div>{t("NOISE_0028")}</div>
              </div>
              <div className="numbering-list depth-1">
                <div>09{")"}</div>
                <div>{t("NOISE_0029")}</div>
              </div>
              <div className="numbering-list depth-1">
                <div>10{")"}</div>
                <div>{t("NOISE_0030")}</div>
              </div>
              <div className="numbering-list depth-1">
                <div>10{")"}</div>
                <div>{t("NOISE_0031")}</div>
              </div>
              <div className="numbering-list depth-1">
                <div>11{")"}</div>
                <div>{t("NOISE_0032")}</div>
              </div>
              <div className="numbering-list depth-1">
                <div>12{")"}</div>
                <div>{t("NOISE_0033")}</div>
              </div>
              <div className="numbering-list depth-1">
                <div>13{")"}</div>
                <div>{t("NOISE_0034")}</div>
              </div>
              <div className="numbering-list depth-1">
                <div>14{")"}</div>
                <div>{t("NOISE_0035")}</div>
              </div>
              <div className="numbering-list depth-1">
                <div>15{")"}</div>
                <div dangerouslySetInnerHTML={{ __html: t("NOISE_0036") }} />
              </div>
              <div className="numbering-list depth-1">
                <div>16{")"}</div>
                <div>{t("NOISE_0037")}</div>
              </div>
              <div className="numbering-list depth-1">
                <div>17{")"}</div>
                <div>{t("NOISE_0038")}</div>
              </div>
            </div>

            <div className="pdf-content-table">
              <div className="flex flex-row text-base font-LGSMHATSB bg-[#d9d9d9] py-[0.5mm] border-y border-solid border-black">
                <div className="w-[70%]  text-left ml-2 font-bold">
                  Noise calculation formular (Spherical field)
                </div>
                <div className="w-[30%] text-right font-bold">* SPL : Lp * PWL : Lw</div>
              </div>
            </div>
            <div>
              <div className="pdf-content-table-row">
                <div className="td w-[20%]">Sound propagation</div>
                <div className="td w-[45%]">𝐿𝑝=𝐿𝑤 - 20log(𝑑𝑖𝑠𝑡𝑎𝑛𝑐𝑒,𝑚)−11+𝐷𝐼</div>
                <div className="td w-[35%]">where 𝐷𝐼 is directivity factor</div>
              </div>

              <div className="grid grid-rows-2 grid-flow-col bg-[#fff] py-[1.5mm] border-b border-solid border-black border-collapse justify-between">
                <div className="self-center td row-span-2 ml-1">
                  <div>Diffraction</div>
                  <div>*N : Fresnel number</div>
                  <div>*DL : Diffraction Loss</div>
                </div>
                <div className="my-2 col-span-6 border-b border-solid border-black flex flex-row items-center justify-center">
                  <div className="td w-[45%] text-left ">N = 2 x d x f / 341</div>
                  <div className="td w-[55%]">where 𝑓 is frequency</div>
                </div>
                <div className="col-span-4 flex flex-row items-center justify-center">
                  <div className="w-[68%] text-left">
                    <div className="td text-left">𝐷𝐿=20log [√2𝜋𝑁/(𝑡𝑎𝑛ℎ√2𝜋𝑁)]+5</div>
                    <div className="td ml-5">=24</div>
                  </div>
                  <div className="td w-[32%] ">
                    <div className="td  ">{`(-0.2 < N < 12.5)`}</div>
                    <div className="td ">{`(N > 12.5)`}</div>
                  </div>
                </div>
              </div>

              <div className="pdf-content-table-row">
                <div className="flex flex-col ml-5 w-[23%]  text-left">Noise summation</div>
                <div className="flex flex-col w-[77%] text-left">
                  𝐿𝑝,𝑠𝑢𝑚=10*log(10(𝐿1/10) + 10(𝐿2/10) + 10(𝐿3/10)… )
                </div>
              </div>

              {/* <div className="w-full h-full flex items-center justify-center mt-5">
                <Image src={IG_NOTE_TABLE_ENCLOSED_SPACE} alt={"sound propagation"} />
              </div> */}
            </div>
            <div className="pdf-content-table">
              <div className="flex flex-row text-base font-LGSMHATSB bg-[#d9d9d9] py-[0.5mm] border-y border-solid border-black">
                <div className="w-[70%]  text-left ml-2 font-bold">
                  Noise calculation formula (Enclosed space)
                </div>
                <div className="w-[30%] text-right font-bold">* SPL : Lp * PWL : Lw</div>
              </div>
            </div>
            <div>
              <div className="pdf-content-table-row">
                <div className="w-[22%] flex flex-col ml-5 text-left">Sound propagation</div>
                <div className="w-[78%] ">
                  𝐿𝑝=𝐿𝑤 − 10log(𝑑𝑖𝑠𝑡𝑎𝑛𝑐𝑒,𝑚) -5log(volume,m<sup>3</sup> )-3log(𝑓𝑟𝑒𝑞𝑢𝑒𝑛𝑐𝑦) + 10
                  log⁡(𝑛𝑢𝑚𝑏𝑒𝑟 𝑜𝑓 𝑠𝑜𝑢𝑟𝑐𝑒)+12
                </div>
              </div>
            </div>
            {/* <NotePage /> */}
            {/* <CAccordionBox
                title={accordionDummyData[1]!.title}
                content={accordionDummyData[1]!.content}
                isOpen={true}
                setIsOpen={() => true}
                image={accordionDummyData[1]!.image}
                t={t}
              /> */}
          </div>
          {/** */}
        </div>
        {/* 반응형 */}
        <div
          className={
            "sticky py-2 bottom-[-21px] bg-white flex items-center gap-2.5 justify-center mobile:hidden"
          }
        >
          <CButton
            title={"Cancel"}
            className={"blackLineButton w-[7.5rem] h-[2.25rem]"}
            onClick={() => {
              handleReportPdfClose();
            }}
          />
          {false && (
            <CButton
              title={"Send"}
              className={"primaryButton w-[7.5rem] h-[2.25rem]"}
              onClick={handleSendEmailOpen}
            />
          )}

          <CButton
            title={"Save"}
            className={"primaryButton w-[7.5rem] h-[2.25rem]"}
            onClick={downloadPdfDocument}
          />
        </div>
        {/* 반응형 */}
        <div className={"hidden mobile:flex flex-col gap-3 mobile:w-full"}>
          <div className={"flex gap-3"}>
            {false && (
              <CButton
                title={"Send"}
                className={"primaryButton h-[2.5rem] w-1/2"}
                onClick={handleSendEmailOpen}
              />
            )}
            <CButton
              title={"Save"}
              className={"primaryButton h-[2.5rem] w-1/2 mobile:w-1/2"}
              onClick={downloadPdfDocument}
            />
            <CButton
              title={"Cancel"}
              className={"blackLineButton w-full h-[2.5rem] mobile:w-1/2"}
              onClick={handleReportPdfClose}
            />
          </div>
        </div>
      </div>
    </CReportPopUp>
  );
};

export default RenderReportPdfImage;
