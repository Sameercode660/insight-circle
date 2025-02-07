import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function GET() {
    try {
        const menteeList = await prisma.user.findMany({})

        if(!menteeList) {
            return NextResponse.json({
                statusCode: 400, 
                message: 'unable to fetch list',
                status: false
            })
        }

        return NextResponse.json({
            statusCode: 200,
            message: 'fetched list sucessfully',
            data: menteeList,
            status: true
        })
        
    } catch (error) {
        console.error(error)

        return NextResponse.json({
            statusCode: 500, 
            message: 'Unable to run the mentee list controller',
            status: false
        })
    }
}