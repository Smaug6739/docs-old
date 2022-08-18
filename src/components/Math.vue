<template >
  <span class="container">
    <i v-html="mathRender"></i></span>
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
        displayMode: true,
        leqno: true,

      });
    },
  },
});
</script>
<style lang="scss">
@import url("/katex/katex.css");

.normal {
  font-size: 14px;
}

.math-size {
  font-size: var(--math-size);
}

.katex-display,
.katex-display>.katex,
.katex-display>.katex>.katex-html {
  display: inline !important;
}

.katex-display {
  text-align: left !important;
}

.katex-display>.katex {
  text-align: left !important;
}


.container {
  display: inline-flex;
  vertical-align: top;
  max-width: 100%;
  overflow-y: hidden;
  overflow-x: auto;
  padding-right: 2px;
}
</style>