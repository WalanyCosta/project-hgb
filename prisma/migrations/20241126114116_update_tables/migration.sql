/*
  Warnings:

  - You are about to drop the column `createdAt` on the `participants` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `participants` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `participants` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `participants` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_participants" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "phone" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "birthday" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "participants_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_participants" ("birthday", "gender", "id", "phone", "userId") SELECT "birthday", "gender", "id", "phone", "userId" FROM "participants";
DROP TABLE "participants";
ALTER TABLE "new_participants" RENAME TO "participants";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
