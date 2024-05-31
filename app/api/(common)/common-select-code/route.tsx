import client from "@/lib/client-noise";
import client2 from "@/lib/client-cmn";
import { NextRequest, NextResponse } from "next/server";
import { T_MASTER_MV_ODU } from "@/prisma/client/lats_cmn";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const functionNoise = data?.param?.functionData;
  const functionNoiseData = functionNoise?.map((item: string) => Number(item));
  const stepMap = data?.param?.stepData;
  const step = stepMap?.map((item: string) => Number(item));
  if (data.clss == "productType") {
    const dataList = await client.t_NOISE_PRODUCTTYPE.findMany({
      select: {
        PRODUCT_TYPE: true,
        FUNCNAME_LIST: true,
      },
      where: {
        VISIBLE: 1,
      },
    });
    const result = dataList.map((d) => {
      return { title: d.PRODUCT_TYPE, value: d.FUNCNAME_LIST };
    });
    return NextResponse.json({
      data: result,
    });
  } else if (data.clss == "modelName") {
    if (data?.param.productTypeData === "MultiV_i") {
      const dataList = await client2.$queryRaw<
        T_MASTER_MV_ODU[]
      >`SELECT BUYER_MODEL_NAME, T_COOL_W,T_HEAT_W FROM T_MASTER_MV_ODU T  WHERE DESCRIPTION='MULTI V i' AND (NOTUSEDCOUNTRY NOT LIKE ('%/7/%') OR NOTUSEDCOUNTRY IS NULL) AND LOCATION LIKE '%/7/%' AND VISIBLE=1 AND COMBINATION NOT LIKE '%,%' AND CODE_MULTILINK=1`;
      const result = dataList.map((d: any) => {
        return { title: d.BUYER_MODEL_NAME, value: d.BUYER_MODEL_NAME };
      });
      return NextResponse.json({
        data: result,
      });
    }
    const dataList = await client.t_NOISE_MODELSPEC.findMany({
      select: {
        MODEL_NAME: true,
      },
      where: {
        PRODUCT_TYPE: data?.param.productTypeData,
      },
      distinct: ["MODEL_NAME"],
    });
    const result = dataList.map((d) => {
      return { title: d.MODEL_NAME, value: d.MODEL_NAME };
    });
    return NextResponse.json({
      data: result,
    });
  } else if (data.clss == "functionNoise") {
    const dataList = await client.t_NOISE_FUNCNAME.findMany({
      select: {
        NAME: true,
        SELECTABLE_STEP: true,
      },
      where: {
        ID: { in: functionNoiseData },
      },
    });
    const result = dataList.map((d) => {
      return { title: d.NAME, value: d.SELECTABLE_STEP };
    });
    return NextResponse.json({
      data: result,
    });
  } else if (data.clss === "step") {
    const dataList = await client.t_NOISE_FUNCSTEP.findMany({
      select: {
        STEP: true,
      },
      where: {
        ID: { in: step },
      },
    });
    const result = dataList.map((d) => {
      return { title: d.STEP, value: d.STEP };
    });
    return NextResponse.json({
      data: result,
    });
  } else {
    return NextResponse.json({
      data: "",
    });
  }
}
