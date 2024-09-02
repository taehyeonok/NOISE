import React, { Suspense } from "react";
import Overview from "@/app/[lang]/components/overview/overview";
import LoadingPage from "../../components/loadingSkeleton/loadingPage";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Overview />
      <main className={"container"}>
        <Suspense fallback={<LoadingPage />}>{children}</Suspense>
      </main>
    </>
  );
}
