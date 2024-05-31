import { PrismaClient } from "../prisma/client/lats_noise";

const globalForPrismaNoise = globalThis as unknown as {
  prismaNoise: PrismaClient;
};

const prismaNoise = globalForPrismaNoise.prismaNoise || new PrismaClient();

export default prismaNoise;

if (process.env.NODE_ENV !== "production") globalForPrismaNoise.prismaNoise = prismaNoise;

// eslint-disable-next-line import/no-anonymous-default-export
// export default new PrismaClient();
