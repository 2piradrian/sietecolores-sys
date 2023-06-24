-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT 'Desconocido',
    "type" TEXT NOT NULL DEFAULT 'Desconocido',
    "size" TEXT NOT NULL DEFAULT 'Desconocido',
    "weight" REAL NOT NULL DEFAULT 0
);
INSERT INTO "new_Product" ("id", "name", "size", "type", "weight") SELECT "id", "name", "size", "type", "weight" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE UNIQUE INDEX "Product_id_key" ON "Product"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
