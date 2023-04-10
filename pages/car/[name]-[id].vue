<script setup lang="ts">
import { Car } from "@/types/Car";

// const { cars } = useCars();
const route = useRoute();
const { data: car } = await useFetchCar<Car>(route.params.id as string);
const { toTitleCase } = useUtilites();
useHead({
  title: toTitleCase(route.params.name as string),
});
definePageMeta({
  layout: "custom",
});

// const car = computed(() => {
//   const id = parseInt(route.params.id as string);
//   return cars.find((car) => car.id === id);
// });

// if (!car.value) {
//   // Occur Server Side Error
//   throw createError({
//     statusCode: 404,
//     message: `Car with ID of ${route.params.id} does not exist`,
//   });
// }
</script>
<template>
  <div v-if="car">
    <CarDetailHero :car="car" />
    <CarDetailAttributes :features="car.features" />
    <CarDetailDescription :description="car.description" />
    <CarDetailContact />
  </div>
</template>
