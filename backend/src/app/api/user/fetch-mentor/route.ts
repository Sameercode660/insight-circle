import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { m } from "framer-motion";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const mentors = await prisma.mentor.findMany({})
        
        if(!mentors) {
            return NextResponse.json({
                statusCode: 404,
                message: 'No mentor found',
                status: false
            })
        }

        return NextResponse.json({
            statusCode: 200,
            message: 'Mentor fetched successfully',
            status: true,
            data: mentors
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            statusCode: 500,
            message: 'Unable to run fetch subscriber',
            status: false
        })
    }
}