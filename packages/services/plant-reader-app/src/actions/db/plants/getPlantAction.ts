import getPlant from "@plant-reader/db/plants/getPlant";
import { Plant } from "@plant-reader/db/types";

export default async function getPlantAction({
  id,
}: {
  id: number;
}): Promise<Plant | undefined> {
  const plant = await getPlant({ id });
  return plant;
}
