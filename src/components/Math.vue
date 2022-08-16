<template>
  <span v-html="mathRender" class="math"></span>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import katex from "katex";
export default defineComponent({
  name: "Math",
  components: {},
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  computed: {
    mathRender(): string {
      return katex.renderToString(this.src, {
        throwOnError: false,
      });
    },
  },
});
</script>
<style lang="scss" scoped>
@import "https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css";

.math {
  font-size: 20px;
}
</style>
