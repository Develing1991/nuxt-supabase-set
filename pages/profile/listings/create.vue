<script setup lang="ts">
definePageMeta({
  layout: "custom",
  middleware: ["auth"],
});
const { makes } = useCars();
const info = useState<{ [key: string]: string | null }>("adInfo", () => ({
  make: "",
  model: "",
  year: "",
  miles: "",
  price: "",
  city: "",
  seats: "",
  features: "",
  description: "",
  image: null,
}));
const onChangeInput = (data: string, name: string) => {
  info.value[name] = data;
};

const inputs = [
  { id: 1, title: "Model *", name: "model", placeholder: "Civic" },
  { id: 2, title: "Year *", name: "year", placeholder: "2019" },
  { id: 3, title: "Miles *", name: "miles", placeholder: "10000" },
  { id: 4, title: "City *", name: "city", placeholder: "Austin" },
  { id: 5, title: "Number of Seats *", name: "seats", placeholder: "5" },
  { id: 6, title: "Features *", name: "features", placeholder: "Leather Inte" },
];
</script>
<template>
  <div>
    <div class="mt-24">
      <h1 class="text-6xl">Create a New Listing</h1>
    </div>
    <div class="shadow rounded p-3 mt-5 flex flex-wrap justify-between">
      <CarAdSelect
        title="Make *"
        :options="makes"
        name="make"
        @change-input="onChangeInput"
      />
      <CarAdInput
        v-for="input in inputs"
        :key="input.id"
        :title="input.title"
        :name="input.name"
        :placeholder="input.placeholder"
        @change-input="onChangeInput"
      />
      <CarAdTextarea
        title="Description *"
        name="description"
        placeholder="sdf"
        @change-input="onChangeInput"
      />
      <CarAdImage @change-input="onChangeInput" />
    </div>
  </div>
</template>
