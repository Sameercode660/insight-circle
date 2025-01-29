import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const mentor = await prisma.mentor.findMany({})

    if(!mentor) {
        return NextResponse.json({statusCode: 400, message: 'No any mentor is available', status: false})
    }

    return NextResponse.json({statusCode: 200, message: 'fetched successfully', data: mentor, status: true})

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
      message: "Unable to fetch the mentors",
      error: errorMessage,
      status: false,
    });
  }
}
