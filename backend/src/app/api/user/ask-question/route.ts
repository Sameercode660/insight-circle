import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import sendQuestionAcknowledgment from "@/utils/questionMail";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
      const { question, userName, userId, email } = await req.json();

        if (!question || !userName || !userId || !email) {
            return NextResponse.json({
            statusCode: 400,
            message: "All fields are required",
            status: false,
            });
        }

        const newQuestion = await prisma.askedQuestion.create({
            data: {
                question: question,
                userName: userName,
                userId: userId,
                email: email,
            },
        });

        const status = await sendQuestionAcknowledgment({userName, recipientEmail: email, question});

        console.log(status)

        return NextResponse.json({statusCode: 200, message: "Question submitted successfully", status: true});

    } catch (error) {
        let customError = new Error(`Something went wrong: ${error}`);

    if (error instanceof Error) {
      customError = error;
    }
    console.log(customError);

    return NextResponse.json({
      statusCode: 500,
      message: customError.message,
      status: false,
    });
    }
}