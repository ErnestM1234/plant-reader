-- AlterTable
ALTER TABLE "plant_reader_logs" ALTER COLUMN "meta_data" DROP NOT NULL;

-- AlterTable
ALTER TABLE "plant_readers" ADD COLUMN     "meta_data" JSONB,
ALTER COLUMN "desc" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "plants" ADD COLUMN     "meta_data" JSONB,
ALTER COLUMN "desc" SET DATA TYPE TEXT;
