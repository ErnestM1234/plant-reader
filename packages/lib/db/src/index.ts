import * as Postgres from '@prisma/client';

let prisma: Postgres.PrismaClient;
prisma = new Postgres.PrismaClient();

export default prisma;