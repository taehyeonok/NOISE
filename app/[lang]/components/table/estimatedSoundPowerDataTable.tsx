import { useEffect, useState } from "react";
import { dBAF } from "../../constants/const";

interface estimatedSoundProps {
  content1: string;
  content2: string;
}

export default function EstimatedSoundPowerDataTable({ estimatedSoundData, t }: any) {
  const [estimatedSoundDBA, setEstimatedSoundDBA] = useState(0);

  useEffect(() => {
    if (estimatedSoundData[0].content2 === 0) {
      setEstimatedSoundDBA(0);
    } else {
      const dBA = dBAF(estimatedSoundData, "content2");
      setEstimatedSoundDBA(dBA);
    }
  }, [estimatedSoundData]);

  const renderTdItem = (productType: keyof estimatedSoundProps) => {
    return estimatedSoundData
      .filter((data: any) => data.content1 != "Overall")
      .map((item: estimatedSoundProps, index: number) => {
        return (
          // 반응형
          <td
            key={"estimatedSoundDummyData-" + index}
            className={`tableTd w-[7.813rem] !h-[1.875rem] ${
              item.content1 ? "!font-LGSMHATSB" : ""
            }`}
          >
            {productType === "content1"
              ? item.content1
              : index === productType.length
              ? ""
              : Number(item.content2).toFixed(1)}
          </td>
        );
      });
  };

  return (
    <>
      {/* 반응형 */}
      <table className={"mobile:hidden"}>
        <caption className={"!text-right !mb-2 !font-LGSMHATR !text-[0.625rem] !leading-3"}>
          <span className="!text-right !mb-2 !font-LGSMHATR !text-[0.625rem] mr-[5rem] !leading-3">
            Unit : dB
          </span>
          <span className="!text-right !mb-2 !font-LGSMHATR !text-[0.625rem] !leading-3">
            Unit : dB(A)
          </span>
        </caption>
        <thead>
          <tr>
            <th colSpan={9} className={"tableTh"}>
              <span className={"font-LGSMHATSB text-[0.75rem] leading-[1.125rem] pl-[8rem]"}>
                {t("NOISE_0069")}
              </span>
            </th>
            <td className="w-5"> </td>
            <th colSpan={1} className={"tableTh"}>
              <span className={"font-LGSMHATSB text-[0.75rem] leading-[1.125rem]"}></span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={"tableTd w-[12.5rem] bg-gray_100"} rowSpan={2}>
              {t("NOISE_0012")}
            </td>
            {renderTdItem("content1")}
            <td className="w-5"> </td>
            <td className="tableTd w-[7.813rem] !h-[1.875rem] !font-LGSMHATSB">Overall</td>
          </tr>
          <tr>
            {renderTdItem("content2")}
            <td className="w-5"> </td>
            <td className="tableTd w-[7.813rem] !h-[1.875rem] !font-LGSMHATSB">
              {Number(estimatedSoundDBA).toFixed(1)}
            </td>
          </tr>
          {/* <tr>
            <td className={"tableTd bg-gray_100 !h-[1.875rem]"}>{t("NOISE_0018")} (dB(A))</td>
            <td className={"tableTd !h-[1.875rem]"}>{Number(estimatedSoundDBA).toFixed(1)}</td>
          </tr> */}
        </tbody>
      </table>
      {/* 반응형 */}
      <div className={"pc:hidden tablet:hidden flex flex-col gap-[1.875rem]"}>
        <div
          className={
            "h-[2.5rem] bg-gray_100 flex items-center justify-between w-[calc(100%+2rem)] mx-[-1rem] px-[1rem]"
          }
        >
          <p className={"font-LGSMHATB text-gray_700 text-[0.875rem]"}>
            <span className={"font-LGSMHATSB text-[0.875rem]"}> {t("NOISE_0069")}</span>
          </p>
          <p className={"text-[0.625rem] text-gray_700"}>Unit : dB</p>
        </div>
        <div className={"flex flex-col gap-[0.75rem]"}>
          <div
            className={`text-[0.875rem] leading-[1.125rem] font-LGSMHATB text-gray_700 text-left`}
          >
            {t("NOISE_0012")}
          </div>
          <div className={"flex flex-col gap-[1.5rem]"}>
            <table className={"table-fixed"}>
              <tbody>
                {estimatedSoundData
                  .filter((data: any) => data.content1 != "Overall")
                  .map((item: any, index: number) => {
                    if (index % 2 !== 0) {
                      return null;
                    }

                    return (
                      <tr key={index}>
                        <th className={`tableTh`}>{item.content1}</th>
                        <td className={`tableTd`}>{Number(item.content2).toFixed(1)}</td>
                        {index + 1 < estimatedSoundData.length && (
                          <>
                            <th className={`tableTh`}>{estimatedSoundData[index + 1]?.content1}</th>
                            <td className={`tableTd`}>
                              {Number(estimatedSoundData[index + 1]?.content2).toFixed(1)}
                            </td>
                          </>
                        )}
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            <table className={"table-fixed "}>
              <caption className={"!text-right !mb-2 !font-LGSMHATR !text-[0.625rem] !leading-3"}>
                <span className="!text-right !mb-2 !font-LGSMHATR !text-[0.625rem] !leading-3">
                  Unit : dB(A)
                </span>
              </caption>
              <tbody>
                <tr>
                  <th className={"tableTh !font-LGSMHATR !text-[#000]"}>{t("NOISE_0018")}</th>
                  <td className={"tableTd"}>{Number(estimatedSoundDBA).toFixed(1)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
