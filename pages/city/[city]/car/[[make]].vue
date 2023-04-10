<script setup lang="ts">
const route = useRoute();

// query는 캐시된 데이터를 사용하기 때문에 computed로 사용
const minPrice = computed(() => route.query.minPrice);
const maxPrice = computed(() => route.query.maxPrice);

const { data: cars, refresh } = await useFetchCars(
  route.params.city as string,
  {
    minPrice,
    maxPrice,
    make: route.params.make as string,
  }
);
watch(
  () => route.query,
  () => {
    refresh();
  }
);
</script>
<template>
  <div>
    <ClientOnly>
      <CarCards v-if="cars?.length" :cars="cars" />
      <h1 v-else class="text-red-400">No Cars Found with Filters</h1>
    </ClientOnly>
  </div>
</template>
