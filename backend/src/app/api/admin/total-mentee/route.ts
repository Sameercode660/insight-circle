import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import TotalMentee from "@/components/TotalMentee";

const prisma = new PrismaClient()

export async function GET() {
    try {
        const totalMentee = await prisma.user.findMany({})

        if(!totalMentee) {
            return NextResponse.json({statusCode: 400, message: 'Mentee List is empty', status: false})
        }

        return NextResponse.json({statusCode: 200, message: 'Mentee fetched successfully', data: totalMentee, status: true})

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
