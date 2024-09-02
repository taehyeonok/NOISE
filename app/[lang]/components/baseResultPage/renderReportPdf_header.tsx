"use client";

import IC_LG_LOGO from "@/app/assets/icons/ic_lg_logo.svg";
import { useTranslation } from "@/app/i18n/client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useRef } from "react";

const RenderReportPdfHeader = () => {
  const param = useParams<{ lang: string }>();
  const { t } = useTranslation(param.lang);
  const pdfContentHeaderRef = useRef<HTMLDivElement>(null);
  return (
    <div id="pdfHeader" className="pdf-content-header" ref={pdfContentHeaderRef}>
      <div className="pdf-content-header-top">
        <div>
          <Image src={IC_LG_LOGO} alt={"lg"} />
        </div>
        <div>
          <span>LATS Noise Ver. </span>
          <span>@project_version</span>
        </div>
      </div>
      <div className="pdf-content-header-line"></div>
      <div className="pdf-content-header-bottom">
        <div>
          <span>{t("RC_R_3")} : </span>
          <span>@project_name</span>
        </div>
        <div>
          <span>@project_date</span>
        </div>
      </div>
    </div>
  );
};

export default RenderReportPdfHeader;
