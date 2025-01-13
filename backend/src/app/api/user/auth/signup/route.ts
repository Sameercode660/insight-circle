import { NextResponse, NextRequest } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
    try {
        
    } catch (error: unknown | Error) {
        let customError = new Error(`Something went wrong: ${error}`)

        if(error instanceof Error) {
            customError = error
        }
        console.log(customError)

        return NextResponse.json({statusCode: 500, message: customError.message, status: false})
    }
}