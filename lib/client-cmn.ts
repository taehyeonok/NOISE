import { PrismaClient } from "../prisma/client/lats_cmn";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

const prisma = globalForPrisma.prisma || new PrismaClient();

export default prisma;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// eslint-disable-next-line import/no-anonymous-default-export
// export default new PrismaClient();
