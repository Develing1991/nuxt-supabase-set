<script setup lang="ts">
import heartFilled from "@/assets/heartFilled.png";
import heartOutline from "@/assets/heartOutline.png";
import { type Car } from "@/types/Car";
const { car } = defineProps<Props>();
interface Props {
  car: Car;
  favored: boolean;
}

const emit = defineEmits(["favor"]);
// const favored = useState(`favored-${car.id}`, () => false);
const config = useRuntimeConfig();
</script>
<template>
  <!-- CAR CARD -->
  <div
    class="relative shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]"
  >
    <img
      :src="favored ? heartFilled : heartOutline"
      class="absolute w-7 right-5 top-2 z-20"
      alt=""
      @click="emit('favor', car.id)"
    />
    <div class="flex h-full" @click="navigateTo(`/car/${car.name}-${car.id}`)">
      <NuxtImg
        :src="`${config.public.supabase.url}/storage/v1/object/public/images/${car.image}`"
        alt=""
        class="w-[300px] h-full"
      />
      <div class="p-4 flex flex-col">
        <div>
          <h1 class="text-2xl text-blue-700">{{ car.name }}</h1>
          <p class="text-gray-700">
            {{ car.description }}
          </p>
        </div>
        <h1 class="my-auto text-xl">${{ car.price }}</h1>
      </div>
    </div>
  </div>
  <!-- CAR CARD -->
</template>
