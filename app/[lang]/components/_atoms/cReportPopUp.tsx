import { RefObject, forwardRef, useEffect } from "react";
import { cReportPopUpProps } from "@/@types/components";

const CReportPopUp = forwardRef<HTMLDivElement, cReportPopUpProps>(
  ({ children, className, classList }, ref) => {
    useEffect(() => {
      if (ref && "current" in ref && ref.current) {
        ref.current.focus();
      }
    }, [ref]);

    return (
      <div className={`cReportPopUpBg ${classList}`}>
        <div
          className={`cReportPopUp ${className}`}
          ref={ref as RefObject<HTMLDivElement>}
          tabIndex={0}
        >
          {children}
        </div>
      </div>
    );
  }
);

CReportPopUp.displayName = "CReportPopUp";

export default CReportPopUp;
