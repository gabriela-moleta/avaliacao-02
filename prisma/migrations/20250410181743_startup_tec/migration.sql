-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_startups" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "capacity" INTEGER,
    "category" TEXT,
    "price" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_startups" ("capacity", "category", "createdAt", "date", "description", "id", "location", "price", "title", "updatedAt") SELECT "capacity", "category", "createdAt", "date", "description", "id", "location", "price", "title", "updatedAt" FROM "startups";
DROP TABLE "startups";
ALTER TABLE "new_startups" RENAME TO "startups";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
