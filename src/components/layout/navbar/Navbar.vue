<template>
  <header class="header">
    <div></div>
    <nav>
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn"
        ><span class="navicon"></span
      ></label>
      <ul class="menu">
        <li class="link">
          <router-link to="/" class="nav-links" @click="close"
            >Home</router-link
          >
        </li>
        <li class="link" @click="close">
          <router-link to="/projects/1">Projects</router-link>
        </li>
        <li class="link" @click="close">
          <router-link to="/about">About</router-link>
        </li>
        <li class="link">
          <a
            href="https://github.com/Smaug6739"
            target="__blank"
            class="nav-links"
            @click="close"
            >Github</a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header {
  background-color: #11101d;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  //position: fixed;
  width: 100%;
  z-index: 3;
  display: flex;
  .logo {
    width: 30px;
    height: 35px;
    position: absolute;
    font-size: 1em;
    padding: 10px 20px;
  }
  nav {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    background-color: #11101d;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  li {
    a {
      display: block;
      padding: 20px 20px;
      border-right: 1px solid #ffffff;
      text-decoration: none;
      font-size: 18px;
    }
    .router-link-exact-active {
      color: white;
    }
  }
  .menu {
    clear: both;
    max-height: 0;
    transition: max-height 0.2s ease-out;
  }
  .menu-icon {
    cursor: pointer;
    padding: 28px 20px;
    align-self: flex-end;
    user-select: none;
  }
  .menu-icon .navicon {
    background: #ffffff;
    display: block;
    height: 2px;
    position: relative;
    align-self: flex-start;
    transition: background 0.2s ease-out;
    width: 18px;
  }
  .menu-btn {
    display: none;
  }
  .menu-icon .navicon:before,
  .menu-icon .navicon:after {
    background: #ffffff;
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
  }
  .menu-btn:checked ~ .menu {
    // One item = 68px
    max-height: 272px;
  }
  .menu-icon .navicon:before {
    top: 5px;
  }
  .menu-icon .navicon:after {
    top: -5px;
  }
  .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }
  .menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
  }
  .menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
  }
  .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
  .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
    top: 0;
  }
}

/* 48em = 768px */
@media (min-width: 48em) {
  .header ul {
    flex-direction: row;
  }
  .header li {
    float: left;
  }
  .header li a {
    padding: 20px 30px;
  }
  .header .menu {
    clear: none;
    float: right;
    max-height: none;
  }
  .header .menu-icon {
    display: none;
  }
}
</style>

<script>
export default {
  name: "Navbar",
  methods: {
    close() {
      const menu = document.getElementsByClassName("menu")[0];
      menu.style.clear = "both";
      menu.style.transition = "max-height 0.2s ease-out";
      document.getElementById("menu-btn").checked = false;
    },
  },
};
</script>
