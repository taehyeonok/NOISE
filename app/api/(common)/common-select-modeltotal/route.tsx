import client from "@/lib/client-noise";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  try {
    if (data.productType === "Multi V i") {
      const dataList = await client.v_NOISE_MULTIV_I.findMany({
        select: {
          T_COOL_W: true,
          T_HEAT_W: true,
        },
        where: {
          BUYER_MODEL_NAME: data.modelName,
        },
      });
      const result = dataList.map((d: any) => {
        return { t_cool_w: d.T_COOL_W, t_heat_w: d.T_HEAT_W };
      });
      return NextResponse.json({
        data: result,
      });
    } else if (data.productType === "Multi V 5") {
      const dataList = await client.v_NOISE_MULTIV_5.findMany({
        select: {
          T_COOL_W: true,
          T_HEAT_W: true,
        },
        where: {
          BUYER_MODEL_NAME: data.modelName,
        },
      });
      const result = dataList.map((d: any) => {
        return { t_cool_w: d.T_COOL_W, t_heat_w: d.T_HEAT_W };
      });
      return NextResponse.json({
        data: result,
      });
    } else if (data.productType === "Multi V S") {
      const dataList = await client.v_NOISE_MULTIV_S.findMany({
        select: {
          T_COOL_W: true,
          T_HEAT_W: true,
        },
        where: {
          BUYER_MODEL_NAME: data.modelName,
        },
      });
      const result = dataList.map((d: any) => {
        return { t_cool_w: d.T_COOL_W, t_heat_w: d.T_HEAT_W };
      });
      return NextResponse.json({
        data: result,
      });
    } else if (data.productType === "SCAC") {
      const dataList = await client.v_NOISE_SCAC.findMany({
        select: {
          T_COOL_W: true,
          T_HEAT_W: true,
        },
        where: {
          BUYER_MODEL_NAME: data.modelName,
        },
      });
      const result = dataList.map((d: any) => {
        return { t_cool_w: d.T_COOL_W, t_heat_w: d.T_HEAT_W };
      });
      return NextResponse.json({
        data: result,
      });
    } else if (data.productType === "Multi") {
      const dataList = await client.v_NOISE_MULTI.findMany({
        select: {
          T_COOL_W: true,
          T_HEAT_W: true,
        },
        where: {
          BUYER_MODEL_NAME: data.modelName,
        },
      });
      const result = dataList.map((d: any) => {
        return { t_cool_w: d.T_COOL_W, t_heat_w: d.T_HEAT_W };
      });
      return NextResponse.json({
        data: result,
      });
    } else if (data.productType === "AWHP") {
      const dataList = await client.v_NOISE_AWHP.findMany({
        select: {
          T_COOL_W: true,
          T_HEAT_W: true,
        },
        where: {
          BUYER_MODEL_NAME: data.modelName,
        },
      });
      const result = dataList.map((d: any) => {
        return { t_cool_w: d.T_COOL_W, t_heat_w: d.T_HEAT_W };
      });
      return NextResponse.json({
        data: result,
      });
    } else if (data.productType === "RAC") {
      const dataList = await client.v_NOISE_RAC.findMany({
        select: {
          BUYER_MODEL_NAME: true,
          T_COOL_W: true,
          T_HEAT_W: true,
        },
        where: {
          BUYER_MODEL_NAME: data.modelName,
        },
      });
      const result = dataList.map((d: any) => {
        return { t_cool_w: d.T_COOL_W, t_heat_w: d.T_HEAT_W };
      });
      return NextResponse.json({
        data: result,
      });
    } else {
      return NextResponse.json({
        data: [],
      });
    }
  } catch (e: any) {
    console.log(e.code);
    console.log(e.message);
    return NextResponse.json({
      data: null,
      msg: e.message,
    });
  }
}
