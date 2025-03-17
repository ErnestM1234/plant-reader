"use client";

import Title from "@/components/Title";
import { ListHeader, ListContent, ListItem, List } from "@/components/List";
import { LinedContent, Paper, UnlinedContent } from "@/components/Paper";
import { Plant, PlantReader } from "@plant-reader/db/types";
import { useState } from "react";
import { LineChart } from "react-chartkick";
import "chart.js";
import Header from "@/components/Header";
import { DynamicHeightContainer } from "@/components/DynamicHeightContainer";
import Doodles from "@/components/Doodles";
import Link from "next/link";
import Footer from "@/components/Footer";

interface Props {
  plant: Plant | undefined;
}

export default function PlantViewer({ plant }: Props) {
  // moisture reader data
  const [reader, setReader] = useState<PlantReader | undefined>(
    plant?.readers?.[0]
  );
  const chartData =
    reader?.plantReaderLogs.reduce((acc: Record<string, number>, log) => {
      acc[log.createdAt.toISOString()] = log.moistureLevel;
      return acc;
    }, {}) ?? {};

  return (
    <Paper>
      <UnlinedContent>
        <Doodles count={3}>
          <Title>Ernest&apos;s {plant?.name}</Title>
        </Doodles>
      </UnlinedContent>

      <LinedContent>
        <Header>About {plant?.name}</Header>
        <p>{plant?.desc}</p>
        <Header>{plant?.name}&apos;s Moisture Levels</Header>
      </LinedContent>

      {plant?.readers && (
        <UnlinedContent>
          <select
            value={reader?.id ?? ""}
            onChange={(e) => {
              const selectedReaderId = Number(e.target.value);
              const selectedReader = plant?.readers.find(
                (reader) => reader.id === selectedReaderId
              );
              if (selectedReader) setReader(selectedReader);
            }}
          >
            <option value="">Select a reader</option>
            {plant?.readers.map((reader) => (
              <option key={reader.id} value={reader.id}>
                {reader.name}
              </option>
            ))}
          </select>
          <DynamicHeightContainer defaultHeight="9rem">
            <LineChart data={chartData} />
          </DynamicHeightContainer>
        </UnlinedContent>
      )}

      <LinedContent>
        <List>
          <ListHeader>Links</ListHeader>
          <ListContent>
            <ListItem>
              <Link href={`/`}>Home</Link>
            </ListItem>
          </ListContent>
        </List>
        <List>
          <Footer />
        </List>
      </LinedContent>
    </Paper>
  );
}
