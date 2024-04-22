import client from "@/lib/client-cmn";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  try {
    const dataList = await client.t_CMN_CODE.findMany({
      where: {
        CODE_GRP_ID: data.clss,
        USE_YN: "Y",
      },
      orderBy: {
        SORT_NO: "asc",
      },
    });

    const result = dataList.map((d) => {
      return { title: d.ATTRIBUTE1, value: d.CODE };
    });
    return NextResponse.json({
      data: result,
    });
  } catch (e: any) {
    console.log(e.code);
    console.log(e.message);
    return NextResponse.json({
      data: null,
      msg: e.message,
    });
  }
}
