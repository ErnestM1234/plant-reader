-- CreateTable
CREATE TABLE "plants" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "desc" VARCHAR(255),

    CONSTRAINT "plants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plant_readers" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "desc" VARCHAR(255),
    "plant_id" INTEGER NOT NULL,

    CONSTRAINT "plant_readers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plant_reader_logs" (
    "id" SERIAL NOT NULL,
    "moisture_level" INTEGER NOT NULL,
    "meta_data" JSONB NOT NULL,
    "plant_reader_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "plant_reader_logs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "plant_readers" ADD CONSTRAINT "plant_readers_plant_id_plants_id_fk" FOREIGN KEY ("plant_id") REFERENCES "plants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plant_reader_logs" ADD CONSTRAINT "plant_reader_logs_plant_reader_id_plant_readers_id_fk" FOREIGN KEY ("plant_reader_id") REFERENCES "plant_readers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
