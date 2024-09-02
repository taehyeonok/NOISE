"use server";
import * as jose from "jose";
import { cookies } from "next/headers";

export const jwtValidation = async () => {
  let result = null;
  const cookiesStore = cookies();
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_BASE_URL;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
  try {
    // const url = req.nextUrl.clone();
    // url.pathname = "/";
    // const protocol = url.protocol;
    // const host = url.host;

    const lats_sso_token = cookiesStore.get("r_lats_sso_token")
      ? (cookiesStore.get("r_lats_sso_token")?.value as string)
      : (cookiesStore.get("lats_sso_token")?.value as string);
    if (lats_sso_token) {
      const secret_key = new TextEncoder().encode(process.env.JWT_SECRET_KEY);
      const { payload, protectedHeader } = await jose.jwtVerify(lats_sso_token, secret_key);
      const userId = payload.sub;
      const loginToken = payload.loginToken;

      // login Token 체크
      let url = `${baseURL}${basePath}/api/select-login-token`;
      const res = await fetch(url, {
        method: "post",
        body: JSON.stringify({
          userId,
          loginToken,
        }),
      });
      const resultData = await res.json();
      if (!resultData.data) {
        payload.jti = "diffIP";
      }

      result = payload;
    }
  } catch (err) {
    console.error("jwtValidation : ", err);
    return null;
  }
  return result;
};
export async function createJwt(userId: string, loginToken: string): Promise<string> {
  const secret_key = new TextEncoder().encode(process.env.JWT_SECRET_KEY);
  return new jose.SignJWT({ "urn:latsnoise:claim": true, loginToken: loginToken })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer("urn:latsnoise:LatSSOService")
    .setAudience("urn:latsnoise:" + userId)
    .setJti(userId)
    .setSubject(userId)
    .setExpirationTime("1h")
    .sign(secret_key);
}
