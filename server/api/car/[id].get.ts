import cars from "@/data/cars.json";
import { Cars } from "~/types/Car";
export default defineEventHandler((event) => {
  cars as Cars;
  if (event.context.params) {
    const { id } = event.context.params;
    const car = cars.find((car) => car.id === parseInt(id));

    if (!car) {
      throw createError({
        statusCode: 404,
        message: `Car with ID of ${id} does not exist`,
      });
    }
    return car;
  }
});
