import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
  if (event.context.params) {
    const { userId } = event.context.params;

    return await prisma.car.findMany({
      where: {
        listerId: userId,
      },
      // queryParam이나 post 요청으로 받아서 client에서 오버페칭 하지 않게
      // 조회할 컬럼만 [key]:true로 받아서 조회해도 될거같음.
      select: {
        image: true,
        id: true,
        name: true,
        price: true,
      },
    });
  }
});
