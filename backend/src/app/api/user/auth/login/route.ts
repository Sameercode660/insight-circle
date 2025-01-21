import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({
        statusCode: 400,
        message: "All fields are required",
        status: false,
      });
    }

    const checkUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!checkUser) {
      return NextResponse.json({
        statusCode: 400,
        message: "Invalid email or password",
        status: false,
      });
    }

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
      },
    });

    if (!user) {
      return NextResponse.json({
        statusCode: 400,
        message: "Unable to find user",
        status: false,
      });
    }

    const isPasswordCorrect =  user.password === password;

    if (!isPasswordCorrect) {
      return NextResponse.json({
        statusCode: 400,
        message: "Invalid email or password",
        status: false,
      });
    }

    return NextResponse.json({
      statusCode: 200,
      message: "User logged in successfully",
      data: user,
      status: true,
    });
    
  } catch (error: unknown | Error) {
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
