/*
  Warnings:

  - You are about to drop the column `dateEnd` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `dateStart` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `hourEnd` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `hourStart` on the `events` table. All the data in the column will be lost.
  - You are about to alter the column `ageRestriction` on the `events` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - Added the required column `dateEvent` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hourEvent` to the `events` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_events" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "limiteParticipants" INTEGER NOT NULL,
    "dateEvent" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "hourEvent" TEXT NOT NULL,
    "ageRestriction" INTEGER NOT NULL,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL
);
INSERT INTO "new_events" ("ageRestriction", "createAt", "id", "limiteParticipants", "name", "status", "updateAt") SELECT "ageRestriction", "createAt", "id", "limiteParticipants", "name", "status", "updateAt" FROM "events";
DROP TABLE "events";
ALTER TABLE "new_events" RENAME TO "events";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
