<script setup lang="ts">
definePageMeta({
  layout: "custom",
  middleware: ["auth"],
});
const { makes } = useCars();
const user = useSupabaseUser();

const info = useState<Info>("adInfo", () => ({
  make: "",
  model: "",
  year: "",
  miles: "",
  price: "",
  city: "",
  seats: "",
  features: "",
  description: "",
  image: "sfdsd",
}));
const errorMessage = ref("");

const onChangeInput = (data: string, name: string) => {
  info.value[name] = data;
};

const inputs = [
  { id: 1, title: "Model *", name: "model", placeholder: "Civic" },
  { id: 2, title: "Year *", name: "year", placeholder: "2019" },
  { id: 3, title: "Price *", name: "price", placeholder: "1000" },
  { id: 4, title: "Miles *", name: "miles", placeholder: "10000" },
  { id: 5, title: "City *", name: "city", placeholder: "Austin" },
  { id: 6, title: "Number of Seats *", name: "seats", placeholder: "5" },
  { id: 7, title: "Features *", name: "features", placeholder: "Leather Inte" },
];

const isButtonDisabled = computed(() => {
  for (let key in info.value) {
    if (!info.value[key]) return true;
  }
  return false;
});

const handleSubmit = async () => {
  const body: Body = {
    ...info.value,
    city: info.value.city.toLowerCase(),
    features: info.value.features?.split(", "),
    numberOfSeats: parseInt(info.value.seats as string),
    miles: parseInt(info.value.miles),
    price: parseInt(info.value.price),
    year: parseInt(info.value.year),
    name: `${info.value.make} ${info.value.model}`,
    listerId: user.value?.id,
    image: "dfsfds",
  };
  delete body.seats;

  try {
    const response = await $fetch("/api/car/listings", {
      method: "POST",
      body,
    });
    navigateTo("/profile/listings");
  } catch (error: any) {
    errorMessage.value = error.statusMessage;
  }
  useError();
};
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
      <div>
        <button
          class="bg-blue-400 text-white rounded py-2 px-7 mt-3"
          :disabled="isButtonDisabled"
          :class="isButtonDisabled ? 'bg-blue-100' : ''"
          @click="handleSubmit"
        >
          Submit
        </button>
        <p v-if="errorMessage" class="mt-3 text-red-400">{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<!-- local types... -->
<script lang="ts">
interface Info {
  make: string;
  model: string;
  year: string;
  miles: string;
  price: string;
  city: string;
  seats?: string;
  features: string;
  description: string;
  image: string;
  [key: string]: any;
}
interface Body {
  [key: string]: any;
}
</script>
