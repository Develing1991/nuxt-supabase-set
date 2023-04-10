import cars from "@/data/cars.json";
import { Cars } from "~/types/Car";
export default defineEventHandler((event) => {
  cars as Cars;
  if (event.context.params) {
    const { city } = event.context.params;
    const { make, minPrice, maxPrice } = getQuery(event);

    let filteredCars = cars.filter(
      (car) => car.city.toLowerCase() === city.toLowerCase()
    );

    if (make) {
      filteredCars = filteredCars.filter(
        (car) => car.make.toLowerCase() === make.toString().toLowerCase()
      );
    }
    if (minPrice) {
      filteredCars = filteredCars.filter(
        (car) => car.price >= parseInt(minPrice.toString())
      );
    }
    if (maxPrice) {
      filteredCars = filteredCars.filter(
        (car) => car.price <= parseInt(maxPrice.toString())
      );
    }
    return filteredCars;
  }
});
