<template>
  <span v-html="mathRender" :class="size" class="m"></span>

</template>
<script lang="ts">
import { defineComponent } from "vue";
import katex from "katex";
export default defineComponent({
  name: "MathRender",
  components: {},
  props: {
    src: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: "normal",
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
<style lang="scss">
@import url("/katex/katex.css");

.normal {
  font-size: var(--font-size);
}

.math-size {
  font-size: var(--math-size);
}

.katex-display {
  overflow: auto hidden
}

.katex-display>.katex {
  white-space: normal
}

/* Add space between broken lines: */
.katex-display>.base {
  margin: 0.25em 0
}

/* Compensate by reducing space around display math */
.katex-display {
  margin: 0.5em 0;
}
</style>
