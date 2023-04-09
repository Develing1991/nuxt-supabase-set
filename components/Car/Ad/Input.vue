<script setup lang="ts">
import { Makes } from "@/types/Car";

const { title, placeholder, name } = defineProps<Props>();
const emits = defineEmits(["changeInput"]);
const state = ref("");
const onChange = () => {
  emits("changeInput", state.value, name);
};
interface Props {
  title: string;
  placeholder: string;
  name: string;
}
</script>
<template>
  <div class="flex flex-col w-[48%] mt-2">
    <label class="text-cyan-500 mb-1 text-sm" for="">{{ title }}</label>
    <input
      type="text"
      class="p-2 border w-100 rounded"
      :placeholder="placeholder"
      v-model="state"
      :name="name"
      @input="onChange"
    />
  </div>
</template>
