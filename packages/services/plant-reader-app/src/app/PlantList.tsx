"use client";

import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import { List, ListContent, ListHeader, ListItem } from "@/components/List";
import { Paper, LinedContent, UnlinedContent } from "@/components/Paper";
import { Plant } from "@plant-reader/db/types";
import Link from "next/link";
import Doodles from "@/components/Doodles";
import Footer from "@/components/Footer";

interface Props {
  initialPlants: Plant[];
}

export function PlantList({ initialPlants }: Props) {
  return (
    <Paper>
      <Doodles count={3}>
        <UnlinedContent>
          <Title>Ernest&apos;s Plants</Title>
          <Subtitle>Come see how my plants are doing</Subtitle>
        </UnlinedContent>
        <LinedContent>
          <p>
            This is a website I built to keep track of the water levels of my
            plants. Feel free to check them out with me and help me keep them
            healthy!
          </p>
          <List>
            <ListHeader>My Plants:</ListHeader>
            <ListContent>
              {initialPlants.map((plant) => (
                <ListItem key={plant.id}>
                  <Link href={`/plants/${plant.id}`}>{plant.name}</Link>
                </ListItem>
              ))}
            </ListContent>
          </List>

          <List>
            <Footer />
          </List>
        </LinedContent>
      </Doodles>
    </Paper>
  );
}
