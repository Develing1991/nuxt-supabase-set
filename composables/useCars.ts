import cars from "@/data/cars.json";
import makes from "@/data/makes.json";
import listings from "@/data/listings.json";
import { Cars, Listings, Makes } from "@/types/Car";

export const useCars = () => {
  cars as Cars;
  makes as Makes;
  listings as Listings;
  return {
    cars,
    makes,
    listings,
  };
};
