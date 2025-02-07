import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { userId, mentorId } = await req.json();

    if (!userId || !mentorId) {
      return NextResponse.json({
        statusCode: 400,
        message: "One or more fields are empty",
        status: false,
      });
    }

    // Try the first query
    let messages: any = await prisma.message.findMany({
      where: {
        userId,
        mentorId,
      },
      include: {
        user: true,
      },
    });

    // If no messages are found, try the second query
    if (messages.length === 0) {
      messages = await prisma.message.findMany({
        where: {
          userId: mentorId,
          mentorId: userId,
        },
        include: {
          mentor: true,
        },
      });

      // Map the mentor data to the user field
      messages = messages.map((message: any) => ({
        ...message,
        user: message.mentor,
      }));
    }

    // If still no messages, return not found
    if (messages.length === 0) {
      return NextResponse.json({
        statusCode: 404,
        message: "Messages not found",
        status: false,
      });
    }

    return NextResponse.json({
      statusCode: 200,
      message: "Messages fetched successfully",
      data: messages,
      status: true,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      statusCode: 500,
      message: "Unable to run message controller",
      status: false,
    });
  }
}
