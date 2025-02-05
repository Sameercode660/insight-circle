import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import sendSubscriptionAcknowledgment from "@/utils/subscribeMail";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {

    const {name, email} = await req.json()
    console.log(name, email)
    const checkSubscriber = await prisma.subscriber.findFirst({
      where: {
        email
      }
    })

    if(checkSubscriber) {
      return NextResponse.json({
        statusCode: 400,
        message: 'Subscriber already exists',
        status: false,
      });
    }
    const subscriber = await prisma.subscriber.create({
      data: {
        name,
        email
      }
    });

    const sendEmail = await sendSubscriptionAcknowledgment({ recipientEmail: email, subscriberName: name });

    if(!sendEmail.success) {
      return NextResponse.json({
        statusCode: 500,
        message: 'Failed to send subscription acknowledgment email',
        status: false,
      });
    }

    return NextResponse.json({statusCode: 200, message: 'Subscriber added successfully', status: true});

  } catch (error: any) {

    return NextResponse.json({
      statusCode: 500,
      message: 'Unable to run subcriber',
      status: false,
    });
  }
}
