import React from "react";
import Header from "@/app/[lang]/components/header/header";
import Footer from "@/app/[lang]/components/footer/footer";

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={"page"}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
