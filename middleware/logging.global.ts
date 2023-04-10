export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path.includes("profile")) {
    console.log(to.fullPath);
  }
});
