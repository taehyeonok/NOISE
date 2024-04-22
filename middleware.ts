"use server";
import { NextRequest, NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import { fallbackLng, languages, cookieName } from "./app/i18n/settings";
import * as jose from "jose";
import { createJwt, jwtValidation } from "./lib/jwt";
acceptLanguage.languages(languages);

export const config = {
  // matcher: '/:lng*'
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
};

let isLogout = false;
export async function middleware(req: NextRequest) {
  const response = NextResponse.next();
  let lang;
  if (req.cookies.has(cookieName)) lang = acceptLanguage.get(req.cookies.get(cookieName)?.value);
  else if (!lang) lang = acceptLanguage.get(req.headers.get("Accept-Language"));
  else if (!lang) lang = fallbackLng;

  let domainName = req.nextUrl.host;
  if (domainName.includes("lge.com")) {
    domainName = "lge.com";
  }

  // 로그인 체크 로직
  if (isLogout) {
    //로그아웃 체크
    const url = req.nextUrl.clone();
    url.pathname = "/";
    isLogout = false;
    return NextResponse.redirect(url);
  }

  if (!req.cookies.get("lats_sso_token")) {
    //비로그인 처리
    response.cookies.set("latsNoiseLogin", "nologin", {
      path: "/Noise",
      sameSite: "strict",
      secure: true,
    });
  } else {
    const payload = await jwtValidation(req);
    if (payload?.jti == "nonMember") {
      response.cookies.set("latsNoiseLogin", "nologin", {
        path: "/Noise",
        sameSite: "strict",
        secure: true,
      });
      response.cookies.set("lats_sso_token", "", {
        expires: new Date(0),
        path: "/",
        domain: domainName,
        httpOnly: true,
        secure: true,
      });
      response.cookies.set("latsNoiseLoginInfo", "", {
        path: "/Noise",
        sameSite: "strict",
        expires: new Date(0),
        secure: true,
      });
    } else if (payload) {
      // jwt 검증
      //로그인 처리
      const lats_sso_token = req.cookies.get("lats_sso_token")?.value as string;
      const secret_key = new TextEncoder().encode(process.env.JWT_SECRET_KEY);
      const { payload, protectedHeader } = await jose.jwtVerify(lats_sso_token, secret_key);
      response.cookies.set("latsNoiseLogin", "login", {
        path: "/Noise",
        sameSite: "strict",
        secure: true,
      });
      // console.log("payload", payload);
      response.cookies.set("latsNoiseLoginInfo", payload.sub ? payload.sub.toString() : "Login", {
        path: "/Noise",
        sameSite: "strict",
        secure: true,
      });
      // jwt 갱신
      // TODO  jwt 갱신 로직
      const reJwt = await createJwt(payload.sub ? payload.sub.toString() : "Login");
      response.cookies.set("lats_sso_token", reJwt, {
        path: "/",
        domain: domainName,
        httpOnly: true,
        secure: true,
      });
    } else {
      // 로그인 jwt invalid 처리
      const url = req.nextUrl.clone();
      url.pathname = "/";

      response.cookies.set("lats_sso_token", "", {
        expires: new Date(0),
        path: "/",
        domain: domainName,
        httpOnly: true,
        secure: true,
      });
      response.cookies.set("latsNoiseLoginInfo", "Login", {
        expires: new Date(0),
        path: "/Noise",
        sameSite: "strict",
        secure: true,
      });
      response.cookies.set("latsNoiseLogin", "nologin", {
        path: "/Noise",
        sameSite: "strict",
        secure: true,
      });
      response.cookies.set("latsNoiseLogout", "true", {
        path: "/Noise",
        sameSite: "strict",
        secure: true,
      });
      isLogout = true;
    }
  }

  // Redirect if lang in path is not supported
  if (
    !languages.some((loc: string) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith("/_next")
  ) {
    const urlPathName: string = req.nextUrl.pathname;
    const urlSearchParam: string = req.nextUrl.searchParams.toString();
    const headers = new Headers(req.headers);
    return NextResponse.redirect(
      new URL(
        `/Noise/${lang}${urlPathName.replace("null/", "")}?${urlSearchParam ? urlSearchParam : ""}`,
        req.url
      ),
      { headers }
    );
  }

  if (req.headers.has("referer")) {
    const refererUrl = new URL(req.headers.get("referer") as string);
    const langInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`));
    if (langInReferer) response.cookies.set(cookieName, langInReferer);
    return response;
  }

  return response;
}
