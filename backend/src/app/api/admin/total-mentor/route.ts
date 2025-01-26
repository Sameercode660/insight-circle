import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function GET() {
    try {
        const mentorList = await prisma.mentor.findMany({})

        if(!mentorList) {
            return NextResponse.json({statusCode: 404, message: 'Not any mentor is found', status: false})
        }

        return NextResponse.json({statusCode: 200, message: 'Mentor fetched successfully', data: mentorList, status: false})
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
          message: "Unable to create the mentor",
          error: errorMessage,
          status: false,
        });
    }
}
