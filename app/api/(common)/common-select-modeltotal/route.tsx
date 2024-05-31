import client from "@/lib/client-cmn";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  try {
    if (data.productType.includes("MultiV")) {
      const dataList = await client.t_MASTER_MV_ODU.findMany({
        select: {
          BUYER_MODEL_NAME: true,
          T_COOL_W: true,
          T_HEAT_W: true,
        },
        where: {
          BUYER_MODEL_NAME: data.modelName,
          VISIBLE: 1,
        },
        distinct: ["BUYER_MODEL_NAME"],
      });
      const result = dataList.map((d) => {
        return { t_cool_w: d.T_COOL_W, t_heat_w: d.T_HEAT_W };
      });
      console.log("multiV👀 = ", result);

      return NextResponse.json({
        data: result,
      });
    } else if (
      (data.productType === "SCAC" || data.productType === "Multi" || data.productType === "RAC") &&
      data.modelName !== ""
    ) {
      const dataList = await client.t_MASTER_MS_ODU.findMany({
        select: {
          BUYER_MODEL_NAME: true,
          T_COOL_W: true,
          T_HEAT_W: true,
        },
        where: {
          BUYER_MODEL_NAME: { contains: data.modelName },
          VISIBLE: 1,
        },
        distinct: ["BUYER_MODEL_NAME"],
      });
      const result = dataList.map((d) => {
        return { t_cool_w: d.T_COOL_W, t_heat_w: d.T_HEAT_W };
      });
      console.log("scac🤷‍♀️🤷‍♀️ = ", result);
      return NextResponse.json({
        data: result,
      });
    } else if (data.productType === "AWHP" && data.modelName !== "") {
      const dataList = await client.t_MASTER_THERMAV_ODU.findMany({
        select: {
          BUYER_MODEL_NAME: true,
          T_COOL_W: true,
          T_HEAT_W: true,
        },
        where: {
          BUYER_MODEL_NAME: { contains: data.modelName },
          VISIBLE_THERMAV: 1,
        },
        distinct: ["BUYER_MODEL_NAME"],
      });
      const result = dataList.map((d) => {
        return { t_cool_w: d.T_COOL_W, t_heat_w: d.T_HEAT_W };
      });
      console.log("🤷‍♀️🤷‍♀️awhp = ", result);
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
