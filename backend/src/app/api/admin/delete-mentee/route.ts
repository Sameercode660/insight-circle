import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const {email} = await req.json()

    if(!email) {
        return NextResponse.json({statusCode: 400, message: 'Field is empty', status: false})
    }

    const mentor = await prisma.user.delete({
        where: {
            email
        }
    })

    if(!mentor) {
        return NextResponse.json({statusCode: 404, message: 'Mentor not found', status: false})
    }

    return NextResponse.json({statusCode: 200, message: 'Mentor deleted successfully', status: true})

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
      message: "Unable to delete mentee",
      error: errorMessage,
      status: false,
    });
  }
}
