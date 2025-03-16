import getPlants from "@plant-reader/db/plants/getPlants";

export default async function getPlantsAction() {
  const plants = await getPlants();
  return plants;
}
