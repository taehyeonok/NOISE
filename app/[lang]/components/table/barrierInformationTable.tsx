import { barrierInfoTableDummyData } from "@/app/[lang]/constants/const";

interface barrierInformationProps {
  content1: string;
  content2: number;
}

export default function BarrierInformationTable() {
  const renderTdItem = (tagType: string, contentType: keyof barrierInformationProps) => {
    return barrierInfoTableDummyData.map((item: barrierInformationProps, index: number) => {
      const Tag = tagType === "td" ? "td" : "th";
      const Content = contentType === "content1" ? item.content1 : item.content2;
      const TagStyle = tagType === "td" ? "tableTd" : "tableTh";

      return (
        <Tag key={"barrierInfoTableDummyData-" + index} className={`${TagStyle}`}>
          {Content}
        </Tag>
      );
    });
  };

  return (
    <>
      {/* 반응형 */}
      <table className={"w-[62.5rem] table-fixed mobile:hidden"}>
        <thead>
          <tr>{renderTdItem("th", "content1")}</tr>
        </thead>
        <tbody>
          <tr>{renderTdItem("td", "content2")}</tr>
        </tbody>
      </table>
      {/* 반응형 */}
      <table className={"pc:hidden tablet:hidden table-fixed"}>
        <tbody>
          {barrierInfoTableDummyData.map((item, index: number) => {
            if (index % 2 !== 0) {
              return null;
            }
            return (
              <tr key={"barrierInfoTableDummyData-" + index}>
                <th className={`tableTh`}>{item.content1}</th>
                <td className={`tableTd`}>{item.content2} dB</td>
                {index + 1 < barrierInfoTableDummyData.length && (
                  <>
                    <th className={`tableTh`}>{barrierInfoTableDummyData[index + 1]?.content1}</th>
                    <td className={`tableTd`}>
                      {barrierInfoTableDummyData[index + 1]?.content2} dB
                    </td>
                  </>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
