import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Suwichada pongkanmoon",
    studentId: "630610657",
  });
};
