import {
  dBAF,
  detailInformationDummyData,
  soundPressureReceiverDummyData,
} from "@/app/[lang]/constants/const";
import { cloneObject } from "@/app/utils/utils";
import { useEffect, useState } from "react";

export default function SimulationResultTable({ simulateData, detailData, t }: any) {
  {
    /* 반응형 */
  }
  const [simulateOverallData, setSimulateOverallData] = useState(0);
  const [mSoundPressureReceiver, setMSoundPressureReceiver] = useState(
    soundPressureReceiverDummyData
  );
  useEffect(() => {
    const dBA = dBAF(simulateData.data, "content");
    setSimulateOverallData(dBA);

    const copyMSoundPressure = cloneObject(mSoundPressureReceiver);

    copyMSoundPressure.data.map((item: any, index: number) => {
      item.content = simulateData.data[index].content;
    });
    setMSoundPressureReceiver(copyMSoundPressure);
  }, [simulateData]);

  const renderMobileTableItem = (title: string, children: React.ReactNode) => {
    return (
      <div className={"flex flex-col gap-[1.813rem]"}>
        <div
          className={
            "flex items-center justify-between bg-gray_100 h-[2.5rem] w-[calc(100%+2rem)] mx-[-1rem] px-[1rem]"
          }
        >
          <p className={"text-gray_700 text-[0.875rem] font-LGSMHATB"}>{title}</p>
          <p className={"text-gray_700 text-[0.625rem]"}>Unit : dB</p>
        </div>
        <div className={"flex flex-col gap-[1.5rem]"}>{children}</div>
      </div>
    );
  };

  return (
    <>
      {/* 반응형 */}
      <div className={"flex flex-col gap-7 mobile:hidden"}>
        <table>
          <caption className={"!text-right !mb-2 !font-LGSMHATR !text-[0.625rem] !leading-3"}>
            Unit : dB
          </caption>
          <thead>
            <tr>
              <th colSpan={9} className={"tableTh noLine"}>
                {t("NOISE_0013")}
              </th>
            </tr>
            <tr>
              <th className={"tableTh noLine w-[8.75rem] "}></th>
              {detailInformationDummyData.headings.map((heading, index) => (
                <th key={index} className={`tableTh w-[4.5rem] ${heading.noLine ? "noLine" : ""}`}>
                  {heading.content}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {detailData.data.map((row: any, index: number) => (
              <tr key={index}>
                <td className={"tableTd noLine bg-gray_100"}>{t(row.title)}</td>
                {row.content.map((item: any, idx: number) => (
                  <td key={idx} className={`tableTd ${item.noLine ? "noLine" : ""}`}>
                    {item.content}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <table>
          <caption className={"!text-right !mb-2 !font-LGSMHATR !text-[0.625rem] !leading-3"}>
            Unit : dB
          </caption>
          <thead>
            <tr>
              <th colSpan={9} className={"tableTh noLine"}>
                {t("NOISE_0017")}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={2} className={"tableTd noLine bg-gray_100 w-[8.75rem] "}>
                {t("NOISE_0012")}
              </td>
              {soundPressureReceiverDummyData.headings.map((heading, index) => {
                const noLineStyle = heading.noLine ? "noLine" : "";
                return (
                  <td key={index} className={`tableTd !font-LGSMHATSB ${noLineStyle}`}>
                    {heading.content}
                  </td>
                );
              })}
            </tr>
            <tr>
              {simulateData.data.map((data: any, index: any) => {
                const cellTypeStyle = data.titleOfRow ? "bg-gray_100" : "w-[4.5rem]";
                const noLineStyle = data.noLine ? "noLine" : "";
                return (
                  <td key={index} className={`tableTd ${cellTypeStyle} ${noLineStyle}`}>
                    {Number(data.content).toFixed(1)}
                  </td>
                );
              })}
            </tr>
            <tr>
              <td className={"tableTd bg-gray_100 noLine font-bold"}>{t("NOISE_0018")} (dB(A))</td>
              <td className={"tableTd"}>{Number(simulateOverallData).toFixed(1)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* 반응형 */}
      <div className={"pc:hidden tablet:hidden flex flex-col gap-[0.938rem]"}>
        {renderMobileTableItem(
          t("NOISE_0013"),
          detailData.data.map((item: any, index: number) => (
            <div key={"detailInformationDummyData-" + index} className={"flex flex-col gap-[1rem]"}>
              <p className={"leading-[1.125rem] text-[0.875rem] font-LGSMHATB text-left"}>
                {t(item.title)}
              </p>
              <table className={"table-fixed"}>
                <tbody>
                  {item.content.map((contentItem: any, contentIndex: number) => {
                    if (contentIndex % 2 === 0) {
                      return (
                        <tr key={contentIndex}>
                          <td className={"tableTh"}>
                            {detailData.headings[contentIndex]?.content}
                          </td>
                          <td className={"tableTd"}>{contentItem.content}</td>
                          <td className={"tableTh"}>
                            {detailData.headings[contentIndex + 1]?.content}
                          </td>
                          <td className={"tableTd"}>{item.content[contentIndex + 1]?.content}</td>
                        </tr>
                      );
                    }
                    return null;
                  })}
                </tbody>
              </table>
            </div>
          ))
        )}
        {renderMobileTableItem(
          t("NOISE_0017"),
          <>
            <div className={"flex flex-col gap-[1rem]"}>
              <p className={"leading-[1.125rem] text-[0.875rem] font-LGSMHATB text-left"}>
                {t("NOISE_0012")}
              </p>
              <table className={"table-fixed"}>
                <tbody>
                  {mSoundPressureReceiver.headings.map((contentItem, contentIndex) => {
                    if (contentIndex % 2 === 0) {
                      return (
                        <tr key={contentIndex}>
                          <td className={"tableTh"}>
                            {mSoundPressureReceiver.headings[contentIndex]?.content}
                          </td>
                          <td className={"tableTd"}>
                            {Number(mSoundPressureReceiver.data[contentIndex]?.content).toFixed(1)}
                          </td>
                          <td className={"tableTh"}>
                            {mSoundPressureReceiver.headings[contentIndex + 1]?.content}
                          </td>
                          <td className={"tableTd"}>
                            {Number(mSoundPressureReceiver.data[contentIndex + 1]?.content).toFixed(
                              1
                            )}
                          </td>
                        </tr>
                      );
                    }
                    return null;
                  })}
                </tbody>
              </table>
            </div>
            <table className={"table-fixed"}>
              <tbody>
                <tr>
                  <td className={"tableTh !font-LGSMHATR !text-[#000] font-bold"}>
                    {t("NOISE_0018")} (dB(A))
                  </td>
                  <td className={"tableTd"}>{Number(simulateOverallData).toFixed(1)}</td>
                </tr>
              </tbody>
            </table>
          </>
        )}
      </div>
    </>
  );
}
