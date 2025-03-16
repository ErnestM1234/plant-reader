
import prisma from '../index.js';
import { Plant } from '../types.js';


export default async function getPlant({ id } : { id: number }): Promise<Plant | undefined> {
    try {
        const plant = await prisma.plant.findUnique({
            where: { id },
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
                            }
                        }
                    }
                }
            }
        });
        if (!plant) {
            return undefined;
        }
        return {
            id: plant.id,
            name: plant.name,
            desc: plant.desc || undefined,
            readers: plant.readers.map(reader => ({
                id: reader.id,
                name: reader.name,
                metaData: reader.metaData as Record<string, any> || undefined,
                plantReaderLogs: reader.plantReaderLogs.map(log => ({
                    id: log.id,
                    createdAt: log.createdAt,
                    moistureLevel: log.moistureLevel,
                    metaData: log?.metaData as Record<string, any> || undefined
                })),
            }))
        };
    } catch (error) {
        console.error("Error in getPlant: ", error);
        return undefined;
    }
}