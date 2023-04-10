<script lang="ts" setup>
const user = useSupabaseUser();
const supabase = useSupabaseClient();

const logout = async () => {
  const { error } = await supabase.auth.signOut();
  // try {
  //   await $fetch("/api/_supabase/session", {
  //     method: "POST",
  //     body: {
  //       event: "SIGNED_OUT",
  //       session: null,
  //     },
  //   });
  // user.value = null;
  // } catch (error) {
  //   console.error(error);
  // }
  navigateTo("/");
  if (error) {
    console.error(error);
  }
};
</script>

<template>
  <!-- NAVBAR -->
  <header
    class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md"
  >
    <NuxtLink class="text-3xl font-mono" to="/">CarTrader</NuxtLink>
    <div v-if="user" class="flex">
      <NuxtLink to="/profile/listings" class="mr-5">profile</NuxtLink>
      <p class="cursor-pointer" @click="logout">Logout</p>
    </div>
    <NuxtLink v-else to="/login">Login</NuxtLink>
  </header>
  <!-- NAVBAR -->
</template>

<style scoped></style>
