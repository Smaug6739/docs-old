<template>
  <div>
    <p>Index</p>
    <Sidebar />
    TOP
    <router-view class="view left-sidebar" name="Content" />
    BOTTOM
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "../../components/layout/sidebar/Sidebar.vue";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

export default defineComponent({
  name: "Maths",
  components: {
    Sidebar,
  },
});
</script>
