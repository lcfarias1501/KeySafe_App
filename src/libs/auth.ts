import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secretKey = process.env.JWT_SECRET
const key = new TextEncoder().encode(secretKey);

export async function encryptSession(payload: any) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("2h") 
        .sign(key);
}

export async function decryptSession(input: string) {
    const { payload } = await jwtVerify(input, key, {
        algorithms: ["HS256"],
    });
    return payload;
}

export async function login(user: any) {
    const session = await encryptSession({ userId: user.id, email: user.email });

    (await cookies()).set("session", session, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
    });
}

export async function logout() {
    (await cookies()).set("session", "", { expires: new Date(0) });
}

export async function getSessionUser() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("session")?.value;

    if (!token) return null;

    const session = await decryptSession(token);
    return session; 
  } catch (error) {
    return null;
  }
}