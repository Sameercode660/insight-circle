import { NextResponse, NextRequest } from 'next/server'
import { PrismaClient } from '@prisma/client'
import sendOTP from '@/utils/sendOtp'

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
    try {
        const {name, email, password} = await req.json()

        if(!name || !email || !password) {
            return NextResponse.json({statusCode: 400, message: "All fields are required", status: false})
        }

        const checkUser = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if(checkUser) {
            return NextResponse.json({statusCode: 400, message: "User already exists", status: false})
        }
        
        const user = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: password,
            }
        })
        
        const otp = Math.floor(100000 + Math.random() * 900000)

        const sendOtpStatus = await sendOTP({recipientEmail: email, otp: otp.toString()})

        console.log(sendOtpStatus)
        
        if(!user) {
            return NextResponse.json({statusCode: 400, message: "Unable to create user", status: false})
        }

        return NextResponse.json({statusCode: 200, message: "User created successfully", data: user,status: true})

    } catch (error) {
        return NextResponse.json({statusCode: 500, message: 'Unable to create user', status: false})
    }
}