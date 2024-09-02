import client from "@/lib/client-cmn";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import { NextRequest, NextResponse } from "next/server";

const checkSSOLogin = (req: NextRequest) => {
  const lats_sso_token = req.cookies.get("lats_sso_token")?.value;
  const secret_key = process.env.JWT_SECRET_KEY;
  let result = Object.create(null);
  try {
    const decoded = jwt.verify(lats_sso_token!, secret_key!, {
      algorithms: ["HS512"],
    });
    result.msg = "success";
    result.status = 200;
  } catch (err) {
    result.msg = "invalid";
    result.status = 500;
  } finally {
    return result;
  }
};

export async function GET(req: NextRequest) {
  if (!req.cookies.get("lats_sso_token")) {
    return NextResponse.json({ msg: "401" }, { status: 401 });
  }
  const result = checkSSOLogin(req);
  return NextResponse.json({ msg: result.msg }, { status: result.status });
}

export async function POST(req: NextRequest) {
  if (!req.cookies.get("lats_sso_token")) {
    return NextResponse.json({ msg: "401" }, { status: 401 });
  }
  const result = checkSSOLogin(req);
  return NextResponse.json({ msg: result.msg }, { status: result.status });
}
