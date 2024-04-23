"use server";

import { revalidatePath } from "next/cache";
import EditUnit from "./editUnit";

export async function noiseSimulator(formData: FormData, unitData: any) {
  revalidatePath("/"); // 경로 재검증
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_BASE_URL;
  console.log("formData", formData);
  try {
    const editUnit = new EditUnit();
    editUnit.setUnitData_useServer(unitData);
  } catch (e) {
    console.log(e);
    throw new Error("noiseSimulator");
  }
}
