<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "../../components/layout/sidebar/Sidebar.vue";
import Collapse from "../../components/common/Collapse.vue";
export default defineComponent({
  name: "Physics",
  components: {
    Sidebar,
    Collapse,
  },
});
</script>

<template>
  <p>Physics</p>
  <Collapse />
  <Sidebar />
</template>
