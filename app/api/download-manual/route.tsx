import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const fileURL = data.fileURL;

  const response = await fetch(fileURL);
  return response;
}
