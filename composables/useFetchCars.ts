import { Cars } from "~/types/Car";

export default async <T>(city: string, filters: Filters) => {
  const route = useRoute();

  const { data, error, refresh } = await useFetch<T>(`/api/cars/${city}`, {
    params: {
      ...filters,
    },
  });
  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: "Unable to fetch cars",
    });
  }
  return { data, refresh };
};

interface Filters {
  make?: string;
  minPrice: ComputedRef;
  maxPrice: ComputedRef;
}
