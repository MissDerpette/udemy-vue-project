<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <HelloWorld :navBars="navData" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      navData: [
        {
          menuItem: { text: "Home", url: 'index.html' },
          pageTitle: "Home Page",
          content: "This is the Home content",
        },
        {
          menuItem: { text: "About", url: "about.html" },
          pageTitle: "About Page",
          content: "This is the About content",
        },
        {
          menuItem: { text: "Contact", url: "contact.html" },
          pageTitle: "Contact Page",
          content: "This is the Contact content",
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  }
</style>

