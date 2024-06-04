import client from "@/lib/client-noise";
import { NextRequest, NextResponse } from "next/server";

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
      const dataList = await client.v_NOISE_MULTIV_I.findMany({
        select: {
          BUYER_MODEL_NAME: true,
        },
      });
      const result = dataList.map((d: any) => {
        return { title: d.BUYER_MODEL_NAME, value: d.BUYER_MODEL_NAME };
      });
      return NextResponse.json({
        data: result,
      });
    } else if (data?.param.productTypeData === "MultiV_5") {
      const dataList = await client.v_NOISE_MULTIV_5.findMany({
        select: {
          BUYER_MODEL_NAME: true,
        },
      });
      const result = dataList.map((d: any) => {
        return { title: d.BUYER_MODEL_NAME, value: d.BUYER_MODEL_NAME };
      });
      return NextResponse.json({
        data: result,
      });
    } else if (data?.param.productTypeData === "MultiV_S") {
      const dataList = await client.v_NOISE_MULTIV_S.findMany({
        select: {
          BUYER_MODEL_NAME: true,
        },
      });
      const result = dataList.map((d: any) => {
        return {
          title: d.BUYER_MODEL_NAME,
          value: d.BUYER_MODEL_NAME,
        };
      });
      return NextResponse.json({
        data: result,
      });
    } else if (data?.param.productTypeData === "SCAC") {
      const dataList = await client.v_NOISE_SCAC.findMany({
        select: {
          BUYER_MODEL_NAME: true,
        },
      });
      const result = dataList.map((d: any) => {
        return { title: d.BUYER_MODEL_NAME, value: d.BUYER_MODEL_NAME };
      });
      return NextResponse.json({
        data: result,
      });
    } else if (data?.param.productTypeData === "Multi") {
      const dataList = await client.v_NOISE_MULTI.findMany({
        select: {
          BUYER_MODEL_NAME: true,
        },
      });
      const result = dataList.map((d: any) => {
        return { title: d.BUYER_MODEL_NAME, value: d.BUYER_MODEL_NAME };
      });
      return NextResponse.json({
        data: result,
      });
    } else if (data?.param.productTypeData === "AWHP") {
      const dataList = await client.v_NOISE_AWHP.findMany({
        select: {
          BUYER_MODEL_NAME: true,
        },
      });
      const result = dataList.map((d: any) => {
        return { title: d.BUYER_MODEL_NAME, value: d.BUYER_MODEL_NAME };
      });
      return NextResponse.json({
        data: result,
      });
    } else if (data?.param.productTypeData === "RAC") {
      const dataList = await client.v_NOISE_RAC.findMany({
        select: {
          BUYER_MODEL_NAME: true,
        },
      });
      const result = dataList.map((d: any) => {
        return { title: d.BUYER_MODEL_NAME, value: d.BUYER_MODEL_NAME };
      });
      return NextResponse.json({
        data: result,
      });
    } else {
      const result = [{ title: "- Select Product Type -", value: "" }];
      return NextResponse.json({
        data: result,
      });
    }
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
