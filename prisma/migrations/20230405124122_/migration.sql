-- CreateTable
CREATE TABLE "user" (
    "user_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "no_of_people" INTEGER NOT NULL,
    "packag_id" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "hotel" (
    "hotel_id" TEXT NOT NULL,
    "hotel_name" TEXT NOT NULL,
    "amount" INTEGER,
    "days" INTEGER
);

-- CreateTable
CREATE TABLE "restaurant" (
    "restaurant_id" TEXT NOT NULL,
    "amount" INTEGER,
    "restaurant_name" TEXT NOT NULL,
    "days" INTEGER
);

-- CreateTable
CREATE TABLE "place" (
    "place_id" TEXT NOT NULL,
    "amount" INTEGER,
    "days" INTEGER,
    "place_name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "packag" (
    "package_id" TEXT NOT NULL,
    "hotel_id" TEXT NOT NULL,
    "place_id" TEXT NOT NULL,
    "restaurant_id" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_user_id_key" ON "user"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "hotel_hotel_id_key" ON "hotel"("hotel_id");

-- CreateIndex
CREATE UNIQUE INDEX "hotel_hotel_name_key" ON "hotel"("hotel_name");

-- CreateIndex
CREATE UNIQUE INDEX "restaurant_restaurant_id_key" ON "restaurant"("restaurant_id");

-- CreateIndex
CREATE UNIQUE INDEX "restaurant_restaurant_name_key" ON "restaurant"("restaurant_name");

-- CreateIndex
CREATE UNIQUE INDEX "place_place_id_key" ON "place"("place_id");

-- CreateIndex
CREATE UNIQUE INDEX "place_place_name_key" ON "place"("place_name");

-- CreateIndex
CREATE UNIQUE INDEX "packag_package_id_key" ON "packag"("package_id");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_packag_id_fkey" FOREIGN KEY ("packag_id") REFERENCES "packag"("package_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "packag" ADD CONSTRAINT "packag_hotel_id_fkey" FOREIGN KEY ("hotel_id") REFERENCES "hotel"("hotel_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "packag" ADD CONSTRAINT "packag_place_id_fkey" FOREIGN KEY ("place_id") REFERENCES "place"("place_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "packag" ADD CONSTRAINT "packag_restaurant_id_fkey" FOREIGN KEY ("restaurant_id") REFERENCES "restaurant"("restaurant_id") ON DELETE RESTRICT ON UPDATE CASCADE;
