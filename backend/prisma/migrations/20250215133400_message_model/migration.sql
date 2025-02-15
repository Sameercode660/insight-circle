/*
  Warnings:

  - You are about to drop the column `recieverId` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `recieverName` on the `Message` table. All the data in the column will be lost.
  - Added the required column `receiverId` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `receiverName` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Message" DROP COLUMN "recieverId",
DROP COLUMN "recieverName",
ADD COLUMN     "receiverId" TEXT NOT NULL,
ADD COLUMN     "receiverName" TEXT NOT NULL;
