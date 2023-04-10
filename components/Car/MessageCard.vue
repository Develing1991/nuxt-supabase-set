<script setup lang="ts">
const { message } = defineProps<Props>();
</script>
<template>
  <div class="even:bg-gray-100 p-4">
    <h1 class="font-bold text-2xl">{{ message.name }}</h1>
    <p class="text-gray-700">
      {{ message.message }}
    </p>
    <div class="flex items-center mt-4">
      <p class="text-green-700 mr-10">{{ message.email }}</p>
      <div class="text-blue-500">{{ message.phone }}</div>
    </div>
  </div>
</template>

<script lang="ts">
interface Props {
  message: Message;
}
type Message = {
  message: string;
  name: string;
  email: string;
  phone: string;
};
</script>
