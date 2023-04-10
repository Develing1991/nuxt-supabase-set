<script setup lang="ts">
import { type Cars } from "@/types/Car";

const { cars } = defineProps<Props>();

const favorite = useLocalStorage<{ [x: number]: boolean }>("favorite", {});
const handleFavorite = (id: number) => {
  if (id in favorite.value) {
    delete favorite.value[id];
  } else {
    favorite.value = {
      ...favorite.value,
      [id]: true,
    };
  }
};

interface Props {
  cars: Cars;
}
</script>
<template>
  <!-- CAR CARDS -->
  <!-- <ClientOnly> -->
  <div class="w-full">
    <CarCard
      v-for="car in cars"
      :key="car.id"
      :car="car"
      @favor="handleFavorite"
      :favored="car.id in favorite"
    />
  </div>
  <!-- </ClientOnly> -->
  <!-- CAR CARDS -->
</template>
