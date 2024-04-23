"use client";
import React from "react";
import Header from "@/app/[lang]/components/header/header";
import Footer from "@/app/[lang]/components/footer/footer";
import { useParams } from "next/navigation";
import { getSelectedLanguage } from "@/app/utils/utils";

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  const param = useParams<{ lang: string }>();
  const selectedLanguage = getSelectedLanguage(param.lang);
  return (
    <div className={"page"}>
      <Header lang={param.lang} selectedLanguage={selectedLanguage} />
      {children}
      <Footer />
    </div>
  );
}
