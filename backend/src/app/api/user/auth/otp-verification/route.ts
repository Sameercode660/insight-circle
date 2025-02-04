import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export async function POST(req: NextRequest) {
    try {
        const {id, otp} = await req.json()

        if(!id || !otp) {
            return NextResponse.json({statusCode: 400, message: "Anyone field is empty", status: false})
        }

        const user = await prisma.user.findUnique({
            where: {
                id: id
            }
        })

        if(!user) {
            return NextResponse.json({statusCode: 400, message: "User not found", status: false})
        }

        if(user.otp !== otp) {
            return NextResponse.json({statusCode: 400, message: "Invalid OTP", status: false})
        }

        return NextResponse.json({statusCode: 200, message: "OTP verified successfully", data: user, status: true})
    } catch (error) {
        let errorMessage = "An unexpected error occurred";

    // Safely extract the error message
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === "string") {
      errorMessage = error;
    }

    console.error(errorMessage);

    return NextResponse.json({
      statusCode: 500,
      message: "Unable to verify the OTP",
      error: errorMessage,
      status: false,
    });
    }
}