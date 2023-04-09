<script setup lang="ts">
const { description } = defineProps<Props>();

interface Props {
  description: string;
}
</script>
<template>
  <!-- CAR DESCRIPTION -->
  <div class="mt-5">
    <p class="mb-10">
      {{ description }}
    </p>
  </div>
  <!-- CAR DESCRIPTION -->
</template>
