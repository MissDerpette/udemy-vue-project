<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/family">Family</router-link> |
    <router-link to="/todo">To Do List</router-link> |
    <router-link to="/skills">Skills</router-link> |
    <router-link to="/aboutme"> About Me</router-link> |
    <router-link to="/projects"> Projects </router-link>

    
    
  </nav>
  <router-view/>
  <!-- <InputForm /> -->
</template>

<script>
// import InputForm from './components/InputForm.vue'

export default {
  // name: 'App',
  // components: { InputForm }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
