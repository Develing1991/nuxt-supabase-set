<script setup lang="ts">
const image = useState<Props>("carImage", () => {
  return {
    preview: null,
    image: null,
  };
});
interface Props {
  preview: string | null;
  image: string | null | File;
}
const emits = defineEmits(["changeInput"]);

// useBase64 has change
const onImageUpload = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files) {
    const reader = new FileReader();
    reader.onload = (e) => {
      image.value.preview = e.target?.result as string;
    };
    image.value.image = input.files[0];
    reader.readAsDataURL(input.files[0]);
    emits("changeInput", input.files[0], "image");
  }
};
</script>
<template>
  <div class="md:col-5 offset-md-1 mt-2 w-[100%]">
    <label class="text-cyan-500 mb-1 text-sm" for="">Image*</label>
    <form class="mt-2">
      <div class="form-group">
        <div class="relative">
          <input
            type="file"
            accept="image/*"
            class="opacity-0 absolute cursor-pointer"
            @change="onImageUpload"
          />
          <span class="cursor-pointer">Browser File</span>
        </div>
        <div class="border p-2 mt-3 w-56" v-if="image.preview"></div>
        <img class="object-fill" :src="(image.preview as string)" alt="" />
      </div>
    </form>
  </div>
</template>
