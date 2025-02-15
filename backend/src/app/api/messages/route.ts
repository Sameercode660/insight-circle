import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const {senderId, receiverId} = await req.json()
    console.log('senderId', senderId, 'receiver Id', receiverId)
    if(!senderId || !receiverId) {
      return NextResponse.json({statusCode: 400, message: 'Anyone field is empty', status: false})
    }

    const messages = await prisma.message.findMany({
      where: {
       senderId,
       receiverId
      }
    })

    if(!messages) {
      return NextResponse.json({statusCode: 400, message: 'No any message is found', data: [], status: false})
    }

    return NextResponse.json({statusCode: 200, messages: 'message fetched successfully', data: messages, status: true})
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      statusCode: 500,
      message: "Unable to run message controller",
      status: false,
    });
  }
}
