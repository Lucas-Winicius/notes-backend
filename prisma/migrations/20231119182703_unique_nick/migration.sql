/*
  Warnings:

  - A unique constraint covering the columns `[nick]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Users_nick_key" ON "Users"("nick");
