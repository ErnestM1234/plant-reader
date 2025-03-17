import prisma from "../client";
import { Plant } from "../types";

export default async function getPlants(): Promise<Plant[]> {
  try {
    const plants = await prisma.plant.findMany({
      select: {
        id: true,
        name: true,
        desc: true,
        readers: {
          select: {
            id: true,
            name: true,
            metaData: true,
            plantReaderLogs: {
              select: {
                id: true,
                createdAt: true,
                moistureLevel: true,
                metaData: true,
              },
            },
          },
        },
      },
    });
    return plants.map((plant) => ({
      id: plant.id,
      name: plant.name,
      desc: plant.desc || undefined,
      readers: plant.readers.map((reader) => ({
        id: reader.id,
        name: reader.name,
        metaData: (reader.metaData as Record<string, any>) || undefined,
        plantReaderLogs: reader.plantReaderLogs.map((log) => ({
          id: log.id,
          createdAt: log.createdAt,
          moistureLevel: log.moistureLevel,
          metaData: (log?.metaData as Record<string, any>) || undefined,
        })),
      })),
    }));
  } catch (error) {
    console.error("Error in getPlants: ", error);
    return [];
  }
}
