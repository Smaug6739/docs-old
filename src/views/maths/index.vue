<template>
  <div>
    <Sidebar />
    <router-view class="view left-sidebar" name="Content" />
    <MathRender math="c = \pm\sqrt{a^2 + b^2}" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "../../components/layout/sidebar/Sidebar.vue";
import MathRender from "../../components/Math.vue";
export default defineComponent({
  name: "Maths",
  components: {
    Sidebar,
    MathRender,
  },
});
</script>
