<template>
  <p v-html="mathRender" class="math"></p>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import katex from "katex";
export default defineComponent({
  name: "Math",
  components: {},
  props: {
    math: {
      type: String,
      required: true,
    },
  },
  computed: {
    mathRender(): string {
      return katex.renderToString(this.math, {
        throwOnError: false,
      });
    },
  },
});
</script>
<style lang="scss" scoped>
@import "https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css";
.math {
  font-size: 30px;
}
</style>
