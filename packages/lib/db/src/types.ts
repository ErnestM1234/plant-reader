

export type Plant = {
    id: number;
    name: string;
    desc?: string;
    metaData?: Record<string, any>;
    readers: PlantReader[];
};

export type PlantReader = {
    id: number;
    name: string;
    plantReaderLogs: PlantReaderLog[];
    metaData?: Record<string, any>;
}

export type PlantReaderLog = {
    id: number;
    createdAt: Date;
    moistureLevel: number;
    metaData?: Record<string, any>;
}