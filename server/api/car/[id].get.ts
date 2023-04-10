import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
  if (event.context.params) {
    const { id } = event.context.params;
    const car = await prisma.car.findUnique({
      where: { id: parseInt(id) },
    });

    if (!car) {
      throw createError({
        statusCode: 404,
        message: `Car with ID of ${id} does not exist`,
      });
    }
    return car;
  }
});
