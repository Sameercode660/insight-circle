import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const {email, password} = await req.json()

        if(!email || !password) {
            return NextResponse.json({statusCode: 400, message: 'Field is empty', status: false})
        }

        const admin = await prisma.admin.findUnique({
            where: {
                email
            }
        })

        if(!admin) {
            return NextResponse.json({statusCode: 404, message: 'Admin not found', status: false})
        }

        if(admin.password !== password) {
            return NextResponse.json({statusCode: 400, message: 'Password is incorrect', status: false})
        }

        return NextResponse.json({statusCode: 200, message: 'Admin logged in successfully', data: admin,  status: true})
        
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
          message: "Unable to login",
          error: errorMessage,
          status: false,
        });
    }
}
