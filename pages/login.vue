<script setup lang="ts">
definePageMeta({
  layout: "custom",
});
const supabase = useSupabaseClient();

const login = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    // options: { redirectTo: "/" },
  });
  if (error) {
    console.error(error);
  }
};
</script>
<template>
  <div class="mt-10">
    <h1 class="text-5 font-bold mb-7">Login</h1>
    <button @click="login" class="bg-red-400 p-3 rounded text-white font-bold">
      Login with Google
    </button>
  </div>
</template>
