<script setup lang="ts">
const route = useRoute();
const modal = ref<Record<string, boolean>>({
  make: false,
  location: false,
  price: false,
});
const city = ref("");
const updateModal = (key: string) => {
  // const updateModal = (key: string, off?: boolean) => {
  // modal.value[key] = off ? false: !modal.value[key];
  modal.value[key] = !modal.value[key];
};
const onChangeLocation = () => {
  if (!city.value) return;
  if (!isNaN(parseInt(city.value))) {
    // number is Error Client Side Error
    throw createError({
      statusCode: 400,
      message: "Invalid city format",
    });
  }
  // Object.keys(modal.value).forEach((key)=> updateModal(key, true)) //
  updateModal("location");
  navigateTo(`/city/${city.value}/car/${route.params.make}`);
  city.value = "";
};
</script>
<template>
  <!-- CAR SIDE BAR -->
  <div class="shadow border w-96 mr-10 z-30 h-[190px]">
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Location</h3>
      <h3 class="text-blue-400 capitalize" @click="updateModal('location')">
        {{ route.params.city }}
      </h3>
      <div
        v-if="modal.location"
        class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white"
      >
        <input type="text" class="border p-1 rounded" v-model="city" />
        <button
          class="bg-blue-400 w-full mt-2 rounded text-white p-5"
          @click="onChangeLocation"
        >
          Apply
        </button>
      </div>
    </div>
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Make</h3>
      <h3 class="text-blue-400 capitalize">toyota</h3>
    </div>
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Price</h3>
      <h3 class="text-blue-400 capitalize">any</h3>
    </div>
  </div>
  <!-- CAR SIDE BAR -->
</template>
