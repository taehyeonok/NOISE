import * as jose from "jose";
import { NextRequest, NextResponse } from "next/server";

export const jwtValidation = async (req: any) => {
  let result = null;
  try {
    const lats_sso_token = req.cookies.get("lats_sso_token")?.value;
    const secret_key = new TextEncoder().encode(process.env.JWT_SECRET_KEY);
    const { payload, protectedHeader } = await jose.jwtVerify(lats_sso_token, secret_key);
    result = payload;
  } catch (err) {
    console.error("jwtValidation : ", err);
    return null;
  }
  return result;
};
export async function createJwt(userId: string): Promise<string> {
  const secret_key = new TextEncoder().encode(process.env.JWT_SECRET_KEY);
  return new jose.SignJWT({ "urn:latsrchecker:claim": true })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer("urn:latsrchecker:LatSSOService")
    .setAudience("urn:latsrchecker:" + userId)
    .setJti(userId)
    .setSubject(userId)
    .setExpirationTime("1h")
    .sign(secret_key);
}
