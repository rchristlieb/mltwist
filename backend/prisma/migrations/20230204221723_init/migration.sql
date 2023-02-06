/*
  Warnings:

  - Added the required column `desc` to the `hosts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `hosts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `hosts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bathrooms` to the `properties` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bedrooms` to the `properties` table without a default value. This is not possible if the table is not empty.
  - Added the required column `beds` to the `properties` table without a default value. This is not possible if the table is not empty.
  - Added the required column `checkIn` to the `properties` table without a default value. This is not possible if the table is not empty.
  - Added the required column `checkOut` to the `properties` table without a default value. This is not possible if the table is not empty.
  - Added the required column `desc` to the `properties` table without a default value. This is not possible if the table is not empty.
  - Added the required column `guests` to the `properties` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `properties` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `properties` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `properties` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "host_properties" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "hostId" INTEGER NOT NULL,
    "propertyId" INTEGER NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_hosts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "url" TEXT NOT NULL
);
INSERT INTO "new_hosts" ("id") SELECT "id" FROM "hosts";
DROP TABLE "hosts";
ALTER TABLE "new_hosts" RENAME TO "hosts";
CREATE TABLE "new_properties" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "checkIn" TEXT NOT NULL,
    "checkOut" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "guests" INTEGER NOT NULL,
    "bedrooms" INTEGER NOT NULL,
    "beds" INTEGER NOT NULL,
    "bathrooms" INTEGER NOT NULL
);
INSERT INTO "new_properties" ("id") SELECT "id" FROM "properties";
DROP TABLE "properties";
ALTER TABLE "new_properties" RENAME TO "properties";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
