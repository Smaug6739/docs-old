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
  // make it inline, so it can render with your text even after `displayMode:true`
}

.katex-display {
  text-align: left !important;
}

.katex-display>.katex {
  text-align: left !important;
}
</style>
