<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Navbar from "./components/layout/navbar/Navbar.vue";
export default defineComponent({
  name: "App",
  components: {
    Navbar,
  },
  mounted() {
    console.log("App mounted");
  },
});
</script>

<style scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  color: var(--font-color);
  max-width: 100% !important;
}
</style>
