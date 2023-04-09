<script setup lang="ts">
const route = useRoute();
const toTitleCase = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

useHead({
  title: toTitleCase(route.params.name as string),
});
</script>
<template>
  <div>
    <NavBar />
    <!-- CAR DETAIL PAGE -->
    <div
      class="mx-auto mt-4 max-w-7xl space-y-4 px-4 pb-16 w-3/5 xs:px-0 sm:px-10 lg:px-16"
    >
      <CarDetailHero />
      <CarDetailAttributes />
      <CarDetailDescription />
      <CarDetailContact />
    </div>
    <!-- CAR DETAIL PAGE -->
  </div>
</template>
