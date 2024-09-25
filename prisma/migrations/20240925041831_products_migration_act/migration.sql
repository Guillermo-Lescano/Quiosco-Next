/*
  Warnings:

  - You are about to drop the column `categotyId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `nombre` on the `Product` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_categotyId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "categotyId",
DROP COLUMN "nombre",
ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
