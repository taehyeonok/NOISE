"use client";
import Link from "next/link";
import { pageIndex } from "@/app/[lang]/constants/const";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import LoadingPage from "./[lang]/components/loadingSkeleton/loadingPage";
import { useCookies } from "react-cookie";

export default function Home() {
  const [cookies, setCookie, removeCookie] = useCookies([
    "r_lats_sso_token",
    "latsNoiseLogin",
    "latsNoiseLoginInfo",
    "ssolgenet",
    "login_success",
  ]);
  useEffect(() => {
    removeCookie("r_lats_sso_token");
    removeCookie("latsNoiseLogin");
    removeCookie("latsNoiseLoginInfo");
    const lang = localStorage.getItem("latsNoise_i18nextLng");
    const locale_code = localStorage.getItem("locale_code");
    redirect(`/${locale_code ? locale_code : lang}/container/input`);
  }, []);
  return <LoadingPage />;
}
