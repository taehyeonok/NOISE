import "../globals.css";
import React from "react";
import { dir } from "i18next";
import { languages } from "@/app/i18n/settings";
import localFont from "next/font/local";
export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

type LayoutProps = {
  children: React.ReactNode;
  params: { lang: string };
};

const fontLGSMHATR = localFont({
  variable: "--font-LGSMHATR",
  src: "../assets/fonts/LG_SMART-REGULAR.ttf",
});
const fontLGSMHATL = localFont({
  variable: "--font-LGSMHATL",
  src: "../assets/fonts/LG_SMART-LIGHT.ttf",
});
const fontLGSMHATSB = localFont({
  variable: "--font-LGSMHATSB",
  src: "../assets/fonts/LG_SMART-SEMIBOLD.ttf",
});
const fontLGSMHATB = localFont({
  variable: "--font-LGSMHATB",
  src: "../assets/fonts/LG_SMART-BOLD.ttf",
});

export default function RootLayout({ children, params: { lang } }: LayoutProps) {
  return (
    <html
      lang={lang}
      className={`${fontLGSMHATR.variable} ${fontLGSMHATL.variable} ${fontLGSMHATSB.variable} ${fontLGSMHATB.variable}`}
    >
      <head>
        <meta name={"viewport"} content="width=device-width,initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>LATS Noise</title>
      </head>
      <body className="w-full h-full p-0 m-0 bg-bg_gray">{children}</body>
    </html>
  );
}
