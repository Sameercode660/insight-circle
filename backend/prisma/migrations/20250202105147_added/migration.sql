-- CreateTable
CREATE TABLE "askedQuestion" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "askedQuestion_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "askedQuestion" ADD CONSTRAINT "askedQuestion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
