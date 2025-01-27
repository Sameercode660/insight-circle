import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()

        const {name, email, password, profilePicture, bio, expertIn, mentorType} = body

        if(!name || !email || !password || !profilePicture || !bio || !expertIn || !mentorType) {
            return NextResponse.json({statusCode: 400, message: 'Anyone field is empty', status: false})
        }

        const checkMentor = await prisma.mentor.findUnique({
            where: {
                email
            }
        })

        if(checkMentor) {
            return NextResponse.json({statusCode: 400, message: 'Mentor already exists', status: false})
        }

        const mentor = await prisma.mentor.create({
            data: {
                name, 
                email,
                password,
                profilePicture,
                bio,
                expertIn,
                mentorType
            }
        })

        if(!mentor) {
            return NextResponse.json({statusCode: 400, message: 'Unable to create the mentor in db', status: false})
        }

        return NextResponse.json({statusCode: 200, message: 'Mentor is created Successfully', data: mentor, status: true})
    } catch (error: unknown | Error) {
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
