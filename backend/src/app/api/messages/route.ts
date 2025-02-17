import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { senderId, receiverId } = await req.json();
    console.log("senderId", senderId, "receiverId", receiverId);

    if (!senderId || !receiverId) {
      return NextResponse.json({
        statusCode: 400,
        message: "Anyone field is empty",
        status: false,
      });
    }

    const messages = await prisma.message.findMany({
      where: {
        OR: [
          {
            senderId,
            receiverId,
          },
          {
            senderId: receiverId,
            receiverId: senderId,
          },
        ],
      },
      orderBy: {
        createdAt: "asc", // Optional: sorts messages by creation date in ascending order
      },
    });

    if (!messages || messages.length === 0) {
      return NextResponse.json({
        statusCode: 400,
        message: "No any message is found",
        data: [],
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
