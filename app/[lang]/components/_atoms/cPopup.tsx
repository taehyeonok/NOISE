import { RefObject, forwardRef, useEffect } from "react";
import { cPopUpProps } from "@/@types/components";
{
  /* 반응형 */
}
const CPopUp = forwardRef<HTMLDivElement, cPopUpProps>(
  ({ children, className = "", classList = "", isActive, notOverflow = false }, ref) => {
    {
      /* 반응형 */
    }
    useEffect(() => {
      if (notOverflow) return;

      if (isActive && ref && "current" in ref && ref.current) {
        ref.current.focus();
        document.querySelector("body")?.style.setProperty("overflow-y", "hidden", "important");
      } else {
        document.querySelector("body")?.style.setProperty("overflow-y", "auto", "important");
      }
    }, [isActive, notOverflow]);

    return (
      <div className={`cPopUpBg ${classList} ${isActive ? "block" : "hidden"}`}>
        <div className={`cPopUp ${className}`} ref={ref as RefObject<HTMLDivElement>} tabIndex={0}>
          {children}
        </div>
      </div>
    );
  }
);

export default CPopUp;
