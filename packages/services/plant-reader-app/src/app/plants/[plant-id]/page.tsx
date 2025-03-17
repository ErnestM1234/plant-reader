import getPlantAction from "@/actions/db/plants/getPlantAction";
import PlantViewer from "./PlantViewer";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    "plant-id": string;
  }>;
}

export default async function Page({ params }: Props) {
  // Get the plant ID from the URL
  const { "plant-id": _plantId } = await params;
  const plantId = Number(_plantId);

  // If the plant ID is not a number, return a 404
  if (isNaN(plantId)) {
    notFound();
  }

  // Get the plant from the database
  const plant = await getPlantAction({ id: plantId });

  // If the plant is not found, return a 404
  if (!plant) {
    notFound();
  }

  return <PlantViewer plant={plant} />;
}
