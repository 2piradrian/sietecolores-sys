-- CreateTable
CREATE TABLE "BudgetProduct" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "price" REAL NOT NULL DEFAULT 0,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "productId" TEXT NOT NULL,
    "budgetId" TEXT NOT NULL,
    CONSTRAINT "BudgetProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BudgetProduct_budgetId_fkey" FOREIGN KEY ("budgetId") REFERENCES "Budget" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Budget" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "client" TEXT NOT NULL DEFAULT 'Desconocido',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "total" REAL NOT NULL DEFAULT 0
);

-- CreateIndex
CREATE UNIQUE INDEX "BudgetProduct_id_key" ON "BudgetProduct"("id");

-- CreateIndex
CREATE UNIQUE INDEX "BudgetProduct_productId_key" ON "BudgetProduct"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "Budget_id_key" ON "Budget"("id");
