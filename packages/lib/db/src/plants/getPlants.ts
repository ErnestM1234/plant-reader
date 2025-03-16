
import prisma from '../index.js';
import { Plant } from '../types.js';


export default async function getPlants(): Promise<Plant[]> {
  try {
      const plants = await prisma.plant.findMany();
      if (!plants) {
          return [];
      }
      return plants.map(({id, name, desc}) => {return {id, name, desc: desc || undefined, readers: []}});
  } catch (error) {
      console.error("Error in getPlant: ", error);
      return [];
  }
}