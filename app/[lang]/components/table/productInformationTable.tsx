import Image from "next/image";
import IC_ROUND_MINUS from "@/app/assets/icons/ic_round_minus.svg";
import React, { useEffect, useState } from "react";
import CCustomInput from "@/app/[lang]/components/_atoms/cCustomInput";
import { log } from "node:util";
import CSelect from "@/app/[lang]/components/_atoms/cSelect";
import CImageButton from "@/app/[lang]/components/_atoms/cImageButton";
import { ProductItem } from "@/@types/components";
import { cloneObject } from "@/app/utils/utils";

interface ProductInformationTableProps {
  data: ProductItem[];
  setData: Function;
  removeTableRow: Function;
  t: any;
  productTypeData: string[];
  setProductTypeData: Function;
  functionNoiseData: string[];
  setFunctionNoiseData: Function;
  stepData: string[];
  setStepData: Function;
  soundPressureLevel: object[];
  soundPowerLevel: object[];
  projectInfoData: any;
}

export default function ProductInformationTable({
  data,
  setData,
  removeTableRow,
  t,
  productTypeData,
  setProductTypeData,
  functionNoiseData,
  setFunctionNoiseData,
  stepData,
  setStepData,
  soundPressureLevel,
  soundPowerLevel,
  projectInfoData,
}: ProductInformationTableProps) {
  const [tableData, setTableData] = useState<ProductItem[]>(data);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1080);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setTableData(data);
  }, [data]);
  {
    /* 반응형 */
  }
  const renderMobileProductInformationTable = () => {
    const renderTableItem = (title: string, children: React.ReactNode) => {
      return (
        <div className={"flex items-center justify-between"}>
          <p className={"text-[0.875rem] leading-[1.125rem] font-LGSMHATSB text-gray_400"}>
            {title}
          </p>
          {children}
        </div>
      );
    };
    return (
      <div className={"flex flex-col gap-[1.25rem] pc:hidden tablet:hidden"}>
        {tableData.map((item, index) => {
          return (
            <div key={item.id} className={"flex flex-col gap-[1rem]"}>
              <div className={"bg-gray_100 flex items-center justify-between p-[0.688rem_1rem]"}>
                <p className={"text-[0.875rem] leading-[1.125rem] font-LGSMHATSB"}>
                  No.{Number(index) + 1}
                </p>
                {index !== 0 && (
                  // 반응형
                  <CImageButton
                    image={IC_ROUND_MINUS}
                    title={"delete row"}
                    titleHidden
                    onClick={() => {
                      removeTableRow(item.id);
                    }}
                  />
                )}
              </div>
              {renderTableItem(
                t("product_type"),
                <CSelect
                  key={`productType_${item.id}`}
                  id={`productType_${item.id}`}
                  code="productType"
                  name={`productType_${item.id}`}
                  title={item.productType}
                  selected
                  className={"mobileTableSelectStyle"}
                  onChange={(changedValue: { title: string; value: string }) => {
                    data[index]!.productType = changedValue.title;
                    data[index]!.modelName = "";
                    data[index]!.qty = "1";
                    data[index]!.function = "";
                    data[index]!.step = "";
                    data[index]!.capacity = "%";
                    setData([...data]);
                    //Sound Spec Data reset
                    soundPressureLevel.map((deleteItem: any) => delete deleteItem[item.id]);
                    soundPowerLevel.map((deleteItem: any) => delete deleteItem[item.id]);

                    if (item.productType != "Manual") {
                      const copyProduct = cloneObject(productTypeData);
                      copyProduct[item.id] = changedValue.title;
                      setProductTypeData(copyProduct);

                      const copyFunction = cloneObject(functionNoiseData);
                      copyFunction[item.id] = changedValue.value.slice(1).split("/");
                      projectInfoData.functionNoise = copyFunction;
                      setFunctionNoiseData(copyFunction);
                    }
                  }}
                  data={item.productType}
                  number={item.id}
                  validMessage={{ message: t("NOISE_0002"), format: [t("product_type")] }}
                  required
                />
              )}
              {renderTableItem(
                t("COMMON_509"),
                <CSelect
                  code="modelName"
                  name={`modelName_${item.id}`}
                  title={item.modelName}
                  selected
                  className={"mobileTableSelectStyle"}
                  onChange={(changedValue: { title: string; value: string }) => {
                    data[index]!.modelName = changedValue.title;
                    setData([...data]);
                  }}
                  params={{ productTypeData: productTypeData[item.id] }}
                  data={item.modelName}
                  number={item.id}
                  validMessage={{ message: t("NOISE_0002"), format: [t("COMMON_509")] }}
                  required
                  disabled={item.productType == "Manual" ? true : false}
                />
              )}
              {renderTableItem(
                t("COMMON_563") + " (EA)",
                <CCustomInput
                  type={"number"}
                  placeholder={"0"}
                  value={1}
                  classList={"w-[12.5rem]"}
                  onChange={(changedValue: string) => {
                    data[index]!.qty = changedValue;
                    setData([...data]);
                  }}
                  validMessage={{ message: t("NOISE_0006"), format: [t("NOISE_0003")] }}
                  required
                  disabled={item.productType == "Manual" ? true : false}
                />
              )}
              {renderTableItem(
                t("NOISE_0041"),
                <CSelect
                  id={`functionNoise_${item.id}`}
                  key={`functionNoise_${item.id}`}
                  code="functionNoise"
                  name={`functionNoise_${item.id}`}
                  title={item.function}
                  selected
                  className={"mobileTableSelectStyle"}
                  onChange={(changedValue: { title: string; value: string }) => {
                    //Sound Spec Data reset
                    soundPressureLevel.map((deleteItem: any) => delete deleteItem[item.id]);
                    soundPowerLevel.map((deleteItem: any) => delete deleteItem[item.id]);

                    data[index]!.function = changedValue.title;
                    data[index]!.step = "";
                    data[index]!.capacity = "%";
                    setData([...data]);

                    const copyStep = cloneObject(stepData);
                    copyStep[item.id] = changedValue.value.slice(1).split("/");
                    setStepData(copyStep);
                    projectInfoData.step = copyStep;
                  }}
                  data={item.function}
                  params={{ functionData: functionNoiseData[item.id] }}
                  number={item.id}
                  validMessage={{ message: t("NOISE_0002"), format: [t("NOISE_0004")] }}
                  required
                  disabled={item.productType == "Manual" ? true : false}
                />
              )}
              {renderTableItem(
                t("NOISE_0005"),
                <CSelect
                  code="step"
                  name={`step_${item.id}`}
                  title={item.step}
                  selected
                  className={"mobileTableSelectStyle"}
                  onChange={(changedValue: { title: string; value: string }) => {
                    data[index]!.step = changedValue.title;
                    setData([...data]);
                  }}
                  params={{ stepData: stepData[item.id] }}
                  data={item.step}
                  number={item.id}
                  validMessage={{ message: t("RC_0060"), format: [t("NOISE_0005")] }}
                  required
                  disabled={item.productType == "Manual" ? true : false}
                />
              )}
              {renderTableItem(
                t("COMMON_524") + " (%)",
                <CCustomInput
                  type={"text"}
                  placeholder={"0"}
                  value={item.capacity}
                  classList={"w-[12.5rem]"}
                  disabled
                />
              )}
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <>
      {/* 반응형 */}
      <table className={"mobile:hidden"}>
        <thead>
          <tr>
            <th className={`tableTh w-10`}>No.</th>
            <th className={`tableTh w-[17.5rem]`}>{t("product_type")}</th>
            <th className={`tableTh w-[17.5rem]`}>{t("COMMON_509")}</th>
            <th className={`tableTh w-[7.5rem]`}>{t("COMMON_563")}(EA)</th>
            <th className={`tableTh w-[12.5rem]`}>{t("NOISE_0041")}</th>
            <th className={`tableTh w-[7.5rem]`}>{t("NOISE_0005")}</th>
            <th className={`tableTh w-[7.5rem]`}>{t("COMMON_524")} (%)</th>
            <th className={`tableTh w-10`}>Del</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => {
            return (
              <tr key={item.id}>
                <td className={"tableTd"}>{item.id}</td>
                <td className={"tableTd"}>
                  <CSelect
                    key={`productType_${item.id}`}
                    id={`productType_${item.id}`}
                    code="productType"
                    name={`productType_${item.id}`}
                    title={item.productType}
                    selected
                    classList={"tableSelectStyle"}
                    onChange={(changedValue: { title: string; value: string }) => {
                      data[index]!.productType = changedValue.title;
                      data[index]!.modelName = "";
                      data[index]!.qty = "1";
                      data[index]!.function = "";
                      data[index]!.step = "";
                      data[index]!.capacity = "%";
                      setData([...data]);
                      //Sound Spec Data reset
                      soundPressureLevel.map((deleteItem: any) => delete deleteItem[item.id]);
                      soundPowerLevel.map((deleteItem: any) => delete deleteItem[item.id]);

                      if (item.productType != "Manual") {
                        const copyProduct = cloneObject(productTypeData);
                        copyProduct[item.id] = changedValue.title;
                        setProductTypeData(copyProduct);

                        const copyFunction = cloneObject(functionNoiseData);
                        copyFunction[item.id] = changedValue.value.slice(1).split("/");
                        projectInfoData.functionNoise = copyFunction;
                        setFunctionNoiseData(copyFunction);
                      }
                    }}
                    data={item.productType}
                    number={item.id}
                    validMessage={{ message: t("NOISE_0002"), format: [t("product_type")] }}
                    required
                  />
                </td>
                <td className={"tableTd"}>
                  <CSelect
                    key={`modelName_${item.id}`}
                    code="modelName"
                    name={`modelName_${item.id}`}
                    title={item.modelName}
                    selected
                    classList={"tableSelectStyle"}
                    onChange={(changedValue: { title: string; value: string }) => {
                      data[index]!.modelName = changedValue.title;
                      setData([...data]);
                    }}
                    params={{ productTypeData: productTypeData[item.id] }}
                    data={item.modelName}
                    number={item.id}
                    validMessage={{ message: t("NOISE_0002"), format: [t("COMMON_509")] }}
                    required
                    disabled={item.productType == "Manual" ? true : false}
                  />
                </td>
                <td className={"tableTd"}>
                  <CCustomInput
                    key={`qty_${item.id}`}
                    name={`qty_${item.id}`}
                    type={"number"}
                    placeholder={"0"}
                    value={1}
                    classList={"w-full px-3 !h-7"}
                    onChange={(changedValue: string) => {
                      data[index]!.qty = changedValue;
                      setData([...data]);
                    }}
                    disabled={item.productType == "Manual" ? true : false}
                    validMessage={{ message: t("NOISE_0006"), format: [t("NOISE_0003")] }}
                    required
                  />
                </td>
                <td className={"tableTd"}>
                  <CSelect
                    key={`functionNoise_${item.id}`}
                    id={`functionNoise_${item.id}`}
                    code="functionNoise"
                    name={`functionNoise_${item.id}`}
                    title={item.function}
                    selected
                    classList={"tableSelectStyle"}
                    onChange={(changedValue: { title: string; value: string }) => {
                      //Sound Spec Data reset
                      soundPressureLevel.map((deleteItem: any) => delete deleteItem[item.id]);
                      soundPowerLevel.map((deleteItem: any) => delete deleteItem[item.id]);

                      data[index]!.function = changedValue.title;
                      data[index]!.step = "";
                      data[index]!.capacity = "%";
                      setData([...data]);

                      const copyStep = cloneObject(stepData);
                      copyStep[item.id] = changedValue.value.slice(1).split("/");
                      setStepData(copyStep);
                      projectInfoData.step = copyStep;
                    }}
                    data={item.function}
                    params={{ functionData: functionNoiseData[item.id] }}
                    number={item.id}
                    validMessage={{ message: t("NOISE_0002"), format: [t("NOISE_0004")] }}
                    required
                    disabled={item.productType == "Manual" ? true : false}
                  />
                </td>
                <td className={"tableTd"}>
                  <CSelect
                    key={`step_${item.id}`}
                    id={`step_${item.id}`}
                    code="step"
                    name={`step_${item.id}`}
                    title={item.step}
                    selected
                    classList={"tableSelectStyle"}
                    onChange={(changedValue: { title: string; value: string }) => {
                      data[index]!.step = changedValue.title;
                      setData([...data]);
                    }}
                    params={{ stepData: stepData[item.id] }}
                    data={item.step}
                    number={item.id}
                    validMessage={{ message: t("RC_0060"), format: [t("NOISE_0005")] }}
                    required
                    disabled={item.productType == "Manual" ? true : false}
                  />
                </td>
                <td className={"tableTd"}>
                  <CCustomInput
                    key={`capacity_${item.id}`}
                    type={"text"}
                    name={`capacity_${item.id}`}
                    placeholder={"0"}
                    value={item.capacity}
                    classList={"w-full px-3 !h-7"}
                    disabled
                    onChange={(changedValue: { title: string; value: string }) => {
                      data[index]!.capacity = changedValue.title;
                      setData([...data]);
                    }}
                  />
                </td>
                <td className={"tableTd"}>
                  {index !== 0 && (
                    // 반응형
                    <CImageButton
                      classList={"mx-auto"}
                      image={IC_ROUND_MINUS}
                      title={"delete row"}
                      titleHidden
                      onClick={() => {
                        removeTableRow(item.id);
                      }}
                    />
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* 반응형 */}
      {isMobile && renderMobileProductInformationTable()}
    </>
  );
}
