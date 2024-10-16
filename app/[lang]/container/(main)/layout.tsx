import React from "react";
import Overview from "@/app/[lang]/components/overview/overview";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Overview />
      <main className={"container"}>{children}</main>
    </>
  );
}
