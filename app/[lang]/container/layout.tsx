"use client";
import React, { Suspense } from "react";
import Header from "@/app/[lang]/components/header/header";
import Footer from "@/app/[lang]/components/footer/footer";
import { useParams } from "next/navigation";
import { getSelectedLanguage } from "@/app/utils/utils";
import { ProjectInfoProvider } from "@/app/context/projectInfoContext";
import { CookiesProvider } from "react-cookie";
import LoadingPage from "../components/loadingSkeleton/loadingPage";

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  const param = useParams<{ lang: string }>();
  const selectedLanguage = getSelectedLanguage(param.lang);
  return (
    <div className={"page"}>
      <CookiesProvider defaultSetOptions={{ path: "/Noise" }}>
        <Header lang={param.lang} selectedLanguage={selectedLanguage} />
        <ProjectInfoProvider>
          <Suspense fallback={<LoadingPage />}>{children}</Suspense>
          <Footer />
        </ProjectInfoProvider>
      </CookiesProvider>
    </div>
  );
}
