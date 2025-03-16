import getPlantsAction from "@/actions/db/plants/getPlantsAction";
import { PlantList } from "./PlantList";

export default async function Page() {
  const plants = await getPlantsAction();
  return <PlantList initialPlants={plants} />;
}
