<script setup lang="ts">
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
  <div class="flex flex-col w-[100%] mt-2">
    <label for="" class="text-cyan-500 mb-1 text-sm">{{ title }}</label>
    <textarea
      type="text"
      class="p-2 border w-100 rounded"
      :placeholder="placeholder"
      v-model="state"
      :name="name"
      @input="onChange"
    ></textarea>
  </div>
</template>
