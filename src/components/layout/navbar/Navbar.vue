<template>
  <header class="header">
    <div></div>
    <nav>
      <ul class="menu">
        <li class="link">
          <a href="#" class="nav-links">Home</a>
        </li>
        <li class="link">
          <router-link to="/maths">Mathématiques</router-link>
        </li>
        <li class="link">
          <router-link to="/physics">Physique</router-link>
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
  background: #11101d;
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
a {
  font-family: "Poppins", sans-serif;
}
</style>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Navbar",
});
</script>
