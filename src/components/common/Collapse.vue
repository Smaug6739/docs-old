<template>
  <button type="button" class="collapsible" @click="toggle">
    Open Collapsible
  </button>
  <div class="content">
    <p>Lorem ipsum...</p>
  </div>
</template>
<style lang="scss" scoped>
.collapsible {
  background-color: var(-bg-color-dimmed);
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
}

/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
.active,
.collapsible:hover {
  background-color: var(--bg-color-dimmed);
}

/* Style the collapsible content. Note: hidden by default */
.content {
  padding: 0 18px;
  background-color: white;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}
</style>
<script lang="ts">
import { defineComponent } from "vue";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
export default defineComponent({
  name: "Collapse",
  methods: {
    toggle(event: MouseEvent) {
      const element: HTMLElement = event.target as HTMLElement;
      element.classList.toggle("active");
      var content = element.nextElementSibling as HTMLElement;
      if (content.style.maxHeight) {
        content.style.maxHeight = "";
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    },
  },
});
</script>
