<script setup lang="ts">
import { Makes } from "@/types/Car";

const { title, options, name } = defineProps<Props>();
const emits = defineEmits(["changeInput"]);
const state = ref("");
const onChange = () => {
  emits("changeInput", state.value, name);
};
interface Props {
  title: string;
  options: Makes;
  name: string;
}
</script>
<template>
  <div class="flex flex-col w-[48%] mt-2">
    <label class="text-cyan-500 mb-1 text-sm" for="">{{ title }}</label>
    <select
      class="p-2 border w-100 rounded"
      name=""
      id=""
      @change="onChange"
      v-model="state"
    >
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>
