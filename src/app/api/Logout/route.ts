import { logout } from "@/libs/auth";
import { NextResponse } from "next/server";

export async function POST() {
    await logout();
    return NextResponse.json({ message: "Logged out" });
}