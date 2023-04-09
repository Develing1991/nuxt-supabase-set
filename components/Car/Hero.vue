<script lang="ts" setup></script>

<template>
  <!-- HOME HERO -->
  <div
    class="relative h-screen w-100 bg-no-repeat bg-cover bg-bottom bg-[url('https://cdn.aitimes.com/news/photo/202207/145788_153268_4952.jpg')]"
  >
    <div class="z-10 absolute w-full h-full flex justify-center items-center">
      <div class="text-center w-1/2">
        <h1 class="text-8xl font-serif mb-10 text-white">Find your drive</h1>
        <CarSearchBar />
      </div>
    </div>
    <div class="z-1 absolute w-full h-full bg-black opacity-50"></div>
  </div>
  <!-- HOME HERO -->
</template>

<style scoped></style>
