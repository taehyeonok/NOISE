import { PrismaClient } from "../prisma/client/lats_noise";

const globalForPrismaNoise = globalThis as unknown as {
  prismaNoise: PrismaClient;
};

const prismaVent = globalForPrismaNoise.prismaNoise || new PrismaClient();

export default prismaVent;

if (process.env.NODE_ENV !== "production") globalForPrismaNoise.prismaNoise = prismaVent;

// eslint-disable-next-line import/no-anonymous-default-export
// export default new PrismaClient();
