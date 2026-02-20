import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import bcrypt from 'bcryptjs';
import { login } from "@/libs/auth";

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();

        const user = await prisma.user.findUnique({ where: { email } });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return NextResponse.json({ error: "Email ou senha incorretos" }, { status: 401 });
        }

        // Criar a sessão e setar o cookie
        await login(user);

        return NextResponse.json({ message: "Login realizado" }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: "Erro no servidor" }, { status: 500 });
    }
}