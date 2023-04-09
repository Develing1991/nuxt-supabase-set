import cars from "@/data/cars.json";
import makes from "@/data/makes.json";
import { Cars } from "@/types/Car";

export const useCars = () => {
  cars as Cars;
  makes as string[];
  return {
    cars,
    makes,
  };
};
