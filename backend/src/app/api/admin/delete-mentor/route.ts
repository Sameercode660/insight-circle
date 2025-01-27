import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const {email} = await req.json()

    if(!email) {
        return NextResponse.json({statusCode: 400, message: 'Email does not recieved', status: false})
    }

    const deleteUser = await prisma.mentor.delete({
        where: {
            email
        }
    })

    if(!email) {
        return NextResponse.json({statusCode: 400, message: 'Mentor does not exists', status: false})
    }

    return NextResponse.json({statusCode: 200, message: 'Mentor Deleted Successfully', status: true})
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
