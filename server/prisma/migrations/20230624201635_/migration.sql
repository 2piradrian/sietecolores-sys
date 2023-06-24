/*
  Warnings:

  - The primary key for the `Budget` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Budget` table. The data in that column could be lost. The data in that column will be cast from `String` to `BigInt`.
  - The primary key for the `BudgetProduct` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `budgetId` on the `BudgetProduct` table. The data in that column could be lost. The data in that column will be cast from `String` to `BigInt`.
  - You are about to alter the column `id` on the `BudgetProduct` table. The data in that column could be lost. The data in that column will be cast from `String` to `BigInt`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Budget" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "client" TEXT NOT NULL DEFAULT 'Desconocido',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "total" REAL NOT NULL DEFAULT 0
);
INSERT INTO "new_Budget" ("client", "createdAt", "id", "total") SELECT "client", "createdAt", "id", "total" FROM "Budget";
DROP TABLE "Budget";
ALTER TABLE "new_Budget" RENAME TO "Budget";
CREATE UNIQUE INDEX "Budget_id_key" ON "Budget"("id");
CREATE TABLE "new_BudgetProduct" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "price" REAL NOT NULL DEFAULT 0,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "productId" TEXT NOT NULL,
    "budgetId" BIGINT NOT NULL,
    CONSTRAINT "BudgetProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BudgetProduct_budgetId_fkey" FOREIGN KEY ("budgetId") REFERENCES "Budget" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_BudgetProduct" ("budgetId", "id", "price", "productId", "quantity") SELECT "budgetId", "id", "price", "productId", "quantity" FROM "BudgetProduct";
DROP TABLE "BudgetProduct";
ALTER TABLE "new_BudgetProduct" RENAME TO "BudgetProduct";
CREATE UNIQUE INDEX "BudgetProduct_id_key" ON "BudgetProduct"("id");
CREATE UNIQUE INDEX "BudgetProduct_productId_key" ON "BudgetProduct"("productId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
