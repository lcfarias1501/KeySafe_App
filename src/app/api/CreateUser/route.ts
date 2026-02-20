import { NextResponse } from "next/server"
import prisma from "@/libs/prisma"
import bcrypt  from 'bcrypt'


export async function POST(req: Request) {

    const { username, email, password } = await req.json()

    // hash password
    const hashedPassword = bcrypt.hashSync(password, 10)
    
    try {

        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                username
            }
        })

        if(!user) {
            return NextResponse.json({ error: "Erro ao criar utilizador", status: 500 })
        }

        return NextResponse.json({ status: 201 })

    } catch (error) {
        console.error("Error creating user:", error)
        return NextResponse.json({ error: "Error creating user" }, { status: 500 })
    }

}
