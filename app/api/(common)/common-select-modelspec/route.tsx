import client from "@/lib/client-noise";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const modelName = data.modelName.replace(" ", ".");
  try {
    if (data.productType == "AWHP" || data.productType == "ISC") {
      const dataList = await client.t_NOISE_MODELSPEC.findMany({
        select: {
          DATA_TYPE: true,
          NOISE_63HZ: true,
          NOISE_125HZ: true,
          NOISE_250HZ: true,
          NOISE_500HZ: true,
          NOISE_1KHZ: true,
          NOISE_2KHZ: true,
          NOISE_4KHZ: true,
          NOISE_8KHZ: true,
          NOISE_OVERALL: true,
          REDUCED_CAPA_RATIO: true,
          DISCHARGE: true,
        },
        where: {
          PRODUCT_TYPE: data.productType,
          MODEL_NAME: data.modelName,
          FUNCTION_NAME: data.function,
          FUNCTION_STEP: data.step,
        },
      });

      const result = dataList.map((d) => {
        return {
          id: data.id,
          dataType: d.DATA_TYPE,
          noise63hz: d.NOISE_63HZ,
          noise125hz: d.NOISE_125HZ,
          noise250hz: d.NOISE_250HZ,
          noise500hz: d.NOISE_500HZ,
          noise1khz: d.NOISE_1KHZ,
          noise2khz: d.NOISE_2KHZ,
          noise4khz: d.NOISE_4KHZ,
          noise8khz: d.NOISE_8KHZ,
          overall: d.NOISE_OVERALL,
          capacity: d.REDUCED_CAPA_RATIO,
          discharge: d.DISCHARGE,
        };
      });
      return NextResponse.json({
        data: result,
      });
    } else {
      const dataList = await client.t_NOISE_MODELSPEC.findMany({
        select: {
          DATA_TYPE: true,
          NOISE_63HZ: true,
          NOISE_125HZ: true,
          NOISE_250HZ: true,
          NOISE_500HZ: true,
          NOISE_1KHZ: true,
          NOISE_2KHZ: true,
          NOISE_4KHZ: true,
          NOISE_8KHZ: true,
          NOISE_OVERALL: true,
          REDUCED_CAPA_RATIO: true,
          DISCHARGE: true,
        },
        where: {
          PRODUCT_TYPE: data.productType,
          MODEL_NAME: modelName,
          FUNCTION_NAME: data.function,
          FUNCTION_STEP: data.step,
          NOT: {
            DATA_TYPE: "PWL",
          },
        },
      });

      const result = dataList.map((d) => {
        return {
          id: data.id,
          dataType: d.DATA_TYPE,
          noise63hz: d.NOISE_63HZ,
          noise125hz: d.NOISE_125HZ,
          noise250hz: d.NOISE_250HZ,
          noise500hz: d.NOISE_500HZ,
          noise1khz: d.NOISE_1KHZ,
          noise2khz: d.NOISE_2KHZ,
          noise4khz: d.NOISE_4KHZ,
          noise8khz: d.NOISE_8KHZ,
          overall: d.NOISE_OVERALL,
          capacity: d.REDUCED_CAPA_RATIO,
          discharge: d.DISCHARGE,
        };
      });
      return NextResponse.json({
        data: result,
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
