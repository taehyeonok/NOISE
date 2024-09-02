import client from "@/lib/client-cmn";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  try {
    const result = await client.t_CMN_COM_MEMBER.findUnique({
      where: {
        MEMBER_ID: data.userId,
        LOGIN_TOKEN: data.loginToken,
      },
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
