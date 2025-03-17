import * as Postgres from "@prisma/client";

let prisma: Postgres.PrismaClient;
prisma = new Postgres.PrismaClient();

export default prisma;

export * from "./types";
export { default as prisma } from "./client";
export { default as getPlant } from "./plants/getPlant";
export { default as getPlants } from "./plants/getPlants";
