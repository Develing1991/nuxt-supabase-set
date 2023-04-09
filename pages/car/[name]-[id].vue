<script setup lang="ts">
const route = useRoute();
const { toTitleCase } = useUtilites();
useHead({
  title: toTitleCase(route.params.name as string),
});
definePageMeta({
  layout: "custom",
});
</script>
<template>
  <div>
    <CarDetailHero />
    <CarDetailAttributes />
    <CarDetailDescription />
    <CarDetailContact />
  </div>
</template>
