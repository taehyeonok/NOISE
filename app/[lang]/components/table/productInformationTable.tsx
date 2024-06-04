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
  productTypeData: any;
  setProductTypeData: Function;
  functionNoiseData: any;
  setFunctionNoiseData: Function;
  setSoundPressureLevelData: Function;
  setSoundPowerLevelData: Function;
  soundPressureLevelData: any;
  soundPowerLevelData: any;
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
  setSoundPressureLevelData,
  setSoundPowerLevelData,
  soundPressureLevelData,
  soundPowerLevelData,
}: ProductInformationTableProps) {
  const [tableData, setTableData] = useState<ProductItem[]>(data);
  const [isMobile, setIsMobile] = useState(false);
  const [stepData, setStepData] = useState([]);

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
                "Product Type",
                <CSelect
                  id="productType"
                  code="productType"
                  name={`product_type_${index}`}
                  title={item.productType}
                  selected
                  className={"mobileTableSelectStyle"}
                />
              )}
              {renderTableItem(
                "Model Name",
                <CSelect
                  code="modelName"
                  name={`model_name_${index}`}
                  title={item.modelName}
                  selected
                  className={"mobileTableSelectStyle"}
                />
              )}
              {renderTableItem(
                "Qty(EA)",
                <CCustomInput
                  type={"number"}
                  placeholder={"0"}
                  value={item.qty}
                  classList={"w-[12.5rem]"}
                />
              )}
              {renderTableItem(
                "Function (Noise)",
                <CSelect
                  code="functionNoise"
                  name={`function_noise_${index}`}
                  title={item.function}
                  selected
                  className={"mobileTableSelectStyle"}
                />
              )}
              {renderTableItem(
                "Step",
                <CSelect
                  code="step"
                  name={`step_${index}`}
                  title={item.step}
                  selected
                  className={"mobileTableSelectStyle"}
                />
              )}
              {renderTableItem(
                "Capacity (%)",
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
            <th className={`tableTh w-[17.5rem]`}>Product Type</th>
            <th className={`tableTh w-[17.5rem]`}>Model Name</th>
            <th className={`tableTh w-[7.5rem]`}>Qty(EA)</th>
            <th className={`tableTh w-[12.5rem]`}>Function (Noise)</th>
            <th className={`tableTh w-[7.5rem]`}>Step</th>
            <th className={`tableTh w-[7.5rem]`}>Capacity (%)</th>
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
                    key={`product_type_${index}`}
                    id={"productType"}
                    code="productType"
                    name={`product_type_${index}`}
                    title={item.productType}
                    selected
                    classList={"tableSelectStyle"}
                    onChange={(changedValue: any) => {
                      data[index]!.productType = changedValue.title;
                      data[index]!.modelName = "";
                      data[index]!.qty = "1";
                      data[index]!.function = "";
                      data[index]!.step = "";
                      data[index]!.capacity = "%";
                      setData([...data]);
                      const deleteSoundPressure = cloneObject(soundPressureLevelData);
                      deleteSoundPressure.map((deleteItem: any) => delete deleteItem[item.id]);

                      const deleteSoundPower = cloneObject(soundPowerLevelData);
                      deleteSoundPower.map((deleteItem: any) => delete deleteItem[item.id]);

                      setSoundPressureLevelData(deleteSoundPressure);
                      setSoundPowerLevelData(deleteSoundPower);

                      const copyProduct = cloneObject(productTypeData);
                      copyProduct[index] = changedValue.title;
                      setProductTypeData(copyProduct);

                      const copyFunction = cloneObject(functionNoiseData);
                      copyFunction[index] = changedValue.value.slice(1).split("/");
                      setFunctionNoiseData(copyFunction);
                    }}
                    validMessage={{ message: t("RC_0061"), format: [t("RC_0022")] }}
                    data={item.productType}
                  />
                </td>
                <td className={"tableTd"}>
                  <CSelect
                    key={`model_name_${index}`}
                    code="modelName"
                    name={`model_name_${index}`}
                    title={item.modelName}
                    selected
                    classList={"tableSelectStyle"}
                    onChange={(changedValue: string) => {
                      data[index]!.modelName = changedValue;
                      setData([...data]);
                    }}
                    params={{ productTypeData: productTypeData[index] }}
                    data={item.modelName}
                  />
                </td>
                <td className={"tableTd"}>
                  <CCustomInput
                    key={`qty_${index}`}
                    name={`qty_${index}`}
                    type={"number"}
                    placeholder={"0"}
                    value={item.qty}
                    classList={"w-full px-3 !h-7"}
                    onChange={(changedValue: string) => {
                      data[index]!.qty = changedValue;
                      setData([...data]);
                    }}
                  />
                </td>
                <td className={"tableTd"}>
                  <CSelect
                    id="functionNoise"
                    key={`function_noise_${index}`}
                    code="functionNoise"
                    name={`function_noise_${index}`}
                    title={item.function}
                    selected
                    classList={"tableSelectStyle"}
                    onChange={(changedValue: any) => {
                      data[index]!.function = changedValue.title;
                      setData([...data]);
                      const copyStep = cloneObject(stepData);
                      copyStep[index] = changedValue.value.slice(1).split("/");
                      setStepData(copyStep);
                    }}
                    data={item.function}
                    params={{ functionData: functionNoiseData[index] }}
                  />
                </td>
                <td className={"tableTd"}>
                  <CSelect
                    key={`step_${index}`}
                    code="step"
                    name={`step_${index}`}
                    title={item.step}
                    selected
                    classList={"tableSelectStyle"}
                    onChange={(changedValue: string) => {
                      data[index]!.step = changedValue;
                      setData([...data]);
                    }}
                    params={{ stepData: stepData[index] }}
                    data={item.step}
                  />
                </td>
                <td className={"tableTd"}>
                  <CCustomInput
                    key={`capacity_${index}`}
                    type={"text"}
                    name={`capacity_${index}`}
                    placeholder={"0"}
                    value={item.capacity}
                    classList={"w-full px-3 !h-7"}
                    disabled
                    onChange={(changedValue: string) => {
                      data[index]!.capacity = changedValue;
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
