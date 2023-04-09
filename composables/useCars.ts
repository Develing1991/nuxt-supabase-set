import cars from "@/data/cars.json";
import { Cars } from "@/types/Car";
export const useCars = () => {
  cars as Cars;
  return {
    cars,
  };
};
