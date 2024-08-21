"use client";
import { createContext, useState } from "react";

export const ProjectInfoContext = createContext<{
  projectInfoData: any;
  setProjectInfoData: any;
}>({ projectInfoData: {}, setProjectInfoData: () => {} });

export const ProjectInfoProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [projectInfoData, setProjectInfoData] = useState({});

  return (
    <ProjectInfoContext.Provider
      value={{ projectInfoData, setProjectInfoData }}
    >
      {children}
    </ProjectInfoContext.Provider>
  );
};
