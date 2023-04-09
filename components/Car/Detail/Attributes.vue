<script setup lang="ts">
import { type Features } from "@/types/Car";

const { features } = defineProps<Props>();

interface Props {
  features: Features;
}
</script>
<template>
  <!-- CAR ATTRIBUTES -->
  <div class="mr-10 mt-5 border-b pb-4">
    <div class="flex text-lg mt-2" v-for="feature in features" :key="feature">
      <p class="rounded text-lime-800 mr-3">✓</p>

      <p>{{ feature }}</p>
    </div>
  </div>
  <!-- CAR ATTRIBUTES -->
</template>
