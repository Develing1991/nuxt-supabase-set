import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
interface Filters {
  [key: string]: any;
}
export default defineEventHandler((event) => {
  if (event.context.params) {
    const { city } = event.context.params;
    const { make, minPrice, maxPrice } = getQuery(event);

    const filters: Filters = {
      city: city.toLowerCase(),
    };

    if (make) {
      filters.make = make;
    }

    if (minPrice || maxPrice) {
      filters.price = {};
    }

    if (minPrice) {
      filters.price.gte = parseInt(minPrice.toString());
    }

    if (maxPrice) {
      filters.price.lte = parseInt(maxPrice.toString());
    }

    return prisma.car.findMany({
      where: filters,
    });

    // return prisma.car.findMany({
    //   where: {
    //     city: "toronto",
    //     make: "Toyota",
    //     price: {
    //       gte: 50000,
    //       lte: 145000,
    //     },
    //   },
    // });
  }
});
