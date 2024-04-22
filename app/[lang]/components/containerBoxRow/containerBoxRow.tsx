"use client";

import React from "react";
import { containerBoxRowProps } from "@/@types/components";

export default function ContainerBoxRow({
  children,
  justifyContent,
  alignItems = "center",
  classList = "",
}: containerBoxRowProps) {
  return (
    <section className={`w-full flex items-${alignItems} justify-${justifyContent} ` + classList}>
      {children}
    </section>
  );
}
