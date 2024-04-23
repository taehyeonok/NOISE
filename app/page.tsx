"use client";
import Link from "next/link";
import { pageIndex } from "@/app/[lang]/constants/const";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import LoadingPage from "./[lang]/components/loadingSkeleton/loadingPage";

export default function Home() {
  // const [init, setInit] = useState<boolean>(false);
  useEffect(() => {
    // setInit(true);
    const lang = localStorage.getItem("latsNoise_i18nextLng");
    const locale_code = localStorage.getItem("locale_code");
    redirect(`/${locale_code ? locale_code : lang}/container/input`);
  }, []);
  // redirect(`/containers/main`);
  return <LoadingPage />;
}
