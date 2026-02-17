/*
  Warnings:

  - You are about to drop the `SavedTools` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SavedTools" DROP CONSTRAINT "SavedTools_toolId_fkey";

-- DropForeignKey
ALTER TABLE "SavedTools" DROP CONSTRAINT "SavedTools_userId_fkey";

-- DropTable
DROP TABLE "SavedTools";

-- CreateTable
CREATE TABLE "SavedTool" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "toolId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SavedTool_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SavedTool_userId_toolId_key" ON "SavedTool"("userId", "toolId");

-- AddForeignKey
ALTER TABLE "SavedTool" ADD CONSTRAINT "SavedTool_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SavedTool" ADD CONSTRAINT "SavedTool_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES "Tool"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
