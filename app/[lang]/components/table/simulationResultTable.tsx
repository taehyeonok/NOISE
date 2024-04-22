import {
  detailInformationDummyData,
  soundPressureReceiverDummyData,
} from "@/app/[lang]/constants/const";
import React from "react";

export default function SimulationResultTable() {
  {
    /* 반응형 */
  }
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
                Detail information
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
            {detailInformationDummyData.data.map((row, index) => (
              <tr key={index}>
                <td className={"tableTd noLine bg-gray_100"}>{row.title}</td>
                {row.content.map((item, idx) => (
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
                Sound pressure level (at receiver)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={2} className={"tableTd noLine bg-gray_100 w-[8.75rem] "}>
                Octave Band
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
              {soundPressureReceiverDummyData.data.map((data, index) => {
                const cellTypeStyle = data.titleOfRow ? "bg-gray_100" : "w-[4.5rem]";
                const noLineStyle = data.noLine ? "noLine" : "";
                return (
                  <td key={index} className={`tableTd ${cellTypeStyle} ${noLineStyle}`}>
                    {data.content}
                  </td>
                );
              })}
            </tr>
            <tr>
              <td className={"tableTd bg-gray_100 noLine"}>Overall</td>
              <td className={"tableTd"}>46.1</td>
              <td className={"!pt-3 !pb-0 !pl-1 !border-0 !text-[0.625rem] !text-left"}>
                Unit : dB(A)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* 반응형 */}
      <div className={"pc:hidden tablet:hidden flex flex-col gap-[0.938rem]"}>
        {renderMobileTableItem(
          "Detail information",
          detailInformationDummyData.data.map((item, index) => (
            <div key={"detailInformationDummyData-" + index} className={"flex flex-col gap-[1rem]"}>
              <p className={"leading-[1.125rem] text-[0.875rem] font-LGSMHATB text-left"}>
                {item.title}
              </p>
              <table className={"table-fixed"}>
                <tbody>
                  {item.content.map((contentItem, contentIndex) => {
                    if (contentIndex % 2 === 0) {
                      return (
                        <tr key={contentIndex}>
                          <td className={"tableTh"}>
                            {detailInformationDummyData.headings[contentIndex]?.content}
                          </td>
                          <td className={"tableTd"}>{contentItem.content}</td>
                          <td className={"tableTh"}>
                            {detailInformationDummyData.headings[contentIndex + 1]?.content}
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
          "Sound pessure level (at receiver)",
          <>
            <div className={"flex flex-col gap-[1rem]"}>
              <p className={"leading-[1.125rem] text-[0.875rem] font-LGSMHATB text-left"}>
                Octave Band
              </p>
              <table className={"table-fixed"}>
                <tbody>
                  {soundPressureReceiverDummyData.headings.map((contentItem, contentIndex) => {
                    if (contentIndex % 2 === 0) {
                      return (
                        <tr key={contentIndex}>
                          <td className={"tableTh"}>
                            {soundPressureReceiverDummyData.headings[contentIndex]?.content}
                          </td>
                          <td className={"tableTd"}>{contentItem.content}</td>
                          <td className={"tableTh"}>
                            {soundPressureReceiverDummyData.headings[contentIndex + 1]?.content}
                          </td>
                          <td className={"tableTd"}>
                            {soundPressureReceiverDummyData.data[contentIndex + 1]?.content}
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
                  <td className={"tableTh !font-LGSMHATR !text-[#000]"}>Overall</td>
                  <td className={"tableTd"}>46.1</td>
                </tr>
              </tbody>
            </table>
          </>
        )}
      </div>
    </>
  );
}
