import { dBAF } from "../../constants/const";
import CCustomInput from "../_atoms/cCustomInput";

export default function SoundSpecDataTable({
  soundPressureLevel,
  soundPowerLevel,
  setSoundPowerLevel,
  projectInfoData,
  isBackData,
  t,
}: {
  soundPressureLevel: any;
  soundPowerLevel: any;
  setSoundPowerLevel: Function;
  projectInfoData: any;
  isBackData: boolean;
  t: any;
}) {
  const renderTableBox = (data: any[], title: string, children: JSX.Element) => {
    return (
      <table>
        <thead>
          <tr>
            <th colSpan={10} className={"tableTh"}>
              {/* Data(Octaved band) */}
              <span className={"text-[0.75rem] leading-[1.125rem] !font-LGSMHATR"}>{title}</span>
            </th>
          </tr>
          <tr>
            <th className={"tableTh w-[12.5rem]"}>Data type</th>
            {data.map((item, index: number) => (
              <th className={`tableTh w-[7.813rem]`} key={index}>
                {item.dataType}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    );
  };
  const renderTdItem = (title: string, data: any[], productType: keyof any) => {
    return (
      <tr className={"mobile:hidden"} key={title}>
        <td className={`tableTd bg-gray_100`}>{title}</td>
        {data
          .filter((key, i) => i != 9)
          .map((item, index: number) => (
            <td className={"tableTd"} key={`${item.dataType}-${index}`}>
              {title == `Product ${productType as any} / Type : PWL` &&
              data[9][productType] == "Manual" ? (
                item.dataType == "Overall (dB(A))" ? (
                  Number(Number(dBAF(soundPowerLevel, productType as string)).toFixed(1))
                ) : (
                  <CCustomInput
                    type="number"
                    classList={"tableTd w-full"}
                    value={
                      isBackData
                        ? projectInfoData.soundPowerLevel[index][productType]
                        : item[productType]
                    }
                    onChange={(changeValue: any) => {
                      item[productType] = Number(Number(changeValue).toFixed(1));
                      data[8][productType] = Number(
                        Number(dBAF(soundPowerLevel, productType as string)).toFixed(1)
                      );
                      setSoundPowerLevel([...soundPowerLevel]);
                    }}
                    required
                    validMessage={{ message: t("NOISE_0006"), format: [t("MULTIV_1261")] }}
                  />
                )
              ) : (
                Number(item[productType]).toFixed(1)
              )}
            </td>
          ))}
      </tr>
    );
  };
  {
    /* 반응형 */
  }
  const renderMobileTableBox = (title: string, children: JSX.Element) => {
    return (
      <div className={"pc:hidden tablet:hidden flex flex-col gap-[1.875rem]"}>
        <div
          className={
            "h-[2.5rem] bg-gray_100 flex items-center justify-between w-[calc(100%+2rem)] mx-[-1rem] px-[1rem]"
          }
        >
          <p className={"font-LGSMHATB text-gray_700 text-[0.875rem]"}>
            {/* Data(Octaved band) */}
            <span className={"font-LGSMHATSB text-[0.875rem]"}>{title}</span>
          </p>
          <p className={"text-[0.625rem] text-gray_700"}>Unit : dB</p>
        </div>
        <div className={"flex flex-col gap-[1.5rem]"}>{children}</div>
      </div>
    );
  };
  {
    /* 반응형 */
  }
  const renderMobileTableItem = (title: string, data: any[], productType: any) => {
    const lastData =
      title == `Product ${productType as any} / Type : PWL`
        ? data[data.length - 2]
        : data[data.length - 1];
    return (
      <div className={"pc:hidden tablet:hidden flex flex-col gap-[0.75rem]"}>
        <div className={`text-[0.875rem] leading-[1.125rem] font-LGSMHATB text-gray_700 text-left`}>
          {title}
        </div>
        <div className={"flex flex-col gap-[1.5rem]"}>
          <table className={"table-fixed"}>
            <tbody>
              {data
                .slice(0, -1)
                .filter((k, i) => i != 8)
                .map((item, index: number) => {
                  const tempData = data[index + 1];
                  if (index % 2 !== 0) {
                    return null;
                  }
                  return (
                    <tr key={index}>
                      <th className={`tableTh`}>{item.dataType}</th>
                      <td className={`tableTd`}>
                        {title == `Product ${productType as any} / Type : PWL` &&
                        data[9][productType] == "Manual" ? (
                          item.dataType == "Overall (dB(A))" ? (
                            data[0][productType] == "" ? (
                              0
                            ) : (
                              Number(
                                Number(dBAF(soundPowerLevel, productType as string)).toFixed(1)
                              )
                            )
                          ) : (
                            <CCustomInput
                              type="number"
                              classList={"tableTd w-full"}
                              value={
                                isBackData
                                  ? projectInfoData.soundPowerLevel[index][productType]
                                  : item[productType]
                              }
                              onChange={(changeValue: any) => {
                                item[productType] = Number(Number(changeValue).toFixed(1));
                                data[8][productType] = Number(
                                  Number(dBAF(soundPowerLevel, productType as string)).toFixed(1)
                                );
                                setSoundPowerLevel([...soundPowerLevel]);
                              }}
                              required
                              validMessage={{
                                message: t("NOISE_0006"),
                                format: [t("MULTIV_1261")],
                              }}
                            />
                          )
                        ) : (
                          Number(item[productType]).toFixed(1)
                        )}
                        {/* Number(item[productType]).toFixed(1) */}
                      </td>
                      {index + 1 < data.length && (
                        <>
                          <th className={`tableTh`}>{tempData?.dataType}</th>
                          <td className={`tableTd`}>
                            {title == `Product ${productType as any} / Type : PWL` &&
                            data[9][productType] == "Manual" ? (
                              item.dataType == "Overall (dB(A))" ? (
                                data[0][productType] == "" ? (
                                  0
                                ) : (
                                  Number(
                                    Number(dBAF(soundPowerLevel, productType as string)).toFixed(1)
                                  )
                                )
                              ) : (
                                <CCustomInput
                                  type="number"
                                  classList={"tableTd w-full"}
                                  value={
                                    isBackData
                                      ? projectInfoData.soundPowerLevel[index + 1][productType]
                                      : tempData[productType]
                                  }
                                  onChange={(changeValue: any) => {
                                    tempData[productType] = Number(Number(changeValue).toFixed(1));
                                    data[8][productType] = Number(
                                      Number(dBAF(soundPowerLevel, productType as string)).toFixed(
                                        1
                                      )
                                    );
                                    setSoundPowerLevel([...soundPowerLevel]);
                                  }}
                                  required
                                  validMessage={{
                                    message: t("NOISE_0006"),
                                    format: [t("MULTIV_1261")],
                                  }}
                                />
                              )
                            ) : (
                              Number(tempData[productType]).toFixed(1)
                            )}
                            {/* {tempData ? Number(tempData[productType]).toFixed(1) : ""} */}
                          </td>
                        </>
                      )}
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <table className={"table-fixed "}>
            <tbody>
              <tr>
                <th className={"tableTh !font-LGSMHATR !text-[#000]"}>
                  {title == `Product ${productType as any} / Type : PWL`
                    ? data[data.length - 2]?.dataType
                    : data[data.length - 1]?.dataType}
                </th>
                <td className={"tableTd"}>{lastData ? lastData[productType] : ""}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* 반응형 */}
      <div
        className={"flex flex-col gap-[1.25rem] mobile:w-full mobile:gap-[0.938rem] mobile:hidden"}
      >
        {renderTableBox(
          soundPressureLevel,
          t("NOISE_0068"),
          <>
            {Object.keys(soundPressureLevel[0]).map((key, index) => {
              if (index < Object.keys(soundPressureLevel[0]).length - 1) {
                return renderTdItem(`Product ${key} / Type : SPL`, soundPressureLevel, key);
              }
            })}
          </>
        )}
        {renderTableBox(
          soundPowerLevel.filter((item: any, index: number) => index !== 9),
          t("NOISE_0069"),
          <>
            {Object.keys(soundPowerLevel[0]).map((key, index) => {
              if (index < Object.keys(soundPowerLevel[0]).length - 1) {
                return renderTdItem(`Product ${key} / Type : PWL`, soundPowerLevel, key);
              }
            })}
          </>
        )}
      </div>
      <div className={"pc:hidden tablet:hidden flex flex-col gap-[0.875rem]"}>
        {renderMobileTableBox(
          t("NOISE_0068"),
          <>
            {Object.keys(soundPressureLevel[0]).map((key, index) => {
              if (index < Object.keys(soundPressureLevel[0]).length - 1) {
                return (
                  <div key={index}>
                    {renderMobileTableItem(`Product ${key} / Type : SPL`, soundPressureLevel, key)}
                  </div>
                );
              }
            })}
            {/* {renderMobileTableItem("Product 1 / Type : SPL", soundPressureLevel, "product1")} */}
            {/*
            {renderMobileTableItem(
              "Product 2 / Type : SPL",
              soundPressureLevel,
              "product2",
              soundPressureLevelData
            )} */}
          </>
        )}
        {renderMobileTableBox(
          t("NOISE_0069"),
          <>
            {Object.keys(soundPowerLevel[0]).map((key, index) => {
              if (index < Object.keys(soundPowerLevel[0]).length - 1) {
                return (
                  <div key={index}>
                    {renderMobileTableItem(`Product ${key} / Type : PWL`, soundPowerLevel, key)}
                  </div>
                );
              }
            })}
            {/* {renderMobileTableItem(
              "Product 3 / Type : SPL",
              soundPowerLevelDummyData,
              "product3",
              soundPowerLevelData
            )} */}
          </>
        )}
      </div>
    </>
  );
}
