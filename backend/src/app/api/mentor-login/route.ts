import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
    try {
        const {email, password} = await req.json()

        if(!email || !password) {
            return NextResponse.json({
                statusCode: 400,
                message: 'Anyone field is empty',
                status: false
            })
        }

        const mentor = await prisma.mentor.findUnique({
            where: {
                email,
                password
            }
        })

        if(!mentor) {
            return NextResponse.json({
                statusCode: 404,
                message: 'Mentor not found',
                status: false
            })
        }

        return NextResponse.json({
            statusCode: 200,
            message: 'Login Successfully',
            data: mentor,
            status: true
        })
        
    } catch (error) {
        console.error(error)
        return NextResponse.json({
            statusCode: 500,
            message: 'Unable to run mentor Login controller',
            status: false
        })
    }
}