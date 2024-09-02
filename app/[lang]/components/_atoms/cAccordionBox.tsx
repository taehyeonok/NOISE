import IC_ACCORDION_ARROW_DOWN from "@/app/assets/icons/ic_accordion_arrow_down.svg";
import IC_ACCORDION_ARROW_UP from "@/app/assets/icons/ic_accordion_arrow_up.svg";
import IG_NOISE_CALCULATION_FORMULA from "@/app/assets/images/ig_noise_calculation_formula.svg";
import IG_SOUND_PROPAGATION from "@/app/assets/images/ig_sound_propagation.svg";
import Image from "next/image";
import { accordionBoxProps } from "@/@types/components";
import { isNull } from "@/app/utils/utils";

export default function CAccordionBox({
  title,
  content,
  isOpen,
  setIsOpen,
  image,
  classList,
  t,
}: accordionBoxProps) {
  return (
    <article
      className={
        "w-full border border-gray_200 " +
        (isOpen ? "shadow-[1px_1px_6px_0_rgba(0,0,0,0.1)] " : "") +
        classList
      }
    >
      {/* 반응형 */}
      <div
        tabIndex={0}
        className={`flex items-center w-full py-[0.813rem] px-[1.875rem] justify-between align-center cursor-pointer 
                mobile:px-[1rem]
                ${isOpen ? "bg-light_primary" : ""} `}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            setIsOpen(!isOpen);
          }
        }}
      >
        <div className={"font-LGSMHATSB " + (isOpen ? "text-primary" : "text-black")}>
          {t(title)}
        </div>
        <Image src={isOpen ? IC_ACCORDION_ARROW_UP : IC_ACCORDION_ARROW_DOWN} alt={"show"} />
      </div>

      {typeof content === "string" ? (
        // 반응형
        <div
          className={`'w-full text-sm font-LGSMHATR text-gray_700 text-left whitespace-pre-wrap
                    ${isOpen ? "py-5 px-8 h-fit mobile:px-4 " : "h-0 overflow-hidden"}`}
        >
          {t(content)}
        </div>
      ) : (
        // 반응형
        <div
          className={`w-full
                    ${isOpen ? "py-5 px-8 h-fit mobile:px-4" : "h-0 overflow-hidden"}`}
        >
          <div className={"flex flex-col gap-[0.75rem]"}>
            {content.map((row: string, index: number) => {
              return (
                <div
                  key={index}
                  className={
                    "whitespace-pre-wrap text-sm text-gray_700 text-left indent-[-1.938rem] pl-[1.938rem]"
                  }
                >
                  <span className={"mr-2 text-sm"}>
                    {index + 1 < 10 && 0}
                    {index + 1 + ")"}
                  </span>
                  <div
                    dangerouslySetInnerHTML={{ __html: t(row) }}
                    className="inline text-sm text-gray_700 text-left "
                  />
                </div>
              );
            })}
          </div>
          {/* 반응형 */}
          <div className={"mt-[2.5rem] flex flex-col gap-[1.25rem] mobile:hidden"}>
            {!isNull(image) &&
              image?.map((img, index) => {
                return <Image src={img.src} alt={img.alt} key={index} />;
              })}
          </div>
          {/* 반응형 */}
          <div
            className={
              "hidden mobile:flex flex-col p-[1.875rem_0_0.625rem_0.875rem] gap-[1.875rem]"
            }
          >
            <Image src={IG_NOISE_CALCULATION_FORMULA} alt={"noise calculation formula"} />
            <Image src={IG_SOUND_PROPAGATION} alt={"sound propagation"} />
          </div>
        </div>
      )}
    </article>
  );
}
