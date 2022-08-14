<template>
  <header class="header">
    <div></div>
    <nav>
      <ul class="menu">
        <li class="link">
          <router-link to="/" class="nav-links">Home</router-link>
        </li>
        <li class="link">
          <router-link to="/projects/1">Projects</router-link>
        </li>
        <li class="link">
          <router-link to="/about">About</router-link>
        </li>
        <li class="link">
          <a
            href="https://github.com/Smaug6739"
            target="__blank"
            class="nav-links"
            >Github</a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100%;
  background: red;
}
ul {
  height: 60px;

  display: flex;
  align-items: center;

  justify-content: end;
  list-style: none;
}
li {
  padding-right: 15px;
}
</style>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Navbar",
});
</script>
