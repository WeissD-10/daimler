-- CreateTable
CREATE TABLE "Vehicle" (
    "id" SERIAL NOT NULL,
    "class" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "power" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "metallicColor" BOOLEAN NOT NULL,
    "colorId" INTEGER NOT NULL,
    "basePrice" INTEGER NOT NULL,
    "extras" TEXT[],

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConfiguratedVehicle" (
    "id" SERIAL NOT NULL,
    "price" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "metallicColor" BOOLEAN NOT NULL,
    "colorId" INTEGER NOT NULL,
    "power" INTEGER NOT NULL,
    "extras" TEXT[],

    CONSTRAINT "ConfiguratedVehicle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Extra" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Extra_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Motor" (
    "id" SERIAL NOT NULL,
    "power" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Motor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Color" (
    "id" SERIAL NOT NULL,
    "color" TEXT NOT NULL,
    "metallic" BOOLEAN NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Color_pkey" PRIMARY KEY ("id")
);
