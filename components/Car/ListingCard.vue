<script setup lang="ts">
import { Listing } from "@/types/Car";

const props = defineProps<Props>();

const emits = defineEmits(["deleteClick"]);

const config = useRuntimeConfig();
</script>
<template>
  <div class="shadow rounded overflow-hidden flex justify-between mb-4">
    <div class="flex">
      <!-- <img
        :src="`${config.public.supabase.url}/storage/v1/object/public/images/${listing.image}`"
        alt=""
        class="w-80 mr-3 h-44"
      /> -->
      <NuxtImg
        provider="imgix"
        :src="listing.image"
        width="300"
        height="500"
        fit="cover"
        class="w-80 mr-3 h-44"
        :modifiers="{ auto: 'format,compress', crop: 'faces' }"
      />
      <div class="p-3">
        <h1 class="text-2xl">{{ listing.name }}</h1>
        <p class="text-blue-400">${{ listing.price }}</p>
      </div>
    </div>
    <div class="p-3 flex">
      <NuxtLink
        class="text-blue-400 mr-5"
        :to="`/profile/listings/view/${listing.id}`"
        >View</NuxtLink
      >
      <p
        class="text-red-400 cursor-pointer"
        @click="$emit('deleteClick', listing.id)"
      >
        Delete
      </p>
    </div>
  </div>
</template>

<script lang="ts">
interface Props {
  listing: Listing;
}
</script>
